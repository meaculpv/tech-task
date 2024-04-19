<script setup lang="ts">
  import { useTasksStore } from '@/app/providers/stores/tasks';
  import { Delete } from '@/shared/icons/Delete';
  import { Edit } from '@/shared/icons/Edit';
  import { Modal } from '@/features/Modal-edit';
  import { storeToRefs } from 'pinia';
  import { onBeforeMount, ref } from 'vue';
  import type { Task } from '@/shared/types/Task';

  const tasksStore = useTasksStore();
  const { tasks } = storeToRefs(tasksStore);

  const showModal = ref(false);
  const updatingTask = ref<Task>();

  function removeTodo(id: string) {
    tasksStore.removeTask(id);
  }

  function toggleModal(id: string = '') {
    showModal.value = !showModal.value;
    tasksStore.getTaskById(id);
  }

  onBeforeMount(() => {
    tasksStore.getTasks();
  });
</script>
<template>
  <div
    class="modal-background"
    v-show="showModal"
    @click="() => toggleModal()"
  ></div>
  <TransitionGroup name="cavein">
    <div v-for="task in tasks" :key="task.id" class="todo">
      <div class="todo__tag">{{ task.tag }}</div>
      <small class="todo__date">{{ task.date }}</small>
      <div class="todo__title">
        {{ task.title }}
      </div>
      <div class="todo__actions">
        <Edit
          @click="() => toggleModal(task.id)"
          class="todo__action todo__action--edit"
        />
        <Delete
          @click="removeTodo(task.id)"
          class="todo__action todo__action--delete"
        />
      </div>
    </div>
  </TransitionGroup>
  <Modal @toggle-modal="toggleModal" v-show="showModal" />
</template>
