import React, { useState, useEffect } from "react";
function Navbar() {
const [cards, setCards] = useState([]);
const sortCards = () => {
const sortedcard2= [...cards].sort(function (a, b) {
return a - b;
});     
setCards(sortedcard2);
};
const addItemToStart = () => {
const rand = Math.floor(Math.random() * 1000);
setCards(existingItems => {
return [rand, ...cards]
})
}
const removeElement = (index) => {
const newCards = cards.filter((_, i) => i !== index);
setCards(newCards);
};
useEffect(() => {
setCards(cards);
},[]);
return (
<div className="container-fluid">
   <nav
   id="tops"
   className="navb,ar navbar-expand-lg navbar-dark"
   style={{ marginBottom: "0px", background: "#6749a9" }}
   >
   <ul className="navbar-nav ml-auto nav-flex-icons">
      <li class="nav-item">
         <button
            className="btn btn-primary "
            style={{margin:'.5em'}}
            onClick={addItemToStart}
            >
         <i class="fa fa-plus fa-lg text-white"></i> add card
         </button>
      </li>
      <li className="nav-item">
         <a
         className={({ isActive }) => (isActive ? "active  " : "")}
         to="#"
         end
         >
   
         <button
         className="btn "
         onClick={sortCards}
         style={{ background: "orange",margin:'.5em'}} 
         >
         <i class="fa fa-sort  fa-lg"></i> sort cards
         </button>
         </a>
      </li>
   </ul>
   </nav>
   <div className="row">
      <div className="col-md-12">
         <h2 className="text-ce,nter">
            Random Number Generator and Sorting Application
         </h2>
         <br/><br/>
      </div>
      <div className="col-md-9 card">
         <div style={{height:'400px',background:'rgba(99,55,55,.1)',maxHeight:'350px', overflowX:'scroll'}}> 
         <div className="row">
            {cards.map((value,index) => (
            <div className="col-md-4">
               <div
               className="card"
               key={index}
               style={{
               textAlign: "center",
               padding: "0px 20px 20px 20px",
               margin: "15px",
               height: "80px",
               }}
               >
               <div style={{ position: "relative" }}>
               <div style={{ position: "absolute", left: "97%", top: "" }}>
               <i  onClick={() => removeElement(index)} className="fa fa-times text-danger"></i>
            </div>
         </div>
         <div style={{ marginTop: "2em" }}>{value}
      </div>
   </div>
</div>
))}
</div>
</div>
</div>
<div className="col-md-3">
   <div className="card">
      <div className='card-body'>
         <h2>Instructions</h2>
         <p>Press Add Card button in order to add the cards in the container with a random number.<br/>
            click the Button with the Label sort card in order to sort the cards in the container
         </p>
      </div>
   </div>
</div>
</div>
</div>
);
}
export default Navbar;