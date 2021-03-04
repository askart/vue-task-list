<template>
  <div class="task-form">
    <form class="task-form__form" @submit.prevent="handleSubmit">
      <div class="task-form__form__item">
        <label for="task-form__form__item__title">Название задачи</label>
        <textarea v-model="task.title" id="task-form__form__item__title"
          name="title" rows="2" cols="303" required/>
      </div>
      <div class="task-form__form__item">
        <label for="task-form__form__item__description">Описание задачи</label>
        <textarea v-model="task.description"
          id="task-form__form__item__description" name="description"
          rows="3" cols="33" required/>
      </div>
      <div class="task-form__form__item">
        <input type="submit" value="Создать задачу"/>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'TaskForm',
  data() {
    return {
      task: {
        title: '',
        description: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('Tasks/actionAddTask', this.task);
      this.$router.push({ name: 'list' });
    },
  },
};
</script>
<style lang="scss" scoped>
.task-form {
  &__form {
    width: 300px;
    & > *:not(:first-child) {
      margin-top: 10px;
    }
    &__item {
      display: flex;
      flex-flow: column nowrap;
      & > *:not(:first-child) {
        margin-top: 5px;
      }
      & > textarea {
        resize: none;
      }
    }
  }
}
</style>
