import { BaseModel } from "app/core/models/base-model";

export interface DriverModel extends BaseModel {
    name?: string;
    full_name?: string;
    contry_code?: string;
    firstName?:string;
    email?: string;
    lastName?: string;
    password?: string;
    phoneNumbers?:any[]
    phone?: string;
    type?: string;
    moderation?: string;
    register_date?: Date;
    last_enter?: Date;
    order?: boolean;
    geolocation?: boolean;
}