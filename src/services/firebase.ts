import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAoBt8ASN38m_I7tiekbiGM-bMM7mtDvxk',
  authDomain: 'juarez-noe-web.firebaseapp.com',
  databaseURL: 'https://juarez-noe-web.firebaseio.com',
  projectId: 'juarez-noe-web',
  storageBucket: 'juarez-noe-web.appspot.com',
  messagingSenderId: '405854582241',
  appId: '1:405854582241:web:97fc10f8fe58bda3fc8ea0',
  measurementId: 'G-JGK33FJ45V',
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();

export const storage = firebase.storage();
