<script setup lang="ts">
  import { useTasksStore } from '@/app/providers/stores/tasks';
  import type { Tag, Task } from '@/shared/types/Task';
  import { storeToRefs } from 'pinia';
  import { ref } from 'vue';
  import { Xmark } from '@/shared/icons/Xmark';

  const emits = defineEmits(['toggle-modal']);

  const tasksStore = useTasksStore();
  const { task } = storeToRefs(tasksStore);

  const title = ref('');
  const tag = ref<Tag>(task.value?.tag);

  function toggleModal() {
    emits('toggle-modal', task.value?.id);
  }

  function updateTodo(date: string, completed: boolean) {
    tasksStore.updateTask({
      id: task.value.id,
      title: title.value,
      tag: tag.value,
      completed,
      date,
    });
    title.value = '';
    tag.value = task.value?.tag;
  }
</script>
<template>
  <div class="modal-edit">
    <div class="modal-edit__header">
      <h1 class="heading-primary u-center-text">Update Task</h1>
      <Xmark @click="toggleModal" class="modal-edit__xmark" />
    </div>

    <form
      class="task__form task__form--modal"
      @submit.prevent="updateTodo(task?.date, task?.completed)"
    >
      <div>
        <input
          type="text"
          class="task__input task__input--modal"
          id="title"
          :placeholder="task?.title"
          v-model="title"
        />
      </div>
      <div class="task__line task__line--modal"></div>
      <div class="task__radio">
        <input type="radio" id="today" value="Today" v-model="tag" />
        <label for="today" class="task__radio__label task__radio__label--1"
          >Today</label
        >
        <input type="radio" id="nextWeek" value="Next week" v-model="tag" />
        <label
          for="nextWeek"
          :class="'task__radio__label task__radio__label--2'"
          >Next week</label
        >
      </div>
      <button @click="toggleModal" class="btn btn--green btn--modal">
        Update
      </button>
    </form>
  </div>
</template>
