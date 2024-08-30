export { TableColumn } from './ui/TableColumn/TableColumn';
export { TableRow } from './ui/TableRow/TableRow';

export type {
  Table,
  TableItemCreationData,
  TableItem,
  TableEditingKeys,
} from './model/types/table';
export { TableReducer } from './model/slice/TableSlice';
export { getTableState } from './model/selectors/getTableState';
export { getIsAllChecked } from './model/selectors/getIsAllChecked';
export { getIsAllItemsLoaded } from './model/selectors/getIsAllItemsLoaded';

export {
  changeTextAction,
  switchChekedAction,
  checkAllAction,
  deletItemsAction,
  setTableItemAction,
  loadItemsAction,
} from './model/slice/TableSlice';
