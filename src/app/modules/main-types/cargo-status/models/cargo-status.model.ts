import { BaseModel } from "app/core/models/base-model";

export interface CargoStatusModel extends BaseModel {
    name?: string;
    code?: number;
}