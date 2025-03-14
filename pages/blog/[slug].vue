<script setup lang="ts">
const route = useRoute();
const { data: post } = await useAsyncData("post", () =>
  queryCollection("blog").path(route.path).first()
);
const { data: surround } = await useAsyncData(`surround-${route.path}`, () => {
  return queryCollectionItemSurroundings("blog", route.path, {
    fields: ["description"],
  });
});

useSeoMeta({
  title: post.value?.title,
  ogTitle: post.value?.ogTitle,
  ogDescription: post.value?.description,
  description: post.value?.description,
  ogType: 'article',
  ogImage: post.value?.image.src

})
</script>
<template>
  <UContainer v-if="post">
    <UPageHeader :title="post.title" :description="post.description">
      <template #headline>
        <UBadge v-bind="post.badge" variant="subtle" />
        <time :datetime="post.date">{{ formatDate(post.date) }}</time>
      </template>
      <UButton v-for="(auteur, index) in post.auteurs" :key="index" color="white" variant="ghost" target="_blank"
        :to="auteur.to">
        <UAvatar v-bind="auteur.avatar" size="sm" class="mr-2" />
        {{ auteur.name }}
      </UButton>
    </UPageHeader>
    <UPage>
      <UPageBody prose>
        <ContentRenderer :value="post" />
        <!-- Séparateur -->
        <UDivider v-if="surround" class="my-4" />
        <UContentSurround class="mt-8" v-if="surround" :surround="surround" />
      </UPageBody>
      <template v-if="post.body?.toc?.links?.length" #right>
        <UContentToc :links="post.body.toc.links" />
      </template>
    </UPage>
  </UContainer>
</template>

<style scoped></style>
