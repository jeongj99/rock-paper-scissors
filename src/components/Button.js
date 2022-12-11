import classNames from "classnames";

export default function Button(props) {
  const buttonClass = classNames("button", {
    "button--rock": props.rock,
    "button--paper": props.paper,
    "button--scissors": props.scissors
  });

  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={buttonClass}
    >
      {props.children}
    </button>
  );
}
