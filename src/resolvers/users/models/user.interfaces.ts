import { Document, Model } from 'mongoose';

export interface IUser<T = string> {
  userName: string;
  email: string;
  password: string;
}

export interface ILoginInput {
  email: string;
  password: string;
}

export interface IUserDocument extends Document, IUser {
  comparePassword: (password: string) => boolean;
}

export interface IUserModel extends Model<IUserDocument> {}
