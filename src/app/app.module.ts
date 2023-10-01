import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarModule } from './widgets/top-bar/top-bar.module';
import { SearchWidgetModule } from './widgets/search/search-widget.module';
import { UiModule } from './ui/ui.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, TopBarModule, SearchWidgetModule, UiModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
