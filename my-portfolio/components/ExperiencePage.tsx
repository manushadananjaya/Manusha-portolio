"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Timeline } from "@/components/ui/timeline";

interface ExperienceData {
  title: string;
  content: JSX.Element;
}

export function ExperiencePage() {
  const [expandedSections, setExpandedSections] = useState<
    Record<number, boolean>
  >({});

  const toggleExpand = (index: number): void => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const data: ExperienceData[] = [
    {
      title: "2024",
      content: (
        <>
          <div className="relative p-6 md:p-8 rounded-lg shadow-lg max-w-xl mx-auto">
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold mb-2">
              Web Development and Marketing Committee Lead
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm font-medium mb-4">
              IEEE Robotics and Automation Society - University of Moratuwa
            </p>
            {expandedSections[0] ? (
              <>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal leading-relaxed mb-6">
                    Dedicated Marketing and Web Development Lead with a strong
                    passion for technology and innovation. I&apos;m currently
                    spearheading the marketing and web development efforts for the
                    IEEE Robotics and Automation Society at the University of
                    Moratuwa. As a technology enthusiast and a creative marketer,
                    I am committed to advancing the field of robotics and
                    automation through effective digital strategies and a
                    compelling online presence.
                </p>
                <ul className="list-disc list-inside mb-4 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm space-y-2">
                  <li>
                    Leading marketing and web development initiatives for IEEE
                    Robotics and Automation Society.
                  </li>
                  <li>
                    Developing comprehensive digital marketing strategies to
                    enhance brand visibility.
                  </li>
                <li>
                    Managing and optimizing the society&apos;s website for better
                    user engagement.
                </li>
                  <li>
                    Creating and curating engaging content including articles,
                    videos, and social media campaigns.
                  </li>
                  <li>
                    Collaborating with teams to organize seminars, webinars, and
                    workshops.
                  </li>
                </ul>
                <div className="flex justify-center mt-4">
                  <Image
                    src="/ieee-robo.png"
                    alt="IEEE Robotics and Automation Society"
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                  />
                </div>
              </>
            ) : (
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal leading-relaxed mb-6">
                Dedicated Marketing and Web Development Lead with a strong
                passion for technology and innovation...
              </p>
            )}
            <button
              className="text-blue-600 dark:text-blue-400 text-xs md:text-sm font-semibold mt-4"
              onClick={() => toggleExpand(0)}
            >
              {expandedSections[0] ? "Collapse" : "Expand"}
            </button>
          </div>

          <div className="relative p-6 md:p-8 rounded-lg shadow-lg max-w-xl mx-auto">
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold mb-2">
              Events Committee Member
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm font-medium mb-4">
              IEEE Student Branch - University of Moratuwa
            </p>
            {expandedSections[1] ? (
              <>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal leading-relaxed mb-6">
                  As an Events Committee Member for the IEEE Student Branch at
                  the University of Moratuwa, I was responsible for organizing
                  and executing various events aimed at promoting professional
                  development, technical innovation, and community engagement.
                </p>
                <ul className="list-disc list-inside mb-4 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm space-y-2">
                  <li>
                    Planned and managed events, from workshops to seminars,
                    ensuring smooth logistics and a high-quality experience for
                    participants.
                  </li>
                  <li>
                    Collaborated with team members to secure venues, arrange
                    resources, and coordinate schedules.
                  </li>
                  <li>
                    Worked with external partners and sponsors to gather support
                    and funding for events.
                  </li>
                  <li>
                    Facilitated event-day operations, including registration,
                    speaker management, and attendee assistance.
                  </li>
                  <li>
                    Gathered feedback post-event to improve future planning and
                    execution.
                  </li>
                </ul>
                <div className="flex justify-center mt-4">
                  <Image
                    src="/IEEE-STUDENT-B-LOGO.webp"
                    alt="IEEE Robotics and Automation Society"
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                  />
                </div>
              </>
            ) : (
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal leading-relaxed mb-6">
                As an Events Committee Member for the IEEE Student Branch at the
                University of Moratuwa, I was responsible for organizing and
                executing various events...
              </p>
            )}
            <button
              className="text-blue-600 dark:text-blue-400 text-xs md:text-sm font-semibold mt-4"
              onClick={() => toggleExpand(1)}
            >
              {expandedSections[1] ? "Collapse" : "Expand"}
            </button>
          </div>
        </>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div className="relative p-6 md:p-8 rounded-lg shadow-lg max-w-xl mx-auto">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-semibold mb-2">
            Logistics Management Committee Member
          </p>
          <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm font-medium mb-4">
            IEEE Student Branch - University of Moratuwa
          </p>
          {expandedSections[2] ? (
            <>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal leading-relaxed mb-6">
                I served as a Logistics Management Committee Member for the IEEE
                Student Branch at the University of Moratuwa, contributing to
                the seamless execution of various IEEE events.
              </p>
              <ul className="list-disc list-inside mb-4 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm space-y-2">
                <li>
                  Coordinated logistics for events, ensuring smooth operations.
                </li>
                <li>
                  Assisted with venue selection, setup, and resource
                  procurement.
                </li>
                <li>
                  Managed relationships with sponsors and vendors, optimizing
                  budget use.
                </li>
                <li>
                  Oversaw event logistics, including registration and on-site
                  support.
                </li>
                <li>
                  Ensured safety and compliance by implementing emergency
                  protocols.
                </li>
                <li>
                  Conducted post-event evaluations for continuous improvement.
                </li>
              </ul>
              <div className="flex justify-center mt-4">
                <Image
                  src="/IEEE-STUDENT-B-LOGO.webp"
                  alt="IEEE Robotics and Automation Society"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                />
              </div>
            </>
          ) : (
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal leading-relaxed mb-6">
              I served as a Logistics Management Committee Member for the IEEE
              Student Branch...
            </p>
          )}
          <button
            className="text-blue-600 dark:text-blue-400 text-xs md:text-sm font-semibold mt-4"
            onClick={() => toggleExpand(2)}
          >
            {expandedSections[2] ? "Collapse" : "Expand"}
          </button>
        </div>
      ),
    },
    {
      title: "More experiences",
      content: (
        <div className="relative p-6 md:p-8 rounded-lg shadow-lg max-w-xl mx-auto">
          <ul className="list-disc list-inside mb-4 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm space-y-2">
            {expandedSections[3] ? (
              <>
                <li>Web Development Committee Member - RiseUp Mora 2024</li>
                <li>Logistics Management Committee Lead - Open Week 2024</li>
                <li>Logistics Management Committee Lead - Open Week 2023</li>
                <li>
                  Organizing Committee Member - IEEEXTREAM 16.0 Programming
                  Competition 2023
                </li>
                <li>
                  Web Development Committee Member - Mora UXPlore 1.0 UX Design
                  Competition 2023
                </li>
                <li>Member - Leo Club - University of Moratuwa</li>
              </>
            ) : (
              <li>Web Development Committee Member - RiseUp Mora 2024...</li>
            )}
          </ul>
          <button
            className="text-blue-600 dark:text-blue-400 text-xs md:text-sm font-semibold mt-4"
            onClick={() => toggleExpand(3)}
          >
            {expandedSections[3] ? "Collapse" : "Expand"}
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
