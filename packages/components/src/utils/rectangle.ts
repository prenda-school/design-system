import {
  closePath,
  drawEllipticalArc,
  drawHorizontalLineTo,
  drawVerticalLineTo,
  moveTo,
} from './path';

/**
 * Draws a rounded rectangle.
 * @param x The x-coordinate of the top-left corner of the rectangle.
 * @param y The y-coordinate of the top-left corner of the rectangle.
 * @param width The width of the rectangle, not accounting for corner rounding.
 * @param height The height of the rectangle, not accounting for corner rounding.
 * @param crtl The top-left corner-radius of the rectangle.
 * @param crtr The top-right corner-radius of the rectangle.
 * @param crbr The bottom-right corner-radius of the rectangle.
 * @param crbl The bottom-left corner-radius of the rectangle.
 * ---
 *
 * #### Credit
 *
 * [1] {@link https://observablehq.com/@wattenberger/d3-bar-chart#arc Amelia Wattenberger, D3 bar chart with one rounded corner, roundedRect = f(...)}.
 *
 * - Changed the `r` array arg entries to named parameters to clarify their usage.
 */
export function drawRoundedRectangle(
  x: number,
  y: number,
  width: number,
  height: number,
  crtl: number,
  crtr: number,
  crbr: number,
  crbl: number
) {
  const crtl1 = constrainRectangleCornerRadius(crtl, crbl, crtr, height, width);
  const crtr1 = constrainRectangleCornerRadius(crtr, crbr, crtl, height, width);
  const crbr1 = constrainRectangleCornerRadius(crbr, crtr, crbl, height, width);
  const crbl1 = constrainRectangleCornerRadius(crbl, crtl, crbr, height, width);

  // (horizontals from left-to-right / right-to-left => multiplier of 1 / -1)
  // (verticals from top-to-bottom / bottom-to-top => multiplier of 1 / -1)

  // begin drawing from top-left corner
  // move to (x + crtl, y)
  // draw top (moving left-to-right): horizontal to (cpx + width - crtr - crtl, cpy)
  // draw top-right corner: arc of crtr
  // draw right (moving down): vertical to (cpx, cpy + height - crtr - crbr)
  // draw bottom-right corner: arc of crbr
  // draw bottom (moving left): horizontal to (cpx - (width - crbr - crbl), cpy)
  // draw bottom-left corner: arc of crbl
  // draw left (moving up): vertical to (cpx, cpy - (height - crbl - crtl))
  // draw top-left corner: arc of crtl
  return `
    ${moveTo(true, x + crtl1, y)}
    ${drawHorizontalLineTo(false, width - crtl1 - crtr1)}
    ${drawRoundedRectangleCorner(crtr1, 1, 1)}
    ${drawVerticalLineTo(false, height - crtr1 - crbr1)}
    ${drawRoundedRectangleCorner(crbr1, -1, 1)}
    ${drawHorizontalLineTo(false, -1 * (width - crbr1 - crbl1))}
    ${drawRoundedRectangleCorner(crbl1, -1, -1)}
    ${drawVerticalLineTo(false, -1 * (height - crbl1 - crtl1))}
    ${drawRoundedRectangleCorner(crtl1, 1, -1)}
    ${closePath()}
`;
}

/**
 * Draws a corner of a rounded rectangle.
 * @param cr The radius of the rectangle corner.
 * @param sdx The sign (s) of the shift along the x-axis (dx) of the current point to get the end point.
 * @param sdy The sign (s) of the shift along the y-axis (dx) of the current point to get the end point.
 *
 * ---
 *
 * #### Notes
 *
 * The sign pair `(sdx, sdy)` can be thought of like the "quadrant" of the corner:
 *
 * ```
 *  (-1, 1)  | (1, 1)   top-left    | top-right
 *  ---------|--------  ------------|-------------
 *  (-1, -1) | (1, -1)  bottom-left | bottom-right
 * ```
 *
 * ---
 *
 * #### Credit
 *
 * [1] {@link https://observablehq.com/@wattenberger/d3-bar-chart#arc Amelia Wattenberger, D3 bar chart with one rounded corner, arc = f(...)}.
 *
 * - Removed the first two `sign` array entries since negative radii are coerced to positive values according to the spec.
 * - Changed the `sign` array arg entries to named parameters to clarify their usage.
 */
export function drawRoundedRectangleCorner(
  cr: number,
  sdx: 1 | -1,
  sdy: 1 | -1
) {
  return drawEllipticalArc(false, cr, cr, 0, 0, 1, cr * sdx, cr * sdy);
}

/**
 * Constrain the corner-radius of a rectangle.
 * @param cr The corner-radius of the rectangle to constrain.
 * @param cry The adjacent corner-radius along the y-axis.
 * @param crx The adjacent corner-radius along the x-axis.
 * @param height The height of the rectangle.
 * @param width The width of the rectangle.
 */
export function constrainRectangleCornerRadius(
  cr: number,
  cry: number,
  crx: number,
  height: number,
  width: number
): number {
  // shortcut; avoid division by zero
  if (cr === 0) {
    return cr;
  }

  // when the corner radii are too large (exceeding the height or width of the rectangle), the resulting arcs scale them according to the respective ratio
  if (cr + cry > height || cr + crx > width) {
    const ratioY = cr / (cr + cry);
    const ratioX = cr / (cr + crx);
    return Math.min(height * ratioY, width * ratioX);
  }

  return cr;
}

/**
 * A tuple describing the corner-radii of a rectangle.
 *
 * The tuple can be understood as `[crtl, crtr, crbr, crbl]` where...
 *
 *  - `crtl` is the top-left corner-radius
 *  - `crtr` is the top-right corner-radius
 *  - `crbr` is the bottom-right corner-radius
 *  - `crbl` is the bottom-left corner-radius
 */
export type RectangleCornerRadiusTuple = [number, number, number, number];

/**
 * A tuple describing the dimensions of a rectangle.
 *
 * The tuple can be understood as `[width, height]` where...
 *
 *  - `width` is the length of the rectangle along the x-axis
 *  - `height` is the length of the rectangle along the y-axis
 */
export type RectangleDimensionTuple = [number, number];
