<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar class="gradient-header">
        <ion-title class="font-semibold">Loan Management System</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="min-h-screen flex flex-col items-center justify-center px-6">
        <!-- Logo/Icon Section -->
        <div class="mb-8 text-center">
          <div
            class="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
          </div>
          <h1 class="text-4xl font-bold text-gray-800 mb-2">Loan Manager</h1>
          <p class="text-gray-600 text-lg">Streamline your loan management process</p>
        </div>

        <!-- Main Action Button -->
        <div class="mt-8">
          <ion-button @click="goStart" class="primary-action-btn" shape="round" size="large">
            <div class="flex items-center justify-center space-x-3">
              <span class="font-semibold text-xl">Get Started</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
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
