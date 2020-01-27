/* Interfaz del token */

import  { ITokenPayload } from "./ITokenPayLoad";

export interface IAccount extends ITokenPayload{
    token:string;
}