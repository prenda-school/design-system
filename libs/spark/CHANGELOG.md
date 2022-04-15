# Changelog

## [vNext](https://github.com/prenda-school/prenda-spark/compare/v1.0.0-alpha.4...vNext) (yyyy-mm-dd)

## [v1.0.0-alpha.4](https://github.com/prenda-school/prenda-spark/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2022-04-15)

### Features

- **CssBaseline**
  - No longer advised to wrap this in `ThemeProvider`. The global styles will be injected regardless.
- **FontFacesBaseline**
  - Initial implementation.
  - Injects global font-face declarations used by theme's typography, without the need to be wrapped in a **ThemeProvider** (or **SparkThemeProvider**).
  - Extraction of the global font-face declarations previously injected by **CssBaseline** (only when wrapped in **SparkThemeProvider**).

### Fixes

- **Banner**
  - Styles: apply focus styles on `:focus-visible` not `:focus`.
- **Button**
  - Styles: apply focus styles on `:focus-visible` not `:focus`.
- **Checkbox**
  - Styles: apply focus styles on `:focus-visible` not `:focus`.
- **FormControlLabel**
  - Styles: apply focus styles on `:focus-visible` not `:focus`.
- **IconButton**
  - Styles: apply focus styles on `:focus-visible` not `:focus`.
- **InputBase**
  - Styles: apply focus styles on `:focus-visible` not `:focus`.
- **MenuItem**
  - Styles: apply focus styles on `:focus-visible` not `:focus`.
- **NavBarButton**
  - Styles: apply focus styles on `:focus-visible` not `:focus`.
- **Pagination**
  - Styles: apply focus styles on `:focus-visible` not `:focus`.
- **PaginationItem**
  - Styles: apply focus styles on `:focus-visible` not `:focus`.
- **Radio**
  - Styles: apply focus styles on `:focus-visible` not `:focus`.
- **SectionMessage**
  - Styles: apply focus styles on `:focus-visible` not `:focus`.
- **Select**
  - Styles: apply focus styles on `:focus-visible` not `:focus`.
- **StepIcon**
  - Styles: apply focus styles on `:focus-visible` not `:focus`.
- **Switch**
  - Styles: apply focus styles on `:focus-visible` not `:focus`.
- **Tab**
  - Styles: apply focus styles on `:focus-visible` not `:focus`.
- **Tag**
  - Styles: apply focus styles on `:focus-visible` not `:focus`.

### Breaking

- **CssBaseline**
  - No longer injects global font-face declarations.
  - Migration: render **FontFacesBaseline** (`<FontFacesBaseline />`) at the root of your app (or anywhere) (only needed once per app).
- **SparkThemeProvider**
  - No longer renders **CssBaseline**.
  - Migration: render **CssBaseline** (`<CssBaseline />`) at the root of your app (or anywhere) (only needed once per app).

### Unstable Preview

_This section details previews of breaking changes or experimental features that are subject to breaking changes at any time._

- **unstable_createSvgIcon**
  - Exported from package root for public / consumer use -- no longer internal.
- **unstable_fontFaces**
  - Removed reference to `.woff` files.
  - New asset paths are expected to be served by the corresponding application server. Consumers should copy-paste the contents of `libs/spark/public/pds-assets-v1` into their application so they are served at the root path of their URL.
- **Unstable_Button**
  - Initial implementation of **Button** replacement according to PDS v2.
  - Supports rendering _without_ `theme` being in an ancestor `ThemeProvider`.
  - CSS API Changes:
    - Removed all class keys _except `"root"`, `"label"`, `"startIcon"`, and `"endIcon"`_.
  - Props API Changes:
    - `classes`: Removed all class keys _except `"root"`, `"label"`, `"startIcon"`, and `"endIcon"`_.
    - `color`: Removed.
    - `disableElevation`: Removed.
    - `disableFocusRipple`: Removed.
    - `disableRipple`: Removed.
    - `disableTouchRipple`: Removed.
    - `centerRipple`: Removed.
    - `focusRipple`: Removed.
    - `TouchRippleProps`: Removed.
    - `variant`:
      - Removed values: `contained`, `outlined`, `text`.
      - Added values: `primary`, `stroked`, `ghost`, `destructive`.
        - Only `destructive` is new, the others were renamed.
  - Planned Migration from current `Button`:
    - `color={*}` -> _removed_
    - `disableElevation` -> _removed_
    - `disableFocusRipple` -> _removed_
    - `disableRipple` -> _removed_
    - `disableTouchRipple` -> _removed_
    - `centerRipple` -> _removed_
    - `focusRipple` -> _removed_
    - `TouchRippleProps={*}` -> _removed_
    - `variant="contained"` -> `variant="primary"`
    - `variant="outlined"` -> `variant="stroked"`
    - `variant="text"` -> `variant="ghost"`
- **Unstable_CssBaseline**
  - Initial implementation of **CssBaseline** replacement according to PDS v2.
  - Supports rendering _without_ `theme` being in an ancestor `ThemeProvider`.
- **Unstable_FontFacesBaseline**
  - Initial implementation of **FontFacesBaseline** replacement according to PDS v2.
  - Supports rendering _without_ `theme` being in an ancestor `ThemeProvider`.
- **Unstable_FormHelperText**
  - Initial implementation of **FormHelperText** replacement according to PDS v2.
  - Supports rendering _without_ `theme` being in an ancestor `ThemeProvider`.
  - CSS API Changes:
    - Removed all class keys _except `"root"`_.
  - Props API Changes:
    - `classes`: Removed all class keys _except `"root"`_.
    - `filled`: Removed.
    - `margin`: Removed.
    - `variant`: Removed.
- **Unstable_Input**
  - Initial implementation of **Input** replacement according to PDS v2.
  - Supports rendering _without_ `theme` being in an ancestor `ThemeProvider`.
  - CSS API Changes:
    - Removed all class keys _except `"root"`, `"input"`_.
  - Props API Changes:
    - `classes`: Removed all class keys _except `"root"`, `"input"`_.
    - `color`: Removed.
    - `endAdornment`: Removed.
    - `margin`: Removed.
    - `leadingEl`:
      - Added.
      - Replaces `startAdornment` and removes the need for consumers to wrap the content in **InputAdornment** by making that the default behavior.
    - `rows`: Removed.
    - `rowsMax`: Removed.
    - `rowsMin`: Removed.
    - `startAdornment`: Removed.
    - `success`:
      - Added.
      - If present (truthy), the input will indicate a success. (Similar to behavior of `error`, but opposite semantic.)
    - `trailingEl`:
      - Added.
      - Replaces `endAdornment` and removes the need for consumers to wrap the content in **InputAdornment** by making that the default behavior.
  - Planned Migration from current `Input`:
    - `color={*}` -> _removed_
    - `endAdornment={<InputAdornment position="end"><Icon /></InputAdornment>}` -> `trailingEl={<Icon />}`
    - `margin={*}` -> _removed_
    - `rows={*}` -> `minRows={*}`
    - `rowsMax={*}` -> `maxRows={*}`
    - `rowsMin={*}` -> `minRows={*}`
    - `startAdornment={<InputAdornment position="end"><Icon /></InputAdornment>}` -> `leadingEl={<Icon />}`
- **Unstable_InputAdornment**
  - Initial implementation of **InputAdornment** replacement according to PDS v2.
  - Supports rendering _without_ `theme` being in an ancestor `ThemeProvider`.
  - CSS API Changes:
    - Removed all class keys _except `"root"`_.
  - Props API Changes:
    - `classes`: Removed all class keys _except `"root"`_.
- **Unstable_InputLabel**
  - Initial implementation of **InputLabel** replacement according to PDS v2.
  - Supports rendering _without_ `theme` being in an ancestor `ThemeProvider`.
  - CSS API Changes:
    - Removed all class keys _except `"root"`_.
  - Props API Changes:
    - `classes`: Removed all class keys _except `"root"`_.
    - `color`: Removed.
    - `disableAnimation`: Removed.
    - `filled`: Removed.
    - `margin`: Removed.
    - `shrink`: Removed.
    - `variant`: Removed.
- **Unstable_Link**
  - Initial implementation of `Link` replacement according to PDS v2.
  - Supports rendering _without_ `theme` being in an ancestor `ThemeProvider`.
  - CSS API Changes:
    - Removed all class keys _except `"root"`_.
  - Props API Changes:
    - `classes`
      - Removed all class keys _except `"root"`_.
    - `color`
      - Removed values: `"initial"`, `"primary"`, `"secondary"`, `"textPrimary"`, `"textSecondary"`, `"error"`.
      - Added value: `"default"` (default).
  - Planned migration from current `Link`:
    - `color="initial"` -> _removed_
    - `color="primary"` -> _removed_
    - `color="secondary"` -> _removed_
    - `color="textPrimary"` -> _removed_
    - `color="textSecondary"` -> _removed_
    - `color="error"` -> _removed_
- **Unstable_SectionMessage**
  - Initial implementation of **SectionMessage** replacement according to PDS v2.
  - Supports rendering _without_ `theme` being in an ancestor `ThemeProvider`.
  - CSS API Changes:
    - Removed all class keys _except `"root"`_.
  - Props API Changes:
    - `classes`: Removed all class keys _except `"root"`_.
    - `title`:
      - Added.
      - Replaces use of the **SectionMessageTitle** component which will be removed in the next major version.
- **Unstable_Select**
  - Initial implementation of **Select** replacement according to PDS v2.
  - Supports rendering _without_ `theme` being in an ancestor `ThemeProvider`.
  - CSS API Changes:
    - Removed all class keys _except `"root"`, `"icon"`, `"iconOpen"`, `"nativeInput"`_.
  - Props API Changes:
    - `classes`: Removed all class keys _except `"root"`, `"icon"`, `"iconOpen"`, `"nativeInput"`_.
    - `label`: Removed.
    - `labelId`: Removed.
    - `labelWidth`: Removed.
    - `variant`: Removed.
    - See **Unstable_Input** for additional, underlying changes.
- **Unstable_SvgIcon**
  - Initial implementation of `SvgIcon` replacement according to PDS v2.
  - Supports rendering _without_ `theme` being in an ancestor `ThemeProvider`.
  - CSS API Changes:
    - Removed all class keys _except `"root"`_.
  - Props API Changes:
    - `classes`
      - Removed all class keys _except `"root"`_.
    - `color`
      - Removed values: `"dark"`, `"light"`, `"white"`, `"disabled"`, `"error"`, `"success"`, `"warning"`, `"info"`.
      - Added values: `"normal"`, `"secondary"`, `"inverse"`, `"inverseSecondary"`
    - `fontSize`
      - Removed value: `"default"`.
      - Added value: `"xlarge"`.
    - `lowContrast`
      - Removed.
  - Planned migration (from current **SvgIcon**):
    - `color="dark"` -> `color="normal"`
    - `color="light"` -> `color="inverse"`
    - `color="white"` -> _removed_
    - `color="disabled"` -> _removed_
    - `color="error"` -> _removed_
    - `color="success"` -> _removed_
    - `color="warning"` -> _removed_
    - `color="info"` -> _removed_
    - `fontSize="default"` -> `fontSize="medium"`
    - `lowContrast color="dark"` -> `color="secondary"`
    - `lowContrast color="light"` -> `color="inverseSecondary"`
    - `lowContrast"` -> _removed_
- **Unstable_TextField**
  - Initial implementation of **TextField** replacement according to PDS v2.
  - Supports rendering _without_ `theme` being in an ancestor `ThemeProvider`.
  - Props API Changes:
    - `variant`: Removed.
    - See **Unstable_Input** and **Unstable_Select** for additional, underlying changes.

## [v1.0.0-alpha.3](https://github.com/prenda-school/prenda-spark/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) (yyyy-mm-dd)

### Unstable Preview

_This section details previews of breaking changes or experimental features that are subject to breaking changes at any time._

The term "unstable / unstable preview" replaces "next" and the prefix "`unstable_`" replaces "`__next__`".

- **theme**
  - Renamed unstable properties.
  - Migration:
    - `theme.__next__palette` -> `theme.unstable_palette`
    - `theme.__next__typography` -> `theme.unstable_typography`
- **unstable_fontFaces**
  - Renamed, see below.
  - Added:
    - Inter Semibold font files (see `/libs/spark/public/fonts`) and font face declarations.
      - `unstable_fontFaces.interSemibold`
      - `unstable_fontFaces.interSemiboldItalic`
  - Fixed:
    - Inter "semibold" font weight (600) misnamed "bold" and pulling bold font file.
- **unstable_palette**
  - Renamed, see below.
- **unstable_typography**
  - Renamed, see below.
- **\_\_next\_\_fontFaces**
  - Removed.
  - Migration:
    - `__next__fontFaces` -> `unstable_fontFaces`
- **\_\_next\_\_palette**
  - Removed.
  - Migration:
    - `__next__palette` -> `unstable_palette`
- **\_\_next\_\_typography**
  - Removed.
  - Migration:
    - `__next__typography` -> `unstable_typography`
- **Unstable_Typography**
  - Initial implementation of `Typography` replacement according to PDS v2.
  - Supports rendering _without_ `theme` being in an ancestor `ThemeProvider`.
  - Planned migration from current `Typography`:
    - "color" prop values:
      - `"dark"` -> _omit_ or `"default"`
      - `"light"` -> `"inverse"`
    - "classes" prop:
      - Removed all class keys _except `"root"`_. (Styling is determined dynamically by props, with single specificity -- consumers should replicate.)
    - "lowContrast" prop:
      - Removed.
    - "variant" prop:
      - `"display-lg"` -> `"display"`
      - `"display-md"` -> `"display"`
      - `"display-sm"` -> `"display"`
      - `"heading-xl"` -> `"T32"`
      - `"heading-lg"` -> `"T28"`
      - `"heading-md"` -> `"T22"`
      - `"heading-sm"` -> `"T18"`
      - `"uppercase-lg"` -> `"T14"`
      - `"uppercase-md"` -> `"T14"`
      - `"uppercase-sm"` -> `"T14"`
      - `"paragraph-xl"` -> `"body"`
      - `"paragraph-lg"` -> `"body"`
      - `"paragraph-md"` -> `"description"`
      - `"paragraph-sm"` -> `"description"`
      - `"label-xl"` -> `"label"`
      - `"label-xl-strong"` -> `"label"`
      - `"label-lg"` -> `"label"`
      - `"label-lg-strong"` -> `"label"`
      - `"label-md"` -> `"label"`
      - `"label-md-strong"` -> `"label"`
      - `"label-sm"` -> `"label"`
      - `"label-sm-strong"` -> `"label"`
      - `"code-lg"` -> `"code"`
      - `"code-md"` -> `"code"`
      - `"code-sm"` -> `"code"`

## [v1.0.0-alpha.2](https://github.com/prenda-school/prenda-spark/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2022-02-25)

### **next**

_This section details previews of breaking changes or experimental features that are subject to breaking changes at any time._

- **\_\_next\_\_typography**
  - Added `font-feature-settings` for "body" and "description" variants.
  - Added "label" variant (with `font-feature-settings`).
  - Planned migration:
    - "labels"
      - `typography["label-xl"]` -> `typography.label`
      - `typography["label-xl-strong"]` -> `typography.label`
      - `typography["label-lg"]` -> `typography.label`
      - `typography["label-lg-strong"]` -> `typography.label`
      - `typography["label-md"]` -> `typography.label`
      - `typography["label-md-strong"]` -> `typography.label`
      - `typography["label-sm"]` -> `typography.label`
      - `typography["label-sm-strong"]` -> `typography.label`

## [v1.0.0-alpha.1](https://github.com/prenda-school/prenda-spark/compare/v0.16.0...v1.0.0-alpha.1) (2021-11-30)

Transitioned to new version format for pre-1.0 releases: `v1.0.0-alpha.XXX` where `XXX` is the iteration.

### Fixes

- **Button**
  - Styling: incorrect default height when `variant=("outlined" | "text")`

### Features

- **Breadcrumbs**
  - Re-exported with custom styles and props.
- **Collapse**
  - Backport support for `orientation="horizontal"` from MUI v5.
- **Link**
  - Re-exported with custom styles and props.

### **next**

_This section details previews of breaking changes or experimental features that are subject to breaking changes at any time._

- **theme**
  - Attached preview properties: `theme.
  - Migration:
    - `theme.__next__palette`
    - `theme.__next__typography`
- **\_\_next\_\_fontFaces**
  - Implemented according to PDS v2.
  - As a consumer, you should serve the contents of `libs/spark/public/fonts/` directory on your server at the same path, `fonts/`. Do not change any file or directory names and structure, as they are exactly what is expected by the injected font face declarations.
- **\_\_next\_\_palette**
  - Implemented according to PDS v2.
  - Preview: `theme.__next__palette.*`
  - Descriptive changes from current `palette` (PDS v1):
    - "tertiary":
      - renamed to just "colors".
      - removed "orange".
      - added "teal", "magenta".
      - expanded from 5 to 7 options.
    - "brand":
      - renamed "peach" to "lightOrange".
    - "neutrals":
      - replaced descriptive field names with numeric keys.
    - "background":
      - removed "lightBlue" option.
      - replaced color references with aliases.
    - "text":
      - replaced color type ("light", "dark") references with semantic aliases ("heading", "body", "subdued", ..., "inverseHeading", ...).
      - expanded from 4 to 12 options.
    - "tones":
      - New! for skin tones.
      - added "warm", "neutral", "cool" -- each with 5 options.
  - Planned migration:
    - "brand":
      - `palette.brand.peach` -> `palette.brand.lightOrange`
    - "full palette" / "tertiary" colors / "colors":
      - `palette.red[1]` -> `palette.red[100]`
      - `palette.red[2]` -> `palette.red[300]`
      - `palette.red[3]` -> `palette.red[500]`
      - `palette.red[4]` -> `palette.red[600]`
      - `palette.red[5]` -> `palette.red[700]`
      - `palette.orange[1...5]` -> **removed**
      - `palette.yellow[1]` -> `palette.yellow[100]`
      - `palette.yellow[2]` -> `palette.yellow[300]`
      - `palette.yellow[3]` -> `palette.yellow[500]`
      - `palette.yellow[4]` -> `palette.yellow[600]`
      - `palette.yellow[5]` -> `palette.yellow[700]`
      - `palette.blue[1]` -> `palette.blue[100]`
      - `palette.blue[2]` -> `palette.blue[300]`
      - `palette.blue[3]` -> `palette.blue[500]`
      - `palette.blue[4]` -> `palette.blue[600]`
      - `palette.blue[5]` -> `palette.blue[700]`
      - `palette.purple[1]` -> `palette.purple[100]`
      - `palette.purple[2]` -> `palette.purple[300]`
      - `palette.purple[3]` -> `palette.purple[500]`
      - `palette.purple[4]` -> `palette.purple[600]`
      - `palette.purple[5]` -> `palette.purple[700]`
      - `palette.green[1]` -> `palette.green[100]`
      - `palette.green[2]` -> `palette.green[400]` (_note: 400, not 300_)
      - `palette.green[3]` -> `palette.green[500]`
      - `palette.green[4]` -> `palette.green[600]`
      - `palette.green[5]` -> `palette.green[700]`
    - "product colors" or "condition state" colors:
      - `palette.error.main` -> removed (_note: if you require this alias, use `palette.red[700]`_)
      - `palette.warning.main` -> removed (_note: if you require this alias, use `palette.yellow[500]`_)
      - `palette.info.main` -> removed (_note: if you require this alias, use `palette.blue[600]`_)
      - `palette.success.main` -> removed (_note: if you require this alias, use `palette.green[600]`_)
    - "neutrals":
      - `palette.common.white` -> `palette.neutral[0]`
      - `palette.grey.lighter` -> `palette.neutral[60]`
      - `palette.grey.light` -> `palette.neutral[70]`
      - `palette.grey.medium` -> `palette.neutral[80]`
      - `palette.grey.dark` -> `palette.neutral[90]`
      - `palette.blue[5]` -> `palette.neutral[600]`
    - "background":
      - `palette.common.white` -> `palette.background.default`
      - `palette.background.lightGrey` -> `palette.background.alternative`
      - `palette.background.lightBlue` -> **removed**
      - `palette.background.blue` -> `palette.background.brand`
      - `palette.background.navy` -> `palette.background.inverse`
    - "text":
      - `palette.text.dark` -> `palette.text.(heading|body|icon)` (_use judgement_)
      - `palette.text.darkLowContrast` -> `palette.text.(subdued|secondaryIcon)` (_use judgement_)
      - `palette.text.light` -> `palette.text.(inverseHeading|inverseBody|inverseIcon)` (_use judgement_)
      - `palette.text.lightLowContrast` -> `palette.text.(inverseSubdued|inverseSecondaryIcon)` (_use judgement_)
- **\_\_next\_\_typography**
  - Implemented according to PDS v2.
  - Preview: `theme.__next__typography.*`
  - Descriptive changes from current `typography` (PDS v1):
    - Overall, "sizes" like "large", "medium", "small", etc. have been removed.
    - "display"
      - condensed from 3 to 1 variants: "display".
    - "heading"
      - term is not reflected in new variant names.
      - roughly corresponds to variants with the new "T" prefix (followed by the font size, e.g. "T22").
    - "upppercase"
      - term is not reflected in new variant names.
      - condensed from 3 to 1 variants: "T14".
    - "labels"
      - removed.
    - "paragraph"
      - term is not reflected in new variant names.
      - condensed from 4 to 2 variants: "body" and "description".
    - "code"
      - condensed from 3 to 1 variants: "code".
  - Planned migration:
    - "display"
      - `typography["display-lg"]` -> `typography.display`
      - `typography["display-md"]` -> `typography.display`
      - `typography["display-sm"]` -> `typography.display`
    - "headings"
      - `typography["heading-xl"]` -> `typography.T32`
      - `typography["heading-lg"]` -> `typography.T28`
      - `typography["heading-md"]` -> `typography.T22`
      - `typography["heading-sm"]` -> `typography.T18`
    - "uppercase"
      - `typography["uppercase-lg"]` -> `typography.T14`
      - `typography["uppercase-md"]` -> `typography.T14`
      - `typography["uppercase-sm"]` -> `typography.T14`
    - "labels"
      - `typography["label-xl"]` -> **removed**
      - `typography["label-xl-strong"]` -> **removed**
      - `typography["label-lg"]` -> **removed**
      - `typography["label-lg-strong"]` -> **removed**
      - `typography["label-md"]` -> **removed**
      - `typography["label-md-strong"]` -> **removed**
      - `typography["label-sm"]` -> **removed**
      - `typography["label-sm-strong"]` -> **removed**
    - "paragraph"
      - `typography["paragraph-xl"]` -> `typography.body`
      - `typography["paragraph-lg"]` -> `typography.body`
      - `typography["paragraph-md"]` -> `typography.description`
      - `typography["paragraph-sm"]` -> `typography.description`
    - "code"
      - `typography["code-lg"]` -> `typography.code`
      - `typography["code-md"]` -> `typography.code`
      - `typography["code-sm"]` -> `typography.code`

## [v0.16.0](https://github.com/prenda-school/prenda-spark/compare/v0.15.0...v0.16.0) (2021-10-29)

No changes.

## [v0.15.0](https://github.com/prenda-school/prenda-spark/compare/v0.14.0...v0.15.0) (2021-10-25)

### Fixes

- Fixes peer dependency on `@material-ui/lab` to a base version that actually exists.
- **SvgIcon**
  - Widened `ref` type to `any`.

### Features

- **Step**
  - Re-exported.
  - Customized styling.
- **StepButton**
  - Initial implementation.
- **StepConnector**
  - Initial implementation.
- **StepContent**
  - Re-exported.
  - Customized styling.
- **StepIcon**
  - Initial implementation.
- **StepLabel**
  - Re-exported.
  - Customized styling.
- **Stepper**
  - Re-exported.
  - Customized styling.
- **SvgIcon**
  - New prop: `lowContrast`. When given, decreases opacity of the component.
  - New default `fontSize` prop value, `"inherit"`; eliminates the need to use `fontSize="inherit"` when inside supported components.
  - Improved fill color for duotone icons when `color=("light" | "white")`.
- **Typography**
  - New prop: `lowContrast`. When given, applies the "low contrast" version of the current `color` -- currently defined for use with `color="light"` and `color="dark"`.
- **makeStyles**
  - Supplies custom theme by default; no longer needs context of `SparkThemeProvider`.
- **styled**
  - Supplies custom theme by default; no longer needs context of `SparkThemeProvider`.
- **withStyles**
  - Supplies custom theme by default; no longer needs context of `SparkThemeProvider`.

### Breaking

- **Avatar**
  - Removed CSS API rule names: `labelSizeLarge`, `labelSizeMedium`.
    - Migration: use `$sizeLarge &`, `$sizeMedium &` respectively under the `label` rule.
- **SvgIcon**
  - When using `SvgIcon` either outside of supported components or on its own, instances that have no `fontSize` given will now inherit (likely `16px`) instead of being `24px` by default.
    - Migration:
      - No `fontSize` given to `fontSize="medium"`.
  - Removed `contrast` prop.
    - Migration:
      - Remove `contrast="high"`, it is default.
      - `contrast="low"` to `lowContrast`.
  - Removed `color` prop values: `onDark`, `onLight`.
    - Migration:
      - `color="onDark"` to `color="light"`.
      - `color="onLight"` to `color="dark"`.
- **Tag**
  - Removed CSS API rule names:
    - `boldColorRed`, `boldColorOrange`, `boldColorYellow`, `boldColorGreen`, `boldColorBlue`, `boldColorPurple`.
      - Migration: use `&$bold` under each `colorRed`, ... rule, respectively.
    - `labelColorRed`, `labelColorOrange`, `labelColorYellow`, `labelColorGreen`, `labelColorBlue`, `labelColorPurple`.
      - Migration: use `$colorRed &`, ..., respectively, under the `label` rule.
    - `labelBold`
      - Migration: use `$bold &` under the `label` rule.
    - `labelBoldColorRed`, `labelBoldColorOrange`, `labelBoldColorYellow`, `labelBoldColorGreen`, `labelBoldColorBlue`, `labelBoldColorPurple`.
      - Migration: use `$bold$colorRed &`, ..., respectively, under the `label` rule.
    - `deleteIconColorRed`, `deleteIconColorOrange`, `deleteIconColorYellow`, `deleteIconColorGreen`, `deleteIconColorBlue`, `deleteIconColorPurple`.
      - Migration: use `$colorRed &`, ..., respectively, under the `deleteIcon` rule.
    - `deleteIconBold`.
      - Migration: use `$bold &` under the `deleteIcon` rule.
    - `deleteIconBoldColorRed`, `deleteIconBoldColorOrange`, `deleteIconBoldColorYellow`, `deleteIconBoldColorGreen`, `deleteIconBoldColorBlue`, `deleteIconBoldColorPurple`
      - Migration: use `$bold$colorRed &`, ..., respectively, under the `deleteIcon` rule.
- **Typography**
  - Removed `color` prop values: `onDark`, `onDarkLowContrast`, `onLight`, `onLightLowContrast`.
    - Migration:
      - `color="onDark"` to `color="light"`
      - `color="onDarkLowContrast"` to `color="light" lowContrast`
      - `color="onLight"` to `color="dark"`
      - `color="onLightLowContrast"` to `color="dark" lowContrast`
  - Changed default value of `color` prop to `"inherit"`.
- **theme**
  - New `theme.palette.text` properties reference the color itself rather than its background: `dark`, `darkLowContrast`, `light`, `lightLowContrast`
    - Migration:
      - `palette.text.onLight` to `palette.text.dark`
      - `palette.text.onLightLowContrast` to `palette.text.darkLowContrast`
      - `palette.text.onDark` to `palette.text.light`
      - `palette.text.onDarkLowContrast` to `palette.text.lightLowContrast`

## [v0.14.0](https://github.com/prenda-school/prenda-spark/compare/v0.13.1...v0.14.0) (2021-10-04)

### Fixes

- Styles no longer rely on fully-deterministic global Mui class names.
  - Example: When two `ThemeProvider`'s are used, `'MuiSvgIcon-root'` would change to `'MuiSvgIcon-root-10'`. To address this, selectors like `'& .MuiSvgIcon-root'` were changed to `'& [class*=MuiSvgIcon-root]'`.
  - Affected components: **Avatar**, **Button**, **Checkbox**, **FormHelperText**, **FormLabel**, **IconButton**, **InputAdornment**, **InputBase**, **ListItemIcon**, **Menu**, **NavBarButton**, **Pagination**, **Radio**, **Switch**, **Tag**.

### Features

- **Collapse**
  - Re-exported.
- **CssBaseline**
  - Re-exported.
- **Grid**
  - Re-exported.
- **ScopedCssBaseline**
  - Re-exported.
- **Skeleton**
  - Re-exported.
- **styled**
  - Re-exported typing (**Styled**).
- **ThemeProvider**
  - Re-exported.
- **useMediaQuery**
  - Re-exported.
- **withStyles**
  - Re-exported typing (**WithStyles**).
- **theme**
  - Re-exported typing (**Theme**).

## [v0.13.1](https://github.com/prenda-school/prenda-spark/compare/v0.13.0...v0.13.1) (2021-10-01)

### Fixes

- Support import transform for `theme` from named at top-level to default at second-level.
- **SectionMessage**
  - Ensure `React` is in scope for component file.

## [v0.13.0](https://github.com/prenda-school/prenda-spark/compare/v0.12.0...v0.13.0) (2021-09-30)

### Features

- Support deeper file imports
  - example: `import Avatar from '@prenda/spark/Avatar';`

## [v0.12.0](https://github.com/prenda-school/prenda-spark/compare/v0.11.1...v0.12.0) (2021-09-28)

### Features

- **Banner**
  - Initial implementation.
- **DropdownAnchor**
  - Initial implementation. Abstraction of removed **DropdownButton**.
    - Supports the `component` prop where **Button** is supplied by default, but any element with an `onClick` event can be used (e.g. **IconButton**).
- **DropdownMenu**
  - Add `placement` prop.
    - `'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'`
- **IconButton**
  - Forwards ref.
- **List**
  - Re-exported.
  - Customized styling.
- **ListItemSecondaryAction**
  - Re-exported.
  - Customized styling.
- **SectionMessage**
  - Initial implementation.
- **SectionMessageTitle**
  - Initial implementation.
- **Switch**
  - Initial implementation.
- **Tab**
  - Re-exported.
  - Customized styling.
- **TabContext**
  - Re-exported.
- **TabList**
  - Re-exported.
- **TabPanel**
  - Re-exported.
  - Customized styling.
- **Tabs**
  - Re-exported.
  - Customized default props and styling.

### Fixes

- **DropdownButton** (removed, but carries to new **DropdownAnchor**)
  - Don't swallow `onClick` if passed.
- **DropdownMenu**
  - Don't swallow `onClick` if passed.
  - Vertical offset of Paper from anchor when appearing below anchor.
- **IconButton**
  - Custom classes not being global or part of classes signature.
- **InputBase**
  - Improve default text contrast.
- **Select**
  - Vertical offset of Menu Paper from input field.

### Breaking Changes

- **DropdownButton**
  - Removed.
    - Migration: use **DropdownAnchor** instead
- **DropdownDivider**
  - Removed.
    - Migration: use **Divider** instead.
- **DropdownMenuItem**
  - Removed.
    - Migration: use **MenuItem** instead.

## [v0.11.1](https://github.com/prenda-school/prenda-spark/compare/v0.11.0...v0.11.1) (2021-09-08)

### Fixes

- **theme**
  - Replace internal call of `createMuiTheme` (deprecated) with `createTheme`.
- **Avatar**
  - Custom classes not being global.
- **Tag**
  - Custom classes not being global.
- **Typography**
  - Custom classes not being global.

## [v0.11.0](https://github.com/prenda-school/prenda-spark/compare/v0.10.0...v0.11.0) (2021-08-21)

### Fixes

- Re-generated Nunito font files. Added missing Source Code Pro font files. If you copied these files to your project, please replace with new copies.
- Nunito "Semibold" (600 weight) font-face at-rules link to correct `semibold` font file, not `bold`.
- **Button**
  - Corrected start/end icon margins.
  - Corrected height when `size="small"`.
  - Corrected padding for all sizes.
- **Input**
  - See **InputBase**.
- **InputBase**
  - Corrected height.
- **NavBarButton**
  - Corrected height when no start/end icon given.
- **Typography**
  - TS interface accepts the `component` prop.
  - TS interface specifies all custom and underlying `classes` slots.
  - Corrected forwarding of custom and underlying `classes`.

### Features

- **Autocomplete**
  - Re-exported.
  - Added initial styling support: multiple Checkboxes.
- **Avatar**
  - Initial implementation.
- **Card**
  - Updated elevation (design change).
- **Divider**
  - Re-exported.
  - Added minimal styling related to **MenuList** styling support.
- **Input**
  - See **InputBase**.
- **InputBase**
  - Added styling for `startAdornment` and `endAdornment` props.
- **List**
  - Re-exported.
  - Added minimal styling related to **MenuList** styling support.
- **ListItem**
  - Added minimal styling related to **MenuItem** styling support.
- **ListItemAvatar**
  - Re-exported.
  - Added minimal styling related to **MenuItem** styling support.
- **ListItemIcon**
  - Re-exported.
  - Added minimal styling related to **MenuItem** styling support.
- **ListItemText**
  - Re-exported.
  - Added minimal styling related to **MenuItem** styling support.
- **ListSubheader**
  - Re-exported.
  - Added minimal styling related to **MenuList** styling support.
- **Menu**
  - Updated elevation (design change).
- **MenuItem**
  - Added styling for pseudo-states: `:hover`, `:focus`, `:active`
  - Added styling for content: `ListItemText`, `ListItemIcon`, `ListItemAvatar`, `ListItem`
  - Added styling when prop `selected` is `true`.
- **MenuList**
  - Re-exported.
  - Confirmed styling.
- **Paper**
  - Re-exported.
  - Added minimal styling related to **MenuList** styling support.
- **Select**
  - See **InputBase**.
- **Tag**
  - Initial implementation.
- **TextField**
  - See **InputBase**.
- **Typography**
  - Updated variant font-weights (design change).
  - New `color` prop values:
    - `'onLight'`
    - `'onLightLowContrast'`
    - `'onDark'`
    - `'onDarkLowContrast'`
  - New `variant` prop values:
    - `'uppercase-lg'`
    - `'uppercase-md'`
    - `'uppercase-sm'`
    - `'label-xl-strong'`
    - `'label-lg-strong'`
    - `'label-md-strong'`
    - `'label-sm-strong'`
    - NOTE: "strong" label styles are NOT meant to replace use of the `<strong>` tag. The `<strong>` tag has semantic significance that is communicated to assistive technology, whereas the `font-weight` CSS property is _purely_ stylistic. Read more [here on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong#usage_notes).
- **theme**
  - `theme.typography.pxToRem` is now customized to treat `16px` as the base font size instead of the default `14px`.
  - Added custom `theme.typography` keys:
    - `theme.typography['display-lg']`
    - `theme.typography['display-md']`
    - `theme.typography['display-sm']`
    - `theme.typography['heading-xl']`
    - `theme.typography['heading-lg']`
    - `theme.typography['heading-md']`
    - `theme.typography['heading-sm']`
    - `theme.typography['uppercase-lg']`
    - `theme.typography['uppercase-md']`
    - `theme.typography['uppercase-sm']`
    - `theme.typography['label-xl']`
    - `theme.typography['label-xl-strong']`
    - `theme.typography['label-lg']`
    - `theme.typography['label-lg-strong']`
    - `theme.typography['label-md']`
    - `theme.typography['label-md-strong']`
    - `theme.typography['label-sm']`
    - `theme.typography['label-sm-strong']`
    - `theme.typography['paragraph-xl']`
    - `theme.typography['paragraph-lg']`
    - `theme.typography['paragraph-md']`
    - `theme.typography['paragraph-sm']`
    - `theme.typography['code-lg']`
    - `theme.typography['code-md']`
    - `theme.typography['code-sm']`
  - Customized default `theme.typography` keys:
    - `theme.typography.h1` as `theme.typography['display-md']`
    - `theme.typography.h2` as `theme.typography['display-sm']`
    - `theme.typography.h3` as `theme.typography['heading-xl']`
    - `theme.typography.h4` as `theme.typography['heading-lg']`
    - `theme.typography.h5` as `theme.typography['heading-md']`
    - `theme.typography.h6` as `theme.typography['heading-sm']`
    - `theme.typography.subtitle1` as `theme.typography['label-lg']`
    - `theme.typography.subtitle2` as `theme.typography['label-md']`
    - `theme.typography.body1` as `theme.typography['paragraph-lg']`
    - `theme.typography.body2` as `theme.typography['paragraph-md']`
    - `theme.typography.button` as `theme.typography['label-lg']`
    - `theme.typography.caption` as `theme.typography['label-sm']`
    - `theme.typography.overline` as `theme.typography['uppercase-sm']`
  - Updated `theme.shadows` (design change).
    - Design specifies five elevations (shadows): E100, E200, ..., E500. These correspond to `theme.shadows[1...5]`, respectively. The remaining keys (6...24) are equal to the highest elevation, E500 (`theme.shadows[5]`).

#### Breaking Changes

- **MenuItem**
  - Eliminated custom wrapper.
  - Removed support for `startIcon` prop.
    - _Migration:_ use `ListItemIcon` component as first child.
- **Typography**
  - Removed variant prop values: `'smallcaps-lg'`, `'smallcaps-md'`, `'smallcaps-sm'`.
    - _Migration:_ use `'uppercase-lg'`, `'uppercase-md'`, `'uppercase-sm'`, respectively.
  - Removed color prop values: `'textOnLight'`, `'textOnLightLowContrast'`, `'textOnDark'`, `'textOnDarkLowContrast'`.
    - _Migration:_ use `'onLight'`, `'onLightLowContrast'`, `'onDark'`, `'onDarkLowContrast'`, respectively.
- Styles using `font-weight: 600` will appear lighter than previously.
  - _Migration:_ use `font-weight: 700`.
  - Affected components: `FormControlLabel`, `MenuItem`, `Typography`.

## [0.10.0](https://github.com/prenda-school/prenda-spark/compare/v0.9.0...v0.10.0) (2021-08-06)

### Bug Fixes

- Build issue (v0.9) ([#178](https://github.com/prenda-school/prenda-spark/issues/178)) ([ae86e4b](https://github.com/prenda-school/prenda-spark/commit/ae86e4b3224374f640a28f9122a7c732b91a2a59))

#### Breaking Changes

Spark no longer exports all of `@material-ui/core`, only components it themes, in addition to re-exporting the following theme related utilities from Mui core: `{ styled, useTheme, withStyles, makeStyles }`

## [0.9.0](https://github.com/prenda-school/prenda-spark/compare/v0.8.0...v0.9.0) (2021-07-29)

### Bug Fixes

- warning "disabled class isn't defined for MenuItem" ([#163](https://github.com/prenda-school/prenda-spark/issues/163)) ([49809fa](https://github.com/prenda-school/prenda-spark/commit/49809fa60bf1ab35775a692fe1885545bd005c17))
- overriding global body font-size ([#79](https://github.com/prenda-school/prenda-spark/issues/79)) ([6dd30df](https://github.com/prenda-school/prenda-spark/commit/6dd30dfc340ade8114f5285a430ec5b9ff9fb7c2))
- overlapping class name generation with consumers ([#171](https://github.com/prenda-school/prenda-spark/issues/171)) ([2ac5768](https://github.com/prenda-school/prenda-spark/commit/2ac57688c648bd3eeda75c5e5d54f14eb13eeab1))

### Features

#### Breaking Changes

All icons added in v0.8.0 were removed. They are now located under `@prenda/spark-icons` under new names and with a new prop signature. They should be treated as completely new. See that project's changelog for details.

All illustrations and logos were removed. They are now located under `@prenda/spark-icons` with a new prop signature. They should be treated as completely new.

Many components faced breaking prop API changes (and theme-wide default props) and breaking styling changes (through theme-wide style overrides). Theme-wide overrides or default will affect all MUI components under `SparkThemeProvider` regardless of if they are imported from Spark.

- **Button:**
  - Prop: `variant`
    - `"solid"` is now `"contained"`
    - `"flat"` is now `"text"`
    - (`"outlined"` was not changed)
- **Checkbox:**
  - Is no longer a meld of `FormControlLabel` and `Checkbox`
  - Please treat this component as completely new.
- **IconButton:**
  - Prop: `variant`
    - `"solid"` is now `"contained"`
    - `"flat"` is now `"text"`
    - (`"outlined"` was not changed)
- **Navbar:**
  - Renamed to **NavBar**.
- **NabarLink:**
  - Replaced by **NavBarButton** (treat as completely new).
- **Radio:**
  - Is no longer a meld of `FormControlLabel` and `Radio`
  - Please treat this component as completely new.

#### All

- simplify dependency narrative ([#169](https://github.com/prenda-school/prenda-spark/issues/169)) ([9936891](https://github.com/prenda-school/prenda-spark/commit/99368918c86ef8f9fa67139e4a3c2701cda02ec5))
- **Button:** update styles ([#158](https://github.com/prenda-school/prenda-spark/issues/158)) ([d914340](https://github.com/prenda-school/prenda-spark/commit/d914340561167e1f5da7dfc2480496d33a4c0194)), ([#142](https://github.com/prenda-school/prenda-spark/issues/142)) ([aa2aacc](https://github.com/prenda-school/prenda-spark/commit/aa2aaccbe3fb879f30ecc1828f875c5ffd54cc0f))
- **ButtonBase:** add theme default props ([#98](https://github.com/prenda-school/prenda-spark/issues/98)) ([6761097](https://github.com/prenda-school/prenda-spark/commit/6761097329d36ca564d9ab2b34f15123811f4ec6))
- **Card:** add theme style overrides ([#71](https://github.com/prenda-school/prenda-spark/issues/71)) ([85068ec](https://github.com/prenda-school/prenda-spark/commit/85068ec14bad64c8251d47be482b12d85474dcb8))
- **CardActions:** add theme style overrides ([#71](https://github.com/prenda-school/prenda-spark/issues/71)) ([85068ec](https://github.com/prenda-school/prenda-spark/commit/85068ec14bad64c8251d47be482b12d85474dcb8))
- **CardContent:** add theme style overrides ([#71](https://github.com/prenda-school/prenda-spark/issues/71)) ([85068ec](https://github.com/prenda-school/prenda-spark/commit/85068ec14bad64c8251d47be482b12d85474dcb8))
- **Checkbox:**
  - add theme style overrides and default props ([#83](https://github.com/prenda-school/prenda-spark/issues/83)) ([8a9430f](https://github.com/prenda-school/prenda-spark/commit/8a9430fedbd39f03c1702f10bc42b9371be47622))
  - update styles ([#114](https://github.com/prenda-school/prenda-spark/issues/114)) ([61c2699](https://github.com/prenda-school/prenda-spark/commit/61c269989c2e81638c6d1b954f366ba5179d3cc5))
  - add indeterminate support ([#114](https://github.com/prenda-school/prenda-spark/issues/114)) ([61c2699](https://github.com/prenda-school/prenda-spark/commit/61c269989c2e81638c6d1b954f366ba5179d3cc5))
- **CheckboxGroup:** initial implementation (\*\*not a component, just a pattern) ([#116](https://github.com/prenda-school/prenda-spark/issues/116)) ([3812dbd](https://github.com/prenda-school/prenda-spark/commit/3812dbd2fd2661a4589ab69a676136fd5e98979d))
- **FormControlLabel:** add theme style overrides ([#80](https://github.com/prenda-school/prenda-spark/issues/80)) ([0e1f8fe](https://github.com/prenda-school/prenda-spark/commit/0e1f8fecb98ba43fdb892441de47b70462dcccb4))
- **FormHelperText:** add theme style overrides ([#91](https://github.com/prenda-school/prenda-spark/issues/91)) ([c9e16ce](https://github.com/prenda-school/prenda-spark/commit/c9e16ceb7911bcef872b2a08cab6dc8f5e32ac54))
- **IconButton:** update styles ([#143](https://github.com/prenda-school/prenda-spark/issues/143)) ([c771cdb](https://github.com/prenda-school/prenda-spark/commit/c771cdb5fc1727e8ee316b8f0c8613520c73061a))
- **Input:** add theme style overrides and default props ([#93](https://github.com/prenda-school/prenda-spark/issues/93)) ([bb26eb7](https://github.com/prenda-school/prenda-spark/commit/bb26eb72dc3b7476ebb7424d4ad9346d1ea6b51f))
- **Input:** update default styles ([#88](https://github.com/prenda-school/prenda-spark/issues/88)) ([8963fcf](https://github.com/prenda-school/prenda-spark/commit/8963fcff3d8965e4a758dd874312869ccbed0535))
- **InputLabel:** add theme style overrides ([#92](https://github.com/prenda-school/prenda-spark/issues/92)) ([892aca5](https://github.com/prenda-school/prenda-spark/commit/892aca5cbc3a0dd8ead5062f8cc20de8cbc6aa43))
- **Menu:** add theme style overrides and default props ([#97](https://github.com/prenda-school/prenda-spark/issues/97)) ([e6aa00b](https://github.com/prenda-school/prenda-spark/commit/e6aa00ba900c528e503cf00b3de026856de8bb58))
- **MenuItem:** update component styles and add theme style overrides ([#99](https://github.com/prenda-school/prenda-spark/issues/99)) ([faf6b4c](https://github.com/prenda-school/prenda-spark/commit/faf6b4c3f45bf69ec191c9f380400aa72d282b92))
- **NavBar:** renamed Navbar; remove forced composition ([#125](https://github.com/prenda-school/prenda-spark/issues/125)) ([faf6b4c](https://github.com/prenda-school/prenda-spark/commit/0d18582f4d3f1bd4d09cc211ef3cba2456f6949e))
- **NavBarButton:** renamed NavbarLink; improved styles and API ([#166](https://github.com/prenda-school/prenda-spark/issues/166)) ([faf6b4c](https://github.com/prenda-school/prenda-spark/commit/2045814943169d41a362dfcd099094d45a0f9db8))
- **Pagination:** initial implementation ([#110](https://github.com/prenda-school/prenda-spark/issues/110)) ([4955311](https://github.com/prenda-school/prenda-spark/commit/4955311291a7559afbe49e19d929c65038cb58b7))
- **PaginationItem:** initial implementation ([#110](https://github.com/prenda-school/prenda-spark/issues/110)) ([4955311](https://github.com/prenda-school/prenda-spark/commit/4955311291a7559afbe49e19d929c65038cb58b7))
- **palette:**
  - initial isolated implementation (simplifies names) ([#104](https://github.com/prenda-school/prenda-spark/issues/104)) ([8148eed](https://github.com/prenda-school/prenda-spark/commit/8148eedea61273b145c7f92c7030a5fd6b310ad8))
  - move greys under grey; remove whites, navy, neutrals ([#105](https://github.com/prenda-school/prenda-spark/issues/105)) ([fa51a60](https://github.com/prenda-school/prenda-spark/commit/fa51a60b8a2944df5902ae4a4363cb06970c420a))
  - add new `grey.lighter` color ([#87](https://github.com/prenda-school/prenda-spark/issues/87)) ([d4ddb79](https://github.com/prenda-school/prenda-spark/commit/d4ddb7936c0204a10725024f7c57f1e31552c1f9))
- **Radio:**
  - add theme style overrides and default props ([#82](https://github.com/prenda-school/prenda-spark/issues/82)) ([5654dc4](https://github.com/prenda-school/prenda-spark/commit/5654dc4ac2b34d4f87950cf0c520f31f3102ecf0))
  - update styles ([#113](https://github.com/prenda-school/prenda-spark/issues/113)) ([390abc5](https://github.com/prenda-school/prenda-spark/commit/390abc5a84b220e965b6de6e434d445fa93ccf91))
- **RadioGroup:** initial implementation ([#115](https://github.com/prenda-school/prenda-spark/issues/115)) ([aa7756b](https://github.com/prenda-school/prenda-spark/commit/aa7756bd905b2455607fe612969f9b34c7d33839))
- **Select:** initial implementation ([#124](https://github.com/prenda-school/prenda-spark/issues/124)) ([8120dad](https://github.com/prenda-school/prenda-spark/commit/8120dad4d0a3f3762a73eb86026949b97aecb556))
- **SvgIcon:**
  - add theme style overrides and default props ([#94](https://github.com/prenda-school/prenda-spark/issues/94)) ([a8143cf](https://github.com/prenda-school/prenda-spark/commit/a8143cf4c8767f1768b10f219e345d927ca1fb53))
  - make default color 'inherit'; use in @prenda/spark-icons; expand colors; improve props ([#174](https://github.com/prenda-school/prenda-spark/issues/174)) ([777213a](https://github.com/prenda-school/prenda-spark/commit/777213a143c87f6fc4762a70d065ac16cf501a10))
- **TextField:** add theme-level style overrides ([#153](https://github.com/prenda-school/prenda-spark/issues/153)) ([d2220dd](https://github.com/prenda-school/prenda-spark/commit/d2220ddef00bfd19c4e6e1f0e766d660592e37c1))

## [0.8.0](https://github.com/prenda-school/prenda-spark/compare/v0.7.3...v0.8.0) (2021-06-22)

### Features

- **Card:** initial implementation, theme style overrides ([#71](https://github.com/prenda-school/prenda-spark/issues/71)) ([85068ec](https://github.com/prenda-school/prenda-spark/commit/85068ec14bad64c8251d47be482b12d85474dcb8))
- **CardContent:** initial implementation, theme style overrides ([#71](https://github.com/prenda-school/prenda-spark/issues/71)) ([85068ec](https://github.com/prenda-school/prenda-spark/commit/85068ec14bad64c8251d47be482b12d85474dcb8))
- **CardActions:** initial implementation, theme style overrides ([#71](https://github.com/prenda-school/prenda-spark/issues/71)) ([85068ec](https://github.com/prenda-school/prenda-spark/commit/85068ec14bad64c8251d47be482b12d85474dcb8))
- **theme:** custom shadows ([#71](https://github.com/prenda-school/prenda-spark/issues/71)) ([85068ec](https://github.com/prenda-school/prenda-spark/commit/85068ec14bad64c8251d47be482b12d85474dcb8))

## [0.7.3](https://github.com/prenda-school/prenda-spark/compare/spark-0.7.2...spark-0.7.3) (2021-06-16)

- **Navbar:** initial implementation ([#64](https://github.com/prenda-school/prenda-spark/issues/64)) ([8af41e3](https://github.com/prenda-school/prenda-spark/commit/8af41e35ac52fa59c6bb07f6c618995744f77887))

## [0.7.2](https://github.com/prenda-school/prenda-spark/compare/spark-0.7.1...spark-0.7.2) (2021-05-29)

- initial commit for changelog.md
