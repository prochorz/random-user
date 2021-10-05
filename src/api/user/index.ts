import { plainToClass } from 'class-transformer';

import example from './example.json';

import api from '../../services/api-http-service';
import { UserModel } from '../../transformers/user-model';

interface IUserDataResponse {
    results: Array<typeof example>
}

async function getUsers() {
    const params = {
        inc: 'name,picture,phone,email'
    };
    const { data } = await api.get<IUserDataResponse>('/', params);

    return data.results.map(item => plainToClass(UserModel, item, { excludeExtraneousValues: true }));
}

export {
    getUsers
};
