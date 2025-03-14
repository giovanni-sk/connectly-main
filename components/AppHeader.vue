<script setup lang="ts">

const navigation = inject<Ref<[]>>('navigation', ref([]));
const links = [{
  label: 'Home',
  icon: 'simple-icons:homeadvisor',
  to: '/'
}, {
  label: 'Blogs',
  icon: 'simple-icons:mdbook',
  to: '/blog'
}]
</script>

<template>
  <UHeader :links="links">
    <template #left>
      <NuxtLink to="/" aria-label="Aller à la page d'acceuil">
        <UIcon name="simple-icons:devdotto" class="text-7xl shrink-0"/>
      </NuxtLink>
    </template>
    <template #pannel>
      <UNavigationTree :links="navigation" />
    </template>
    <template #right>
      <UColorModeButton />
    </template>
  </UHeader>
</template>

