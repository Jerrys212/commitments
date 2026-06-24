import Commitments from '@/components/sections/commitments';
import HeroSection from '@/components/sections/hero-section';
import { SecretButton } from '@/components/secret-button';
import { CatRain } from '@/components/cat-rain';

export default function Home() {
  return (
    <>
      <CatRain />
      <HeroSection />
      <Commitments />
      <SecretButton />
    </>
  );
}
