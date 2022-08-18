<template>
  <div id="app">
    <HeaderIndex></HeaderIndex>
    <router-view></router-view>
<FooterIndex/>
  </div>
</template>

<script>


import HeaderIndex from "@/components/Header/HeaderIndex";
import FooterIndex from "@/components/Footer/FooterIndex";

export default {
  name: 'App',
  components: {
    FooterIndex,
    HeaderIndex
  },
  mounted() {
    //捞数据
    this.$store.dispatch('categoryList')
  }
}
</script>
