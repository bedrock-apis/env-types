/*! *****************************************************************************
Copyright 2026 Bedrock APIs

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
***************************************************************************** */

type Console = {
    log: (...data: any[]) => void;
    warn: (...data: any[]) => void;
    error: (...data: any[]) => void;
    info: (...data: any[]) => void;
};
declare var console: Console;
declare var print: Console["info"]; //iS it log, or info? is info equal to log? 

interface InternalError extends Error { }
interface InternalErrorConstructor {
    new(message?: string): InternalError;
    (message?: string): InternalError;
    readonly prototype: InternalError;
}
declare var InternalError: InternalErrorConstructor;

interface SetConstructor {
    /**
     * @deprecated This function is not supposed to be on Set constructor ref: https://github.com/quickjs-ng/quickjs/issues/714
     */
    groupBy<K, T>(
        items: Iterable<T>,
        keySelector: (item: T, index: number) => K,
    ): Map<K, T[]>;
}

interface Date {
    getYear(): number;
    setYear(year: number): number;
    toGMTString(): string;
}

interface Object {
    /**
     * @internal
     * @deprecated
     * @protected
     * @ignore
     */
    get __proto__(): object | null;
    set __proto__(prototype: object | null);

    /** @deprecated */
    __defineGetter__(v: PropertyKey, getter: () => any): void;
    
    /** @deprecated */
    __defineSetter__(v: PropertyKey, setter: (val: any) => void): void;
    
    /** @deprecated */
    __lookupGetter__(v: PropertyKey): (() => any) | undefined;
    
    /** @deprecated */
    __lookupSetter__(v: PropertyKey): ((val: any) => void) | undefined;
}

interface ObjectConstructor {
    /**
     * Get class name
     * @param value 
     */
    __getClass(value?: any): string;
}

interface String {
    /**
     * Quotes the string
     * @param value 
     */
    __quote(): string;
}