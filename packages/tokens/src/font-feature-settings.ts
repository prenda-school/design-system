import type { Property } from 'csstype';

export type FontFeatureSettingsToken = Property.FontFeatureSettings;

export const FontFeatureSettingsBody =
  "'ss03' on, 'cv05' on" as const satisfies FontFeatureSettingsToken;
