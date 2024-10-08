import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormButtonsComponent } from './form-buttons/form-buttons.component';
import { ShowErrorsMessagesComponent } from './show-errors-messages/show-errors-messages.component';
import { ListButtonsComponent } from './list-buttons.component';
import { CardComponent } from './card.component';

@NgModule({
    exports: [
        FormButtonsComponent,
        ShowErrorsMessagesComponent,
        ListButtonsComponent,
        CardComponent,
    ],
    imports: [
        CommonModule,
        FormButtonsComponent,
        ShowErrorsMessagesComponent,
        ListButtonsComponent,
        CardComponent
    ]
})
export class CommonComponentsModule { }
