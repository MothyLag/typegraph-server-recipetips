import * as mongoose from 'mongoose';
import { startSession } from 'mongoose';
import { of, from } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

export class DataBase {
  // private readonly URI =
  private readonly URI =
    'mongodb+srv://MothyLag:robomotymon100613@cluster0-cw6gu.mongodb.net/recipetips?retryWrites=true&w=majority';
  //private readonly URI = 'mongodb://localhost:27017/recipetips';
  connect() {
    try {
      mongoose.connect(this.URI, { useNewUrlParser: true });
    } catch (error) {
      console.log(error);
    }
  }

  startTransaction$() {
    return from(startSession()).pipe(
      concatMap((session) =>
        of(session.startTransaction()).pipe(map(() => session))
      )
    );
  }
  commitTransaction$(session: mongoose.ClientSession) {
    return from(session.commitTransaction());
  }
}
