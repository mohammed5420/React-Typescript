import react from 'react';

// type arr = Array<number>
// type arrN = number[]
const last =<T>(arr:Array<any>):T => {
return arr[arr.length - 1];
}
const l = last(['a', 'b', 'b']);


