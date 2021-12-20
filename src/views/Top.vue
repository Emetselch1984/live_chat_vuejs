<template>
  <section>
    <div class="container welcome">
      <section>
        <h1>ようこそ</h1>
        <section>
          <div v-if="shouldShowLoginForm">
            <LoginForm @redirectToChatRoom="redirectToChatRoom"/>
            <p>初めての方は<span @click="shouldShowLoginForm = false">こちら</span>をクリック</p>
          </div>
        </section>
        <section>
          <div v-if="!shouldShowLoginForm">
            <SignupForm />
            <p>既に登録済みの方は<span @click="shouldShowLoginForm = true">こちら</span>をクリック</p>
          </div>
        </section>
      </section>
    </div>
  </section>
</template>
<script>
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
export default {
  components: {LoginForm,SignupForm},
  data () {
    return {
      shouldShowLoginForm: true
    }
  },
  methods: {
    redirectToChatRoom(){
      this.$router.push({name: 'ChatRoom'})
    },
  }
}

</script>
<style >
.welcome{
  text-align: center;
  padding: 20px 0;
}
.welcome h1 {
  font-size: 16px;
}

/*  ======= 👇 ここから追加する ======= */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px auto;
  border-radius: 4px;
  border: 1px solid #eee;
  outline: none;
  box-sizing: border-box;
}
.welcome span{
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
</style>
