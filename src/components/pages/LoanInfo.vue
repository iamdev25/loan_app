<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <div class="flex justify-start items-center pl-4 space-x-6">
          <span class="font-semibold" @click="back()"><ion-icon :icon="arrowBack"></ion-icon></span>
          <ion-title>Loan Summary</ion-title>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content color="light">
      <div class="w-full flex justify-center mt-6 bg-none">
        <div
          class="w-40 h-40 bg-white rounded-full shadow-lg flex flex-col items-center justify-center border border-gray-200"
        >
          <p class="text-gray-500 text-sm">Balance</p>
          <p class="text-3xl font-bold text-gray-800 mt-1">$5600</p>
        </div>
      </div>
      <ion-segment v-model="activeTab" class="mt-3">
        <ion-segment-button value="given">
          <ion-label>I Gave</ion-label>
        </ion-segment-button>
        <ion-segment-button value="received">
          <ion-label>I Received</ion-label>
        </ion-segment-button>
      </ion-segment>

      <ion-list :inset="true">
        <ion-item v-for="item in filteredItems" :key="item.id">
          <ion-label>
            <div class="flex justify-between">
              <strong>{{ item.name }}</strong>
              <p class="text-gray-600">{{ item.amount }} Tk</p>
            </div>
          </ion-label>
        </ion-item>
      </ion-list>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="goAddEntry">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonList,
  IonItem,
  IonFab,
  IonFabButton,
  IonIcon,
} from '@ionic/vue'

import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { arrowBack, add } from 'ionicons/icons'

const router = useRouter()

const activeTab = ref('given')

// Dummy Data (replace with DB data)
const items = ref([
  { id: 1, type: 'given', name: 'Rahim', amount: 200 },
  { id: 2, type: 'received', name: 'Karim', amount: 150 },
  { id: 3, type: 'given', name: 'Salam', amount: 300 },
])

const filteredItems = computed(() => items.value.filter((i) => i.type === activeTab.value))

const balance = computed(() => {
  let given = items.value.filter((i) => i.type === 'given').reduce((a, b) => a + b.amount, 0)
  let received = items.value.filter((i) => i.type === 'received').reduce((a, b) => a + b.amount, 0)
  return given - received
})

function goAddEntry() {
  router.push('/loan-entry')
}

function back(){
    router.push('/loan-entry');
}
</script>
