import { createFileRoute } from '@tanstack/react-router'

const ScoreRoute = () => {
  return 'Hello /score!'
};

export const Route = createFileRoute('/score')({
  component: ScoreRoute,
});
