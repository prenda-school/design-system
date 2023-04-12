import React, { ElementType, forwardRef } from 'react';
import {
  default as ButtonBase,
  ExtendButtonBaseTypeMap,
} from '@material-ui/core/ButtonBase';
import { OverridableComponent, OverrideProps } from '../../utils';
import Avatar, { AvatarProps } from '../Avatar';
import withStyles, { Styles } from '../../withStyles';

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

const styles: Styles<AvatarButtonClassKey> = (theme) => ({
  root: {
    border: theme.unstable_borders.transparent,
    borderRadius: theme.unstable_radii.md,
    '&.Mui-focusVisible > $avatar, &:focus-visible > $avatar': {
      boxShadow: theme.unstable_shadows.focus,
    },
    '&:hover > $avatar': {
      border: theme.unstable_borders.hover,
    },
    '&:active > $avatar': {
      border: theme.unstable_borders.active,
    },
    '&[aria-expanded="true"] > $avatar': {
      border: theme.unstable_borders.expanded,
    },
    '&:disabled': {
      backgroundColor: theme.unstable_palette.neutral[80],
      '& > $avatar': {
        opacity: 0.62,
      },
    },
  },
  avatar: {
    border: theme.unstable_borders.transparent,
    margin: -1,
  },
});

const AvatarButton: OverridableComponent<AvatarButtonTypeMap> = forwardRef(
  function AvatarButton(props, ref) {
    const {
      alt,
      children,
      classes,
      color,
      imgProps,
      size = 'large',
      sizes,
      src,
      srcSet,
      ...other
    } = props;

    return (
      <ButtonBase
        classes={{ root: classes.root }}
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
          classes={{ root: classes.avatar }}
        >
          {children}
        </Avatar>
      </ButtonBase>
    );
  }
);

const AvatarButtonWithStyles = withStyles(styles, {
  name: 'MuiSparkAvatarButton',
})(AvatarButton) as typeof AvatarButton;

// @ts-expect-error property does not exist
AvatarButtonWithStyles._PDS_ID = 'AvatarButton';

export default AvatarButtonWithStyles;
