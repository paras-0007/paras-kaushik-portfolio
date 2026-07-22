import {
  achievements,
  certifications,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "./resume-data";

export type TerminalLink = { label: string; href: string };

export type TerminalResponse = {
  title: string;
  lines: string[];
  links?: TerminalLink[];
};

type Topic = {
  id: string;
  aliases: string[];
  hint: string;
  respond: () => TerminalResponse;
};

const topics: Topic[] = [
  {
    id: "about",
    aliases: ["about", "who", "whoami", "intro", "summary", "bio"],
    hint: "who is paras",
    respond: () => ({
      title: `whoami`,
      lines: [`${profile.name} - ${profile.role}`, profile.tagline, "", profile.summary],
    }),
  },
  {
    id: "projects",
    aliases: ["projects", "project", "flashr", "gradesmith", "kairos", "hirefl", "qwen", "work", "build", "ship"],
    hint: "ls projects/",
    respond: () => ({
      title: "ls projects/",
      lines: projects.map((p) => `${p.title} -> ${p.metric}`),
    }),
  },
  {
    id: "experience",
    aliases: ["experience", "exp", "jobs", "career", "history", "infutrix", "dataplay", "aicte"],
    hint: "cat experience.log",
    respond: () => ({
      title: "cat experience.log",
      lines: experience.map((e) => `${e.role} @ ${e.org} (${e.meta})`),
    }),
  },
  {
    id: "skills",
    aliases: ["skills", "stack", "tools", "tech", "toolkit"],
    hint: "cat skills.json",
    respond: () => ({
      title: "cat skills.json",
      lines: skillGroups.map((g) => `${g.title}: ${g.tags.join(", ")}`),
    }),
  },
  {
    id: "achievements",
    aliases: ["achievements", "awards", "recognition", "leadership", "hackathon", "sih", "ideathon"],
    hint: "cat achievements.log",
    respond: () => ({
      title: "cat achievements.log",
      lines: achievements.map((a) => `${a.title} - ${a.copy}`),
    }),
  },
  {
    id: "certifications",
    aliases: ["certifications", "certs", "certificates", "courses"],
    hint: "ls certifications/",
    respond: () => ({
      title: "ls certifications/",
      lines: certifications,
    }),
  },
  {
    id: "education",
    aliases: ["education", "college", "degree", "cgpa", "mait"],
    hint: "cat education.txt",
    respond: () => ({
      title: "cat education.txt",
      lines: [`${education.degree}`, `${education.school} · ${education.dates}`, `CGPA: ${education.cgpa}`],
    }),
  },
  {
    id: "contact",
    aliases: ["contact", "email", "reach", "connect", "linkedin", "hire", "consulting"],
    hint: "cat contact.txt",
    respond: () => ({
      title: "cat contact.txt",
      lines: [profile.email, profile.phone, profile.linkedinLabel, profile.location],
      links: [
        { label: "Email me", href: `mailto:${profile.email}` },
        { label: "LinkedIn", href: profile.linkedin },
        { label: "Hire me", href: "/hire" },
        { label: "Consulting", href: "/consulting" },
      ],
    }),
  },
  {
    id: "resume",
    aliases: ["resume", "cv", "download"],
    hint: "open resume.pdf",
    respond: () => ({
      title: "open resume.pdf",
      lines: ["Opening the full resume PDF in a new tab..."],
      links: [{ label: "Open resume", href: profile.resumeUrl }],
    }),
  },
  {
    id: "sudo",
    aliases: ["sudo hire me", "sudo", "hire me"],
    hint: "sudo hire me",
    respond: () => ({
      title: "sudo hire me",
      lines: ["[sudo] permission granted.", "Redirecting to /hire ..."],
      links: [{ label: "Go to /hire", href: "/hire" }],
    }),
  },
  {
    id: "help",
    aliases: ["help", "commands", "?"],
    hint: "help",
    respond: () => ({
      title: "help",
      lines: [
        "Try: about, projects, experience, skills, achievements, certifications, education, contact, resume",
        "Easter eggs: whoami, sudo hire me",
      ],
    }),
  },
];

export const suggestedCommands = ["projects", "experience", "skills", "achievements", "contact", "resume"];

export function runCommand(rawInput: string): TerminalResponse {
  const input = rawInput.trim().toLowerCase();
  if (!input) {
    return {
      title: "help",
      lines: ["Type a command, or try one of the suggestions below."],
    };
  }

  const exact = topics.find((t) => t.aliases.includes(input));
  if (exact) return exact.respond();

  const partial = topics.find((t) => t.aliases.some((alias) => input.includes(alias) || alias.includes(input)));
  if (partial) return partial.respond();

  return {
    title: `command not found: ${rawInput}`,
    lines: [`"${rawInput}" didn't match anything.`, "Try: about, projects, experience, skills, achievements, certifications, education, contact, resume"],
  };
}
