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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonFab,
  IonFabButton,
  IonIcon,
} from '@ionic/vue'

import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { add } from 'ionicons/icons'

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
</script>
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Loan Summary</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-segment v-model="activeTab" class="mt-3">
        <ion-segment-button value="given">
          <ion-label>I Gave</ion-label>
        </ion-segment-button>
        <ion-segment-button value="received">
          <ion-label>I Received</ion-label>
        </ion-segment-button>
      </ion-segment>

      <div class="ion-padding">
        <ion-card>
          <ion-card-header>
            <ion-card-title>Current Balance</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <h2 class="text-2xl font-bold">{{ balance }} Tk</h2>
          </ion-card-content>
        </ion-card>
      </div>

      <div class="ion-padding">
        <h3 class="font-bold mb-2">
          {{ activeTab === 'given' ? 'Money I Gave:' : 'Money I Received:' }}
        </h3>

        <ion-list>
          <ion-item v-for="item in filteredItems" :key="item.id">
            <ion-label>
              <strong>{{ item.name }}</strong>
              <p>{{ item.amount }} Tk</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </div>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="goAddEntry">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>
