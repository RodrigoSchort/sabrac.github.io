import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SocialMedia from './SocialMedia';

// Mock the setEnglishLanguage function
const mockSetEnglishLanguage = jest.fn();

describe('SocialMedia component', () => {
    it('Renders SocialMedia component', () => {
        // Arrange: Render the SocialMedia component with mock function
        render(<SocialMedia setEnglishLanguage={mockSetEnglishLanguage} />);

        // Assert: Check if certain elements are present on the screen
        expect(screen.getByAltText('portuguese')).toBeInTheDocument();
        expect(screen.getByAltText('english')).toBeInTheDocument();
        expect(screen.getByAltText('instagramLogo')).toBeInTheDocument();
        expect(screen.getByAltText('linkedinLogo')).toBeInTheDocument();
        expect(screen.getByAltText('facebookLogo')).toBeInTheDocument();
    });

    it('Clicking on the Portuguese flag calls setEnglishLanguage with false', () => {
        // Arrange: Render the SocialMedia component with mock function
        render(<SocialMedia setEnglishLanguage={mockSetEnglishLanguage} />);
        const portugueseFlag = screen.getByAltText('portuguese');

        // Act: Simulate a click on the Portuguese flag
        portugueseFlag.click();

        // Assert: Check if the mock function is called with the expected argument
        expect(mockSetEnglishLanguage).toHaveBeenCalledWith(false);
    });

    it('Clicking on the English flag calls setEnglishLanguage with true', () => {
        // Arrange: Render the SocialMedia component with mock function
        render(<SocialMedia setEnglishLanguage={mockSetEnglishLanguage} />);
        const englishFlag = screen.getByAltText('english');

        // Act: Simulate a click on the English flag
        englishFlag.click();

        // Assert: Check if the mock function is called with the expected argument
        expect(mockSetEnglishLanguage).toHaveBeenCalledWith(true);
    });
});
