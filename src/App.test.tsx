import React from 'react';
import { render, screen } from '@testing-library/react';


const MyPassword = () => {
  return <label>Hello<input type="password" /></label>
}

const MyPassword2 = () => {
  return <><label htmlFor="password">Hello</label><input type="password" id="password" /></>
}
const MyPassword3 = () => {
  return <><label id="label">Hello</label><input type="password" aria-labelledby='label' /></>
}

// Passwords do not have the role textbox! 
// https://www.w3.org/TR/html-aria/#:~:text=the%20spinbutton%20role.-,input%20type%3Dpassword,-No%20corresponding%20role
// https://github.com/testing-library/dom-testing-library/issues/1128
describe('Passwords', () => {
  it("Passwords are selectedable label 1", () => {
    render(<MyPassword />)

    expect(screen.queryByRole("textbox", {
      name: /hello/i
    })).not.toBeInTheDocument();
  });

  it("Passwords are selectedable label 2", () => {
    render(<MyPassword2 />)

    expect(screen.queryByRole("textbox", {
      name: /hello/i
    })).not.toBeInTheDocument();
  });

  it("Passwords are selectedable label 3", () => {
    render(<MyPassword3 />)

    expect(screen.queryByRole("textbox", {
      name: /hello/i
    })).not.toBeInTheDocument();
  });
});
