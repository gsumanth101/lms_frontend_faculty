import { tasks } from 'data/tasks';
import TaskCard from './TaskCard';
import SliderWrapper from 'components/common/SliderWrapper';

const Courses = () => {
  return <SliderWrapper title="Courses" SliderCard={TaskCard} data={tasks} />;
};

export default Courses;
