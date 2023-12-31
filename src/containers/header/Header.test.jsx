import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('Header component', () => {
    it("Should render Header component with English language", () => {
        // Arrange
        const englishH1 = "Society of Friends of Neighborhood Ressaca and Caputera";
        const englishParagraph = "The Ressaca and Caputera Neighborhoods present problems structures in various locations and people in situations of social vulnerability. Like this SABRAC appears promoting actions and empowering municipalities to look for a solution with your own hands.";
        const englishButton = "Support us, make a donation";
        render(<Header englishLanguage={true} />);

        // Assert
        expect(screen.getByText(englishH1)).toBeInTheDocument();
        expect(screen.getByText(englishParagraph)).toBeInTheDocument();
        expect(screen.getByText(englishButton)).toBeInTheDocument();
    })

    it("Should render Header component with Portuguese language", () => {
        // Arrange
        const portugueseH1 = "Sociedade de Amigos do Bairro Ressaca e Caputera";
        const portugueseParagraph = "Os Bairros Ressaca e Caputera apresentam problemas estruturais em varios locais e pessoas em situação de vulnerabilidade social. Assim surge a SABRAC promovendo ações e empoderando os municípios a procurarem uma solução com suas próprias mãos.";
        const portugueseButton = "Nos apoie, faça uma doação";
        render(<Header englishLanguage={false} />);

        // Assert
        expect(screen.getByText(portugueseH1)).toBeInTheDocument();
        expect(screen.getByText(portugueseParagraph)).toBeInTheDocument();
        expect(screen.getByText(portugueseButton)).toBeInTheDocument();
    })
})