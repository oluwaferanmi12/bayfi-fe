import Link from "next/link";

export const ChatStatus = ({
  status,
}: {
  status: "Locked" | "Completed" | "Expired" | null;
}) => {
  return (
    <div>
      {status === "Locked" ? (
        <div
          className={`px-3 py-1 font-grotesk-semi-bold text-[#292D32] text-base my-2 rounded-full  bg-[#FFD886] `}
        >
          <p>
            Chat locked Admin will respond in{" "}
            <span className="font-grotesk-bold">5:00 mins</span>{" "}
          </p>
        </div>
      ) : status === "Completed" ? (
        <div
          className={`px-6 py-1 font-grotesk-semi-bold text-[#292D32] text-base my-2 rounded-full bg-[#6DA544]  `}
        >
          <p>Transaction completed, have any question ?</p>
          <Link href={"/support"}>
            <p className="text-[#F0F0F0] font-grotesk-extra-bold">
              Contact support
            </p>
          </Link>
        </div>
      ) : status === "Expired" ? (
        <p className="text-center  text-base font-grotesk-semi-bold text-[#868C98]">
          Chat expired
        </p>
      ) : (
        ""
      )}
    </div>
  );
};
