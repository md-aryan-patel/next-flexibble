import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  type ColumnProps = { title: string; links: Array<string> };

  const FooterColumn = ({ title, links }: ColumnProps) => (
    <div className="footer_column">
      <h4 className="font-semibold">{title}</h4>
      <ul className=" flex flex-col gap-2 font-normal">
        {links.map((link) => (
          <Link href="/" key={link}>
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col items-start">
          <Image
            src="/logo-purple.svg"
            width={115}
            height={38}
            alt="flexxible"
          />
          <p className=" text-sm text-start font-normal mt-5 max-w-xs">
            Flexibble is the world's leading comminity for creatives to share,
            learn and get hired.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[4].title}
              links={footerLinks[4].links}
            />
            <FooterColumn
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[6].title}
            links={footerLinks[6].links}
          />
        </div>
      </div>
      <div className="flexBetween footer_copyright">
        <p>@ 2023 Flexibble all right reserved</p>
        <p className=" text-gray">
          <span className=" text-black font-semibold">
            10,214 project submited
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
