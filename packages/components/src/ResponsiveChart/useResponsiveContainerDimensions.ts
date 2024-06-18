/* eslint-disable */
// CREDIT TO MATERIAL-UI, MUI-X useChartContainerDimensions.ts

import React from 'react';

/**
 *
 * @param inWidth The width of the container in px. If not defined, it takes the width of the parent element.
 * @param inHeight The height of the container in px. If not defined, it takes the height of the parent element.
 * @returns
 *  - `[containerRef,,]` The ref of the container element.
 *  - `[,width,]` The computed width of the container in px.
 *  - `[,,height]` The computer height of the container in px.
 */
export const useResponsiveContainerDimensions = (
  inWidth?: number,
  inHeight?: number
): [React.RefObject<HTMLDivElement>, number, number] => {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const displayError = React.useRef<boolean>(false);

  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  // Adaptation of the `computeSizeAndPublishResizeEvent` from the grid.
  const computeSize = React.useCallback(() => {
    const mainEl = rootRef?.current;

    if (!mainEl) {
      return;
    }

    const win = ownerWindow(mainEl);
    const computedStyle = win.getComputedStyle(mainEl);

    const newHeight = Math.floor(parseFloat(computedStyle.height)) || 0;
    const newWidth = Math.floor(parseFloat(computedStyle.width)) || 0;

    setWidth(newWidth);
    setHeight(newHeight);
  }, []);

  React.useEffect(() => {
    // Ensure the error detection occurs after the first rendering.
    displayError.current = true;
  }, []);

  useEnhancedEffect(() => {
    // if (inWidth !== undefined && inHeight !== undefined) {
    //   return () => {};
    // }
    computeSize();

    const elementToObserve = rootRef.current;
    if (typeof ResizeObserver === 'undefined') {
      return () => {};
    }

    let animationFrame: number;
    const observer = new ResizeObserver(() => {
      // See https://github.com/mui/mui-x/issues/8733
      animationFrame = requestAnimationFrame(() => {
        computeSize();
      });
    });

    if (elementToObserve) {
      observer.observe(elementToObserve);
    }

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      if (elementToObserve) {
        observer.unobserve(elementToObserve);
      }
    };
  }, [computeSize, inHeight, inWidth]);

  if (process.env.NODE_ENV !== 'production') {
    if (displayError.current && inWidth === undefined && width === 0) {
      console.error(
        `MUI X Charts: ChartContainer does not have \`width\` prop, and its container has no \`width\` defined.`
      );
      displayError.current = false;
    }
    if (displayError.current && inHeight === undefined && height === 0) {
      console.error(
        `MUI X Charts: ChartContainer does not have \`height\` prop, and its container has no \`height\` defined.`
      );
      displayError.current = false;
    }
  }

  return [rootRef, width, height];
};

/**
 * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
 * This is useful for effects that are only needed for client-side rendering but not for SSR.
 *
 * Before you use this hook, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * and confirm it doesn't apply to your use-case.
 */
const useEnhancedEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

function ownerDocument(node: Node | null | undefined): Document {
  return (node && node.ownerDocument) || document;
}

function ownerWindow(node: Node | undefined): Window {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}
