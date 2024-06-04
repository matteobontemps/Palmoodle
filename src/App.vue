<script setup>
// import { provide } from 'vue'
// import { RouterView } from 'vue-router'

import MenuBar from './components/MenuBar.vue'
import MainPage from './components/MainPage.vue'
import AuthForm from './components/AuthForm.vue'
import VoteForm from './components/VoteForm.vue'
import FooterPage from './components/FooterPage.vue'
</script>

<template>
  <div class="container-fluid">
    <MenuBar />
    <MainPage />
    <!-- <RouterView /> -->
    <AuthForm />
    <VoteForm />
    <FooterPage />
  </div>
</template>
