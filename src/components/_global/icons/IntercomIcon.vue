<template>
  <svg
    width="21"
    height="24"
    viewBox="0 0 21 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.5714 24C20.5714 24 17.1081 22.6087 14.3067 21.495H2.52514C1.13143 21.495 0 20.2695 0 18.7598V2.733C0 1.22475 1.13143 0 2.52514 0H18.0456C19.44 0 20.5707 1.224 20.5707 2.73375V16.5368H20.5714V24ZM17.5305 15.0135C17.4755 14.9414 17.4064 14.8818 17.3276 14.8383C17.2489 14.7949 17.1621 14.7687 17.0729 14.7613C16.9836 14.7539 16.8939 14.7655 16.8092 14.7953C16.7246 14.8252 16.647 14.8727 16.5813 14.9347C16.5593 14.9543 14.3662 16.9455 10.285 16.9455C6.25445 16.9455 4.02759 14.9685 3.98792 14.9325C3.92214 14.8707 3.84454 14.8236 3.76002 14.794C3.67549 14.7644 3.58587 14.753 3.49681 14.7605C3.40775 14.7681 3.32119 14.7944 3.2426 14.8378C3.164 14.8812 3.09507 14.9408 3.04016 15.0128C2.92256 15.1625 2.86505 15.3523 2.87927 15.5438C2.89168 15.7342 2.97533 15.9125 3.1129 16.0417C3.21722 16.1378 5.71151 18.4042 10.285 18.4042C14.8592 18.4042 17.3535 16.1378 17.4578 16.0417C17.5951 15.9124 17.6785 15.7341 17.6907 15.5438C17.7049 15.3527 17.6477 15.1632 17.5305 15.0135Z"
      :fill="
        `url(#${
          darkMode ? 'intercom-gradient-dark' : 'intercom-gradient-light'
        })`
      "
    />
    <defs>
      <linearGradient
        id="intercom-gradient-light"
        x1="10.2857"
        y1="0"
        x2="10.2857"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#EF7744" />
        <stop offset="1" stop-color="#FFB800" />
      </linearGradient>
      <linearGradient
        id="intercom-gradient-dark"
        x1="13.9768"
        y1="8.5"
        x2="6.47678"
        y2="23"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFFDEB" />
        <stop offset="1" stop-color="#FFB800" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useDarkMode from '@/composables/useDarkMode';

export default defineComponent({
  setup() {
    const { darkMode } = useDarkMode();

    return { darkMode };
  }
});
</script>
