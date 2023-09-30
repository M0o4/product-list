import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TopBarComponent],
    exports: [TopBarComponent],
    providers: [],
})
export class TopBarModule {}
