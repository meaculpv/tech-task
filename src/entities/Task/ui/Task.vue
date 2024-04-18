<script setup lang="ts">
  import { useTasksStore } from '@/app/providers/stores/tasks';
  import { Delete } from '@/shared/icons/Delete';
  import { Edit } from '@/shared/icons/Edit';
  import { storeToRefs } from 'pinia';
  import { onBeforeMount } from 'vue';

  const tasksStore = useTasksStore();
  const { tasks } = storeToRefs(tasksStore);

  function removeTodo(id: string) {
    tasksStore.removeTask(id);
  }

  onBeforeMount(() => {
    tasksStore.getTasks();
  });
</script>
<template>
  <TransitionGroup name="cavein">
    <div v-for="task in tasks" class="todo">
      <div class="todo__tag">{{ task.tag }}</div>
      <small class="todo__date">{{ task.date }}</small>
      <div class="todo__title">
        {{ task.title }}
      </div>
      <div class="todo__actions">
        <Edit class="todo__action todo__action--edit" />
        <Delete
          @click="removeTodo(task.id)"
          class="todo__action todo__action--delete"
        />
      </div>
    </div>
  </TransitionGroup>
</template>
