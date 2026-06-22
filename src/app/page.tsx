import Commitments from '@/components/sections/commitments';
import HeroSection from '@/components/sections/hero-section';
import { SecretButton } from '@/components/secret-button';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Commitments />
      <SecretButton />
    </>
  );
}
