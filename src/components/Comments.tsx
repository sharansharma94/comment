import { Jumbotron, Container } from "react-bootstrap";
import Comment from "./Comment";
import avatar from "../images/avatar-1.png";
import avatar2 from "../images/avatar-2.png";

export default function Comments() {
  const comments = [
    {
      id: 1,
      name: "sharan",
      userId: 1,
      avatar: avatar2,
      time: "16 hours ago",
      post: " I genuinely think that Codewell’s community is AMAZING. it’s just starting out but the templates on there are amazing.👀",
      parent: null,
    },
    {
      id: 2,
      name: "manvi",
      userId: 2,
      avatar: avatar,
      time: "16 hours ago",
      post: "I genuinely think that Codewell’s community is AMAZING. it’s just starting out but the templates on there are amazing.👀",
      parent: null,
    },
    {
      id: 3,
      name: "sharan",
      userId: 1,
      parent: 2,
      avatar: avatar2,
      time: "16 hours ago",
      post: " I genuinely think that Codewell’s community is AMAZING. it’s just starting out but the templates on there are amazing.👀",
    },
    {
      id: 4,
      name: "sharan",
      userId: 1,
      parent: 1,
      avatar: avatar2,
      time: "16 hours ago",
      post: " I genuinely think that Codewell’s community is AMAZING. it’s just starting out but the templates on there are amazing.👀",
    },
    {
      id: 5,
      name: "sharan",
      userId: 1,
      parent: 1,
      avatar: avatar2,
      time: "16 hours ago",
      post: " I genuinely think that Codewell’s community is AMAZING. it’s just starting out but the templates on there are amazing.👀",
    },
    {
      id: 6,
      name: "sharan",
      userId: 1,
      parent: 1,
      avatar: avatar2,
      time: "16 hours ago",
      post: " I genuinely think that Codewell’s community is AMAZING. it’s just starting out but the templates on there are amazing.👀",
    },
  ];

  const getRootComments = (): any => {
    return comments.filter((comment) => comment.parent === null);
  };

  const getReplies = (userId: any) => {
    return comments.filter((comment) => comment.parent === userId);
  };

  return (
    <Container className="p-3">
      <Jumbotron>
        {getRootComments().map((comment: any) => {
          return (
            <Comment
              key={comment.id}
              comment={comment}
              replies={getReplies(comment.id)}
            />
          );
        })}
      </Jumbotron>
    </Container>
  );
}
