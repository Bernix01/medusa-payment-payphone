export * from './annulApi';
import { AnnulApi } from './annulApi';
export * from './buttonApi';
import { ButtonApi } from './buttonApi';
export * from './cancelApi';
import { CancelApi } from './cancelApi';
export * from './linksApi';
import { LinksApi } from './linksApi';
export * from './regionsApi';
import { RegionsApi } from './regionsApi';
export * from './reverseApi';
import { ReverseApi } from './reverseApi';
export * from './saleApi';
import { SaleApi } from './saleApi';
export * from './usersApi';
import { UsersApi } from './usersApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AnnulApi, ButtonApi, CancelApi, LinksApi, RegionsApi, ReverseApi, SaleApi, UsersApi];
