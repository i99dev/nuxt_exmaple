export const useUser = () => {
    const user = ref(null)
    const token = ref(null)

    return {
        user,
        token
    }
}