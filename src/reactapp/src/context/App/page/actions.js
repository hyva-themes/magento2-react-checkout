import { SET_PAGE_LOADER } from "./types";

export function setPageLoaderAction(dispatch, loader) {
  dispatch({
    type: SET_PAGE_LOADER,
    payload: loader,
  });
}
