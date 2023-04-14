import type { ElementType} from 'react';
import React, { forwardRef } from 'react';
import type {
  ExtendButtonBaseTypeMap} from '@material-ui/core/ButtonBase';
import {
  default as ButtonBase
} from '@material-ui/core/ButtonBase';
import type { OverridableComponent, OverrideProps } from '../../utils';
import type { AvatarProps } from '../Avatar';
import Avatar from '../Avatar';
import type { Styles } from '../../withStyles';
import withStyles from '../../withStyles';

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
    border: theme.borders_alpha.transparent,
    borderRadius: theme.radii_alpha.md,
    '&.Mui-focusVisible > $avatar, &:focus-visible > $avatar': {
      boxShadow: theme.shadows_alpha.focus,
    },
    '&:hover > $avatar': {
      border: theme.borders_alpha.hover,
    },
    '&:active > $avatar': {
      border: theme.borders_alpha.active,
    },
    '&[aria-expanded="true"] > $avatar': {
      border: theme.borders_alpha.expanded,
    },
    '&:disabled': {
      backgroundColor: theme.palette_alpha.neutral[80],
      '& > $avatar': {
        opacity: 0.62,
      },
    },
  },
  avatar: {
    border: theme.borders_alpha.transparent,
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
  name: 'MuiSpark_alpha_AvatarButton',
})(AvatarButton) as typeof AvatarButton;

// @ts-expect-error property does not exist
AvatarButtonWithStyles._PDS_ID = 'AvatarButton';

export default AvatarButtonWithStyles;
