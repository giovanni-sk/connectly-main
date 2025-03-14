<script setup lang="ts">

const navigation = inject<Ref<[]>>('navigation', ref([]));
const links = [{
  label: 'Acceuil',
  icon: 'simple-icons:homeadvisor',
  to: '/'
}, {
  label: 'A propos',
  icon: 'simple-icons:mdbook',
  to: '/about'
},
{
  label: 'Projets',
  icon: 'simple-icons:mdbook',
  to: '/projet'
},
{
  label: 'Contact',
  icon: 'simple-icons:mdbook',
  to: '/contact'
}]
</script>

<template>
  <UHeader :links="links">
    <template #left>
      <NuxtLink to="/" aria-label="Aller à la page d'acceuil">
        <UIcon name="simple-icons:devdotto" class="text-7xl shrink-0" />
      </NuxtLink>
    </template>
    <template #pannel>
      <UNavigationTree :links="navigation" />
    </template>
    <template #right>
     
        <UColorModeSelect class="w-28" />
     
    </template>
  </UHeader>
</template>
