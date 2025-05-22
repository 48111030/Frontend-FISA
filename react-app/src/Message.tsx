import './Message.css';


function Message(props: {
    title: string
}) {
    //JSX javascript XML
  return <h1 className="message">{props.title}</h1>;
}
export default Message;