import './About.css'
import img2 from './Profile_img/Rebo.jpg'
import img3 from './Profile_img/Ishita.jpg'
import img4 from './Profile_img/Shreya.jpg'
import img5 from './Profile_img/Abhishek.jpg'
import img6 from './Profile_img/digbijoy.jpg'
import img7 from './Profile_img/Raktim.jpg'
import { CardGroup} from 'react-bootstrap'

const Card = () => {
    return (
        <div className="body">
        <div>
            <div className="box">
                <div className="boxbody">
                    <h4>কারিগরেরadda</h4>
                        <h6>We, the group of 6</h6>
                        <p>KARIGORER ADDA is an e-commerce platform where you can get all the beautiful handmade stuffs like various kinds of handloom sarees, huge range of home décor items, painting, masks, dolls and many more things straight from the house of rural artists and craftsmen all over West Bengal under one roof. From artists’ point of view, we are giving them a significant platform where they can showcase their creativity and sell those items. So what are you waiting for? Go and grab your favourite items from the desk. Give your daily life a tender, blissful touch of art and crafts.</p>
	                    <p>Presenting you “কারিগরেরadda”, a one-stop for handlooms and handicrafts.</p>
                    </div>
            </div>
            </div>

        <CardGroup style={{ width: '70rem'}} className="card-columns mx-auto d-flex justify-content-center col-12">

            <div className="card">
                <img className="card-img-top" src={img2} height="300"  alt="user card" />
                    <div className="card-body">
                        <h5 className="card-title">Udayan Misra</h5>
                        <div class="share">
                            <a href="https://www.facebook.com/udayanmisra36" target="_blank" class="btn fa fa-facebook-f"></a>
                            <a href="https://mobile.twitter.com/misra_udayan" target="_blank" class="btn fa fa-twitter"></a>
                            <a href="https://www.instagram.com/udayan.misra/" target="_blank" class="btn fa fa-instagram"></a>
                            <a href="https://www.linkedin.com/in/udayan-misra-1297161a2/" target="_blank" class="btn fa fa-linkedin"></a>
                        </div>
                    </div>
            </div>
            <div className="card">
            <img className="card-img-top" src={img3} height="300" alt="user card" />
                <div className="card-body">
                    <h5 className="card-title">Ishita Pahari</h5>
                    <div class="share">
                            <a href="https://www.facebook.com/ishita.pahari.39" target="_blank" class="btn fa fa-facebook-f"></a>
                            <a href="https://twitter.com/IshitaPahari" target="_blank" class="btn fa fa-twitter"></a>
                            <a href="https://www.instagram.com/is.hita9846/" target="_blank" class="btn fa fa-instagram"></a>
                            <a href="https://www.linkedin.com/in/ishita-pahari-aa16841a9/" target="_blank" class="btn fa fa-linkedin"></a>
                        </div>
                </div>
        </div>
        <div className="card">
            <img className="card-img-top" src={img4} height="300" alt="user card" />
                <div className="card-body">
                    <h5 className="card-title">Shreya Bose</h5>
                    <div class="share">
                            <a href="https://www.facebook.com/agnijita.paul.1" target="_blank" class="btn fa fa-facebook-f"></a>
                            <a href="https://twitter.com/Shreya772016733" target="_blank" class="btn fa fa-twitter"></a>
                            <a href="https://www.instagram.com/shreya07725/" target="_blank" class="btn fa fa-instagram"></a>
                            <a href="https://www.linkedin.com/in/shreya-bose-151862213/" target="_blank" class="btn fa fa-linkedin"></a>
                        </div>
                </div>
        </div>
        </CardGroup>

        <CardGroup style={{ width: '70rem'}} className="card-columns mx-auto d-flex justify-content-center col-12">

        <div className="card">
            <img className="card-img-top" src={img6} height="300" alt="user card" />
                <div className="card-body">
                    <h5 className="card-title">Digbijoy Dasgupta</h5>
                    <div class="share">
                            <a href=" https://www.facebook.com/dig.dasgupta/" target="_blank" class="btn fa fa-facebook-f"></a>
                            <a href="https://twitter.com/DigbijoyDasgup2" target="_blank" class="btn fa fa-twitter"></a>
                            <a href=" https://www.instagram.com/the_dasgupta_chronicles" target="_blank" class="btn fa fa-instagram"></a>
                            <a href="https://www.linkedin.com/in/digbijoy-dasgupta-8118621a9/" target="_blank" class="btn fa fa-linkedin"></a>
                        </div>
                </div>
        </div>
        <div className="card">
            <img className="card-img-top" src={img5} height="300" alt="user card" />
                <div className="card-body">
                    <h5 className="card-title">Abhishek Sharma</h5>
                    <div class="share">
                            <a href="https://www.facebook.com/abhi.sensharma" target="_blank" class="btn fa fa-facebook-f"></a>
                            <a href="https://twitter.com/twitter.com/Abhishe08346491" target="_blank" class="btn fa fa-twitter"></a>
                            <a href="https://www.instagram.com/abhisheksharma1282000/" target="_blank" class="btn fa fa-instagram"></a>
                            <a href="https://www.linkedin.com/in/abhishek-sharma-aa06a9183/" target="_blank" class="btn fa fa-linkedin"></a>
                        </div>
                </div>
        </div>
        <div className="card">
            <img className="card-img-top" src={img7} height="300" alt="user card" />
                <div className="card-body">
                    <h5 className="card-title">Raktim Karmakar</h5>
                    <div class="share">
                            <a href="https://www.facebook.com/raktim.karmakar.750" target="_blank" class="btn fa fa-facebook-f"></a>
                            <a href="https://twitter.com/RaktimKarmakar7?s=08" target="_blank" class="btn fa fa-twitter"></a>
                            <a href="https://www.instagram.com/_raktim1246/" target="_blank" class="btn fa fa-instagram"></a>
                            <a href="https://www.linkedin.com/in/raktim-karmakar-b5a2a2186/" target="_blank" class="btn fa fa-linkedin"></a>
                        </div>
                </div>
        </div>
        </CardGroup>
        </div>
        )
}

export default Card;