import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CountPersonApplicationStoreModule } from './store/store.module';
import { CountPersonApplicationCheckInCountModule } from './check-in-count/check-in-count.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        CountPersonApplicationStoreModule,
        CountPersonApplicationCheckInCountModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CountPersonApplicationEntityModule {}
