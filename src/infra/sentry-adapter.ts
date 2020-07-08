import { ErrorAnalytics } from "../analytics/interfaces/error-analytics";

export class SentryAdapter implements ErrorAnalytics {
    saveError(error: any): void {
        console.log('Sentry saved');
    }
}