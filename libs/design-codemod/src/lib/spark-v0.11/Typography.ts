import { FileInfo, API } from 'jscodeshift';

const variantMap = new Map([
  ['smallcaps-lg', 'uppercase-lg'],
  ['smallcaps-md', 'uppercase-md'],
  ['smallcaps-sm', 'uppercase-sm'],
]);
const colorMap = new Map([
  ['textOnLight', 'onLight'],
  ['textOnLightLowContrast', 'onLightLowContrast'],
  ['textOnDark', 'onDark'],
  ['textOnDarkLowContrast', 'onDarkLowContrast'],
]);

export default function transformer(file, { jscodeshift }) {
  return jscodeshift(file.source)
    .findJSXElements('Typography')
    .forEach((path) => {
      path.node.openingElement.attributes.forEach((node) => {
        if (node.type === 'JSXAttribute') {
          if (
            node.name.name === 'variant' &&
            variantMap.has(node.value.value)
          ) {
            node.value = `"${variantMap.get(node.value.value)}"`;
          } else if (
            node.name.name === 'color' &&
            colorMap.has(node.value.value)
          ) {
            node.value = `"${colorMap.get(node.value.value)}"`;
          }
        }
      });
    })
    .toSource();
}
