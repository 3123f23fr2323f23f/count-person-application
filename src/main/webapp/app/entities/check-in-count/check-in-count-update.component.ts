import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';

import { ICheckInCount } from 'app/shared/model/check-in-count.model';
import { CheckInCountService } from './check-in-count.service';

@Component({
    selector: 'jhi-check-in-count-update',
    templateUrl: './check-in-count-update.component.html'
})
export class CheckInCountUpdateComponent implements OnInit {
    checkInCount: ICheckInCount;
    isSaving: boolean;
    countDate: string;

    constructor(protected checkInCountService: CheckInCountService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ checkInCount }) => {
            this.checkInCount = checkInCount;
            this.countDate = this.checkInCount.countDate != null ? this.checkInCount.countDate.format(DATE_TIME_FORMAT) : null;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.checkInCount.countDate = this.countDate != null ? moment(this.countDate, DATE_TIME_FORMAT) : null;
        if (this.checkInCount.id !== undefined) {
            this.subscribeToSaveResponse(this.checkInCountService.update(this.checkInCount));
        } else {
            this.subscribeToSaveResponse(this.checkInCountService.create(this.checkInCount));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<ICheckInCount>>) {
        result.subscribe((res: HttpResponse<ICheckInCount>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
