/* eslint-disable max-classes-per-file */
import { _isArray, _isString, _keys, _numberRange } from './index';

// Enum for Field types
export class FieldType {
  static text = new FieldType('text');

  static select = new FieldType('select');

  static multiline = new FieldType('multiline');

  constructor(name) {
    this.name = name;
  }

  static isText(fieldType) {
    return FieldType.text.name === fieldType;
  }

  static isSelect(fieldType) {
    return FieldType.select.name === fieldType;
  }

  static isMultiline(fieldType) {
    return FieldType.multiline.name === fieldType;
  }

  static getInitialValue(fieldConfig) {
    switch (fieldConfig.type) {
      case FieldType.text.name:
      case FieldType.select.name:
        return '';

      case FieldType.multiline.name:
        return _numberRange(fieldConfig.multilineCount).map(() => '');

      default:
        return '';
    }
  }

  toString() {
    return `FieldType.${this.name}`;
  }
}

export class FieldConfig {
  #fieldData;

  constructor(fieldData, formId) {
    const {
      id,
      code,
      type,
      label,
      classes,
      helpText,
      isRequired,
      placeholder,
      wrapperClasses,
      length: fieldLength,
    } = fieldData;

    this.#fieldData = fieldData;

    this.code = code;
    this.type = type;
    this.label = label || '';
    this.classes = classes || '';
    this.helpText = helpText || '';
    this.isRequired = !!isRequired;
    this.name = `${formId}.${code}`;
    this.wrapperClasses = wrapperClasses || '';
    this.id = id ? `${formId}.${id}` : this.name;
    this.length = (fieldLength || 100).toString();
    this.placeholder = placeholder || label || '';

    this.fieldLength = this.length;

    this.#initializeValidationRules();
    this.#initializeSelectProps();
    this.#initializeMultilineProps();
  }

  static create(fieldData, formId) {
    return new FieldConfig(fieldData, formId);
  }

  isTextField() {
    return FieldType.isText(this.type);
  }

  isMultilineField() {
    return FieldType.isMultiline(this.type);
  }

  isSelectField() {
    return FieldType.isSelect(this.type);
  }

  #initializeSelectProps() {
    if (!this.isSelectField()) {
      return;
    }

    this.options = this.#fieldData.options || [];
  }

  #initializeMultilineProps() {
    if (!this.isMultilineField()) {
      return;
    }

    const { multilineCount } = this.#fieldData;

    this.multilineCount = Number(multilineCount) || 1;
    this.lineNumberArray = _numberRange(this.multilineCount);

    if (this.label && _isString(this.label)) {
      this.label = [this.label];
    }

    if (this.placeholder && _isString(this.placeholder)) {
      this.placeholder = [this.placeholder];
    }

    if (this.validationRules && !_isArray(this.validationRules)) {
      this.validationRules = [this.validationRules];
    }

    // Prepare validation rules for each line
    this.lineNumberArray.forEach((lineNumber) => {
      this.validationRules[lineNumber] ??= {};

      if (lineNumber === 0 && this.isRequired) {
        this.validationRules[lineNumber].multiRequired = {
          index: lineNumber,
          field: this.code,
        };
      }
      // when no validation rule available for the index, then add nullable rule
      if (_keys(this.validationRules[lineNumber]).length === 0) {
        this.validationRules[lineNumber].nullable = true;
      }
    });
  }

  #initializeValidationRules() {
    const { validationRules } = this.#fieldData;

    this.validationRules = validationRules || [];

    if (this.isMultilineField()) {
      return;
    }

    if (this.isRequired) {
      this.validationRules.required = true;
    } else {
      this.validationRules.nullable = true;
    }
  }
}
