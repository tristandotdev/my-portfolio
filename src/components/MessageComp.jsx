import mailIcon from "../assets/mail.svg";

export function MessageComp() {
  return (
    <a
      className="mailClass"
      href="mailto:tristandepoosingh001@gmail.com">
      <img src={mailIcon} alt="Mail" style={{ marginRight: "10px" }} />  Message!
    </a>
  );
}
