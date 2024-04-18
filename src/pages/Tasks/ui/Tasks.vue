<script setup lang="ts">
  import { useTasksStore } from '@/app/providers/stores/tasks';
  import { Task } from '@/entities/Task';
  import { ref } from 'vue';
  import moment from 'moment';

  const tasksStore = useTasksStore();
  const title = ref('');

  function addTask() {
    tasksStore.addTask({
      id: moment().format('kmmSSS'),
      title: title.value,
      completed: false,
      tag: 'Today',
      date: moment().format('DD/MM/YYYY'),
    });

    console.log(moment().format('DD/MM/YYYY'));

    title.value = '';
  }
</script>
<template>
  <main class="tasks">
    <section class="section-form">
      <h1 class="heading-primary u-center-text">Task manager</h1>
      <form class="task__form" @submit.prevent="addTask">
        <input type="text" class="task__input" id="task" v-model="title" />
        <label for="task" class="task__label">Create a task</label>
        <div class="task__line"></div>
        <button class="btn btn--green">Add task</button>
      </form>
    </section>
    <section class="section-tasks">
      <Task />
    </section>
  </main>
</template>
