import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Possibility from './Possibility';

describe("Possibility component", () => {
    it("Should render Possibility component with English text", () => {
        // Arrange
        const englishH4 = "Make the difference";
        const englishH1 = "Change the future of your neighborhood is preparing the future for new generations.";
        const englishParagraph = "It is with the support of people like you that we can continue our work impacting lives. Help us to continue.";
        render(<Possibility englishLanguage={true} />);

        // Assert
        expect(screen.getByText(englishH4)).toBeInTheDocument();
        expect(screen.getByText(englishH1)).toBeInTheDocument();
        expect(screen.getByText(englishParagraph)).toBeInTheDocument();
    })

    it("Should render Possibility component with Portuguese text", () => {
        // Arrange
        const portugueseH4 = "Faça a diferença";
        const portugueseH1 = "Mudar o futuro do seu bairro é preparar o futuro para novas gerações.";
        const portugueseParagraph = "É com o apoio de pessoas como você que conseguimos continuar nosso trabalho impactando vidas. Nos ajude a continuar.";
        render(<Possibility englishLanguage={false} />);

        // Assert
        expect(screen.getByText(portugueseH4)).toBeInTheDocument();
        expect(screen.getByText(portugueseH1)).toBeInTheDocument();
        expect(screen.getByText(portugueseParagraph)).toBeInTheDocument();
    })
})