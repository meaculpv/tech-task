import type { Task } from '@/shared/types/Task';
import moment from 'moment';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref<Task[]>([]);

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

  function updateTask(updatedTask: Task) {}

  return {
    tasks,
    addTask,
    getTasks,
    removeTask,
    updateTask,
  };
});
