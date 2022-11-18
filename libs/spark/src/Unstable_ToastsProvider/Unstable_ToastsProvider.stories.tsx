import React, { ReactNode, useState } from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import {
  Unstable_ToastsProvider,
  Unstable_ToastsProviderProps,
  Unstable_Button,
  useToasts_unstable,
  Unstable_ToastId,
  Unstable_ToastsContextEnqueueOptions,
} from '..';
import { Email, enableHooks, largeWidth } from '../../stories';

export const _retyped = Unstable_ToastsProvider as typeof Unstable_ToastsProvider;

export default {
  title: '@ps/ToastsProvider',
  chromatic: { disableSnapshots: true },
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [enableHooks, largeWidth],
} as Meta;

const Template = (args) => (
  <Unstable_ToastsProvider {...args}>
    <Children />
  </Unstable_ToastsProvider>
);

type Story = DefaultStory<Unstable_ToastsProviderProps>;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const Limit: Story = Template.bind({});
Limit.args = { limit: 5 };
Limit.storyName = 'limit=5';

/* Children */

const messageNode = (
  <span
    style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <span>Text</span>
    <Unstable_Button variant="ghost" color="inverse" size="small">
      Undo
    </Unstable_Button>
  </span>
);

const Children = () => {
  const toasts = useToasts_unstable();

  const [lastId, setLastId] = useState<Unstable_ToastId>();

  const handleClickWith = (
    children: ReactNode,
    options?: Unstable_ToastsContextEnqueueOptions
  ) => () => {
    const id = toasts.enqueue(children, options);
    setLastId(id);
  };
  const handleCloseLastClick = () => {
    toasts.close(lastId);
  };
  const handleCloseAllClick = () => {
    toasts.closeAll();
  };

  return (
    <>
      <Unstable_Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Default')}
      >
        Toast
      </Unstable_Button>
      <Unstable_Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Closeable', { closeable: true })}
      >
        Toast closeable
      </Unstable_Button>
      <Unstable_Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Icon', { icon: <Email /> })}
      >
        Toast icon
      </Unstable_Button>
      <Unstable_Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Icon closeable', {
          icon: <Email />,
          closeable: true,
        })}
      >
        Toast icon closeable
      </Unstable_Button>
      <Unstable_Button
        variant="stroked"
        size="small"
        onClick={handleClickWith(messageNode)}
      >
        Toast children=(text and button)
      </Unstable_Button>
      <Unstable_Button
        variant="stroked"
        size="small"
        onClick={handleClickWith(messageNode, { closeable: true })}
      >
        Toast children=(text and button) closeable
      </Unstable_Button>
      <Unstable_Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Persist', { persist: true })}
      >
        Toast persist
      </Unstable_Button>
      <Unstable_Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Prevent duplicate', {
          preventDuplicate: true,
        })}
      >
        Toast preventDuplicate
      </Unstable_Button>
      <Unstable_Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Bottom center', {
          placement: 'bottom-center',
        })}
      >
        Toast placement=bottom-center
      </Unstable_Button>
      <Unstable_Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Bottom left', { placement: 'bottom-left' })}
      >
        Toast placement=bottom-left
      </Unstable_Button>
      <Unstable_Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Bottom right', { placement: 'bottom-right' })}
      >
        Toast placement=bottom-right
      </Unstable_Button>
      <Unstable_Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Error', { severity: 'error' })}
      >
        Toast severity=error
      </Unstable_Button>
      <Unstable_Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Error closeable', {
          severity: 'error',
          closeable: true,
        })}
      >
        Toast severity=error closeable
      </Unstable_Button>
      <Unstable_Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Info', { severity: 'info' })}
      >
        Toast severity=info
      </Unstable_Button>
      <Unstable_Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Info closeable', {
          severity: 'info',
          closeable: true,
        })}
      >
        Toast severity=info closeable
      </Unstable_Button>
      <Unstable_Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Success', { severity: 'success' })}
      >
        Toast severity=success
      </Unstable_Button>
      <Unstable_Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Success closeable', {
          severity: 'success',
          closeable: true,
        })}
      >
        Toast severity=success closeable
      </Unstable_Button>
      <Unstable_Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Warning', { severity: 'warning' })}
      >
        Toast severity=warning
      </Unstable_Button>
      <Unstable_Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Warning closeable', {
          severity: 'warning',
          closeable: true,
        })}
      >
        Toast severity=warning closeable
      </Unstable_Button>
      <Unstable_Button
        variant="stroked"
        size="small"
        onClick={handleCloseLastClick}
      >
        Close (id of last)
      </Unstable_Button>
      <Unstable_Button
        variant="stroked"
        size="small"
        onClick={handleCloseAllClick}
      >
        Close All
      </Unstable_Button>
    </>
  );
};
