import { LandingHero } from "@/components/landing-hero";
import { Button } from "@/components/ui/button";
import { LandingNavbar } from "@/components/ui/landing-navbar";

const landingPage = () => {
    return (
        <div className="h-full">
            <LandingNavbar />
            <LandingHero />
        </div>
    );
}

export default landingPage;