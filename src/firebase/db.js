import { firebaseApp } from './firebaseApp';
import { getDatabase } from 'firebase/database';

export const db = getDatabase(firebaseApp);
