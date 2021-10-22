import React from 'react';
import Typography from '@material-ui/core/Typography';
import StudentHeader from './StudentHeader';
import StyledButton from '../common/StyledButton';
import { withRouter } from 'react-router';

const StudentView = ({ history }) => {
  return <>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Typography variant="uppercase-lg">smallcaps-lg</Typography>
        <Typography variant="uppercase-md">smallcaps-md</Typography>
        <Typography variant="uppercase-sm">smallcaps-sm</Typography>
        <Typography color="onLight">textOnLight</Typography>
        <Typography color="onLightLowContrast">textOnLightLowContrast</Typography>
        <Typography color="onDark">textOnDark</Typography>
        <Typography color="onDarkLowContrast">textOnDarkLowContrast</Typography>
        <Typography variant="uppercase-sm" color="onDark">two old properties on one element</Typography>
        <Typography variant="body2">Another valid variant which should be unchanged</Typography>
      </div>
      <div>
        <StyledButton
          text="Back to Students"
          onClick={(e) => {
            e.preventDefault();
            history.push(`/students/`);
          }}
        />
      </div>
    </div>
    <StudentHeader />
  </>;
};

export default withRouter(StudentView);
