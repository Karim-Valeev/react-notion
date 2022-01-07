import Registration from "./pages/Registration";
import GoogleSignIn from "./pages/GoogleSignIn";
import Login from "./pages/Login";
import TestFirebaseDBWithNotes from "./pages/TestFirebaseDBWithNotes";
import Notion from "./pages/Notion";
import {G_REGISTRATION, LOGIN_ROUTE, NOTION, REGISTRATION, TEST} from "./constants/route";

export const publicRoutes = [
    {
        path: REGISTRATION,
        component: Registration
    },
    {
        path: G_REGISTRATION,
        component: GoogleSignIn
    },
    {
        path: LOGIN_ROUTE,
        component: Login
    },
    {
        path: TEST,
        component: TestFirebaseDBWithNotes
    }
]

export const privateRoutes = [
    {
        path: NOTION,
        component: Notion
    }
]