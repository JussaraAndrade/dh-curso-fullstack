import { Router } from 'express';

import { adapt } from '../adapter/expressRouter';
import CreateUserController from '../controllers/createUser';

const createUserController = new CreateUserController()

export default (router: Router): void => {
    router.post('/user', adapt(createUserController))
}