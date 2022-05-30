import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer"
import App from "../App"
import { Input } from "../Components/Input";
import userEvent from "@testing-library/user-event"

describe(" Testing", function () {
  
  test('pass invalid email to text input value', () => {
    render(<App/>);
 
    const inputEl = screen.getByTestId("email-input");
    userEvent.type(inputEl, "text");
 
    expect(screen.getByTestId("email-input")).toHaveValue("text");
    // expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
    // expect(screen.queryByTestId("error-msg").textContent).toEqual("Please enter a valid email.");
  });

  
  test('pass invalid email to text input value', () => {
    render(<App/>);
 
    const inputEl = screen.getByTestId("email-input");
    userEvent.onchange = (sagar)=>{
          sagar=screen.getByDisplayValue(sagar)
    }
 

    // expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
    // expect(screen.queryByTestId("error-msg").textContent).toEqual("Please enter a valid email.");
  });

  })