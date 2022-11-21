export const state = () => {
  return {
    time: '',
    date:'',
    situationFields: [
      {id:1, title:'situation', placeholder:'qweqweqwe', value: ''},
      {id:2, title:'situation', placeholder:'qweqweqwe', value: ''},
      {id:3, title:'answer', placeholder:'qweqweqwe', value: ''},
      {id:4, title:'answer', placeholder:'qweqweqwe', value: ''},
      {id:5, title:'emotion', placeholder:'qweqweqwe', value: ''},
      {id:6, title:'minds', placeholder:'qweqweqwe', value: ''},
      {id:7, title:'minds', placeholder:'qweqweqwe', value: ''},
      {id:8, title:'minds', placeholder:'qweqweqwe', value: ''},
      {id:9, title:'result', placeholder:'qweqweqwe', value: ''},
      {id:10, title:'result', placeholder:'qweqweqwe', value: ''},
      {id:11, title:'result', placeholder:'qweqweqwe', value: ''},
    ]
  }
}
export const mutations = {
  getState(state){
    if(localStorage.getItem('state3')) {
      state.situationFields = JSON.parse(localStorage.getItem('state3'))['situationFields']
      state.time = JSON.parse(localStorage.getItem('state3'))['time']
      state.date = JSON.parse(localStorage.getItem('state3'))['date']
    }
  },
  setFieldValue(state, field){
    state.situationFields.forEach(fieldItem=>{
      if(fieldItem.id === field.id){
        fieldItem.value = field.value
      }
    })
    localStorage.setItem('state3',JSON.stringify(state))
  }
}
export const actions = {
  setFieldValue({commit}, field){
    commit('setFieldValue',field)
  },
  getState({commit}) {
    commit('getState')
  }
}
export const getters = {
  situationFields: state => state.situationFields
}
