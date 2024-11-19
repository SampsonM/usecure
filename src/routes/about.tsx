import { createFileRoute } from '@tanstack/react-router'

const AboutRoute = () => {
  return 'Hello /about!'
}

export const Route = createFileRoute('/about')({
  component: AboutRoute,
})
