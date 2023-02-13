import { AxiosResponse, http } from "./http.service";

// ถ้า respone กลับมาเป็น array ให้ใส่ type[] 
// ถ้าเป็น object ให้ใส่เป็น type ธรรมดา

export async function login(username: string, password: string):Promise<AxiosResponse<any>> {
  return await http.post<any>("https://api.codingthailand.com/api/login", {
    email: username,
    password: password,
  });
}


// การใช้ function โดยไม่มีการ return กลับให้ใส่ :void ตามหลังด้วย
export function logout(): void{
    localStorage.removeItem('token')
}