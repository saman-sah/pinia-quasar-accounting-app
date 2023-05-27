<template>
    <div>
        <h4>Test component</h4>
        <h4>{{ saman }}</h4>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const saman=ref('saman')
</script>

<style>

</style>