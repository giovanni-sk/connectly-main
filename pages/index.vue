<script setup lang="ts">
const { data: homepage } = await useAsyncData('home', () => queryCollection('homepage').first());

useSeoMeta({
  title: "Giovanni SOKENOU - Développeur Full Stack & Enthousiaste d'IA",
  ogTitle: "Giovanni SOKENOU - Portfolio",
  ogType: "website",
  description:
    "Bienvenue sur le portfolio de Giovanni SOKENOU, un développeur full stack spécialisé en développement web et en intelligence artificielle. Découvrez mes compétences et mes projets.",
  ogDescription:
    "Bienvenue sur le portfolio de Giovanni SOKENOU, un développeur full stack spécialisé en développement web et en intelligence artificielle. Découvrez mes compétences et mes projets.",
});
</script>

<template>
  <div class="p-2 bg-white dark:bg-gray-900">
    <UContainer v-if="homepage">
      <!-- Hero Section -->
      <UPageHero :title="homepage.hero.title" :description="homepage.hero.description" :links="homepage.hero.links"
        class="animate-fade-in">
        <NuxtImg :src="homepage.hero.image" alt="Hero Image" class="rounded-lg animate-scale-in" />
      </UPageHero>

      <!-- Compétences Section -->
      <ULandingSection :title="homepage.sections[0].title" :description="homepage.sections[0].description"
        class="rounded-lg  animate-fade-in">
        <!-- Ajoutez une classe personnalisée pour le titre -->
        <template #title>
          <h2 class="text-green-600 dark:text-green-400 text-5xl font-bold">
            {{ homepage.sections[0].title }}
          </h2>
        </template>
        <template #description>
          <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            {{ homepage.sections[0].description }}
          </p>
        </template>

        <UPageGrid class="mt-8">
          <ULandingCard v-for="(item, index) in homepage.sections[0].features" :key="index" :title="item.name"
            :description="item.description" class="hover:scale-105 transition-transform duration-300">
            <!-- Utilisation de UIcon pour afficher l'icône -->
            <template #icon>
              <div
                class="bg-green-50 dark:bg-green-900 rounded-full w-10 h-10 flex items-center justify-center animate-bounce">
                <UIcon :name="item.icon" class="text-green-600 dark:text-green-400 w-6 h-6" />
              </div>
            </template>
          </ULandingCard>
        </UPageGrid>
      </ULandingSection>
    </UContainer>
  </div>
</template>

<style scoped>
/* Animations */
.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

.animate-scale-in {
  animation: scaleIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>