import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  TableEditingKeys,
  TableSliceState,
  TableItemCreationData,
} from '../types/table';
import mockData from '@shared/assets/mock/mockData.json';

const initialState: TableSliceState = {
  _tableFakeData: mockData,
  isAllChecked: false,
  table: mockData.slice(0, 30),
  itemsPerLoad: 30,
  itemsLoadingStartPoint: 30,
  isAllItemsLoaded: false,
};

export const TableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    changeTextAction: (
      state,
      {
        payload,
      }: PayloadAction<{
        itemId: number;
        text: string;
        editingKey: TableEditingKeys;
      }>
    ) => {
      const { itemId, text, editingKey } = payload;
      state.table.map((item) => {
        if (item.id === itemId) {
          item[editingKey] = text;
        }
      });
    },
    switchChekedAction: (
      state,
      { payload }: PayloadAction<{ itemId: number }>
    ) => {
      const { itemId } = payload;
      state.table.map((item) => {
        if (item.id === itemId) {
          item.isChecked = !item.isChecked;
        }
      });
    },
    checkAllAction: (state) => {
      const isAllCheckedReversed = !state.isAllChecked;
      state.table.map((item) => {
        item.isChecked = isAllCheckedReversed;
      });
      state.isAllChecked = isAllCheckedReversed;
    },
    deletItemsAction: (state) => {
      state.table = state.table.filter((item) => !item.isChecked);
      if (state.isAllChecked) state._tableFakeData = [];
      state.isAllChecked = false;
    },
    setTableItemAction: (
      state,
      { payload }: PayloadAction<TableItemCreationData>
    ) => {
      state.table.unshift({ ...payload, id: Date.now(), isChecked: false });
    },
    loadItemsAction: (state) => {
      const {
        itemsLoadingStartPoint,
        itemsPerLoad,
        isAllChecked,
        _tableFakeData,
      } = state;
      const itemsLoadingMax = itemsLoadingStartPoint + itemsPerLoad;
      let newItems = _tableFakeData.slice(
        itemsLoadingStartPoint,
        itemsLoadingMax
      );
      if (isAllChecked) {
        newItems = newItems.map((item) => {
          return {
            ...item,
            isChecked: true,
          };
        });
      }
      state.table = state.table.concat(newItems);
      if (newItems.length < itemsPerLoad) {
        state.isAllItemsLoaded = true;
      }
      state.itemsLoadingStartPoint = itemsLoadingMax;
    },
  },
});

export const {
  changeTextAction,
  switchChekedAction,
  checkAllAction,
  deletItemsAction,
  setTableItemAction,
  loadItemsAction,
} = TableSlice.actions;
export const { reducer: TableReducer } = TableSlice;
