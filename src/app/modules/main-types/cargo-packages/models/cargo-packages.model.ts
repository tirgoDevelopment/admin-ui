import { BaseModel } from "app/core/models/base-model";

export interface CargoPackagesModel extends BaseModel {
    name?: string;
    code?: string;
}