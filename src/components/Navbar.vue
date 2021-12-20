<template>
  <nav>
    <div>
      <p>こんにちは<span class="name">{{name}}</span>さん</p>
      <p class="email">現在、<span>{{email}}</span>でログイン中です</p>
    </div>
    <button>ログアウト</button>
  </nav>
</template>
<script>

export default {
  data(){
    return {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('uid'),

    }
  }
}
</script>
<style scoped>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
nav p{
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email{
  font-size: 14px;
  color: #999;
}

</style>
