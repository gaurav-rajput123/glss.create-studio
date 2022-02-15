import React from "react";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import Card from '@mui/material/Card';
// import { Step } from "react-step-progress-bar";
export default function Progress() {
  const step1Content = <h1></h1>;
  const step2Content = <h1></h1>;
  const step3Content = <h1></h1>;

  function step2Validator() {
    return true;
  }

  return (
    <div className="Progress">
      <card>
      <StepProgressBar
        startingStep={0}
        steps={[
          {
            label: "Briefing",
            name: "Briefing",
            // content: step1Content
          },
          {
            label: "Image-Acquisition",
            name: "Image-Acquisition",
            // content: step2Content
          },
          {
            label: "Image-processing",
            name: "Image Processing",
            // content: step3Content,
            validator: step2Validator
          },
          {
            label: "Finish",
            name: "Finish",
            // content: step3Content
          }
        ]}
      />
      </card>
    </div>
  );
}