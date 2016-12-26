import { Component } from '@angular/core';
import { Network } from 'ionic-native';
import { NavController ,AlertController,Platform} from 'ionic-angular';
import {AngularFire,FirebaseListObservable} from 'angularfire2';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
books:FirebaseListObservable<any[]>;
 navigator:Network;
 Connection:any;
  constructor(public navCtrl: NavController,af:AngularFire,public alertCtrl:AlertController,private platform:Platform) {


this.books = af.database.list('/Books');
this.checkNetwork();

  }

//

checkNetwork()
{
  this.platform.ready().then(()=>
  {
    
    console.log("network",Network.connection);

let network_alert=this.alertCtrl.create({
  title:"Connection states",
  subTitle:<string> Network.connection,
  buttons:[{title:"OK"}]
});

network_alert.present()
  })//tghen
}


//=======================
addSong()
{
  let prompt=this.alertCtrl.create(
    {
      title:"Enter item name",
      message:"Ente the correct value",
      inputs:[

                {
                  name:"title",
                  placeholder:"title"
                }
                ,
                {
                  name:"author",
                  placeholder:"Author"
                }
              ],
      buttons:[
                {
                  text:"Cancel",
                  handler:data=>
                    {
                    console.log(data);
                    }
                },
                
                 {
                    text:"Save",
                    handler:data=>
                    {
                      this.books.push(
                        {
                        "title":data.title,
                        "author":data.author
                        }
                        )
                    }
                  }
              ]//buttons
    }
  );

  prompt.present();
}
 
editBook(book)
{
  let prompt=this.alertCtrl.create(
    {
      title:"Edit book",
      message:"Edit the values",
      inputs:[

                {
                  name:"title",
                  placeholder:book.title
                }
                ,
                {
                  name:"author",
                  placeholder:book.author
                }
              ],
      buttons:[
                {
                  text:"Cancel",
                  handler:data=>
                    {
                    console.log(data);
                    }
                },
                
                 {
                    text:"Save",
                    handler:data=>
                    {
                      let newTitle=book.title;
                      let newAuthor=book.author;
                      
                      if(data.title!='')
                        {
                        newTitle=data.title;
                        }

                      this.books.update(book.$key,
                        {
                        "title":newTitle,
                        "author":newAuthor
                        }
                        )
                    }
                  }
              ]//buttons
    }
  );

  prompt.present();
}


deleteBook(bookId):void
{
  let prompt=this.alertCtrl.create(
    {
      title:"Delete",
      
      buttons:[
                {
                  text:"Cancel",
                  handler:data=>
                    {
                    console.log(data);
                    }
                },
                
                 {
                    text:"Delete",
                    handler:data=>
                    {
                      this.books.remove(  bookId       )
                    }
                  }
              ]//buttons
    }
  );

  prompt.present();
}

/*get Score()
{
  const letters=(this.name1+this.name2).toLowerCase()
  let sum=0;
  for(let i=0;i<letters.length;i++)
    sum=letters.charCodeAt(i);
  return sum%101;
}*/
}
