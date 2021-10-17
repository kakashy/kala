<script context="module">
    export const prerender = "true";
</script>

<svelte:head>
	<title>KALA🎨</title>
</svelte:head>

<script>
    $: hex = "hsl(80, 100%, 50%)"
</script>

<div>

	<input type="text" class="hc" bind:value={hex} placeholder="Your hex color code" />

    <div class="show" style="background-color: {hex};"></div>
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
		border-radius:4px;
		box-shadow: #000000 2px 5px 10px;
    }
</style>
