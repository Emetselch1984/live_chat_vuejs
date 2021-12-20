<template>
  <section>
    <div class="container">
      <Navbar/>
      <ChatWindow :messages="messages"/>
    </div>
  </section>

</template>

<script>
import Navbar from "../components/Navbar";
import ChatWindow from "../components/ChatWindow";
import axios from 'axios'
export default {
  components: {ChatWindow, Navbar},
  data(){
    return {
      messages: [],
    }
  },
  methods: {
    async getMessages (){
      try {
        const res = await axios.get('http://localhost:3000/messages',{
          headers: {
            uid: window.localStorage.getItem('uid'),
            "access-token": window.localStorage.getItem('access-token'),
            client:window.localStorage.getItem('client')
          }
        })
       if(!res){
         throw new Error("メッセージ一覧を取得できませんでした。")
       }
       this.messages = res.data
      }catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.getMessages()
  }
}
</script>

<style scoped>
</style>

