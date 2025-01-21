export const useSkills = () => {
  const skills = [
    { skill: "language", value: "JavaScript" },
    { skill: "language", value: "TypeScript" },
    { skill: "language", value: "Python" },
    { skill: "language", value: "Java" },
    { skill: "language", value: "C++" },
    { skill: "language", value: "C" },
    { skill: "language", value: "C#" },
    { skill: "language", value: "HTML" },
    { skill: "language", value: "CSS" },
    { skill: "language", value: "SQL" },
    { skill: "language", value: "PHP" },
    { skill: "language", value: "Go" },
    { skill: "framework", value: "React" },
    { skill: "framework", value: "React Native" },
    { skill: "framework", value: "Next.js" },
    { skill: "framework", value: "Node.js" },
    { skill: "framework", value: "Express.js" },
    { skill: "framework", value: "Tailwind CSS" },
    { skill: "framework", value: "Bootstrap" },
    { skill: "framework", value: "Material UI" },
    { skill: "tool", value: "Git" },
    { skill: "tool", value: "GitHub" },
    { skill: "tool", value: "Google Console" },
    { skill: "tool", value: "Apple Developer" },
    { skill: "tool", value: "VS Code" },
    { skill: "tool", value: "Postman" },
    { skill: "tool", value: "Figma" },
    { skill: "tool", value: "Jira" },
    { skill: "tool", value: "Confluence" },
    { skill: "tool", value: "Slack" },
  ];

  return {
    skills,
  } as const;
};
