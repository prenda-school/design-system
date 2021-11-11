// Adapted from MUI, from the last source before the emotion migration. Permalink https://github.com/mui-org/material-ui/blob/fe6a7db45959dcd5650f917db0d5a452548e191b/packages/material-ui/src/Collapse/Collapse.js
import * as React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import type { CollapseProps } from '@material-ui/core/Collapse';
import { getTransitionProps } from '@material-ui/core/transitions/utils';
import { useForkRef } from '@material-ui/core/utils';
import makeStyles from '../makeStyles';
import useTheme from '../useTheme';
import { useMergeClasses } from '../utils';

export type CollapseClassKey =
  | 'root'
  | 'horizontal'
  | 'entered'
  | 'hidden'
  | 'wrapper'
  | 'wrapperInner';

export const useStyles = makeStyles<CollapseClassKey>(
  (theme) => ({
    /* Styles applied to the root element. */
    root: {
      height: 0,
      overflow: 'hidden',
      transition: theme.transitions.create('height'),
      '&$horizontal': {
        height: 'auto',
        width: 0,
        transition: theme.transitions.create(['width', 'max-width']),
      },
    },
    /* Pseudo-class applied to the root element if `orientation="horizontal"`. */
    horizontal: {},
    /* Styles applied to the root element when the transition has entered. */
    entered: {
      height: 'auto',
      overflow: 'visible',
      '&$horizontal': {
        width: 'auto',
      },
    },
    /* Styles applied to the root element when the transition has exited and `collapsedSize` != 0px. */
    hidden: {
      visibility: 'hidden',
    },
    /* Styles applied to the outer wrapper element. */
    wrapper: {
      // Hack to get children with a negative margin to not falsify the height computation.
      display: 'flex',
      width: '100%',
      '&$horizontal': {
        width: 'auto',
        height: '100%',
      },
    },
    /* Styles applied to the inner wrapper element. */
    wrapperInner: {
      width: '100%',
      '&$horizontal': {
        // width: 'auto',
        width: '100%',
        height: '100%',
      },
    },
  }),
  { name: 'MuiSparkCollapse' }
);

const Collapse = React.forwardRef<
  CollapseProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any
>(function Collapse(props, ref) {
  const theme = useTheme();

  const {
    children,
    classes: classesProp,
    className,
    collapsedSize: collapsedSizeProp = '0px',
    component: Component = 'div',
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    orientation = 'vertical',
    style,
    timeout = theme.transitions.duration.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition,
    ...other
  } = props;

  const baseClasses = useStyles();
  const classes = useMergeClasses({ baseClasses, classesProp });

  const timer = React.useRef<NodeJS.Timeout>();
  const wrapperRef = React.useRef(null);
  const autoTransitionDuration = React.useRef<number>();
  const collapsedSize =
    typeof collapsedSizeProp === 'number'
      ? `${collapsedSizeProp}px`
      : collapsedSizeProp;
  const isHorizontal = orientation === 'horizontal';
  const size = isHorizontal ? 'width' : 'height';

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const nodeRef = React.useRef(null);
  const handleRef = useForkRef(ref, nodeRef);

  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node = nodeRef.current;

      // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
      if (maybeIsAppearing === undefined) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const getWrapperSize = () =>
    wrapperRef.current
      ? wrapperRef.current[isHorizontal ? 'clientWidth' : 'clientHeight']
      : 0;

  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    if (wrapperRef.current) {
      // Set absolute position to get the size of collapsed content
      wrapperRef.current.style.position = 'absolute';
    }
    node.style[size] = collapsedSize;
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });

  const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
    const wrapperSize = getWrapperSize();

    if (wrapperRef.current) {
      // After the size is read reset the position back to default
      wrapperRef.current.style.position = '';
    }

    const { duration: transitionDuration } = getTransitionProps(
      { style, timeout },
      {
        mode: 'enter',
      }
    );

    if (timeout === 'auto') {
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration =
        typeof transitionDuration === 'string'
          ? transitionDuration
          : `${transitionDuration}ms`;
    }

    node.style[size] = `${wrapperSize}px`;

    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });

  const handleEntered = normalizedTransitionCallback((node, isAppearing) => {
    node.style[size] = 'auto';

    if (onEntered) {
      onEntered(node, isAppearing);
    }
  });

  const handleExit = normalizedTransitionCallback((node) => {
    node.style[size] = `${getWrapperSize()}px`;

    if (onExit) {
      onExit(node);
    }
  });

  const handleExited = normalizedTransitionCallback(onExited);

  const handleExiting = normalizedTransitionCallback((node) => {
    const wrapperSize = getWrapperSize();

    const { duration: transitionDuration } = getTransitionProps(
      { style, timeout },
      {
        mode: 'exit',
      }
    );

    if (timeout === 'auto') {
      const duration2 = theme.transitions.getAutoHeightDuration(wrapperSize);
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration =
        typeof transitionDuration === 'string'
          ? transitionDuration
          : `${transitionDuration}ms`;
    }

    node.style[size] = collapsedSize;

    if (onExiting) {
      onExiting(node);
    }
  });

  const addEndListener = (next) => {
    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTransitionDuration.current || 0);
    }
  };

  return (
    <TransitionComponent
      in={inProp}
      onEnter={handleEnter}
      onEntered={handleEntered}
      onEntering={handleEntering}
      onExit={handleExit}
      onExited={handleExited}
      onExiting={handleExiting}
      addEndListener={addEndListener}
      nodeRef={nodeRef}
      timeout={timeout === 'auto' ? null : timeout}
      {...other}
    >
      {(state, childProps) => (
        <Component
          className={clsx(
            classes.root,
            {
              [classes.horizontal]: isHorizontal,
              [classes.entered]: state === 'entered',
              [classes.hidden]:
                state === 'exited' && !inProp && collapsedSize === '0px',
            },
            className
          )}
          style={{
            [isHorizontal ? 'minWidth' : 'minHeight']: collapsedSize,
            ...style,
          }}
          ref={handleRef}
          {...childProps}
        >
          <div
            className={clsx(classes.wrapper, {
              [classes.horizontal]: isHorizontal,
            })}
            ref={wrapperRef}
          >
            <div
              className={clsx(classes.wrapperInner, {
                [classes.horizontal]: isHorizontal,
              })}
            >
              {children}
            </div>
          </div>
        </Component>
      )}
    </TransitionComponent>
  );
});

Collapse.propTypes = {
  /**
   * The content node to be collapsed.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The height of the container when collapsed.
   */
  collapsedSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes /* @typescript-to-proptypes-ignore */.elementType,
  /**
   * If `true`, the component will transition in.
   */
  in: PropTypes.bool,
  /**
   * @ignore
   */
  onEnter: PropTypes.func,
  /**
   * @ignore
   */
  onEntered: PropTypes.func,
  /**
   * @ignore
   */
  onEntering: PropTypes.func,
  /**
   * @ignore
   */
  onExit: PropTypes.func,
  /**
   * @ignore
   */
  onExited: PropTypes.func,
  /**
   * @ignore
   */
  onExiting: PropTypes.func,
  /**
   * The collapse transition orientation.
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: PropTypes.oneOfType([
    PropTypes.oneOf(['auto']),
    PropTypes.number,
    PropTypes.shape({
      appear: PropTypes.number,
      enter: PropTypes.number,
      exit: PropTypes.number,
    }),
  ]),
};

//@ts-expect-error Property 'muiSupportAuto' does not exist on type
Collapse.muiSupportAuto = true;

export default Collapse;
