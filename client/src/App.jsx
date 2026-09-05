import Header from "./components/Header";
import Hero from "./components/Hero";
import PromoBanner from "./components/PromoBanner";
import PackagesSection from "./components/PackagesSection";
import TestsSection from "./components/TestsSection";
import BookingSection from "./components/BookingSection";
import ContactSection from "./components/ContactSection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import { useBooking } from "./hooks/useBooking";
import { STANDARD_TESTS, PACKAGES } from "./data/testsData";
import { CUSTOM_TESTS } from "./data/customTests";
import { IconTestTube, IconFlask } from "./components/Icons";

export default function App() {
  const { isSelected, toggleTest, togglePackage, items, total, resetSelection } = useBooking();

  return (
    <>
      <Header />
      <Hero />
      <PromoBanner />

      <PackagesSection
        packages={PACKAGES}
        isSelected={isSelected}
        onTogglePackage={togglePackage}
      />

      <TestsSection
        id="tests"
        title="Individual Tests"
        subtitle="Select any tests you need"
        tests={STANDARD_TESTS}
        isSelected={isSelected}
        onToggle={toggleTest}
        icon={IconTestTube}
        altBg
      />

      {/* <TestsSection
        id="custom"
        title="Custom Tests"
        subtitle="Additional tests configured by the lab"
        tests={CUSTOM_TESTS}
        isSelected={isSelected}
        onToggle={toggleTest}
        icon={IconFlask}
      /> */}

      <TeamSection />

      <BookingSection items={items} total={total} resetSelection={resetSelection} />

      <ContactSection />

      <Footer />
    </>
  );
}
