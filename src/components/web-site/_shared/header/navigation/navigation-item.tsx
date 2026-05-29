import { useRouter } from "next/navigation";
import { useTopLoader } from "nextjs-toploader";
import { ReactNode } from "react";

interface NavigationItemProps {
  className?: string;
  children: ReactNode;
  url?: string;
  onClick?: () => void;
}

export default function NavigationItem({
  className,
  children,
  url,
  onClick,
}: NavigationItemProps) {
  const loader = useTopLoader();
  const router = useRouter();

  const handleOnClick = () => {
    url && router.push(url);
    url && loader.start();
    onClick?.();
  };

  return (
    <button
      onClick={handleOnClick}
      className={`text-[#183668] text-left lg:text-center text-3xl lg:text-lg font-medium grid grid-flow-col items-center gap-1 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
