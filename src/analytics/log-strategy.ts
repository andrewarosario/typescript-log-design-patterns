import { Log } from '../presentation/log';
import { ErrorLog } from './error-log';
import { ActionLog } from './action-log';
import { ScreenLog } from './screen-log';

export class LogStrategy implements Log {
    constructor(
        private readonly errorLog: ErrorLog,
        private readonly actionLog: ActionLog,
        private readonly screenLog: ScreenLog,
    ) {}

    event(type: Log.Type, data: Log.Data): void {
        const types = {
            action: this.actionLog.event,
            screen: this.screenLog.event,
            error: this.errorLog.event
        };

        return types[type](type, data);
    }


}