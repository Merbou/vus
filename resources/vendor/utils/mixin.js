import directives from "@/directives"
export default {
    directives,
    methods: {
        vLoading(val) {
            this.$store.dispatch("loading", val)
        },
        snackbar(val) {
            this.$store.dispatch("snackbarStore", { ...val, state: true })
        }
    }
}