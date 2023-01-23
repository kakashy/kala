<script context="module">
	throw new Error("@migration task: Replace error load function (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3293209)");

	// export function load({ status }) {
	// 	return {
	// 		props: { status }
	// 	};
	// }
</script>

<script>
	export let status;
</script>

<svelte:head>
	<title>{status} / KALA</title>
</svelte:head>

<div>
	{#if status === 404}
		<p>Oops! We don't have that page yet. 😬</p>
	{:else}
		<p>We made an oopsie</p>
	{/if}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: xx-large;
		font-weight: 100;
	}
</style>
