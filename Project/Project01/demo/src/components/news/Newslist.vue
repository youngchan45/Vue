<template>
  <div>

    <ul>
      <li class="news"
        v-for='(list,index) in newsList' :key=index>
        <div>
          <!-- <img src='../../../public/img/news.jpg' aly='news.jpg' /> -->
          <img :src="list.img" alt="news.jpg"/>
        </div>
        <div class="newsTit0">
          <span>{{list.title}}</span>
          <div class="newsTit1">
            <span>{{list.time |timeset}}</span>
            <span>{{list.clicks}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
.news{
  display: flex;
  border-bottom: .01rem solid rgba(100,120,60,0.5);
}
.newsTit0 {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.newsTit1 {
  display: flex;
  justify-content: space-between;
}
.news img{
  width:3rem;
  height: 3rem;
}
</style>

<script>
import img from '../../assets/img/news.jpg';
import menu from '../../assets/img/menu1.png';

Vue.filter('timeset',(str) => {
  var dt = new Date(str)
            var y = dt.getFullYear()
            var m = ('0' + (dt.getMonth() + 1)).slice(-2)
            var d = ('0' + dt.getDate()).slice(-2)
            var h = ('0' + dt.getHours()).slice(-2)
            var mm = ('0' + dt.getMinutes()).slice(-2)
            // var s= ('0'+dt.getSeconds()).slice(-2)
            var s = dt.getSeconds().toString().padStart(2, '0')

            return `${y}-${m}-${d} ${h}:${mm}:${s}`
})
export default {
  data(){
    return{
      newsList:[
        {'img':img,
        'title':'11111111111111111',
        'time':new Date() ,
        'clicks':'34ci'},
        {'img':menu,
        'title':'11111111111111111',
        'time':new Date(),
        'clicks':'56ci'},
        {'img':img,
        'title':'11111111111111111',
        'time':new Date(),
        'clicks':'111ci'},
        {'img':img,
        'title':'11111111111111111',
        'time':new Date(),
        'clicks':'3444ci'},
      ]
    }
  },
  methods: {
    
  },
};
</script>