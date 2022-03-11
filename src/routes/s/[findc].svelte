<script context="module">
	/**@type import('@sveltejs/kit').Load*/
	export function load({ params }) {
		const { findc } = params;

		return {
			props: {
				findColor: findc
			}
		};
	}
</script>

<script>
	import { onMount } from 'svelte';
	import Saved from '../../components/Saved.svelte';
	export let findColor;

	let savedCol;

	onMount(async function () {
		savedCol = JSON.parse(localStorage.getItem('savedCol'));
	});
	const saveEm = (col) => {
		const savedCol = JSON.parse(localStorage.getItem('savedCol'));
		col = col.toString();
		let newCol = JSON.stringify([...savedCol, col]);
		localStorage.setItem('savedCol', newCol);
	};
</script>

<svelte:head>
	<title>KALA🎨 - {findColor}</title>
</svelte:head>

<div>
	<input type="text" class="hc" bind:value={findColor} placeholder="Your hex color code" />
	<label>
		Pick a color:
		<input type="color" bind:value={findColor} />
	</label>
	<div class="show" style="background-color: {findColor};">
		<p class="kala-name">{findColor}</p>
	</div>

	<div class="save">
		<form on:submit={saveEm(findColor)}>
			<button type="submit" class="save-btn">Save Current Color</button>
		</form>
	</div>

	<div class="saved">
		{#if savedCol}
			{#each savedCol as col}
				<Saved code={col} on:click={(findColor = col)} />
			{/each}
		{:else}
			<p>You haven't saved any colours yet.</p>
		{/if}
	</div>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.hc {
		padding: 8px;
		margin: 10px auto;
		border-radius: 3px;
		outline: none;
		background-color: #424242;
		color: rgb(214, 212, 212);
		border: 1px solid rgb(0, 195, 255);
	}
	.hc:focus {
		border: 1px solid cyan;
	}
	.show {
		height: 50vh;
		width: 90%;
		border-radius: 4px;
		box-shadow: #00000050 2px 5px 20px;
	}
	.kala-name {
		opacity: 0.5;
		margin: auto auto;
		text-transform: uppercase;
	}
	.save-btn {
		background-color: #009732;
		color: white;
		border-left: 3px solid transparent;
		transition: 0.25s ease-in-out;
	}
	.save-btn:hover {
		background-color: #00c943;
		border-left: 3px solid #01ff56;
		box-shadow: #01ff5650 2px 2px 8px, #01ff5650 -2px -2px 8px;
	}
	.saved {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(122px, 1fr));
	}
</style>
