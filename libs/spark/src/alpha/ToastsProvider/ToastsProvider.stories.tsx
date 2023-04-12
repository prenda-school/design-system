import React, { ReactNode, useState } from 'react';
import type { Meta, Story as DefaultStory } from '@storybook/react/types-6-0';
import { ToastsProvider, ToastsProviderProps, Button, useToasts } from '..';
import { Email, enableHooks, largeWidth } from '../../../stories';

export const _retyped = ToastsProvider as typeof ToastsProvider;

export default {
  title: '@ps/ToastsProvider',
  chromatic: { disableSnapshots: true },
  component: _retyped,
  excludeStories: ['_retyped'],
  decorators: [enableHooks, largeWidth],
} as Meta;

const Template = (args) => (
  <ToastsProvider {...args}>
    <Children />
  </ToastsProvider>
);

type Story = DefaultStory<ToastsProviderProps>;

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
    <Button variant="ghost" color="inverse" size="small">
      Undo
    </Button>
  </span>
);

const Children = () => {
  const toasts = useToasts();

  const [ids, setIds] = useState<Array<ReturnType<typeof toasts.enqueue>>>([]);

  const handleClickWith =
    (children: ReactNode, options?: Parameters<typeof toasts.enqueue>[1]) =>
    () => {
      const id = toasts.enqueue(children, options);
      setIds((ids) => ids.concat(id));
    };

  const handleCloseLastClick = () => {
    toasts.close(ids[ids.length - 1]);
    setIds((ids) => ids.slice(0, -1));
  };

  const handleCloseAllClick = () => {
    toasts.closeAll();
  };

  return (
    <>
      <Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Default')}
      >
        Toast
      </Button>
      <Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Closeable', { closeable: true })}
      >
        Toast closeable
      </Button>
      <Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Icon', { icon: <Email /> })}
      >
        Toast icon
      </Button>
      <Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Icon closeable', {
          icon: <Email />,
          closeable: true,
        })}
      >
        Toast icon closeable
      </Button>
      <Button
        variant="stroked"
        size="small"
        onClick={handleClickWith(messageNode)}
      >
        Toast children=(text and button)
      </Button>
      <Button
        variant="stroked"
        size="small"
        onClick={handleClickWith(messageNode, { closeable: true })}
      >
        Toast children=(text and button) closeable
      </Button>
      <Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Persist', { persist: true })}
      >
        Toast persist
      </Button>
      <Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Prevent duplicate', {
          preventDuplicate: true,
        })}
      >
        Toast preventDuplicate
      </Button>
      <Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Bottom center', {
          placement: 'bottom-center',
        })}
      >
        Toast placement=bottom-center
      </Button>
      <Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Bottom left', { placement: 'bottom-left' })}
      >
        Toast placement=bottom-left
      </Button>
      <Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Bottom right', { placement: 'bottom-right' })}
      >
        Toast placement=bottom-right
      </Button>
      <Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Error', { severity: 'error' })}
      >
        Toast severity=error
      </Button>
      <Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Error closeable', {
          severity: 'error',
          closeable: true,
        })}
      >
        Toast severity=error closeable
      </Button>
      <Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Info', { severity: 'info' })}
      >
        Toast severity=info
      </Button>
      <Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Info closeable', {
          severity: 'info',
          closeable: true,
        })}
      >
        Toast severity=info closeable
      </Button>
      <Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Success', { severity: 'success' })}
      >
        Toast severity=success
      </Button>
      <Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Success closeable', {
          severity: 'success',
          closeable: true,
        })}
      >
        Toast severity=success closeable
      </Button>
      <Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Warning', { severity: 'warning' })}
      >
        Toast severity=warning
      </Button>
      <Button
        variant="stroked"
        size="small"
        onClick={handleClickWith('Warning closeable', {
          severity: 'warning',
          closeable: true,
        })}
      >
        Toast severity=warning closeable
      </Button>
      <Button variant="stroked" size="small" onClick={handleCloseLastClick}>
        Close (id of last)
      </Button>
      <Button variant="stroked" size="small" onClick={handleCloseAllClick}>
        Close All
      </Button>
    </>
  );
};
