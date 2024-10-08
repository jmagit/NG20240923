import { Component } from '@angular/core';
import { AuthService } from 'src/app/security';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { LoginComponent } from '../../security/login/login.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive, LoginComponent]
})
export class HeaderComponent {

  constructor(public auth: AuthService) { }

}
