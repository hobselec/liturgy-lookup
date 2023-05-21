<template>

  <div>
<label>
      Search Liturgy: 
      <input type="text" v-model="query" />
    </label>
    <div v-for="result in results" :key="result.id" class="music-result">
        <code>{{ result.name }}</code>
        <code>from {{ result.source }}, page {{ result.page }}</code>
        <VexFlow :measures="result.score" :score-id="result.id" :system-width="700" />
        
    </div>
    
  </div>

</template>

<script>

//const Vex = require('vexflow');
//const VF = Vex.Flow;
import Liturgy from '../public/liturgy.json';

export default {
  name: 'LiturgySearch',
  data() {
    return {
      query : '',
      options : Liturgy
    }
  },
  props : {
  },
  computed : {

      results() {
          var results = [];

          if(this.query.length < 2)
            return [];

          for(let line of this.options)
          {
              var result = line.name.search(new RegExp(this.query, "i"));

              if(result != -1)
                results.push(line);
            //console.log(line.name);
          }

          return results;
      }
  },
  methods : {
      testIt() {
       


      }
  }

}
</script>
<style scoped>
.music-result { 
    border-bottom: 1px solid #cccccc;
    /*transform: scale(.8,.8);*/

}
</style>