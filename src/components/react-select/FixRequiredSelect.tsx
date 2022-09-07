import React from "react";
// import PropTypes from "prop-types";

type Props = {
  SelectComponent?: any;
  onChange?: any;
  required?: boolean;
  value?: any;
  isLoading?: boolean;
  isDisabled?: boolean;
  defaultProps?: any;
};

const noop = () => {
  // no operation (do nothing real quick)
};

class FixRequiredSelect extends React.Component<Props> {
  state = {
    value: this.props.value || "",
  };

  selectRef: any = null;
  setSelectRef = (ref: any) => {
    this.selectRef = ref;
  };

  onChange = (value: any, actionMeta: any): void => {
    this.props.onChange(value, actionMeta);
    this.setState({ value });
  };

  getValue = () => {
    if (this.props.value != undefined) return this.props.value;
    return this.state.value || "";
  };

  render() {
    const { SelectComponent, required, ...props } = this.props;
    const { isLoading, isDisabled } = this.props;
    const enableRequired = !isDisabled;

    return (
      <div>
        <SelectComponent
          {...props}
          ref={this.setSelectRef}
          onChange={this.onChange}
        />
        {enableRequired && (
          <input
            tabIndex={-1}
            autoComplete="off"
            style={{
              opacity: 0,
              width: "100%",
              height: 0,
              position: "absolute",
            }}
            value={this.getValue()}
            onChange={noop}
            onFocus={() => this.selectRef.focus()}
            required={required}
          />
        )}
      </div>
    );
  }
}

export default FixRequiredSelect;
