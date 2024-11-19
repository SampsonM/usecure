import { createFileRoute } from '@tanstack/react-router'
import { useGetSlides } from '../api/slides/getSlides.hook';
import { Slides } from '../components/Slides/Slides';

const CourseRoute = () => {
  const { data, error, isLoading } = useGetSlides();

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <Slides slides={data?.slides || []} />
  )
}

export const Route = createFileRoute('/course')({
  component: CourseRoute,
})
