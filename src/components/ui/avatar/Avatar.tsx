import Image from "next/image";
import React from "react";

interface AvatarProps {
  src: string; // URL of the avatar image
  alt?: string; // Alt text for the avatar
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge"; // Avatar size
  status?: "online" | "offline" | "busy" | "none"; // Status indicator
}

const sizeClasses = {
  xsmall: "h-6 w-6",
  small: "h-8 w-8",
  medium: "h-10 w-10",
  large: "h-12 w-12",
  xlarge: "h-14 w-14",
  xxlarge: "h-16 w-16",
};

const statusSizeClasses = {
  xsmall: "h-1.5 w-1.5",
  small: "h-2 w-2",
  medium: "h-2.5 w-2.5",
  large: "h-3 w-3",
  xlarge: "h-3.5 w-3.5",
  xxlarge: "h-4 w-4",
};

const statusColorClasses = {
  online: "bg-success-500",
  offline: "bg-error-400",
  busy: "bg-warning-500",
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "User Avatar",
  size = "medium",
  status = "none",
}) => {
  return (
    <div
      className={`relative flex-none ${sizeClasses[size]} rounded-full`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-full">
        {/* Avatar Image */}
        <Image
          fill
          sizes="100%"
          src={src}
          alt={alt}
          className="object-cover"
        />
      </div>

      {/* Status Indicator */}
      {status !== "none" && (
        <span
          className={`pointer-events-none absolute bottom-0 right-0 z-20 translate-x-[18%] translate-y-[18%] flex items-center justify-center rounded-full border-2 border-white shadow-sm dark:border-gray-900 ${
            statusSizeClasses[size]
          } ${statusColorClasses[status] || ""}`}
        ></span>
      )}
    </div>
  );
};

export default Avatar;
