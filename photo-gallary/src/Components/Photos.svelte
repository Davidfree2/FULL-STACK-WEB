<script>
    import BackButton from './BackButton.svelte'
    import Save from './Save.svelte'
    import NextButton from './NextButton.svelte'
    import { onMount } from 'svelte'

    let photoData = [];

    let photo;

    let count;


    const forwardPic = ()=>{
        if (count == 51) {
            count = 51;
            photo = photoData[count].url
            alert('at the end');
        } else {
            count += 1;
            photo = photoData[count].url
        }
    }

    const backPic = ()=>{
        if (count == 0) {
            count = 0;
            photo = photoData[count].url
            alert('at the start');
        } else {
            count -= 1;
            photo = photoData[count].url
        }
    }


    onMount(async()=>{
        count = 0;
        const fetchData = await fetch('http://192.168.121.2:8080/getData');
        const data = await fetchData.json();
        photoData = await data;
        photo = photoData[count].url;
        console.log(data);
        console.log(photo);
    })

</script>

<div class='mainContainer'>
    <div class='photoContainer'>
        <img src={photo} />
    </div>
    <div class='buttonContainer'>
        <BackButton backwardProp={backPic} />
        <Save image={photo} />
        <NextButton forwardProp={forwardPic} />
    </div>
</div>

<style>
    .mainContainer {
        width: 100vw;
        height: 100vh;
    }

    img {
        border-radius: 10px;
        margin-top: 3rem;
        height: 90%;
        width: 100%;
    }

    .photoContainer {
        margin: auto;
        width: 70%;
        height: 85%;
    }

    .buttonContainer {
        display: flex;
        justify-content: space-between;
        width: 70%;
        margin: auto;
    }

    @media screen and (max-width: 1000px) {

        .mainContainer {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
        }
    
        img {
            border-radius: 10px;
            margin-top: 3rem;
            height: 85%;
            width: 100%;
        }
    
        .photoContainer {
            margin: auto;
            width: 80%;
            height: 50%;
        }
    
        .buttonContainer {
            display: flex;
            justify-content: space-around;
            width: 100%;
            padding: 1rem;
            margin: auto;
        }

    }

</style>
