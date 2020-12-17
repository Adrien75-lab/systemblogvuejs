<template>
<div>
<h1>Le post numero {{ id }}</h1>
<div>
    <h2>{{articleUnique.title}}</h2>
    <br>
    <p>
        {{articleUnique.body}}
        </p>
</div>
</div>
  </template>
  <script>
  import axios from 'axios'
  
  export default {
    name:'Post',
    data(){
        return {
            id: this.$route.params.id,
            articleUnique: []
        }
    },
    
    mounted(){
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then( reponse => {
            this.articleUnique = reponse.data

            })
    }
    

    }
  
  </script>
  <style>

  </style>

