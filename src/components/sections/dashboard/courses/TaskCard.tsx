import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import AvatarGroup from '@mui/material/AvatarGroup';
import IconifyIcon from 'components/base/IconifyIcon'; // Ensure the correct import path
import { Task } from 'data/tasks'; // Ensure the correct import path
import { useNavigate } from 'react-router-dom';

interface TaskCardProps {
  data: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/assignments', { state: { taskId: data.id } });
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: 3,
        borderRadius: 2,
        transition: '0.3s',
        '&:hover': {
          boxShadow: 6,
          transform: 'translateY(-5px)',
        },
      }}
      onClick={handleClick}
    >
      <CardMedia
        component="img"
        height="140"
        image={data.thumb}
        alt="task_today_image"
        sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
      />
      <CardContent>
        <Box mb={1.5}>
          <Typography variant="h6" color="text.primary" fontWeight={600}>
            {data.title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {data.category}
          </Typography>
        </Box>

        <Box mb={1.5}>
          <Stack spacing={1}>
            <Typography variant="body2" color="text.primary">
              Progress
            </Typography>
            <Slider
              value={data.progress}
              color="primary"
              aria-label="Progress"
              valueLabelDisplay="auto"
              sx={{ color: 'primary.main' }}
              disabled
            />
            <Typography variant="body2" color="primary.main" fontWeight={500}>
              {data.progress}%
            </Typography>
          </Stack>
        </Box>

        <Stack spacing={2} alignItems="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconifyIcon icon="mynaui:clock-circle" color="text.secondary" fontSize="small" />
            <Typography variant="body2" fontWeight={500}>
              {data.daysLeft} Days Left
            </Typography>
          </Stack>

          <AvatarGroup max={4}>
            {data.avatars.map((avatar) => (
              <Avatar key={avatar} alt="avatar_img" src={avatar} sx={{ width: 24, height: 24 }} />
            ))}
          </AvatarGroup>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
