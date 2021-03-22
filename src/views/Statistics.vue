<template>
  <div>
    <p>我是统计页面，用来展示统计统计信息</p>
    <Nav/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';

@Component({
  components: {Nav}
})
export default class Statistics extends Vue {

}
</script>

<style lang="scss" scoped>

</style>