import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

describe('Navbar component', () => {
    it('Renders Navbar component in English', () => {
        // Arrange
        render(<Navbar englishLanguage={true} />); // You can choose true or false for englishLanguage

        // Act & Assert
        expect(screen.getByAltText('logo')).toBeInTheDocument();
        expect(screen.getAllByText('Home')).toBeDefined();
        expect(screen.getAllByText('About')).toBeDefined();
        expect(screen.getAllByText('History')).toBeDefined();
        expect(screen.getAllByText('Actions')).toBeDefined();
        expect(screen.getAllByText('Contact Us')).toBeDefined();
    });

    it('Renders Navbar component in Portuguese', () => {
        // Arrange
        render(<Navbar englishLanguage={false} />); // You can choose true or false for englishLanguage

        // Act & Assert
        expect(screen.getByAltText('logo')).toBeInTheDocument();
        expect(screen.getAllByText('Início')).toBeDefined();
        expect(screen.getAllByText('Sobre')).toBeDefined();
        expect(screen.getAllByText('História')).toBeDefined();
        expect(screen.getAllByText('Ações')).toBeDefined();
        expect(screen.getAllByText('Contato')).toBeDefined();
    });

    it('Toggles the menu in english when the menu icon is clicked', () => {
        // Arrange
        render(<Navbar englishLanguage={true} />); // You can choose true or false for englishLanguage

        // Act: Click on the menu icon
        fireEvent.click(screen.getByTestId('menu-icon'));

        // Assert: Check if the menu is visible
        expect(screen.getAllByText('Home')).toHaveLength(2);
        expect(screen.getAllByText('About')).toHaveLength(2);
        expect(screen.getAllByText('History')).toHaveLength(2);
        expect(screen.getAllByText('Actions')).toHaveLength(2);
        expect(screen.getAllByText('Contact Us')).toHaveLength(2);

        // Act: Click on the menu icon again to close the menu
        fireEvent.click(screen.getByTestId('menu-icon'));

        // Assert: Check if the menu is closed
        expect(screen.queryAllByText('Home')).toHaveLength(1);
        expect(screen.queryAllByText('About')).toHaveLength(1);
        expect(screen.queryAllByText('History')).toHaveLength(1);
        expect(screen.queryAllByText('Actions')).toHaveLength(1);
        expect(screen.queryAllByText('Contact Us')).toHaveLength(1);
    });

    it('Toggles the menu in portuguese when the menu icon is clicked', () => {
        // Arrange
        render(<Navbar englishLanguage={false} />); // You can choose true or false for englishLanguage

        // Act: Click on the menu icon
        fireEvent.click(screen.getByTestId('menu-icon'));

        // Assert: Check if the menu is visible
        expect(screen.getAllByText('Início')).toHaveLength(2);
        expect(screen.getAllByText('Sobre')).toHaveLength(2);
        expect(screen.getAllByText('História')).toHaveLength(2);
        expect(screen.getAllByText('Ações')).toHaveLength(2);
        expect(screen.getAllByText('Contato')).toHaveLength(2);

        // Act: Click on the menu icon again to close the menu
        fireEvent.click(screen.getByTestId('menu-icon'));

        // Assert: Check if the menu is closed
        expect(screen.queryAllByText('Início')).toHaveLength(1);
        expect(screen.queryAllByText('Sobre')).toHaveLength(1);
        expect(screen.queryAllByText('História')).toHaveLength(1);
        expect(screen.queryAllByText('Ações')).toHaveLength(1);
        expect(screen.queryAllByText('Contato')).toHaveLength(1);
    });
});
