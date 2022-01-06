import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../database/firebaseConfig';

// CREATE
export const CREATE = async (name, table) => {
  const res = await addDoc(collection(db, name), table);
  return res;
};

// GET
export const GET = async (name) => {
  const res = await getDocs(collection(db, name));
  return res;
};

// REMOVE
export const DELETE = async (name) => {
  const res = await deleteDoc(doc(db, name, id));
  return res;
};

// UPDATE
export const UPDATE = async (name, upd) => {
  const res = await updateDoc(doc(db, name, id), upd);
  return res;
};
