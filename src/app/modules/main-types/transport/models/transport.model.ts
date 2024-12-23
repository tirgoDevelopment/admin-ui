import { BaseModel } from "app/core/models/base-model";


export interface TransportModel extends BaseModel {
    name: string;
    weight?: number;
    volume?: number;
    loading_side?: string;
    type?: number;
    trailer?: number;
}