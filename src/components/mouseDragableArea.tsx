import { useMousePointer } from "../customHooks"


const style = {
    width: "600px",
    height: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
}
const MouseDragableArea = () => {
    const { x, y } = useMousePointer()
    return (
        <div>
            <div style={style}>
                <h1>Mouse pointer position : x={x} , y={y}</h1>
            </div>
        </div>
    )
}


export default MouseDragableArea
