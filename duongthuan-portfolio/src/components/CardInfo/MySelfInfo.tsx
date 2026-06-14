import { MySelfInformation } from "@/dataProvider/mySelf";

const MySelfInfo = function ({
  mySelfInfo,
}: {
  mySelfInfo: MySelfInformation;
}) {
  return (
    <div className="flex flex-col gap-4 text-justify">
      {mySelfInfo.long_bio.map((paragraph, index) => (
        <p key={index} className="leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default MySelfInfo;
