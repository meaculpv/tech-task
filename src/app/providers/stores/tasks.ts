import type { Task } from '@/shared/types/Task';
import moment from 'moment';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useTasksStore = defineStore('tasks', () => {
  // States
  const tasks = ref<Task[]>([]);

  // Getters
  const todayTasks = computed(() => {
    tasks.value.find((task) => task.tag === 'Today');
  });

  const nextWeekTasks = computed(() => {
    tasks.value.find((task) => (task.tag = 'Next week'));
  });

  // Actions
  function getTasks() {
    const tasksJson = localStorage.getItem('tasks');

    if (!tasksJson) {
      tasks.value = [];
    }

    tasks.value = JSON.parse(tasksJson).map((task: any) => ({
      ...task,
    }));
  }

  function addTask(task: Task) {
    tasks.value.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks.value));
  }

  function removeTask(id: string) {
    const filteredTasks = tasks.value.filter((task) => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    tasks.value = filteredTasks;
  }

  function updateTask(updatedTask: Task) {
    const taskIndex = tasks.value.findIndex((t) => t.id === updatedTask.id);
    console.log(taskIndex);

    if (taskIndex !== -1) {
      tasks.value[taskIndex] = updatedTask;
      localStorage.setItem('tasks', JSON.stringify(tasks.value));
    }
  }

  return {
    tasks,
    todayTasks,
    nextWeekTasks,
    addTask,
    getTasks,
    removeTask,
    updateTask,
  };
});
