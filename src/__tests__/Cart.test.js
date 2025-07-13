import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantDetails from "../components/RestaurantDetails"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../utils/redux/appStore"
import Header from "../components/Header"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/MenuItems.json"
import Cart from "../components/Cart"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})
describe("Test cart functionality by adding the items", () => {
    it("Should be accordian open on the click", async () => {
        await act(() => {
            render(<BrowserRouter><Provider store={appStore}>
                    <Header />
                    <RestaurantDetails />
                </Provider></BrowserRouter>)
        })

        const accordianHeader = screen.getByText("Flash Sale Pizzas")
        expect(accordianHeader).toBeInTheDocument()
        fireEvent.click(accordianHeader)
        expect(screen.getAllByTestId("foodItem").length).toBe(2)

    })

    it("Should check cart heading changes on adding items 1 item", async () => {
        await act(() => {
            render(<BrowserRouter><Provider store={appStore}>
                    <Header />
                    <RestaurantDetails />
                </Provider></BrowserRouter>)
        })

        const accordianHeader = screen.getByText("Flash Sale Pizzas")
        fireEvent.click(accordianHeader)
        const addButtons = screen.getAllByRole("button", { name: "Add" })
        fireEvent.click(addButtons[0])

        expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument()

    })

    it("Should check cart heading changes on adding items 2 item", async () => {
        await act(() => {
            render(<BrowserRouter><Provider store={appStore}>
                    <Header />
                    <RestaurantDetails />
                </Provider></BrowserRouter>)
        })

        const accordianHeader = screen.getByText("Flash Sale Pizzas")
        fireEvent.click(accordianHeader)
        const addButtons = screen.getAllByRole("button", { name: "Add" })
        fireEvent.click(addButtons[1])

        expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument()

    })

    it("Should cart page is updated with items", async () => {
        await act(() => {
            render(<BrowserRouter><Provider store={appStore}>
                    <Header />
                    <RestaurantDetails />
                    <Cart />
                </Provider></BrowserRouter>)
        })

        const accordianHeader = screen.getByText("Flash Sale Pizzas")
        fireEvent.click(accordianHeader)
        const addButtons = screen.getAllByRole("button", { name: "Add" })

        expect(screen.getAllByTestId("foodItem").length).toBe(4)

    })

    it("Should Clear the cart", async () => {
        await act(() => {
            render(<BrowserRouter><Provider store={appStore}>
                    <Header />
                    <RestaurantDetails />
                    <Cart />
                </Provider></BrowserRouter>)
        })

        const clearBtn = screen.getByRole("button", { name: "Clear Cart" })
        expect(clearBtn).toBeInTheDocument()
        fireEvent.click(clearBtn)

        expect(screen.getByText("No items in the cart")).toBeInTheDocument()

    })
})