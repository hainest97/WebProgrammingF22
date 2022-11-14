import { reactive } from "vue";

const session = reactive({
  user: null as User | null,
});

export function login(Email: string, Name: string, Password: string){
  session.user = {
    Email,
    Name,
    Password
  };
}
export function logout(){
  session.user = null;
}
export interface User {
  Email: string;
  Name: string;
  Password?:string;
  
  
}
export default session;