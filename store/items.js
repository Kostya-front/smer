export const state = () => (
    {
        items: [
          {id: 1, title: 'Гнев', isChecked: false, value: 1},
          {id: 2, title: 'Бешенство', isChecked: false, value: 1},
          {id: 3, title: 'Ярость', isChecked: false, value: 1},
          {id: 4, title: 'Истерия', isChecked: false, value: 1},
          {id: 5, title: 'Злость', isChecked: false, value: 1},
          {id: 6, title: 'Раждражение', isChecked: false, value: 1},
          {id: 7, title: 'Презрение', isChecked: false, value: 1},
          {id: 8, title: 'Негодование', isChecked: false, value: 1},
          {id: 9, title: 'Обида', isChecked: false, value: 1},
          {id: 10, title: 'Ревность', isChecked: false, value: 1},
          {id: 11, title: 'Уязвленность', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Уязвленность', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Досада', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Зависть', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Неприязнь', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Возмущение', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Отвращение', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Оцепенение', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Подозрение', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Тревога', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Ошарашенность', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Беспокойство', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Боязнь', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Унижение', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Замешательтво', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Растерянность', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Вина, стыд', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Сомнение', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Застенчивость', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Смущение', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Сломленность', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Подвох', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Надменность', isChecked: false, value: 1},
          {id: Math.random()*100000000, title: 'Ошеломленность', isChecked: false, value: 1},

        ],
      situation:''
    }
)
export const mutations = {
  getItems(state){
    if(localStorage.getItem('state')){
      state.items = JSON.parse(localStorage.getItem( 'state'))['items']
      state.situation = JSON.parse(localStorage.getItem( 'state'))['situation']
      return
    }
  },
  changeTheCheck(state, id){
    state.items.forEach(item=>{
      if(item.id === id){
        item.isChecked = !item.isChecked
      }
    })
    console.log(state)
    localStorage.setItem('state', JSON.stringify(state))
  },
  setValue(state, itemDate){
    state.items.forEach(item=>{
      if(item.id === itemDate.id){
        item.value = itemDate.value
      }
    })
    console.log(itemDate)
    localStorage.setItem('state', JSON.stringify(state))
  },
  setValueTextField(state, value){
    state[value.type] = value.value
    localStorage.setItem('state', JSON.stringify(state))
  }
}
export const actions = {
  changeTheCheck({commit}, id) {
    commit('changeTheCheck', id)
  },
  setValue( {commit},item){
    commit('setValue', item)
  },
  getItems({commit}) {
    commit('getItems')
  },
  setValueTextField( { commit}, value){
    commit('setValueTextField', value)
  }
}
export const getters = {
    items: state => state.items,
    isChecked:state => state.isChecked,
    situation : state => state.situation
}
