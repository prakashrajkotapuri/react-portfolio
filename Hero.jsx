import { TypeAnimation } from "react-type-animation"

export default function Hero(){

return(

<section className="hero-section">

<h1 style={{fontSize:"60px"}}>
Hi I'm Prakashraj Kotapuri
</h1>

<TypeAnimation
sequence={[
"Python Developer",
2000,
"Web Developer",
2000,
"AI Enthusiast",
2000
]}
speed={50}
repeat={Infinity}
/>

<div style={{marginTop:"30px"}}>

<a href="/Prakash Raju.pdf" download className="gradient-btn">
Download Resume
</a>

<a
href="https://github.com/prakashrajkotapuri"
target="_blank"
className="gradient-btn"
>
GitHub
</a>

<a
href="https://www.linkedin.com/in/prakashraj-kotapuri-sunnydj-91970b228"
target="_blank"
className="gradient-btn"
>
LinkedIn
</a>

</div>

</section>

)

}