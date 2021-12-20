import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome'
import Top from '../views/Top'
import ChatRoom from "../views/ChatRoom";
import useValidate from '../auth/validate'

const {validate} = useValidate()
const requireAuth = async (to, from, next) => {
  console.log('requireAuthが呼ばれています！')
  const uid = window.localStorage.getItem('uid')
  const client = window.localStorage.getItem('client')
  const accessToken = window.localStorage.getItem('access-token')

  if (!uid || !client || !accessToken) {
    console.log('ログインしていません')
    next({ name: 'Top' })
    return
  }

  await validate()

  next()
}
const routes = [
  {
    path: '/welcome',
    name: "Welcome",
    component: Welcome
  },
  {
    path: '/',
    name: "Top",
    component: Top
  },
  {
    path: '/chatroom',
    name: "ChatRoom",
    component: ChatRoom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
