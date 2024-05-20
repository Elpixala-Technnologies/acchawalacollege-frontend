import Link from "next/link";

type Props = {
  href?: string;
  text: string;
  icon?: React.ReactNode;
  filled?: Boolean;
  filledColor?: string;
  outline?: boolean;
  textColor?: string;
  outlineColor?: string;
  rounded?: boolean;
  fontSize?: string;
  fontWeight?: string;
  width?: string;
  align?: string;
  showHover?: boolean;
  paddingX?: string;
  paddingY?: string;
  gap?: string;
  filledBorderColor?: string;
  filledBorderWidth?: string;
};
export default function Button({
  href,
  text,
  icon,
  filled,
  outline = false,
  filledColor = "bg-primary",
  textColor = "text-white",
  outlineColor = "border-primary",
  rounded = false,
  fontSize = "text-sm",
  fontWeight = "font-normal",
  width = "min-w-max",
  align = "text-left",
  showHover = false,
  paddingX = "px-2",
  paddingY = "py-4",
  gap = "",
  filledBorderWidth = "border-0",
  filledBorderColor = "border-transparent",
}: Props) {
  let ButtonContent = (
    <>
      {outline ? (
        <>
          <div
            className={`button flex ${width} items-center ${gap} ${paddingX} ${paddingY} border ${fontSize} ${fontWeight} ${outlineColor} ${
              showHover ? "hover:border-primary hover:text-primary" : ""
            }  ${rounded ? "rounded-full" : "rounded-md"}`}
          >
            {icon ? <div className="mr-2">{icon}</div> : <></>}
            <div
              className={`flex-1 ${align} ${textColor} ${
                showHover ? " hover:text-primary" : ""
              }`}
            >
              {text}
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={`button ${filledBorderColor} ${filledBorderWidth} flex ${width} ${gap} items-center ${paddingX} ${paddingY}  ${fontSize} ${fontWeight} ${filledColor}  ${textColor} ${
              rounded ? "rounded-full" : "rounded-md"
            }`}
          >
            {icon ? <div className="mr-2">{icon}</div> : <></>}
            <div className={`flex-1 ${align}`}>{text}</div>
          </div>
        </>
      )}
    </>
  );
  return (
    <>
      {href ? (
        <Link href={`${href}`}>{ButtonContent}</Link>
      ) : (
        <>{ButtonContent}</>
      )}
    </>
  );
}
