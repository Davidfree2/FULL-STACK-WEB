<script>
    import Quote from './Components/Quote.svelte'
    import { onMount } from 'svelte'

    let funnyQuote = {
        quote: null,
        likes: null,
    };

    onMount(async () => {
        const headers = {
            method: 'GET',
            headers: {
                'accept': 'application/json',
            }
        }

		const fetchData = await fetch('https://icanhazdadjoke.com', headers);
		const data  = await fetchData.json();
        funnyQuote.quote  = await data.joke;
	});

</script>

{#if funnyQuote.quote}
<main>
    <Quote quote={funnyQuote.quote}/>
</main>
{:else}
<main>
    <Quote quote='Loading......'/>
</main>
{/if}

<style>
</style>
