import { AboutText } from "./AboutText";

export const AboutStatement = ({
  titleMision,
  descriptionMision,
  titleVision,
  descriptionVision,
}) => {
  return (
    <>
      <div className="w-full lg:w-6/12">
        <AboutText title={titleMision} description={descriptionMision} />
        <AboutText title={titleVision} description={descriptionVision} />
      </div>
    </>
  );
};
