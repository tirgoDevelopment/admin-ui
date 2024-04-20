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
    managerLastName?: string;
    managerFirstName?: string;
    physicalAddress?:string;
    inn?: string;
    oked?: string;
    mfo?: string;
    bankBranchName?: string;
    registrationCertificatePath?: string;
    registrationCertificateFilePath?: string;
    managerPassportFilePath?: string;
    phoneNumbers?: string;
    bankAccounts?: any[];
    phoneNumber?: string;
    agentTransports?: any[];
    firstName?: string;
    lastName?: string;
    email?: string;
    blocked?: boolean;
    blockedAt?: string;
}