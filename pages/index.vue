<script setup lang="ts">
const { data: homepage } = await useAsyncData('home', () => queryCollection('homepage').first());
useSeoMeta({
  title: "Connectly Blog - Accueil",
  ogTitle: "Connectly - Accueil",
  ogType: "website",
  description:
    "Connectly Blog est un blog pour découvrir les nouvelles technologies et les dernières tendances dans le domaine du développement web et mobile.",
  ogDescription:
    "Connectly Blog est un blog pour découvrir les nouvelles technologies et les dernières tendances dans le domaine du développement web et mobile.",
});
</script>
<template>
  <div class="p-5">
    <UContainer v-if="homepage">
      <UPageHero :title="homepage.hero.title" :description="homepage.description" :links="homepage.hero.links">
        <NuxtImg :src="homepage.hero.image" alt="Hero Image" />
      </UPageHero>
      <!-- Sections -->
      <ULandingSection v-for="(section, index) in homepage.sections" :key="index" :title="section.title"
        :description="section.description" :features="section.features">
        <NuxtImg :src="section.image" />
        <!-- <ImagePlaceholder /> -->
      </ULandingSection>
      <!-- Features -->
      <ULandingSection v-if="homepage.features" :title="homepage.features.title"
        :description="homepage.features.description">
        <UPageGrid>
          <ULandingCard v-for="(item, index) in homepage.features.items" :key="index" :title="item.title"
            :description="item.description" :icon="item.icon" />
        </UPageGrid>
      </ULandingSection>
      <ULandingCTA
      v-bind="homepage.cta" />
      
    </UContainer>

  </div>
</template>


<style scoped></style>