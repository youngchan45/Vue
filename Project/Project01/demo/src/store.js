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
    addToCar(state, goodsForCar) {
      // this.selectedCount = value;
      // 把页面上的数据做成一个数组存放起来
      var flag = false;
      state.car.some(item => {
        if (item.id == goodsForCar.id) {
          item.count += goodsForCar.count;
          flag = true;
          return true;
        }
      })
      if (!flag) {
        state.car.push(goodsForCar)
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
    getAllCount(state) {
      let c = 0;
      state.car.forEach(item => {
        c += item.count;
      })
      return c;
      
    }
  }
})
