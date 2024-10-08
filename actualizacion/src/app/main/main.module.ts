import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { NotificationModalComponent } from './notification-modal/notification-modal.component';
import { CommonServicesModule } from '../common-services';
import { HomeComponent } from './home/home.component';
import { AjaxWaitComponent } from './ajax-wait';
import { SecurityModule } from '../security';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    NotificationComponent, NotificationModalComponent, HomeComponent, AjaxWaitComponent, PageNotFoundComponent, HeaderComponent
  ],
  exports: [
    NotificationComponent, NotificationModalComponent, HomeComponent, AjaxWaitComponent, PageNotFoundComponent, HeaderComponent
  ],
  imports: [
    CommonModule, CommonServicesModule, RouterModule.forChild([]), SecurityModule,
  ]
})
export class MainModule {
  constructor( @Optional() @SkipSelf() parentModule: MainModule) {
    if (parentModule) {
      const msg = `MainModule has already been loaded.
        Import MainModule once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
}
