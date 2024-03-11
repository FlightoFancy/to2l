import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Dialog } from "antd-mobile";
import { ILoco } from "types/loco";

type LocoState = {
  list: ILoco[];
};

const initialLocoState: LocoState = {
  list: [],
};

const locoSlice = createSlice({
  name: "locomotives",
  initialState: {
    locomotives: initialLocoState,
  },
  reducers: {
    addLoco(state, action: PayloadAction<{ form: any }>) {
      const values = action.payload.form.getFieldsValue();
      const newLoco = {
        series: values.series,
        number: values.number,
        id: `${values.series}${values.number}`,
      };
      const dublicate = state.locomotives.list.find(
        (item) => item.id === newLoco.id
      );
      if (dublicate) {
        Dialog.alert({
          content: "Такой локомотив уже существует",
          confirmText: "Ок",
        });
      } else {
        state.locomotives.list.push(newLoco);
      }
    },
    deleteLoco(state, action: PayloadAction<string>) {
      state.locomotives.list = state.locomotives.list.filter(
        (loco) => loco.id !== action.payload
      );
    },
    addCountChock(state, action: PayloadAction<{ id: string; value: number }>) {
      const loco = state.locomotives.list.find(
        (loco) => loco.id === action.payload.id
      );
      if (loco) {
        loco.chockCount = action.payload.value;
      }
    },
    editReadyMech(
      state,
      action: PayloadAction<{ id: string; isReady: boolean }>
    ) {
      const loco = state.locomotives.list.find(
        (loco) => loco.id === action.payload.id
      );
      if (loco) {
        loco.isReady = action.payload.isReady;
      }
    },
    addExtraMech(state, action: PayloadAction<{ id: string; extra: string }>) {
      const loco = state.locomotives.list.find(
        (loco) => loco.id === action.payload.id
      );
      if (loco) {
        loco.extra = action.payload.extra;
      }
    },
  },
});

export const {
  addLoco,
  deleteLoco,
  addCountChock,
  editReadyMech,
  addExtraMech,
} = locoSlice.actions;
export default locoSlice.reducer;
