import React from "react";
import ProfilePic from "../../assets/Ganesh_github_dp.jpg"
import Image from "next/image";
import { GithubIcon, LinkedinIcon, Mail, TwitterIcon } from "lucide-react";
import ActionButton, { ActionButtonProps } from "@/components/ui/ActionButton";

const ProfileCard = () => {

  type ProfileAction = ActionButtonProps & { keyId: string };

  const actions: ProfileAction[] = [
    {
      keyId: "call",
      type: "button",
      label: "Schedule a call",
      variant: "primary",
      onClick: () => {
        // Placeholder action; replace with your scheduling link or logic
        window.open("mailto:ganesh.sharma.work@gmail.com?subject=Schedule%20a%20call", "_blank");
      },
    },
    {
      keyId: "resume",
      type: "link",
      href: "/ganesh-sharma-resume.pdf",
      label: "Resume",
      variant: "neutral",
      targetBlank: true,
    },
    {
      keyId: "github",
      type: "link",
      href: "https://github.com/Ganesh-Sharmaz",
      icon: <GithubIcon />,
      variant: "icon",
      ariaLabel: "GitHub",
    },
    {
      keyId: "email",
      type: "link",
      href: "https://mail.google.com/mail/?view=cm&to=ganesh.sharma.work@gmail.com&su=Your%20Resume%20looks%20Nice&body=Hi%20Ganesh%2C%20We%20are%20Hiring%20You%20!!",
      icon: <Mail />,
      variant: "icon",
      targetBlank: true,
      ariaLabel: "Email",
    },
    {
      keyId: "linkedin",
      type: "link",
      href: "https://www.linkedin.com/in/ganesh-sharmaz/",
      icon: <LinkedinIcon />,
      variant: "icon",
      ariaLabel: "LinkedIn",
    },
    {
      keyId: "twitter",
      type: "link",
      href: "https://x.com/Ganesh_Sharmazz",
      icon: <TwitterIcon />,
      variant: "icon",
      ariaLabel: "Twitter/X",
    },
  ];

  return <div className="w-full flex pb-8 ">
    <Image alt="profile-pic" height={128} width={128}  className="mr-6 h-full rounded-full" src={ProfilePic} />
    <div className="w-full flex flex-col">
      <div className="flex items-center h-1/3 pb-2">
        <h1 className="text-3xl pr-2 font-semibold min-h-fit">Ganesh Sharma</h1>
        <div className="h-fit select-none transition-all hover:pt-[0.15rem] hover:border-b-4 border-red-800 bg-red-400 duration-100 cursor-grab text-[#F0EBD8] text-xs px-2 py-1 rounded-full mt-2 md:mt-0">Open for Work</div>
      </div>
      <div className="mb-4"> A FullStack Developer</div>
      <div className="min-h-fit mb-4">
        <div className="flex gap-3">
          {actions.map(({ keyId, ...action }) => (
            <ActionButton key={keyId} {...action} />
          ))}
        </div>
      </div>
    </div>
  </div>;
};

export default ProfileCard;
