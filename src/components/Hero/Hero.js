import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome <br/>
        Take a glance !
      </SectionTitle>
      <SectionText>
        Join me discovering what i've been up to ! My journy as a software developer ! All the cool things i've built the last few years, progressing not only as a developer but as a person.
      </SectionText>
      <Button onClick={()=> window.location = '#about'}>Discover more...</Button>
    </LeftSection>
  </Section>
);

export default Hero;