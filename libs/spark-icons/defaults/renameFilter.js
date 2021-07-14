// Original credit to https://github.com/mui-org/material-ui/blob/1c5beec4be20eae30e75c69ab513bbfec3e9baaf/packages/material-ui-icons/renameFilters/material-design-icons.js
//  Changes made since

const SUFFIXES = {
  line: '',
  filled: 'Filled',
  duotone: 'Duotone',
};
const KNOWN_SUFFIXES = Object.keys(SUFFIXES);

function myDestRewriter(svgPathObj) {
  let fileName = svgPathObj.base;

  fileName = fileName
    .replace(/.svg/, '.tsx')
    .replace(
      /(^.)|(\s*_\s*)(.)|(\s*-\s*)(.)|(\s+)(.)/g,
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

  fileName = fileName.split('.tsx')[0].concat(suffix).concat('.tsx');

  return fileName;
}

export default myDestRewriter;
