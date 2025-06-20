import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    //remove data from localstorage
    localStorage.removeItem("user");
    //update context
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
