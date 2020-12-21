import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CanalesList from '../components/CanalesList';
import './Canales.css';


const Canales: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Canales</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1dd</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CanalesList />
      </IonContent>
    </IonPage>
  );
};

export default Canales;
