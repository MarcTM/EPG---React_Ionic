import React from 'react';
import { useHistory } from 'react-router-dom'
import epgData from '../data/epg.json';
import {
  IonSlides,
  IonSlide,
  IonRow,  
  IonLabel,  
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent

} from '@ionic/react';
import './CanalesList.css';

export default class CanalesList extends React.Component {

    constructor(props){
      super(props);      
      this.state = {
        events: Object.values(epgData.events).reverse(), 
        name:epgData.name,
        title:epgData.title,
      };    

    }

    componentDidMount(){
      //Ja vorem
    }

    render() {
      const slideOpts = {
        slidesPerView: 'auto', 
        zoom: false, 
        grabCursor: true,       
        virtual: true, 
      }; 

      return (
       
        <div className="channels">
        <IonRow className="channels__tv">
          <IonLabel>Canales de TV</IonLabel> 
          <IonSlides options={slideOpts}>
            <IonSlide className="list_channels_slide">
              <h2>{epgData.title}</h2>
            </IonSlide>
          </IonSlides>
        </IonRow>
        </div>

      );
    }
}