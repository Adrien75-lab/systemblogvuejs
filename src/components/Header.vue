<template>
<div>
    <ul class="nav">
        <li class="btn btn-primary btn-nav"><router-link to="/" exact><i class="fa fa-th"></i>Accueil</router-link></li>
        <li class="btn btn-primary btn-nav"><router-link to="/page1">Les articles</router-link></li>
        <li class="btn btn-primary btn-nav"><router-link to="/page2">To-do list</router-link></li>

    </ul>
</div>
  </template>
  <script>
  export default {
    name:'Header',
    

  }
  </script>
  <style>
  .btn-nav {
      margin: 5px;

  }
  .btn-nav a {
      color:#fff;
  }
  .btn-nav a:hover {
      color:#fff;
  }

  </style>
