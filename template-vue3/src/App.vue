<script setup>
import { ref } from 'vue'
import { useRegisterSW } from 'virtual:pwa-register/vue'

import ReloadPrompt from '@/components/ReloadPrompt.vue'

const serviceTitle = 'Service'
const serviceDescription = 'Description du service'
const logoText = ['Ministère', 'de l’intérieur']

const quickLinks = [
  {
    label: 'Home',
    path: '/',
    icon: 'ri-home-4-line',
    iconAttrs: { color: 'var(--red-marianne-425-625)' },
  },
  {
    label: 'À propos',
    path: '/a-propos',
    class: 'fr-fi-user-line',
  },
]
const searchQuery = ref('')

const {
  offlineReady,
  needRefresh,
  updateServiceWorker,
} = useRegisterSW()

const close = async () => {
  offlineReady.value = false
  needRefresh.value = false
}

const currentLanguage = ref('fr')
const languages = [
  {
    codeIso: 'fr',
    label: 'Français',
  },
  {
    codeIso: 'en',
    label: 'English',
  },
  {
    codeIso: 'de',
    label: 'Deutsch',
  },
  {
    codeIso: 'nl',
    label: 'Dutch',
  },
]
function changeLanguage (languageObject) {
  currentLanguage.value = languageObject.codeIso
}
</script>

<template>
  <DsfrHeader
    v-model="searchQuery"
    :service-title="serviceTitle"
    :service-description="serviceDescription"
    :logo-text="logoText"
    :quick-links="quickLinks"
    show-search
  />
  <div class="fr-container">
    <router-view />
    <VIcon name="ri-flag-line" />
    <DsfrLanguageSelector
      :languages="languages"
      :current-language="currentLanguage"
      @select="changeLanguage($event)"
    />
  </div>
  <ReloadPrompt
    :offline-ready="offlineReady"
    :need-refresh="needRefresh"
    @close="close()"
    @update-service-worker="updateServiceWorker()"
  />
</template>
