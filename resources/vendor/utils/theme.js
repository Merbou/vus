export default {
    theme(palette) {
        const THEMES_LABEL = ["nav-bar", "side-bar", "primary", "light", "info"]
        const _theme = {
            success: "#4caf50",
            error: "#ff5252"
        }
        let _len = Math.min(THEMES_LABEL.length, palette.length)

        for (let index = 0; index < _len; index++) {
            _theme[THEMES_LABEL[index]] = palette[index];
        }
        return _theme
    }
}