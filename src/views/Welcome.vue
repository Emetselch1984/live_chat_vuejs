<template>
  <h1>
    Welcomeページ
  </h1>
  <section>
    <h2>{{title}}</h2>
    <section>
      <h3>{{subtitle}}</h3>
      <p v-if=isEnabled>{{3 + 3}}</p>
      <button v-on:click="toggle">トグルする</button>
    </section>
  </section>
</template>

<script>
export default {
  data(){
    return {
      title: "初めてのVueアプリ",
      subtitle: "ようこそ",
      isEnabled: false
    }
  },
  methods: {
    toggle(){
      this.isEnabled = !this.isEnabled
    }
  }
}
</script>

