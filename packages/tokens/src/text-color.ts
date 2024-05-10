import * as color from './color';
import type { ColorToken } from './color';

/** An alias token for a CSS color property value. */
export type TextColorToken = ColorToken;

export const heading = color.N600 satisfies TextColorToken;
export const body = color.N500 satisfies TextColorToken;
export const subdued = color.N400 satisfies TextColorToken;
export const disabled = color.N100 satisfies TextColorToken;
export const icon = color.N500 satisfies TextColorToken;
export const secondaryIcon = color.N300 satisfies TextColorToken;

export const inverseHeading = color.N0 satisfies TextColorToken;
export const inverseBody = color.N60 satisfies TextColorToken;
export const inverseSubdued = color.N70 satisfies TextColorToken;
export const inverseDisabled = color.N90 satisfies TextColorToken;
export const inverseIcon = color.N60 satisfies TextColorToken;
export const inverseSecondaryIcon = color.N80 satisfies TextColorToken;

/** A palette of text color tokens. */
export type TextColorPalette = Record<string, TextColorToken>;

export const textColor = {
  heading,
  body,
  subdued,
  disabled,
  icon,
  secondaryIcon,
  inverseHeading,
  inverseBody,
  inverseSubdued,
  inverseDisabled,
  inverseIcon,
  inverseSecondaryIcon,
} as const satisfies TextColorPalette;
