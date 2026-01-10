type QuickJSGlobals = "Object" | "Function" | "Error" | "WeakRef" | "FinalizationRegistry" | "EvalError" | "RangeError" | "ReferenceError" | "SyntaxError" | "TypeError" | "URIError" | "InternalError" | "AggregateError" | "Array" | "parseInt" | "parseFloat" | "isNaN" | "isFinite" | "decodeURI" | "decodeURIComponent" | "encodeURI" | "encodeURIComponent" | "escape" | "unescape" | "Infinity" | "NaN" | "undefined" | "Number" | "Boolean" | "String" | "Math" | "Reflect" | "Symbol" | "eval" | "globalThis" | "Date" | "RegExp" | "JSON" | "Proxy" | "Map" | "Set" | "WeakMap" | "WeakSet" | "ArrayBuffer" | "SharedArrayBuffer" | "Uint8ClampedArray" | "Int8Array" | "Uint8Array" | "Int16Array" | "Uint16Array" | "Int32Array" | "Uint32Array" | "BigInt64Array" | "BigUint64Array" | "Float32Array" | "Float64Array" | "DataView" | "Promise" | "BigInt" | "console" | "print";
type QuickJSGlobal = { [k in QuickJSGlobals]: void };
type CurrentGlobal = { [k in keyof typeof globalThis]: void };
const quickJS: QuickJSGlobal = null!;
const currentJS: CurrentGlobal = null!;
export const a = 0;

// Correct Type check, we need to add specified missing apis
console.log(quickJS satisfies CurrentGlobal, currentJS satisfies QuickJSGlobal);

