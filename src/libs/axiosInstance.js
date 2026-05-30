import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://blather.onrender.com/api",
    // baseURL: "http://localhost:5001/api",
    withCredentials: true,
});


axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("blather_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // if (config.data) {
        //     const size = JSON.stringify(config.data).length;
        //     useNetworkStore.getState().setAxiosSent(size);
        // }

        // if (config.url) {
        //     const urlKey = getBaseUrlKey(config.url);

        //     if (abortControllers[urlKey]) {
        //         abortControllers[urlKey].abort();
        //     }

        //     const controller = new AbortController();
        //     config.signal = controller.signal;
        //     abortControllers[urlKey] = controller;
        // }

        return config;
    },
    (error) => Promise.reject(error)
);