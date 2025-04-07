import homeIcon from "@/assets/svg/breadcrumb-base.svg";
import Image from "next/image";
import arrowRight from "@/assets/svg/chevron-right.svg";
import { Text } from "@/components/texts/text";

interface SideDrawerBreadCrumbProps {
  text: string;
  active: boolean;
  action: () => void;
}

export const SideDrawerBreadCrumb = ({
  breadCrumbArray,
}: {
  breadCrumbArray: SideDrawerBreadCrumbProps[];
}) => {
  return (
    <div className="flex items-center gap-3">
      {breadCrumbArray.map((breadCrumb, index) => {
        return (
          <div
            onClick={breadCrumb.action}
            key={index}
            className="flex items-center gap-2"
          >
            {breadCrumb.text === "home" ? (
              <Image src={homeIcon} alt="" />
            ) : breadCrumb.active ? (
              <div
                className={`${breadCrumb.active ? "bg-bayfi-black-50 rounded-lg py-1 px-4" : ""} cursor-pointer`}
              >
                <Text type="nav-text" value={breadCrumb.text} />
              </div>
            ) : (
              <div className="cursor-pointer">
                <Text type="nav-text" value={breadCrumb.text} />
              </div>
            )}
            {breadCrumbArray.length !== index + 1 && (
              <Image src={arrowRight} alt="" />
            )}
          </div>
        );
      })}
    </div>
  );
};
