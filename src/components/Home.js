import React from "react";
  
function Home(props) {
    return(
    <div>
        <button onClick={()=>props.addToCartHandler({name:"MSBlobBuilder",price:100})}>clickme</button>
    </div>
  )
}
export default Home;