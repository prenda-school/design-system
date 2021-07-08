const SUFFIXES = {
  line: '',
  filled: 'Filled',
  duotone: 'Duotone',
};
const KNOWN_SUFFIXES = Object.keys(SUFFIXES);

function myDestRewriter(svgPathObj) {
  let fileName = svgPathObj.base;

  fileName = fileName
    .replace(/.svg/, '.js')
    .replace(
      /(^.)|(_)(.)|( - )(.)|( )(.)/g,
      (match, p1, p2, p3, p4, p5, p6, p7) =>
        (p1 || p3 || p5 || p7).toUpperCase()
    );

  if (fileName.indexOf('360') === 0) {
    fileName = `ThreeSixty${fileName.slice(3)}`;
  }

  const maybeSuffix = svgPathObj.dir.split('/').slice(-1)[0];
  const suffix = KNOWN_SUFFIXES.includes(maybeSuffix)
    ? SUFFIXES[maybeSuffix]
    : '';

  fileName = fileName.slice(0, -3).concat(suffix).concat(fileName.slice(-3));

  return fileName;
}

export default myDestRewriter;
