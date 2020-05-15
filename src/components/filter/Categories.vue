<template>
  <div class="container">
        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-1 variant="info">Filter By Category</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <div class="row">
                        <div class="col-md-3" v-for="result in results" :key="result.strCategory" style="text-align: center;">
                            <router-link :to="{ name: 'FilterCategory', params: { name: result.strCategory } }">
                                <b-card-text>{{result.strCategory}}</b-card-text>
                            </router-link>
                        </div>
                    </div>
                </b-card-body>
            </b-collapse>
        </b-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Foods',
  data () {
    return {
      results: []
    }
  },
  mounted () {
    axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list').then(response => {
      console.log(response.data.meals)
      this.results = response.data.meals
    })
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
</style>
