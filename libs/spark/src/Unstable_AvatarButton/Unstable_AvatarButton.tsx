import * as React from 'react';
import clsx from 'clsx';
import {
  default as ButtonBase,
  ExtendButtonBaseTypeMap,
} from '@material-ui/core/ButtonBase';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';
import Unstable_Avatar, { Unstable_AvatarProps } from '../Unstable_Avatar';

type _Unstable_AvatarButtonTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends React.ElementType = 'button'
> = ExtendButtonBaseTypeMap<{
  props: P &
    Pick<
      Unstable_AvatarProps,
      'alt' | 'color' | 'imgProps' | 'sizes' | 'src' | 'srcSet'
    >;
  defaultComponent: D;
  classKey: Unstable_AvatarButtonClassKey;
}>;

export type Unstable_AvatarButtonTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends React.ElementType = 'button'
> = {
  props: Omit<
    _Unstable_AvatarButtonTypeMap<P, D>['props'],
    | 'centerRipple'
    | 'disableRipple'
    | 'disableTouchRipple'
    | 'focusRipple'
    | 'focusRippleClassName'
    | 'TouchRippleProps'
  >;
  defaultComponent: _Unstable_AvatarButtonTypeMap<P, D>['defaultComponent'];
  classKey: _Unstable_AvatarButtonTypeMap<P, D>['classKey'];
};

export type Unstable_AvatarButtonProps<
  D extends React.ElementType = Unstable_AvatarButtonTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_AvatarButtonTypeMap<P, D>, D>;

export type Unstable_AvatarButtonClassKey = 'root' | 'avatar';

const useStyles = makeStyles<Unstable_AvatarButtonClassKey>(
  (theme) => ({
    root: {
      borderColor: 'transparent',
      borderRadius: 8,
      borderStyle: 'solid',
      borderWidth: 1,
      '&.Mui-focusVisible > $avatar, &:focus-visible > $avatar': {
        boxShadow: `0px 0px 2px 4px ${theme.unstable_palette.teal[300]}`,
      },
      '&:hover > $avatar': {
        borderColor: theme.unstable_palette.neutral[70],
      },
      '&:active > $avatar': {
        borderColor: theme.unstable_palette.blue[100],
      },
      '&[aria-expanded="true"] > $avatar': {
        borderColor: theme.unstable_palette.blue[600],
      },
      '&:disabled': {
        backgroundColor: theme.unstable_palette.neutral[80],
        '& > $avatar': {
          opacity: 0.62,
        },
      },
    },
    avatar: {
      borderColor: 'transparent',
      borderStyle: 'solid',
      borderWidth: 1,
      margin: -1,
    },
  }),
  { name: 'MuiSparkUnstable_AvatarButton' }
);

const Unstable_AvatarButton: OverridableComponent<Unstable_AvatarButtonTypeMap> = React.forwardRef(
  function Unstable_AvatarButton(props, ref) {
    const {
      alt,
      children,
      classes: classesProp,
      color,
      imgProps,
      sizes,
      src,
      srcSet,
      ...other
    } = props;

    const classes = useStyles();

    return (
      <ButtonBase
        classes={{
          root: clsx(classes.root, classesProp?.root),
        }}
        disableRipple
        disableTouchRipple
        focusRipple={false}
        ref={ref}
        {...other}
      >
        <Unstable_Avatar
          alt={alt}
          color={color}
          imgProps={imgProps}
          size="large"
          sizes={sizes}
          src={src}
          srcSet={srcSet}
          classes={{
            root: clsx(classes.avatar, classesProp?.avatar),
          }}
        >
          {children}
        </Unstable_Avatar>
      </ButtonBase>
    );
  }
);

export default Unstable_AvatarButton;
