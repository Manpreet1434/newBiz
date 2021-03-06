import React from 'react'
import App1 from '../img/portfolio/app1.jpg'
import App2 from '../img/portfolio/app2.jpg'
import App3 from '../img/portfolio/app3.jpg'
import Web1 from '../img/portfolio/web1.jpg'
import Web2 from '../img/portfolio/web2.jpg'
import Web3 from '../img/portfolio/web3.jpg'
import Card1 from '../img/portfolio/card1.jpg'
import Card2 from '../img/portfolio/card2.jpg'
import Card3 from '../img/portfolio/card3.jpg'


function Portfolio(){

    return(
        <section id="portfolio" className="clearfix">
            <div className="container">
    
            <header className="section-header">
                <h3 className="section-title">Our Portfolio</h3>
            </header>
    
            <div className="row">
                <div className="col-lg-12">
                <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-card">Card</li>
                    <li data-filter=".filter-web">Web</li>
                </ul>
                </div>
            </div>
    
            <div className="row portfolio-container">
    
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                    <img src={App1} className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                    <h4><a href="#">App 1</a></h4>
                    <p>App</p>
                    <div>
                        <a href={App1} data-lightbox="portfolio" data-title="App 1" className="link-preview" title="Preview"><i className="ion ion-eye"></i></a>
                        <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </div>
                    </div>
                </div>
                </div>
    
                <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
                <div className="portfolio-wrap">
                    <img src={Web3} className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                    <h4><a href="#">Web 3</a></h4>
                    <p>Web</p>
                    <div>
                        <a href={Web3} className="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i className="ion ion-eye"></i></a>
                        <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </div>
                    </div>
                </div>
                </div>
    
                <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
                <div className="portfolio-wrap">
                    <img src={App2} className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                    <h4><a href="#">App 2</a></h4>
                    <p>App</p>
                    <div>
                        <a href={App2} className="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i className="ion ion-eye"></i></a>
                        <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </div>
                    </div>
                </div>
                </div>
    
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                    <img src={Card2} className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                    <h4><a href="#">Card 2</a></h4>
                    <p>Card</p>
                    <div>
                        <a href={Card2} className="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i className="ion ion-eye"></i></a>
                        <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </div>
                    </div>
                </div>
                </div>
    
                <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
                <div className="portfolio-wrap">
                    <img src={Web2} className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                    <h4><a href="#">Web 2</a></h4>
                    <p>Web</p>
                    <div>
                        <a href={Web2} className="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i className="ion ion-eye"></i></a>
                        <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </div>
                    </div>
                </div>
                </div>
    
                <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
                <div className="portfolio-wrap">
                    <img src={App3} className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                    <h4><a href="#">App 3</a></h4>
                    <p>App</p>
                    <div>
                        <a href={App3} className="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i className="ion ion-eye"></i></a>
                        <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </div>
                    </div>
                </div>
                </div>
    
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                    <img src={Card1} className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                    <h4><a href="#">Card 1</a></h4>
                    <p>Card</p>
                    <div>
                        <a href={Card1} className="link-    " data-lightbox="portfolio" data-title="Card 1" title="Preview"><i className="ion ion-eye"></i></a>
                        <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </div>
                    </div>
                </div>
                </div>
    
                <div className="col-lg-4 col-md-6 portfolio-item filter-card" data-wow-delay="0.1s">
                <div className="portfolio-wrap">
                    <img src={Card3} className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                    <h4><a href="#">Card 3</a></h4>
                    <p>Card</p>
                    <div>
                        <a href={Card3} className="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i className="ion ion-eye"></i></a>
                        <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </div>
                    </div>
                </div>
                </div>
    
                <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.2s">
                <div className="portfolio-wrap">
                    <img src={Web1} className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                    <h4><a href="#">Web 1</a></h4>
                    <p>Web</p>
                    <div>
                        <a href={Web1} className="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i className="ion ion-eye"></i></a>
                        <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open"></i></a>
                    </div>
                    </div>
                </div>
                </div>
    
            </div>
  
            </div>
        </section>
    )
}

export default Portfolio