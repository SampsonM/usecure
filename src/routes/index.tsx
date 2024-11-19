import { createFileRoute } from '@tanstack/react-router'
import { useGetSlides } from '../api/slides/getSlides.hook';

const IndexRoute: React.FC = () => {
  const { data, error, isLoading } = useGetSlides();

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;
  
  return (
    <div className="text-center text-2xl font-bold text-blue-500">
      <p>{data?.title}</p>
    </div>
  );
};

export const Route = createFileRoute('/')({
  component: IndexRoute,
})
