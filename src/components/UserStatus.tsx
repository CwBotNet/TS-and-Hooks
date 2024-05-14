import { useIsOnline } from "../customHooks"

const UserStatus = () => {
    const online = useIsOnline()



    return (
        <div>{online ? <div style={{
            color: "green",
            fontSize: "2rem",
        }}>
            online
        </div>
            : <div style={{
                color: "red",
                fontSize: "2rem",
            }}>
                offline
            </div>}</div>
    )
}

export default UserStatus