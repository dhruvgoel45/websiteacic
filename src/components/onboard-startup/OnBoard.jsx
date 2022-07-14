import { useState } from "react";
import ProgressLine from "./components/ProgressLine";
import ContactInfo from "./onBoarding/ContactInfo";
import AboutStartup from "./onBoarding/AboutStartup";
import Category from "./onBoarding/Category";
import YourInterest from "./onBoarding/YourInterest";

const OnBoard = () => {
  const [step, setStep] = useState(1);

  const handleClick = (stepState) => {
    setStep(stepState);
  };

  return (
    <>
      <div className="container mx-auto py-8 pl-4">
        <div className="mt-8">
          <ProgressLine
            steps={["About Startup", "Contact Info", "Category", "Your Startup"]}
            currentStep={step}
          />
        </div>
        {(() => {
          switch (step) {
            case 1:
              return <AboutStartup handleClick={handleClick} />;
            case 2:
              return <ContactInfo handleClick={handleClick} />;
            case 3:
              return <Category handleClick={handleClick} />;
            case 4:
              return <YourInterest handleClick={handleClick} />;
            default:
              return null;
          }
        })()}
      </div>
    </>
  );
};

export default OnBoard;
