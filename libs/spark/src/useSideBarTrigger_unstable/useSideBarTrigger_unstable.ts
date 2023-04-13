import { TransitionProps } from '@material-ui/core/transitions';
import { Unstable_ButtonProps } from '../Unstable_Button';
import { Unstable_IconButtonProps } from '../Unstable_IconButton';
import useSideBar_unstable from '../useSideBar_unstable';
import { useMediaQuery_unstable } from '..';
import { useEffect } from 'react';

export type UseSideBarTriggerParams_unstable = (
  | {
      action: 'close';
      hideOnMdUp?: boolean;
    }
  | {
      action: 'open';
      hideOnMdUp?: boolean;
      hideWhenSideBarOpen?: boolean;
    }
) & {
  hidden?: boolean;
};

export type UseSideBarTriggerResult_unstable = {
  hidden: boolean;
  IconButtonProps: Pick<
    Unstable_IconButtonProps,
    'aria-label' | 'onClick' | 'style'
  >;
  ButtonProps: Pick<Unstable_ButtonProps, 'onClick'>;
  TransitionProps: Pick<TransitionProps, 'in'>;
};

const useSideBarTrigger_unstable = (
  params: UseSideBarTriggerParams_unstable
): UseSideBarTriggerResult_unstable => {
  const sideBar = useSideBar_unstable();
  const isTabletOrMobile = useMediaQuery_unstable(
    (theme) => theme.breakpoints.down('md'),
    { noSsr: true } // prevent inaccurate initial value
  );
  const isMobile = useMediaQuery_unstable(
    (theme) => theme.breakpoints.down('xs'),
    { noSsr: true } // prevent inaccurate initial value
  );

  if (sideBar === null) {
    throw new Error('Missing SideBarProvider');
  }

  const handleClick = () => {
    if (params.action === 'open') {
      sideBar.open();
    } else if (params.action === 'close') {
      sideBar.close();
    }
  };

  let hidden = false;

  if (params.hidden !== undefined) {
    hidden = params.hidden;
  } else if (params.action === 'close' && params.hideOnMdUp !== false) {
    hidden = !isTabletOrMobile;
  } else if (params.action === 'open' && isMobile) {
    hidden = false;
  } else if (
    params.action === 'open' &&
    params.hideWhenSideBarOpen !== false &&
    sideBar.isOpen
  ) {
    hidden = true;
  } else if (params.action === 'open' && params.hideOnMdUp !== false) {
    hidden = !isTabletOrMobile;
  }

  const ariaLabel =
    params.action === 'close' ? 'Close side bar' : 'Open side bar';

  useEffect(() => {
    if (params.action === 'open' && hidden && !sideBar.isOpen) {
      // then there's no way to open it
      sideBar.open();
    }
  }, [params.action, hidden, sideBar]);

  return {
    hidden,
    IconButtonProps: {
      'aria-label': ariaLabel,
      onClick: handleClick,
    },
    ButtonProps: {
      onClick: handleClick,
    },
    TransitionProps: {
      in: !hidden,
    },
  };
};

export default useSideBarTrigger_unstable;
