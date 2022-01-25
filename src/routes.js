import GoogleSignIn from './pages/GoogleSignIn';
import Notion from './pages/Notion';
import { GOOGLE_REGISTRATION, NOTE, NOTION } from './constants/route';

export const publicRoutes = [
    {
        path: GOOGLE_REGISTRATION,
        component: GoogleSignIn,
        exact: false,
    },
];

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
