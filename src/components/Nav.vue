<template>
  <div class="nav">
    <router-link to="/money">
      <Icon name="money"/>
      记账
    </router-link>
    |
    <router-link to="/tags">
      <Icon name="tags"/>
      标签
    </router-link>
    |
    <router-link to="/statistics">
      <Icon name="statistics"/>
      统计
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';

@Component({
  components: {Icon}
})
export default class Nav extends Vue {
}
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
}
</style>