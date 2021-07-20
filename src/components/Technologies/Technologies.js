import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
    <Section id="tech">
        <SectionDivider />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            I've worked with a range of technologies in web development.
            From Front end development to Backend infastructures, to RESTFUL API's and 3rd party integratioins.
        </SectionText>
        <List>
            <ListItem>
                <DiReact size="3rem" />
                <ListContainer>
                    <ListTitle>
                        Front-End
                    </ListTitle>
                    <ListParagraph>
                        Expirience with ReactJs, NextJs, <br />
                        multiple front end css libraries & recently started learning TypeScript.
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size="3rem" />
                <ListContainer>
                    <ListTitle>
                        Back-End
                    </ListTitle>
                    <ListParagraph>
                        Expirience with NodeJs, NPM, MongoDB, Firebase, SQL based databases &<br />
                        overall backend support.
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <DiFirebase size="3rem" />
                <ListContainer>
                    <ListTitle>
                        API's
                    </ListTitle>
                    <ListParagraph>
                        Expirience building in house RESTFUL API's & <br />
                        3rd party API integratioins.
                    </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
