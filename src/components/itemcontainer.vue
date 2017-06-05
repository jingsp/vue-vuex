<template>
  <div>
    <header>
      <span v-if="fatherComponents=='home'">第{{week}}周</span>
    </header>
    <div v-if="fatherComponents=='home'">
      <router-link to="item" class="button-sty">开始</router-link>
    </div>
    <div v-if="fatherComponents=='item' && itemDetail.length >= questionNum">
      <div class="questionOption">
        <span>{{itemDetail[questionNum-1].questionName}}</span>
        <ul>
          <li v-for="option in itemDetail[questionNum-1].answer" @click="choosed(option.id,option.score)"
              :class="{'selected': option.id==choosedOption }">
            <span>{{getAnswerType(option.id)}}</span>
            <span>{{option.text}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="fatherComponents=='item'">
      <span class="button-sty" @click='nextQuestion' v-if="itemDetail.length >= questionNum">下一题</span>
      <span class="button-sty" @click='nextQuestion' v-else>总分为：{{totalScore}}</span>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        choosedOption: null,
        score: 0
      }
    },
    props: {
      fatherComponents: String
    },
    computed: mapState({
      week: state => state.week,
      questionNum: state => state.questionNum,
      itemDetail: state => state.itemDetail,
      totalScore: state => state.totalScore
    }),
    methods: {
      choosed (id, score) {
          this.choosedOption = id
          console.log(score)
          this.score = score
      },
      nextQuestion () {
        // 首先进行数据初始化
        if (this.choosedOption) {
          this.choosedOption = null
        }
         this.$store.dispatch('addNum')
         this.$store.dispatch('getScore', this.score)
      },
      getAnswerType: id => {
        switch (id) {
          case 1:
            return 'A'
          case 2:
            return 'B'
          case 3:
            return 'C'
          case 4:
            return 'D';
        }
      }
    },
    created () {
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .button-sty {
    width: 80px;
    height: 30px;
    margin-top: 40px;
    display: inline-block;
  }
 .selected {
   background-color: yellow;
 }

</style>
