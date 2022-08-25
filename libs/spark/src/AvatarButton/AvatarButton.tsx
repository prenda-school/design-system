import React, { ElementType, forwardRef } from 'react';
import clsx from 'clsx';
import {
  default as ButtonBase,
  ExtendButtonBaseTypeMap,
} from '@material-ui/core/ButtonBase';
import makeStyles from '../makeStyles';
import { OverridableComponent, OverrideProps } from '../utils';
import Avatar, { AvatarProps } from '../Avatar';

type _AvatarButtonTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'button'
> = ExtendButtonBaseTypeMap<{
  props: P &
    Pick<
      AvatarProps,
      'alt' | 'color' | 'imgProps' | 'sizes' | 'src' | 'srcSet'
    > & {
      /**
       * The size of the component.
       */
      size?: 'large' | 'medium';
    };
  defaultComponent: D;
  classKey: AvatarButtonClassKey;
}>;

export type AvatarButtonTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'button'
> = {
  props: Omit<
    _AvatarButtonTypeMap<P, D>['props'],
    | 'centerRipple'
    | 'disableRipple'
    | 'disableTouchRipple'
    | 'focusRipple'
    | 'focusRippleClassName'
    | 'TouchRippleProps'
  >;
  defaultComponent: _AvatarButtonTypeMap<P, D>['defaultComponent'];
  classKey: _AvatarButtonTypeMap<P, D>['classKey'];
};

export type AvatarButtonProps<
  D extends ElementType = AvatarButtonTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<AvatarButtonTypeMap<P, D>, D>;

export type AvatarButtonClassKey = 'root' | 'avatar';

const useStyles = makeStyles<AvatarButtonClassKey>(
  (theme) => ({
    root: {
      borderColor: 'transparent',
      borderRadius: 8,
      borderStyle: 'solid',
      borderWidth: 1,
      '&.Mui-focusVisible > $avatar, &:focus-visible > $avatar': {
        boxShadow: `0px 0px 2px 4px ${theme.palette.teal[300]}`,
      },
      '&:hover > $avatar': {
        borderColor: theme.palette.neutral[70],
      },
      '&:active > $avatar': {
        borderColor: theme.palette.blue[100],
      },
      '&[aria-expanded="true"] > $avatar': {
        borderColor: theme.palette.blue[600],
      },
      '&:disabled': {
        backgroundColor: theme.palette.neutral[80],
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
  { name: 'MuiPDSAvatarButton' }
);

const AvatarButton: OverridableComponent<AvatarButtonTypeMap> = forwardRef(
  function AvatarButton(props, ref) {
    const {
      alt,
      children,
      classes: classesProp,
      color,
      imgProps,
      size = 'large',
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
        <Avatar
          alt={alt}
          color={color}
          imgProps={imgProps}
          size={size}
          sizes={sizes}
          src={src}
          srcSet={srcSet}
          classes={{
            root: clsx(classes.avatar, classesProp?.avatar),
          }}
        >
          {children}
        </Avatar>
      </ButtonBase>
    );
  }
);

export default AvatarButton;
