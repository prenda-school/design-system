# Changelog

# [vNext](https://github.com/prenda-school/prenda-spark/compare/v0.11.1...vNext) (yyyy-mm-dd)

### Features

- **DropdownMenu**
  - Add `placement` prop.
    - `'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'`
- **IconButton**
  - Forwards ref.

### Fixes

- **DropdownButton**
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

- **DropdownDivider**
  - Removed.
    - Migration: use **Divider** instead.
- **DropdownMenuItem**
  - Removed.
    - Migration: use **MenuItem** instead.

# [v0.11.1](https://github.com/prenda-school/prenda-spark/compare/v0.11.0...v0.11.1) (2021-09-08)

### Fixes

- **theme**
  - Replace internal call of `createMuiTheme` (deprecated) with `createTheme`.
- **Avatar**
  - Custom classes not being global.
- **Tag**
  - Custom classes not being global.
- **Typography**
  - Custom classes not being global.

# [v0.11.0](https://github.com/prenda-school/prenda-spark/compare/v0.10.0...v0.11.0) (2021-08-21)

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
  - Added re-export.
  - Added initial styling support: multiple Checkboxes.
- **Avatar**
  - Initial implementation.
- **Card**
  - Updated elevation (design change).
- **Divider**
  - Added re-export.
  - Added minimal styling related to **MenuList** styling support.
- **Input**
  - See **InputBase**.
- **InputBase**
  - Added styling for `startAdornment` and `endAdornment` props.
- **List**
  - Added re-export.
  - Added minimal styling related to **MenuList** styling support.
- **ListItem**
  - Added minimal styling related to **MenuItem** styling support.
- **ListItemAvatar**
  - Added re-export.
  - Added minimal styling related to **MenuItem** styling support.
- **ListItemIcon**
  - Added re-export.
  - Added minimal styling related to **MenuItem** styling support.
- **ListItemText**
  - Added re-export.
  - Added minimal styling related to **MenuItem** styling support.
- **ListSubheader**
  - Added re-export.
  - Added minimal styling related to **MenuList** styling support.
- **Menu**
  - Updated elevation (design change).
- **MenuItem**
  - Added styling for pseudo-states: `:hover`, `:focus`, `:active`
  - Added styling for content: `ListItemText`, `ListItemIcon`, `ListItemAvatar`, `ListItem`
  - Added styling when prop `selected` is `true`.
- **MenuList**
  - Added re-export.
  - Confirmed styling.
- **Paper**
  - Added re-export.
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

# [0.10.0](https://github.com/prenda-school/prenda-spark/compare/v0.9.0...v0.10.0) (2021-08-06)

### Bug Fixes

- Build issue (v0.9) ([#178](https://github.com/prenda-school/prenda-spark/issues/178)) ([ae86e4b](https://github.com/prenda-school/prenda-spark/commit/ae86e4b3224374f640a28f9122a7c732b91a2a59))

#### Breaking Changes

Spark no longer exports all of `@material-ui/core`, only components it themes, in addition to re-exporting the following theme related utilities from Mui core: `{ styled, useTheme, withStyles, makeStyles }`

# [0.9.0](https://github.com/prenda-school/prenda-spark/compare/v0.8.0...v0.9.0) (2021-07-29)

### Bug Fixes

- warning "disabled class isn't defined for MenuItem" ([#163](https://github.com/prenda-school/prenda-spark/issues/163)) ([49809fa](https://github.com/prenda-school/prenda-spark/commit/49809fa60bf1ab35775a692fe1885545bd005c17))
- overriding global body font-size ([#79](https://github.com/prenda-school/prenda-spark/issues/79)) ([6dd30df](https://github.com/prenda-school/prenda-spark/commit/6dd30dfc340ade8114f5285a430ec5b9ff9fb7c2))
- overlapping class name generation with consumers ([#171](https://github.com/prenda-school/prenda-spark/issues/171)) ([2ac5768](https://github.com/prenda-school/prenda-spark/commit/2ac57688c648bd3eeda75c5e5d54f14eb13eeab1))

### Features

#### Breaking Changes

All icons added in v0.8.0 were removed. They are now located under `@prenda/spark-icons` under new names and with a new prop signature. They should be treated as completely new. See that project's changelog for details.

All illustrations and logos were removed. They are now located under `@prenda/spark-icons` with a new prop signature. They should be treated as completely new.

Many components faced breaking prop API changes (and theme-wide default props) and breaking styling changes (through theme-wide style overrides). Theme-wide overrides or default will affect all Material-UI components under `SparkThemeProvider` regardless of if they are imported from Spark.

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

# [0.8.0](https://github.com/prenda-school/prenda-spark/compare/v0.7.3...v0.8.0) (2021-06-22)

### Features

- **Card:** initial implementation, theme style overrides ([#71](https://github.com/prenda-school/prenda-spark/issues/71)) ([85068ec](https://github.com/prenda-school/prenda-spark/commit/85068ec14bad64c8251d47be482b12d85474dcb8))
- **CardContent:** initial implementation, theme style overrides ([#71](https://github.com/prenda-school/prenda-spark/issues/71)) ([85068ec](https://github.com/prenda-school/prenda-spark/commit/85068ec14bad64c8251d47be482b12d85474dcb8))
- **CardActions:** initial implementation, theme style overrides ([#71](https://github.com/prenda-school/prenda-spark/issues/71)) ([85068ec](https://github.com/prenda-school/prenda-spark/commit/85068ec14bad64c8251d47be482b12d85474dcb8))
- **theme:** custom shadows ([#71](https://github.com/prenda-school/prenda-spark/issues/71)) ([85068ec](https://github.com/prenda-school/prenda-spark/commit/85068ec14bad64c8251d47be482b12d85474dcb8))

## [0.7.3](https://github.com/prenda-school/prenda-spark/compare/spark-0.7.2...spark-0.7.3) (2021-06-16)

- **Navbar:** initial implementation ([#64](https://github.com/prenda-school/prenda-spark/issues/64)) ([8af41e3](https://github.com/prenda-school/prenda-spark/commit/8af41e35ac52fa59c6bb07f6c618995744f77887))

## [0.7.2](https://github.com/prenda-school/prenda-spark/compare/spark-0.7.1...spark-0.7.2) (2021-05-29)

- initial commit for changelog.md
