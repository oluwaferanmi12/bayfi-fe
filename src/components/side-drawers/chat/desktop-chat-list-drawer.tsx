import { useGetActivChat } from "@/hooks/query";
import { SideDrawer } from "../side-drawer";
import { MobileChatListCard } from "@/components/mobile-components/wrappers/mobile-chat-list-card";

export const DesktopChatListDrawer = ({
  open,
  handleClose,
  onSelect,
}: {
  open: boolean;
  handleClose: () => void;
  onSelect: (val: number) => void;
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
                  <div
                    onClick={() => {
                      onSelect(item.id);
                    }}
                    key={item.id}
                  >
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
