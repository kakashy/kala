<header>
    <p class="tairo">KALA</p>
</header>

<slot />

<footer>
    &copy; {new Date().getYear() + 1900}, Waweru 🥵
</footer>

<style>
    
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
		color: aqua;
        font-family: monospace;
	}
    footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        font-family: monospace;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>