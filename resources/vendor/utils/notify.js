export default {
    pathIcon: "/images/favicon.png",
    pathNotifiedIcon: "/images/favicon-notified.png",
    pathSound: "/sounds/swiftly.mp3",
    browser: function () {
        const Vaudio = document.getElementById('audioPlayer')
        Vaudio.muted = false;
        Vaudio.src = this.pathSound;
        Vaudio.play();

        document.getElementById('favicon').href = this.pathNotifiedIcon;
    },
    icon: function () {
        document.getElementById('favicon').href = this.pathNotifiedIcon;
    },
    sound: function () {
        const Vaudio = document.getElementById('audioPlayer')
        Vaudio.src = this.pathSound;
        Vaudio.play();
    },
    clear: function () {
        document.getElementById('favicon').href = this.pathIcon;
    }
}
