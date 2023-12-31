import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

describe('Footer component', () => {
    it("Renders Footer component with English text", () => {
        // Arrange
        render(<Footer englishLanguage={true} />);

        // Assert
        expect(screen.getAllByText("Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved")).toHaveLength(1);
        expect(screen.getAllByText("Links")).toHaveLength(1);
        expect(screen.getAllByText("About Us")).toHaveLength(1);
        expect(screen.getAllByText("Social Media")).toHaveLength(1);
        expect(screen.getAllByText("Counters")).toHaveLength(1);
        expect(screen.getAllByText("Contact")).toHaveLength(2);
        expect(screen.getAllByText("Company")).toHaveLength(1);
        expect(screen.getAllByText("Terms & Conditions")).toHaveLength(1);
        expect(screen.getAllByText("Privacy Policy")).toHaveLength(1);
        expect(screen.getAllByText("Get in touch")).toHaveLength(1);
        expect(screen.getAllByText("Crechterwoord K12 182 DK Alknjkcb")).toHaveLength(1);
        expect(screen.getAllByText("085-132567")).toHaveLength(1);
        expect(screen.getAllByText("info@payme.net")).toHaveLength(1);
        expect(screen.getAllByText("@2023 Sabrac. All rights reserved.")).toHaveLength(1);
        expect(screen.getAllByText("Site created by Cyberdrick")).toHaveLength(1);
    });

    it("Renders Footer component with Portuguese text", () => {
        // Arrange
        render(<Footer englishLanguage={false} />);

        // Assert
        expect(screen.getAllByText("Crechterwoord K12 182 DK Alknjkcb, Todos os direitos reservados")).toHaveLength(1);
        expect(screen.getAllByText("Links")).toHaveLength(1);
        expect(screen.getAllByText("Sobre Nós")).toHaveLength(1);
        expect(screen.getAllByText("Mídias Sociais")).toHaveLength(1);
        expect(screen.getAllByText("Counters")).toHaveLength(1);
        expect(screen.getAllByText("Contato")).toHaveLength(2);
        expect(screen.getAllByText("Empresa")).toHaveLength(1);
        expect(screen.getAllByText("Termos e Condições")).toHaveLength(1);
        expect(screen.getAllByText("Política de Privacidade")).toHaveLength(1);
        expect(screen.getAllByText("Entre em contato")).toHaveLength(1);
        expect(screen.getAllByText("Crechterwoord K12 182 DK Alknjkcb")).toHaveLength(1);
        expect(screen.getAllByText("085-132567")).toHaveLength(1);
        expect(screen.getAllByText("info@payme.net")).toHaveLength(1);
        expect(screen.getAllByText("@2023 Sabrac. Todos os direitos reservados.")).toHaveLength(1);
        expect(screen.getAllByText("Site criado por Cyberdrick")).toHaveLength(1);
    });
});
