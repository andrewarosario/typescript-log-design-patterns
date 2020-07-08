import { Log } from '../presentation/log';
import { ErrorAnalytics } from './interfaces/error-analytics';

export class ErrorLog implements Log {
    constructor(private readonly errorAnalytics: ErrorAnalytics) {}

    event(type: Log.Type, data: Log.Data) {
        this.errorAnalytics.saveError(data.error)
    }
}

