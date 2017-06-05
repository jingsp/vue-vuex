const ADD_ITEMNUM = 'ADD_ITEMNUM'
const GET_SCORE = 'GET_SCORE'

export default {
    [ADD_ITEMNUM] (state, payload) {
        state.questionNum += payload.num
        console.log(state.questionNum)
    },
    [GET_SCORE] (state, payload) {
        state.totalScore += payload.score
        console.log(state.totalScore)
    }

}
