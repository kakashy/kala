<script context="module">
	export function load({ status }) {
		return {
			props: { status }
		};
	}
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
