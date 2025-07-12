function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";

export const PATH_AUTH = {
  loginByPhone: path(ROOTS_AUTH, "/login-by-phone"),
  loginByMail: path(ROOTS_AUTH, "/login-by-mail"),
};
