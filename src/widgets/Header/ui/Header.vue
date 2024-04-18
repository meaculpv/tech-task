<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="header">
    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item">
          <router-link :to="{ name: 'home' }" class="navigation__link"
            >Home</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link :to="{ name: 'tasks' }" class="navigation__link"
            >Tasks</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
