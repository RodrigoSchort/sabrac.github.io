import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Features from './Features';

describe('Features component', () => {
    it("Should render Features component with texts in English language", () => {
        // Arrange
        const englishH1 = "Be part of our project and contribute to the history of the neighborhood";
        const englishButton = "Click here and become a Volunteer!";
        render(<Features englishLanguage={true} />)

        // Assert
        expect(screen.getByText(englishH1)).toBeInTheDocument();
        expect(screen.getByText(englishButton)).toBeInTheDocument();
    })

    it("Should render Features component with texts in Portuguese language", () => {
        // Arrange
        const portugueseH1 = "Faça parte do nosso projeto e contribua com a história do Bairro";
        const portugueseButton = "Clique aqui e se torne um Voluntário!";
        render(<Features englishLanguage={false} />)

        // Assert
        expect(screen.getByText(portugueseH1)).toBeInTheDocument();
        expect(screen.getByText(portugueseButton)).toBeInTheDocument();
    })
})