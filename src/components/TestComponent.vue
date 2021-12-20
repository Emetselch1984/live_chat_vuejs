<template>
  <section>
    <h4>
      これはコンポーネントから表示されています。
    </h4>
    <p>{{message}}</p>
    <p>{{propsNameIsEnabled}}</p>
    <button @click="onclick">親メソッドを実行するボタン</button>
  </section>
</template>
<script>
export default {
  props:['message','propsNameIsEnabled'],
  methods: {
    onclick(){
      this.$emit('toggle')
    }
  }
}
</script>