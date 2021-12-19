import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome'
import Top from '../views/Top'
import ChatRoom from "../views/ChatRoom";
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
    component: ChatRoom
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
