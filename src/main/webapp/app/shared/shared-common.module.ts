import { NgModule } from '@angular/core';

import { CountPersonApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CountPersonApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CountPersonApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CountPersonApplicationSharedCommonModule {}
