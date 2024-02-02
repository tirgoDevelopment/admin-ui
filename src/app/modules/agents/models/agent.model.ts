import { BaseModel } from "app/core/models/base-model";


export interface AgentModel extends BaseModel {
    fio?: string;
    login?: string;
    role?: string;
    dataAt?: string;
    lastDateAt?: string;
    phone?: string;
    password?: string;
}