<script setup>
import { ref } from 'vue'

import HeroContent from "../../../components/contents/HeroContent.vue"
import DescContent from "../../../components/contents/DescContent.vue"
import FSolutionContent from "../../../components/contents/FSolutionContent.vue"
import SSolutionContent from "../../../components/contents/SSolutionContent.vue"
import NumberContent from "../../../components/contents/NumberContent.vue"

import Section from "../../../components/shared/Section.vue"

import HeroSection from "./HeroSection.vue"
import DescSection from "./DescSection.vue"
import FSolutionSection from "./FSolutionSection.vue"
import SSolutionSection from "./SSolutionSection.vue"
import NumberSection from "./NumberSection.vue"

const options = {
  verticalCentered: true,
}
</script>


<template>
    <full-page ref="fullpage" :options="options" id="fullpage">
        <Section>
            <HeroSection>
                <HeroContent />
            </HeroSection>
        </Section>

        <Section>
            <DescSection>
                <DescContent />
            </DescSection>
        </Section>

        <Section>
            <FSolutionSection>
                <FSolutionContent />
            </FSolutionSection>
        </Section>

        <Section>
            <SSolutionSection>
                <SSolutionContent />
            </SSolutionSection>
        </Section>

        <Section>
            <NumberSection>
                <NumberContent/>
            </NumberSection>
        </Section>
    </full-page>
</template>

<style scoped>

 </style>