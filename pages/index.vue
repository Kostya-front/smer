<template>
  <div class="body">
    <nav class="navbar navbar-dark bg-primary">
      <div class="logo">SMER</div>
    </nav>
    <div class="main">
      <button @click="()=>--index" type="button" class="btn btn-primary" data-bs-toggle="button">Prev</button>
      <BlockOne v-if="index === 0"/>
      <BlockTwo v-if="index === 1" />
      <BlockThree v-if="index === 2" />
      <button @click="()=>++index" type="button" class="btn btn-primary" data-bs-toggle="button">Next</button>
    </div>
  </div>
</template>

<script>
import Item from "~/components/Item";
import BlockOne from "~/components/BlockOne";
import BlockTwo from "~/components/BlockTwo";
import BlockThree from "~/components/BlockThree";
export default {
  name: 'IndexPage',
  components: {
    Item, BlockOne, BlockTwo, BlockThree
  },
  head(){

  },
  data() {
    return {
      index: 0,
    }
  },
  mounted(){
    console.log(this.$store.getters['items/isChecked'])
  },
  methods:{
    setValueTextField(value){
      this.$store.dispatch('items/setValueTextField', value)
    }
  },
  beforeMount() {
    this.$store.dispatch('items/getItems')
    this.$store.dispatch('minds/getState')
    this.$store.dispatch('third/getState')
  },
  computed:{
    items() {
      return this.$store.getters['items/items']
    },
    returnSituation() {
      return this.$store. getters['items/situation']
    },
  }
}
</script>
<style scoped>
  .body {
    overflow: hidden;
    height: 100vh;
  }
  .main { display: flex; align-items: center; justify-content: space-between }
  .buttons {
    position: absolute;
  }
</style>
