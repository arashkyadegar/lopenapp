export const ResponseStatus = {
  OK: 200,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  INTERNAL_SERVER_ERROR: 500,
  TRYING_TO_ADD_A_DUPLICATE: 409,
};
export const ResponseRedirect = () => {
  return {
    redirect: {
      permanent: false,
      destination: "/admin/dashboard/login",
    },
  };
};
module.exports = { ResponseStatus };
