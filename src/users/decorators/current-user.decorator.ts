import {
    createParamDecorator,
    ExecutionContext
} from '@nestjs/common'

//Wraps different connections: Http, graphql, websockets
export const CurrentUser = createParamDecorator(
    (data: never, context: ExecutionContext) => {
        const request = context.switchToHttp().getRequest();
        return request.currentUser;
    }
)