import { BaseModel } from "app/core/models/base-model";

export interface UserActivityModel extends BaseModel {
    name?: string;
    full_name?: string;
    contry_code?: string;
    phone?: string;
    type?: string;
    moderation?: string;
    register_date?: Date;
    last_enter?: Date;
    order?: boolean;
    geolocation?: boolean;
}