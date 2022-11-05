# Vite3 React Hash Router Deployment

> This is a simple react app built by vite3 that uses hash router.

## Create a Vite React Project

[Official guide](https://vitejs.dev/guide/) to create a vite react project.

```bash
npm create vite@latest
# Input project name as project directory 
# Choose a project template: react
# Choose language: TypeScript [optional]
```

## Install Hash Router

[Official guide](https://reactrouter.com/en/main/start/tutorial) to install React Router.

```bash
npm install react-router-dom localforage match-sorter sort-by
```

## Add Hash Router to Main Component

Edit `src/main.tsx` to add hash router.

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createHashRouter, RouterProvider} from 'react-router-dom'; // 1. Import Hash Router
import App from './App'
import './index.css'
import About from './About';

// 2. Create a Hash Router with router configurations
const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>,
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/> {/* 3. Add RouterProvider */}
  </React.StrictMode>
)
```

## Enable Relative Path

Add `base` field to `vite.config.ts` to enable relative path so your app can be deployed to a subdirectory of another web root.

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 1. Enable relative path

})
```

## Enable LESS

[Official guide](https://vitejs.dev/guide/features.html#css-pre-processors) to enable LESS.

```bash
npm install -D less less-loader
```

Add `less` to `vite.config.ts` to enable less.

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  css:{ // Modify css processor options
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 'primary-color': '#1DA57A',
        },
        javascriptEnabled: true,
      }
    }
  }
})
```

