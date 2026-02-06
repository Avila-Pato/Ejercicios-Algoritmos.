export type User = {
    id: number
    name: string
    username: string
    email: string
    phone: string
}

export type UserState = {
    users: User[]
    selectedUser: User | null
}

type Action =
    | { type: "GET_USERS"; payload: User[] }
    | { type: "SELECT_USER"; payload: User | null }

const userReducer = (state: UserState, action: Action): UserState => {
    switch (action.type) {
        case "GET_USERS":
            return { ...state, users: action.payload }
        case "SELECT_USER":
            return { ...state, selectedUser: action.payload }
        default:
            return state
    }
}

export default userReducer
