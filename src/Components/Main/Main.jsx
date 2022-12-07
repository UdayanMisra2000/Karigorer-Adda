import React from 'react'
import './Main.css'
import Product from './Product'
import Slider from './Slides/Slides'
import img20 from './Product_pics/Patachitra.jpg'
import img21 from './Product_pics/Sholapith.jpg'
import img22 from './Product_pics/Doll.jpg'
import img23 from './Product_pics/Earing.jpg'
import img24 from './Product_pics/necklace.jpg'
import img25 from './Product_pics/Mask.jpg'
import img26 from './Product_pics/Teracotta.jpg'
import img27 from './Product_pics/Dokra.jpg'
import img29 from './Product_pics/Baluchari.jpeg'
import img30 from './Product_pics/Katha_stitch.jpg'
import img31 from './Product_pics/eri-silk.jpg'
import img32 from './Product_pics/Wooden_Bed.jpg'
import img33 from './Product_pics/seashell_craft.jpg'
import img34 from './Product_pics/wooden_horse.jpg'
import img35 from './Product_pics/santiniketan_leather_bag.jpg'
import img36 from './Product_pics/santiniketan_batik.jpg'
import img37 from './Product_pics/wooden_key_combo.jpg'
import img38 from './Product_pics/swarnachari_silk.jpg'

export default function Main() {
    return (
        <div className="main">
            <div className="main_container">
            <Slider/>
            <h1><strong> Art washes away from the soul the dust of everyday life.</strong> </h1><h5>----- Pablo Picasso</h5> 
            <div className="main_row">
                <Product
                   id = "1"
                   title = "Sholapith-Art"
                   price = {7999}
                   rating ={4}
                   image={img21}
                />
                <Product
                   id = "2"
                   title = "Quilling earrings"
                   price = {149}
                   rating ={3}
                   image={img23}
                />
                <Product
                   id = "3"
                   title = "Wooden necklace"
                   price = {849}
                   rating ={4}
                   image={img24}
                />
            </div>
            <div className="main_row">
                <Product
                   id = "4"
                   title = "Seashell Craft"
                   price = {899}
                   rating ={4}
                   image={img33}
                />
                <Product
                   id = "5"
                   title = "Wooden Horse"
                   price = {699}
                   rating ={5}
                   image={img34}
                />
                <Product
                   id = "6"
                   title = "Shantiniketan Leather bag"
                   price = {799}
                   rating ={4}
                   image={img35}
                />
                <Product
                   id = "7"
                   title = "Wooden Key ring"
                   price = {299}
                   rating ={3}
                   image={img37}
                />
            </div>
            <div className="main_row">
                <Product
                   id = "8"
                   title = "Patachitra-Pingla"
                   price = {5680}
                   rating ={5}
                   image={img20}
                />
                <Product
                   id = "9"
                   title = "Terracotta"
                   price = {979}
                   rating ={4}
                   image={img26}
                />
                <Product
                   id = "10"
                   title = "Wooden-Doll"
                   price = {399}
                   rating ={5}
                   image={img22}
                />
                <Product
                   id = "11"
                   title = "Dokra"
                   price = {1999}
                   rating ={5}
                   image={img27}
                />
                <Product
                   id = "12"
                   title = "Wooden-Mask"
                   price = {299}
                   rating ={3}
                   image={img25}
                />
            </div>
            <div className="main_row">
                <Product
                   id = "13"
                   title = "Swarnachari Silk"
                   price = {9199}
                   rating ={4}
                   image={img38}
                />
                <Product
                   id = "14"
                   title = "Batik Saree"
                   price = {1299}
                   rating ={5}
                   image={img36}
                />
                <Product
                   id = "15"
                   title = "Baluchari Saree"
                   price = {10499}
                   rating ={5}
                   image={img29}
                />
                <Product
                   id = "16"
                   title = "Katha-Stitch"
                   price = {7499}
                   rating ={5}
                   image={img30}
                />
                <Product
                   id = "17"
                   title = "Eri-silk"
                   price = {12499}
                   rating ={3}
                   image={img31}
                />
            </div>
            <div className="main_row">
                <Product
                   id = "18"
                   title = "Hand Crafted Wooden Bed"
                   price = {135499}
                   rating ={4}
                   image={img32}
                />
            </div>
            </div>
        </div>
    )
}
