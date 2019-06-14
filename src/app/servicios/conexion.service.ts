import { Injectable } from '@angular/core';
import {firebase} from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';
import '@firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  firebase;
  storage;
  db;
  constructor() { 
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyBUt9R-_9DL3scYxU0RAD0syukhr2n3qd4",
        authDomain: "fefyde-6976d.firebaseapp.com",
        databaseURL: "https://fefyde-6976d.firebaseio.com",
        projectId: "fefyde-6976d",
        storageBucket: "fefyde-6976d.appspot.com",
        messagingSenderId: "615486626016"
      };
  firebase.initializeApp(config);
  this.firebase = firebase;
  this.storage = firebase.storage();
  this.db = firebase.firestore();
}

getstore(){
return this.db;
}
getstorage(){
  return this.storage;
  }
getauth(){
  return this.firebase.auth();
}

}
