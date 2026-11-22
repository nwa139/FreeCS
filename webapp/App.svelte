<script>
	import {viewState} from "./viewManager.svelte.js";
	import NotAvailable from "./lib/views/NotAvailable.svelte";
	import MobileNavigation from "./lib/navigation/MobileNavigation.svelte";

	let ActiveComponent = $derived(viewState.current.component ?? NotAvailable);
</script>

<div id="main">
	<main>
		{#if viewState.current?.component}
			<ActiveComponent/>
		{:else}
			<NotAvailable/>
		{/if}
	</main>
	<MobileNavigation>
	</MobileNavigation>
</div>

<style lang="scss">
	#main {
		display: flex;
		align-items: stretch;
		flex-direction: column;
		justify-content: stretch;
		width: 100%;
		height: 100%;
	}

	main {
		flex-grow: 1;
		padding: 20px;
	}

</style>
