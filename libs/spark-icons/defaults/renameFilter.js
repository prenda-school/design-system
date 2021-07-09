// Original credit to https://github.com/mui-org/material-ui/blob/1c5beec4be20eae30e75c69ab513bbfec3e9baaf/packages/material-ui-icons/renameFilters/material-design-icons.js
function myDestRewriter(svgPathObj) {
  let fileName = svgPathObj.base;

  fileName = fileName
    .replace(/_([0-9]+)px\.svg/, '.js')
    .replace(/(^.)|(_)(.)/g, (match, p1, p2, p3) => (p1 || p3).toUpperCase());

  if (fileName.indexOf('3dRotation') === 0) {
    fileName = `ThreeD${fileName.slice(2)}`;
  }

  if (fileName.indexOf('360') === 0) {
    fileName = `ThreeSixty${fileName.slice(3)}`;
  }

  if (fileName.indexOf('4k') === 0) {
    fileName = `FourK${fileName.slice(2)}`;
  }

  return fileName;
}

export default myDestRewriter;
