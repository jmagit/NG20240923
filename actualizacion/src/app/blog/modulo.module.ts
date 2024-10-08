import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services';
import { BlogComponent, BLOG_COMPONENTES, BlogAddComponent, BlogEditComponent, BlogListComponent, BlogViewComponent } from './componente.component';
import {PaginatorModule} from 'primeng/paginator';
import {EditorModule} from 'primeng/editor';
import { CommonComponentsModule } from '../common-components';

const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: 'add', component: BlogAddComponent },
  { path: ':id/edit', component: BlogEditComponent },
  { path: ':id', component: BlogViewComponent },
  { path: ':id/:kk', component: BlogViewComponent },
];

@NgModule({
  declarations: [
    BLOG_COMPONENTES,
  ],
  exports: [
    // BLOG_COMPONENTES,
    BlogComponent,
    RouterModule,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(routes),
    MyCoreModule, CommonServicesModule,
    PaginatorModule, CommonComponentsModule, MyCoreModule, EditorModule,
  ]
})
export class BlogModule { }
