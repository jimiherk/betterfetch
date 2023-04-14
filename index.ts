import * as types from './types.ts';

export default class BFC {
    public settings: types.ClientSettings;
    constructor(settings: types.ClientSettings) {
        if (!settings.headers) settings.headers = {};
        this.settings = settings;
    }

    public async fetch(url: string, settings: types.RequestSettings): Promise<Response> {
        if (settings.useBase) {
            if (!this.settings.base) throw new Error("No base URL is provided!");
            url = this.settings.base + url;
        }

        if (!settings.headers) settings.headers = {};

        return fetch(url, {
            method: settings.method,
            headers: {
                ...settings.headers,
                ...this.settings.headers,
            },
            body: settings.body,
        });
    }
}