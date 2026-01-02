<template>
  <div class="layout bg-bg-primary text-white">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 80px; /* Compense la hauteur du header fixe */
}

main {
  flex: 1;
}
</style>

