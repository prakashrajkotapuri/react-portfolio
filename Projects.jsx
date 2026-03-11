import { useEffect,useState } from "react"
import axios from "axios"

export default function Projects(){

const [repos,setRepos]=useState([])

useEffect(()=>{

axios
.get("https://api.github.com/users/prakashrajkotapuri/repos")
.then(res=>setRepos(res.data))

},[])

return(

<section id="projects" style={section}>

<h2 style={{fontSize:"40px"}}>Projects</h2>

<div style={grid}>

{repos.slice(0,6).map(repo=>(

<div
key={repo.id}
style={card}
onMouseEnter={(e)=>{
e.currentTarget.style.transform="translateY(-10px) scale(1.05)"
e.currentTarget.style.boxShadow="0 0 25px #ffd000"
}}
onMouseLeave={(e)=>{
e.currentTarget.style.transform="translateY(0)"
e.currentTarget.style.boxShadow="0 10px 20px rgba(0,0,0,0.2)"
}}
>

<h3>{repo.name}</h3>

<p>{repo.description || "GitHub Repository"}</p>

<a
href={repo.html_url}
target="_blank"
style={{color:"black",fontWeight:"bold"}}
>
View Repo
</a>

</div>

))}

</div>

</section>

)

}

const section={
padding:"120px 20px",
textAlign:"center"
}

const grid={
display:"flex",
flexWrap:"wrap",
justifyContent:"center",
gap:"30px",
marginTop:"50px"
}

const card={
width:"260px",
padding:"25px",
borderRadius:"12px",
background:"#ffd000",
boxShadow:"0 10px 20px rgba(0,0,0,0.2)",
transition:"0.3s",
cursor:"pointer"
}
