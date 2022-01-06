// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyBy7ycgbSQrcep02SfhGI91OKdXntiVJQg',
  authDomain: 'top-helper.firebaseapp.com',
  projectId: 'top-helper',
  storageBucket: 'top-helper.appspot.com',
  messagingSenderId: '1000856120801',
  appId: '1:1000856120801:web:905960ed5d68fdcddcb6a0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
