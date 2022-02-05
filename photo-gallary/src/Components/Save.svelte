<script>
    export let image;
</script>


<a class="material-icons" href={image} download='image1.jpg' >file_download</a>

<style>
   a {
       color: white;
       text-decoration: none;
       margin: 1rem;
       padding: 1rem 3rem 1rem 3rem;
       font-size: 3rem;
       background-color: black;
       border-radius: 5px;
   }

   a:hover {
       background-color: #a9a9a9;
   }
   
   @media screen and (max-width: 1000px) {
       a {
           color: white;
           text-decoration: none;
           margin: 1rem;
           padding: .5rem 1.5rem .5rem 1.5rem;
           font-size: 2rem;
           background-color: black;
           border-radius: 5px;
       }
    
       a:hover {
           background-color: #a9a9a9;
       }
   }

</style>
