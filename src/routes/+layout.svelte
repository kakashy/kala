<script>
	import '../app.postcss';
</script>

<header class="bg-black/30 sticky top-0 left-0 backdrop-blur">
	<a href="/">
		<p class="tairo">KALA</p>
	</a>
</header>

<main>
	<slot />
</main>

<footer class="bg-white/10 backdrop-blur p-2 sticky bottom-0">
	&#xa9; {new Date().getYear() + 1900}, Waweru &#x1f975;
</footer>

<style>
	main {
		padding: 15px 20px;
	}
	header {
		width: 100%;
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.tairo {
		font-size: x-large;
		color: rgb(109, 250, 250);
		text-shadow: rgba(0, 255, 255, 0.514) 1px 1px 9px, #00ffff50 -1px -1px 8px;
	}
	footer {
		position: fixed;
		bottom: 5px;
		width: 100%;
		font-family: monospace;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
