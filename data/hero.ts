export const heroSectionMeta = {
  index: "00",
};

export const heroKicker = "Software Engineer";

export const heroIntroTexts = [
  "Hi, my name is Ilham.",
  "A software engineer.",
  "Turning ideas into solutions.",
];

export type HeroBioSegment =
  | { text: string; emphasis?: boolean }
  | { break: true };

export const heroBio: HeroBioSegment[] = [
  { text: "Experienced and motivated in building software with modern frameworks such as " },
  { text: "React, Angular, Node.js, and Java Springboot.", emphasis: true },
  { break: true },
  { break: true },
  { text: "I build " },
  { text: "web apps", emphasis: true },
  { text: " and explore " },
  { text: "visual computing", emphasis: true },
  { text: ", from computer vision to data visualization. Let’s have a chat! ☕" },
];

export const heroSocialLinks = {
  linkedin: "https://www.linkedin.com/in/ilhammuhammad-735b2b187/",
  github: "https://github.com/ilhamuh97",
  email: "mailto:personal@ilham-muhammad.com",
};
