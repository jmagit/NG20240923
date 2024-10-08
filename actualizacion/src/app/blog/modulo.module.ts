import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { BlogComponent, BLOG_COMPONENTES, BlogAddComponent, BlogEditComponent, BlogListComponent, BlogViewComponent } from './componente.component';
import {PaginatorModule} from 'primeng/paginator';
import {EditorModule} from 'primeng/editor';


const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: 'add', component: BlogAddComponent },
  { path: ':id/edit', component: BlogEditComponent },
  { path: ':id', component: BlogViewComponent },
  { path: ':id/:kk', component: BlogViewComponent },
];

@NgModule({
    exports: [
        // BLOG_COMPONENTES,
        BlogComponent,
        RouterModule,
    ],
    imports: [
    CommonModule, FormsModule, RouterModule.forChild(routes),
    PaginatorModule, EditorModule,
    BLOG_COMPONENTES,
]
})
export class BlogModule { }
