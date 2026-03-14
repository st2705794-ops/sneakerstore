import "../styles/about.css"

function About(){

return(

<div className="about-container">

{/* HERO */}

<div className="about-hero">

<h1>About SneakerStore</h1>

<p>
SneakerStore is a modern sneaker shopping website built with React.
It offers a wide range of stylish and comfortable sneakers for both men and women.
Our goal is to provide a smooth, fast and enjoyable online shopping experience.
</p>

</div>


{/* STATS / RATING */}

<div className="stats">

<div className="stat-box">
<h2>4.8 ⭐</h2>
<p>Customer Rating</p>
</div>

<div className="stat-box">
<h2>500+</h2>
<p>Happy Customers</p>
</div>

<div className="stat-box">
<h2>200+</h2>
<p>Sneaker Collection</p>
</div>

</div>

</div>

)

}

export default About