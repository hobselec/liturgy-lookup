<template>
  <div id="app">
    <label>
      Search Hymn:
      <input v-model="query" type="text" />
    </label>
    <table style="width: 100%; font-size: 10pt">
      <thead>
        <th style="width: 65px">ELW #</th>
        <th>Name</th>
        <th>Source</th>
      
      </thead>
      <tbody>
        <tr v-for="result of queryResults" :key="result.id">
          <td>{{result.id}}</td>
          <td>{{result.name}}</td>
          <td>{{result.source}}</td>
         
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import fz from 'fuzzaldrin-plus';
import Hymns from '../src/elw-hymns.json';

export default {
  name: 'HymnSearch',
  data() {
    return {
      query: '',
      options: Hymns
    }
  },

  computed: {
    queryResults() {
      if(!this.query || this.query.length < 1)
        return []
        //this.options;

      const preparedQuery = fz.prepareQuery(this.query);
      const scores = {};

      return this.options
        .map((option, index) => {
          const scorableFields = [
            option.id,
            option.name,
            option.source,
            
          ].map(toScore => fz.score(toScore, this.query, { preparedQuery }));

          scores[option.id] = Math.max(...scorableFields);

          return option;
        })
        .filter(option => scores[option.id] > 1)
        .sort((a, b) => scores[b.id] - scores[a.id])
      ;
    }
  }
}
</script>
