# Derived from @material-ui/icons-builder

This tool generates Material-UI SvgIcon components for a set of svg icons.

## Running the builder

The builder script downloads and builds the Material Design Icons.

```sh
# in project root
npm install
npm run src:icons
```

## Process

Prerequisite: you must _manually_ bulk-export SVG icons from Figma. 
- Use the [SVG Export](https://www.figma.com/community/plugin/814345141907543603/SVG-Export), with a preset that applies _no_ optimizations.
- Save each `.zip` with the name as their respective page name (`line`, `filled`, `duotone`).
- Unzip and move folders under `libs/spark-icons/spark-design-icons`.

The build script generates the appropriate `.js` files in the `build` folder, and creates a `package.json`.

### Planned

The build script downloads Spark Design System SVG icons to the `spark-design-icons` folder (no manual steps).

## Advanced usage / Custom builds

`builder.js` has options available for building:

* `--output-dir` - Directory to output generated components.
* `--svg-dir` - Directory containing the source SVG icons.
* `--inner-path` - "Reach into" subdirs, since libraries often use arbitrary build directories to organize icons, e.g. "duotone/*".
* `--file-suffix` - Process only files ending with the specified suffix.
* `--rename-filter`  - Apply a custom filter to rename the generated icons.