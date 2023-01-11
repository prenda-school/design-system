import React, { ElementType, forwardRef } from 'react';
import {
  default as ButtonBase,
  ExtendButtonBaseTypeMap,
} from '@material-ui/core/ButtonBase';
import { OverridableComponent, OverrideProps } from '../utils';
import Unstable_Avatar, { Unstable_AvatarProps } from '../Unstable_Avatar';
import withStyles, { Styles } from '../withStyles';

type _Unstable_AvatarButtonTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'button'
> = ExtendButtonBaseTypeMap<{
  props: P &
    Pick<
      Unstable_AvatarProps,
      'alt' | 'color' | 'imgProps' | 'sizes' | 'src' | 'srcSet'
    > & {
      /**
       * The size of the component.
       */
      size?: 'large' | 'medium';
    };
  defaultComponent: D;
  classKey: Unstable_AvatarButtonClassKey;
}>;

export type Unstable_AvatarButtonTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends ElementType = 'button'
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
  D extends ElementType = Unstable_AvatarButtonTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {}
> = OverrideProps<Unstable_AvatarButtonTypeMap<P, D>, D>;

export type Unstable_AvatarButtonClassKey = 'root' | 'avatar';

const styles: Styles<Unstable_AvatarButtonClassKey> = (theme) => ({
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

const Unstable_AvatarButton: OverridableComponent<Unstable_AvatarButtonTypeMap> =
  forwardRef(function Unstable_AvatarButton(props, ref) {
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
        <Unstable_Avatar
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
        </Unstable_Avatar>
      </ButtonBase>
    );
  });

const Unstable_AvatarButtonWithStyles = withStyles(styles, {
  name: 'MuiSparkUnstable_AvatarButton',
})(Unstable_AvatarButton) as typeof Unstable_AvatarButton;

// @ts-expect-error property does not exist
Unstable_AvatarButtonWithStyles._PDS_ID = 'Unstable_AvatarButton';

export default Unstable_AvatarButtonWithStyles;
