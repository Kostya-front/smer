<template>
  <div class="container">
    <div class="content">
      <div class="input-group">
        <span class="input-group-text">Ситуация</span>
        <textarea
          placeholder="Время, событие, ряд событий. Фактическое содержание"
          class="form-control"
          aria-label="With textarea"></textarea>
      </div>
      <div class="items">
        <Item v-for="item of items" :key="item.id" :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "~/components/Item";
export default {
  name: 'IndexPage',
  components: {
    Item
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
  },
  computed:{
    items() {
      return this.$store.getters['items/items']
    },
    returnSituation() {
      return this.$store. getters['items/situation']
    }
  }
}
</script>

<style scoped>
  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    height: 100vh;
    overflow: auto;
  }
</style>
