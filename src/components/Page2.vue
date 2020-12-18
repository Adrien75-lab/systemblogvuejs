<template>
<div>

<div class="container mt-5">
<h1>Rentrez des choses à faire.</h1>
<form>
    <div class="form-group">
        <label for="action">Action</label>
        <input v-model="formData.tache" type="text" id="action" class="form-control">

    </div>
    <button v-on:click.prevent="creationItem" class="btn btn-primary mb-3">Créer une tache</button>

    </form>
    <ul>
        <li v-bind:key="index" v-for="(tache,index) in tableauTaches">
            <item v-bind:id="index" :tache="tache" :suppression="suppression"></item>
   
        </li>

    </ul>
</div>

</div>
</template>
<script>
import Item from './Item'
export default {
    name:'Page2',
    data() {
        return{
            formData: {
                tache:''

            },
            tableauTaches : ['Javascript','Vue','Symfony','PHP']
        }

    },
    components: {
        'item': Item

    },

    methods: {
        creationItem: function(){
            this.tableauTaches.push(this.formData.tache)
            this.formData.tache=''

        },
        suppression: function(e){
            this.tableauTaches.splice(e.target.parentNode.id, 1)

        },
        goDebut: function(){
            this.$router.push('/')
        }

    }
}
</script>
<style>
h1 {
    margin-top: 100px!important;
}
ul {
    list-style-type:none;
    padding:0;
}


</style>