/// <reference types="node" />
import SpecterRequest from "./request";
import SpecterResponse from "./response";
import { IncomingHttpHeaders } from "http";
declare type DefaultRequest = SpecterRequest<IncomingHttpHeaders, any, any>;
declare type DefaultResponse = SpecterResponse<any, any>;
export default class Service {
    name: string;
    config: {};
    constructor(name: string, config: {});
    execute<Response extends DefaultResponse>(req: DefaultRequest): Promise<Response>;
    create<Response extends DefaultResponse>(req: DefaultRequest): Promise<DefaultResponse>;
    read<Response extends DefaultResponse>(req: DefaultRequest): Promise<DefaultResponse>;
    update<Response extends DefaultResponse>(req: DefaultRequest): Promise<DefaultResponse>;
    delete<Response extends DefaultResponse>(req: DefaultRequest): Promise<DefaultResponse>;
    exist<Response extends DefaultResponse>(req: DefaultRequest): Promise<DefaultResponse>;
    preCheck(req: DefaultRequest): Promise<boolean>;
}
export {};
