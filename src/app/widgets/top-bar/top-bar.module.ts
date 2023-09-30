import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar.component';
import { RouterLink } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterLink],
    declarations: [TopBarComponent],
    exports: [TopBarComponent],
    providers: [],
})
export class TopBarModule {}
