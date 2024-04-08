
  
  

# :star2: Nesine Case Study

[![React][React.js]][React-url] 
> This is a case study project from nesine.com 

## :hammer: Development setup

```sh
npm  install
npm  run  start
```

## :hotsprings: Development Coverage
### &nbsp;React
 - state management with Context API, context provider
 - Loader component for initial data loading
 - useState,useEffect,useCallback, memo
 - module barreling (export aggregate) for centralized named import
 - array utilities
   - factor() to get the product of an array object prop
   - resolve() to access the value of nested object by the path
 - optimisation
   - debugging with react profiler
   - state lifting to wrapper component
   - useCallback, memo
<br>

### &nbsp;Webpack 
 - sass-loader to use scss/sass in the project
 - path aliasing to use named absolute paths instead of relative paths
<br>

## :triangular_flag_on_post: Noted Todos
 - There are various techniques can be used to improve initial data loading performance such as data table windowing, lazy-loading, infinite scrolling, virtualization
 - axios api interface setup to retrieve data
 - webpack css/scss modules configuration
 - more dynamic mechanism could be implemented in ItemRow.jsx 

<!-- Markdown link & img dfn's -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB

[React-url]: https://reactjs.org/
