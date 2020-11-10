import { useFormikContext } from "formik";
import React from "react";
import { View } from "react-native";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

const FormImagePicker = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => setFieldValue(name, [...imageUris, uri]);

  const handleRemove = (uri) =>
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );

  return (
    <View>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default FormImagePicker;
