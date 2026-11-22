<script>
	import {views, viewState} from "../../viewManager.svelte";
</script>

<nav>
	{#each Object.values(views).filter((view) => view.showInNavigation) as view}
		<button aria-label="{view.title}" onclick={() => (viewState.current = view)}>
			<i class="{viewState.current === view ? 'selected' : ''} ph-{view.icon} ph-fill"></i>
		</button>
	{/each}
</nav>

<style lang="scss">
	nav {
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-evenly;
		height: 55px;
		padding: 0 0 25px 0;
		background-color: var(--theme-accent-first);

		button {
			font-size: 30px;
			padding: 5px;
			color: var(--theme-accent-third);
			border: none;
			background-color: transparent;

			i {
				font-size: 28px;
				transition: color 0.2s ease-out;

				&.selected {
					color: var(--theme-accent-fourth);
				}
			}
		}
	}
</style>
