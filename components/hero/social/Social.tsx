import SocialLink from "./SocialLink";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Social = () => {
  return (
    <div className="sm:order-1 flex md:flex-col gap-4 items-center justify-center order-3  ">
      <SocialLink icon={<FaGithub />} to="to" />
      <SocialLink icon={<FaLinkedin />} to="to" />
      <SocialLink icon={<FaInstagram />} to="to" />
      <SocialLink icon={<FaXTwitter />} to="to" />
      <SocialLink icon={<FaFacebook />} to="to" />
    </div>
  );
};

export default Social;
