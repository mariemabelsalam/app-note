
export interface IAddNote{
    msg: string
    note: UserNote
}

export interface UserNote {
    title: string
    content: string
    createdBy: string
    _id: string
    createdAt: string
    updatedAt: string
    __v: number
}
