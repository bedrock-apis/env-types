const lines = [];

const recursion = new Set();
function dumpAccess(object, path) {
   if(!object) return;
   if(typeof object === 'function' && !object.prototype) return;
   if(recursion.has(object)) return;
   recursion.add(object);
   const names = Object.getOwnPropertyNames(object);
   for(const name of names) {
      const p = `${path}.${name}`;
      const meta = Reflect.getOwnPropertyDescriptor(object, name);
      lines.push(`${p};`);
      if("value" in meta) {
         const v = meta.value;
         if(v && (typeof v == "object" || typeof v == 'function')) dumpAccess(v, p);
      } 
   }
}
dumpAccess(globalThis, "globalThis");
console.warn(`---\n${JSON.stringify({src: lines.join("\n")})}\n---`);