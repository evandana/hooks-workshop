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
