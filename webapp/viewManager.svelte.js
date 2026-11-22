import ViewHome from "./lib/views/Home.svelte";

export const views = $state({
	home: {
		id: "home",
		title: "Home",
		icon: "house",
		showNavigationBar: true,
		showInNavigation: true,
		component: ViewHome
	},
	explore: {
		id: "explore",
		title: "Explore",
		icon: "books",
		showNavigationBar: true,
		showInNavigation: true
	},
	nibbles: {
		id: "nibbles",
		title: "Nibbles",
		icon: "cookie",
		showNavigationBar: true,
		showInNavigation: true
	},
	snippets: {
		id: "snippets",
		title: "Snippets",
		icon: "code",
		showNavigationBar: true,
		showInNavigation: true
	},
	settings: {
		id: "settings",
		title: "Settings",
		icon: "gear",
		showNavigationBar: true,
		showInNavigation: true
	}
});

export let viewState = $state({current: views.home});
