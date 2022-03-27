import type { FC } from "react";
import api from "../config";

const AxiosErrorHandler: FC = () => {
  api.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const status = error.response.status;
      const message = error.response.data.message;

      // handle 401
      if (status === 401) {
        return Promise.reject(error);
      }

      return;
    }
  );

  return <></>;
};

export default AxiosErrorHandler;
