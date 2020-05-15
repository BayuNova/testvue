<template>
  <div class="container">
    <div class="row">
        <div class="col-md-3 mb-4" v-for="result in fav" :key="result.id" style="text-align: center;">
          <router-link :to="{ name: 'Detail', params: { id: result.id } }">
            <div class="card" style="width: 15rem; height: 100%;">
              <img class="card-img-top" :src="result.picture">
              <div class="card-body">
                <h5 class="card-title">{{result.name}}</h5>
                <span class="badge badge-pill badge-primary">{{result.category}}</span>
              </div>
            </div>
          </router-link>
        </div>
    </div>
  </div>
</template>

<script>
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
  mounted () {
    this.fav = JSON.parse(localStorage.getItem(STORAGE_KEY) || [])
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
