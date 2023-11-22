import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { provideAuth, getAuth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';

import { LoginComponent } from './Components/login/login.component';

const firebaseConfig = {
  apiKey: "AIzaSyBEcan3ne6SdzZoRLA6acr4pYO5IzvfeLA",
  authDomain: "netshoes-21a39.firebaseapp.com",
  projectId: "netshoes-21a39",
  storageBucket: "netshoes-21a39.appspot.com",
  messagingSenderId: "215294932795",
  appId: "1:215294932795:web:459d56600d4328ba39e91e",
  measurementId: "G-YF02S0XL3Q"
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
