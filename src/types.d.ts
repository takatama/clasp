/** extract the *type* of elements from a typed array */
type Unpacked<T> = T extends Array<infer U> ? U : T;

declare module 'inquirer-autocomplete-prompt-ipt';

declare module 'normalize-newline' {
  function normalizeNewline(inout: string | Buffer): string;
  export = normalizeNewline;
}
