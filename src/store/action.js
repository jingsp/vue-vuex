export default {
    addNum ({commit, state}) {
       commit('ADD_ITEMNUM', {
           num: 1
       })
    },
    getScore ({commit}, score) {
        commit('GET_SCORE', {
            score: score
        })
    }

}
