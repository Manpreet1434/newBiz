import React from 'react'
import Client1 from '../img/clients/client-1.png'
import Client2 from '../img/clients/client-2.png'
import Client3 from '../img/clients/client-3.png'
import Client4 from '../img/clients/client-4.png'
import Client5 from '../img/clients/client-5.png'
import Client6 from '../img/clients/client-6.png'
import Client7 from '../img/clients/client-7.png'
import Client8 from '../img/clients/client-8.png'

function ClientSection(){

    return(
        <section id="clients" class="section-bg">

        <div class="container">

            <div class="section-header">
                <h3>Our CLients</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque dere santome nida.</p>
            </div>

            <div class="row no-gutters clients-wrap clearfix wow fadeInUp">

                <div class="col-lg-3 col-md-4 col-xs-6">
                    <div class="client-logo">
                       <img src={Client1} class="img-fluid" alt=""/>
                    </div>
                </div>
            
                <div class="col-lg-3 col-md-4 col-xs-6">
                    <div class="client-logo">
                        <img src={Client2} class="img-fluid" alt=""/>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-4 col-xs-6">
                    <div class="client-logo">
                      <img src={Client3} class="img-fluid" alt=""/>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-4 col-xs-6">
                    <div class="client-logo">
                        <img src={Client4} class="img-fluid" alt=""/>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-4 col-xs-6">
                    <div class="client-logo">
                        <img src={Client5} class="img-fluid" alt=""/>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-4 col-xs-6">
                    <div class="client-logo">
                        <img src={Client6} class="img-fluid" alt=""/>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-4 col-xs-6">
                    <div class="client-logo">
                        <img src={Client7} class="img-fluid" alt=""/>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-4 col-xs-6">
                    <div class="client-logo">
                        <img src={Client8} class="img-fluid" alt=""/>
                    </div>
                </div>

            </div>

        </div>

    </section>
    )
}

export default ClientSection