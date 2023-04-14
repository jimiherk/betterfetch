export type RequestMethods = "CONNECT" | "DELETE" | "GET" | "HEAD" | "OPTIONS" | "PATCH" | "POST" | "PUT" | "TRACE";

export interface ClientSettings {
    base?: string,
    headers?: HeadersInit,
}

export interface RequestSettings {
    method: RequestMethods,
    useBase?: boolean,
    headers?: HeadersInit,
    body?: BodyInit,
}
