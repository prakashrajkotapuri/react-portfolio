import { useState,useEffect } from "react"
import { FaGithub,FaLinkedin } from "react-icons/fa"

export default function Navbar(){

const [dark,setDark] = useState(false)
const [active,setActive] = useState("")

function toggleTheme(){

setDark(!dark)

document.body.style.background =
dark ? "white" : "#111"

document.body.style.color =
dark ? "black" : "white"

}

useEffect(()=>{

const sections=document.querySelectorAll("section")

window.addEventListener("scroll",()=>{

sections.forEach(sec=>{

const top=window.scrollY
const offset=sec.offsetTop-150
const height=sec.offsetHeight
const id=sec.getAttribute("id")

if(top>=offset && top<offset+height){

setActive(id)

}

})

})

},[])

return(

<nav style={nav}>

<h2>Prakashraj</h2>

<div style={menu}>

<a href="#skills" style={active==="skills"?activeLink:link}>Skills</a>

<a href="#projects" style={active==="projects"?activeLink:link}>Projects</a>

<button onClick={toggleTheme} style={toggle}>
Toggle Theme
</button>

<a href="https://github.com/prakashrajkotapuri" target="_blank" style={icon}>
<FaGithub size={22}/>
</a>

<a href="https://www.linkedin.com/in/prakashraj-kotapuri-sunnydj-91970b228" target="_blank" style={icon}>
<FaLinkedin size={22}/>
</a>

</div>

</nav>

)

}

const nav={
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"20px 50px",
background:"#111",
color:"white",
position:"fixed",
top:"0",
width:"100%",
zIndex:"1000"
}

const menu={
display:"flex",
alignItems:"center",
gap:"25px"
}

const link={
color:"white",
textDecoration:"none"
}

const activeLink={
color:"#ffd000",
fontWeight:"bold",
textDecoration:"none"
}

const icon={
color:"white",
display:"flex",
alignItems:"center"
}

const toggle={
padding:"6px 12px",
borderRadius:"6px",
border:"none",
cursor:"pointer"
}