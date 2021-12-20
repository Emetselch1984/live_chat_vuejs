<template>
  <h2>ログイン</h2>
  <form @submit.prevent="signIn">
    <input type="email" required placeholder="メールアドレス" v-model="email">
    <input type="password" required placeholder="パスワード" v-model="password">
    <button>ログインするう</button>
    <div class="error">{{errors}}</div>
  </form>
</template>
<script>
import axios from 'axios'
import setItem from "../auth/setItem";
export default {
  emits:['redirectToChatRoom'],
  data(){
    return {
      email: "",
      password: "",
      errors: null
    }
  },
  methods: {
    async signIn(){
      this.errors = null
      try {
        const res = await axios.post("http://localhost:3000/auth/sign_in",{
          email: this.email,
          password: this.password
        })
        if(!res){
          throw new Error("ログインできませんでした")
        }
        if(!this.errors){
          console.log(res)
          setItem(res.headers,res.data.data.name)


          this.$emit('redirectToChatRoom')
        }

        return res
      }
      catch (error) {
        console.log({error})
        this.errors = "ログインできませんでした"
      }
    }
  }
}
</script>
