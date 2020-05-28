import { MiddlewareFn } from 'type-graphql';
import { verify } from 'jsonwebtoken';

interface IToken {
  id: string;
  iat: string;
}

export const authMiddleware: MiddlewareFn<any> = async (_, next) => {
  console.log(_.context.req.headers);
  const result = await next();
  return result;
};

export const getId: MiddlewareFn<any> = async (_, next) => {
  const { id } = verify(
    _.context.req.headers.token.split(' ')[0],
    'mothySecret'
  ) as IToken;
  _.context.res.locals.userId = id;
  const result = await next();
  return result;
};
