import { useUser } from "~~/composables/user"
export default defineNuxtRouteMiddleware((to, from) => {
    const { user } = useUser()
    if (!user.value) {
        return ("/")
    }
})
