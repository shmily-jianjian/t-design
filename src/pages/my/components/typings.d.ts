import type { Input, Select, DatePicker, DateRangePicker, Switch } from 'tdesign-vue-next';

// 类型映射，将组件类型映射到对应的 fieldProps 类型
export type FieldPropsMap = {
  input: InstanceType<typeof Input>['$props'];
  select: InstanceType<typeof Select>['$props'];
  switch: InstanceType<typeof Switch>['$props'];
  'date-picker': InstanceType<typeof DatePicker>['$props'];
  'date-range-picker': InstanceType<typeof DateRangePicker>['$props'];
};

// 定义所有组件的类型
export type ComponentType = keyof FieldPropsMap;

// 定义 SearchOption 的基础属性
interface BaseOption {
  label: string;
  name: string;
}

// 基于 type 映射定义 Discriminated Union
export type SearchOption = BaseOption &
  {
    [K in ComponentType]: K extends keyof FieldPropsMap ? { type: K; fieldProps: FieldPropsMap[K] } : never;
  }[ComponentType];
