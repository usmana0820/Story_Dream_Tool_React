import { useState } from 'react'
import SectionDivider from '../../../components/common/SectionDivider'
import BlogModal from '../../../components/modal/BlogModal'
import useHeroSlider from '../../../hooks/useHeroSlider'
import useRevealOnScroll from '../../../hooks/useRevealOnScroll'
import { BLOG_ARTICLES } from '../../../constants/landing'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import FeaturesSection from './sections/FeaturesSection'
import DemoStoriesSection from './sections/DemoStoriesSection'
import EmotionDafSection from './sections/EmotionDafSection'
import MotionPreviewSection from './sections/MotionPreviewSection'
import WorkflowSection from './sections/WorkflowSection'
import CharactersSection from './sections/CharactersSection'
import BlogSection from './sections/BlogSection'
import TestimonialsSection from './sections/TestimonialsSection'
import CtaSection from './sections/CtaSection'
import PricingSection from './sections/PricingSection'
import ContactSection from './sections/ContactSection'

export default function HomePage() {
  const [blogArticle, setBlogArticle] = useState(null)

  useRevealOnScroll()
  useHeroSlider()

  const openArticle = (id) => setBlogArticle(BLOG_ARTICLES[id])
  const closeArticle = () => setBlogArticle(null)

  return (
    <>
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <FeaturesSection />
      <SectionDivider />
      <DemoStoriesSection />
      <SectionDivider />
      <EmotionDafSection />
      <SectionDivider />
      <MotionPreviewSection />
      <SectionDivider />
      <WorkflowSection />
      <SectionDivider />
      <CharactersSection />
      <SectionDivider />
      <BlogSection onOpenArticle={openArticle} />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <CtaSection />
      <SectionDivider />
      <PricingSection />
      <SectionDivider />
      <ContactSection />

      <BlogModal article={blogArticle} onClose={closeArticle} />
    </>
  )
}
