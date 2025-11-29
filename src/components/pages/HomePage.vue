<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar class="gradient-header">
        <ion-title class="text-center font-semibold">Loan Management System</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="min-h-[80vh] flex flex-col items-center justify-center px-6">
        <!-- Logo/Icon Section -->
        <div class="mb-8 text-center">
          <h1 class="text-4xl font-bold text-gray-800 mb-2">Loan Manager</h1>
          <p class="text-gray-600 text-sm">Streamline your loan management process</p>
        </div>

        <!-- Main Action Button -->
        <div class="mt-8">
          <ion-button @click="goStart" class="primary-action-btn" shape="round" size="large">
            <div class="flex items-center justify-center space-x-3">
              <span class="font-semibold text-sm"> Get Started </span>
              <span><ion-icon :icon="arrowForwardCircle"></ion-icon></span>
            </div>
          </ion-button>
        </div>

        <!-- Additional Info -->
        <div class="mt-12 text-center max-w-md">
          <p class="text-gray-500 text-sm">
            Efficiently manage loan applications, track payments, and monitor financial health in
            one centralized platform.
          </p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButton } from '@ionic/vue'
import {  arrowForwardCircle } from 'ionicons/icons'
import { useRouter } from 'vue-router'

const router = useRouter()

function goStart() {
  router.push('/loan-info')
}
</script>

<style scoped>
.gradient-header {
  --background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --color: white;
}

.primary-action-btn {
  --background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --background-hover: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  --background-activated: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
  --box-shadow: 0 4px 15px 0 rgba(102, 126, 234, 0.3);
  --border-radius: 50px;
  width: 200px;
  height: 60px;
}

.primary-action-btn:hover {
  --box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.4);
  transform: translateY(-2px);
  transition: all 0.3s ease;
}
</style>
