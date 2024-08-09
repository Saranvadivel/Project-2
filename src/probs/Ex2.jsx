import { Ex1 } from "./ex1"

export const Ex2 = () => {
    const obj = {
        fname: "Saran",
        lname: "V",
        age: 21
    }
    return (
        <>
            <Ex1 brand={obj} />
        </>
    )
}