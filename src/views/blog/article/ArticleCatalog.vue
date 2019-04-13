<template>
  <div class="post-catalog">
    <div class="sidebar-block catalog-block">
      <nav class="article-catalog">
        <div class="catalog-title">目录</div>
        <div class="catalog-body">
          <ul data-v-3414e7f5 class="catalog-list" style="margin-top: 0px;">
            <li data-v-3414e7f5 class="item d1" v-for="items in catalogList" :key="items.id">
              <a
                :href="items.id"
                :title="items.title"
              >{{items.title}}</a>
              <!---->
              <ul class="sub-list" v-if="items.child.length>0">
                <li class="item d2" v-for="item in items.child" :key="item.id">
                  <a :href="item.id" :title="item.title">{{item.title}}</a>
                  <!---->
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name:"",
  data(){
    return{
      catalogList:[]
    }
  },
  mounted(){
    setTimeout(()=>{
      this.createCatalog()
    },1000)
  },
  methods:{
    createCatalog(){
      var con = document.querySelector('.content').childNodes[1].childNodes
      var hList = []
      var catalogList = []
      var indexCata = 0;
      for(var i = 0;i<con.length;i++){
        if(con[i].tagName.substr(0,2) == 'H3' ||con[i].tagName.substr(0,2) == 'H4'){
          hList.push(con[i])
        }
      }
      for(var j = 0;j<hList.length;j++){
          if(hList[j].tagName == 'H3'){
            hList[j].id="catalog-"+j.toString(),
            catalogList[indexCata] = {
              id:"#catalog-"+j.toString(),
              title:con[j].textContent,
              child:[]
            }
            indexCata++
          }else if(hList[j].tagName == 'H4'){
            if(catalogList.length>0){
                hList[j].id="catalog-"+j.toString(),
                catalogList[catalogList.length-1].child .push({
                  id:"#catalog-"+j.toString(),
                  title:con[j].textContent
                }) 
            }
          }
      }
      this.catalogList=catalogList
      console.log(this.catalogList)
  }
  }
}
</script>


<style lang="less">
.post-catalog {
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 15rem;
  .sidebar-block {
    position: fixed;
    top: 7rem;
    width: inherit;
    transition: top .2s;
    margin-bottom: 1.5rem;
    border-radius: 2px;
    .catalog-title {
      font-size: 0.875rem;
      font-weight: 600;
      color: #000;
    }
    .catalog-body {
      position: relative;
      margin: 6px 0;
      overflow: hidden;
      .catalog-list {
        position: relative;
        .item {
          margin: 0;
          padding: 0;
          font-size: 0.875rem;
          font-weight: 400;
          color: #333;
          list-style: none;
          a {
            display: block;
            position: relative;
            padding: 4px 0 4px 12px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            &:before {
              content: "";
              position: absolute;
              top: 50%;
              left: 0;
              margin-top: -2px;
              width: 4px;
              height: 4px;
              background-color: currentColor;
              border-radius: 50%;
            }
            &:hover {
              background-color: #ebedef;
            }
          }
          &.d1 {
            font-weight: 600;
            color: #000;
            a {
              margin: 6px 0;
              padding: 4px 0 4px 21px;
              &::before {
                left: 5px;
                margin-top: -3px;
                width: 6px;
                height: 6px;
              }
            }
            &:first-child > a {
              margin-top: 0;
            }
          }
          &.d2 {
            a {
              padding-left: 36px;
              &::before {
                left: 24px;
              }
            }
          }
          &.active {
            a {
              color: #007fff;
              background-color: #ebedef;
            }
          }
        }
        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 7px;
          bottom: 0;
          width: 2px;
          background-color: #ebedef;
          opacity: 0.5;
        }
      }
    }
  }
  @media screen and (max-width: 992px){
      display: none
  }
}
</style>
