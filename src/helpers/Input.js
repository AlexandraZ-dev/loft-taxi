import React from "react";
import {useField} from "formik";
import {TextField} from "@material-ui/core";

export const TextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <TextField
        {...field} {...props}
        id={props.name}
        data-testid={props.name}
        label={label}
        type={props.type}
        name={props.name}
        margin="normal"
        fullWidth
        color="primary"
      />
      {meta.touched && meta.error ? (
        <div style={{color: 'red'}}>{meta.error}</div>
      ) : null}
    </>
  );
};
