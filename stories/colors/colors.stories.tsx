import React, { FC } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { colors } from '../../src';
import styled from 'styled-components';

interface ColorBoxProps {
  textColor: string;
  colorToTest: string;
  label: string;
}

const ColorBox: FC<ColorBoxProps> = props => {
  return (
    <div
      style={{
        color: props.textColor,
        backgroundColor: props.colorToTest,
        width: '135px',
        height: '135px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingTop: '5px',
        fontSize: '14px',
      }}
    >
      <div>
        <div>{props.label}</div>
        <div>{props.colorToTest}</div>
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
    <ColorContainerTitle>Product colors</ColorContainerTitle>
    <ColorContainer>
      <ColorBox
        colorToTest={colors.colorsPrimaryAction}
        textColor={textLightOnDark}
        label="colorsPrimaryAction"
      />
      <ColorBox
        colorToTest={colors.colorsSuccess}
        textColor={textLightOnDark}
        label="colorsSuccess"
      />
      <ColorBox
        colorToTest={colors.colorsWarning}
        textColor={textDarkOnlight}
        label="colorsWarning"
      />
      <ColorBox
        colorToTest={colors.colorsError}
        textColor={textLightOnDark}
        label="colorsError"
      />
    </ColorContainer>

    <ColorContainerTitle>Full palette</ColorContainerTitle>
    <ColorContainer>
      <div>
        <ColorBox
          colorToTest={colors.colorsRed[1]}
          textColor={textDarkOnlight}
          label="colorsRed[1]"
        />
        <ColorBox
          colorToTest={colors.colorsRed[2]}
          textColor={textLightOnDark}
          label="colorsRed[2]"
        />
        <ColorBox
          colorToTest={colors.colorsRed[3]}
          textColor={textLightOnDark}
          label="colorsRed[3]"
        />
        <ColorBox
          colorToTest={colors.colorsRed[4]}
          textColor={textLightOnDark}
          label="colorsRed[4]"
        />
        <ColorBox
          colorToTest={colors.colorsRed[5]}
          textColor={textLightOnDark}
          label="colorsRed[5]"
        />
      </div>
      <div>
        <ColorBox
          colorToTest={colors.colorsOrange[1]}
          textColor={textDarkOnlight}
          label="colorsOrange[1]"
        />
        <ColorBox
          colorToTest={colors.colorsOrange[2]}
          textColor={textDarkOnlight}
          label="colorsOrange[2]"
        />
        <ColorBox
          colorToTest={colors.colorsOrange[3]}
          textColor={textDarkOnlight}
          label="colorsOrange[3]"
        />
        <ColorBox
          colorToTest={colors.colorsOrange[4]}
          textColor={textLightOnDark}
          label="colorsOrange[4]"
        />
        <ColorBox
          colorToTest={colors.colorsOrange[5]}
          textColor={textLightOnDark}
          label="colorsOrange[5]"
        />
      </div>
      <div>
        <ColorBox
          colorToTest={colors.colorsYellow[1]}
          textColor={textDarkOnlight}
          label="colorsYellow[1]"
        />
        <ColorBox
          colorToTest={colors.colorsYellow[2]}
          textColor={textDarkOnlight}
          label="colorsYellow[2]"
        />
        <ColorBox
          colorToTest={colors.colorsYellow[3]}
          textColor={textDarkOnlight}
          label="colorsYellow[3]"
        />
        <ColorBox
          colorToTest={colors.colorsYellow[4]}
          textColor={textLightOnDark}
          label="colorsYellow[4]"
        />
        <ColorBox
          colorToTest={colors.colorsYellow[5]}
          textColor={textLightOnDark}
          label="colorsYellow[5]"
        />
      </div>
      <div>
        <ColorBox
          colorToTest={colors.colorsGreen[1]}
          textColor={textDarkOnlight}
          label="colorsGreen[1]"
        />
        <ColorBox
          colorToTest={colors.colorsGreen[2]}
          textColor={textDarkOnlight}
          label="colorsGreen[2]"
        />
        <ColorBox
          colorToTest={colors.colorsGreen[3]}
          textColor={textLightOnDark}
          label="colorsGreen[3]"
        />
        <ColorBox
          colorToTest={colors.colorsGreen[4]}
          textColor={textLightOnDark}
          label="colorsGreen[4]"
        />
        <ColorBox
          colorToTest={colors.colorsGreen[5]}
          textColor={textLightOnDark}
          label="colorsGreen[5]"
        />
      </div>
      <div>
        <ColorBox
          colorToTest={colors.colorsBlue[1]}
          textColor={textDarkOnlight}
          label="colorsBlue[1]"
        />
        <ColorBox
          colorToTest={colors.colorsBlue[2]}
          textColor={textDarkOnlight}
          label="colorsBlue[2]"
        />
        <ColorBox
          colorToTest={colors.colorsBlue[3]}
          textColor={textLightOnDark}
          label="colorsBlue[3]"
        />
        <ColorBox
          colorToTest={colors.colorsBlue[4]}
          textColor={textLightOnDark}
          label="colorsBlue[4]"
        />
        <ColorBox
          colorToTest={colors.colorsBlue[5]}
          textColor={textLightOnDark}
          label="colorsBlue[5]"
        />
      </div>
      <div>
        <ColorBox
          colorToTest={colors.colorsPurple[1]}
          textColor={textDarkOnlight}
          label="colorsPurple[1]"
        />
        <ColorBox
          colorToTest={colors.colorsPurple[2]}
          textColor={textLightOnDark}
          label="colorsPurple[2]"
        />
        <ColorBox
          colorToTest={colors.colorsPurple[3]}
          textColor={textLightOnDark}
          label="colorsPurple[3]"
        />
        <ColorBox
          colorToTest={colors.colorsPurple[4]}
          textColor={textLightOnDark}
          label="colorsPurple[4]"
        />
        <ColorBox
          colorToTest={colors.colorsPurple[5]}
          textColor={textLightOnDark}
          label="colorsPurple[5]"
        />
      </div>
    </ColorContainer>
  </TextFormatter>
);

const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 200;
`;
const TextFormatter = styled.div`
  font-family: 'Nunito Sans', -apple-system, '.SFNSText-Regular',
    'San Francisco', BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
`;
const ColorContainerTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
  padding-bottom: 8px;
  padding-left: 5px;
`;
const textDarkOnlight = '#072E44';
const textLightOnDark = '#FFFFFF';
