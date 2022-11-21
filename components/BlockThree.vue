<template>
  <div class="box-wrap">
    <div  class="box">
      <div v-for="field of fieldsSituation" :key="field.id">
        <div>
          <div class="input-group">
            <span class="input-group-text">With textarea</span>
            <textarea
              @input="setFieldValue({id: field.id, value: $event.target.value})"
              :value="field.value"
              class="form-control"
              aria-label="With textarea"></textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <div v-for="field of fieldsAnswers" :key="field.id">
        <div>
          <div class="input-group">
            <span class="input-group-text">With textarea</span>
            <textarea
              @input="setFieldValue({id: field.id, value: $event.target.value})"
              :value="field.value"
              class="form-control"
              aria-label="With textarea"></textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <div v-for="field of fieldsEmotion" :key="field.id">
        <div>
          <div class="input-group">
            <span class="input-group-text">With textarea</span>
            <textarea
              @input="setFieldValue({id: field.id, value: $event.target.value})"
              :value="field.value"
              class="form-control"
              aria-label="With textarea"></textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <div v-for="field of fieldsMinds" :key="field.id">
        <div>
          <div class="input-group">
            <span class="input-group-text">With textarea</span>
            <textarea
              @input="setFieldValue({id: field.id, value: $event.target.value})"
              :value="field.value"
              class="form-control"
              aria-label="With textarea"></textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <div v-for="field of fieldsResult" :key="field.id">
        <div>
          <div class="input-group">
            <span class="input-group-text">With textarea</span>
            <textarea
              @input="setFieldValue({id: field.id, value: $event.target.value})"
              :value="field.value"
              class="form-control"
              aria-label="With textarea"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "third.vue",
  computed: {
    fields() {
      return this.$store.getters['third/situationFields']
    },
    fieldsSituation() {
      return this.$store.getters['third/situationFields'].filter(field => field.title === 'situation')
    },
    fieldsAnswers() {
      return this.$store.getters['third/situationFields'].filter(field => field.title === 'answer')
    },
    fieldsEmotion() {
      return this.$store.getters['third/situationFields'].filter(field => field.title === 'emotion')
    },
    fieldsMinds() {
      return this.$store.getters['third/situationFields'].filter(field => field.title === 'minds')
    },
    fieldsResult() {
      return this.$store.getters['third/situationFields'].filter(field => field.title === 'result')
    }
  },
  methods: {
    setFieldValue(field) {
      this.$store.dispatch('third/setFieldValue', field)
    }
  }
}
</script>

<style scoped>
  .box { display: grid;   grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));}
  .box-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
