import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useCourseStore } from '../store/course.store';
import { useEffect } from 'react';

const ScoreRoute = () => {
  const {score, courseSlideData} = useCourseStore();
  const navigate = useNavigate();
  const totalPossibleScore = courseSlideData.slides.length;

  useEffect(() => {
    if (courseSlideData.slides.length === 0) {
      navigate({ to: '/' })
    }
  }, [navigate, courseSlideData.slides])
  
  return <>
    <p>Your Score: {score} / {totalPossibleScore}</p>
  </>
};

export const Route = createFileRoute('/score')({
  component: ScoreRoute,
});
