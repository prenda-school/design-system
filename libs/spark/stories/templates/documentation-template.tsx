import * as React from 'react';
import { Box, Typography, styled, withStyles } from '../../src';

export const Root = styled('div')(({ theme }) => ({
  color: theme.palette.text.dark,
}));

export const H1 = (props) => (
  <Typography variant="heading-md" component="h1" gutterBottom {...props} />
);

export const H2 = withStyles({
  root: { marginLeft: 8 },
})((props) => <Typography variant="heading-sm" component="h2" {...props} />);

export const SmCode = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.lightGrey,
    padding: '0 2px',
  },
}))((props) => <Typography variant="code-sm" display="inline" {...props} />);

export const Li = (props) => (
  <Typography variant="paragraph-lg" component="li" {...props} />
);

export const LiCode = (props) => (
  <Li>
    <SmCode {...props} />
  </Li>
);

const DocTemplate = ({
  underlyingComponent,
  props,
  css,
  note,
}: {
  underlyingComponent: {
    name: string;
    href: string;
  };
  props?: {
    extends?: {
      href: string;
    };
    defaults?: Array<{
      name: string;
      value: string;
    }>;
    omits?: Array<{
      name: string;
      defaultValue: string;
    }>;
    adds?: Array<{
      name: string;
      type: string;
      defaultValue: string;
    }>;
  };
  css?: {
    extends?: {
      href: string;
    };
    adds?: Array<string>;
    omits?: Array<string>;
  };
  note?: string;
}) => (
  <Root>
    {note ? (
      <p>
        <em>Note: </em>
        {note}
      </p>
    ) : null}
    <H1>Underlying Component</H1>
    <ul>
      <Li>
        {underlyingComponent.name},{' '}
        <a href={underlyingComponent.href}>{underlyingComponent.href}</a>
      </Li>
    </ul>

    <Box m={1} />
    <H1>API</H1>
    <H2>Prop Names</H2>
    <ul>
      <Li>
        Extends <a href={props.extends.href}>{props.extends.href}</a>
      </Li>
      {props.defaults?.length ? (
        <Li>
          Defaults:
          <ul>
            {props.defaults.map((prop) => (
              <LiCode key={prop.name}>
                {prop.name}: {prop.value}
              </LiCode>
            ))}
          </ul>
        </Li>
      ) : null}
      {props.omits?.length ? (
        <Li>
          Omits:
          <ul>
            {props.omits.map((prop) => (
              <Li key={prop.name}>
                <SmCode>{prop.name}</SmCode>
                <ul>
                  <Li>
                    underlying default value:{' '}
                    <SmCode>{prop.defaultValue}</SmCode>
                  </Li>
                </ul>
              </Li>
            ))}
          </ul>
        </Li>
      ) : null}
      {props.adds?.length ? (
        <Li>
          Adds:
          <ul>
            {props.adds.map((prop) => (
              <Li key={prop.name}>
                <SmCode>{prop.name}</SmCode>
                <ul>
                  <Li>
                    type: <SmCode>{prop.type}</SmCode>
                  </Li>
                  <Li>
                    default: <SmCode>{prop.defaultValue}</SmCode>
                  </Li>
                </ul>
              </Li>
            ))}
          </ul>
        </Li>
      ) : null}
    </ul>
    <H2>CSS Rule Names</H2>
    <ul>
      {css.extends ? (
        <Li>
          Extends <a href={css.extends.href}>{css.extends.href}</a>
        </Li>
      ) : null}
      {css.adds?.length ? (
        <Li>
          Adds:
          <ul>
            {css.adds.map((className) => (
              <LiCode key={className}>{className}</LiCode>
            ))}
          </ul>
        </Li>
      ) : null}
      {css.omits?.length ? (
        <Li>
          Omits:
          <ul>
            {css.omits.map((className) => (
              <LiCode key={className}>{className}</LiCode>
            ))}
          </ul>
        </Li>
      ) : null}
    </ul>
  </Root>
);

export default DocTemplate;
