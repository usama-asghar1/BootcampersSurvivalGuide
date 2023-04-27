import { render, screen } from '@testing-library/react';
import App from './App';
import {test, expect} from "@jest/globals"
import { BrowserRouter } from 'react-router-dom';
import Grid from "./Grid/index.js";
import weekGrid from "./lib/data.js";

test('renders learn react link', () => {
  render(<BrowserRouter><Grid data={weekGrid}/></BrowserRouter>);
  const linkElement = screen.getByText("Bootcamper's Survival Guide");
  expect(linkElement).toBeInTheDocument();
});