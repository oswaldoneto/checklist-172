<script setup>
import Checklist from './components/Checklist.vue'
</script>

<template>
  <div class="app">
    <Checklist />
  </div>
</template>

<style>
#app {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
}

:root {
  --bg-primary: #242424;
  --bg-secondary: #242424;
  --bg-tertiary: #2a2a2a;
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --accent-color: #4CAF50;
  --accent-hover: #45a049;
  --danger-color: #f44336;
  --danger-hover: #d32f2f;
  --border-color: #333333;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
  margin: 0;
  padding: 0;
}

.app {
  min-height: 100vh;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
