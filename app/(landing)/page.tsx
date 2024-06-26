import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingContent } from "@/components/landing-content";

const landingPage = () => {
    return (
        <div className="h-full lg:px-20 lg:mx-20">
            <div className="bg-zinc-950 dark:bg-white">
                <LandingNavbar />
            </div>
            <div className="sm:py-4 lg:py-24">
                <LandingHero />
            </div>
            <LandingContent />
        </div>
    );
}

export default landingPage;