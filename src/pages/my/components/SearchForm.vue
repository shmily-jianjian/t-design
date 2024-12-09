<template>
  <div class="search-form">
    <t-form :data="formData" :label-width="80" colon @reset="onReset" @submit="onSubmit">
      <t-row>
        <t-col :span="10">
          <t-row :gutter="[16, 24]">
            <t-col v-for="item in searchOptions" :key="item.name" :span="4">
              <t-form-item :name="item.name" :label="item.label">
                <component
                  :is="renderComponent(item.type)"
                  v-model="formData[item.name]"
                  style="width: 100%"
                  v-bind="item.fieldProps"
                />
              </t-form-item>
            </t-col>
          </t-row>
        </t-col>
        <t-col :span="2" class="operation-container">
          <t-button theme="primary" type="submit"> 查询 </t-button>
          <t-button type="reset" variant="base" theme="default"> 重置 </t-button>
        </t-col>
      </t-row>
    </t-form>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { SearchOption } from './typings';

interface IProps {
  modelValue: object;
  searchOptions: Array<SearchOption>;
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: () => ({}),
  searchOptions: () => [],
});
const emits = defineEmits(['update:modelValue', 'search', 'reset']);

const formData = computed({
  get() {
    const proxy = new Proxy(props.modelValue, {
      get(target, key) {
        return Reflect.get(target, key);
      },
      set(target, key, value) {
        emits('update:modelValue', {
          ...target,
          [key]: value,
        });
        return true;
      },
    });
    return proxy;
  },
  set() {
    console.log();
  },
});

function renderComponent(type) {
  return `t-${type}`;
}

function onReset() {
  emits('reset');
}

function onSubmit() {
  emits('search');
}
</script>

<style lang="less" scoped>
.search-form {
  background-color: var(--td-bg-color-container);
  padding: 30px 32px;
  border-radius: var(--td-radius-default);

  .operation-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
