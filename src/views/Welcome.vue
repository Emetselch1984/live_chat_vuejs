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
    <section>
      <p>{{ text }}</p>
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
  // 一度算出プロパティで計算をすると、もう一度メソッドを呼び出した場合でも、
  // 依存しているデータに変更がされない限りキャッシュを返すという特性があります。
  computed: {
    text () {
      if (this.isEnabled) {
        return 'こんにちは！'
      } else {
        return 'さよなら！'
      }
    }
  },
  methods: {
    toggle(){
      this.isEnabled = !this.isEnabled
    }
  }
}
</script>
