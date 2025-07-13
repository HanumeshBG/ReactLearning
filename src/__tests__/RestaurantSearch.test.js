import Body from "../components/Body"
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import MOCK_DATA from "../mocks/RestaurantList.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

// We need to create the fech API globally for the test environment
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

// beforeAll(() => {
//     console.log("Run before all tests");
// })

// afterAll(() => {
//     console.log("Run after all tests");
// })

// beforeEach(() => {
//     console.log("Run before each test");
// })

// afterEach(() => {
//     console.log("Run after each test");
// })

it("Should be search burger restaurants on the input text change", async () => {
    // we need to wrap the render in act to because react state or fetch updates are asynchronous
    await act(async () => {
        render(<BrowserRouter><Body/></BrowserRouter>)
    })
    const cardsBeforeSearch = screen.getAllByTestId("restCard");
    expect(cardsBeforeSearch.length).toBe(20);

    const searchInput = screen.getByTestId("restSearch");
    const searchButton = screen.getByRole("button", { name: "Search"});

    fireEvent.change(searchInput, { target: { value: "Burger"}})
    fireEvent.click(searchButton);

    const cardsAfterSearch = screen.getAllByTestId("restCard");
    expect(cardsAfterSearch.length).toBe(2)
});
  
it("Should be filter top rated restaurants on the click of To Rated button", async () => {
    // we need to wrap the render in act to because react state or fetch updates are asynchronous
    await act(async () => {
        render(<BrowserRouter><Body/></BrowserRouter>)
    })
    const cardsBeforeFilter = screen.getAllByTestId("restCard");
    expect(cardsBeforeFilter.length).toBe(20);

    const topRatedButton = screen.getByRole("button", { name: "Top Rated Restaurant" });
    fireEvent.click(topRatedButton);

    const cardsAfterFilter = screen.getAllByTestId("restCard");
    expect(cardsAfterFilter.length).toBe(14);
});