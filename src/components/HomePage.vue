<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard } from '@ionic/vue'
</script>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-card>
          <ion-card-header>
            <ion-card-title>Total Loans</ion-card-title>
          </ion-card-header>
          <ion-card-content> {{ total }} Tk </ion-card-content>
        </ion-card>

        <ion-list>
          <ion-item v-for="loan in loans" :key="loan.id">
            <ion-label>
              <h2>{{ loan.name }}</h2>
              <p>{{ loan.amount }} Tk</p>
            </ion-label>
          </ion-item>
        </ion-list>

        <ion-item>
          <ion-label position="floating">Name</ion-label>
          <ion-input v-model="name"></ion-input>
        </ion-item>

        <ion-button expand="block">Save</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

.toolbar-title {
  text-align: center !important;
}

#container a {
  text-decoration: none;
}
</style>
