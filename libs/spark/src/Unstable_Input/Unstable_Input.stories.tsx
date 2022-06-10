import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import {
  Unstable_Input,
  Unstable_InputProps,
  unstable_createSvgIcon,
} from '..';
import { enableHooks, sparkThemeProvider, statefulValue } from '../../stories';

const Gear = unstable_createSvgIcon(
  <path d="M5.366 20.762l.555-.505-.555.505zm1.134.764l-.375.65.375-.65zm-1.647-2.265l.748.059-.748-.059zm.428-1.299l-.694-.284.694.284zm-.203-1.948l-.649.375v.002l.65-.377zm-.017-.03l-.65.375.001.001.65-.375zm-1.584-1.146l.101-.743-.1.743zm-1.339-.279l-.323.677.323-.677zm-1.043-1.195l.715-.228-.715.228zm0-2.728l.715.229-.715-.23zM2.138 9.44l-.323-.677.323.677zm1.34-.279l.1.743-.1-.743zM5.06 8.015l-.649-.375v.001l.65.374zm.017-.029L4.43 7.61l-.001.002.65.375zm.203-1.948l.694-.284-.005-.012-.69.296zm0 0l-.705.256.016.04.689-.296zm0 0l.705-.256a.732.732 0 00-.01-.028l-.695.284zm-.428-1.3L5.6 4.68l-.748.059zm.513-1.5l-.555-.504.555.505zM6.5 2.475l.375.65a.753.753 0 00.041-.026L6.5 2.474zm0 0l-.362-.657a.752.752 0 00-.054.033l.416.624zm0 0l.362.656a.694.694 0 00.013-.007l-.375-.65zm1.23-.6l.158.733-.159-.733zm1.555.306l.425-.618-.425.618zm.911 1.02l.593-.46-.593.46zm1.788.8l-.001-.75V4zM12 4v-.75V4zm.016 0l.002-.75h-.001V4zm1.788-.8l.593.46-.593-.46zm.91-1.02l-.424-.619.425.619zm1.557-.306l-.16.733.16-.733zm1.229.6l-.375.65.375-.65zm1.134.764l.555-.504-.555.504zm.513 1.5L18.4 4.68l.748.059zm-.428 1.3l-.694-.284a.745.745 0 00-.023.063l.717.22zm0 0l.694.284a.746.746 0 00.023-.064l-.717-.22zm.203 1.948l.649-.375v-.002l-.65.377zm.017.03l.65-.375-.001-.001-.65.375zm1.584 1.146l-.101.743.1-.743zm1.339.28l-.323.676.323-.677zm1.043 1.194l-.715.229.715-.23zm0 2.728l-.715-.228.715.228zm-1.043 1.195l.323.677-.323-.677zm-1.34.279l-.1-.743.1.743zm-1.583 1.147l.649.375v-.001l-.65-.374zm-.017.029l.648.377.001-.002-.65-.375zm-.203 1.948l.694-.284-.694.284zm.428 1.3l.748-.06-.748.06zm-.513 1.5l.555.504-.555-.504zm-1.134.764l.375.65-.375-.65zm-1.23.6l-.158-.733.159.733zm-1.555-.306l.424-.618-.424.618zm-.911-1.02l.593-.46-.593.46zm-1.788-.8v.75h.002l-.002-.75zM12 20v.75V20zm-.016 0l-.002.75h.001V20zm-1.788.8l-.593-.46.593.46zm-.91 1.02l.424.618-.425-.618zm-1.557.306l.16-.733-.16.733zm-2.918-.86c.308.34.746.582 1.314.91l.75-1.3c-.664-.382-.842-.495-.954-.619l-1.11 1.009zm-.706-2.063a2.75 2.75 0 00.706 2.063l1.11-1.009a1.25 1.25 0 01-.32-.937l-1.496-.117zm.482-1.525c-.249.608-.446 1.067-.482 1.525l1.496.117c.013-.166.084-.365.374-1.074l-1.388-.568zm-.157-1.287c.258.444.309.916.157 1.287l1.388.568c.368-.9.184-1.865-.248-2.609l-1.297.754zm-.018-.03l.017.028 1.298-.75-.016-.03-1.299.751zm-1.036-.78c.397.054.78.334 1.035.778l1.3-.748c-.428-.745-1.17-1.385-2.133-1.516l-.202 1.486zm-1.561-.345c.414.197.91.256 1.56.345l.203-1.486c-.759-.104-.967-.141-1.117-.213l-.646 1.354zM.38 13.593a2.75 2.75 0 001.434 1.643l.646-1.354a1.25 1.25 0 01-.651-.746l-1.429.457zM.25 12c0 .656-.009 1.156.131 1.593l1.429-.457c-.051-.159-.06-.37-.06-1.136H.25zm.131-1.593C.241 10.844.25 11.344.25 12h1.5c0-.766.009-.977.06-1.136L.38 10.407zm1.434-1.643A2.75 2.75 0 00.38 10.407l1.429.457a1.25 1.25 0 01.651-.746l-.646-1.354zm1.56-.345c-.65.089-1.146.148-1.56.345l.646 1.354c.15-.072.358-.11 1.117-.213L3.376 8.42zm1.036-.778c-.255.445-.638.724-1.035.778l.202 1.486c.963-.13 1.705-.77 2.134-1.516l-1.3-.748zm.018-.03l-.017.029 1.299.75.016-.028L4.43 7.61zm.158-1.29c.152.372.1.844-.157 1.288l1.297.754c.432-.744.616-1.708.248-2.609l-1.388.568zm.005.012l1.378-.59-1.378.59zm-.016-.039l1.41-.512-1.41.512zm-.47-1.497c.035.458.232.917.48 1.525l1.39-.568c-.29-.71-.362-.908-.375-1.074l-1.496.117zm.705-2.063a2.75 2.75 0 00-.706 2.063l1.496-.117a1.25 1.25 0 01.32-.937l-1.11-1.009zm1.314-.91c-.568.328-1.006.57-1.314.91l1.11 1.009c.112-.123.29-.236.954-.62l-.75-1.299zm-.041.026l.832 1.248-.832-1.248zm.054-.033l.724 1.313-.724-1.313zm1.432-.676c-.448.097-.877.355-1.445.683l.75 1.3c.664-.384.85-.482 1.013-.517L7.57 1.141zm2.14.42a2.75 2.75 0 00-2.14-.42l.318 1.466a1.25 1.25 0 01.973.191l.849-1.236zm1.079 1.18c-.402-.519-.701-.92-1.08-1.18l-.848 1.237c.137.094.273.256.742.861l1.186-.918zm1.193.509c-.512.001-.947-.191-1.193-.51l-1.186.92c.595.768 1.52 1.092 2.382 1.09l-.003-1.5zm.017 0h-.016l.001 1.5h.017l-.002-1.5zm.018 0H12l-.002 1.5h.016l.002-1.5zm1.194-.51c-.246.318-.68.511-1.194.51l-.002 1.5c.86.002 1.786-.322 2.382-1.09l-1.186-.92zm1.08-1.179c-.379.26-.678.661-1.08 1.18l1.186.918c.47-.605.605-.767.742-.86L14.29 1.56zm2.139-.42a2.75 2.75 0 00-2.14.42l.85 1.237a1.25 1.25 0 01.972-.191l.318-1.466zm1.445.683c-.568-.328-.997-.586-1.445-.683l-.318 1.466c.162.035.35.133 1.013.516l.75-1.299zm1.314.91c-.308-.34-.746-.582-1.314-.91l-.75 1.3c.664.382.842.495.954.619l1.11-1.009zm.706 2.063a2.75 2.75 0 00-.706-2.063l-1.11 1.009c.231.255.347.594.32.937l1.496.117zm-.482 1.525c.248-.608.446-1.067.482-1.525l-1.496-.117c-.013.166-.084.365-.374 1.074l1.388.568zm.023-.064l-1.434-.44 1.434.44zm.134 1.351c-.258-.444-.309-.916-.157-1.287l-1.388-.568c-.368.9-.184 1.865.248 2.61l1.297-.755zm.018.03l-.017-.028-1.299.75.017.03 1.299-.751zm1.036.78c-.397-.054-.78-.333-1.035-.778l-1.3.748c.428.745 1.17 1.385 2.133 1.516l.202-1.486zm1.561.345c-.414-.197-.91-.256-1.56-.345l-.203 1.486c.759.104.967.141 1.117.213l.646-1.354zm1.434 1.643a2.75 2.75 0 00-1.434-1.643l-.646 1.354c.31.148.546.418.651.746l1.429-.457zM23.75 12c0-.656.009-1.156-.131-1.593l-1.429.457c.051.159.06.37.06 1.136h1.5zm-.131 1.593c.14-.437.131-.937.131-1.593h-1.5c0 .766-.009.977-.06 1.136l1.429.457zm-1.434 1.643a2.75 2.75 0 001.434-1.643l-1.429-.457a1.25 1.25 0 01-.651.746l.646 1.354zm-1.56.345c.65-.089 1.146-.147 1.56-.345l-.646-1.354c-.15.072-.358.11-1.117.213l.202 1.486zm-1.037.778c.256-.445.64-.724 1.036-.778l-.202-1.486c-.963.131-1.705.77-2.134 1.516l1.3.748zm-.017.03l.017-.029-1.299-.75-.017.028 1.299.751zm-.158 1.29c-.152-.372-.1-.844.157-1.288l-1.297-.754c-.432.744-.616 1.708-.248 2.61l1.388-.569zm.482 1.524c-.036-.457-.233-.917-.482-1.524l-1.388.567c.29.71.361.908.374 1.074l1.496-.117zm-.706 2.063a2.75 2.75 0 00.706-2.063l-1.496.117a1.25 1.25 0 01-.32.938l1.11 1.008zm-1.314.91c.568-.328 1.006-.57 1.314-.91l-1.11-1.008c-.112.123-.29.236-.954.619l.75 1.299zm-1.445.683c.448-.097.877-.355 1.445-.683l-.75-1.3c-.664.384-.85.482-1.013.517l.318 1.466zm-2.14-.42a2.75 2.75 0 002.14.42l-.318-1.466a1.25 1.25 0 01-.973-.191l-.849 1.237zm-1.079-1.18c.402.519.701.92 1.08 1.18l.848-1.237c-.137-.094-.273-.256-.742-.861l-1.186.918zm-1.194-.509c.513-.001.948.192 1.194.51l1.186-.92c-.596-.768-1.521-1.092-2.382-1.09l.002 1.5zm-.016 0h.016l-.002-1.5H12l.002 1.5zm-.018 0h.016l.002-1.5h-.017l-.001 1.5zm-1.194.51c.246-.319.68-.511 1.193-.51l.003-1.5c-.861-.002-1.787.322-2.382 1.09l1.186.92zm-1.08 1.178c.379-.26.678-.66 1.08-1.179l-1.186-.918c-.47.605-.605.767-.742.86l.849 1.237zm-2.139.42a2.75 2.75 0 002.14-.42l-.85-1.236a1.25 1.25 0 01-.972.19L7.57 22.86zm-1.445-.682c.568.328.997.586 1.445.683l.318-1.466c-.162-.035-.35-.133-1.013-.516l-.75 1.299zM14.25 12A2.25 2.25 0 0112 14.25v1.5A3.75 3.75 0 0015.75 12h-1.5zM12 9.75A2.25 2.25 0 0114.25 12h1.5A3.75 3.75 0 0012 8.25v1.5zM9.75 12A2.25 2.25 0 0112 9.75v-1.5A3.75 3.75 0 008.25 12h1.5zM12 14.25A2.25 2.25 0 019.75 12h-1.5A3.75 3.75 0 0012 15.75v-1.5z" />,
  'Sb_Gear'
);
const Info = unstable_createSvgIcon(
  <path d="M12 2.75a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5zM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12zM12 10.25a.75.75 0 01.75.75v5a.75.75 0 01-1.5 0v-5a.75.75 0 01.75-.75zM12 9a1 1 0 100-2 1 1 0 000 2z" />,
  'Sb_Info'
);

interface Sb_Unstable_InputProps extends Unstable_InputProps {
  defaultValue?: Unstable_InputProps['defaultValue'];
  disabled?: Unstable_InputProps['disabled'];
  error?: Unstable_InputProps['error'];
  fullWidth?: Unstable_InputProps['fullWidth'];
  id?: Unstable_InputProps['id'];
  leadingEl?: Unstable_InputProps['leadingEl'];
  maxRows?: Unstable_InputProps['maxRows'];
  minRows?: Unstable_InputProps['minRows'];
  multiline?: Unstable_InputProps['multiline'];
  name?: Unstable_InputProps['name'];
  placeholder?: Unstable_InputProps['placeholder'];
  readOnly?: Unstable_InputProps['readOnly'];
  required?: Unstable_InputProps['required'];
  trailingEl?: Unstable_InputProps['trailingEl'];
  type?: Unstable_InputProps['type'];
  value?: Unstable_InputProps['value'];
}

// underlying props don't have descriptions
export const Sb_Unstable_Input = (props: Sb_Unstable_InputProps) => (
  <Unstable_Input {...props} />
);

export default {
  title: '@ps/Unstable_Input',
  component: Sb_Unstable_Input,
  excludeStories: ['Sb_Unstable_Input'],
  argTypes: {
    leadingEl: {
      control: 'select',
      options: ['undefined', '$', 'Gear'],
      mapping: {
        undefined: undefined,
        $: '$',
        Gear: <Gear />,
      },
    },
    trailingEl: {
      control: 'select',
      options: ['undefined', 'kg', 'Info'],
      mapping: {
        undefined: undefined,
        kg: 'kg',
        Info: <Info />,
      },
    },
  },
  args: {
    // start component as "controlled"
    value: '',
  },
  decorators: [statefulValue, enableHooks],
} as Meta;

const Template = (args) => <Unstable_Input {...args} />;

export const Default: Story = Template.bind({});
Default.storyName = '(default)';

export const SparkThemeProvider: Story = Template.bind({});
SparkThemeProvider.decorators = [sparkThemeProvider];
SparkThemeProvider.storyName = '(SparkThemeProvider)';

export const Hover: Story = Template.bind({});
Hover.parameters = { pseudo: { hover: true } };
Hover.storyName = ':hover';

export const FocusVisible: Story = Template.bind({});
FocusVisible.parameters = { pseudo: { focusVisible: true } };
FocusVisible.storyName = ':focus-visible';

export const Disabled: Story = Template.bind({});
Disabled.args = { disabled: true };
Disabled.storyName = 'disabled';

export const DisabledHover: Story = Template.bind({});
DisabledHover.args = { disabled: true };
DisabledHover.parameters = { pseudo: { hover: true } };
DisabledHover.storyName = 'disabled :hover';

export const Error: Story = Template.bind({});
Error.args = { error: true };
Error.storyName = 'error';

export const LeadingEl: Story = Template.bind({});
LeadingEl.args = { leadingEl: 'Gear' };
LeadingEl.storyName = 'leadingEl';

export const Success: Story = Template.bind({});
Success.args = { success: true };
Success.storyName = 'success';

export const TrailingEl: Story = Template.bind({});
TrailingEl.args = { trailingEl: 'Info' };
TrailingEl.storyName = 'trailingEl';

export const MultilineMinRows: Story = Template.bind({});
MultilineMinRows.args = { multiline: true, minRows: 3 };
MultilineMinRows.storyName = 'multiline minRows';

export const MultilineMinRowsDisabled: Story = Template.bind({});
MultilineMinRowsDisabled.args = {
  multiline: true,
  minRows: 3,
  disabled: true,
};
MultilineMinRowsDisabled.storyName = 'multiline minRows disabled';

export const MultilineMinRowsTrailingEl: Story = Template.bind({});
MultilineMinRowsTrailingEl.args = {
  multiline: true,
  minRows: 3,
  trailingEl: 'Info',
};
MultilineMinRowsTrailingEl.storyName = 'multiline minRows trailingEl';

export const MultilineMinRowsLeadingEl: Story = Template.bind({});
MultilineMinRowsLeadingEl.args = {
  multiline: true,
  minRows: 3,
  leadingEl: 'Gear',
};
MultilineMinRowsLeadingEl.storyName = 'multiline minRows leadingEl';

export const Placeholder: Story = Template.bind({});
Placeholder.args = { placeholder: 'Placeholder' };
Placeholder.storyName = 'placeholder';

export const Value: Story = Template.bind({});
Value.args = { value: 'Text' };
Value.storyName = 'value';

export const ValueHover: Story = Template.bind({});
ValueHover.args = { value: 'Text' };
ValueHover.parameters = { pseudo: { hover: true } };
ValueHover.storyName = 'value :hover';

export const ValueFocusVisible: Story = Template.bind({});
ValueFocusVisible.args = { value: 'Text' };
ValueFocusVisible.parameters = { pseudo: { focusVisible: true } };
ValueFocusVisible.storyName = 'value :focus-visible';

export const ValueDisabled: Story = Template.bind({});
ValueDisabled.args = { value: 'Text', disabled: true };
ValueDisabled.storyName = 'value disabled';

export const ValueTrailingEl: Story = Template.bind({});
ValueTrailingEl.args = { value: 'Text', trailingEl: 'Info' };
ValueTrailingEl.storyName = 'value trailingEl';

export const ValueDisabledHover: Story = Template.bind({});
ValueDisabledHover.args = { value: 'Text', disabled: true };
ValueDisabledHover.parameters = { pseudo: { hover: true } };
ValueDisabledHover.storyName = 'value disabled :hover';

export const ValueLeadingEl: Story = Template.bind({});
ValueLeadingEl.args = { value: 'Text', leadingEl: 'Gear' };
ValueLeadingEl.storyName = 'value leadingEl';

export const ValueMultilineMinRows: Story = Template.bind({});
ValueMultilineMinRows.args = { value: 'Text', multiline: true, minRows: 3 };
ValueMultilineMinRows.storyName = 'value multiline minRows';

export const ValueMultilineMinRowsDisabled: Story = Template.bind({});
ValueMultilineMinRowsDisabled.args = {
  value: 'Text',
  multiline: true,
  minRows: 3,
  disabled: true,
};
ValueMultilineMinRowsDisabled.storyName = 'value multiline minRows disabled';

export const ValueMultilineMinRowsTrailingEl: Story = Template.bind({});
ValueMultilineMinRowsTrailingEl.args = {
  value: 'Text',
  multiline: true,
  minRows: 3,
  trailingEl: 'Info',
};
ValueMultilineMinRowsTrailingEl.storyName =
  'value multiline minRows trailingEl';

export const ValueMultilineMinRowsLeadingEl: Story = Template.bind({});
ValueMultilineMinRowsLeadingEl.args = {
  value: 'Text',
  multiline: true,
  minRows: 3,
  leadingEl: 'Gear',
};
ValueMultilineMinRowsLeadingEl.storyName = 'value multiline minRows leadingEl ';
