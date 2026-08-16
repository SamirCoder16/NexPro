import React from "react";

// GreyTitle Component
const GrayTitleComponent = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-white/90">{children}</span>;
};
GrayTitleComponent.displayName = "GrayTitle";
export const GrayTitle = React.memo(GrayTitleComponent);

// BlueTitle Component
const BlueTitleComponent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={`bg-linear-to-br font-serif from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
};
BlueTitleComponent.displayName = "BlueTitle";
export const BlueTitle = React.memo(BlueTitleComponent);

// Section Label Component
const SectionLabelComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-[0.14em] uppercase mb-4">
      <span className="w-4 h-px bg-blue-400" />
      {children}
      <span className="w-4 h-px bg-blue-400" />
    </p>
  );
};
SectionLabelComponent.displayName = "SectionLabel";
export const SectionLabel = React.memo(SectionLabelComponent);

const SectionHeadingComponent = ({
  greyText,
  blueText,
}: {
  greyText: string;
  blueText: string;
}) => {
  return (
    <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight">
      <GrayTitle>{greyText}</GrayTitle>
      <br />
      <BlueTitle>{blueText}</BlueTitle>
    </h2>
  );
};
SectionHeadingComponent.displayName = "SectionHeading";
export const SectionHeading = React.memo(SectionHeadingComponent);
