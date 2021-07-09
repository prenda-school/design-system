Original Credit to https://github.com/mui-org/material-ui/blob/1c5beec4be20eae30e75c69ab513bbfec3e9baaf/packages/material-ui-icons/README.md

# @prenda/spark-icons builder (Derived from @material-ui/icons-builder)

This tool generates Material-UI SvgIcon components for a set of svg icons.

## Running the builder

The builder script generates the Spark Design System Icons.

```sh
# in project root
npm install
npm run src:icons
```

## Process

Prerequisite: you must _manually_ bulk-export SVG icons from Figma.

- Use the [SVG Export](https://www.figma.com/community/plugin/814345141907543603/SVG-Export), with a preset that applies _no_ optimizations.
- Save each `.zip` with the name as their respective page name (`line`, `filled`, `duotone`).
- Unzip and move folders under `libs/spark-icons/svg-files`.

```bash
unzip line.zip && cp -r <source_path>/line/* <dest_path>/libs/spark-icons/svg-files/line
unzip filled.zip && cp -r <source_path>/line/* <dest_path>/libs/spark-icons/svg-files/filled
unzip duotone.zip && cp -r <source_path>/line/* <dest_path>/libs/spark-icons/svg-files/duotone
```

The build script generates the appropriate `.js` files in the `src/` folder.

### Planned

The builder script downloads Spark Design System SVG icons to the `svg-files` folder without any manual intervention.

## Advanced usage / Custom builds

`builder.js` has options available for building:

- `--output-dir` - Directory to output generated components.
- `--svg-dir` - Directory containing the source SVG icons.
- `--file-suffix` - Process only files ending with the specified suffix.
- `--rename-filter` - Apply a custom filter to rename the generated icons.
