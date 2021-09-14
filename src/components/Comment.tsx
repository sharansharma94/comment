import { ReactComponent as Down } from "../images/Down.svg";
import { ReactComponent as Up } from "../images/Up.svg";

export default function Comment(props: any): any {
  const { name, time, post, avatar } = props.comment;
  const replies = props.replies;
  return (
    <>
      <div className="row comment-container">
        <div className="col-3 avatar">
          <img src={avatar} />
          <div className="vl"></div>
        </div>
        <div className="col-9 post-container">
          <div className="d-flex post-header">
            <span className="user-name">{name}</span>
            <span className="post-time">{time}</span>
          </div>
          <p className="post">{post}</p>
          <div className="row">
            <div className="col-4 col-sm-3 col-md-2 toolbar post-header">
              <span>
                <Up />
              </span>
              <span className="user-name"> {} </span>
              <span>
                <Down />
              </span>
            </div>
            <div className="col-8 col-sm-9 col-md-10 buttons">
              <button>Reply</button>
              <button>Report</button>
            </div>
          </div>
          <div>
            {replies.map((reply: any) => (
              <Comment key={reply.id} comment={reply} replies={[]} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
