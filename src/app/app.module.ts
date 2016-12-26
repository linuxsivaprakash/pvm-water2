import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{AngularFireModule} from 'angularfire2';

export const firebaseConfig={
  apiKey: "AIzaSyDZObKn81kMsZm0HsrT5sZdlK6TPwyZ660",
    authDomain: "myproj-32b6f.firebaseapp.com",
    databaseURL: "https://myproj-32b6f.firebaseio.com",
    storageBucket: "myproj-32b6f.appspot.com",
    messagingSenderId: "6952002701"
}
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
