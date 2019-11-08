import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 练习
    // count: 0,
    car: [],
  },
  mutations: {
    // 练习
    // add1(state) {
    //   state.count++
    // },
    // add2(state, c) {
    //   state.count -= c
    // }
    addToCar(state,goodsInfo) {     
      // this.selectedCount = value;
      // 把页面上的数据做成一个数组存放起来
      var flag= false;
      state.car.some(item=>{
        if(item.id==goodsInfo.id){
          item.count+=goodsInfo.count;
          flag =true;
          return true;

        }                
      })
      if(!flag){
        state.car.push(goodsInfo)
      }

      
      
    }
  },
  actions: {

  },
  getters: {
    //   练习
    //  objCount(state){
    //    return '最新数据是'+ state.count
    //  } 
  }
})
