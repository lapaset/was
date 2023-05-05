<script lang="ts">
	export let date: string
	export let title: string
	export let id: string
</script>

<li>
	<a href={`/was/note/${id}`}>{title}</a>
	<span>{date}</span>
</li>

<style>
	li {
		list-style: none;
		padding: 16px 8px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	li:nth-child(odd) {
		background-color: aliceblue;
	}

	li span {
		font-size: 0.8em;
	}

	li a {
		color: black;
	}
</style>
