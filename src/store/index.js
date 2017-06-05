import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'

Vue.use(Vuex)

const state = {
    week: '1',
    questionNum: 1,
    totalScore: 0,
    itemDetail: [{
        'questionName': '题目一',
        'answer': [{
            'id': 1,
            'text': '答案aaaa',
            'score': 20
        }, {
            'id': 2,
            'text': '答案bbbb',
            'score': 30
        }, {
            'id': 3,
            'text': '答案cccc',
            'score': 10
        }, {
            'id': 4,
            'text': '答案dddd',
            'score': 60
        }]
    }, {
        'questionName': '题目二',
        'answer': [{
            'id': 1,
            'text': '答案aaaa2',
            'score': 50
        }, {
            'id': 2,
            'text': '答案bbbb2',
            'score': 30 
        }, {
            'id': 3,
            'text': '答案cccc2',
            'score': 120
        }, {
            'id': 4,
            'text': '答案dddd2',
            'score': 90
        }]
    }, {
        'questionName': '题目三',
        'answer': [{
            'id': 1,
            'text': '答案aaaa3',
            'score': 20
        }, {
            'id': 2,
            'text': '答案bbbb3',
            'score': 40
        }, {
            'id': 3,
            'text': '答案cccc3',
            'score': 70
        }, {
            'id': 4,
            'text': '答案dddd3',
            'score': 90
        }]
    }]
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})
