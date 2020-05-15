<template>
  <div class="mt-5" role="tablist">
    <Categories/>
    <Area />
    <Ingredient />
  </div>
</template>

<script>
// @ is an alias to /src
import Area from '@/components/filter/Area.vue'
import Categories from '@/components/filter/Categories.vue'
import Ingredient from '@/components/filter/Ingredient.vue'

export default {
  components: {
    Area,
    Ingredient,
    Categories
  }
}
</script>
