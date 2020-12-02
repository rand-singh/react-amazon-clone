import React from 'react';
import './Home.scss'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>                
            </div>

            <div className="home__row">
                <Product id="123458567" title="The lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={4}/>
                <Product id="928374932" title="Hoover - Cleans a mess" price={229.99} image="https://cdn.ecommercedns.uk/files/2/225382/1/5268101/dyson-ball-2.jpg" rating={2}/>
            </div>

            
            <div className="home__row">
                <Product id="7473957629" title="Gloves - Protects hands" price={1.99} image="https://media.screwfix.com/is/image//ae235?src=ae235/907FR_P&$prodImageMedium$" rating={3}/>
                <Product id="127439327" title="Kettle - Boils water (5th Gen)" price={12.99} image="https://media.ao.com/en-GB/Productimages/Images/rvMedium/sk14610gryn_gy_swan_kettle_01b_m_p.jpg" rating={5}/>
                <Product id="1293276492" title="Macbook Pro 13inch i3 16gb" price={1925.99} image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000" rating={4}/>
            </div>

            
            <div className="home__row">
                <Product id="12121212" title="Fitbit fitness tracker" price={125.99} image="https://images-na.ssl-images-amazon.com/images/I/71sSyaf-luL._AC_SX466_.jpg" rating={5}/>
            </div>

        </div>
    )
}

export default Home
