<script setup lang="ts">
const links = [{
  label: 'Acceuil',
  to: '/'
}, {
  label: 'A propos',
  to: '/about'
}, {
  label: 'Projet',
  to: '/projet'
}, {
  label: 'Contact',
  to: '/contact'
}]
</script>

<template>
   <UDivider icon="simple-icons:nuxtdotjs" />
  <UFooter :links="links">
    <template #left>
    Giovanni SOKENOU &copy; {{ new Date().getFullYear() }}
    </template>

    <template #right>
      <UButton icon="i-simple-icons-x" color="gray" variant="ghost" to="https://x.com/nuxt_js" target="_blank" />
      <UButton icon="i-simple-icons-discord" color="gray" variant="ghost" to="https://discord.com/invite/ps2h6QT" target="_blank" />
      <UButton icon="i-simple-icons-github" color="gray" variant="ghost" to="https://github.com/nuxt/nuxt" target="_blank" />
      
    </template>
  </UFooter>
</template>

