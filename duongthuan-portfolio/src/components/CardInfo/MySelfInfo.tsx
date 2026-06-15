import { MySelfInformation } from "@/dataProvider/mySelf";
import dateToString from "@/utils/dateToString";

type MySelfInfoProps = {
  mySelfInformation: MySelfInformation;
};

const MySelfInfo = function ({ mySelfInformation }: MySelfInfoProps) {
  return (
    <div className="flex flex-col gap-1 bg-linear-to-br from-foreground/10 to-foreground/20 p-5 rounded-3xl">
      <div className="flex gap-2">
        <h1 className="font-bold">{"Full Name: "}</h1>
        <p>{mySelfInformation.fullName}</p>
      </div>

      <div className="flex gap-2">
        <h1 className="font-bold">{"Date of Birth: "}</h1>
        <p>
          {dateToString(mySelfInformation.dateOfBirth, "dd-short_month-yyyy")}
        </p>
      </div>

      <div className="flex gap-2">
        <h1 className="font-bold">{"Location: "}</h1>
        <p>{mySelfInformation.location}</p>
      </div>

      <div className="flex gap-2">
        <h1 className="font-bold">{"Hometown: "}</h1>
        <p>{mySelfInformation.hometown}</p>
      </div>
    </div>
  );
};

export default MySelfInfo;
