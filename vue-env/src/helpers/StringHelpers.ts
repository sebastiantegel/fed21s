export function format(source: string, params: string[]) {
  params.forEach(function (n, i) {
    source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
  });
  return source;
}
