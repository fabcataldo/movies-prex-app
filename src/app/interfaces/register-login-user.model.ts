import { IUser } from "./user.model"

export interface RegisterLoginUserResponse {
    ok: boolean
    token: string
    user: IUser
}