<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import Saved from '../components/Saved.svelte';

	let savedCol;

	onMount(async function () {
		savedCol =
			JSON.parse(localStorage.getItem('savedCol')) ??
			localStorage.setItem('savedCol', JSON.stringify([hex]));
	});
	const saveEm = (col) => {
		const savedCol = JSON.parse(localStorage.getItem('savedCol'));
		col = col.toString();
		let newCol = JSON.stringify([...savedCol, col]);
		localStorage.setItem('savedCol', newCol);
	};
	var sampleCol = [
		'cyan',
		'darkcyan',
		'red',
		'fuchsia',
		'teal',
		'orange',
		'brown',
		'navajowhite',
		'indigo',
		'#111110',
		'#ff304f',
		'#12FF12',
		'#FEFA10',
		'#E810C5'
	];
	$: hex = sampleCol.sort(() => {
		return 0.5 - Math.random();
	})[0];
</script>

<svelte:head>
	<title>KALA🎨</title>
</svelte:head>

<div>
	<div class="color-inputs">
		<label>
			Type in a colour value:
			<input type="text" class="hc" bind:value={hex} placeholder="Your hex color code" />
		</label>
		<label>
			Pick a color:
			<input type="color" bind:value={hex} />
		</label>
	</div>

	<div class="show" style="background-color: {hex};">
		<p class="kala-name">{hex}</p>
	</div>

	<div class="save">
		<form on:submit={saveEm(hex)}>
			<button type="submit" class="save-btn">Save Current Color</button>
		</form>
	</div>

	<div class="saved">
		{#if savedCol}
			{#each savedCol as col}
				<Saved code={col} on:click={(hex = col)} />
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
	.color-inputs {
		padding: 5px;
	}
	.show {
		height: 50vh;
		width: 90%;
		border-radius: 4px;
		box-shadow: #000000 2px 5px 10px;
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
