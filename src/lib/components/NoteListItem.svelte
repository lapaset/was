<script lang="ts">
	import { getHref } from '../../utils/common.svelte'

	export let date: string
	export let title: string
	export let id: string
</script>

<li>
	<a href={getHref(`/note/${id}`)}>{title}</a>
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
		background-color: lavender;
	}

	li span {
		font-size: 0.8em;
	}

	li a {
		color: black;
	}
</style>
