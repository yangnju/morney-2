<template>
  <div>
    <p>我是tag页，用来管理用户创建的tag</p>
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
export default class Tags extends Vue {

}
</script>

<style lang="scss" scoped>

</style>