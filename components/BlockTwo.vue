<template>
  <div class="wrap">
    <div v-for="suggest of suggestions" :key="suggest.id">
      <h3>{{ suggest.title }}</h3>
      <div class="input-group">
        <span class="input-group-text">With textarea</span>
        <textarea
          @input="fillTheMindsField({id:suggest.id, value: $event.target.value})"
          :value="suggest.value"
          class="form-control"
          aria-label="With textarea"></textarea>
      </div>
    </div>
    <div class="questions">
      <div v-for="question of questions" class="question">
        <h3> {{ question.title}}</h3>
        <textarea />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Second.vue",
  methods:{
    setValueTextField(value){
      this.$store.dispatch('items/setValueTextField', value)
    },
    fillTheMindsField(field){
      this.$store.dispatch('minds/fillTheMindsField', field)
    }
  },
  computed:{
    returnSituation() {
      return this.$store. getters['items/situation']
    },
    suggestions() {
      return this.$store.getters['minds/suggestions']
    },
    questions() {
      return this.$store.getters['minds/questions']
    },
  },
}
</script>

<style scoped>
  .wrap {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
</style>
