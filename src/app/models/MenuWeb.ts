export interface MenuWeb {
    "id": number,
    "name": string,
    "code": string,
    "subMenu": {} | null,
    "webId": number,
    "level": number,
    "link": string | null,
    "order": string,
    "systemCode": string | null,
    "onlyPvp": boolean
}