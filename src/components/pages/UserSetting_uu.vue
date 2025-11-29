<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons>
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>সেটিংস</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content color="light">
      <!-- Premium Banner -->
      <ion-card color="secondary" class="premium-banner">
        <ion-card-content>
          <div class="banner-content">
            <div class="banner-text">
              <div class="banner-icon">🎯</div>
              <div>
                <p class="banner-title">আয় বায়</p>
                <p class="banner-subtitle">সাথ ৫০০ টাকায়</p>
              </div>
            </div>
            <button class="whatsapp-btn">WhatsApp</button>
          </div>
        </ion-card-content>
      </ion-card>

      <!-- Premium Section -->
      <div class="settings-section">
        <div class="section-header">
          <ion-icon :icon="calendarOutline" class="section-icon"></ion-icon>
          <span class="section-date">নভেম্বর, ২০২৫</span>
        </div>

        <p class="section-subtitle">আয় বায়ের মাসিক রিপোর্ট</p>

        <ion-button expand="block" color="primary" class="download-btn">
          <ion-icon :icon="downloadOutline"></ion-icon>
          ডাউনলোড
        </ion-button>
      </div>

      <!-- Settings List -->
      <ion-list :inset="true" class="settings-list">
        <!-- Premium Features -->
        <ion-item button @click="goToSection('premium')" class="settings-item">
          <ion-icon :icon="star" class="premium-icon"></ion-icon>
          <ion-label>
            <div class="item-title">প্রিমিয়াম ফিচার</div>
          </ion-label>
          <ion-icon :icon="chevronForward" color="medium"></ion-icon>
        </ion-item>

        <!-- Email Audit -->
        <ion-item button @click="goToSection('email')" class="settings-item">
          <ion-icon :icon="checkmarkCircle" class="verified-icon"></ion-icon>
          <ion-label>
            <div class="item-title">ইমেইল অডিট</div>
            <p class="item-subtitle">julfikarali.282@gmail.com</p>
          </ion-label>
          <ion-icon :icon="copyOutline" @click.stop="copyEmail" class="copy-icon"></ion-icon>
        </ion-item>

        <!-- Referral Code -->
        <ion-item button @click="goToSection('referral')" class="settings-item">
          <ion-icon :icon="code" class="referral-icon"></ion-icon>
          <ion-label>
            <div class="item-title">রেফার কোড</div>
            <p class="item-subtitle">Loading...</p>
          </ion-label>
          <ion-icon :icon="copyOutline" @click.stop="copyReferralCode" class="copy-icon"></ion-icon>
        </ion-item>

        <!-- Community Join -->
        <ion-item button @click="goToSection('community')" class="settings-item">
          <ion-icon :icon="logoFacebook" class="community-icon"></ion-icon>
          <ion-label>
            <div class="item-title">কমিউনিটি জয়েন করুন</div>
          </ion-label>
          <ion-icon :icon="chevronForward" color="medium"></ion-icon>
        </ion-item>

        <!-- Language -->
        <ion-item button @click="showLanguagePicker" class="settings-item">
          <ion-icon :icon="globe" class="language-icon"></ion-icon>
          <ion-label>
            <div class="item-title">ভাষা (language)</div>
          </ion-label>
          <ion-icon :icon="chevronForward" color="medium"></ion-icon>
        </ion-item>

        <!-- Devices -->
        <ion-item button @click="goToSection('devices')" class="settings-item">
          <ion-icon :icon="devices" class="devices-icon"></ion-icon>
          <ion-label>
            <div class="item-title">ডিভাইস</div>
          </ion-label>
          <ion-icon :icon="chevronForward" color="medium"></ion-icon>
        </ion-item>

        <!-- About Us -->
        <ion-item button @click="goToSection('about')" class="settings-item">
          <ion-icon :icon="helpCircle" class="about-icon"></ion-icon>
          <ion-label>
            <div class="item-title">আমাদের বিজ্ঞাপন</div>
          </ion-label>
          <ion-icon :icon="chevronForward" color="medium"></ion-icon>
        </ion-item>
      </ion-list>

      <!-- Logout Button -->
      <ion-list :inset="true" class="logout-section">
        <ion-item button @click="showLogoutConfirm" class="logout-item">
          <ion-icon :icon="logOut" class="logout-icon"></ion-icon>
          <ion-label>
            <div class="item-title logout-text">লগ আউট</div>
          </ion-label>
        </ion-item>
      </ion-list>

      <!-- Version Info -->
      <div class="version-info">
        <p>সংস্করণ 1.0.0</p>
      </div>
    </ion-content>

    <!-- Toast for copy actions -->
    <ion-toast
      :is-open="toast.show"
      :message="toast.message"
      duration="2000"
      color="success"
      @didDismiss="toast.show = false"
    ></ion-toast>

    <!-- Language Picker Alert -->
    <ion-alert
      :is-open="showLanguageAlert"
      header="ভাষা নির্বাচন করুন"
      :buttons="languageButtons"
      @didDismiss="showLanguageAlert = false"
    ></ion-alert>

    <!-- Logout Confirmation Alert -->
    <ion-alert
      :is-open="showLogoutAlert"
      header="লগ আউট করতে চান?"
      message="এই ডিভাইস থেকে লগ আউট হবেন?"
      :buttons="logoutButtons"
      @didDismiss="showLogoutAlert = false"
    ></ion-alert>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton,
  IonCard,
  IonCardContent,
  IonButtons,
  IonBackButton,
  IonToast,
  IonAlert,
} from '@ionic/vue'
import {
  chevronForward,
  star,
  checkmarkCircle,
  copyOutline,
  code,
  logoFacebook,
  globe,
  helpCircle,
  logOut,
  calendarOutline,
  downloadOutline,
} from 'ionicons/icons'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const toast = ref({
  show: false,
  message: '',
})

const showLanguageAlert = ref(false)
const showLogoutAlert = ref(false)
const currentLanguage = ref('bn')

const languageButtons = [
  {
    text: 'বাংলা',
    handler: () => {
      currentLanguage.value = 'bn'
      toast.value = { show: true, message: 'ভাষা পরিবর্তন হয়েছে' }
    },
  },
  {
    text: 'English',
    handler: () => {
      currentLanguage.value = 'en'
      toast.value = { show: true, message: 'Language changed' }
    },
  },
  {
    text: 'Cancel',
    role: 'cancel',
  },
]

const logoutButtons = [
  {
    text: 'বাতিল করুন',
    role: 'cancel',
  },
  {
    text: 'লগ আউট',
    role: 'destructive',
    handler: () => {
      performLogout()
    },
  },
]

function goToSection(section: string) {
  // Navigate to different settings sections
  console.log('Navigate to:', section)
  toast.value = { show: true, message: `${section} পৃষ্ঠায় নেভিগেট হচ্ছে...` }
}

function copyEmail() {
  const email = 'julfikarali.282@gmail.com'
  navigator.clipboard.writeText(email).then(() => {
    toast.value = { show: true, message: 'ইমেইল কপি হয়েছে' }
  })
}

function copyReferralCode() {
  const code = 'LOAN2024'
  navigator.clipboard.writeText(code).then(() => {
    toast.value = { show: true, message: 'রেফার কোড কপি হয়েছে' }
  })
}

function showLanguagePicker() {
  showLanguageAlert.value = true
}

function showLogoutConfirm() {
  showLogoutAlert.value = true
}

function performLogout() {
  toast.value = { show: true, message: 'লগ আউট হচ্ছে...' }
  setTimeout(() => {
    router.push('/')
  }, 1000)
}
</script>

<style scoped>
/* Premium Banner */
.premium-banner {
  margin: 1rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(33, 150, 243, 0.2);
}

.banner-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
}

.banner-text {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.banner-icon {
  font-size: 2rem;
}

.premium-banner .ion-padding {
  padding: 0;
}

.premium-banner p {
  margin: 0;
  line-height: 1.3;
}

.banner-title {
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
}

.banner-subtitle {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
}

.whatsapp-btn {
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
}

.whatsapp-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Settings Section */
.settings-section {
  padding: 1.5rem 1rem;
  background: #fff;
  margin: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.section-icon {
  color: #2196f3;
  font-size: 1.2rem;
}

.section-date {
  font-weight: 600;
  color: #333;
}

.section-subtitle {
  color: #666;
  font-size: 0.9rem;
  margin: 0.5rem 0 1rem 0;
}

.download-btn {
  height: 44px;
  font-weight: 500;
}

/* Settings List */
.settings-list {
  margin: 1rem 0;
  border-radius: 12px;
}

.settings-item {
  --padding-start: 1rem;
  --padding-end: 1rem;
  margin-bottom: 0;
  border-bottom: 1px solid #f0f0f0;
  --background: #fff;
  transition: background-color 0.2s ease;
}

.settings-item:last-child {
  border-bottom: none;
}

.settings-item:hover {
  --background: #f9f9f9;
}

.settings-item::part(native) {
  padding: 1rem 0;
}

.item-title {
  font-weight: 500;
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.25rem;
}

.item-subtitle {
  font-size: 0.85rem;
  color: #999;
  margin: 0.25rem 0 0 0;
}

.premium-icon {
  color: #ffa500;
  font-size: 1.5rem;
}

.verified-icon {
  color: #4caf50;
  font-size: 1.5rem;
}

.referral-icon {
  color: #9c27b0;
  font-size: 1.5rem;
}

.community-icon {
  color: #1976d2;
  font-size: 1.5rem;
}

.language-icon {
  color: #00bcd4;
  font-size: 1.5rem;
}

.devices-icon {
  color: #9e9e9e;
  font-size: 1.5rem;
}

.about-icon {
  color: #ff6b6b;
  font-size: 1.5rem;
}

.copy-icon {
  cursor: pointer;
  color: #2196f3;
  font-size: 1.2rem;
  transition: transform 0.2s ease;
}

.copy-icon:hover {
  transform: scale(1.1);
}

/* Logout Section */
.logout-section {
  margin: 2rem 0 1rem 0;
  border-radius: 12px;
}

.logout-item {
  --padding-start: 1rem;
  --padding-end: 1rem;
  --background: #fff;
}

.logout-item::part(native) {
  padding: 1rem 0;
}

.logout-icon {
  color: #f44336;
  font-size: 1.5rem;
}

.logout-text {
  color: #f44336;
  font-weight: 600;
}

/* Version Info */
.version-info {
  text-align: center;
  padding: 2rem 1rem;
  color: #999;
  font-size: 0.85rem;
}

/* Responsive */
@media (max-width: 480px) {
  .settings-section {
    margin: 0.75rem;
  }

  .banner-content {
    flex-direction: column;
    gap: 1rem;
  }

  .item-title {
    font-size: 0.95rem;
  }
}
</style>
