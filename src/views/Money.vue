<template>
  <div class="nav-wrapper">
    <div class="content">
      <p>我是money页，用来记账</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <p>Money.vue</p>
      <Nav/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';

@Component({
  components: {Nav}
})
export default class Money extends Vue {

}
</script>

<style lang="scss" scoped>
.nav-wrapper{
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content{
  border: 1px solid green;
  overflow: auto;
  flex-grow: 1;
}
</style>