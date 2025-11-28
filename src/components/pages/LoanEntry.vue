<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Add Loan Entry</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="floating">Person Name</ion-label>
        <ion-input v-model="name"></ion-input>
      </ion-item>

      <ion-item class="mt-3">
        <ion-label position="floating">Amount (Tk)</ion-label>
        <ion-input type="number" v-model="amount"></ion-input>
      </ion-item>

      <ion-item class="mt-3">
        <ion-label>Type</ion-label>
        <ion-select v-model="type">
          <ion-select-option value="given">I Gave</ion-select-option>
          <ion-select-option value="received">I Received</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-button expand="block" class="mt-5" @click="saveEntry"> Save </ion-button>

      <ion-toast
        :is-open="toastOpen"
        message="Saved Successfully!"
        duration="1500"
        color="success"
        @didDismiss="toastOpen = false"
      ></ion-toast>
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
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonToast,
  IonSelect,
  IonSelectOption,
} from '@ionic/vue'

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const amount = ref('')
const type = ref('given')

const toastOpen = ref(false)

function saveEntry() {
  // ---- Replace this with SQLite insert later ----
  console.log('Saved:', { name: name.value, amount: amount.value, type: type.value })
  // ------------------------------------------------

  toastOpen.value = true

  setTimeout(() => {
    router.push('/loan-info')
  }, 1000)
}
</script>
