import Image from "next/image"

export const GiftCardWrapper = ({text, image}: {text: string , image: string}) => {
    return (
      <div className="flex border border-[#EBF1FF] bg-bayfi-grey-400 mb-3 items-center justify-between p-2 rounded-lg">
        <p className="text-sm text-text-color-900">
            {text}
        </p>
        <div>
          <Image src={image} alt="" />
        </div>
      </div>
    );
}