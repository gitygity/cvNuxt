<template>
  <main>
    <BaseInfoSection></BaseInfoSection>
    <SkillsSection></SkillsSection>
    <PortfolioSection></PortfolioSection>
    <ExperienceSection></ExperienceSection>
    <EducationSection></EducationSection>
    <ReferencesSection></ReferencesSection>
  </main>
  <ContactSection></ContactSection>
</template>

<script setup lang="ts">
import {EducationSection} from '~/components/education-section'
import {ExperienceSection} from '~/components/experience-section'
import {PortfolioSection} from '~/components/portfolio-section'
import {ReferencesSection} from '~/components/references-setion'
import {SkillsSection} from '~/components/skills-section'
import {ContactSection} from '~/components/contact-section'
import { AboutSection } from '~/components/about-section'

definePageMeta({
  middleware: "is-authorized",
});
</script>


