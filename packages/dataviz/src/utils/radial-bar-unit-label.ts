import { SvgProperties } from 'csstype';
import { withEpsilon } from './epsilon';
import { RadialBarParams, calcCoordinatesOnRadialBar } from './radial-bar';
import { RadialBarScaleParams } from './radial-bar-scale';
import { RadialBarUnitsParams } from './radial-bar-units';
import { getValueAngleScale } from './scale';

export type RadialBarUnitLabelParams = {
  /**
   * The value at which the unit label is located.
   */
  at: number;
  /**
   * The offset of the unit label from the position.
   */
  offset?: RadialBarUnitLabelOffset;
  /**
   * The position of the unit label relative to the radial bar's radii.
   */
  position?: RadialBarUnitLabelPosition;
};

export type DrawRadialBarUnitLabelParams = {
  /**
   * The radial bar on which the unit label is located.
   */
  radialBar: RadialBarParams;
  /**
   * The scale of the radial bar.
   */
  scale: RadialBarScaleParams;
  /**
   * The unit label properties.
   */
  unitLabel: RadialBarUnitLabelParams;
  /**
   * The default properties for each unit label.
   */
  units: RadialBarUnitsParams;
};

export type DrawRadialBarUnitLabelResult = {
  x: number;
  y: number;
  dominantBaseline: SvgProperties['dominantBaseline'];
  textAnchor: SvgProperties['textAnchor'];
};

export function drawRadialBarUnitLabel(
  params: DrawRadialBarUnitLabelParams
): DrawRadialBarUnitLabelResult {
  const angleScale = getValueAngleScale({
    value: {
      min: params.scale.valueMin,
      max: params.scale.valueMax,
    },
    angle: {
      min: params.scale.angleMin,
      max: params.scale.angleMax,
    },
  });

  const angle = angleScale(params.unitLabel.at);

  const offset = evalRadialBarUnitLabelOffset(
    params.unitLabel.offset ?? params.units.offset
  );

  const position = evalRadialBarUnitLabelPosition(
    params.unitLabel.position ?? params.units.position
  );

  let radiusOfCoords;
  if (position === 'inside') {
    radiusOfCoords =
      params.radialBar.radius * params.radialBar.ratio + -1 * offset;
  } else if (position === 'outside') {
    radiusOfCoords = params.radialBar.radius + offset;
  } else {
    throw Error(
      `[@prenda/data-viz/RadialBarUnitLabel] Invalid position: '${position}'. Expected 'inside' | 'outside'.`
    );
  }

  const coordinates = calcCoordinatesOnRadialBar({
    angle,
    radius: radiusOfCoords,
  });

  const quadrant = getQuadrant({ angle });
  const refAngle = getRefAngle({ angle });

  let textAnchor: SvgProperties['textAnchor'] = 'inherit';
  if (position === 'outside') {
    if (refAngle === '0' || refAngle === 'pi' || refAngle === '2pi') {
      textAnchor = 'middle';
    } else if (refAngle === 'pi/2' || quadrant === '1' || quadrant === '4') {
      textAnchor = 'start';
    } else if (refAngle === '3pi/2' || quadrant === '2' || quadrant === '3') {
      textAnchor = 'end';
    }
  } else if (position === 'inside') {
    if (refAngle === '0' || refAngle === 'pi' || refAngle === '2pi') {
      textAnchor = 'middle';
    } else if (refAngle === 'pi/2' || quadrant === '1' || quadrant === '4') {
      textAnchor = 'end';
    } else if (refAngle === '3pi/2' || quadrant === '2' || quadrant === '3') {
      textAnchor = 'start';
    }
  }

  let dominantBaseline: SvgProperties['dominantBaseline'] = 'inherit';
  if (position === 'outside') {
    if (refAngle === 'pi/2' || refAngle === '3pi/2') {
      dominantBaseline = 'central';
    } else if (
      refAngle === '0' ||
      refAngle === '2pi' ||
      quadrant === '1' ||
      quadrant === '2'
    ) {
      dominantBaseline = 'alphabetic';
    } else if (refAngle === 'pi' || quadrant === '3' || quadrant === '4') {
      dominantBaseline = 'hanging';
    }
  } else if (position === 'inside') {
    if (refAngle === 'pi/2' || refAngle === '3pi/2') {
      dominantBaseline = 'central';
    } else if (
      refAngle === '0' ||
      refAngle === '2pi' ||
      quadrant === '1' ||
      quadrant === '2'
    ) {
      dominantBaseline = 'hanging';
    } else if (refAngle === 'pi' || quadrant === '3' || quadrant === '4') {
      dominantBaseline = 'alphabetic';
    }
  }

  return {
    x: coordinates.x,
    y: coordinates.y,
    textAnchor,
    dominantBaseline,
  };
}

export type RadialBarUnitLabelOffset = number;

const DEFAULT_RADIAL_BAR_UNIT_LABEL_OFFSET: RadialBarUnitLabelOffset = 0;

export function evalRadialBarUnitLabelOffset(param?: RadialBarUnitLabelOffset) {
  return param ?? DEFAULT_RADIAL_BAR_UNIT_LABEL_OFFSET;
}

export type RadialBarUnitLabelPosition = 'outside' | 'inside';

const DEFAULT_RADIAL_BAR_UNIT_LABEL_POSITION: RadialBarUnitLabelPosition =
  'outside';

export function evalRadialBarUnitLabelPosition(
  param?: RadialBarUnitLabelPosition
) {
  return param ?? DEFAULT_RADIAL_BAR_UNIT_LABEL_POSITION;
}

const normalizeAngle = (params: { angle: number }) => {
  const remainder = params.angle % (2 * Math.PI);
  const positive = remainder < 0 ? 2 * Math.PI + remainder : remainder;
  return withEpsilon(positive);
};

const getQuadrant = (params: { angle: number }) => {
  const angle = normalizeAngle({ angle: params.angle });

  if (angle > 0 && angle < Math.PI / 2) {
    return '1' as const;
  } else if (angle > Math.PI / 2 && angle < Math.PI) {
    return '4' as const;
  } else if (angle > Math.PI && angle < (3 * Math.PI) / 2) {
    return '3' as const;
  } else if (angle > (3 * Math.PI) / 2 && angle < 2 * Math.PI) {
    return '2' as const;
  } else {
    return null;
  }
};

const getRefAngle = (params: { angle: number }) => {
  const angle = normalizeAngle({ angle: params.angle });

  if (angle === 0) {
    return '0' as const;
  } else if (withEpsilon(angle - Math.PI / 2) === 0) {
    return 'pi/2' as const;
  } else if (withEpsilon(angle - Math.PI) === 0) {
    return 'pi' as const;
  } else if (withEpsilon(angle - (3 * Math.PI) / 2) === 0) {
    return '3pi/2' as const;
  } else if (withEpsilon(angle - 2 * Math.PI) === 0) {
    return '2pi';
  } else {
    return null;
  }
};
