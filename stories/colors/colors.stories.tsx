import React, { FC } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { prendaTheme } from '../../dist';
import { TextFormatter } from '../story-util';

interface ColorBoxProps {
  color: string;
  colorLabel: string;
  textColor: string;
}

const ColorBox: FC<ColorBoxProps> = props => {
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

export const PrendaColors = () => (
  <TextFormatter>
    <ColorContainerTitle>Prenda colors</ColorContainerTitle>
    <ColorContainer>
      <RowContainer>
        <ColorBox
          color={prendaTheme.palette.brand.blue}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.brand.blue"
        />
        <ColorBox
          color={prendaTheme.palette.brand.lightBlue}
          textColor={prendaTheme.palette.background.lightContrastText}
          colorLabel="prendaTheme.palette.brand.lightBlue"
        />
        <ColorBox
          color={prendaTheme.palette.brand.orange}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.brand.orange"
        />
        <ColorBox
          color={prendaTheme.palette.brand.peach}
          textColor={prendaTheme.palette.background.lightContrastText}
          colorLabel="prendaTheme.palette.brand.peach"
        />
      </RowContainer>
    </ColorContainer>
    <ColorContainer>
      <RowContainer>
        <ColorBox
          color={prendaTheme.palette.neutral.navy}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.neutral.navy"
        />
        <ColorBox
          color={prendaTheme.palette.neutral.darkGrey}
          textColor={prendaTheme.palette.background.lightContrastText}
          colorLabel="prendaTheme.palette.neutral.darkGrey"
        />
        <ColorBox
          color={prendaTheme.palette.neutral.white}
          textColor={prendaTheme.palette.background.lightContrastText}
          colorLabel="prendaTheme.palette.neutral.white"
        />
        <ColorBox
          color={prendaTheme.palette.neutral.lightGrey}
          textColor={prendaTheme.palette.background.lightContrastText}
          colorLabel="prendaTheme.palette.neutral.lightGrey"
        />
        <ColorBox
          color={prendaTheme.palette.neutral.mediumGrey}
          textColor={prendaTheme.palette.background.lightContrastText}
          colorLabel="prendaTheme.palette.neutral.mediumGrey"
        />
      </RowContainer>
    </ColorContainer>

    <ColorContainerTitle>Background colors</ColorContainerTitle>
    <ColorContainer>
      <RowContainer>
        <ColorBox
          color={prendaTheme.palette.background.navy}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.background.navy"
        />
        <ColorBox
          color={prendaTheme.palette.background.navy}
          textColor={prendaTheme.palette.background.darkLowContrastText}
          colorLabel="prendaTheme.palette.background.navy"
        />
        <ColorBox
          color={prendaTheme.palette.background.blue}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.background.blue"
        />
        <ColorBox
          color={prendaTheme.palette.background.blue}
          textColor={prendaTheme.palette.background.darkLowContrastText}
          colorLabel="prendaTheme.palette.background.blue"
        />
      </RowContainer>
    </ColorContainer>
    <ColorContainer>
      <RowContainer>
        <ColorBox
          color={prendaTheme.palette.background.lightGrey}
          textColor={prendaTheme.palette.background.lightContrastText}
          colorLabel="prendaTheme.palette.background.lightGrey"
        />
        <ColorBox
          color={prendaTheme.palette.background.lightGrey}
          textColor={prendaTheme.palette.background.lightLowContrastText}
          colorLabel="prendaTheme.palette.background.lightGrey"
        />
        <ColorBox
          color={prendaTheme.palette.background.white}
          textColor={prendaTheme.palette.background.lightContrastText}
          colorLabel="prendaTheme.palette.background.white"
        />
        <ColorBox
          color={prendaTheme.palette.background.white}
          textColor={prendaTheme.palette.background.lightLowContrastText}
          colorLabel="prendaTheme.palette.background.white"
        />
        <ColorBox
          color={prendaTheme.palette.background.lightBlue}
          textColor={prendaTheme.palette.background.lightContrastText}
          colorLabel="prendaTheme.palette.background.lightBlue"
        />
        <ColorBox
          color={prendaTheme.palette.background.lightBlue}
          textColor={prendaTheme.palette.background.lightLowContrastText}
          colorLabel="prendaTheme.palette.background.lightBlue"
        />
      </RowContainer>
    </ColorContainer>

    <ColorContainerTitle>Product colors</ColorContainerTitle>
    <ColorContainer>
      <ColorBox
        color={prendaTheme.palette.info.main}
        textColor={prendaTheme.palette.background.darkContrastText}
        colorLabel="prendaTheme.palette.info.main"
      />
      <ColorBox
        color={prendaTheme.palette.success.main}
        textColor={prendaTheme.palette.background.darkContrastText}
        colorLabel="prendaTheme.palette.success.main"
      />
      <ColorBox
        color={prendaTheme.palette.warning.main}
        textColor={prendaTheme.palette.background.lightContrastText}
        colorLabel="prendaTheme.palette.warning.main"
      />
      <ColorBox
        color={prendaTheme.palette.error.main}
        textColor={prendaTheme.palette.background.darkContrastText}
        colorLabel="prendaTheme.palette.error.main"
      />
    </ColorContainer>

    <ColorContainerTitle>Full palette</ColorContainerTitle>
    <ColorContainer>
      <div>
        <ColorBox
          color={prendaTheme.palette.tertiary.red[1]}
          textColor={prendaTheme.palette.background.lightContrastText}
          colorLabel="prendaTheme.palette.tertiary.red[1]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.red[2]}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.tertiary.red[2]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.red[3]}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.tertiary.red[3]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.red[4]}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.tertiary.red[4]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.red[5]}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.tertiary.red[5]"
        />
      </div>
      <div>
        <ColorBox
          color={prendaTheme.palette.tertiary.orange[1]}
          textColor={prendaTheme.palette.background.lightContrastText}
          colorLabel="prendaTheme.palette.tertiary.orange[1]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.orange[2]}
          textColor={prendaTheme.palette.background.lightContrastText}
          colorLabel="prendaTheme.palette.tertiary.orange[2]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.orange[3]}
          textColor={prendaTheme.palette.background.lightContrastText}
          colorLabel="prendaTheme.palette.tertiary.orange[3]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.orange[4]}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.tertiary.orange[4]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.orange[5]}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.tertiary.orange[5]"
        />
      </div>
      <div>
        <ColorBox
          color={prendaTheme.palette.tertiary.yellow[1]}
          textColor={prendaTheme.palette.background.lightContrastText}
          colorLabel="prendaTheme.palette.tertiary.yellow[1]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.yellow[2]}
          textColor={prendaTheme.palette.background.lightContrastText}
          colorLabel="prendaTheme.palette.tertiary.yellow[2]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.yellow[3]}
          textColor={prendaTheme.palette.background.lightContrastText}
          colorLabel="prendaTheme.palette.tertiary.yellow[3]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.yellow[4]}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.tertiary.yellow[4]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.yellow[5]}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.tertiary.yellow[5]"
        />
      </div>
      <div>
        <ColorBox
          color={prendaTheme.palette.tertiary.green[1]}
          textColor={prendaTheme.palette.background.lightContrastText}
          colorLabel="prendaTheme.palette.tertiary.green[1]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.green[2]}
          textColor={prendaTheme.palette.background.lightContrastText}
          colorLabel="prendaTheme.palette.tertiary.green[2]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.green[3]}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.tertiary.green[3]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.green[4]}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.tertiary.green[4]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.green[5]}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.tertiary.green[5]"
        />
      </div>
      <div>
        <ColorBox
          color={prendaTheme.palette.tertiary.blue[1]}
          textColor={prendaTheme.palette.background.lightContrastText}
          colorLabel="prendaTheme.palette.tertiary.blue[1]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.blue[2]}
          textColor={prendaTheme.palette.background.lightContrastText}
          colorLabel="prendaTheme.palette.tertiary.blue[2]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.blue[3]}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.tertiary.blue[3]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.blue[4]}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.tertiary.blue[4]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.blue[5]}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.tertiary.blue[5]"
        />
      </div>
      <div>
        <ColorBox
          color={prendaTheme.palette.tertiary.purple[1]}
          textColor={prendaTheme.palette.background.lightContrastText}
          colorLabel="prendaTheme.palette.tertiary.purple[1]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.purple[2]}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.tertiary.purple[2]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.purple[3]}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.tertiary.purple[3]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.purple[4]}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.tertiary.purple[4]"
        />
        <ColorBox
          color={prendaTheme.palette.tertiary.purple[5]}
          textColor={prendaTheme.palette.background.darkContrastText}
          colorLabel="prendaTheme.palette.tertiary.purple[5]"
        />
      </div>
    </ColorContainer>
  </TextFormatter>
);

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
