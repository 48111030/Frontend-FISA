
function Message(props: {
    title: string
}) {
    //JSX javascript XML
  return <h1 style={{
    color: "red"
  }}>{props.title}</h1>;
}
export default Message;