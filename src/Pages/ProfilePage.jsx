import React, { useRef } from "react";
import FormEdit from "../Components/ProfileComponent/FormEdit";

export default function ProfileUser() {
  return (
    <div className="flex flex-col justify-center items-center my-[20px] md:my-[40px] gap-5">
      <FormEdit />
    </div>
  );
}
