import { BaseModel } from "app/core/models/base-model";

export interface TransportCargoModel extends BaseModel {
    name: string;
    isMode: boolean
    count: number;
    description?: string;
}