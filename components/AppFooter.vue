<script setup lang="ts">
const toast = useToast();
function subscribeToNewsletter(){
  toast.add({
    title: "Inscription réussie",
    description: "Vous êtes maintenant inscrit à notre newsletter",
    timeout: 5000,
  });
};
const links = [
  { label: "Resources",
    children: [
      {
        label: "Nuxt.js",
        to: "https://nuxtjs.org/"
      },
      {
        label: "Vue.js",
        to: "https://vuejs.org/"
      },
      {
        label: "Nuxt Content",
        to: "https://content.nuxtjs.org/"
      },
      {
        label: "Nuxt Strapi",
        to: "https://strapi.nuxtjs.org/"
      },
      {
        label: "Nuxt TypeGraphQL",
        to: "https://typegraphql.com/"
      },
      {
        label: "Nuxt Vuex",
        to: "https://vuex.nuxtjs.org/"
      },
      {
        label: "Nuxt Vite",
        to: "https://vite.nuxtjs.org/"
      },
    ]
   },
 {
   label: "Contribute",
  children:[
    {
      label: "Open an issue",
      to: "https://github.com/connectly-dev/connectly/issues/new"
    },
    {
      label: "Submit a PR",
      to: "https://github.com/connectly-dev/connectly/compare"
    },
    {
      label: "Become a contributor",
      to: "https://github.com/connectly-dev/connectly/blob/main/CONTRIBUTING.md"
    },
    {
      label: "Code of Conduct",
      to: "https://github.com/connectly-dev/connectly/blob/main/CODE_OF_CONDUCT.md"
    }
  ]
 },
 {
  label:"Package",
  children: [
    {
      label: "Nuxt",
      to: "https://github.com/nuxt/nuxt.js"
    },
    {
      label: "Nuxt Content",
      to: "https://github.com/nuxt/content"
    },
    {
      label: "Nuxt Strapi",
      to: "https://github.com/nuxt-community/strapi-module"
    },
    {
      label: "Nuxt TypeGraphQL",
      to: "https://github.com/prisma/graphql-yoga/tree/master/packages/typegraphql"
    },
    {
      label: "Nuxt Vuex",
      to: "https://github.com/nuxt-community/vuex-module"
    },
    {
      label: "Nuxt Vite",
      to: "https://github.com/nuxt/vite"
    },
  ]
 }
]
</script>
<template>
  <div>
    <UDivider icon="simple-icons:nuxtdotjs" />
    <UContainer class="py-8">
      <UFooter>
        <template #top>
          <UFooterColumns :links="links">
         
            <template #right>
              <form @submit.prevent="subscribeToNewsletter">
            <UFormGroup
              label="Restez informé avec Connectly"
              description="Recevez nos actualités et mise à jour directememnt par email"
              required
            >
              <UInput
                type="email"
                placeholder="Entrez votre email"
                icon="simple-icons:mailchimp"
              >
                <template #trailing>
                  <UButton type="submit" size="xs" label="S'inscrire"></UButton>
                </template>
              </UInput>
            </UFormGroup>
          </form>
            </template>
          </UFooterColumns>
        </template>
        <template #left>
          <p>&copy; {{ new Date().getFullYear() }}</p>
          <span>&middot;</span><span>Connect.ly</span>
        </template>
        <template #right>
          <UColorModeButton />
        </template>
      </UFooter>
    </UContainer>
  </div>
</template>

<style scoped></style>
