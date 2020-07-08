import { Log } from '../presentation/log';
import { Analytics } from './interfaces/analytics';

export class ActionLog implements Log {
    constructor(private readonly analytics: Analytics) {}

    event(type: Log.Type, data: Log.Data) {
        this.analytics.save(type, data.name)
    }
}

