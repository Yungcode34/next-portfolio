import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
    { number: 10, text: 'Real World Applications...' },
    { number: 3, text: 'Certificates...', },
    { number: 3, text: 'Years of experience...', },
    { number: '∞', text: 'Lines of code...', }
];

const Acomplishments = () => (
    <Section>
        <SectionTitle>Personal Acomplishments</SectionTitle>
        <Boxes>
            {data.map((card, index) => (
                <Box>
                    <BoxNum>{card.number == '∞' ? `${card.number}` : `${card.number}+`} </BoxNum>
                    <BoxText>{card.text}</BoxText>
                </Box>
            ))}
        </Boxes>
    </Section>
);

export default Acomplishments;
