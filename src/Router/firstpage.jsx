import { NavLink, Outlet } from "react-router-dom"


export const Firstpage=()=>{
return(
    <>
  <NavLink to="/home">Home</NavLink>
  <NavLink to="/Contact">Contact</NavLink>
  <Outlet/>
  {/* <NavLink hrefLang="#"></NavLink> */}
    </>
)
}