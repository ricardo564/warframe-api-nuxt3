export const api = (path, opts) => {
  const { BASE_URL: baseURL } = useRuntimeConfig();
  if (!baseURL) {
    console.log("No BASE_URL defined in runtime config", baseURL);
  }

  // eslint-disable-next-line no-undef
  return $fetch(path, {
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
    ...(opts && { ...opts }),
  })
    .then((data: any) => {
      if (data?.message) {
        console.log(data.message);
      }
      return data;
    })
    .catch((response) => {
      const { status, data } = response;
      if (status === undefined && data === undefined) {
        console.log("Network Error");
      }

      console.log("error:", response);
      throw new Error("response");
    });
};
