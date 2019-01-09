import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IStore } from 'app/shared/model/store.model';
import { StoreService } from './store.service';
import { ICheckInCount } from 'app/shared/model/check-in-count.model';
import { CheckInCountService } from 'app/entities/check-in-count';

@Component({
    selector: 'jhi-store-update',
    templateUrl: './store-update.component.html'
})
export class StoreUpdateComponent implements OnInit {
    store: IStore;
    isSaving: boolean;

    checkincounts: ICheckInCount[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected storeService: StoreService,
        protected checkInCountService: CheckInCountService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ store }) => {
            this.store = store;
        });
        this.checkInCountService.query().subscribe(
            (res: HttpResponse<ICheckInCount[]>) => {
                this.checkincounts = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.store.id !== undefined) {
            this.subscribeToSaveResponse(this.storeService.update(this.store));
        } else {
            this.subscribeToSaveResponse(this.storeService.create(this.store));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IStore>>) {
        result.subscribe((res: HttpResponse<IStore>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackCheckInCountById(index: number, item: ICheckInCount) {
        return item.id;
    }
}
