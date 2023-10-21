 import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp"; 
import Home from "./Roster";
import { Salary } from "./Salary";

export const ROUTES = {
    HOME: "/",
    LOGIN: "/sign-in",
    SIGN_UP: "/sign-up",
    SALARY : "/salary",
  };
  

export const ROUTES_LIST = [
    { path: ROUTES.HOME, element: Home },
    { path: ROUTES.LOGIN, element: SignIn },
    { path: ROUTES.SIGN_UP, element: SignUp },
    { path: ROUTES.SALARY, element: Salary },

];
