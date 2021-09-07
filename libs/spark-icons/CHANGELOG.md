# Changelog

# [vNext](https://github.com/prenda-school/prenda-spark/compare/v0.11.0...vNext) (yyyy-mm-dd)

# [0.11.0](https://github.com/prenda-school/prenda-spark/compare/v0.10.0...v0.11.0) (2021-08-21)

### Fixes

- camelCase missed `stroke-*` attributes
  - affected icons: `BeakerDuotone`, `HighFiveDuotone`, `MountainDuotone`, `Users3Duotone`

# [0.10.0](https://github.com/prenda-school/prenda-spark/compare/v0.9.0...v0.10.0) (2021-08-06)

No changes

# [0.9.0](https://github.com/prenda-school/prenda-spark/compare/v0.8.0...v0.9.0) (2021-07-29)

### Features

- **SvgIcon:** make default color 'inherit'; use in @prenda/spark-icons; expand colors; improve props ([#174](https://github.com/prenda-school/prenda-spark/issues/174)) ([777213a](https://github.com/prenda-school/prenda-spark/commit/777213a143c87f6fc4762a70d065ac16cf501a10))
- simplify dependency narrative ([#169](https://github.com/prenda-school/prenda-spark/issues/169)) ([9936891](https://github.com/prenda-school/prenda-spark/commit/99368918c86ef8f9fa67139e4a3c2701cda02ec5))
- add all icons ([#135](https://github.com/prenda-school/prenda-spark/issues/135)) ([8a430d3](https://github.com/prenda-school/prenda-spark/commit/8a430d36c99bbdef568820be04914ff571622fa5))
  - **Usage Instructions**:
    - Go to the "Prenda" Organization in Figma
    - Go to the "Prenda Design" Team (Join if you haven't)
    - Go to the "Spark Design System" Folder
    - Go to the "Spark Icons" File
    - Go to one of the Pages in the left side bar: "Line", "Filled", or "Duotone"
    - Select an icon
    - Read the Component Name (ex: Inbox)
    - Translate Figma Component Name to `@prenda/spark-icons` component name
      - Line - Inbox => `Inbox` (Line is the default of the naming scheme)
      - Filled - Inbox => `InboxFilled`
      - Duotone - Inbox => `InboxFilled`
      - example:

```jsx
import { Inbox, InboxFilled, InboxDuotone } from '@prenda/spark-icons';
// OR
import Inbox from '@prenda/spark-icons/Inbox';
import InboxFilled from '@prenda/spark-icons/InboxFilled';
import InboxDuotone from '@prenda/spark-icons/InboxDuotone';
```

- add illustrations and logos ([#141](https://github.com/prenda-school/prenda-spark/issues/141)) ([119e43c](https://github.com/prenda-school/prenda-spark/commit/119e43c4d17ec1b24f6cf941d5e6d27a36cf0010))
- build to be path-import friendly without tree-shaking ([#139](https://github.com/prenda-school/prenda-spark/issues/139)) ([879f828](https://github.com/prenda-school/prenda-spark/commit/879f8285a6b8ecaec50bf7ca16300467d308d0ac))
