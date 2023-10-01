import { NgModule } from '@angular/core';
import { SearchWidgetComponent } from './components/search-widget/search-widget.component';
import { FormsModule } from '@angular/forms';
import { UiModule } from '../../ui/ui.module';

@NgModule({
    imports: [FormsModule, UiModule],
    declarations: [SearchWidgetComponent],
    exports: [SearchWidgetComponent],
    providers: [],
})
export class SearchWidgetModule {}
