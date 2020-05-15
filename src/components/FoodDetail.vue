<template>
  <div class="container mt-5">
      <div class="row" v-for="result in results" :key="result.idMeal">
        <div class="col-md-5 mb-3">
          <img class="card" :src="result.strMealThumb" width="100%">
        </div>
        <div class="col-md-7 mb-3" style="text-align: left;">
          <h2> {{ result.strMeal }} </h2>
          <h4> Category : {{ result.strCategory }} </h4>
          <h4> Origin : {{ result.strArea }} </h4>
          <h4> Tags : {{ result.strTags }} </h4>
        </div>
        <div class="col-md-5 mt-3" style="overflow-x:auto;">
          <table>
            <tr>
              <th>Ingredients</th>
              <th>Measurements</th>
            </tr>
            <tr>
              <td> {{ result.strIngredient1 }} </td>
              <td> {{ result.strMeasure1 }} </td>
            </tr>
            <tr>
              <td> {{ result.strIngredient2 }} </td>
              <td> {{ result.strMeasure2 }} </td>
            </tr>
            <tr>
              <td> {{ result.strIngredient3 }} </td>
              <td> {{ result.strMeasure3 }} </td>
            </tr>
            <tr>
              <td> {{ result.strIngredient4 }} </td>
              <td> {{ result.strMeasure4 }} </td>
            </tr>
            <tr>
              <td> {{ result.strIngredient5 }} </td>
              <td> {{ result.strMeasure5 }} </td>
            </tr>
            <tr>
              <td> {{ result.strIngredient6 }} </td>
              <td> {{ result.strMeasure6 }} </td>
            </tr>
            <tr>
              <td> {{ result.strIngredient7 }} </td>
              <td> {{ result.strMeasure7 }} </td>
            </tr>
            <tr>
              <td> {{ result.strIngredient8 }} </td>
              <td> {{ result.strMeasure8 }} </td>
            </tr>
            <tr>
              <td> {{ result.strIngredient9 }} </td>
              <td> {{ result.strMeasure9 }} </td>
            </tr>
            <tr>
              <td> {{ result.strIngredient10 }} </td>
              <td> {{ result.strMeasure10 }} </td>
            </tr>
            <tr>
              <td> {{ result.strIngredient10 }} </td>
              <td> {{ result.strMeasure10 }} </td>
            </tr>
            <tr>
              <td> {{ result.strIngredient11 }} </td>
              <td> {{ result.strMeasure11 }} </td>
            </tr>
            <tr>
              <td> {{ result.strIngredient12 }} </td>
              <td> {{ result.strMeasure12 }} </td>
            </tr>
            <tr>
              <td> {{ result.strIngredient13 }} </td>
              <td> {{ result.strMeasure13 }} </td>
            </tr>
            <tr>
              <td> {{ result.strIngredient14 }} </td>
              <td> {{ result.strMeasure14 }} </td>
            </tr>
            <tr>
              <td> {{ result.strIngredient15 }} </td>
              <td> {{ result.strMeasure15 }} </td>
            </tr>
            <tr>
              <td> {{ result.strIngredient16 }} </td>
              <td> {{ result.strMeasure16 }} </td>
            </tr>
            <tr>
              <td> {{ result.strIngredient17 }} </td>
              <td> {{ result.strMeasure17 }} </td>
            </tr>
            <tr>
              <td> {{ result.strIngredient18 }} </td>
              <td> {{ result.strMeasure18 }} </td>
            </tr>
            <tr>
              <td> {{ result.strIngredient19 }} </td>
              <td> {{ result.strMeasure19 }} </td>
            </tr>
            <tr>
              <td> {{ result.strIngredient20 }} </td>
              <td> {{ result.strMeasure20 }} </td>
            </tr>
          </table>
        </div>
        <div class="col-md-7 mt-3 mb-3">
          <iframe :src="result.strYoutube.replace('watch?v=','embed/')" width="640px" height="360px" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="col-md-12">
          <h3 style="text-align: center"> Instruction </h3><br>
          <p style="text-align: justify;"> {{ result.strInstructions }} </p>
        </div>
        <p>Source : {{ result.strSource }} </p>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Foods',
  data () {
    return {
      results: ''
    }
  },
  mounted () {
    axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', {
      params: {
        i: this.$route.params.id
      }
    })
      .then(response => {
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
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}
</style>
