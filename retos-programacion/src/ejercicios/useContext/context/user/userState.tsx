import { useCallback, useReducer } from "react"
import userReducer, { type UserState as UserStateType } from "../user/useReducer"
import UserContext from "./userContext"
import axios from "axios"

type PropsType = {
    children: React.ReactNode
}

const UserState = ( props: PropsType ) => {
    const initialState: UserStateType = {
        users: [],
        selectedUser: null
    }

    const [state, dispatch] = useReducer(userReducer, initialState)

    const getUsers = useCallback(async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            dispatch({
                type: "GET_USERS",
                payload: res.data
            })
        } catch (error) {
            console.error("Error fetching users:", error)
        }
    }, [])

    const getProfile = useCallback(async (id: number) => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            dispatch({
                type: "SELECT_USER",
                payload: res.data
            })
        } catch (error) {
            console.error("Error fetching profile:", error)
        }
    }, [])

    

    return (
        <div>
            <UserContext.Provider value={{
                users: state.users ,
                selectedUser: state.selectedUser,
                getUsers, // funcion que me permite alterar el estado
                getProfile // funcion que me permite alterar el estado
            }}>
                {props.children}
            </UserContext.Provider>
        </div>
    )
}

export default UserState