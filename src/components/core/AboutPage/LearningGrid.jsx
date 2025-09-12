import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highliteText: "Anyone, Anywhere",
    description:
      "EduVerse partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "   Tailored to industry demands, our curriculum ensures students acquire relevant skills, preparing them for real-world challenges in the ever-evolving landscape of computer science.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Dynamic and engaging, our learning methods blend theory with hands-on practice, promoting active comprehension and mastery, ensuring students retain and apply knowledge effectively",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "   Earn globally recognized certificates validating your proficiency enhancing your credibility in the competitive field of computer science.",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Experience seamless evaluation with our auto-grading system.Receive instant, constructive feedback on your coding exercises, accelerating your learning journey with efficient and effective assessments.",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "   Bridge the gap between learning and application. Our platform prepares you for the professional world with projects and challenges mirroring real-world scenarios, making you job-ready from day one.",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : card.order % 2 === 0
                ? "bg-richblack-800 h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightText text={card.highliteText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
