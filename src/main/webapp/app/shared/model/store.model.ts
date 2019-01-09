import { ICheckInCount } from 'app/shared/model//check-in-count.model';

export interface IStore {
    id?: number;
    name?: string;
    address?: string;
    checkInCount?: ICheckInCount;
}

export class Store implements IStore {
    constructor(public id?: number, public name?: string, public address?: string, public checkInCount?: ICheckInCount) {}
}
