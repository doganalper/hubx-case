interface TabFeatureProps {
  subtitle: string;
  title: string;
  bodyText: string;
}

export const TabFeature = ({
  subtitle,
  title,
  bodyText,
}: TabFeatureProps) => {
  return (
    <div className="tab-feature-container md:mt-[6%]">
      <h1 className="tab-feature-subtitle">
        {subtitle}
      </h1>
      <h2 className="tab-feature-title">
        {title}
      </h2>
      <p className="tab-feature-body">
        {bodyText}
      </p>
      <div
        className="tab-feature-button"
      >
        <span>
          Learn More
        </span>
      </div>
    </div>
  );
};
