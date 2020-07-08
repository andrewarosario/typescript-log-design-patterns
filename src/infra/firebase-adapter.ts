import { Analytics } from "../analytics/interfaces/analytics";

export class FirebaseAdapter implements Analytics {
    save(type: string, data: any): void {
        console.log('Firebase Analytics saved');
    }
}