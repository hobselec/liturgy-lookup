<template>

  <div>
<label>
      Search Liturgy: 
      <input type="text" v-model="state.query" />
    </label>
    <div v-for="result in state.results" :key="result.id" class="music-result">
        <code>{{ result.name }}</code>
        <code>from {{ result.source }}, page {{ result.page }}</code>
        <vex-flow :measures="result.score" :score-id="result.id" :system-width="700" />
        
        
    </div>
    
  </div>

</template>

<script setup>

import { reactive, computed } from 'vue'

import VexFlow from './VexFlow.vue'

import Liturgy from '../src/liturgy.json';

  const state = reactive({
      query : '',
      options : Liturgy,

      results : computed(() => {
          var results = [];

          if(state.query.length < 2)
            return [];

          for(let line of state.options)
          {
              var result = line.name.search(new RegExp(state.query, "i"));

              if(result != -1)
                results.push(line);
            //console.log(line.name);
          }

          return results;
      })
})



</script>
<style scoped>
.music-result { 
    border-bottom: 1px solid #cccccc;
    /*transform: scale(.8,.8);*/

}
</style>