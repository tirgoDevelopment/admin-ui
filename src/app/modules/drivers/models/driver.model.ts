import { BaseModel } from "app/core/models/base-model";
import { MerchantModel } from "app/modules/merchant/models/merchanr.model";

export interface DriverModel extends BaseModel {
    name?: string;
    full_name?: string;
    contry_code?: string;
    firstName?:string;
    email?: string;
    lastName?: string;
    citizenship?: string;
    password?: string;
    phoneNumbers?:any[];
    driverTransports?:any[],
    phoneNumber?:string;
    phone?: string;
    type?: string;
    moderation?: string;
    register_date?: Date;
    last_enter?: Date;
    order?: boolean;
    geolocation?: boolean;
    subscribedAt?:string;  
    subscription?:any;
    driverLicense?:string;
    passport?:string;
    blocked?:boolean;
    passportFilePath:string;
    driverLicenseFilePath:string;
    driverMerchant?:MerchantModel;
}