import {render, screen} from '@testing-library/react';
import ContactUs from '../components/ContactUs';    
import '@testing-library/jest-dom';

describe("Contact Us Component Tests", () => {
    // Grouping tests for Contact Us component
    // we can use it or test both are same
    it("Contact Us Component Header Test", () => {
        render(<ContactUs />);
        const heading = screen.getByRole('heading')
    
        expect(heading).toBeInTheDocument();
    
    })
    
    test("Contact Us Component button Test", () => {
        render(<ContactUs />);
        const button = screen.getByRole('button')
    
        expect(button).toBeInTheDocument();
    
    })
    
    test("Contact Us Component button Test by text", () => {
        render(<ContactUs />);
        const button = screen.getByText('Submit')
    
        expect(button).toBeInTheDocument();
    
    })
    
    test("Should load 2 input textboxes on contact us page ", () => {
        render(<ContactUs />);
        const inputTextboxes = screen.getAllByRole('textbox');
    
        expect(inputTextboxes.length).toBe(3);
    
    })
})