# usecure Tech Test

To run dev mode;

```
npm run dev
```

## Plan

1. Build initial repo, tech stack setup etc - Done
1. Create API for getting data - Done
1. Add setup for pages - Done
1. Create course slides page - Done ~almost
1. Create pass | fail page - Works in principle...

## TODO

Outstanding tasks if I had more time;

- Style the score page, not even sure how I'd do that background yet!
- Put nice icons in place of radio button parts
- Improve how we decide on colors for answer state, this is a mess
- Improve tailwind styles, they're also messy
- Add unit & Component tests

## Some Principles I Try To Follow

- TS types should used object types if multiple args passed
- Use FC and pass in props for react components
- Use custom FC type that has props with children type if passing children (not done due to time limits)
- Use null wrapper to hide null ternary conditional logic
- Keep state local until it is needed elsewhere
- Create hooks for react tanstack queries & mutations