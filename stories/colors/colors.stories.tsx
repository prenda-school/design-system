import React, { FC } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { TextFormatter } from '../story-util';
import { Theme, useTheme } from '@material-ui/core';

interface ColorBoxProps {
  color: string;
  colorLabel: string;
  textColor: string;
}

const ColorBox: FC<ColorBoxProps> = (props) => {
  return (
    <div
      style={{
        color: props.textColor,
        backgroundColor: props.color,
        width: '22em',
        height: '6em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingTop: '5px',
        fontSize: '0.80em',
        margin: '1px',
        wordWrap: 'break-word',
      }}
    >
      <div>
        <div>{props.colorLabel}</div>
        <div>{props.color}</div>
      </div>
    </div>
  );
};

export default {
  title: 'prenda-spark/Colors',
  component: ColorBox,
} as Meta;

export const PrendaColors = () => {
  const theme: Theme = useTheme();

  return (
    <TextFormatter>
      <ColorContainerTitle>Prenda colors</ColorContainerTitle>
      <ColorContainer>
        <RowContainer>
          <ColorBox
            color={theme.palette.brand.blue}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.brand.blue"
          />
          <ColorBox
            color={theme.palette.brand.lightBlue}
            textColor={theme.palette.background.lightContrastText}
            colorLabel="theme.palette.brand.lightBlue"
          />
          <ColorBox
            color={theme.palette.brand.orange}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.brand.orange"
          />
          <ColorBox
            color={theme.palette.brand.peach}
            textColor={theme.palette.background.lightContrastText}
            colorLabel="theme.palette.brand.peach"
          />
        </RowContainer>
      </ColorContainer>
      <ColorContainer>
        <RowContainer>
          <ColorBox
            color={theme.palette.neutral.navy}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.neutral.navy"
          />
          <ColorBox
            color={theme.palette.neutral.darkGrey}
            textColor={theme.palette.background.lightContrastText}
            colorLabel="theme.palette.neutral.darkGrey"
          />
          <ColorBox
            color={theme.palette.neutral.white}
            textColor={theme.palette.background.lightContrastText}
            colorLabel="theme.palette.neutral.white"
          />
          <ColorBox
            color={theme.palette.neutral.lightGrey}
            textColor={theme.palette.background.lightContrastText}
            colorLabel="theme.palette.neutral.lightGrey"
          />
          <ColorBox
            color={theme.palette.neutral.mediumGrey}
            textColor={theme.palette.background.lightContrastText}
            colorLabel="theme.palette.neutral.mediumGrey"
          />
        </RowContainer>
      </ColorContainer>

      <ColorContainerTitle>Background colors</ColorContainerTitle>
      <ColorContainer>
        <RowContainer>
          <ColorBox
            color={theme.palette.background.navy}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.background.navy"
          />
          <ColorBox
            color={theme.palette.background.navy}
            textColor={theme.palette.background.darkLowContrastText}
            colorLabel="theme.palette.background.navy"
          />
          <ColorBox
            color={theme.palette.background.blue}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.background.blue"
          />
          <ColorBox
            color={theme.palette.background.blue}
            textColor={theme.palette.background.darkLowContrastText}
            colorLabel="theme.palette.background.blue"
          />
        </RowContainer>
      </ColorContainer>
      <ColorContainer>
        <RowContainer>
          <ColorBox
            color={theme.palette.background.lightGrey}
            textColor={theme.palette.background.lightContrastText}
            colorLabel="theme.palette.background.lightGrey"
          />
          <ColorBox
            color={theme.palette.background.lightGrey}
            textColor={theme.palette.background.lightLowContrastText}
            colorLabel="theme.palette.background.lightGrey"
          />
          <ColorBox
            color={theme.palette.background.white}
            textColor={theme.palette.background.lightContrastText}
            colorLabel="theme.palette.background.white"
          />
          <ColorBox
            color={theme.palette.background.white}
            textColor={theme.palette.background.lightLowContrastText}
            colorLabel="theme.palette.background.white"
          />
          <ColorBox
            color={theme.palette.background.lightBlue}
            textColor={theme.palette.background.lightContrastText}
            colorLabel="theme.palette.background.lightBlue"
          />
          <ColorBox
            color={theme.palette.background.lightBlue}
            textColor={theme.palette.background.lightLowContrastText}
            colorLabel="theme.palette.background.lightBlue"
          />
        </RowContainer>
      </ColorContainer>

      <ColorContainerTitle>Product colors</ColorContainerTitle>
      <ColorContainer>
        <ColorBox
          color={theme.palette.info.main}
          textColor={theme.palette.background.darkContrastText}
          colorLabel="theme.palette.info.main"
        />
        <ColorBox
          color={theme.palette.success.main}
          textColor={theme.palette.background.darkContrastText}
          colorLabel="theme.palette.success.main"
        />
        <ColorBox
          color={theme.palette.warning.main}
          textColor={theme.palette.background.lightContrastText}
          colorLabel="theme.palette.warning.main"
        />
        <ColorBox
          color={theme.palette.error.main}
          textColor={theme.palette.background.darkContrastText}
          colorLabel="theme.palette.error.main"
        />
      </ColorContainer>

      <ColorContainerTitle>Full palette</ColorContainerTitle>
      <ColorContainer>
        <div>
          <ColorBox
            color={theme.palette.tertiary.red[1]}
            textColor={theme.palette.background.lightContrastText}
            colorLabel="theme.palette.tertiary.red[1]"
          />
          <ColorBox
            color={theme.palette.tertiary.red[2]}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.tertiary.red[2]"
          />
          <ColorBox
            color={theme.palette.tertiary.red[3]}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.tertiary.red[3]"
          />
          <ColorBox
            color={theme.palette.tertiary.red[4]}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.tertiary.red[4]"
          />
          <ColorBox
            color={theme.palette.tertiary.red[5]}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.tertiary.red[5]"
          />
        </div>
        <div>
          <ColorBox
            color={theme.palette.tertiary.orange[1]}
            textColor={theme.palette.background.lightContrastText}
            colorLabel="theme.palette.tertiary.orange[1]"
          />
          <ColorBox
            color={theme.palette.tertiary.orange[2]}
            textColor={theme.palette.background.lightContrastText}
            colorLabel="theme.palette.tertiary.orange[2]"
          />
          <ColorBox
            color={theme.palette.tertiary.orange[3]}
            textColor={theme.palette.background.lightContrastText}
            colorLabel="theme.palette.tertiary.orange[3]"
          />
          <ColorBox
            color={theme.palette.tertiary.orange[4]}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.tertiary.orange[4]"
          />
          <ColorBox
            color={theme.palette.tertiary.orange[5]}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.tertiary.orange[5]"
          />
        </div>
        <div>
          <ColorBox
            color={theme.palette.tertiary.yellow[1]}
            textColor={theme.palette.background.lightContrastText}
            colorLabel="theme.palette.tertiary.yellow[1]"
          />
          <ColorBox
            color={theme.palette.tertiary.yellow[2]}
            textColor={theme.palette.background.lightContrastText}
            colorLabel="theme.palette.tertiary.yellow[2]"
          />
          <ColorBox
            color={theme.palette.tertiary.yellow[3]}
            textColor={theme.palette.background.lightContrastText}
            colorLabel="theme.palette.tertiary.yellow[3]"
          />
          <ColorBox
            color={theme.palette.tertiary.yellow[4]}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.tertiary.yellow[4]"
          />
          <ColorBox
            color={theme.palette.tertiary.yellow[5]}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.tertiary.yellow[5]"
          />
        </div>
        <div>
          <ColorBox
            color={theme.palette.tertiary.green[1]}
            textColor={theme.palette.background.lightContrastText}
            colorLabel="theme.palette.tertiary.green[1]"
          />
          <ColorBox
            color={theme.palette.tertiary.green[2]}
            textColor={theme.palette.background.lightContrastText}
            colorLabel="theme.palette.tertiary.green[2]"
          />
          <ColorBox
            color={theme.palette.tertiary.green[3]}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.tertiary.green[3]"
          />
          <ColorBox
            color={theme.palette.tertiary.green[4]}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.tertiary.green[4]"
          />
          <ColorBox
            color={theme.palette.tertiary.green[5]}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.tertiary.green[5]"
          />
        </div>
        <div>
          <ColorBox
            color={theme.palette.tertiary.blue[1]}
            textColor={theme.palette.background.lightContrastText}
            colorLabel="theme.palette.tertiary.blue[1]"
          />
          <ColorBox
            color={theme.palette.tertiary.blue[2]}
            textColor={theme.palette.background.lightContrastText}
            colorLabel="theme.palette.tertiary.blue[2]"
          />
          <ColorBox
            color={theme.palette.tertiary.blue[3]}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.tertiary.blue[3]"
          />
          <ColorBox
            color={theme.palette.tertiary.blue[4]}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.tertiary.blue[4]"
          />
          <ColorBox
            color={theme.palette.tertiary.blue[5]}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.tertiary.blue[5]"
          />
        </div>
        <div>
          <ColorBox
            color={theme.palette.tertiary.purple[1]}
            textColor={theme.palette.background.lightContrastText}
            colorLabel="theme.palette.tertiary.purple[1]"
          />
          <ColorBox
            color={theme.palette.tertiary.purple[2]}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.tertiary.purple[2]"
          />
          <ColorBox
            color={theme.palette.tertiary.purple[3]}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.tertiary.purple[3]"
          />
          <ColorBox
            color={theme.palette.tertiary.purple[4]}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.tertiary.purple[4]"
          />
          <ColorBox
            color={theme.palette.tertiary.purple[5]}
            textColor={theme.palette.background.darkContrastText}
            colorLabel="theme.palette.tertiary.purple[5]"
          />
        </div>
      </ColorContainer>
    </TextFormatter>
  );
};

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 200;
`;
const ColorContainerTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
  padding-bottom: 8px;
  padding-left: 5px;
`;
