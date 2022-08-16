<template>
<div>
    <TheHeader></TheHeader>
    <div class="wrapper">
      <FormResume @block-added="addBlock"></FormResume>
      <ContentResume :blocks="blocks"></ContentResume>
    </div>
</div>
</template>

<script>


import FormResume from './components/FormResume.vue'
import TheHeader from './components/TheHeader.vue';
import ContentResume from './components/ContentResume.vue';


export default {
  components: { FormResume, TheHeader, ContentResume },
  data() {
    return {
      blocks: [],
    }
  },
  methods: {
    addBlock(block) {
      this.blocks.push(block)
      console.log(this.block)
    }
  },
}
</script>
<style>
.wrapper{
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: space-around;
}
</style>