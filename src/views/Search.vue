<template>
  <div class="search container">
  <Foods />
  </div>
</template>

<script>
// @ is an alias to /src
import Foods from '@/components/Foods.vue'
export default {
  name: 'Search',
  components: {
    Foods
  }
}
</script>
