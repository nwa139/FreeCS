import Alpine from 'alpinejs'

Alpine.store("view", {
        currentView: "loading",

        loadingMessage: "Starting app...",

        views: {
            loading: {
                id: "loading",
                title: "Loading...",
                showNav: false
            },
            home: {
                id: "home",
                title: "Home",
                showNav: true
            },
            nibbles: {
                id: "nibbles",
                title: "Nibbles",
                showNav: true
            },
            snippets: {
                id: "snippets",
                title: "Snippets",
                showNav: true
            },
            certificates: {
                id: "certificates",
                title: "Certificates",
                showNav: true
            },
            settings: {
                id: "settings",
                title: "Settings",
                showNav: true
            }
        },

        get getCurrentView() {
            return this.views[this.currentView];
        },

        navigateView(newView) {
            if (this.views[newView]) {
                this.currentView = newView;
            } else {
                this.currentView = this.views["home"];
            }
        }
    });