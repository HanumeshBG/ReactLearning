import RestaurantCard, { WithPromotedLabel } from "../components/RestaurantCard"
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MOCK_DATA from '../mocks/RestaurantCardData.json';

describe("RestaurantCard Component Tests", () => {
    it("Should be  able to render restaurant Card", () => {
        render(<RestaurantCard resData={MOCK_DATA.resData} />)

        const name = screen.getByText("McDonald's");

        expect(name).toBeInTheDocument();
        
    })

    it("Should be  able to render Promoted on the  restaurant Card", () => {
        // Here, WithPromotedLabel is not a component, but a Higher-Order Component (HOC) — a function that returns a component.
        const PromotedCard = WithPromotedLabel(RestaurantCard);
        render(<PromotedCard resData={MOCK_DATA.resData} />);

        const Promoted = screen.getByText("Promoted");

        expect(Promoted).toBeInTheDocument();
        
    })
    
})