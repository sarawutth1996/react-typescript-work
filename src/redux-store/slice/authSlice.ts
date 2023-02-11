import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { authLogin } from "./slice-type/authSlice.Type";



const initialState: authLogin = {
  username: "ROOT",
  password: "123456",
  profile : {
    nickname : "",
    role : ""
  }
};



export const authSlice = createSlice({
  name: "authState",
  initialState: initialState,
  reducers: {
    loginAction: (state, data):void =>{
        state.username = (data.payload?.username) ? data.payload.username  : state.username
        state.password = (data.payload?.password) ? data.payload.password  : state.password
    },

    updateProfileAction : (state,data):void => {
        state.profile.nickname = data.payload?.nickname;
        state.profile.role =  data.payload?.role;
    }
  },
});

// export function ที่ต้องการนำไปใช้
export const { loginAction, updateProfileAction} = authSlice.actions;

// export เพื่อนำไประบุในหน้า store ใน fuunction reducers : { authState : authReducer}
export const authReducer = (state: RootState) => state.authState

// export authSlice นำไปใช้ในหน้า store
export default authSlice.reducer;
