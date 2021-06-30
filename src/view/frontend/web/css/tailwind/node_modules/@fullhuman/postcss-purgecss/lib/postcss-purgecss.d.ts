import * as postcss from "postcss";
type StringRegExpArray = Array<RegExp | string>;
type ComplexSafelist = {
    standard?: StringRegExpArray;
    deep?: RegExp[];
    greedy?: RegExp[];
    variables?: StringRegExpArray;
    keyframes?: StringRegExpArray;
};
type UserDefinedSafelist = StringRegExpArray | ComplexSafelist;
interface RawContent$0<T = string> {
    extension: string;
    raw: T;
}
type ExtractorFunction$0<T = string> = (content: T) => string[];
interface Extractors$0 {
    extensions: string[];
    extractor: ExtractorFunction$0;
}
interface UserDefinedOptions$0 {
    content?: Array<string | RawContent$0>;
    contentFunction?: (sourceFile: string) => Array<string | RawContent$0>;
    defaultExtractor?: ExtractorFunction$0;
    extractors?: Array<Extractors$0>;
    fontFace?: boolean;
    keyframes?: boolean;
    output?: string;
    rejected?: boolean;
    stdin?: boolean;
    stdout?: boolean;
    variables?: boolean;
    safelist?: UserDefinedSafelist;
    blocklist?: StringRegExpArray;
    skippedContentGlobs?: Array<string>;
}
declare const purgeCSSPlugin: postcss.PluginCreator<UserDefinedOptions$0>;
export { purgeCSSPlugin as default };
