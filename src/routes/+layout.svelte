<header>
	<a href="/">
		<h1>IAAP WAS Learning Diary</h1>
	</a>
</header>
<main>
	<slot />
</main>

<style>
	main {
		margin: 60px 16px;
		max-width: 700px;
	}

	:global(body) {
		background: white;
	}

	:global(h2, h3) {
		color: black;
		font-family: 'Arial Black', sans-serif;
		font-weight: 900;
		letter-spacing: 0.05em;
	}

	:global(a, p, span, li) {
		font-family: 'Arial', sans-serif;
		letter-spacing: 0.02em;
		line-height: 1.5em;
	}

	:global(li) {
		padding-top: 16px;
	}

	:global(.date) {
		font-size: 0.8em;
		font-weight: 900;
		color: black;
		background: aliceblue;
		margin-bottom: 0;
		width: 60px;
		text-align: center;
		padding: 4px 8px;
		border-radius: 12px;
	}

	header {
		display: block;
		position: fixed;
		background: white;
		border-bottom: 1px solid black;
		top: 0;
		left: 0;
		width: 100%;
		height: 36px;
	}

	h1 {
		margin: 0;
		font-size: 1em;
		color: black;
		font-family: 'Arial Black', sans-serif;
		font-weight: 900;
		letter-spacing: 0.05em;
		padding: 16px 16px 16px 24px;
	}

	a {
		text-decoration: none;
	}

	a:focus-visible {
		background: white;
		font-size: 1.1em;
		outline-offset: -8px;
		transition: font-size 1s ease-in-out;
	}

	@media (prefers-reduced-motion) {
		a:focus-visible {
			font-size: 1em;
		}
	}

	@media screen and (max-width: 600px) {
		main {
			margin: 60px 8px;
		}
	}
</style>
