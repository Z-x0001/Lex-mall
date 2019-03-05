import {
  setRemFontSize
} from './init.js';
import {
	GoodCard
} from '../../component/GoodCard/goodCard.js';


$(function(){
  // 设置rem
  setRemFontSize();
  
  // 通过数据渲染所有的商品,(父容器，数据)
  function buildGoods(goodBox, goods) {
    for (let i = 0,length = goods.length; i < length; i++) {
      const goodi = goods[i];
      let myGoodCard = new GoodCard({
        faEle:goodBox,
        data:goodi
      });
    }
  }

  $.ajax({
    type:"GET",
    url:"/lexian-mall/SearchGoodsServlet",
    data:{
      keyword:localStorage.getItem('lexian-user-keyword')
    }
  })
  .then((data) => {
    data = JSON.parse(data)
    let goods = data.goodsList;
    let goodBox = document.getElementsByClassName('good-list')[0];
    buildGoods(goodBox,goods);
  })
})