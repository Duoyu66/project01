<template>
  <div class="pagination">
    <button :disabled="pageNo==1">第一页</button>
    <button>1</button>
    <!--    中间部分-->
    <button>中间的页面</button>
    <!--    下-->
    <button>...</button>
    <button>一共{{totalPage}}页</button>
    <button>一共{{total}}条</button>
    <h1>{{startNumAndEndNum}}--------{{pageNo}}</h1>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  data() {
    return {
      pageNo: 1,
      pageSize: 5,
      total: 91,
      continues: 5
    }
  },
  // props:['pageNo','pageSize','continues','total'],
  //pageNo 当前第几个 pageSize代表每一页展示多少条数据 total:代表整个分页器一共有多少条数据 continues：代表分页连续页码个数
  mounted() {

  },
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize)
    },
     // 计算出连续页码的起始数据和结束数据
      startNumAndEndNum(){
        const {continues,pageNo,totalPage} =this
        let start=0,end=0;
        if (continues>totalPage){
          start=1;
          end=totalPage
        }else{
          start=pageNo-parseInt(continues/2);
          end=pageNo+parseInt(continues/2);
          if (start<1){
            start=1;
            end=continues;
          }
          if (end>totalPage){
            end=totalPage;
            start=totalPage-continues+1;
          }
          return {start,end};
        }
      }
  }
}
</script>

<style scoped lang="less">
.pagination {
  text-align: center;

  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}

.active {
  background-color: skyblue;
}

</style>