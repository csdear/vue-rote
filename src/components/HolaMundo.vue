<!--v-base-css from vue vscode snippets quickly scaffolds a component structure.-->
<template>
    <div>
    <h1>HolaMundo child component</h1>
     <p v-text="greetingAlt"> world, v-text directive.</p>
     
     <p> {{ msg }} my friend</p>
     
     <!-- pop from this data obj -->
     <HolaMundo v-text="greetingAlt" />
    
    </div>
</template>

<script>
    export default {
        data() {
            return {
            greetingAlt: 'hiya mundo'
            }
        },
        props: {
            msg: String
        },
    };
</script>

<style scoped>

</style>
