/* 仓库文件 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = { //一般通过外部文件引入的，东西很多的。
  //定义数据 --- 类似data
  num: 12  //生成了一个静态的常量
}
const mutations = {
  //定义方法 --- 类似methods
  add(state){//state 是把上面的数据引入进来的
    state.num++;
  },
   minus(state){
     state.num--;
   }
}
export default new Vuex.Store({
  state,
  mutations
});
