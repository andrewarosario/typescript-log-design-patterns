import { Analytics } from "../analytics/interfaces/analytics";
import { ErrorAnalytics } from "../analytics/interfaces/error-analytics";

export class MongoAnalyticsRepository implements Analytics, ErrorAnalytics {
    save(type: string, data: any): void {
        console.log('Mongo Analytics saved');
    }

    saveError(error: any): void {
        console.log('Mongo Error Analytics saved');
    }
}