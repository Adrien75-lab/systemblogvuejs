<template>
<div id="app">
  <header-top></header-top>
  <router-view></router-view>
  

  
  </div>
  </template>
  <script>
  import Header from './components/Header'
  
  
  export default {
      name: 'App',
      components: {
        'contenu': Contenu,
        'header-top' : Header
      }
    

    }
  
  </script>
  <style>

  </style>
