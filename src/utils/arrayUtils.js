export const resolve = (path, obj, separator = ".") => {
  var props = Array.isArray(path) ? path : path.split(separator);
  return props.reduce((prev, curr) => prev?.[curr], obj);
};

export const factor = (arr, prop) => {
  if (!arr.length) return 0;
  if (arr.length === 1) return arr[0][prop];

  let product = arr.reduce((prevValue, curValue) => {
    return prevValue * curValue[prop];
  }, 1);

  return Math.round(product * 100) / 100;
};
