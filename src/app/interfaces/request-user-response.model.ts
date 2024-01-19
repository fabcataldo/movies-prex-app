import { IUser } from "./user.model";

export interface RequestUserResponse {
    ok: boolean
    user: IUser
}