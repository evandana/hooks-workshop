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

## `useState` (this.state)

### Best For

- Persistent state across renders
- **Required** for binding vars to paint across renders when using Effects

### Notes

- `useState` is great!
  - example: `const [minutes, setMinutes] = useState(5)`
  - You could have a complex object in state, but then you can't benefit from only doing necessary renders
  - Caches states in an arry based on index
  - Calls `render`
  - Hooks call index counter reset on `render` **for each component**
    - Which is why this had to be done by React team and not just an external library
  - `useState` creates `props` (immutable), which could seem confusing since `this.state` is mutable
  - Hooks are the new `mixins`

## Start with State

- Always start with state first
- Translates really well with design/UX
- Think about the app from a State perspective, not Events

## Controlled Components

- _declarative_: set the temp to 79º in car
  - always has an _imperative_ controller
- _imperative_: turn dials to high fan and high heat, then adjust again

## `useEffect` (component*Mount, component*Update)

### Why use?
- "Only run code when certain things change"
- Setting state can't be done in `render`

### Notes
- **Side effect** for pure functions
- `useEffect(() => { document.title = localPropName; }, [localPropName])`
- Synchronizes things to the document
- Changes to things that are NOT DOM
- Second argument defines what props to `watch`
- React conditionally calls `useEffect` if it needs to
- Use `useLayoutEffect` for "measuring" things from DOM (componentDidMount/componentDidUpdate)
  - Fired before `paint`, but _will_ trigger another `render`
- Timimg
  1. ![Timing of effects and rendering](https://github.com/donavon/hook-flow/blob/master/hook-flow.png?raw=true)
  1. `useLayoutEffect`
  1. `useEffect`
- Helpful for fetching data: restful and streaming
- Runs _after_ paint

### Cleanup
- `useEffect(() => { return cleanupCallback; }, [deps])`

## `useRef` (getElementById)

- Get a reference to a DOM node, component, etc
- `<div ref={someRefName}>` && `someRefName.current`

## To Go from `class`ic React to Hooks

1. Isolate `render` method
1. Make pure function with destructured inputs (props and state) refactored
1. Convert state to `useState`
1. Change any `componentDid*`/`componentWill*` to `useEffect`
1. Change all `this.` to `hook`-ey code

## What to replace with hooks?

- Render prop or HOC

## `useContext`

Best for managing state within components and across it's decomposed parts

### Use Case

- Tabs component API story
  - Shared component `<Tabs />` gets a new prop for each feature requested
  - Look at extereme example of _so_ many props: [jQuery DatePicker](https://api.jqueryui.com/datepicker/)
  - Expose `<Tabs />`, `<TabsList />`, `<Tab />`, `<TabPanels />`, instead of just `<Tabs />`
    - By being composable, you reduce the need to maintain all the changes by consumers
    - Splitting up is hard, if you have to manage props across elements, unless...
  - Is it backwards compatible?
    - **Yes**, if you create a thin wrapper to expose the original component API
- `useContext`, `createContext`

#### Testing

- `createContext(mock)`
- `<TabListContext.Provider><Component></TabsListContext.Provider`
- Test the whole thing (entire Tab tree)

## `useCallback`

## `useMemo`

## `useReducer`

- **Easier to read / more maintainable code**: Elevates language to "Product" language
  - Instead of when state changes to `{error: 'abc', loading: false}`
  - Use `dispatch({ type: 'SIGN_UP' })` and `useReducer((state, action) => { switch (state.action) { case ABC: ... } })`
- Can be a **global** reducer for the app
- Enables **multiple** reducers in an app
- Better than monolith redux for things that don't need app-level state

### Change useState to `dispatch({ type: 'SOME_ACTION', abc })

## Animations

- **Physics animations** - best for UI interactions because they're able to respond to changes in "natural" ways
- **Time-based** - good for PPT presentations
- Created easily with hooks
  - Think of it as a state change over time, using setTimeout  
  - [Example](./modules/app/useTween.js)
- Animate sound, values, styles, etc
- Animations can help make a UI smooth and elegant UX (give appropriate focus/attention/feedback)
- Check out `react-spring` for hooks-based animation libraries
- **Get Derived State** is hard
  - Study [this example](./modules/app/Dashboard.js)