import React from "react";
import BaseSelect from "react-select";
import FixRequiredSelect from "./FixRequiredSelect";

const Select: React.FC = (props: object) =>  {
  return (
    <FixRequiredSelect
      {...props}
      SelectComponent={BaseSelect}
      //  options={props.options}
    />
  );
}

export default Select;
