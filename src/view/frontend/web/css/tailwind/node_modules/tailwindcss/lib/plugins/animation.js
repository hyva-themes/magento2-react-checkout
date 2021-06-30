"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _parseAnimationValue = _interopRequireDefault(require("../util/parseAnimationValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default() {
  return function ({
    matchUtilities,
    theme,
    variants,
    prefix
  }) {
    let prefixName = name => prefix(`.${name}`).slice(1);

    let keyframes = Object.fromEntries(Object.entries(theme('keyframes')).map(([key, value]) => {
      return [key, [{
        [`@keyframes ${prefixName(key)}`]: value
      }, {
        respectVariants: false
      }]];
    }));
    matchUtilities({
      animate: (value, {
        includeRules
      }) => {
        let {
          name: animationName
        } = (0, _parseAnimationValue.default)(value);

        if (keyframes[animationName] !== undefined) {
          includeRules(keyframes[animationName], {
            respectImportant: false
          });
        }

        if (animationName === undefined || keyframes[animationName] === undefined) {
          return {
            animation: value
          };
        }

        return {
          animation: value.replace(animationName, prefixName(animationName))
        };
      }
    }, {
      values: theme('animation'),
      variants: variants('animation')
    });
  };
}