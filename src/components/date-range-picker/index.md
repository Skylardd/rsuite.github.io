# DateRangePicker 日期范围选择器

用于快速选择一个日期范围

* `<DateRangePicker>`

## 获取组件

```js
import { DateRangePicker } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<DateRangePicker>`

| 属性名称             | 类型`(默认值)`                                                                                                                                                                                  | 描述                                                            |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| appearance           | enum: 'default', 'subtle' `('default')`                                                                                                                                                         | 设置外观                                                        |
| block                | boolean                                                                                                                                                                                         | 堵塞整行                                                        |
| cleanable            | boolean `(true)`                                                                                                                                                                                | 可以清除选择值                                                  |
| container            | HTMLElement or (() => HTMLElement)                                                                                                                                                              | 设置渲染的容器                                                  |
| defaultOpen          | boolean                                                                                                                                                                                         | 默认打开                                                        |
| defaultValue         | Array&lt;Date&gt;                                                                                                                                                                             | 默认值                                                          |
| disabled             | boolean                                                                                                                                                                                         | 禁用组件                                                        |
| disabledDate         | (<br/>&nbsp;date: Date,<br/> &nbsp;selectDate: Array&lt;Date&gt;,<br/> &nbsp;selectedDone: boolean, <br/> &nbsp;target: 'CALENDAR', 'TOOLBAR_BUTTON_OK', 'TOOLBAR_SHORTCUT' <br/>)=>boolean | 禁用日期                                                        |
| hoverRange           | unions: 'week', 'month' or (date: Date)=> Array&lt;Date&gt;                                                                                                                                 | 点击日期时将选中的日期范围                                      |
| isoWeek              | boolean                                                                                                                                                                                         | ISO 8601 标准， 每个日历星期从星期一开始，星期日为第 7 天       |
| limitEndYear         | number `(1000)`                                                                                                                                                                                 | 相对当前选择日期，设置可选年份下限                              |
| locale               | Object [`(Locale)`](#Locale)                                                                                                                                                                    | 本地化对应的语言描述                                            |
| menuClassName        | string                                                                                                                                                                                          | 选项菜单的 className                                            |
| onChange             | (`value`:Array&lt;Date&gt;)=>void                                                                                                                                                             | 值改变后的回调函数                                              |
| onClose              | ()=>void                                                                                                                                                                                        | 关闭回调函数                                                    |
| onOk                 | (`value`:Array&lt;Date&gt;)=>void                                                                                                                                                             | 点击 `确定` 按钮后的回调函数                                    |
| onOpen               | ()=>void                                                                                                                                                                                        | 打开回调函数                                                    |
| onSelect             | (data:Date)=>void                                                                                                                                                                             | 选择日期的回调函数                                              |
| oneTap               | boolean                                                                                                                                                                                         | 是否点击一次就选定日期范围，可[配合 hoverRange 使用](#单击模式) |
| open                 | boolean                                                                                                                                                                                         | 打开 (受控)                                                     |
| placeholder          | string                                                                                                                                                                                          | 没有值时候默认显示内容                                          |
| placement            | enum: [Placement](#types) `('bottomLeft')`                                                                                                                                                      | 显示位置                                                        |
| ranges               | Array<[Range](#types)> [`(Ranges)`](#Ranges)                                                                                                                                                    | 快捷项配置，默认 `今天`,`昨天`，`最近 7 天`                     |
| toggleComponentClass | React.ElementType `('a')`                                                                                                                                                                       | 为组件自定义元素类型                                            |
| value                | Array&lt;Date&gt;                                                                                                                                                                             | 值 `受控`                                                       |

## Default

### Locale

```js
const Locale = {
  sunday: 'Su',
  monday: 'Mo',
  tuesday: 'Tu',
  wednesday: 'We',
  thursday: 'Th',
  friday: 'Fr',
  saturday: 'Sa',
  ok: 'OK',
  today: 'Today',
  yesterday: 'Yesterday',
  last7Days: 'Last 7 Days',
  hours: 'Hours',
  minutes: 'Minutes',
  seconds: 'Seconds'
};
```

### Ranges

```js
const Ranges = [
  {
    label: 'today',
    value: [setTimingMargin(new Date()), setTimingMargin(new Date(), 'right')]
  },
  {
    label: 'yesterday',
    value: [setTimingMargin(dateFns.addDays(new Date(), -1)), setTimingMargin(dateFns.addDays(new Date(), -1), 'right')]
  },
  {
    label: 'last7Days',
    value: [setTimingMargin(dateFns.subDays(new Date(), 6)), setTimingMargin(new Date(), 'right')]
  }
];
```
