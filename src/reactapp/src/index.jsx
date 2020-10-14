import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { Main as MainLayout } from './components/Layouts/Main';
import ContextProvider from "./context/ContextProvider";

class Checkout extends React.Component {
    render() {
        return (
            <ContextProvider>
                <MainLayout />
            </ContextProvider>
        );
    }
}

let RootElement = document.getElementById('react-checkout');

ReactDOM.render(<Checkout />, RootElement);
