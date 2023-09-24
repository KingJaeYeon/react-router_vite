# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



### Eslint

```
npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev 
```
new File -> .eslintrc
```json
{
  "extends": "react-app"
}
```
vite.config.js -> add code
```js
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint' --ADD

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(),  eslint() -- ADD],
})

```

### React-router-dom
```
npm i react-router-dom
```
```jsx
 <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='pricing' element={<Pricing/>}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
</BrowserRouter>
```

### Json-server
```
npm i json-server
```
package.json
```json
{
  "scripts" : {
    "server": "json-server --watch data/cities.json --port 3600 -delay 500"
  }
}
```

### react-leaflet
```angular2html
npm i react-leaflet leaflet
```
```angular2html
https://react-leaflet.js.org/
//index.css
@import "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
```
