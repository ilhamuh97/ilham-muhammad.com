"use client";

import { useState, useEffect, useRef } from "react";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";

const journeyItems = [
  {
    id: 1,
    type: "education",
    title: "International Media and Computing (MSc)",
    organization: "University of Applied Sciences",
    location: "Berlin, Germany",
    period: "Apr 2021 - Apr 2025",
    description:
      "Completing a Master's degree in International Media and Computing, focusing on deeper topics in web development, artificial intelligence, and computer vision. Engaged in various projects that integrate these fields, enhancing my skills in both theoretical and practical aspects of computing.",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
    darkColor: "from-blue-400 to-cyan-400",
  },
  {
    id: 2,
    type: "work",
    emplyomentType: "Working Student",
    title: "Frontend Development & Consulting",
    organization: "Bosch.io GmbH",
    location: "Berlin, Germany",
    period: "May 2023 - Apr 2025",
    description:
      "Collaborated on the development of an internal logistics management application, focusing on front-end implementation using Angular, RxJS for efficient data handling, and data visualization with AG Grid and Highcharts. Contributed to unit testing with Jasmine and Karma, and participated actively in agile processes using Jira for task and sprint management.",
    icon: Briefcase,
    color: "from-red-500 to-orange-500",
    darkColor: "from-red-400 to-orange-400",
  },
  {
    id: 3,
    type: "work",
    emplyomentType: "Working Student",
    title: "Software Engineering",
    organization: "daato GmbH",
    location: "Berlin, Germany",
    period: "Oct 2022 - Apr 2023",
    description:
      "Proficient in JavaScript and TypeScript, with experience processing Excel data into JSON for chart-based visualizations. Created configuration files to support ESG report generation using JavaScript/TypeScript frameworks.",
    icon: Briefcase,
    color: "from-red-500 to-orange-500",
    darkColor: "from-red-400 to-orange-400",
  },
  {
    id: 4,
    type: "work",
    emplyomentType: "Working Student",
    title: "Software Development",
    organization: "i-ways sales solutions GmbH",
    location: "Berlin, Germany",
    period: "Apr 2020 - Mar 2022",
    description:
      "Collaborated on software development for e-commerce websites using ReactJS, CakePHP, MySQL, HTML5, CSS3, and JavaScript. Ensured quality through testing and contributed in agile environments using Scrum and Kanban methodologies.",
    icon: Briefcase,
    color: "from-red-500 to-orange-500",
    darkColor: "from-red-400 to-orange-400",
  },
  {
    id: 6,
    type: "education",
    title: "International Media and Computing (BSc)",
    organization: "University of Applied Sciences",
    location: "Berlin, Germany",
    period: "Oct 2016 - Aug 2021",
    description:
      "Started my academic journey in International Media and Computing, focusing on visual computing and web development. Engaged in various projects related to artificial intelligence, computer vision, and web development.",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
    darkColor: "from-blue-400 to-cyan-400",
  },
];

export function Journey() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      // Find the item closest to the center of the viewport
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      itemRefs.current.forEach((item, index) => {
        if (item) {
          const itemRect = item.getBoundingClientRect();
          const itemTop = itemRect.top - containerTop;
          const itemCenter = itemTop + itemRect.height / 2;
          const viewportCenter = containerHeight / 2;
          const distance = Math.abs(itemCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      // Special handling for first and last items
      if (scrollTop < 50) {
        closestIndex = 0;
      } else if (scrollTop + clientHeight > scrollHeight - 50) {
        closestIndex = journeyItems.length - 1;
      }

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const employmentPill = (et?: string) => {
    if (!et) return null;
    return (
      <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] sm:text-xs font-medium
                      border bg-gray-50 text-gray-700 border-gray-200
                      dark:bg-gray-700/50 dark:text-gray-200 dark:border-gray-600">
        {et}
      </span>
    );
  };

  return (
    <section
      id="journey"
      className="h-dvh flex flex-col px-4 pt-16 pb-6 relative overflow-hidden"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Enhanced Green Forest Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 via-teal-300 to-green-400 dark:from-emerald-950 dark:via-teal-950 dark:to-cyan-950">
        <div className="absolute inset-0 opacity-75 dark:opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-300/70 via-transparent to-emerald-300/70"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-emerald-400/80 to-transparent rounded-full blur-3xl animate-float-down"></div>
          <div
            className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-teal-400/80 to-transparent rounded-full blur-3xl animate-float-up"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute top-1/5 right-1/7 w-72 h-72 bg-gradient-to-br from-green-300/60 to-emerald-300/60 rounded-full blur-2xl animate-float-circle"
            style={{ animationDelay: "6s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-teal-300/60 to-cyan-300/60 rounded-full blur-2xl animate-float-left"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/4 left-1/3 w-56 h-56 bg-gradient-to-br from-lime-300/50 to-green-300/50 rounded-full blur-3xl animate-float-right"
            style={{ animationDelay: "8s" }}
          ></div>
        </div>
      </div>

      <div
        className={`flex-shrink-0 pt-8 pb-6 transition-all duration-1000 relative z-10 ${
          isVisible ? "animate-fade-in-down" : "opacity-0"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-emerald-800 to-teal-800 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent drop-shadow-sm">
          My Journey
        </h2>
      </div>

      {/* Interactive Timeline Container */}
      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide relative z-10"
        style={{
          scrollSnapType: "y mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="relative max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto px-4 pt-8 pb-12">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 sm:w-1.5 lg:w-2 bg-gradient-to-b from-emerald-400 via-teal-500 to-green-600 dark:from-emerald-600 dark:via-teal-700 dark:to-cyan-800 rounded-full shadow-lg" />

          {/* Timeline Items */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {journeyItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activeIndex === index;

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="relative"
                  style={{ scrollSnapAlign: "center" }}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full border-4 sm:border-6 lg:border-8 border-white dark:border-gray-800 transition-all duration-700 z-20 shadow-lg ${
                      isActive
                        ? `bg-gradient-to-r ${item.color} shadow-2xl scale-125 sm:scale-150 lg:scale-175`
                        : "bg-gray-400 dark:bg-gray-600 scale-100"
                    }`}
                  >
                    <div
                      className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-500 ${
                        isActive ? "scale-100" : "scale-0"
                      }`}
                    >
                      <IconComponent
                        className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white transition-all duration-500`}
                      />
                    </div>
                  </div>

                  {/* Content Card - Always Centered */}
                  <div className="flex justify-center">
                    <div
                      className={`
                        w-full max-w-sm sm:max-w-md lg:max-w-lg
                        transition-all duration-700 ${
                          isActive
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-70 translate-y-8 scale-95"
                        }
                      `}
                    >
                      <div
                        className={`bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border transition-all duration-500 ${
                          isActive
                            ? `shadow-2xl border-opacity-50`
                            : "border-white/60 dark:border-gray-700/50 shadow-lg"
                        }`}
                        style={{
                          borderColor: isActive
                            ? `rgb(${
                                item.color.includes("blue")
                                  ? "59 130 246"
                                  : item.color.includes("emerald")
                                  ? "16 185 129"
                                  : item.color.includes("purple")
                                  ? "147 51 234"
                                  : item.color.includes("orange")
                                  ? "249 115 22"
                                  : item.color.includes("yellow")
                                  ? "245 158 11"
                                  : item.color.includes("indigo")
                                  ? "99 102 241"
                                  : "34 197 94"
                              })`
                            : undefined,
                        }}
                      >
                        {/* Header */}
                        <div className="flex items-start gap-4 sm:gap-5 lg:gap-6 mb-4 sm:mb-5 lg:mb-6">
                          <div
                            className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-500 shadow-md ${
                              isActive
                                ? `bg-gradient-to-r ${item.color} shadow-lg`
                                : "bg-gray-300 dark:bg-gray-700"
                            }`}
                          >
                            <IconComponent
                              className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-colors duration-500 ${
                                isActive
                                  ? "text-white"
                                  : "text-gray-600 dark:text-gray-400"
                              }`}
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3
                              className={`text-lg sm:text-xl lg:text-2xl font-bold transition-colors duration-500 ${
                                isActive
                                  ? "text-gray-800 dark:text-gray-100"
                                  : "text-gray-700 dark:text-gray-400"
                              }`}
                            >
                              {item.title}
                            </h3>
                            <div className="flex items-center gap-2 flex-wrap">
                              <p
                                className={`text-sm sm:text-base lg:text-lg font-semibold transition-all duration-500 ${
                                  isActive
                                    ? `bg-gradient-to-r ${item.color} bg-clip-text text-transparent`
                                    : "text-gray-600 dark:text-gray-500"
                                }`}
                              >
                                {item.organization}
                              </p>
                              {item.type === "work" && employmentPill(item?.emplyomentType)}
                            </div>
                          </div>
                        </div>

                        {/* Meta Information */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 lg:gap-8 mb-4 sm:mb-5 lg:mb-6">
                          <div
                            className={`flex items-center gap-2 sm:gap-3 transition-colors duration-500 ${
                              isActive
                                ? "text-gray-700 dark:text-gray-400"
                                : "text-gray-600 dark:text-gray-500"
                            }`}
                          >
                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                            <span className="text-xs sm:text-sm lg:text-base font-medium">
                              {item.period}
                            </span>
                          </div>
                          <div
                            className={`flex items-center gap-2 sm:gap-3 transition-colors duration-500 ${
                              isActive
                                ? "text-gray-700 dark:text-gray-400"
                                : "text-gray-600 dark:text-gray-500"
                            }`}
                          >
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                            <span className="text-xs sm:text-sm lg:text-base font-medium">
                              {item.location}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p
                          className={`text-sm sm:text-base lg:text-lg leading-relaxed transition-colors duration-500 ${
                            isActive
                              ? "text-gray-800 dark:text-gray-300"
                              : "text-gray-600 dark:text-gray-500"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
