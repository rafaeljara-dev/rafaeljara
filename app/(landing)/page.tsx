import { LandingHero } from "@/components/landing-hero";
import { Button } from "@/components/ui/button";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingContent } from "@/components/landing-content";

const landingPage = () => {
    return (
        <div className="h-full lg:px-20 lg:mx-20">
            <LandingNavbar />
            <div className="py-10">
                <LandingHero />
            </div>
            <LandingContent />
        </div>
    );
}

export default landingPage;