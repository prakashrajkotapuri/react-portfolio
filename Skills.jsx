export default function Skills(){

return(

<section
id="skills"
style={{
padding:"120px 20px",
textAlign:"center"
}}
>

<h2 style={{fontSize:"40px"}}>Skills</h2>

<div style={{maxWidth:"500px",margin:"50px auto"}}>

{skill("Python","90%")}
{skill("React","80%")}
{skill("JavaScript","75%")}

</div>

</section>

)

}

function skill(name,width){

return(

<div style={{marginBottom:"30px"}}>

<p>{name}</p>

<div style={bar}>
<div style={{...fill,width}}>{width}</div>
</div>

</div>

)

}

const bar={
width:"100%",
background:"#ddd",
borderRadius:"20px",
overflow:"hidden"
}

const fill={
height:"20px",
background:"red",
color:"white",
textAlign:"center",
lineHeight:"20px"
}