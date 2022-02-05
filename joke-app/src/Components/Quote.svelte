<script>
    export let quote = 'LOADING...';

    let heart;
    let refresh;

    const rotate = async()=>{
        refresh.style.transform = await 'rotate(360deg)';
        refresh.style.transition = await 'transform 0.5s ease';
        window.setTimeout(function(){location.reload()},800)
    }

    const enlargeOrShrink = async()=>{
        if (heart.style.transform == 'scale(1.4)'){
            heart.style.transform = await 'scale(1)';
            heart.style.transition = await 'transform 0.25s ease';
            heart.style.color = await 'black';
        } else {
            heart.style.transform = await 'scale(1.4)';
            heart.style.transition = await 'transform 0.25s ease';
            heart.style.color = await 'red';
        }
    }


</script>

<div class='container'>
    <div class='quoteContainer'>
        <h2>Terrible joke of the day-</h2>
        <h1>{quote}</h1>
        <div class='bottom'>
            <i class="material-icons" on:click={enlargeOrShrink} bind:this={heart}>favorite</i>
            <i class="material-icons" bind:this={refresh} on:click={rotate}>refresh</i>
        </div>
    </div>
</div>

<style>
    .container {
        margin: auto;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(to bottom right, orange, red);

    }

    .quoteContainer {
        width: 70%;
        border: solid black 1px;
        border-radius: 10px;
        padding: 1rem;
        background-color: white;
    }

    .bottom {
        display: flex;
        justify-content: right;
        padding: 1rem;
        margin-right: 3rem;
    }

    i {
        font-size: 3rem;
        margin-left: 2rem;
    }

    i:hover {
        color: red;
    }

    h2 {
        margin-top: 1rem;
        margin-bottom: 2rem;
        font-size: 3rem;
        font-weight: lighter;
    }

    h1 {
        margin-left: 5rem;
        margin-bottom: 1rem;
        font-size: 3rem;
    }

    @media screen and (max-width: 1000px) {
        .container {
            margin: auto;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: linear-gradient(to bottom right, orange, red);
    
        }
    
        .quoteContainer {
            width: 95%;
            border: solid black 1px;
            border-radius: 10px;
            padding: 1rem;
            background-color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    
        .bottom {
            display: flex;
            justify-content: center;
            padding: 1rem;
            margin-right: 3rem;
        }
    
        i {
            font-size: 3rem;
            margin-left: 2rem;
        }
    
        i:hover {
            color: red;
        }
    
        h2 {
            margin-top: 1rem;
            margin-bottom: 2rem;
            font-size: 2rem;
            font-weight: lighter;
            text-align: center;
        }
    
        h1 {
            margin-left: 0rem;
            margin-bottom: 1rem;
            font-size: 1.7rem;
            text-align: center;
        }
        
    }

</style>
