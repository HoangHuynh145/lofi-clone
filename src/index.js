import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css';
import './access/styles/GlobalStyles.css';
import './index.css';
import App from './page/main/App';
import SidePage from './page/side/SidePage'
import { ScenesProvider } from './context/ScenesContext'
import { AudioProvider } from './context/AudioContext'
import { PopupProvider } from './context/PopupContext'
import { SettingsProvider } from './context/SettingsContext'
import { BrowserView, MobileView } from 'react-device-detect';

//Redux
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SettingsProvider>
          <AudioProvider>
            <ScenesProvider>
              <PopupProvider>
                <BrowserView>
                  <App />
                </BrowserView>
                <MobileView>
                  <SidePage />
                </MobileView>
              </PopupProvider>
            </ScenesProvider>
          </AudioProvider>
        </SettingsProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
