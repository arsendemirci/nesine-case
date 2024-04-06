export const resolve = (path, obj, separator = ".") => {
  var props = Array.isArray(path) ? path : path.split(separator);
  return props.reduce((prev, curr) => prev?.[curr], obj);
};
