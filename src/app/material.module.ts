import {NgModule} from '@angular/core'
import {MatSidenavModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
@NgModule({
	imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule
    ],
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule
    ]
})
export class MaterialModule {}