import React from 'react';
import epgData from '../data/epg.json';
import {
  IonSlides,
  IonAlert,
  IonSlide,
  IonRow,  
  IonLabel,  
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent

} from '@ionic/react';
import './Epg.css';
// import { Modal } from './Modal';

export default class Epg extends React.Component {

    constructor(props){
      super(props);      
      this.state = { 
        show: false,
        events: Object.values(epgData.events).reverse(),
        name:epgData.name,
        title:epgData.title,
      };    
    }

    // Alert
    eventInfo(name, text=null) {
      const alert = document.createElement('ion-alert');
      alert.cssClass = 'my-custom-class';
      alert.header = name;
      alert.subHeader = `Sinopsis`;
      text ? alert.message = text : alert.message="No description"
      alert.buttons = ['BACK'];
    
      document.body.appendChild(alert);
      return alert.present();
    }

    // Convert UTC to Date
    convertUTCtoDate(utcEpoch){
      let d=new Date(0);
      d.setUTCSeconds(utcEpoch);                          
      return d.toLocaleString("es-ES",{});  
    }

    // Render page
    render() {
      const slideOpts = {
        slidesPerView: 'auto', 
        zoom: false, 
        grabCursor: true,       
        virtual: true, 
      }; 

      return (
        <div className="la1_epg">
          <IonRow>
          <IonLabel className="my-label">{this.state.name}</IonLabel> 
          <IonSlides className="slides_la1" options={slideOpts}>

            <IonSlide className="channel_slide" key="la1">
              <h3 className="channel_slide_name">{this.state.name}</h3>
            </IonSlide>

            {this.state.events.map((eventEPG,index) => (
              <IonSlide className="event_slide" key={index} 
                  onClick={() => this.eventInfo(eventEPG.spa.name, eventEPG.spa.ext && eventEPG.spa.ext.text)}
              >
                  <h4 className="event_slide_time">{this.convertUTCtoDate(eventEPG.spa.start)}</h4>
                  <h3 className="event_slide_name">{eventEPG.spa.name}</h3>
              </IonSlide>
            ))}
          </IonSlides>

        </IonRow>
        </div>

      );
    }
}