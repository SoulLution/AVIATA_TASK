import axios from 'axios'
const state = () => ({
  items: [],
  airlines: {}
})

const getters = {
  getItems: (state, getters, rootState) => {
    return state.items
  },
  getAirlines: (state, getters, rootState) => {
    return state.airlines
  },
}

const actions = {
  getData ({ state, commit }, searchData) {
    axios.get('./static/results.json')
    .then( res => {
        let data = {
          items: res.data.flights || []
        }
        if(!Object.keys(state.airlines).length)
          data.airlines = res.data.airlines || {}
          
        if(searchData && searchData.options && searchData.options.length){
          if(searchData.options.find( x => x == 1) > -1)
          data.items = data.items.filter(x => !x.itineraries[0][0].layovers.length)
          if(searchData.options.find( x => x == 2) > -1)
            data.items = data.items.filter(x => !x.services['0PC'])
          if(searchData.options.find( x => x == 3) > -1)
            data.items = data.items.filter(x => x.refundable)
        }
        if(searchData && searchData.airlines && searchData.airlines.length && searchData.airlines.indexOf('ALL') === -1){
          data.items = data.items.filter(x => searchData.airlines.indexOf(x.validating_carrier) > -1 )
        }
      commit('gettData', data)  
    })
  }
}

const mutations = {
  gettData(state, data) {
    state.items = data.items
    if(data.airlines)
      state.airlines = data.airlines
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
