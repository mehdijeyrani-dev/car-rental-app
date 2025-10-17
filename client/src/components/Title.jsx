import React from "react";

const desc =
  "Find reliable car with transparent pricing, verified inspections, flexible pickup and delivery options, and 24/7 customer support for a smooth rental or buying experience.";

const Title = ({
  subTitle = "",
  heading = "",
  subTitleClassName = "",
  headingClassName = "",
  description = desc,
  descriptionClassName = "",
}) => {
  return (
    <div className={subTitleClassName}>
      <h4 className="text-solid capitalize">{subTitle}</h4>
      <div className="flex flex-col xl:flex-row xl:justify-between">
        <h1 className={`${headingClassName} capitalize`}>{heading}</h1>
        <p
          className={`${descriptionClassName} max-w-lg xl:place-self-end xl:relative xl:bottom-3`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Title;
