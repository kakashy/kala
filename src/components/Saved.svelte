<script>
	export let code;
</script>

<a href="/s/{encodeURIComponent(code)}">
	<button style="border-left: 8px solid {code};" on:click>
		{code}
	</button>
</a>

<style>
	a {
		width: 100%;
	}
	button {
		width: 80%;
		padding: 8px;
		text-transform: uppercase;
	}
	button:hover {
		border-radius: 1px;
	}
</style>
