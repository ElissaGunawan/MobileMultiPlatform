import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import MailDetail from './pages/MailDetail';
import MailTabs from './pages/MailTabs';
import { list, settings, warning } from 'ionicons/icons';
import { spawn } from 'child_process';
import Settings from './pages/Settings';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
      <IonReactRouter>
        <IonMenu contentId='main'>
          <IonHeader>
            <h2>Ionic Mail</h2>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonMenuToggle>
                <IonItem button routerLink='/tabs'>
                  <IonIcon slot='start' icon={list}/>
                  <IonLabel>All Mail</IonLabel>
                </IonItem>
                <IonItem button routerLink='/tabs/spam'>
                  <IonIcon slot='start' icon={warning}/>
                  <IonLabel>Spam</IonLabel>
                </IonItem>
                <IonItem button routerLink='/settings'>
                  <IonIcon slot='start' icon={settings}/>
                  <IonLabel>Settings</IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>
          <IonRouterOutlet id="main">
            <Route exact path="/tabs" component={MailTabs}></Route>
            <Route path="/mail/:mailId" component={MailDetail}></Route>
            <Route path="/tabs/spam" component={MailTabs}></Route>
            <Route path="/settings" component={Settings}></Route>
            <Redirect exact from='/' to="/tabs"/>
          </IonRouterOutlet>
      </IonReactRouter>
  </IonApp>
);

export default App;
