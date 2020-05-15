<template>
  <div class="container">
      <!-- <h1>This is a search page</h1> -->
    <div class="row my-5">
        <div class="form-inline" style="width: 100%;">
            <div class="form-group mb-2" style="width: 100%;">
                <input type="text" class="form-control" placeholder="Seach meals by name..." v-model="query">
                <button type="submit" class="btn btn-primary" @click="getResult(query)">Search</button>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-3 mb-4" v-for="result in results" :key="result.idMeal" style="text-align: center;">
          <router-link :to="{ name: 'Detail', params: { id: result.idMeal } }">
            <div class="card" style="width: 15rem; height: 100%;">
              <img class="card-img-top" :src="result.strMealThumb">
              <div class="card-body">
                <h5 class="card-title">{{result.strMeal}}</h5>
                <span class="badge badge-pill badge-primary">{{result.strCategory}}</span>
              </div>
            </div>
          </router-link>
          <button @click="addFav(result.idMeal,result.strMealThumb,result.strMeal,result.strCategory)">Save</button>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const STORAGE_KEY = 'DaftarFavorit'
export default {
  name: 'Foods',
  data () {
    return {
      msg: 'Search',
      query: '',
      results: '',
      fav: []
    }
  },
  methods: {
    getResult (query) {
      axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + query).then(response => {
        console.log(response.data.meals)
        this.results = response.data.meals
      })
    },
    addFav (favId, favPict, favName, favCategory) {
      this.fav.push({ id: favId, picture: favPict, name: favName, category: favCategory })
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.fav))
      this.$toast.success('Added to favorites !', {
        theme: 'bubble',
        position: 'top-center',
        duration: '1500'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input[type=text] {
  width: 250px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}
input[type=text]:focus {
  width: 40%;
}

card:hover {
  border-color: blue;
}
</style>
