<script lang="ts" context="module">
	import { dev } from '$app/environment'

	export const getHref = (url: string) => (dev ? url : `/was${url}`)
</script>
