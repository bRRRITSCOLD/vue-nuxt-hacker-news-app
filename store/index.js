import Vuex from 'vuex'
import axios from '~/plugins/axios'
const store = () => {
  return new Vuex.Store({
    state: {
      ids: [],
      itmes: []
    },
    actions: {
      LOAD_ITEMS: async ({commit}, dataUrl) => {
        const res = await axios.get(dataUrl)
        const ids = res.data
        const tenIds = ids.slice(0, 10)

        const itemsPromises = tenIds.map(id => axios.get(`item/${id}.json`))
        const itemsResponses = await Promise.all(itemsPromises)
        const items = itemsResponses.map(res => res.data)

        const realItems = items.map(item => item ? item : {
          title: 'Failed to Load Title.',
          id: 0
        })

        commit('setItems', realItems)
      },
    },
    mutations: {
      setIds: (state, ids) => {
        state.ids = ids
      },
      setItems: (state, items) => {
        state.items = items
      }

    }
  })
}
export default store
