# useForceUpdateFromAnywhere

[![npm version](https://img.shields.io/npm/v/react-forceupdate.svg?style=flat-square)](https://www.npmjs.com/package/force2update?activeTab=versions)
[![npm downloads](https://img.shields.io/npm/dm/react-forceupdate.svg?style=flat-square)](https://www.npmjs.com/package/force2update)
[![license](https://img.shields.io/github/license/kunukn/react-forceupdate)](https://amisa.co)

## About

React hooks for force updating Components from anywhere by others Components.
Force update from anywhere to those using a useForceUpdate hook with optional payload.

only pass component's name (it must be uniqe name) and one main object that has one function by name "forceName" without any implementation. after that in other Componete you can use mainObject.forceUpdate(componentName) and that Component going to update :)

## Install

### npm
```bash

npm i useForceUpdateFromAnywhere

```

## Usage example

### Basic

```jsx
import { useForceUpdateFromAnywhere } from "useforceupdatefromanywhere"

function App(mainObject) {
  return (
    <main>
      <Component1 mainObject={mainObject} />
      <Component2 mainObject={mainObject}/>
    </main>
  )
}

function Component1(mainObject) {
  useForceUpdateFromAnywhere(mainObject, 'componentName1');

  return (
    <div>
      <button onClick={() => mainObject.forceToUpdate('componentName1')}>Force update only this component</button>
      <button onClick={() => mainObject.forceToUpdate('componentName2')}>Force update component 2</button>
      <DeeplyNestedComponentContainingComponent1 />
    </div>
  )
}

function Component2(mainObject) {
  useForceUpdateFromAnywhere(mainObject, 'componentName2');

  return (
    <div>
      <button onClick={() => mainObject.forceToUpdate('componentName1')}>Force update component 1</button>
      <button onClick={() => mainObject.forceToUpdate('componentName2')}>Force update only this component</button>
      <DeeplyNestedComponentContainingComponent2 />
    </div>
  )
}
```