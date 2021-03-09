
exports.min = function min (array) {
  return (array !== undefined && array.length !=0) ? array.sort((a,b)=>a-b)[0] : 0;
}

exports.max = function max (array) {
  return (array !== undefined && array.length !=0) ? array.sort((a,b)=>a-b)[array.length - 1] : 0;
}

exports.avg = function avg (array) {
  if (array === undefined || array.length ==0) return 0;
  let res=0;
  array.map(item=>res = res + item);
  return res/array.length;
}
