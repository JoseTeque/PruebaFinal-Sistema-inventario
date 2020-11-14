<template>
  <div v-if="loading">
      <v-progress-circular class="my-5" :size="90" :width="5" indeterminate color="green" >
        Cargando
      </v-progress-circular>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(["loading"])
    }
}
</script>

<style>

</style>