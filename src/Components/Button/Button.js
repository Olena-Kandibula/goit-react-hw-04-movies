import PropTypes from "prop-types";

import s from "../Button/Button.module.css";

function Button({ onClick, children, type }) {
  return (
    <button type={type || "button"} className={s.button} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.object,
  type: PropTypes.string,
};

export default Button;
