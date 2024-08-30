export interface TableItem {
  id: number;
  isChecked: boolean;
  name: string;
  address: string;
}

export type Table = TableItem[];

export interface TableSliceState {
  _tableFakeData: Table;
  isAllChecked: boolean;
  table: Table;
  itemsPerLoad: number;
  itemsLoadingStartPoint: number;
  isAllItemsLoaded: boolean;
}

export type TableEditingKeys = keyof Pick<TableItem, 'name' | 'address'>;

export type TableItemCreationData = Pick<TableItem, 'address' | 'name'>;
