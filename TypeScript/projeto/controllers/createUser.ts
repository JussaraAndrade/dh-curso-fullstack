import { Controller } from '../interfaces/controller';
import { HTTPRequest, HTTPResponse } from '../interfaces/http';

//Validando
class CreateUserController implements Controller{
    
    handle(request: HTTPRequest): HTTPResponse{
        let { body } = request
        let requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
        for(let field of requiredFields){
            if(!body[field]){
                return {
                    status: 400
                }
            }
        }
        
        let { password, passwordValidation } = body

        if(password != passwordValidation){
            return {
                status: 400
            }
        }

        return {
            status: 200
        }
    }
}

export default CreateUserController