import axios from "axios";
import { ocr_response_format } from "../helpers/helpers";
import { find_harmful_ingredients } from "../helpers/harmful_ingredients_list";

import {
  HANDLE_UPLOAD_IMAGE_BEGIN,
  HANDLE_UPLOAD_IMAGE_SUCCESS,
  HANDLE_UPLOAD_IMAGE_FAILURE,
  HANDLE_SUBMIT_IMAGE_BEGIN,
  HANDLE_SUBMIT_IMAGE_SUCCESS,
  HANDLE_SUBMIT_IMAGE_FAILURE,
  HANDLE_CLEAR_STATE
} from "../actions/constants";

// ============ UPLOADING IMAGE ==================
export const handleUploadImageSuccess = image => {
  return {
    type: HANDLE_UPLOAD_IMAGE_SUCCESS,
    image
  };
};

export const handleUploadImageBegin = () => {
  return {
    type: HANDLE_UPLOAD_IMAGE_BEGIN
  };
};

export const handleUploadImageFailure = error => {
  return {
    type: HANDLE_UPLOAD_IMAGE_FAILURE,
    error
  };
};

export const handleUploadImage = event => {
  return dispatch => {
    dispatch(handleUploadImageBegin());
    dispatch(handleClearState());
    try {
      const reader = new FileReader();
      const file = event.target.files[0];
      reader.onloadend = () =>
        dispatch(handleUploadImageSuccess(reader.result));
      reader.readAsDataURL(file);
    } catch (error) {
      dispatch(handleUploadImageFailure(["Please upload image"]));
    }
  };
};

// ============ SUBMITING IMAGE ==================
export const handleSubmitImageSuccess = e => {
  return {
    type: HANDLE_SUBMIT_IMAGE_SUCCESS,
    e
  };
};

export const handleSubmitImageBegin = () => {
  return {
    type: HANDLE_SUBMIT_IMAGE_BEGIN
  };
};

export const handleSubmitImageFailure = error => {
  return {
    type: HANDLE_SUBMIT_IMAGE_FAILURE,
    error
  };
};

export const handleOnSubmitAction = image => {
  return dispatch => {
    dispatch(handleUploadImageBegin());
    const formData = new FormData();
    formData.append("base64image", image);
    formData.append("language", "eng");
    formData.append("apikey", process.env.API_KEY);

    axios({
      method: "post",
      url: "https://api.ocr.space/parse/image",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: formData
    })
      .then(response => {
        const parse_response = JSON.parse(response.request.responseText);
        const error_message_array = parse_response.ErrorMessage
          ? parse_response.ErrorMessage
          : null;

        if (error_message_array) {
          dispatch(handleSubmitImageFailure(error_message_array));
        } else {
          const ingredients_array = ocr_response_format(
            parse_response.ParsedResults[0].ParsedText
          );
          const harmful_ingredients_array = find_harmful_ingredients(
            ingredients_array
          );
          dispatch(handleSubmitImageSuccess(harmful_ingredients_array));
        }
      })
      .catch(error => {
        dispatch(
          handleSubmitImageFailure([
            "We couldnt check it for you, try it later"
          ])
        );
      });
  };
};

// ============  CLEAR STATE ==================
export const handleClearState = () => {
  return {
    type: HANDLE_CLEAR_STATE
  };
};
