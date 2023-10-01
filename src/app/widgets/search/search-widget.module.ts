import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { UiModule } from '../../ui/ui.module';
import { SearchWidgetComponent } from './components/search-widget/search-widget.component';

@NgModule({
    imports: [FormsModule, UiModule],
    declarations: [SearchWidgetComponent],
    exports: [SearchWidgetComponent],
    providers: [],
})
export class SearchWidgetModule {}
