# force2update

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
import { useForceUpdateFromAnywhere } from 'useForceUpdateFromAnywhere'

function App() {


  useForceUpdate()


  let onUpdate = () => {
    
    // apply non-reactive changes.
    
    nonReactive.something = 'something updated'

    forceUpdate()

  }

  return (
    <main>
      <button onClick={onUpdate}>Force update</button>
      <DeeplyNestedComponentContainingComponent1 />
      <DeeplyNestedComponentContainingComponent2 />
    </main>
  )
}
```