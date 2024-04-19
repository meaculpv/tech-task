<script setup lang="ts">
  import { useTasksStore } from '@/app/providers/stores/tasks';
  import { storeToRefs } from 'pinia';
  import { onBeforeMount } from 'vue';

  const tasksStore = useTasksStore();
  const { todayTasks, nextWeekTasks } = storeToRefs(tasksStore);

  onBeforeMount(() => {
    tasksStore.getTasks();
  });
</script>
<template>
  <main class="home">
    <section class="section-group">
      <div class="today-tasks">
        <h1 class="heading-primary">Today</h1>
        <ul class="today-tasks__list">
          <li v-for="task in todayTasks" class="today-tasks__item">
            {{ task.title }}
          </li>
        </ul>
      </div>
      <div class="nextWeek-tasks">
        <h1 class="heading-primary">Next week</h1>
        <ul class="nextWeek-tasks__list">
          <li v-for="task in nextWeekTasks" class="nextWeek-tasks__item">
            {{ task.title }}
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
