import { MySelfInformation } from "@/dataProvider/mySelf";
import dateToString from "@/utils/dateToString";

type MySelfInfoProps = {
  mySelfInformation: MySelfInformation;
};

const MySelfInfo = function ({ mySelfInformation }: MySelfInfoProps) {
  return (
    <div className="flex flex-col gap-1 bg-linear-to-br from-foreground/5 to-foreground/10 border-2 border-foreground/10 hover:border-foreground/20 hover:-translate-y-2 rounded-2xl p-5 transition-all duration-300 backdrop-blur-xs shadow-sm hover:shadow-md">
      <div className="flex gap-1 flex-wrap">
        <h1 className="font-bold">{"Full Name: "}</h1>
        <p>{mySelfInformation.fullName}</p>
      </div>

      <div className="flex gap-1 flex-wrap">
        <h1 className="font-bold">{"Date of Birth: "}</h1>
        <p>
          {dateToString(mySelfInformation.dateOfBirth, "dd-short_month-yyyy")}
        </p>
      </div>

      <div className="flex gap-1 flex-wrap">
        <h1 className="font-bold">{"Location: "}</h1>
        <p>{mySelfInformation.location}</p>
      </div>

      <div className="flex gap-1 flex-wrap">
        <h1 className="font-bold">{"Hometown: "}</h1>
        <p>{mySelfInformation.hometown}</p>
      </div>
    </div>
  );
};

export default MySelfInfo;
