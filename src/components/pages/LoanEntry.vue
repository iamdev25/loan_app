<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <div class="flex justify-start items-center pl-4 space-x-6">
          <span class="font-semibold" @click="back()"><ion-icon :icon="arrowBack"></ion-icon></span>
          <ion-title>Add Loan Entry</ion-title>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="p-6 flex flex-col space-y-4">
        <ion-item>
          <ion-input v-model="name" label-placement="stacked" label="Name" placeholder="Jhon doe"></ion-input>
        </ion-item>

        <ion-item>
          <ion-input v-model="amount" type="number" label-placement="stacked" label="Amount (TK)" placeholder="100"></ion-input>
        </ion-item>

        <ion-item>
          <ion-select label-placement="stacked" label="Loan Type" value="">
            <ion-select-option value="">Select</ion-select-option>
            <ion-select-option value="give">Given</ion-select-option>
            <ion-select-option value="refund">Refund</ion-select-option>
          </ion-select>
        </ion-item>

    
        <ion-button expand="block" class="mt-6 flex justify-center items-center space-x-2" size="large" @click="saveEntry">
            <ion-icon class="w-6 h-6" :icon="saveOutline"></ion-icon> 
            <span> Save </span>
        </ion-button>

        <ion-toast
          :is-open="toastOpen"
          message="Saved Successfully!"
          duration="1500"
          color="success"
          @didDismiss="toastOpen = false"
        ></ion-toast>
      </div>
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
  IonInput,
  IonButton,
  IonToast,
  IonSelect,
  IonSelectOption,
} from '@ionic/vue'
import { arrowBack, saveOutline } from 'ionicons/icons'

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

function back(){
     router.push('/loan-info')
}
</script>
