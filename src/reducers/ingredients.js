import {
  HANDLE_UPLOAD_IMAGE_BEGIN,
  HANDLE_UPLOAD_IMAGE_SUCCESS,
  HANDLE_UPLOAD_IMAGE_FAILURE,
  HANDLE_SUBMIT_IMAGE_BEGIN,
  HANDLE_SUBMIT_IMAGE_SUCCESS,
  HANDLE_SUBMIT_IMAGE_FAILURE,
  HANDLE_CLEAR_STATE
} from "../actions/constants";

const initialState = {
  harmful_ingredients: [],
  image_preview: "",
  error_message: "",
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    // ============  CLEAR STATE ==================
    case HANDLE_CLEAR_STATE: {
      return {
        ...state,
        error_message: [],
        harmful_ingredients: [],
        image_preview: ""
      };
    }
    // ============ UPLOADING IMAGE ==================
    case HANDLE_UPLOAD_IMAGE_BEGIN: {
      return {
        ...state,
        loading: true
      };
    }
    case HANDLE_UPLOAD_IMAGE_SUCCESS: {
      return {
        ...state,
        image_preview: action.image,
        loading: false
      };
    }
    case HANDLE_UPLOAD_IMAGE_FAILURE: {
      return {
        ...state,
        error_message: action.error,
        loading: false
      };
    }
    // ============ SUBMIT IMAGE ==================
    case HANDLE_SUBMIT_IMAGE_BEGIN: {
      return {
        ...state,
        loading: true
      };
    }
    case HANDLE_SUBMIT_IMAGE_SUCCESS: {
      return {
        ...state,
        harmful_ingredients: action.e,
        loading: false
      };
    }
    case HANDLE_SUBMIT_IMAGE_FAILURE: {
      return {
        ...state,
        error_message: action.error,
        loading: false
      };
    }
    default:
      return state;
  }
};
