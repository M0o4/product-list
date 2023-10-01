import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgModule } from '@angular/core';

import { TopBarComponent } from './components/top-bar.component';

@NgModule({
    imports: [CommonModule, RouterLink],
    declarations: [TopBarComponent],
    exports: [TopBarComponent],
    providers: [],
})
export class TopBarModule {}
