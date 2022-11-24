import { Guid } from "guid-typescript";

export class User {
    id: Guid;
    parentId: Guid;
    userTypeId: Guid;
    name: string;
    description: string;
    email: string;
    phone: string;
    web: string;
    lat: number;
    lon: number;
    address: string;
    urlImage: string;
    ts: Date;
    statusId: Guid;
    paypalEmail: string;
    paypalId: string;

    constructor(
        id: Guid,
        parentId: Guid,
        userTypeId: Guid,
        name: string,
        description: string,
        email: string,
        phone: string,
        web: string,
        lat: number,
        lon: number,
        address: string,
        urlImage: string,
        ts: Date,
        statusId: Guid,
        paypalEmail: string,
        paypalId: string
    ) {
        this.id = id;
        this.parentId = parentId;
        this.userTypeId = userTypeId;
        this.name = name;
        this.description = description;
        this.email = email;
        this.phone = phone;
        this.web = web;
        this.lat = lat;
        this.lon = lon;
        this.address = address;
        this.urlImage = urlImage;
        this.ts = ts;
        this.statusId = statusId;
        this.paypalEmail = paypalEmail;
        this.paypalId = paypalId;
    }
}