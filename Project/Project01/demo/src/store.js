import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 使用JSON.parse()方法將數據轉換為js對象
var carLocal = JSON.parse(localStorage.getItem('car') || '[]')
export default new Vuex.Store({
  state: {
    // 练习
    // count: 0,
    // car: [],
    car: carLocal,
    count:carLocal.count
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
      localStorage.setItem('car', JSON.stringify(state.car))

    }
  },
  actions: {

  },
  getters: {
    //   练习
    //  objCount(state){
    //    return '最新数据是'+ state.count
    //  } 
    // 同步購物車徽標
    getAllCount(state) {
      let c = 0;
      state.car.forEach(item => {
        c += item.count;
      })
      return c;
    },
    //初始化購物車數量
    shopCount(){
      var o ={};
      state.car.forEach(item=>{
        // 設置對象的屬性{id1:count1, id2:count2, id3:count3}
        o.item.id=item.count;        
      })
      return o;
    }
  }
})
