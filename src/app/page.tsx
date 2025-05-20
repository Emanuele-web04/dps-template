import BackgroundGradient from "@/components/BackgroundGradient";
import HeroLabels from "@/components/HeroLabels";
import HeroText from "@/components/HeroText";
import EmailForm from "@/components/JoinWaitlist/EmailForm";
import Navbar from "@/components/Navbar";
import ShowcaseImages from "@/components/ShowcaseImages";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden relative bg-white bg-[url('/mobilegrid.png')] md:bg-[url('/desktopgrid.png')] bg-center bg-no-repeat bg-cover bg-fixed">
      {/* Gradient blobs */}
      <BackgroundGradient />

      {/* Navbar */}
      <div className="z-10 fixed flex items-center justify-between p-1.5 sm:py-2 sm:px-4 mb-3 top-5 left-8 sm:left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-lg ring-1 ring-neutral-100 rounded-xl shadow-lg mx-auto">
        <Navbar />
      </div>

      {/* Content */}
      <div className="relative md:top-5 flex flex-col gap-6 justify-center items-center">
        <HeroLabels />
        <HeroText />
        <EmailForm />
        <div className="md:block hidden">
          <ShowcaseImages />
        </div>
      </div>
    </div>
  );
};

export default Home;
