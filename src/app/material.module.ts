import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    imports: [
        NoopAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        MatProgressSpinnerModule
    ],
    exports: [
        NoopAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        MatProgressSpinnerModule
    ],
})
export class MaterialModule { }
