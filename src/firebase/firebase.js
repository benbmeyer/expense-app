import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAJTEJCsTf82cMdWxudfGCcunpf1i8ULFM",
    authDomain: "expensify-5a3d7.firebaseapp.com",
    databaseURL: "https://expensify-5a3d7.firebaseio.com",
    projectId: "expensify-5a3d7",
    storageBucket: "expensify-5a3d7.appspot.com",
    messagingSenderId: "569869235953",
    appId: "1:569869235953:web:68240ea6bd51011f"
  };

firebase.initalizeApp(config);

const database = firebase.database();

export { firebase, database as default };