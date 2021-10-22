import React from 'react';
import Typography from '@material-ui/core/Typography';
import StudentHeader from './StudentHeader';
import StyledButton from '../common/StyledButton';
import { withRouter } from 'react-router';

const StudentView = ({ history }) => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Typography variant="smallcaps-lg">smallcaps-lg</Typography>
          <Typography variant="smallcaps-md">smallcaps-md</Typography>
          <Typography variant="smallcaps-sm">smallcaps-sm</Typography>
          <Typography color="textOnLight">textOnLight</Typography>
          <Typography color="textOnLightLowContrast">textOnLightLowContrast</Typography>
          <Typography color="textOnDark">textOnDark</Typography>
          <Typography color="textOnDarkLowContrast">textOnDarkLowContrast</Typography>
          <Typography variant="smallcaps-sm" color="textOnDark">two old properties on one element</Typography>
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
    </>
  );
};

export default withRouter(StudentView);
