import { BaseModel } from "app/core/models/base-model";


export interface CurrencyModel extends BaseModel {
    name: string;
    code: number;
}