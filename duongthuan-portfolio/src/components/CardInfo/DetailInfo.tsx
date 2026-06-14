import { type EducationInformation } from "@/dataProvider/education";
import { MySelfInformation } from "@/dataProvider/mySelf";

type EducationInfoProps = {
  educationInfo: EducationInformation;
};

const EducationInfo = function ({ educationInfo }: EducationInfoProps) {
  return (
    <div>
      <div className="flex gap-2">
        <h1>{"Education: "}</h1>
        <p>{educationInfo.university}</p>
      </div>

      <div className="flex gap-2">
        <h1>{"Major: "}</h1>
        <p>{educationInfo.fieldOfStudy}</p>
      </div>

      <div className="flex gap-2">
        <h1>{"Degree: "}</h1>
        <p>{educationInfo.degree}</p>
      </div>

      <div className="flex gap-2">
        <h1>{"Education Period: "}</h1>
        <p>
          {educationInfo.startAt.getFullYear()} -{" "}
          {educationInfo.endAt.getFullYear()}{" "}
          {educationInfo.endAt < new Date() ? "" : "(Expected)"}
        </p>
      </div>
    </div>
  );
};

export default EducationInfo;
