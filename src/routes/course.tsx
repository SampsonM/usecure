import { createFileRoute } from '@tanstack/react-router'
import { useGetSlideData } from '../api/slides/getSlides.hook';
import { Slides } from '../components/Slides/Slides';
import { NullWrapper } from '../components/NullWrapper/NullWrapper';

const CourseRoute = () => {
  const { courseSlideData, error, isLoading } = useGetSlideData();

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <NullWrapper isVisible={Boolean(courseSlideData.slides.length)}>
      <Slides slides={courseSlideData?.slides} />
    </NullWrapper>
  )
}

export const Route = createFileRoute('/course')({
  component: CourseRoute,
})
