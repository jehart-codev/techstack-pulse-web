

interface ProfileDetailProps {
    onEdit: () => void;
  }
  
export default function ProfileDetail({ onEdit }: ProfileDetailProps) {
    return (
    <div className="w-[424px] shrink-0 py-10 px-3 lg:block hidden">
      <div className="flex flex-row justify-between items-start ">
        <img
          className="w-20 rounded-full"
          src="https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bmyQ8PD~U7XIpJu7gryBKa8ILmsPaBoSoA39AyIGYCYrkXbPCsMe9w6exnVzITWgDx9fEMc9thTFYh~ydCNgbSxXnrCl~mkKrKA4~VZyBNXygKDml7~wQF0bXI88vLTwps854CfFk47N5lLwZXB2jmLaMtxt6v5Gn9IMjEkz2l--VUn2qdQ6~woetX87qnA4xCK9xZhIZsPymr4oOScWq-yXhRdBUR3~mRghY7VikRQxHc7lR89mD~oMG-dd9jNGmTZ~8rihFeAhcNgATsj8CcGPia95mUHOCfo1r6YH5bCReRXKc4inh53dQ00xa~s8HESwKlsYr8RcAMuh0fVZ9Q__"
        />
        <button className="font-normal text-sm text-[#FF2E3D]" onClick={onEdit}>Edit Profile</button>
      </div>
      <div>
        <span className="font-semibold text-base text-[#3D3D3D]">
          tomioka.giyuu@codev.com
        </span>
      </div>
      <div className="flex flex-col mt-3">
        <span className="font-normal text-sm text-[#6D6D6D]">First Name</span>
        <span className="font-normal text-base text-[#3D3D3D]">Tomioka</span>
      </div>
      <div className="flex flex-col mt-3">
        <span className="font-normal text-sm text-[#6D6D6D]">Last Name</span>
        <span className="font-normal text-base text-[#3D3D3D]">Giyuu</span>
      </div>
      <div className="flex flex-col mt-3">
        <span className="font-normal text-sm text-[#6D6D6D]">Position</span>
        <span className="font-normal text-base text-[#3D3D3D]">
          Fullstack Developer
        </span>
      </div>
      <div className="flex flex-col mt-3">
        <span className="font-normal text-sm text-[#6D6D6D]">About Me</span>
        <span className="font-normal text-base text-[#3D3D3D]">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt conubia
          euismod ultricies eget ultricies. Taciti sagittis elementum sollicitudin,
          viverra dictum risus mattis.
        </span>
      </div>
    </div>
   )
}

// export default ProfileDetail;
