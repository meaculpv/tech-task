<script setup lang="ts">
  import { Delete } from '@/shared/icons/Delete';
  import { Edit } from '@/shared/icons/Edit';
</script>
<template>
  <main class="tasks">
    <section class="section-form">
      <h1 class="heading-primary u-center-text">Task manager</h1>
      <form class="task__form">
        <input type="text" class="task__input" id="task" />
        <label for="task" class="task__label">Create a task</label>
        <div class="task__line"></div>
        <button class="btn btn--green">Add task</button>
      </form>
    </section>
    <section class="section-tasks">
      <div class="todo">
        <div class="todo__tag">Today</div>
        <div class="todo__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          voluptatem?
        </div>
        <div class="todo__actions">
          <Edit class="todo__action todo__action--edit" />
          <Delete class="todo__action todo__action--delete" />
        </div>
      </div>
      <div class="todo">
        <div class="todo__tag">Today</div>
        <div class="todo__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          voluptatem?
        </div>
        <div class="todo__actions">
          <Edit class="todo__action todo__action--edit" />
          <Delete class="todo__action todo__action--delete" />
        </div>
      </div>
      <div class="todo">
        <div class="todo__tag">Today</div>
        <div class="todo__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          voluptatem?
        </div>
        <div class="todo__actions">
          <Edit class="todo__action todo__action--edit" />
          <Delete class="todo__action todo__action--delete" />
        </div>
      </div>
      <div class="todo">
        <div class="todo__tag">Today</div>
        <div class="todo__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          voluptatem?
        </div>
        <div class="todo__actions">
          <Edit class="todo__action todo__action--edit" />
          <Delete class="todo__action todo__action--delete" />
        </div>
      </div>
      <div class="todo">
        <div class="todo__tag">Today</div>
        <div class="todo__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          voluptatem?
        </div>
        <div class="todo__actions">
          <Edit class="todo__action todo__action--edit" />
          <Delete class="todo__action todo__action--delete" />
        </div>
      </div>
      <div class="todo">
        <div class="todo__tag">Next week</div>
        <div class="todo__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          voluptatem?
        </div>
        <div class="todo__actions">
          <Edit class="todo__action todo__action--edit" />
          <Delete class="todo__action todo__action--delete" />
        </div>
      </div>
    </section>
  </main>
</template>
