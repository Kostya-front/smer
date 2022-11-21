<template>
  <div>
    <div class="i">
      <span>{{item.title}}</span>
      <div class="input-group-text">
        <input
          class="form-check-input mt-0"
          type="checkbox" value=""
          aria-label="Checkbox for following text input"
          :checked="item.isChecked"
          @change="changeTheCheck(item.id)"
        />
      </div>
      <input
        type="text"
        class="form-control"
        aria-label="Text input with checkbox"
        :disabled="isDisabled"
        min="0"
        max="100"
        :value="item.value"
        @blur="onBlur()"
        @input="setValue(+$event.target.value)"
      />
    </div>
    {{ error }}
  </div>
</template>

<script>
export default {
  name: "Item.vue",
  props:{
    item:{
      type: Object,
      default: {
        id:Math.random() * 10000,
        title:' Empty text',
        isChecked: false,
        value: 1
      }
    }
  },
  data(){
    return {
      value: this.item.value,
      error:''
    }
  },
  methods:{
    changeTheCheck(id){
      this.$store.dispatch('items/changeTheCheck',id)
    },
    setValue(value){
      if((+this.item.value < 1 || +this.item.value > 100 )){
        return this.error = 'more 1 and less 100'
      }
      this.$store.dispatch('items/setValue',{id: this.item.id, value })
      this.error = ''
    },
    onBlur(){
      if((+this.item.value < 1 || +this.item.value > 100 )){
        this.$store.dispatch('items/setValue', {id: this.item.id, value: '1'})
      }
    }
  },
  computed:{
    isDisabled(){
      return !this.item.isChecked
    },
  }
}
</script>

<style scoped>

</style>
