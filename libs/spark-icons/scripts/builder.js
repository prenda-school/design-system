// Original credit to https://github.com/mui-org/material-ui/blob/1c5beec4be20eae30e75c69ab513bbfec3e9baaf/packages/material-ui-icons/builder.js
/* eslint-disable no-console */
import fse from 'fs-extra';
import yargs from 'yargs';
import path from 'path';
import rimraf from 'rimraf';
import Mustache from 'mustache';
import Queue from '../modules/waterfall/Queue';
import util from 'util';
import glob from 'glob';
import * as svgo from 'svgo';

const globAsync = util.promisify(glob);
export const RENAME_FILTER_DEFAULT = '../defaults/renameFilter';

/**
 * Return Pascal-Cased component name.
 *
 * @param {string} destPath
 * @returns {string} class name
 */
export function getComponentName(destPath) {
  const splitRegEx = new RegExp(`[\\${path.sep}-]+`);

  const parts = destPath
    .replace('.tsx', '')
    .split(splitRegEx)
    .map((part) => part.charAt(0).toUpperCase() + part.substring(1));

  return parts.join('');
}

async function generateIndex(options) {
  const files = await globAsync(path.join(options.outputDir, '*.tsx'));
  const index = files
    .map((file) => {
      const typename = path.basename(file).replace('.tsx', '');
      return `export { default as ${typename} } from './${typename}';\n`;
    })
    .join('');

  await fse.writeFile(path.join(options.outputDir, 'index.ts'), index);
}

export function cleanPaths({ data }) {
  // Remove hardcoded color fill before optimizing so that empty groups are removed
  const input = data
    .replace(/ fill="none"/g, '')
    .replace(/ fill="#072E44"/g, '')
    .replace(/ fill-opacity="0.72"/g, '')
    .replace(/ fillOpacity="0.72"/g, '')
    .replace(/ fill-opacity=".72"/g, '')
    .replace(/ fillOpacity=".72"/g, '')
    //Replace hyphenated stroke attributes with camelCased ones
    .replace(/\bstroke-linecap\b/g, 'strokeLinecap')
    .replace(/\bstroke-linejoin\b/g, 'strokeLinejoin')
    .replace(/\bstroke-width\b/g, 'strokeWidth')
    .replace(/\bstroke-miterlimit\b/g, 'strokeMiterlimit')
    .replace(/\bstroke-opacity\b/g, 'strokeOpacity')
    // clip-rule can be safely removed when the path it's on is not a child of a clipPath
    //  this replacement doesn't check for that though, so its risky
    .replace(/ clip-rule="evenodd"/g, '')
    .replace(/ clipRule="evenodd"/g, '')
    .replace(/<rect fill="none" width="24" height="24"\/>/g, '')
    .replace(/<rect id="SVGID_1_" width="24" height="24"\/>/g, '')
    // this is always a useless clipPath for us
    .replace(
      /<clipPath id="clip0"><rect width="24" height="24" fill="white"\/><\/clipPath>/g,
      ''
    )
    .replace(/<rect width="24" height="24" fill="white"\/>/g, '');

  const result = svgo.optimize(input, {
    floatPrecision: 4,
    multipass: true,
    plugins: [
      { name: 'cleanupAttrs' },
      { name: 'removeDoctype' },
      { name: 'removeXMLProcInst' },
      { name: 'removeComments' },
      { name: 'removeMetadata' },
      { name: 'removeTitle' },
      { name: 'removeDesc' },
      { name: 'removeUselessDefs' },
      { name: 'removeXMLNS' },
      { name: 'removeEditorsNSData' },
      { name: 'removeEmptyAttrs' },
      { name: 'removeHiddenElems' },
      { name: 'removeEmptyText' },
      { name: 'removeViewBox' },
      { name: 'cleanupEnableBackground' },
      { name: 'minifyStyles' },
      { name: 'convertStyleToAttrs' },
      { name: 'convertColors' },
      { name: 'convertPathData' },
      { name: 'convertTransform' },
      { name: 'removeUnknownsAndDefaults' },
      { name: 'removeNonInheritableGroupAttrs' },
      {
        name: 'removeUselessStrokeAndFill',
        params: {
          // https://github.com/svg/svgo/issues/727#issuecomment-303115276
          removeNone: true,
        },
      },
      { name: 'removeUnusedNS' },
      { name: 'cleanupIDs' },
      { name: 'cleanupNumericValues' },
      { name: 'cleanupListOfValues' },
      { name: 'moveElemsAttrsToGroup' },
      { name: 'moveGroupAttrsToElems' },
      { name: 'collapseGroups' },
      { name: 'removeRasterImages' },
      { name: 'mergePaths' },
      { name: 'convertShapeToPath' },
      { name: 'sortAttrs' },
      { name: 'removeDimensions' },
      { name: 'removeAttrs' },
      { name: 'removeElementsByAttr' },
      { name: 'removeStyleElement' },
      { name: 'removeScriptElement' },
      { name: 'removeEmptyContainers' },
    ],
  });

  // True if the svg has multiple children
  let childrenAsArray = false;
  const jsxResult = svgo.optimize(result.data, {
    plugins: [
      {
        name: 'svgAsReactFragment',
        type: 'visitor',
        fn: () => {
          return {
            root: {
              enter(root) {
                const [svg, ...rootChildren] = root.children;
                if (rootChildren.length > 0) {
                  throw new Error('Expected a single child of the root');
                }
                if (svg.type !== 'element' || svg.name !== 'svg') {
                  throw new Error('Expected an svg element as the root child');
                }

                if (svg.children.length > 1) {
                  childrenAsArray = true;
                  svg.children.forEach((svgChild, index) => {
                    svgChild.addAttr({ name: 'key', value: index });
                    // Original name will be restored later
                    // We just need a mechanism to convert the resulting
                    // svg string into an array of JSX elements
                    svgChild.renameElem(`SVGChild:${svgChild.name}`);
                  });
                }
                root.spliceContent(0, svg.children.length, svg.children);
              },
            },
          };
        },
      },
    ],
  });

  // Clean xml paths
  let paths = jsxResult.data
    .replace(/"\/>/g, '" />')
    .replace(/fill-opacity=/g, 'fillOpacity=')
    .replace(/xlink:href=/g, 'xlinkHref=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/ clip-path=".+?"/g, '') // Fix visibility issue and save some bytes.
    .replace(/<clipPath.+?<\/clipPath>/g, ''); // Remove unused definitions

  const viewBoxMatch = result.data.match(/viewBox=".+?"/g);
  const viewBox = viewBoxMatch
    ? viewBoxMatch[0].replace(/(viewBox=)|(")/g, '')
    : null;
  const [width, height] = viewBox
    .split(' ')
    .slice(2)
    .map((dim) => Number(dim));

  if (width !== 24 || height !== 24) {
    // Keep a maximum of 2 decimals
    const scaleX = Math.round((24 / width) * 100) / 100;
    const scaleY = Math.round((24 / height) * 100) / 100;
    paths = paths.replace('clipPath="url(#b)" ', '');
    paths = paths.replace(
      /<path /g,
      `<path transform="scale(${scaleX}, ${scaleY})" `
    );
  }

  if (childrenAsArray) {
    const pathsCommaSeparated = paths
      // handle self-closing tags
      .replace(/key="\d+" \/>/g, '$&,')
      // handle the rest
      .replace(/<\/SVGChild:(\w+)>/g, '</$1>,');
    paths = `[${pathsCommaSeparated}]`;
  }
  paths = paths.replace(/SVGChild:/g, '');

  return paths;
}

async function worker({ svgPath, options, renameFilter, template }) {
  process.stdout.write('.');

  const normalizedSvgPath = path.normalize(svgPath);
  const svgPathObj = path.parse(normalizedSvgPath);
  const innerPath = path
    .dirname(normalizedSvgPath)
    .replace(options.svgDir, '')
    .replace(path.relative(process.cwd(), options.svgDir), ''); // for relative dirs
  const destPath = renameFilter(svgPathObj, innerPath, options);

  const outputFileDir = path.dirname(path.join(options.outputDir, destPath));
  const exists2 = await fse.exists(outputFileDir);

  if (!exists2) {
    console.log(`Making dir: ${outputFileDir}`);
    fse.mkdirpSync(outputFileDir);
  }

  const data = await fse.readFile(svgPath, { encoding: 'utf8' });
  const paths = cleanPaths({ svgPath, data });

  const fileString = Mustache.render(template, {
    paths,
    componentName: getComponentName(destPath),
  });

  const absDestPath = path.join(options.outputDir, destPath);
  await fse.writeFile(absDestPath, fileString);
}

export async function main(options) {
  try {
    let originalWrite;

    options.glob = options.glob || '/**/*.svg';
    options.innerPath = options.innerPath || '';
    options.renameFilter = options.renameFilter || RENAME_FILTER_DEFAULT;
    options.disableLog = options.disableLog || false;

    // Disable console.log opt, used for tests
    if (options.disableLog) {
      originalWrite = process.stdout.write;
      process.stdout.write = () => {
        return;
      };
    }

    // Clean old files
    rimraf.sync(`${options.outputDir}/*.js`);
    rimraf.sync(`${options.outputDir}/*.ts`);
    rimraf.sync(`${options.outputDir}/*.tsx`);

    let renameFilter = options.renameFilter;
    if (typeof renameFilter === 'string') {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      renameFilter = require(renameFilter).default;
    }
    if (typeof renameFilter !== 'function') {
      throw Error('renameFilter must be a function');
    }
    const exists1 = await fse.exists(options.outputDir);
    if (!exists1) {
      await fse.mkdir(options.outputDir);
    }

    const [svgPaths, template] = await Promise.all([
      globAsync(path.join(options.svgDir, options.glob)),
      fse.readFile(path.join(__dirname, '../defaults/templateSvgIcon.js'), {
        encoding: 'utf8',
      }),
    ]);

    const queue = new Queue(
      (svgPath) =>
        worker({
          svgPath,
          options,
          renameFilter,
          template,
        }),
      { concurrency: 8 }
    );

    queue.push(svgPaths);
    await queue.wait({ empty: true });

    await fse.copy(path.join(__dirname, '../custom'), options.outputDir);

    await generateIndex(options);

    if (options.disableLog) {
      // bring back stdout
      process.stdout.write = originalWrite;
    }
  } catch (err) {
    console.log(err);
  }
}

if (require.main === module) {
  const argv = yargs
    .usage("Build JSX components from SVG's.\nUsage: $0")
    .demand('output-dir')
    .describe('output-dir', 'Directory to output jsx components')
    .demand('svg-dir')
    .describe('svg-dir', 'SVG directory')
    .describe('glob', 'Glob to match inside of --svg-dir. Default **/*.svg')
    .describe(
      'inner-path',
      '"Reach into" subdirs, since libraries like material-design-icons' +
        ' use arbitrary build directories to organize icons' +
        ' e.g. "action/svg/production/icon_3d_rotation_24px.svg"'
    )
    .describe(
      'file-suffix',
      'Filter only files ending with a suffix (pretty much only for @material-ui/icons)'
    )
    .describe(
      'rename-filter',
      `Path to JS module used to rename destination filename and path.
        Default: ${RENAME_FILTER_DEFAULT}`
    ).argv;
  main(argv);
}
