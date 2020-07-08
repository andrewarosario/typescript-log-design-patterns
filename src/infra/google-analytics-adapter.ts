import { Analytics } from "../analytics/interfaces/analytics";

export class GoogleAnalyticsAdapter implements Analytics {
    save(type: string, data: any): void {
        console.log('Google Analytics saved');
    }
}