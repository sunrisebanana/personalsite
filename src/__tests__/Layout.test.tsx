/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout";
import '@testing-library/jest-dom';

describe("<Layout />", () => {
    test("Should render Layout with footer", () => {
      render(<Layout/>)
      expect(screen.getByRole('header', undefined)).toBeInTheDocument()
    });
});
