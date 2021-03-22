<template>
  <div>
    <p>我是money页，用来记账</p>
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
export default class Money extends Vue {

}
</script>

<style lang="scss" scoped>

</style>