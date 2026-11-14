import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa6";

import type { SocialId } from "@/content/site";

const icons: Record<SocialId, IconType> = {
  linkedin: FaLinkedin,
  github: FaGithub,
  medium: FaMedium,
  instagram: FaInstagram,
  facebook: FaFacebook,
  email: FaEnvelope,
};

export function SocialIcon({
  id,
  className,
}: {
  id: SocialId;
  className?: string;
}) {
  const Icon = icons[id];
  return <Icon aria-hidden="true" className={className} />;
}
