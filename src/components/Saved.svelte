<script>
	export let code;
</script>

<button style="border-left: 8px solid {code};" on:click>
	{code}
</button>

<style>
	button {
		padding: 8px;
		text-transform: uppercase;
	}
	button:hover {
		border-radius: 1px;
	}
</style>
