import { render, screen } from '@testing-library/react';
import { Input } from '../../components/atoms/Input';

describe("input", () => {
    it("SHOULD render an input WHERE the screen has been rendered", () => {
        // Act
render(<Input handleSendMessage={() => {}} />);
        // Assert
       expect(screen.getByRole("textbox")).toBeTruthy();
    })
})