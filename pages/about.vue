<template>
  <UContainer class="space-y-12 py-12">
    <!-- Hero Section -->
    <UPageHero :title="about.title" :description="about.description"/>

    <!-- Parcours Académique -->
    <ULandingSection
      v-for="section in about.sections"
      :key="section.id"
      :title="section.title"
      
      class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
    >
      <UPageGrid class="mt-8">
        <ULandingCard
          v-for="item in section.items"
          :key="item.title"
          :title="item.title"
          :description="item.description"
          class="hover:scale-105 transition-transform duration-300"
        >
          
        </ULandingCard>
      </UPageGrid>
    </ULandingSection>

    <!-- Compétences Techniques -->
    <ULandingSection title="Compétences Techniques" class="bg-white dark:bg-gray-900 p-6 rounded-lg">
      <UPageGrid class="mt-8">
        <ULandingCard
          v-for="skill in about.skills"
          :key="skill.name"
          :title="skill.name"
          class="hover:scale-105 transition-transform duration-300"
        >
          <template #icon>
            <UIcon :name="skill.icon" class="w-8 h-8 text-primary" />
          </template>
        </ULandingCard>
      </UPageGrid>
    </ULandingSection>
  </UContainer>
</template>

<script setup lang="ts">
const { data: about } = await useAsyncData('about', () => queryCollection('about').first());
</script>