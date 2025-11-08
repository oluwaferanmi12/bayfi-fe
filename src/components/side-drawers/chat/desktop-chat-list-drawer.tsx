import { useGetActivChat } from "@/hooks/query";
import { SideDrawer } from "../side-drawer";
import { MobileChatListCard } from "@/components/mobile-components/wrappers/mobile-chat-list-card";

export const DesktopChatListDrawer = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const { data, isPending } = useGetActivChat();
  return (
    <>
      <SideDrawer
        onClose={() => {
          handleClose();
        }}
        open={open}
        title="Chats"
      >
        <>
          {isPending ? (
            "Loading"
          ) : data?.length ? (
            <>
              {data.map((item) => {
                return (
                  <div onClick={() => {}} key={item.id}>
                    <MobileChatListCard chat={item} key={item.id} />
                  </div>
                );
              })}
            </>
          ) : (
            "No Chat available"
          )}
        </>
      </SideDrawer>
    </>
  );
};
