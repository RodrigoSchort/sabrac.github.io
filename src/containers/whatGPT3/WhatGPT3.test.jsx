import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WhatGPT3 from './WhatGPT3';

describe('WhatGPT3 component', () => {
    it('Renders WhatGPT3 component with English language', () => {
        // Arrange
        render(<WhatGPT3 englishLanguage={true} />);

        // Assert
        expect(screen.getByText('WE ARE AN ORGANIZATION THAT SEEKS TO BRING TOGETHER RESIDENTS FOR THE IMPROVEMENT OF THE NEIGHBORHOOD')).toBeInTheDocument();
        expect(screen.getByText('Where We Operate')).toBeInTheDocument();
        expect(screen.getByText('History')).toBeInTheDocument();
        expect(screen.getByText('Return')).toBeInTheDocument();
    });

    it('Renders WhatGPT3 component with Portuguese language', () => {
        // Arrange
        render(<WhatGPT3 englishLanguage={false} />);

        // Assert
        expect(screen.getByText('SOMOS UMA ORGANIZAÇÃO QUE BUSCA REUNIR MORADORES PELA MELHORIA DO BAIRRO')).toBeInTheDocument();
        expect(screen.getByText('Onde atuamos')).toBeInTheDocument();
        expect(screen.getByText('História')).toBeInTheDocument();
        expect(screen.getByText('Retorno')).toBeInTheDocument();
    });

    // You can add more test cases based on your specific requirements
});
