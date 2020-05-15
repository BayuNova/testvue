<template>
  <div class="search container">
  <FoodDetail />
  </div>
</template>

<script>
// @ is an alias to /src
import FoodDetail from '@/components/FoodDetail.vue'

export default {
  name: 'Search',
  components: {
    FoodDetail
  }
}
</script>
