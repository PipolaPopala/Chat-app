import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojies";

function Conversations() {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, ind) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={ind === conversations.length - 1}
        />
      ))}
      {loading ? <span className="loading loading-spinner" /> : null}
    </div>
  );
}

export default Conversations;
