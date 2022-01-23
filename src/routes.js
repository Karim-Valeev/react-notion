import Registration from './pages/Registration';
import GoogleSignIn from './pages/GoogleSignIn';
import Login from './pages/Login';
import TestFirebaseDBWithNotes from './pages/TestFirebaseDBWithNotes';
import Notion from './pages/Notion';
import { GOOGLE_REGISTRATION, LOGIN_ROUTE, NOTE, NOTION, REGISTRATION, TEST } from './constants/route';

export const publicRoutes = [
    {
        path: REGISTRATION,
        component: Registration,
        exact: false,
    },
    {
        path: GOOGLE_REGISTRATION,
        component: GoogleSignIn,
        exact: false,
    },
    {
        path: LOGIN_ROUTE,
        component: Login,
        exact: false,
    },
    {
        // todo удалить когда станет не нужно
        path: TEST,
        component: TestFirebaseDBWithNotes,
        exact: false,
    },
];

// Изменяется только правая часть экрана, левая SideBar, т.е. это одна страница.
// Рендерит один и тот же компонент, но пути отличаются.
export const privateRoutes = [
    {
        path: NOTION,
        component: Notion,
        exact: true,
    },
    {
        path: NOTE,
        component: Notion,
        exact: false,
    },
];
