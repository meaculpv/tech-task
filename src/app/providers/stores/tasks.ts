import type { Task } from '@/shared/types/Task';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useTasksStore = defineStore('tasks', () => {
  // States
  const tasks = ref<Task[]>([]);
  const task = ref<Task>();

  // Getters
  const todayTasks = computed(() => {
    return tasks.value.filter((task) => task.tag === 'Today');
  });

  const nextWeekTasks = computed(() => {
    return tasks.value.filter((task) => task.tag === 'Next week');
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

    if (taskIndex !== -1) {
      tasks.value[taskIndex] = updatedTask;
      localStorage.setItem('tasks', JSON.stringify(tasks.value));
    }
  }

  function getTaskById(id: string) {
    task.value = tasks.value.find((task) => task.id === id);
  }

  return {
    tasks,
    task,
    todayTasks,
    nextWeekTasks,
    addTask,
    getTasks,
    removeTask,
    updateTask,
    getTaskById,
  };
});
