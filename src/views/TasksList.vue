<template>
  <div class="tasks-list">
    <div class="operations">
      <div class="operations__search">
        <input type="text" class="operations__search__text"
          placeholder="Поиск" v-model="searchText" :disabled="loading" @input="applySearch">
      </div>
      <div class="operations__sort">
        <button :disabled="loading" @click="handleSortClick">Фильтр</button>
      </div>
    </div>
    <div class="table">
      <div class="table__header">
        <div class="table__row">
          <div class="table__row__item"></div>
          <div class="table__row__item">#</div>
          <div class="table__row__item">Название</div>
          <div class="table__row__item">Описание</div>
        </div>
      </div>
      <div class="table__body">
        <div class="table__row table__row--loading" v-if="loading">Загружается...</div>
        <div class="table__row table__row--empty" v-else-if="empty">Список пуст</div>
        <div class="table__row" v-else
          :class="{'table__row--selected': selectedTasks.includes(task.id)}"
          v-for="(task, taskIndex) in tasks" :key="task.id">
          <div class="table__row__item">
            <input type="checkbox" :value="task.id" v-model="selectedTasks">
          </div>
          <div class="table__row__item">{{taskIndex + 1}}</div>
          <div class="table__row__item">{{task.title}}</div>
          <div class="table__row__item">{{task.description}}</div>
        </div>
      </div>
    </div>
    <div>
      <button :disabled="!selectedTasks.length"
        @click="removeSelectedTasks(selectedTasks)">Удалить</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TasksList',
  data() {
    return {
      selectedTasks: [],
      searchText: '',
      sort: 1,
      tasks: [],
    };
  },
  computed: {
    loading() {
      return this.$store.getters['Tasks/getLoadingState'];
    },
    empty() {
      return !this.loading && !this.tasks.length;
    },
  },
  watch: {
    loading(val) {
      if (val) {
        this.getTasks();
      }
    },
  },
  created() {
    this.$store.dispatch('Tasks/actionLoadTasks');
  },
  methods: {
    getTasks() {
      this.applySearch();
    },
    applySearch() {
      const keys = ['title', 'description'];
      const str = this.searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(str, 'i');
      this.tasks = this.$store.getters['Tasks/getList']
        .filter((task) => keys.some((key) => regex.test(task[key])));
      this.applySort();
    },
    applySort() {
      if (this.sort === 1) {
        this.tasks.sort((a, b) => a.id - b.id);
      } else {
        this.tasks.sort((a, b) => (a.title).localeCompare(b.title));
      }
    },
    handleSortClick() {
      this.sort *= -1;
      this.applySort();
    },
    removeSelectedTasks(ids) {
      this.$store.dispatch('Tasks/actionRemoveTasks', { ids });
      this.selectedTasks = [];
      this.getTasks();
    },
  },
};
</script>
<style lang="scss" scoped>
.tasks-list {
  display: flex;
  flex-flow: column nowrap;
  width: 600px;
  & > *:not(:first-child) {
    margin-top: 20px;
  }
}
.operations {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  & > *:not(:first-child) {
    margin-left: 10px;
  }
  &__search {
    flex: 0 1 auto;
    width: 100%;
    &__text {
      box-sizing: border-box;
      width: inherit;
    }
  }
  &__sort {
    display: flex;
  }
}
.table {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  $table: &;
  &__header {
    display: flex;
    flex-flow: column nowrap;
    font-weight: bold;
    & > #{$table}__row:nth-child(odd) {
      border-top: 1px solid black;
    }
  }
  &__body {
    display: flex;
    flex-flow: column nowrap;
    & > #{$table}__row:nth-child(odd) {
      background-color: lightgray;
    }
  }
  &__row {
    display: flex;
    flex-flow: row nowrap;
    border-bottom: 1px solid black;
    &--selected {
      background-color: lightblue !important;
    }
    &--empty, &--loading {
      padding: 5px;
      background-color: white !important;
      justify-content: center;
    }
    &__item {
      display: block;
      padding: 5px;
      &:not(:first-child) {
        border-left: 1px solid black;
      }
      &:nth-child(1) {
        width: 5%;
      }
      &:nth-child(2) {
        width: 5%;
      }
      &:nth-child(3) {
        width: 40%;
      }
      &:nth-child(4) {
        width: 50%;
      }
    }
  }
}
</style>
