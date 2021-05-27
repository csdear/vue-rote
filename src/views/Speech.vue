<template>
    <div class="speechLand container">
        <h1>Speech</h1>
    <div class="text">
        <p>test</p>
        <!-- text gets injected here -->
   <!-- abs position to bottom right, a triagle --> 
   <svg class="corner" viewBox="0 0 65 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35 3.5L65 6.5V62L0 0L35 3.5Z" fill="white"/>
   </svg>
    </div>

    </div>
</template>

<script>
    export default {
       data() {
          return {
             textLines: [
                { string: "hey", speed: speeds.normal}, 
                { string: "Whats up", speed: speeds.normal},
                { string: "how are you today?", speed: speeds.fast},
             ],
             speeds: {
               pause: 500,
               slow: 120,
               normal: 70,
               fast: 40
               }
          }
       },
        
    }
</script>

<style scoped>

.text span {
   opacity: 0;
}
.text span.revealed {
   opacity: 1;
}
.text span.green {
   color: #27ae60;
}
.text span.red {
   color: #ff0000;
}


/* Demo styles */
.speechLand {
   background: #3498db;
   padding: 9em;
   font-family: 'Sora', monospace;
}
.text {
   font-size: 6vw;
   word-spacing: 0.2em;
   margin: 0 auto;
   background: #fff;
   padding: 1em;
   border-bottom: 1vw solid #0e6dad;
   position:relative;
   line-height: 1.2em;
}
.corner {
   position:absolute;
   width: 10vw;
   right:2vw;
   bottom:0;
   transform: translateY(80%); 
}

</style>