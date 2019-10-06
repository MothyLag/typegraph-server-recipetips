import { Schema, SchemaOptions, model, Model } from 'mongoose';
import { IUserDocument, IUserModel } from './user.interfaces';

const options: SchemaOptions = {
  timestamps: true
};

const userSchema: Schema<IUserDocument> = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 8
    }
  },
  options
);
userSchema.methods.comparePassword = function(pass: string) {
  return true;
};
export const UserModel: IUserModel = model<IUserDocument>('user', userSchema);
