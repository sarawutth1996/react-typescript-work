// 1. กำหนด useAppDispatch อ้างอิงจากหน้า store ที่เราได้ทำการประกาศไว้ เพื่อเรียกใช้ update action ในหน้า page
// 2. กำหนด useAppSelector  เพื่อเรียกใช้ดึงข้อมูลมาใช้ในหน้า page

import { useDispatch , useSelector } from "react-redux/es/exports";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch: ()=> AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector