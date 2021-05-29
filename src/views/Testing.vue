<template>
    <div>
        <h1>Testing Main</h1>
        <basicTableTesting />
    </div>
</template>

<script>
    export default {
        components: {
            'basicTableTesting': require('@/components/testing/BasicTableTest.vue').default,
        },
    }
</script>

<style scoped>

</style>