// ระบุ Type เพื่อนำมาใช้ในหน้า Slice 
interface authProfile {
  profile :{
    nickname: string;
    role: string;
  }
}

// extends คุณสมบัติ ของ authProfile มาใช้
export interface authLogin extends authProfile {
  username: string;
  password: string;
};