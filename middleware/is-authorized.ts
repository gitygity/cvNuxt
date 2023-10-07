import { RouteLocationNormalized } from "vue-router"

export default defineNuxtRouteMiddleware(async(to, from) => {
    const canAccess = await canUserAccess(to)
    if (!canAccess) return navigateTo('/login')
  })


  function canUserAccess(to: RouteLocationNormalized) {
    //get auth for access to private or public rout
    if (to.name !== 'login') {
      return true
    }
    return false
  }