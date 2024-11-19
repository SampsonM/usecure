import { createFileRoute } from '@tanstack/react-router'

const ScoreRoute = () => {
  return <p>Your score appears here</p>
};

export const Route = createFileRoute('/score')({
  component: ScoreRoute,
});
