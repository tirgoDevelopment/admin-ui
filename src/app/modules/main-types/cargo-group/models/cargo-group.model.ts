import { BaseModel } from "app/core/models/base-model";


export interface CargoGroupModel extends BaseModel {
    name: string;
    codeTNVED: string;
}