import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { set } from '../services/storage.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(public actionSheetController : ActionSheetController, public router: Router) { }
  ngOnInit() {
    //go to expense page
    //this.router.navigateByUrl('/add-expense');
  }

  async chooseSomethingToAdd(){
    const actionSheet = await this.actionSheetController.create({
      header: 'أضف شيء جديد',
      //cssClass: 'my-custom-class',
      buttons: [{
        text: 'مصروف',
        //role: 'destructive',
        icon: 'cash',
       // id: 'delete-button',
        // data: {
        //   type: 'delete'
        // },
        handler: () => {
          console.log('add expense clicked');
          //go to expense page
          this.router.navigateByUrl('/add-expense');
        }
      }, {
        text: 'فاتورة',
        icon: 'file-tray-full',
       // data: 10,
        handler: () => {
          console.log('add invoice clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

}
