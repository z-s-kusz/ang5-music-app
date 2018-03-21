import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        NoopAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatTabsModule,
        MatDividerModule,
        MatIconModule,
        MatListModule,
        MatSelectModule,
        MatButtonModule
    ],
    exports: [
        NoopAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatTabsModule,
        MatDividerModule,
        MatIconModule,
        MatListModule,
        MatSelectModule,
        MatButtonModule
    ],
})
export class MaterialModule { }
