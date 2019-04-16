import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import I18n from "redux-i18n"
import './style/index.css';
import App from './containers/App';
import rootReducer from './reducers'
import {translations} from "./static/dictionary"
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {PersistGate} from 'redux-persist/integration/react'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer);

let persistor = persistStore(store)

render(
    <Provider store={store}>
        <I18n translations={translations} initialLang="en">
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </I18n>
    </Provider>,
    document.getElementById('root')
);
