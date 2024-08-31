// src/AssignmentsPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

// Sample assignments data
const weekNames = [
  'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5',
  'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10',
];
const assignments = weekNames.map((week, index) => ({
  id: index + 1,
  title: week,
  category: 'Category',
  categoryImage: 'https://www.kindpng.com/picc/m/459-4595417_category-overview-icon-hd-png-download.png',
  progress: Math.floor(Math.random() * 100),
  progressImage: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/in-progress-561560.png',
  daysLeft: Math.floor(Math.random() * 30),
  daysLeftImage: 'https://cdn4.iconfinder.com/data/icons/e-learning-1-3/66/10-512.png',
  thumb: 'https://www.avpainting.com/wp-content/uploads/2022/02/finalwalkthrough.png',
}));

const AssignmentsPage: React.FC = () => {
  const [files] = useState<File[]>([]);
  const navigate = useNavigate();

  const handleDetailsClick = (id: number) => {
    navigate(`/assignment/${id}`);
  };


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
                sx={{
                  mb: 2,
                  p: 2,
                  boxShadow: 3,
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: 150,
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: 2,
                    mb: 2,
                  }}
                  image={assignment.thumb}
                  alt={assignment.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {assignment.title}
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <img src={assignment.categoryImage} alt="Category" style={{ width: 24, height: 24, marginRight: 8 }} />
                    <Typography variant="body1" color="text.secondary">
                      Category: {assignment.category}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mt={1}>
                    <img src={assignment.progressImage} alt="Progress" style={{ width: 24, height: 24, marginRight: 8 }} />
                    <Typography variant="body2" color="text.primary">
                      Progress: {assignment.progress}%
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mt={1}>
                    <img src={assignment.daysLeftImage} alt="Days Left" style={{ width: 24, height: 24, marginRight: 8 }} />
                    <Typography variant="body2" color="text.primary">
                      Days Left: {assignment.daysLeft}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={() => handleDetailsClick(assignment.id)}
                  >
                    Details
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Conditionally render DragNdrop component */}
      {files.length > 0 && (
        <Box mt={3}>
          <Typography variant="h6">Uploaded Files:</Typography>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default AssignmentsPage;
