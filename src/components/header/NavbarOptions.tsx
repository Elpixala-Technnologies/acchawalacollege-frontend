import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DownArrow, Logo } from "@/asset";

type NavOption = {
  title: string;
  icon: any;
  path: string;
};
const HeaderOptions = () => {
  let [ActiveTab, setActiveTab] = useState("home");
  const currentPath = usePathname();
  let NavOptions: NavOption[] = [
    { title: "Colleges", icon: DownArrow, path: "/colleges" },
    { title: "Courses", icon: DownArrow, path: "/courses" },
    { title: "Exams", icon: DownArrow, path: "/exams" },
    { title: "Study Abroad", icon: DownArrow, path: "/study-abroad" },
    // { title: "Latest Updates", icon: DownArrow, path: "/" },
    // { title: "More", icon: DownArrow, path: "/more" },
  ];
  useEffect(() => {
    if (currentPath) {
      let paths = currentPath.split("/");
      let activepath = paths.length > 1 ? paths[1] : "";
      setActiveTab(activepath);
    }
  }, [currentPath]);
  return (
    <>
      <div
        className="flex justify-between gap-2 max-md:hidden"
        key={"NavOptions"}
      >
        {NavOptions.map((navOption) => {
          return (
            <div key={navOption.title} className="w-max">
              <Link href={navOption.path} key={navOption.title}>
                <div
                  className={`flex flex-col items-center p-2 border-b-[3px] ${"/" + ActiveTab === navOption.path
                      ? "border-b-primary"
                      : "border-b-transparent"
                    } `}
                >
                  <div className="flex gap-2 relative">
                    <span
                      className={`text-sm  ${"/" + ActiveTab === navOption.path
                          ? "text-primary"
                          : "text-primary-text"
                        }`}
                    >
                      {navOption.title}
                    </span>
                      <Image
                      alt={navOption.title}
                      src={navOption.icon}
                      className="h-[16px] w-[16px] pt-2"
                    />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HeaderOptions;
