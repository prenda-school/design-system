import { Shadows } from '@material-ui/core/styles/shadows';

/**
 * Generate Spark Design elevation shadows, a series of two box shadows. First
 * shadow appears like a light border. Second shadow is a "key light" shadow,
 * adjusted to given input.
 * @param {number} yOffset of key light shadow, in pixels.
 * @param {number} blurRadius of key light shadow, in pixels.
 * @param {number} transparency of key light shadow color, from 0 to 1.
 * @returns {string} comma-separated box-shadow values.
 */
function createElevationShadow(yOffset, blurRadius, transparency) {
  return [
    '0 0 1px 0 rgba(7, 46, 68, 0.31)',
    `0 ${yOffset} ${blurRadius} rgba(7, 46, 68, ${transparency})`,
  ].join(',');
}

const highestElevationShadow = createElevationShadow(18, 28, 0.15);

const shadows: Shadows = [
  'none',
  createElevationShadow(1, 1, 0.24), // E100
  createElevationShadow(3, 5, 0.2), // E200
  createElevationShadow(8, 12, 0.15), // E300
  createElevationShadow(10, 18, 0.15), // E400
  highestElevationShadow, // E500
  highestElevationShadow,
  highestElevationShadow,
  highestElevationShadow,
  highestElevationShadow,
  highestElevationShadow,
  highestElevationShadow,
  highestElevationShadow,
  highestElevationShadow,
  highestElevationShadow,
  highestElevationShadow,
  highestElevationShadow,
  highestElevationShadow,
  highestElevationShadow,
  highestElevationShadow,
  highestElevationShadow,
  highestElevationShadow,
  highestElevationShadow,
  highestElevationShadow,
  highestElevationShadow,
];

export { shadows };
