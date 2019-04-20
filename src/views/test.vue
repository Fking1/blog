<template>
  <div style="width:100%;min-width:1200px">
      <vue-markdown>{{content}}</vue-markdown>
  </div>
</template>
<script>
import VueMarkdown from 'vue-markdown';
import LEARN from '@/md/mock.md'
export default {
    data () {
        return {
            content:LEARN,
            converter: ''
        }
    },
    components: {
        VueMarkdown
    },
    mounted() {
    },
    methods: {
        
    }
}
</script>
<style>
#show-content{
  padding:25px;
}
</style>