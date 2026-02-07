import { X } from "lucide-react";
import "./index.scss";
import type { ReactNode } from "react";
import type { AlertType } from "../../../types";

interface IProps{
  type: AlertType;
  title: string;
  icon: ReactNode;
  description?: string;
  children?: ReactNode;
}

const Alert = ({ title,type, icon, description, children}: IProps) => {
  return (

    <div className={type}>
      <div className="alert-header">
        <div className="title">
          <span>
            {icon}
            <h3>{title}</h3>
          </span>
        </div>
        <X className="close"/>
      </div>

      {children ? children: <p>{description}</p> }
    </div>
  );
};

export default Alert;