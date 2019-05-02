# Notes

> Fork of [ReactTraining/hooks-workshop](https://github.com/ReactTraining/hooks-workshop)

[Original README](./README.md)

## How to use this repo

I'm going to be pushing my updates to these lectures, so if you want to do them yourself, you'll need to pull a fresh copy from the original repo: [ReactTraining/hooks-workshop](https://github.com/ReactTraining/hooks-workshop)

### I have 5 minutes
- Read the [Major Take Aways](https://evandana.com/hooks-workshop/#major-take-aways)

### I have 15 minutes
- the above plus..
- Read the [Daily Notes](./NOTES.md)

### I have 2 days
- the above plus..
- Do all [the ORIGINAL exercises](https://github.com/ReactTraining/hooks-workshop) (remember, I've done the ones in this fork)


## >> [Daily Notes](./NOTES.md) <<

Go to there ^^

## Major Take Aways

### Questions

#### I'm curious about the relationship between hooks and more traditional functional programming paradigms (and implementing libraries like redux, redux-observable, recompose), as well as best practices for testing
- **A**: Sounds like this would be best handled in a presentation! In short, Hooks provide a more elegant solution to scoped side-effects and state management. Regarding best practices for testing, Ryan suggested just rendering out the whole tree since it's not a big "cost". He also added the caveat that he maints React Router and they don't have to deal with the kind of node tree depth that we might and therefore he's interested in our solution.

#### Hooks replace Recompose?
- **A**: Yes. I asked Michael Jackson this after the workshop. Apparently Recompose – in retrospect – is considered a mistake by its creator because while it tries to address the problem of bringing together HOCs, it results in messy implementations. React Hooks achieve a better result in a more elegant way, is part of the React package, and provide access to an additional render-cycle stage (i.e. Run Effects, from the screenshot on the [Notes](./NOTES.md) page).

#### Should we then remove `redux`?
- **A**: No, see `useReducer` section in [Notes](./NOTES.md)

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