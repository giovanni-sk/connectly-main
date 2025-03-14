<template>
    <UContainer class="py-12">
      <!-- Titre de la page -->
      <UPageHero
        title="Contactez-moi"
        description="Vous avez une question, un projet ou une collaboration en tête ? Envoyez-moi un message et je vous répondrai dès que possible."
      />
  
      <!-- Conteneur principal pour les icônes et le formulaire -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <!-- Section des réseaux sociaux -->
        <div class="flex flex-col items-center md:items-start space-y-6">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Mes réseaux sociaux</h2>
          <p class="text-gray-600 dark:text-gray-400">
            Suivez-moi sur mes réseaux sociaux pour rester connecté.
          </p>
  
          <!-- Icônes des réseaux sociaux -->
          <div class="flex space-x-6">
            <a
              href="https://twitter.com/votrecompte"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <Icon name="mdi:twitter" class="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/votrecompte"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <Icon name="mdi:linkedin" class="w-8 h-8" />
            </a>
            <a
              href="https://github.com/votrecompte"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <Icon name="mdi:github" class="w-8 h-8" />
            </a>
            <a
              href="mailto:votre@email.com"
              class="text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <Icon name="mdi:email" class="w-8 h-8" />
            </a>
          </div>
        </div>
  
        <!-- Formulaire de contact -->
        <div>
          <UCard class="shadow-lg">
            <form @submit.prevent="submitForm">
              <!-- Champ Nom -->
              <UFormGroup label="Nom" name="name" class="mb-6">
                <UInput v-model="form.name" placeholder="Votre nom" required />
              </UFormGroup>
  
              <!-- Champ E-mail -->
              <UFormGroup label="E-mail" name="email" class="mb-6">
                <UInput
                  v-model="form.email"
                  type="email"
                  placeholder="Votre e-mail"
                  required
                />
              </UFormGroup>
  
              <!-- Champ Sujet -->
              <UFormGroup label="Sujet" name="subject" class="mb-6">
                <UInput v-model="form.subject" placeholder="Sujet du message" required />
              </UFormGroup>
  
              <!-- Champ Message -->
              <UFormGroup label="Message" name="message" class="mb-6">
                <UTextarea
                  v-model="form.message"
                  placeholder="Votre message"
                  rows="5"
                  required
                />
              </UFormGroup>
  
              <!-- Bouton Envoyer -->
              <UButton
                type="submit"
                color="primary"
                size="lg"
                class="w-full"
                :loading="isSubmitting"
              >
                Envoyer
              </UButton>
            </form>
          </UCard>
        </div>
      </div>
    </UContainer>
  </template>
  
  <script setup lang="ts">
  // État du formulaire
  const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  // État de soumission
  const isSubmitting = ref(false);
  
  // Fonction pour soumettre le formulaire
  const submitForm = async () => {
    isSubmitting.value = true;
  
    try {
      // Simuler une requête API (à remplacer par votre logique réelle)
      await new Promise((resolve) => setTimeout(resolve, 2000));
  
      // Réinitialiser le formulaire après la soumission
      form.name = '';
      form.email = '';
      form.subject = '';
      form.message = '';
  
      // Afficher un message de succès
      useToast().add({
        title: 'Message envoyé !',
        description: 'Je vous répondrai dès que possible.',
        color: 'green',
      });
    } catch (error) {
      // Afficher un message d'erreur
      useToast().add({
        title: 'Erreur',
        description: 'Une erreur est survenue. Veuillez réessayer.',
        color: 'red',
      });
    } finally {
      isSubmitting.value = false;
    }
  };
  </script>
  
  <style scoped>
  /* Ajoutez des styles personnalisés si nécessaire */
  </style>