# Notes

> Fork of [ReactTraining/hooks-workshop](https://github.com/ReactTraining/hooks-workshop)

[Original README](./README.md)

## How to use this repo

- I'm going to be pushing my updates to these lectures, so if you want to do them yourself, you'll need to pull a fresh copy from the original repo: [ReactTraining/hooks-workshop](https://github.com/ReactTraining/hooks-workshop)


## Take Aways

### When to use

- 

### When not to use

- 


## Funky-ness with the app...

- To use fake DB (offline mode): in `modules/app/utils.js` > switch to using `app/db.fake.js`


## Supplementary Notes (on top of the lessons)

- `npm start` does some fun with WebPack to `alias` the matched `exercise/*` files to the real app files

### React Basics (reminders)

- `React from "React"` describes the DOM
- `ReactDOM from "react-dom"` describes the output
- `<div>` in `JSX` is not a template, it's using a public API (`React.createElement`)
- React does...
  - Render UI
  - Manage State
  - ...

### `useState` (this.state)

- `useState` is great!
  - example: `const [minutes, setMinutes] = useState(5)`
  - You could have a complex object in state, but then you can't benefit from only doing necessary renders
  - Caches states in an arry based on index
  - Calls `render`
  - Hooks call index counter reset on `render` **for each component**
    - Which is why this had to be done by React team and not just an external library
  - `useState` creates `props` (immutable), which could seem confusing since `this.state` is mutable

### Start with State

- Always start with state first
- Translates really well with design/UX
- Think about the app from a State perspective, not Events

## Controlled Components

- _declarative_: set the temp to 79º in car
  - always has an _imperative_ controller
- _imperative_: turn dials to high fan and high heat, then adjust again

### `useEffect` (component*Mount, component*Update)

#### Why use?
- "Only run code when certain things change"
- Setting state can't be done in `render`

#### Notes
- **Side effect** for pure functions
- `useEffect(() => { document.title = localPropName; }, [localPropName])`
- Synchronizes things to the document
- Changes to things that are NOT DOM
- Second argument defines what props to `watch`
- React conditionally calls `useEffect` if it needs to
- Use `useLayoutEffect` for "measuring" things from DOM (componentDidMount/componentDidUpdate)
  - Fired before `paint`, but _will_ trigger another `render`
- Timimg
  1. ![https://github.com/donavon/hook-flow/blob/master/hook-flow.png?raw=true]
  1. `useLayoutEffect`
  1. `useEffect`
- Helpful for fetching data: restful and streaming

#### Cleanup
- `useEffect(() => { return cleanupCallback; }, [deps])`

### `useRef` (getElementById)

- Get a reference to a DOM node, component, etc
- `<div ref={someRefName}>` && `someRefName.current`

## Presentation Suggestion

- React basics
- Recreate hooks with "CrappyHooks" (lecture 2, index.js)