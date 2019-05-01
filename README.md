# Notes

> Fork of [ReactTraining/hooks-workshop](https://github.com/ReactTraining/hooks-workshop)

[Original README](./README.md)

## How to use this repo

- I'm going to be pushing my updates to these lectures, so if you want to do them yourself, you'll need to pull a fresh copy from the original repo: [ReactTraining/hooks-workshop](https://github.com/ReactTraining/hooks-workshop)


## >> [Daily Notes](./NOTES.md) <<

Go to there ^^

## Major Take Aways

### When to use

- HOCs or renderProps could be refactored to hooks, which are better at sharing state
  - renderProps and HOCs are likely to be buggy with ASYNC code

### Best Practices

- Expose `<Tabs />`, `<TabsList />`, `<Tab />`, `<TabPanels />`, instead of just `<Tabs />`
    - By being composable, you reduce the need to maintain all the changes by consumers
    - Helps support _Separation of Concerns_
    - Test this tree only as a whole, not individually
- Use React.Children
  - `Children.map(children, child => { /* ... */  })`
  - `Children.toArray(children, child => { /* ... */  })`


### When not to use

- `useContext` is not _best_ at global state stuff

### Gotchas

- 

## Presentation Suggestion

- React basics
- Recreate hooks with "CrappyHooks" (lecture 2, index.js)