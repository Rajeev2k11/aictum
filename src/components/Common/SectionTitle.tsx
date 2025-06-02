import { color } from "motion";

const SectionTitle = ({
  title,
  paragraph,
  videoparagraph,
  width = "1000px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  viedoparagraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  color?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb, color: "#e6d6fa" }}
      >
        <h2 className="mb-4 text-3xl font-bold leading-tight! text-[#AE69DF] sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-base leading-relaxed! text-white md:text-lg">
          {paragraph}
        </p>
        <p className="text-base leading-relaxed! text-black md:text-lg">
          {videoparagraph}
        </p>
        
        
        
        
      </div>
    </>
  );
};

export default SectionTitle;