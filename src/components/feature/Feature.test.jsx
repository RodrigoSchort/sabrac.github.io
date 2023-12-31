import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Feature from './Feature';

describe('Feature component', () => {
    it("Renders Feature component with properties title and text", () => {
        // Arrange
        const title = 'title';
        const text = 'text';
        render(<Feature title={title} text={text} />)

        // Assert
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(text)).toBeInTheDocument();
    })
})