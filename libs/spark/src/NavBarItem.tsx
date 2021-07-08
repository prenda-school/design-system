import React, { FC } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  ButtonBase,
  ButtonBaseProps as MuiButtonBaseProps,
} from '@material-ui/core';
import { ButtonProps } from './Button';
import { theme } from './styles';
// import clsx from 'clsx';
// import { capitalize } from './utils';

export type NavBarItemProps = ButtonProps;

export const NavBarItem = withStyles({
  root: {
    height: 48,
    borderRadius: 8,
    padding: 8,
    marginLeft: 8,
    cursor: 'pointer',
    '&$disabled': {
      opacity: '0.56',
      pointerEvents: 'none',
      cursor: 'default',
    },
    '&$hover': {
      backgroundColor: theme.palette.grey.light,
    },
    '&$focused': {
      border: theme.palette.blue[5],
      outline: 'none',
    },
    '&$checked': {
      color: theme.palette.blue[5],
    },
  },
  label: {
    color: theme.palette.text.onLightLowContrast,
    fontSize: '1.125rem',
  },
  disabled: {},
  focused: {},
})(Button);

// const SparkNavBarItem: FC<ButtonProps> = ({
//   className,
//   variant = 'solid',
//   size = 'medium',
//   children,
//   startIcon,
//   endIcon,
//   ...other
// }) => {
//   return (
//     <ButtonBase
//       className={clsx(
//         className,
//         'SparkButton-root',
//         `SparkButton-variant${capitalize(variant)}`,
//         `SparkButton-size${capitalize(size)}`
//       )}
//       {...other}
//     >
//       {/* FROM-MUI
//        * The inner <span> is required to vertically align the children.
//        * Browsers don't support `display: flex` on a <button> element.
//        * https://github.com/philipwalton/flexbugs/blob/master/README.md#flexbug-9
//        */}
//       <span className="SparkButton-content">
//         {startIcon ? (
//           <span
//             className={clsx(
//               'SparkButton-startIcon',
//               `SparkButton-iconSize${capitalize(size)}`
//             )}
//           >
//             {startIcon}
//           </span>
//         ) : null}
//         {children}
//         {endIcon ? (
//           <span
//             className={clsx(
//               'SparkButton-endIcon',
//               `SparkButton-iconSize${capitalize(size)}`
//             )}
//           >
//             {endIcon}
//           </span>
//         ) : null}
//       </span>
//     </ButtonBase>
//   );
// };

// export { SparkNavBarItem as NavBarItem };
