import { ErrorAnalytics } from "../analytics/interfaces/error-analytics";

export class LogglyAdapter implements ErrorAnalytics {
    saveError(error: any): void {
        console.log('Loggly saved');
    }
}