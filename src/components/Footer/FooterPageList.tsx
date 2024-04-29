import { cn } from "@/lib/utils";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

interface FooterPageListProps {
  title: string;
  pageList: string[];
}
const playfair = Playfair_Display({
  subsets: ["latin"],
});

const FooterPageList = ({ title, pageList }: FooterPageListProps) => {
  return (
    <div className="text-center md:text-left">
      <h5 className={cn("text-lg", playfair.className)}>{title}</h5>
      <div className="mt-4 lg:mt-8 gap-2 flex flex-col">
        {pageList.map((page) => (
          <Link href={"/"} key={page} className="text-sm uppercase tracking-widest">
            {page}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterPageList;
