import './Blog.css';
import img55 from './Photo/sareeweaving.jpg';
import img56 from './Photo/terracotta.jpg';
import img58 from './Photo/dhokra_casting.jpg';
import img59 from './Photo/chhauNach.jpg';
import img60 from './Photo/Patta_Chitra.jpg';


function Blog() {
  return (
    <>
<div className="blog">
    <div className="adda_1"><h1>Adda</h1></div>
    <div className="card_1">
        <div className="thumbnail"><img className="left_2" src={img55}/>
        </div>
        <div className="right_2">
            <h1>Bengal's Weavers- Our Pride...</h1>
            <div className="adda">
            <p>The art of weaving Sarees, a signature of our rich tradition that we need to 
                protect. It has a great cultural significance. Each pleat of saree contains 
                grace and charm. It is traditional, yet contemporary. It is simple, yet 
                fashionable. In our house sarees crafted from scratch in 100% Natural materials 
                by our Master Weavers. Buy and drape yourself with 6 yards of elegance.</p>
                </div>
        </div>
        <h5>Handloom Saree</h5>
    </div>
    <div className="card_1">
        <div className="thumbnail"><img className="left_2" src={img56}/></div>
        <div className="right_2">
            <h1>Love for Terracotta and Pottery...</h1>
            <div className="adda">
            <p>The art terracotta is most commonly used to represent a type of sculptural, 
                unglazed porcelain or decorative architecture made from rough porous clay known 
                for its versatility, cheapness, durability. Artists really rejoice every time 
                they spin the wheel.</p>
        </div>
        </div>
        <h5>Terracotta Pottery</h5>
    </div>
    <div className="card_1">
        <div className="thumbnail"><img className="left_2" src={img60}/></div>
        <div className="right_2">
            <h1>Art of Dhokra, A Metal Miracle</h1>
            <div className="adda">
            <p>West Bengal's traditional craft, the DHOKRA work of art, is basically composed of 
                an alloy of brass, nickel and zinc, on which a hollow casting wax process is 
                performed. Dhokra Damar is a traditional metalworker tribe in West Bengal, from 
                which the name “Dhokra” art came.</p>
        </div>
        </div>
        <h5>Dhokra Art</h5>
    </div>
    <div className="card_1">
        <div className="thumbnail"><img className="left_2" src={img58}/></div>
        <div className="right_2">
            <h1>Recollecting Memories of Chhau Dance...</h1>
            <div className="adda">
            <p>Chhau dance is an East Indian tradition that establishes epic episodes that include 
                Mahabharata and Ramayana, local folklore and abstract themes. Chhau masks are 
                traditionally associated with this old dance. Artists from all over Bengal make masks 
                d colour them to give the characters a sense of dynamism.</p>
        </div>
        </div>
        <h5>Chhau Mask</h5>
    </div>
    <div className="card_1">
        <div className="thumbnail"><img className="left_2" src={img59}/></div>
        <div className="right_2">
            <h1>Pattachitra, Mesmerizing Brush Strokes...</h1>
            <div className="adda">
            <p>Bengal’s pattachitra expresses India’s culture. It is a traditional mythical heritage of West Bengal. Famous for its excellent colours. It is a traditional folk-art form of rural Bengal.  We are connecting the road from the artist's palette to your living room.</p>
        </div>
        </div>
        <h5>Pattachitra</h5>
    </div>
</div>
    </>
  );
}

export default Blog;