import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoggerService } from '@my/core';
import { EventBusService, NavigationService, NotificationService, NotificationType } from './common-services';
import { Router } from '@angular/router';
import { LOGOUT_EVENT } from './security';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent /*implements OnInit*/ {
  // constructor(out: LoggerService) {
  //   out.error('Es un error')
  //   out.warn('Es un warn')
  //   out.info('Es un info')
  //   out.log('Es un log')
  // }

  constructor(nav: NavigationService,
    private router: Router, private eventBus: EventBusService) {
      this.eventBus.on(LOGOUT_EVENT, () => {
        this.router.navigateByUrl('/');
      })
    }

  // constructor(private notify: NotificationService) {}
  // ngOnInit(): void {
  //   this.notify.add('Inicio aplicación', NotificationType.info)
  // }

}
