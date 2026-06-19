import { MySelfInformation } from "@/dataProvider/mySelf";
import dateToString from "@/utils/dateToString";
import { FaBirthdayCake, FaHome } from "react-icons/fa";
import { FaLocationDot, FaLocationPin, FaUser } from "react-icons/fa6";

type MySelfInfoProps = {
  mySelfInformation: MySelfInformation;
};

const MySelfInfo = function ({ mySelfInformation }: MySelfInfoProps) {
  return (
    <div className="flex flex-col gap-1 bg-linear-to-br from-foreground/5 to-foreground/10 border-2 border-foreground/10 hover:border-foreground/20 hover:-translate-y-2 rounded-2xl p-5 transition-all duration-300 backdrop-blur-xs shadow-sm hover:shadow-md">
      <div className="flex gap-1 flex-wrap items-center">
        <p>
          <FaUser className="inline mr-1" />
          <span className="font-bold">Full Name: </span>
          {mySelfInformation.fullName}
        </p>
      </div>

      <div className="flex gap-1 flex-wrap items-center">
        <p>
          <FaBirthdayCake className="mr-1 inline" />
          <span className="font-bold">Date of Birth: </span>
          {dateToString(mySelfInformation.dateOfBirth, "dd-short_month-yyyy")}
        </p>
      </div>

      <div className="flex gap-1 flex-wrap items-center">
        <p>
          <FaLocationDot className="mr-1 inline" />
          <span className="font-bold">Location: </span>
          {mySelfInformation.location}
        </p>
      </div>

      <div className="flex gap-1 flex-wrap items-center">
        <p>
          <FaHome className="mr-1 inline" />
          <span className="font-bold">Hometown: </span>
          {mySelfInformation.hometown}
        </p>
      </div>
    </div>
  );
};

export default MySelfInfo;
