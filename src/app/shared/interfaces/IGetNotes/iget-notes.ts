export interface IGetNotes {
    msg: string
    notes: AllNote[]
}

export interface AllNote {
    _id: string
    title: string
    content: string
    createdBy: string
    createdAt: string
    updatedAt: string
    __v: number
}
