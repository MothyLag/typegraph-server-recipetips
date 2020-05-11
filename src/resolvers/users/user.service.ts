import { Service } from 'typedi';
import { UserModel } from './models/user.schema';
import { IUser, IUserDocument } from './models/user.interfaces';
import { ObjectId } from 'bson';
import { from } from 'rxjs';
import { map, concatMap, tap } from 'rxjs/operators';
import { ForbiddenError, UserInputError } from 'apollo-server';
import { LoggUserInput } from './inputs/loggUser.input';
import { sign } from 'jsonwebtoken';

@Service()
export class UserService {
  private findUserById(id: ObjectId) {
    return from(UserModel.findById(id).exec());
  }

  private _countByEmail(email: string) {
    return from(UserModel.countDocuments({ email })).pipe(
      map((emailCount) => emailCount >= 1)
    );
  }

  private _create(data: IUser) {
    return from(new UserModel(data).save());
  }

  private _validate(exist: boolean, data: IUser) {
    return this._create(data);
  }

  create(data: IUser) {
    return this._countByEmail(data.email)
      .pipe(
        tap((exist) => {
          if (exist) throw new ForbiddenError('usuario ya existente');
        }),
        concatMap(() => this._create(data)),
        map((user) => ({
          userName: user.userName,
          token: sign({ id: user._id.toString() }, 'mothySecret'),
        }))
      )
      .toPromise();
  }

  private _searchUserByEmailORUser(email: string) {
    return from(
      UserModel.findOne({ $or: [{ userName: email }, { email: email }] }).exec()
    ).pipe(
      map((value) => {
        if (!value)
          throw new UserInputError(
            'este usuario no esta registrado-' + Date.now()
          );
        return value;
      })
    );
  }

  private _comparePassword(password: string, user: IUserDocument) {
    return from(this._searchUserByEmailORUser(user.email)).pipe(
      map((dbUser) => {
        if (!dbUser || dbUser.password != password)
          throw new UserInputError('contraseña incorrecta');
        return dbUser;
      })
    );
  }

  login(user: LoggUserInput) {
    return this._searchUserByEmailORUser(user.email)
      .pipe(
        concatMap((logged) => this._comparePassword(user.password, logged)),
        map((user) => ({
          userName: user.userName,
          token: sign({ id: user._id.toString() }, 'mothySecret'),
        }))
      )
      .toPromise();
  }
}
