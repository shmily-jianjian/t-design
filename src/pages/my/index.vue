<template>
  <div>
    <search-form v-model="searhForm" :search-options="searchOptions" @search="handleSearch" @reset="handleReset" />
    <Table />
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import SearchForm from './components/SearchForm.vue';
import Table from './components/Table.vue';
import type { SearchOption } from './components/typings';

const searhForm = ref({});

const searchOptions = ref<SearchOption[]>([
  {
    label: '合同名称',
    name: 'name',
    type: 'input',
    fieldProps: {
      placeholder: 'xxxx',
    },
  },
  {
    label: '时间范围',
    name: 'date1',
    type: 'date-range-picker',
    fieldProps: {
      enableTimePicker: true,
      format: 'YYYY-MM-DD HH:mm:ss',
    },
  },
  {
    label: '时间',
    name: 'date2',
    type: 'date-picker',
    fieldProps: {
      enableTimePicker: true,
      format: 'YYYY-MM-DD HH:mm:ss',
      style: {
        // width: 200,
      },
    },
  },
  {
    label: '合同状态',
    name: 'status',
    type: 'select',
    fieldProps: {
      clearable: true,
      filterable: true,
      options: [
        {
          label: '在线',
          value: 1,
        },
        {
          label: '离线',
          value: 2,
        },
      ],
    },
  },
]);

function handleSearch() {
  console.log(searhForm.value);
}

function handleReset() {}

watchEffect(() => {
  console.log(searhForm.value);
});
</script>
