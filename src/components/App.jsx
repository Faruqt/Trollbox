import React from "react"
import Header from "./Header";
import Footer from "./Footer";
import Product from "./Productcards";
import Card from "./Smallcards";
import Miniheader from "./Miniheader";
import InfoCard from "./InfoCards";
import Search from '../images/reactComponent/Search'

import product from "../products"
import smallcard from "../smallcards"
import footer from "../footer"


function App() {
    return <div>
                <div className="wrapper">
                    <Header />
                    <Miniheader />
                    <button className="search"> <span>Search merchbuy</span> <div className="searchIcon"><Search/></div></button>
                    <InfoCard />
                    <div className="icon_cover"> {smallcard.map( card => <Card key={card.id} image={card.img} name={card.name}/> )} </div>
                    <div className="product_cover"> {product.map( products => <Product key={products.id} images={products.img} pname={products.name} lprice={products.lprice} hprice={products.hprice} pieces={products.piece}/> )} </div>
                </div>
                <div className="footer_cover"> {footer.map( foot => <Footer key={foot.id} icon={foot.icon} name={foot.name}/> )} </div>
            </div>
}

export default App;
