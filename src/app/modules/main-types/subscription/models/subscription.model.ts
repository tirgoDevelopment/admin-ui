import { BaseModel } from "app/core/models/base-model";

export interface SubscriptionModel extends BaseModel {
    name: string;
    value: number;
    duration: number;
}