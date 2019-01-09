import { Moment } from 'moment';

export interface ICheckInCount {
    id?: number;
    personIn?: number;
    personout?: number;
    countDate?: Moment;
}

export class CheckInCount implements ICheckInCount {
    constructor(public id?: number, public personIn?: number, public personout?: number, public countDate?: Moment) {}
}
