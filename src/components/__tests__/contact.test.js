import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

descripe("contact us page case" , () => {
    test("should load contact us component ",  () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
})


test("should load contact us component ",  () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    // Assertion
    expect(button).toBeInTheDocument();
})


test("should load 2 input boxes in contact us component", () => {
    render(<Contact />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(1) ; // check the count
});

})





