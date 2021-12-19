<template>
  <div class="container">
    <h1>
      Welcomeページ
    </h1>
    <section>
      <h2>{{title}}</h2>
      <section>
        <h3>{{subtitle}}</h3>
        <p v-if=isEnabled>{{3 + 3}}</p>
        <button v-on:click="toggle">トグルする</button>
        <TestComponent message="Welcomeから渡されたデータです" @toggle="toggle"/>
        <TestComponent :propsNameIsEnabled="isEnabled" @toggle="toggle" >
          <p v-if="isEnabled">こんにちは</p>
        </TestComponent>
      </section>
      <section>
        <p>{{ text }}</p>
      </section>
    </section>
  </div>
</template>

<script>
import TestComponent from "../components/TestComponent";
export default {
  components: {TestComponent},
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
<style scoped>
p {
  font-size: 20px;
  color: red;
}
</style>