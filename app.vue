<script lang="ts" setup>
const colorMode = useColorMode();
const color = computed(() => colorMode.value === 'dark' ? '#111827' : 'white');
const { data: navigation } = await useAsyncData("navigation", () => queryCollectionNavigation("blog"));
provide('navigation', navigation)
useHead({
  title: 'Connectly blog',
  meta: [
    {
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    },
    {
      name: 'theme-color', content: 'white'
    }
  ],
  link: [
    { rel: 'icon', href: '/favicon.png', type: 'image/png' },

  ],
  htmlAttrs: { lang: 'fr' },
})
useSeoMeta({
  ogType: 'website',
  ogImage: 'https://connect-ly.vercel.app/app-screenshot.png',
  twitterImage: 'https://connect-ly.vercel.app/app-screenshot.png',
})

</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
  </div>
</template>
