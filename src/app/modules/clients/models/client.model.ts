import { BaseModel } from "app/core/models/base-model";

export interface ClientModel extends BaseModel {
    name?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    email?: string;
    citizenship?: string;
}