<script setup lang="ts">
  import { useTasksStore } from '@/app/providers/stores/tasks';
  import { Delete } from '@/shared/icons/Delete';
  import { Edit } from '@/shared/icons/Edit';
  import { Xmark } from '@/shared/icons/Xmark';
  import type { Tag } from '@/shared/types/Task';
  import { storeToRefs } from 'pinia';
  import { onBeforeMount, ref } from 'vue';

  const tasksStore = useTasksStore();
  const { tasks } = storeToRefs(tasksStore);

  const tag = ref<Tag>('Today');
  const title = ref('');
  const showModal = ref(false);

  function removeTodo(id: string) {
    tasksStore.removeTask(id);
  }

  function updateTodo(id: string, date: string, completed: boolean) {
    tasksStore.updateTask({
      id,
      title: title.value,
      tag: tag.value,
      completed,
      date,
    });
    title.value = '';
    tag.value = 'Today';
  }

  function toggleModal() {
    showModal.value = !showModal.value;
  }

  onBeforeMount(() => {
    tasksStore.getTasks();
  });
</script>
<template>
  <div class="modal-background" v-show="showModal" @click="toggleModal"></div>
  <TransitionGroup name="cavein">
    <div v-for="task in tasks" :key="task.id" class="todo">
      <div class="todo__tag">{{ task.tag }}</div>
      <small class="todo__date">{{ task.date }}</small>
      <div class="todo__title">
        {{ task.title }}
      </div>
      <div class="todo__actions">
        <Edit @click="toggleModal" class="todo__action todo__action--edit" />
        <Delete
          @click="removeTodo(task.id)"
          class="todo__action todo__action--delete"
        />
      </div>
      <div class="modal-edit" v-show="showModal">
        <div class="modal-edit__header">
          <h1 class="heading-primary u-center-text">Update Task</h1>
          <Xmark @click="toggleModal" class="modal-edit__xmark" />
        </div>

        <form
          class="task__form task__form--modal"
          @submit.prevent="updateTodo(task.id, task.date, task.completed)"
        >
          <div>
            <input
              type="text"
              class="task__input task__input--modal"
              id="title"
              :placeholder="task.title"
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
    </div>
  </TransitionGroup>
</template>
