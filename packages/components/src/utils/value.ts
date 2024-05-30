/**
 * A unit-less value representing a quantity.
 */
export type Value = number;

/**
 * A numerical, pixel, or percentage value.
 */
export type WideValue = number | string;

/**
 * Narrows numerical, pixel, and percentage values into numerical values.
 * @param wideValue The value provided by the developer. Can either be a number or a string with '%' or 'px'.
 * @param reference The numerical value associated to 100%.
 * @returns The numerical value associated to the provided value.
 * ---
 *
 * #### Credit
 *
 * [1] {@link https://github.com/mui/mui-x/blob/20c0f52833f5ab0d5a161425e47de861f8f54646/packages/x-charts/src/internals/utils.ts#L30 @mui/x-charts, getPercentageValue(...)}.
 */
export function getNumericalValue(
  wideValue: WideValue,
  reference: Value
): Value {
  if (typeof wideValue === 'number') {
    return wideValue;
  }

  if (wideValue === '100%') {
    // avoid potential rounding issues
    return reference;
  }

  if (wideValue.endsWith('%')) {
    const percentage = Number.parseFloat(
      wideValue.slice(0, wideValue.length - 1)
    );

    if (!Number.isNaN(percentage)) {
      const amount = (percentage * reference) / 100;
      return amount;
    }
  }

  if (wideValue.endsWith('px')) {
    const pixels = Number.parseFloat(wideValue.slice(0, wideValue.length - 2));

    if (!Number.isNaN(pixels)) {
      return pixels;
    }
  }

  throw Error(
    `PDS: Received an unknown value \`${wideValue}\`. It should be a number or a string ending in "%" or "px".`
  );
}
