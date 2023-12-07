import {v4 as uuid} from 'uuid';

export default class ClientId {
    public generate_client_id(): string {
        const id: string = uuid();
        return id;
    }
}
