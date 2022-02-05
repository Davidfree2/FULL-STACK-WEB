<script>
    export let forwardProp;
</script>


<i class="material-icons" on:click={forwardProp}>arrow_forward</i>

<style>
   i {
       margin: 1rem;
       padding: 1rem;
       font-size: 3rem;
       background-color: black;
       border-radius: 5px;
       color: white;
   }

   i:hover {
       background-color: #a9a9a9;
   }

   @media screen and (max-width: 1000px) {

   i {
       margin: 1rem;
       padding: .5rem;
       font-size: 1.5rem;
       background-color: black;
       border-radius: 5px;
       color: white;
   }

   i:hover {
       background-color: #a9a9a9;
   }

}

</style>
