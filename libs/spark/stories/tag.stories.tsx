import * as React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Tag, Box, Typography, withStyles } from '../src';

export default {
  title: 'prenda-spark/Tag',
  component: Tag,
  argTypes: {
    variant: {
      control: 'select',
      options: ['subtle', 'bold'],
    },
    color: {
      control: 'select',
      options: [
        'default',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
      ],
    },
    disabled: { control: 'boolean' },
    onDelete: { control: 'select', options: ['undefined', 'function() {}'] },
  },
  args: {
    variant: 'subtle',
    color: 'default',
    disabled: false,
    onDelete: undefined,
  },
} as Meta;

const handleDelete = () => console.log('delete');

const Template = ({ onDelete, args }) => (
  <Box p={1}>
    <Tag
      label="Label"
      onDelete={onDelete ? handleDelete : undefined}
      {...args}
    />
  </Box>
);

export const Configurable: Story = Template.bind({});

const GridContainer = (props) => (
  <Box
    m={1}
    display="grid"
    gridTemplateColumns="repeat(3, 85px)"
    gridGap="16px"
    alignItems="center"
    justifyItems="center"
    {...props}
  />
);

const ColorAndVariantTemplate = (args) => (
  <GridContainer>
    <span>Color / Variant (Delete)</span>
    <span>subtle</span>
    <span>bold</span>
    <span>default</span>
    <span>
      <Tag {...args} label="Label" {...args} />
    </span>
    <span>
      <Tag {...args} label="Label" variant="bold" />
    </span>
    <span>red</span>
    <span>
      <Tag {...args} label="Label" color="red" />
    </span>
    <span>
      <Tag {...args} label="Label" color="red" variant="bold" />
    </span>
    <span>orange</span>
    <span>
      <Tag {...args} label="Label" color="orange" />
    </span>
    <span>
      <Tag {...args} label="Label" color="orange" variant="bold" />
    </span>
    <span>yellow</span>
    <span>
      <Tag {...args} label="Label" color="yellow" />
    </span>
    <span>
      <Tag {...args} label="Label" color="yellow" variant="bold" />
    </span>
    <span>green</span>
    <span>
      <Tag {...args} label="Label" color="green" />
    </span>
    <span>
      <Tag {...args} label="Label" color="green" variant="bold" />
    </span>
    <span>blue</span>
    <span>
      <Tag {...args} label="Label" color="blue" />
    </span>
    <span>
      <Tag {...args} label="Label" color="blue" variant="bold" />
    </span>
    <span>purple</span>
    <span>
      <Tag {...args} label="Label" color="purple" />
    </span>
    <span>
      <Tag {...args} label="Label" color="purple" variant="bold" />
    </span>
  </GridContainer>
);

export const ColorAndVariant: Story = ColorAndVariantTemplate.bind({});

export const ColorVariantDelete: Story = ColorAndVariantTemplate.bind({});
ColorVariantDelete.args = { onDelete: handleDelete };

export const ColorVariantDeleteHover: Story = ColorAndVariantTemplate.bind({});
ColorVariantDeleteHover.args = { onDelete: handleDelete };
ColorVariantDeleteHover.parameters = { pseudo: { hover: true } };

export const ColorVariantDeleteFocus: Story = ColorAndVariantTemplate.bind({});
ColorVariantDeleteFocus.args = { onDelete: handleDelete };
ColorVariantDeleteFocus.parameters = { pseudo: { focus: true } };

export const ColorVariantDeleteDisabled: Story = ColorAndVariantTemplate.bind(
  {}
);
ColorVariantDeleteDisabled.args = { onDelete: handleDelete, disabled: true };

// TODO: extract these to reusable decorator/template?

const H1 = (props) => (
  <Typography variant="heading-md" component="h1" gutterBottom {...props} />
);

const H2 = withStyles({
  root: { marginLeft: 8 },
})((props) => (
  // TODO: remove me once #200 merged
  // @ts-expect-error No overload matches this call.
  <Typography variant="heading-sm" component="h2" {...props} />
));

const SmCode = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.lightGrey,
    padding: '0 2px',
  },
}))((props) => <Typography variant="code-sm" display="inline" {...props} />);

const Li = (props) => (
  <Typography variant="paragraph-lg" component="li" {...props} />
);

const LiCode = (props) => (
  <Li>
    <SmCode {...props} />
  </Li>
);

const DocumentationTemplate = () => (
  <>
    <H1>Underlying Component</H1>
    <ul>
      <Li>
        Chip,{' '}
        <a href="https://material-ui.com/components/chips/#chip">
          https://material-ui.com/components/chips/#chip
        </a>
      </Li>
    </ul>
    <Box m={1} />
    <H1>API</H1>
    <H2>Prop Names</H2>
    <ul>
      <Li>
        Extends{' '}
        <a href="https://material-ui.com/api/chip/#props">
          https://material-ui.com/api/chip/#props
        </a>
      </Li>
      <Li>Omits:</Li>
      <ul>
        <Li>
          <SmCode>color</SmCode>
          <ul>
            <Li>
              default underlying value: <SmCode>'default'</SmCode>
            </Li>
          </ul>
        </Li>
        <Li>
          <SmCode>size</SmCode>
          <ul>
            <Li>
              default underlying value: <SmCode>'medium'</SmCode>
            </Li>
          </ul>
        </Li>
        <Li>
          <SmCode>variant</SmCode>
          <ul>
            <Li>
              default underlying value: <SmCode>'default'</SmCode>
            </Li>
          </ul>
        </Li>
      </ul>
      <Li>
        Adds:
        <ul>
          <LiCode>color</LiCode>
          <ul>
            <Li>
              type:{' '}
              <SmCode>
                'default' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' |
                'purple
              </SmCode>
            </Li>
            <Li>
              default: <SmCode>'default'</SmCode>
            </Li>
          </ul>
          <LiCode>variant</LiCode>
          <ul>
            <Li>
              type: <SmCode>'subtle' | 'bold'</SmCode>
            </Li>
            <Li>
              default: <SmCode>'subtle'</SmCode>
            </Li>
          </ul>
        </ul>
      </Li>
    </ul>
    <H2>CSS Rule Names</H2>
    <ul>
      <Li>
        Extends{' '}
        <a href="https://material-ui.com/api/chip/#css">
          https://material-ui.com/api/chip/#css
        </a>
      </Li>
      <Li>
        Adds:
        <ul>
          <LiCode>colorRed</LiCode>
          <LiCode>colorOrange</LiCode>
          <LiCode>colorYellow</LiCode>
          <LiCode>colorGreen</LiCode>
          <LiCode>colorBlue</LiCode>
          <LiCode>colorPurple</LiCode>
          <LiCode>bold</LiCode>
          <LiCode>boldColorRed</LiCode>
          <LiCode>boldColorOrange</LiCode>
          <LiCode>boldColorYellow</LiCode>
          <LiCode>boldColorGreen</LiCode>
          <LiCode>boldColorBlue</LiCode>
          <LiCode>boldColorPurple</LiCode>
          <LiCode>labelColorRed</LiCode>
          <LiCode>labelColorOrange</LiCode>
          <LiCode>labelColorYellow</LiCode>
          <LiCode>labelColorGreen</LiCode>
          <LiCode>labelColorBlue</LiCode>
          <LiCode>labelColorPurple</LiCode>
          <LiCode>labelBold</LiCode>
          <LiCode>labelBoldColorRed</LiCode>
          <LiCode>labelBoldColorOrange</LiCode>
          <LiCode>labelBoldColorYellow</LiCode>
          <LiCode>labelBoldColorGreen</LiCode>
          <LiCode>labelBoldColorBlue</LiCode>
          <LiCode>labelBoldColorPurple</LiCode>
          <LiCode>deleteIconColorRed</LiCode>
          <LiCode>deleteIconColorOrange</LiCode>
          <LiCode>deleteIconColorYellow</LiCode>
          <LiCode>deleteIconColorGreen</LiCode>
          <LiCode>deleteIconColorBlue</LiCode>
          <LiCode>deleteIconColorPurple</LiCode>
          <LiCode>deleteIconBold</LiCode>
          <LiCode>deleteIconBoldColorRed</LiCode>
          <LiCode>deleteIconBoldColorOrange</LiCode>
          <LiCode>deleteIconBoldColorYellow</LiCode>
          <LiCode>deleteIconBoldColorGreen</LiCode>
          <LiCode>deleteIconBoldColorBlue</LiCode>
          <LiCode>deleteIconBoldColorPurple</LiCode>
        </ul>
      </Li>
    </ul>
  </>
);

export const Documentation: Story = DocumentationTemplate.bind({});

const ChangelogTemplate = () => (
  <ul>
    <Li>
      <SmCode>vNext (yyyy-mm-dd)</SmCode>: initial implementation
    </Li>
  </ul>
);

export const Changelog: Story = ChangelogTemplate.bind({});
