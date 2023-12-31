import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Article from './Article';

describe('Article component', () => {
    it("Should render Article component with the properties text, date and imageUrl", () => {
        // Arrange
        const text = 'testText';
        const date = '01/01/2023';
        const urlString = 'testUrl';
        render(<Article imgUrl={urlString} date={date} text={text} />)

        // Assert
        expect(screen.getByText(text)).toBeInTheDocument();
        expect(screen.getByText(date)).toBeInTheDocument();
        expect(screen.getByAltText('blog_image')).toBeInTheDocument();
        expect(screen.getByAltText('blog_image')).toHaveAttribute('src', urlString);
    })
})