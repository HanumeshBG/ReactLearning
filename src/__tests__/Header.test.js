import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../components/Header';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import appStore from '../utils/redux/appStore';
import { BrowserRouter } from "react-router-dom";

describe("Header Component Tests", () => {
    it("Should render Header component with Login button ", () => {
        render(
            <BrowserRouter>
                <Provider store = {appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        const loginButton = screen.getByRole('button', { name: 'Login'})

        expect(loginButton).toBeInTheDocument();
    })

    it("Should render Header component with Cart ", () => {
        render(
            <BrowserRouter>
                <Provider store = {appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        const cart = screen.getByText(/Cart/)

        expect(cart).toBeInTheDocument();
    })

    it("Should change the Login button to Logout on click ", () => {
        render(
            <BrowserRouter>
                <Provider store = {appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );

        const loginButton = screen.getByRole('button', { name: 'Login'})
        fireEvent.click(loginButton);
        const logoutButton = screen.getByRole('button', { name: 'Logout'})

        expect(logoutButton).toBeInTheDocument()
    })
})