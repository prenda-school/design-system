import React, { FC } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import { colors } from '../../src';
import styled from 'styled-components';

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
        width: '13em',
        height: '13em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingTop: '5px',
        fontSize: '0.80em',
        margin: '1px',
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
          color={colors.colorsPrendaBlue}
          textColor={colors.colorsTextIconOnDarkHighContrast}
          colorLabel="colorsPrendaBlue"
        />
        <ColorBox 
          color={colors.colorsPrendaLightBlue}
          textColor={colors.colorsTextIconOnLightHighContrast}
          colorLabel="colorsPrendaLightBlue"
        />
        <ColorBox 
          color={colors.colorsPrendaOrange}
          textColor={colors.colorsTextIconOnDarkHighContrast}
          colorLabel="colorsPrendaOrange"
        />
        <ColorBox 
          color={colors.colorsPrendaPeach}
          textColor={colors.colorsTextIconOnLightHighContrast}
          colorLabel="colorsPrendaPeach"
        />
      </RowContainer>
    </ColorContainer>
    <ColorContainer>
      <RowContainer>
        <ColorBox 
          color={colors.colorsPrendaNavy}
          textColor={colors.colorsTextIconOnDarkHighContrast}
          colorLabel="colorsPrendaNavy"
        />
        <ColorBox 
          color={colors.colorsPrendaLightGrey}
          textColor={colors.colorsTextIconOnLightHighContrast}
          colorLabel="colorsPrendaLightGrey"
        />
        <ColorBox 
          color={colors.colorsPrendaMediumGrey}
          textColor={colors.colorsTextIconOnLightHighContrast}
          colorLabel="colorsPrendaMediumGrey"
        />
        <ColorBox 
          color={colors.colorsPrendaDarkGrey}
          textColor={colors.colorsTextIconOnLightHighContrast}
          colorLabel="colorsPrendaDarkGrey"
        />
        <ColorBox 
          color={colors.colorsPrendaWhite}
          textColor={colors.colorsTextIconOnLightHighContrast}
          colorLabel="colorsPrendaWhite"
        />
      </RowContainer>
    </ColorContainer>

    <ColorContainerTitle>Background colors</ColorContainerTitle>
    <ColorContainer>
      <RowContainer>
        <ColorBox 
          color={colors.colorsBackgroundNavy} 
          textColor={colors.colorsTextIconOnDarkHighContrast} 
          colorLabel="colorsBackgroundNavy"
        />
        <ColorBox 
          color={colors.colorsBackgroundNavy} 
          textColor={colors.colorsTextIconOnDarkLowContrast} 
          colorLabel="colorsBackgroundNavy"
        />
        <ColorBox 
          color={colors.colorsBackgroundBlue} 
          textColor={colors.colorsTextIconOnDarkHighContrast} 
          colorLabel="colorsBackgroundBlue"
        />
        <ColorBox 
          color={colors.colorsBackgroundBlue} 
          textColor={colors.colorsTextIconOnDarkLowContrast} 
          colorLabel="colorsBackgroundBlue"
        />
      </RowContainer>
    </ColorContainer>
    <ColorContainer>
      <RowContainer>
        <ColorBox 
          color={colors.colorsBackgroundLightGrey} 
          textColor={colors.colorsTextIconOnLightHighContrast} 
          colorLabel="colorsBackgroundNavy"
        />
        <ColorBox 
          color={colors.colorsBackgroundLightGrey} 
          textColor={colors.colorsTextIconOnLightLowContrast} 
          colorLabel="colorsBackgroundNavy"
        />
        <ColorBox 
          color={colors.colorsBackgroundLightBlue} 
          textColor={colors.colorsTextIconOnLightHighContrast} 
          colorLabel="colorsBackgroundBlue"
        />
        <ColorBox 
          color={colors.colorsBackgroundLightBlue} 
          textColor={colors.colorsTextIconOnLightLowContrast} 
          colorLabel="colorsBackgroundBlue"
        />
        <ColorBox 
          color={colors.colorsBackgroundWhite} 
          textColor={colors.colorsTextIconOnLightHighContrast} 
          colorLabel="colorsBackgroundBlue"
        />
        <ColorBox 
          color={colors.colorsBackgroundWhite} 
          textColor={colors.colorsTextIconOnLightLowContrast} 
          colorLabel="colorsBackgroundBlue"
        />
      </RowContainer>
    </ColorContainer>

    <ColorContainerTitle>Product colors</ColorContainerTitle>
    <ColorContainer>
      <ColorBox
        color={colors.colorsPrimaryAction}
        textColor={colors.colorsTextIconOnDarkHighContrast}
        colorLabel="colorsPrimaryAction"
      />
      <ColorBox
        color={colors.colorsSuccess}
        textColor={colors.colorsTextIconOnDarkHighContrast}
        colorLabel="colorsSuccess"
      />
      <ColorBox
        color={colors.colorsWarning}
        textColor={colors.colorsTextIconOnLightHighContrast}
        colorLabel="colorsWarning"
      />
      <ColorBox
        color={colors.colorsError}
        textColor={colors.colorsTextIconOnDarkHighContrast}
        colorLabel="colorsError"
      />
    </ColorContainer>

    <ColorContainerTitle>Full palette</ColorContainerTitle>
    <ColorContainer>
      <div>
        <ColorBox
          color={colors.colorsRed[1]}
          textColor={colors.colorsTextIconOnLightHighContrast}
          colorLabel="colorsRed[1]"
        />
        <ColorBox
          color={colors.colorsRed[2]}
          textColor={colors.colorsTextIconOnDarkHighContrast}
          colorLabel="colorsRed[2]"
        />
        <ColorBox
          color={colors.colorsRed[3]}
          textColor={colors.colorsTextIconOnDarkHighContrast}
          colorLabel="colorsRed[3]"
        />
        <ColorBox
          color={colors.colorsRed[4]}
          textColor={colors.colorsTextIconOnDarkHighContrast}
          colorLabel="colorsRed[4]"
        />
        <ColorBox
          color={colors.colorsRed[5]}
          textColor={colors.colorsTextIconOnDarkHighContrast}
          colorLabel="colorsRed[5]"
        />
      </div>
      <div>
        <ColorBox
          color={colors.colorsOrange[1]}
          textColor={colors.colorsTextIconOnLightHighContrast}
          colorLabel="colorsOrange[1]"
        />
        <ColorBox
          color={colors.colorsOrange[2]}
          textColor={colors.colorsTextIconOnLightHighContrast}
          colorLabel="colorsOrange[2]"
        />
        <ColorBox
          color={colors.colorsOrange[3]}
          textColor={colors.colorsTextIconOnLightHighContrast}
          colorLabel="colorsOrange[3]"
        />
        <ColorBox
          color={colors.colorsOrange[4]}
          textColor={colors.colorsTextIconOnDarkHighContrast}
          colorLabel="colorsOrange[4]"
        />
        <ColorBox
          color={colors.colorsOrange[5]}
          textColor={colors.colorsTextIconOnDarkHighContrast}
          colorLabel="colorsOrange[5]"
        />
      </div>
      <div>
        <ColorBox
          color={colors.colorsYellow[1]}
          textColor={colors.colorsTextIconOnLightHighContrast}
          colorLabel="colorsYellow[1]"
        />
        <ColorBox
          color={colors.colorsYellow[2]}
          textColor={colors.colorsTextIconOnLightHighContrast}
          colorLabel="colorsYellow[2]"
        />
        <ColorBox
          color={colors.colorsYellow[3]}
          textColor={colors.colorsTextIconOnLightHighContrast}
          colorLabel="colorsYellow[3]"
        />
        <ColorBox
          color={colors.colorsYellow[4]}
          textColor={colors.colorsTextIconOnDarkHighContrast}
          colorLabel="colorsYellow[4]"
        />
        <ColorBox
          color={colors.colorsYellow[5]}
          textColor={colors.colorsTextIconOnDarkHighContrast}
          colorLabel="colorsYellow[5]"
        />
      </div>
      <div>
        <ColorBox
          color={colors.colorsGreen[1]}
          textColor={colors.colorsTextIconOnLightHighContrast}
          colorLabel="colorsGreen[1]"
        />
        <ColorBox
          color={colors.colorsGreen[2]}
          textColor={colors.colorsTextIconOnLightHighContrast}
          colorLabel="colorsGreen[2]"
        />
        <ColorBox
          color={colors.colorsGreen[3]}
          textColor={colors.colorsTextIconOnDarkHighContrast}
          colorLabel="colorsGreen[3]"
        />
        <ColorBox
          color={colors.colorsGreen[4]}
          textColor={colors.colorsTextIconOnDarkHighContrast}
          colorLabel="colorsGreen[4]"
        />
        <ColorBox
          color={colors.colorsGreen[5]}
          textColor={colors.colorsTextIconOnDarkHighContrast}
          colorLabel="colorsGreen[5]"
        />
      </div>
      <div>
        <ColorBox
          color={colors.colorsBlue[1]}
          textColor={colors.colorsTextIconOnLightHighContrast}
          colorLabel="colorsBlue[1]"
        />
        <ColorBox
          color={colors.colorsBlue[2]}
          textColor={colors.colorsTextIconOnLightHighContrast}
          colorLabel="colorsBlue[2]"
        />
        <ColorBox
          color={colors.colorsBlue[3]}
          textColor={colors.colorsTextIconOnDarkHighContrast}
          colorLabel="colorsBlue[3]"
        />
        <ColorBox
          color={colors.colorsBlue[4]}
          textColor={colors.colorsTextIconOnDarkHighContrast}
          colorLabel="colorsBlue[4]"
        />
        <ColorBox
          color={colors.colorsBlue[5]}
          textColor={colors.colorsTextIconOnDarkHighContrast}
          colorLabel="colorsBlue[5]"
        />
      </div>
      <div>
        <ColorBox
          color={colors.colorsPurple[1]}
          textColor={colors.colorsTextIconOnLightHighContrast}
          colorLabel="colorsPurple[1]"
        />
        <ColorBox
          color={colors.colorsPurple[2]}
          textColor={colors.colorsTextIconOnDarkHighContrast}
          colorLabel="colorsPurple[2]"
        />
        <ColorBox
          color={colors.colorsPurple[3]}
          textColor={colors.colorsTextIconOnDarkHighContrast}
          colorLabel="colorsPurple[3]"
        />
        <ColorBox
          color={colors.colorsPurple[4]}
          textColor={colors.colorsTextIconOnDarkHighContrast}
          colorLabel="colorsPurple[4]"
        />
        <ColorBox
          color={colors.colorsPurple[5]}
          textColor={colors.colorsTextIconOnDarkHighContrast}
          colorLabel="colorsPurple[5]"
        />
      </div>
    </ColorContainer>
  </TextFormatter>
);

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 200;
`;
const TextFormatter = styled.div`
  font-family: 'Nunito Sans', -apple-system, '.SFNSText-Regular',
    'San Francisco', BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  background-color: #eaeaea;
`;
const ColorContainerTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
  padding-bottom: 8px;
  padding-left: 5px;
`;
