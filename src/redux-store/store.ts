// 1. import configureStore
// 2. export type RootState
// 3. export type AppDispatch

// หลังจากสร้าง Slice เรียบร้อยแล้ว
// 1. ให้ import slice หรือ reducer ที่ต้องการใช้นำมาใช้ใน configureStore

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";


export const store = configureStore({
    reducer : {
        authState : authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch