import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const Spam: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Spam</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                Spam
            </IonContent>
        </IonPage>
    )
}

export default Spam;