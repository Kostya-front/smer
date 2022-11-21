export const state = () => {
  return {
    fieldsSuggestions:[
      { id: 0, title: 'situation', value: '' },
      { id:1, title:'auto', value:'' },
      { id:2, title:'middle', value:'' },
      { id:3, title:'deep', value:'' },
      { id: 4, title: 'thoughts', value:'' }
    ],
    minds:'',
    questions:[
      {id:1, title:'qwqwdqwd', value:''},
      {id:2, title:'sdf', value:''},
      {id:3, title:'sdfreher', value:''},
      {id:4, title:'hkghg', value:''},
      {id:5, title:'ghjghj', value:''},
      {id:6, title:'tyrtu', value:''},
    ]
  }
}
export const mutations = {
  getState(state){
    if(localStorage.getItem('state2')) {
      state.fieldsSuggestions = JSON.parse(localStorage.getItem('state2'))['fieldsSuggestions']
      state.questions = JSON.parse(localStorage.getItem('state2'))['questions']
    }
  },
  fillTheMindsField(state, fieldItem){
    state.fieldsSuggestions.forEach((field)=>{
      if(field.id === fieldItem.id){
        field.value = fieldItem.value
      }
    })
    localStorage.setItem('state2',JSON.stringify(state))
  }
}
export const actions = {
  fillTheMindsField( {commit}, field) {
    commit('fillTheMindsField', field)
  },
  getState({commit}) {
    commit('getState')
  }
}
export const getters = {
  suggestions: state => state.fieldsSuggestions,
  questions: state => state.questions,
}
