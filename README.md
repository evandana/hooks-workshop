# Notes

> Fork of [ReactTraining/hooks-workshop](https://github.com/ReactTraining/hooks-workshop)

[Original README](./README.md)

## How to use this repo

- I'm going to be pushing my updates to these lectures, so if you want to do them yourself, you'll need to pull a fresh copy from the original repo: [ReactTraining/hooks-workshop](https://github.com/ReactTraining/hooks-workshop)
- **I have 5 minutes**
  - Read the [Major Take Aways](https://evandana.com/hooks-workshop/#major-take-aways)
- **I have 15 minutes**
  - Above +...
  - Read the [Daily Notes](./NOTES.md)
- **I have 2 days**
  - Above +...
  - Do all [these exercises](./lessons)


## >> [Daily Notes](./NOTES.md) <<

Go to there ^^

## Major Take Aways

### TO ASK

- ? I'm curious about the relationship between hooks and more traditional functional programming paradigms (and implementing libraries like redux, redux-observable, recompose), as well as best practices for testing
- ? Hooks replaces Recompose
- ? Should we then remove `redux`

### When to use

- HOCs or renderProps could be refactored to hooks, which are better at sharing state
  - renderProps and HOCs are likely to be buggy with ASYNC code
- Replaces `ComponentWill*`/`ComponentDid*`

### Best Practices

- **Composition** for shared components
  - Expose `<Tabs />`, `<TabsList />`, `<Tab />`, `<TabPanels />`, instead of just `<Tabs />`
  - By being composable, you reduce the need to maintain all the changes by consumers
  - Helps support _Separation of Concerns_
  - Test this tree only as a whole, not individually
- Use React.Children
  - `Children.map(children, child => { /* ... */  })`
  - `Children.toArray(children, child => { /* ... */  })`
- **Middleware**
  - **Can NOT** mutate state
  - **CAN** add a `useEffect` in a reducer to do something based on `state.action`
- Use **Product Terms as** `dispatch` action names
- `useEffect` allows for `setStateval` change for a `useStateval`
- For testing with Enzyme, try full render


### When not to use

- `useContext` is not _best_ at global state stuff

### Gotchas

- **Order matters**: ensure that all hooks are always called in the same order
  - Conditional hooks are tricky
  - BAD: `if (abc) { useEffect(...) }`
  - GOOD: `useEffect(() => { if (abc) {...} })`
- There may be flickers
  - Avoid it by using pre-loaded data and module-level caches
  - [Example](./lessons/10-the-feed)

## Presentation Suggestion

- React basics
- Recreate hooks with "CrappyHooks" (lecture 2, index.js)