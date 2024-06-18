/* Implementations of path data commands according to the W3 SVG specification. */

/**
 * Move from the current point.
 * @param absolute Whether the command describes absolute or relative coordinates.
 * @param x The x-coordinate of the end point, when `command: "absolute"`. The shift along the x-axis of the current point to get the end point, when `command: "relative"`.
 * @param y The y-coordinate of the end point, when `command: "absolute"`. The shift along the y-axis of the current point to get the end point, when `command: "relative"`.
 * @see {@link https://www.w3.org/TR/SVG/paths.html#PathDataMovetoCommands W3 SVG Specification, Paths, The "moveto" commands}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#moveto_path_commands MDN Web Docs, SVG, Attribute reference, D, MoveTo path commands}
 */
export function moveTo(absolute: boolean, x: number, y: number): string {
  return `${absolute ? 'M' : 'm'}${x},${y}`;
}

/**
 * Draw a straight line from the current position to the initial point of the path.
 * @see {@link https://www.w3.org/TR/SVG/paths.html#PathDataClosePathCommand W3 SVG Specification, Paths, The "closepath" command}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#closepath MDN Web Docs, SVG, Attribute reference, D, ClosePath}
 */
export function closePath(): string {
  return 'z';
}

/**
 * Draw a vertical line from the current point.
 * @param absolute Whether the command describes absolute or relative coordinates.
 * @param y The y-coordinate of the end point, when `command: "absolute"`. The shift along the y-axis of the current point to get the end point, when `command: "relative"`.
 * @see {@link https://www.w3.org/TR/SVG/paths.html#PathDataLinetoCommands W3 SVG Specification, Paths, The "lineto" commands}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#lineto_path_commands MDN Web Docs, SVG, Attribute reference, D, LineTo path commands}
 */
export function drawVerticalLineTo(absolute: boolean, y: number): string {
  return `${absolute ? 'V' : 'v'}${y}`;
}

/**
 * Draw a horizontal line from the current point.
 * @param absolute Whether the command describes absolute or relative coordinates.
 * @param x The x-coordinate of the end point, when `command: "absolute"`. The shift along the x-axis of the current point to get the end point, when `command: "relative"`.
 * @see {@link https://www.w3.org/TR/SVG/paths.html#PathDataLinetoCommands W3 SVG Specification, Paths, The "lineto" commands}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#lineto_path_commands MDN Web Docs, SVG, Attribute reference, D, LineTo path commands}
 */
export function drawHorizontalLineTo(absolute: boolean, x: number): string {
  return `${absolute ? 'H' : 'h'}${x}`;
}

/**
 * Draws an elliptical arc from the current point to `(x, y)`.
 * @param absolute Whether the command describes absolute or relative coordinates.
 * @param rx The radius of the ellipse on the x-axis. Should be greater than zero.
 * @param ry The radius of the ellipse on the y-axis. Should be greater than zero.
 * @param angle A rotation (in degrees) of the ellipse relative to the x-axis.
 * @param largeArcFlag Choice of large arc (`1`) or small arc (`0`).
 * @param sweepFlag Choice of a clockwise arc (`1`) or counterclockwise arc (`0`).
 * @param x The x-coordinate of the end point, when `command: "absolute"`. The shift along the x-axis of the current point to get the end point, when `command: "relative"`.
 * @param y The y-coordinate of the end point, when `command: absolute"`. The shift along the y-axis of the current point to get the end point, when `command: relative"`.
 * @see {@link https://www.w3.org/TR/SVG/paths.html#PathDataEllipticalArcCommands W3 SVG Specification, Paths, Elliptical arc commands}
 * @see {@link https://www.w3.org/TR/SVG/implnote.html#ArcCorrectionOutOfRangeRadii W3 SVG Specification, Notes, Correction of out-of-range radii}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#elliptical_arc_curve MDN Web Docs, SVG, Attribute reference, D, Elliptical arc curve}
 */
export function drawEllipticalArc(
  absolute: boolean,
  rx: number,
  ry: number,
  angle: number,
  largeArcFlag: 1 | 0,
  sweepFlag: 1 | 0,
  x: number,
  y: number
): string {
  return `${
    absolute ? 'A' : 'a'
  }${rx},${ry} ${angle} ${largeArcFlag} ${sweepFlag} ${x},${y}`;
}
