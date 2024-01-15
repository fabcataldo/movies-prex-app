import { IUser } from "./user.model";

export interface GetUserResponse {
    ok: boolean;
    user: IUser;
}