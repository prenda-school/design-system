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
          <div>
            <Typography variant="smallcaps-lg">Student Summary</Typography>
            <Typography variant="body2">
              Below is a detailed view of the student record summary. This
              summary view is read only.
            </Typography>
          </div>
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
