<template>
<div>
   {{ $store.state.num }}  <!-- vue静态的常量   -->  <!-- $store是共有的意思 -->
    <div class="">
      <button type="button" name="buttonAdd" @click="$store.commit('add')">加一个</button><!-- vue2.0  的写法 -->
      <button type="button" name="buttonAdd" @click="$store.commit('minus')">减一个</button>
    </div>
</div>
</template>

<script>
// vuex 提供了独立的构建工具函数 Vuex.mapState
import { mapState } from "vuex";
export default {
  name: "Product",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log(this.$route.params.id);
  }
};
</script>

<style scoped>
</style>
