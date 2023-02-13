import { http } from "./http.service";

export function login(username: string, password: string) {
  return http.post("https://api.codingthailand.com/api/login", {
    email: username,
    password: password,
  });
}
