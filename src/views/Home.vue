<template>
  <div class="home">
    <h1 class="text-center text-muted">{{ appName }} {{ appVersion }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
export default class Home extends Vue {
  @State("appName") appName!: string;
  @State("appVersion") appVersion!: string;
}
</script>
