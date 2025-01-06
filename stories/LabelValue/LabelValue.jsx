import React from "react";

import PropTypes from "prop-types";

import "./labelValue.css";

/** Primary UI component for user interaction */
export const LabelValue = ({
  primary,
  backgroundColor,
  size,
  label,
  value,
  ...props
}) => {
  return (
    <div className="flex gap-2 sm:gap-6 sm:flex-row flex-col mb-6">
      <p className="text-text-muted-foreground w-[180px] h-[28px]">{label}</p>
      {label === "Loading" ? (
        <div className="bg-[#27272A] animate-pulse w-[100px] h-[28px] rounded" />
      ) : (
        <p className="text-text-foreground">{value}</p>
      )}
    </div>
  );
};

LabelValue.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};

LabelValue.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
