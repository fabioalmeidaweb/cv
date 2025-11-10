import { Mail, Phone, Linkedin, Github, Globe } from "lucide-react";
import type { Contact } from "@/types/resume";

interface ResumeHeaderProps {
  name: string;
  position: string;
  contacts: Contact[];
}

const getContactIcon = (type: string) => {
  switch (type) {
    case "mailto":
      return <Mail className="w-4 h-4" />;
    case "tel":
      return <Phone className="w-4 h-4" />;
    case "url":
      return <Globe className="w-4 h-4" />;
    default:
      return null;
  }
};

const getSpecialIcon = (value: string) => {
  if (value.includes("linkedin.com")) {
    return <Linkedin className="w-4 h-4" />;
  }
  if (value.includes("github.com")) {
    return <Github className="w-4 h-4" />;
  }
  return null;
};

export function ResumeHeader({ name, position, contacts }: ResumeHeaderProps) {
  // Separate contacts into phone/email and URLs
  const phoneAndEmail = contacts.filter(
    (c) => c.type === "tel" || c.type === "mailto",
  );
  const otherLinks = contacts.filter((c) => c.type === "url");

  const renderContact = (contact: Contact, index: number) => {
    const specialIcon = getSpecialIcon(contact.value);
    const icon = specialIcon || getContactIcon(contact.type);
    const href =
      contact.type === "mailto"
        ? `mailto:${contact.value}`
        : contact.type === "tel"
          ? `tel:${contact.value}`
          : contact.value;

    return (
      <a
        key={index}
        href={href}
        target={contact.type === "url" ? "_blank" : undefined}
        rel={contact.type === "url" ? "noopener noreferrer" : undefined}
        className="flex items-center gap-1.5 text-xs text-gray-700 hover:text-cyan-600 transition-colors w-full"
      >
        <span className="w-4 h-4 flex items-center justify-center shrink-0">
          {icon}
        </span>
        <span className="hidden sm:inline">{contact.value}</span>
      </a>
    );
  };

  return (
    <header className="mb-5">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        {/* Left side: Name and Position */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
            {name}
          </h1>
          <p className="text-xl md:text-2xl text-cyan-600 font-semibold">
            {position}
          </p>
        </div>

        {/* Right side: Contacts as column */}
        <div className="flex flex-col gap-1.5 items-start md:items-end">
          {/* Phone and Email */}
          {phoneAndEmail.map(renderContact)}

          {/* Other links (LinkedIn, GitHub, etc.) */}
          {otherLinks.map(renderContact)}
        </div>
      </div>
    </header>
  );
}
