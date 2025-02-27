export interface ISignUpFail {
    msg: string
    statusCode: number
}
export interface ISignUpSucc {
    msg: string
    user: User
}

export interface User {
    name: string
    email: string
    password: string
    age: number
    phone: string
    role: string
    _id: string
    createdAt: string
    updatedAt: string
    __v: number
}
