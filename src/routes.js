import Registration from "./pages/Registration";
import GoogleSignIn from "./pages/GoogleSignIn";
import Login from "./pages/Login";
import TestFirebaseDBWithNotes from "./pages/TestFirebaseDBWithNotes";
import Notion from "./pages/Notion";
import {G_REGISTRATION, LOGIN_ROUTE, NOTE, NOTION, REGISTRATION, TEST} from "./constants/route";

export const publicRoutes = [
    {
        path: REGISTRATION,
        component: Registration,
        exact: false
    },
    {
        path: G_REGISTRATION,
        component: GoogleSignIn,
        exact: false
    },
    {
        path: LOGIN_ROUTE,
        component: Login,
        exact: false
    },
    {
        path: TEST,
        component: TestFirebaseDBWithNotes,
        exact: false
    }
]

export const privateRoutes = [
    {
        path: NOTION,
        component: Notion,
        exact: true
    },
    {
        path: NOTE,
        component: Notion,
        exact: false
    }
]