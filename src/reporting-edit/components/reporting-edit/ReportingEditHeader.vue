<script setup lang="ts">



</script>

<template>
  <header>header <button @click="$emit('save')">save</button></header>
</template>

<style scoped>
header {
   height: 60px;
  background-color: #363d3f;
  font-weight: 600;
  font-size: 20px;
  color: white;
  line-height: 60px;
}
</style>
