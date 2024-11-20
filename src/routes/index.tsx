import { createFileRoute } from '@tanstack/react-router'
import { useGetSlideData } from '../api/slides/getSlides.hook';
import { CustomLink } from '../components/CustomLink/CustomLink';

const IndexRoute: React.FC = () => {
  const { courseSlideData, error, isLoading } = useGetSlideData();

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;
  
  return (
    <div className="text-center mt-20">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {courseSlideData.title}
      </h1>
      <CustomLink to="/course">Start Course</CustomLink>
    </div>
  );
};

export const Route = createFileRoute('/')({
  component: IndexRoute,
})
