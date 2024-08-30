import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { Task } from 'data/tasks';

// Week names
const weekNames = [
  'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5',
  'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10',
];

// Sample assignments data
const assignments: Task[] = weekNames.map((week, index) => ({
  id: index + 1,
  title: week, // Use week name as title
  category: 'Category',
  thumb: 'https://via.placeholder.com/150',
  progress: Math.floor(Math.random() * 100),
  daysLeft: Math.floor(Math.random() * 30),
  avatars: [
    'https://via.placeholder.com/30',
    'https://via.placeholder.com/30',
    'https://via.placeholder.com/30',
  ],
}));

const AssignmentsPage: React.FC = () => {
  const navigate = useNavigate(); // Example usage of useNavigate

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" p={3}>
      <Box flex="1">
        <Typography variant="h4" gutterBottom>
          Assignments
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          {assignments.map((assignment) => (
            <Box key={assignment.id}>
              <Card
                sx={{ mb: 2, p: 2, boxShadow: 3, cursor: 'pointer' }}
                onClick={() => navigate(`/weekDetailspage`)} // Example usage of navigate
              >
                <CardMedia component="img" height="150" image={assignment.thumb} alt={assignment.title} />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {assignment.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Category: {assignment.category}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Progress: {assignment.progress}%
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Days Left: {assignment.daysLeft}
                  </Typography>
                  <Stack mt={2} direction="row" spacing={1}>
                    {assignment.avatars.map((avatar) => (
                      <Avatar key={avatar} src={avatar} alt="Avatar" />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AssignmentsPage;
