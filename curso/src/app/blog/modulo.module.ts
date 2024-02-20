import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services';
import { BlogComponent, BLOG_COMPONENTES } from './componente.component';
import {PaginatorModule} from 'primeng/paginator';
import { CommonComponentsModule } from '../common-components';

@NgModule({
  declarations: [
    BLOG_COMPONENTES,
  ],
  exports: [
    // BLOG_COMPONENTES,
    BlogComponent,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
    MyCoreModule, CommonServicesModule,
    PaginatorModule, CommonComponentsModule, MyCoreModule,
  ]
})
export class BlogModule { }
