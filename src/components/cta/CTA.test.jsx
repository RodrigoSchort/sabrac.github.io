import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CTA from './CTA';

describe('CTA component', () => {
    it("Renders CTA component with english text", () => {
        // Arrange
        const englishText = "Want to make a difference? Click the button and donate to the organization:";
        render(<CTA englishLanguage={true} />)

        // Assert
        expect(screen.getByText(englishText)).toBeInTheDocument();
    })

    it("Renders CTA component with portuguese text", () => {
        // Arrange
        const portugueseText = "Quer fazer a diferença? Clique no botão e doe para a organização :";
        render(<CTA englishLanguage={false} />)

        // Assert
        expect(screen.getByText(portugueseText)).toBeInTheDocument();
    })
})