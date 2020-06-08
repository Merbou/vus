import directives from "@/directives"
export default {
    directives,
    methods: {
        vLoading(val) {
            this.$store.dispatch("loading", val)
        },
        snackbar(val) {
            val["state"] = true
            this.$store.dispatch("snackbarStore", val)
        }
    }
}