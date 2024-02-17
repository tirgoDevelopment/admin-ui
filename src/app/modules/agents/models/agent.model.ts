import { BaseModel } from "app/core/models/base-model";


export interface AgentModel extends BaseModel {
    fio?: string;
    login?: string;
    role?: string;
    dataAt?: string;
    lastDateAt?: string;
    phone?: string;
    password?: string;
    username?: string;
    companyName?: string;
    legalAddress?: string;
    actualAddress?: string;
    supervisorFirstName?: string;
    supervisorLastName?: string;
    inn?: string;
    oked?: string;
    mfo?: string;
    bankName?: string;
    registrationCertificate?: string;
    passportOwner?: string;
}