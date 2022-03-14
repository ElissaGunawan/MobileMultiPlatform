import {IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { ban, banSharp, createOutline, trash } from "ionicons/icons";
import React, { useRef } from "react";
import Avatar1 from '../images/Avatar1.svg';
import Avatar2 from '../images/Avatar2.svg';
import Avatar3 from '../images/Avatar3.svg';

export const FRIENDS_DATA = [
    {id: 'f1', name: 'John Thor', image: Avatar1},
    {id: 'f2', name: 'John Ness', image: Avatar2},
    {id: 'f3', name: 'John Doe', image: Avatar3},
]




const Meet: React.FC = () => {
    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
    const callFriendHandler =() => {
        console.log("Calling...");
    }
    
    const blockFriendHandler = (event: React.MouseEvent) => {
        slidingOptionsRef.current?.closeOpened();
        console.log("Blocking...");
    }

    const deleteFriendHandler = (event: React.MouseEvent) => {
        slidingOptionsRef.current?.closeOpened();
        console.log("Deleting...");
    }

    const editFriendHandler = (event: React.MouseEvent) => {
        slidingOptionsRef.current?.closeOpened();
        console.log("Editing...");
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Ionic Mail</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
               <IonList>
                   {FRIENDS_DATA.map(friend => (
                       <IonItemSliding key={friend.id} ref={slidingOptionsRef}>
                           <IonItemOptions side="start">
                               <IonItemOption color="danger" onClick={blockFriendHandler}>
                                    <IonIcon slot="icon-only" icon={ban} />
                               </IonItemOption>
                               <IonItemOption color="warning" onClick={deleteFriendHandler}>
                                    <IonIcon slot="icon-only" icon={trash} />
                               </IonItemOption>
                           </IonItemOptions>
        
                           <IonItemOptions side="end">
                               <IonItemOption color="warning" onClick={editFriendHandler}>
                                    <IonIcon slot="icon-only" icon={createOutline} />
                               </IonItemOption>
                           </IonItemOptions>
                           <IonItem lines="full" button onClick={callFriendHandler}>
                                <IonAvatar slot="start">
                                    <img src={friend.image} alt={'Missing Profile'} />
                                </IonAvatar>
                               <IonLabel>{friend.name}</IonLabel>
                           </IonItem>
                       </IonItemSliding>
                   ))}
               </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Meet;