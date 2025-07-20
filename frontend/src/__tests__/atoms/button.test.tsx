import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from "../../components/atoms/button";

describe("button", ()=> {
    it("SHOULD render a button with the text 'Click me'", ()=> {
        // Act
        render(<Button onClick={()=>{}}>Click me</Button>);
        // Assert
        expect(screen.getByRole("button", { name: "Click me" })).toBeTruthy();
    });
    
    it("SHOULD call the onClick function when clicked", ()=> {
        // Arrange
        const onClick = jest.fn();

        // Act
        render(<Button onClick={onClick}>Click me</Button>);
        const button = screen.getByRole("button", { name: "Click me"});
        fireEvent.click(button);

        // Assert
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});