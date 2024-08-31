import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const AssignmentDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the assignment ID from URL params

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" p={3}>
      <Typography variant="h4" gutterBottom>
        Assignment Details
      </Typography>
      <Typography variant="h6" gutterBottom>
        Assignment ID: {id}
      </Typography>

      {/* Add other details and functionalities here */}
      <Box mt={3}>
        <Typography variant="h5" gutterBottom>
          Generate Queries
        </Typography>
        <Button variant="contained" color="primary">Generate Queries</Button>
      </Box>

      <Box mt={3}>
        <Typography variant="h5" gutterBottom>
          Upload Documents
        </Typography>
        <Button variant="contained" color="primary">Upload Documents</Button>
      </Box>

      <Box mt={3}>
        <Typography variant="h5" gutterBottom>
          Student Details
        </Typography>
        <Button variant="contained" color="primary">View Student Details</Button>
      </Box>

      <Box mt={3}>
        <Typography variant="h5" gutterBottom>
          Options
        </Typography>
        <Button variant="contained" color="primary">Create</Button>
      </Box>
    </Box>
  );
};

export default AssignmentDetailsPage;
