import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SearchWidgetModule } from './widgets/search/search-widget.module';
import { TopBarModule } from './widgets/top-bar/top-bar.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, TopBarModule, SearchWidgetModule, UiModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
