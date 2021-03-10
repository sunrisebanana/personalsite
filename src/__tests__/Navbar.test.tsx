/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import '@testing-library/jest-dom/extend-expect';


describe("<Navbar />", () => {
    test("Should render navbar with all components", () => {
      render(<Navbar/>);
      expect(screen.getByLabelText('Home')).toBeInTheDocument();
      expect(screen.getByLabelText('About')).toBeInTheDocument();
      expect(screen.getByLabelText('Github')).toBeInTheDocument();
      expect(screen.getByLabelText('Linkedin')).toBeInTheDocument();
      expect(screen.getByLabelText('Lichess')).toBeInTheDocument();
    });
});