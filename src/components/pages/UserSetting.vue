<template>
  <ion-list :inset="true" class="settings-list">
    <!-- Premium Features -->
    <ion-item 
      button 
      @click="goToSection('premium')" 
      class="settings-item premium-item"
      detail="false"
    >
      <div class="item-start">
        <ion-icon :icon="star" class="item-icon premium-icon" slot="start"></ion-icon>
        <ion-label class="item-content">
          <div class="item-title">প্রিমিয়াম ফিচার</div>
          <div class="item-subtitle">এক্সক্লুসিভ সুবিধাগুলো আনলক করুন</div>
        </ion-label>
      </div>
      <div class="item-end">
        <ion-badge color="warning" class="premium-badge">PRO</ion-badge>
        <ion-icon :icon="chevronForward" color="medium" class="chevron-icon"></ion-icon>
      </div>
    </ion-item>

    <!-- Email Audit -->
    <ion-item 
      button 
      @click="goToSection('email')" 
      class="settings-item email-item"
      detail="false"
    >
      <div class="item-start">
        <ion-icon :icon="checkmarkCircle" class="item-icon verified-icon" slot="start"></ion-icon>
        <ion-label class="item-content">
          <div class="item-title">ইমেইল অডিট</div>
          <div class="item-subtitle email-text">{{ userEmail }}</div>
        </ion-label>
      </div>
      <div class="item-end">
        <ion-button 
          fill="clear" 
          size="small" 
          @click.stop="copyEmail"
          class="copy-button"
        >
          <ion-icon :icon="copyOutline" slot="icon-only"></ion-icon>
        </ion-button>
        <ion-icon :icon="chevronForward" color="medium" class="chevron-icon"></ion-icon>
      </div>
    </ion-item>

    <!-- Referral Code -->
    <ion-item 
      button 
      @click="goToSection('referral')" 
      class="settings-item referral-item"
      detail="false"
    >
      <div class="item-start">
        <ion-icon :icon="gift" class="item-icon referral-icon" slot="start"></ion-icon>
        <ion-label class="item-content">
          <div class="item-title">রেফার কোড</div>
          <div class="item-subtitle referral-code">{{ referralCode || 'লোড হচ্ছে...' }}</div>
        </ion-label>
      </div>
      <div class="item-end">
        <ion-button 
          fill="clear" 
          size="small" 
          @click.stop="copyReferralCode"
          class="copy-button"
          :disabled="!referralCode"
        >
          <ion-icon :icon="copyOutline" slot="icon-only"></ion-icon>
        </ion-button>
        <ion-icon :icon="chevronForward" color="medium" class="chevron-icon"></ion-icon>
      </div>
    </ion-item>

    <!-- Community Join -->
    <ion-item 
      button 
      @click="goToSection('community')" 
      class="settings-item community-item"
      detail="false"
    >
      <div class="item-start">
        <ion-icon :icon="people" class="item-icon community-icon" slot="start"></ion-icon>
        <ion-label class="item-content">
          <div class="item-title">কমিউনিটি জয়েন করুন</div>
          <div class="item-subtitle">অন্যান্য ব্যবহারকারীদের সাথে সংযুক্ত হোন</div>
        </ion-label>
      </div>
      <div class="item-end">
        <ion-badge color="primary" class="community-badge">NEW</ion-badge>
        <ion-icon :icon="chevronForward" color="medium" class="chevron-icon"></ion-icon>
      </div>
    </ion-item>

    <!-- Language -->
    <ion-item 
      button 
      @click="showLanguagePicker" 
      class="settings-item language-item"
      detail="false"
    >
      <div class="item-start">
        <ion-icon :icon="language" class="item-icon language-icon" slot="start"></ion-icon>
        <ion-label class="item-content">
          <div class="item-title">ভাষা (Language)</div>
          <div class="item-subtitle">{{ currentLanguage }}</div>
        </ion-label>
      </div>
      <div class="item-end">
        <ion-icon :icon="chevronForward" color="medium" class="chevron-icon"></ion-icon>
      </div>
    </ion-item>

    <!-- Devices -->
    <ion-item 
      button 
      @click="goToSection('devices')" 
      class="settings-item devices-item"
      detail="false"
    >
      <div class="item-start">
        <ion-icon :icon="phonePortrait" class="item-icon devices-icon" slot="start"></ion-icon>
        <ion-label class="item-content">
          <div class="item-title">ডিভাইস</div>
          <div class="item-subtitle">{{ connectedDevices }} ডিভাইস সংযুক্ত</div>
        </ion-label>
      </div>
      <div class="item-end">
        <ion-icon :icon="chevronForward" color="medium" class="chevron-icon"></ion-icon>
      </div>
    </ion-item>

    <!-- About Us -->
    <ion-item 
      button 
      @click="goToSection('about')" 
      class="settings-item about-item"
      detail="false"
    >
      <div class="item-start">
        <ion-icon :icon="informationCircle" class="item-icon about-icon" slot="start"></ion-icon>
        <ion-label class="item-content">
          <div class="item-title">আমাদের সম্পর্কে</div>
          <div class="item-subtitle">সংস্করণ {{ appVersion }}</div>
        </ion-label>
      </div>
      <div class="item-end">
        <ion-icon :icon="chevronForward" color="medium" class="chevron-icon"></ion-icon>
      </div>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
import { 
  IonList, 
  IonItem, 
  IonLabel, 
  IonIcon, 
  IonBadge,
  IonButton 
} from '@ionic/vue';
import { 
  star, 
  checkmarkCircle, 
  copyOutline, 
  chevronForward, 
  gift, 
  people, 
  language, 
  phonePortrait, 
  informationCircle 
} from 'ionicons/icons';
import { ref, onMounted } from 'vue';
import { useIonRouter } from '@ionic/vue';

const ionRouter = useIonRouter();

// Reactive data
const userEmail = ref('julfikarali.282@gmail.com');
const referralCode = ref('');
const currentLanguage = ref('বাংলা');
const connectedDevices = ref(1);
const appVersion = ref('1.0.0');

// Methods
const goToSection = (section) => {
  ionRouter.push(`/settings/${section}`);
};

const showLanguagePicker = async () => {
  // Language picker implementation
  console.log('Show language picker');
};

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(userEmail.value);
    // Show toast notification
    console.log('Email copied to clipboard');
  } catch (err) {
    console.error('Failed to copy email: ', err);
  }
};

const copyReferralCode = async () => {
  if (referralCode.value) {
    try {
      await navigator.clipboard.writeText(referralCode.value);
      // Show toast notification
      console.log('Referral code copied to clipboard');
    } catch (err) {
      console.error('Failed to copy referral code: ', err);
    }
  }
};

// Lifecycle
onMounted(async () => {
  // Simulate loading referral code
  setTimeout(() => {
    referralCode.value = 'REF12345';
  }, 1000);
});
</script>

<style scoped>
.settings-list {
  --ion-item-background: transparent;
  margin: 16px 0;
}

.settings-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --inner-padding-end: 8px;
  --min-height: 72px;
  --border-radius: 12px;
  margin: 8px 0;
  --background: var(--ion-card-background, #ffffff);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.item-start {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
}

.item-content {
  margin-left: 12px;
  flex: 1;
  min-width: 0;
}

.item-end {
  display: flex;
  align-items: center;
  gap: 8px;
}

.item-icon {
  font-size: 20px;
  min-width: 24px;
}

/* Icon Colors */
.premium-icon {
  color: #ffd700;
}

.verified-icon {
  color: #4caf50;
}

.referral-icon {
  color: #e91e63;
}

.community-icon {
  color: #2196f3;
}

.language-icon {
  color: #ff9800;
}

.devices-icon {
  color: #9c27b0;
}

.about-icon {
  color: #607d8b;
}

/* Item Titles & Subtitles */
.item-title {
  font-weight: 600;
  font-size: 16px;
  color: var(--ion-text-color, #000000);
  margin-bottom: 2px;
}

.item-subtitle {
  font-size: 14px;
  color: var(--ion-color-medium, #666666);
  opacity: 0.8;
}

.email-text, .referral-code {
  font-family: 'Courier New', monospace;
  font-size: 13px;
}

/* Badges */
.premium-badge, .community-badge {
  font-size: 10px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 12px;
}

/* Copy Button */
.copy-button {
  --padding-start: 8px;
  --padding-end: 8px;
  --color: var(--ion-color-medium);
  margin: 0;
}

.copy-button:hover {
  --color: var(--ion-color-primary);
}

/* Chevron Icon */
.chevron-icon {
  font-size: 18px;
  opacity: 0.6;
}

/* Hover Effects */
.settings-item:hover {
  --background: var(--ion-color-light);
  transform: translateY(-1px);
  transition: all 0.2s ease;
}

/* Responsive Design */
@media (max-width: 480px) {
  .settings-item {
    --min-height: 64px;
    --padding-start: 12px;
    --padding-end: 12px;
  }
  
  .item-title {
    font-size: 15px;
  }
  
  .item-subtitle {
    font-size: 13px;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .settings-item {
    --background: var(--ion-card-background, #1e1e1e);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}
</style>