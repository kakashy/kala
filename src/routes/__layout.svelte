<script>
	import '../app.css';
</script>

<header>
	<a href="/">
		<p class="tairo">KALA</p>
	</a>
</header>

<main>
	<slot />
</main>

<footer>
	&copy; {new Date().getYear() + 1900}, Waweru 🥵
</footer>

<style>
	main {
		padding: 15px 20px;
	}
	header {
		width: 100%;
		height: 70px;
		background-color: black;
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
