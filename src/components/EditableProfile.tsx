import { useState } from "react";
import Input from "./common/Input";

interface EditableProfile {
    onCancel: () => void;
  }

export default function EditableProfile({ onCancel }: EditableProfile)  {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [position, setPosition] = useState("");
    const [about, setAbout] = useState("");
    
    return (
    <div className="w-[424px] shrink-0 py-10 px-3 lg:block hidden">
      <div className="flex flex-col justify-between items-start ">
        <img
          className="w-20 rounded-full"
          src="https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bmyQ8PD~U7XIpJu7gryBKa8ILmsPaBoSoA39AyIGYCYrkXbPCsMe9w6exnVzITWgDx9fEMc9thTFYh~ydCNgbSxXnrCl~mkKrKA4~VZyBNXygKDml7~wQF0bXI88vLTwps854CfFk47N5lLwZXB2jmLaMtxt6v5Gn9IMjEkz2l--VUn2qdQ6~woetX87qnA4xCK9xZhIZsPymr4oOScWq-yXhRdBUR3~mRghY7VikRQxHc7lR89mD~oMG-dd9jNGmTZ~8rihFeAhcNgATsj8CcGPia95mUHOCfo1r6YH5bCReRXKc4inh53dQ00xa~s8HESwKlsYr8RcAMuh0fVZ9Q__"
        />
        <div className="mt-4">
            <button className="font-normal text-sm px-3 py-2 rounded-lg text-[#FF2E3D] bg-[#FFF0F1]">Change</button>
            <button className="ml-4 font-normal text-sm text-[#FF2E3D]">Remove</button>
        </div>
        
      </div>
      <div className="mt-3">
        <span className="font-semibold text-base text-[#3D3D3D]">
          tomioka.giyuu@codev.com
        </span>
      </div>
      <div className="flex flex-col mt-3">
        <Input type="text" title="First Name" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      </div>
      <div className="flex flex-col mt-3">
        <Input type="text" title="Last Name" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      </div>
      <div className="flex flex-col mt-3">
        <Input type="text" title="Position" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)}/>
      </div>
      <div className="flex flex-col mt-3">
        <span className="text-sm font-bold">About Me</span>
        <textarea name="" id="" value={about} className="border border-gray-300 rounded-lg p-3 " onChange={(e) => setAbout(e.target.value)}></textarea>
      </div>
      <div className="mt-4 flex justify-end">
            <button className="font-normal text-sm text-[#FF2E3D]" onClick={onCancel}>Cancel</button>
            <button className="ml-4 font-normal text-sm px-3 py-2 rounded-lg text-[#FFFFFF] bg-[#FF2E3D]">Update</button>
        </div>
    </div>
   )
}