import ProfileImage from "./ProfileImage.jsx";
import User from "./User.jsx";
import Timestamp from "./Timestamp.jsx";
import Message from "./Message.jsx";
import Actions from "./Actions.jsx";
function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={tweet.user} />
          <Timestamp time={tweet.timestamp} />
        </div>

        <Message message={tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
