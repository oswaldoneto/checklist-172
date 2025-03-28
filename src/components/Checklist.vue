<template>
  <div class="checklist">
    <h1>Checklist C172-S G1000</h1>
    
    <div class="phases">
      <div v-for="(phase, key) in checklist" :key="key" class="phase">
        <div class="phase-header" @click="togglePhase(key)">
          <h2 :class="{ 'completed': isPhaseCompleted(key) }">{{ phase.title }}</h2>
          <span class="arrow" :class="{ 'arrow-up': activePhase === key, 'completed': isPhaseCompleted(key) }">▼</span>
        </div>
        <div class="phase-content" v-show="activePhase === key">
          <div class="items">
            <div v-for="item in phase.items" :key="item.id" class="item">
              <button 
                class="check-button"
                :class="{ 'checked': item.checked }"
                @click="item.checked = !item.checked"
              >
                <div class="status-indicator" :class="{ 'checked': item.checked }"></div>
                <span>
                  <span class="item-name">{{ formatItemName(item.text) }}</span>
                  <span class="dots"></span>
                  <span class="item-value">{{ formatItemValue(item.text) }}</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="reset-container">
      <button @click="resetChecklist" class="btn-secondary">Reset Checklist</button>
    </div>

    <div class="credits">
      <p>Credits: <a href="https://www.youtube.com/@simmerlabs" target="_blank">@simmerlabs</a></p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { checklistData } from '../data/checklist'

const checklist = reactive({...checklistData})
const activePhase = ref('preFlight')

const resetChecklist = () => {
  Object.values(checklist).forEach(phase => {
    phase.items.forEach(item => {
      item.checked = false
    })
  })
}

const togglePhase = (phaseKey) => {
  activePhase.value = phaseKey
}

const formatItemName = (text) => {
  const lastDotIndex = text.lastIndexOf('.')
  return text.substring(0, text.indexOf('.'))
}

const formatItemValue = (text) => {
  const lastDotIndex = text.lastIndexOf('.')
  return text.substring(lastDotIndex + 1).trim()
}

const isPhaseCompleted = (phaseKey) => {
  const phase = checklist[phaseKey]
  return phase && phase.items && phase.items.every(item => item.checked)
}

onMounted(() => {
  // Checklist já começa ativo
  resetChecklist()
})
</script>

<style scoped>
.checklist {
  width: 100%;
  margin: 0;
  padding: 10px 0;
  background-color: var(--bg-primary);
  display: flex;
  flex-direction: column;
}

.checklist h1 {
  color: #60a5fa;
  text-align: center;
  margin-bottom: 15px;
  font-size: 2em;
  text-shadow: 0 2px 4px rgba(96, 165, 250, 0.3);
  font-weight: bold;
  letter-spacing: 1px;
}

.phases {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.phase {
  background-color: var(--bg-tertiary);
  overflow: hidden;
  transition: all 0.2s ease;
}

.phase-header {
  padding: 16px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
}

.phase-header:hover {
  background-color: var(--bg-secondary);
}

.phase-header h2 {
  margin: 0;
  color: var(--text-primary);
  font-size: 1.3em;
  transition: all 0.3s ease;
}

.phase-header h2.completed {
  color: var(--accent-color);
  text-shadow: 0 0 8px rgba(76, 175, 80, 0.3);
}

.arrow {
  color: var(--text-primary);
  transition: all 0.3s ease;
  font-size: 1em;
  padding: 0 10px;
}

.arrow-up {
  transform: rotate(180deg);
}

.phase-header h2.completed + .arrow {
  color: var(--accent-color);
  text-shadow: 0 0 8px rgba(76, 175, 80, 0.3);
}

.phase-content {
  padding: 0 12px 12px 12px;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.item {
  display: flex;
  width: 100%;
}

.check-button {
  flex: 1;
  width: 100%;
  padding: 12px 15px;
  background: linear-gradient(145deg, var(--bg-secondary), var(--bg-tertiary));
  color: var(--text-primary);
  font-size: 1em;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.2),
    -2px -2px 4px rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
  word-wrap: break-word;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 12px;
}

.check-button span {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 4px;
}

.check-button .item-name {
  white-space: nowrap;
}

.check-button .dots {
  flex: 1;
  border-bottom: 1px dotted var(--text-secondary);
  margin: 0 4px;
  opacity: 0.5;
  height: 1px;
  min-width: 20px;
}

.check-button .item-value {
  white-space: nowrap;
  text-align: right;
  min-width: 80px;
  justify-content: flex-end;
  display: flex;
}

.status-indicator {
  min-width: 12px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #666;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.status-indicator.checked {
  background-color: var(--accent-color);
  box-shadow: 0 0 8px var(--accent-color);
}

.check-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  opacity: 0;
  transition: opacity 0.2s ease;
}

.check-button:hover::before {
  opacity: 1;
}

.check-button:active {
  transform: translateY(1px);
  box-shadow: 
    1px 1px 2px rgba(0, 0, 0, 0.2),
    -1px -1px 2px rgba(255, 255, 255, 0.05);
}

.check-button.checked {
  color: var(--accent-color);
  text-shadow: 0 0 8px rgba(76, 175, 80, 0.3);
}

.check-button.checked::before {
  background: linear-gradient(145deg, rgba(76, 175, 80, 0.1), rgba(76, 175, 80, 0));
  opacity: 1;
}

.check-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.check-button:disabled::before {
  display: none;
}

.reset-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  padding: 10px;
}

.credits {
  margin-top: 15px;
  text-align: center;
  font-size: 0.9em;
  color: var(--text-secondary);
  padding: 10px;
}

.credits a {
  color: #60a5fa;
  text-decoration: none;
  transition: all 0.2s ease;
}

.credits a:hover {
  color: #93c5fd;
  text-shadow: 0 0 8px rgba(96, 165, 250, 0.3);
}

/* Media Queries para dispositivos móveis */
@media (max-width: 768px) {
  .checklist {
    width: 100%;
    padding: 5px 0;
    margin: 0;
  }

  .checklist h1 {
    font-size: 1.6em;
    margin-bottom: 12px;
    padding: 0;
  }

  .phases {
    gap: 4px;
  }

  .phase {
    margin: 0;
  }

  .phase-header {
    padding: 14px 12px;
  }

  .phase-header h2 {
    font-size: 1.2em;
    line-height: 1.2;
  }

  .phase-content {
    padding: 0 8px 8px 8px;
  }

  .items {
    gap: 4px;
  }

  .item {
    gap: 6px;
    margin-top: 0;
  }

  .check-button {
    padding: 12px 15px;
    font-size: 0.95em;
    gap: 10px;
  }

  .check-button .dots {
    margin: 0 3px;
  }

  .status-indicator {
    min-width: 10px;
    width: 10px;
    height: 10px;
  }

  .reset-container {
    margin-top: 15px;
    padding: 5px;
  }

  .btn-secondary {
    width: 100%;
    max-width: 300px;
  }

  .credits {
    margin-top: 12px;
    font-size: 0.85em;
  }
}

/* Media Queries para iPhone 7 e dispositivos similares */
@media (max-width: 375px) {
  .checklist {
    padding: 3px 0;
  }

  .checklist h1 {
    font-size: 1.4em;
    margin-bottom: 10px;
    padding: 0;
  }

  .phases {
    gap: 3px;
  }

  .phase {
    margin: 0;
  }

  .phase-header {
    padding: 12px 10px;
  }

  .phase-header h2 {
    font-size: 1.1em;
    line-height: 1.2;
  }

  .arrow {
    font-size: 0.7em;
    padding: 0 5px;
  }

  .phase-content {
    padding: 0 6px 6px 6px;
  }

  .items {
    gap: 3px;
  }

  .item {
    gap: 4px;
  }

  .check-button {
    padding: 10px 12px;
    font-size: 0.9em;
    gap: 8px;
  }

  .check-button .dots {
    margin: 0 2px;
  }

  .status-indicator {
    min-width: 8px;
    width: 8px;
    height: 8px;
  }

  .reset-container {
    margin-top: 12px;
    padding: 5px;
  }

  .credits {
    margin-top: 10px;
    font-size: 0.8em;
  }
}
</style> 