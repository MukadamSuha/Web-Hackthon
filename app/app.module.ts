import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ListViewModule } from '@progress/kendo-angular-listview';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        ListViewModule
    ],
    declarations: [
        AppComponent,
        ContactComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
