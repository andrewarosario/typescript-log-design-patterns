import { LoginView } from '../presentation/login-view';
import { LogStrategy } from '../analytics/log-strategy';
import { ErrorLog } from '../analytics/error-log';
import { ActionLog } from '../analytics/action-log';
import { ScreenLog } from '../analytics/screen-log';
import { SentryAdapter } from '../infra/sentry-adapter';
import { FirebaseAdapter } from '../infra/firebase-adapter';
import { ErrorAnalyticsComposite } from '../infra/error-analytics-composite';
import { LogglyAdapter } from '../infra/loggly-adapter';
import { MongoAnalyticsRepository } from '../infra/mongo-analytics-repository';

export const makeLoginView = (): LoginView => {
    const firebaseAdapter = new FirebaseAdapter();
    const errorAnalyticsComposite = new ErrorAnalyticsComposite([
        new SentryAdapter(),
        new LogglyAdapter(),
        new MongoAnalyticsRepository()
    ]);
    const errorLog = new ErrorLog(errorAnalyticsComposite);
    const actionLog = new ActionLog(firebaseAdapter);
    const screenLog = new ScreenLog(firebaseAdapter);

    const logStrategy = new LogStrategy(errorLog, actionLog, screenLog);
    return new LoginView(logStrategy);
}