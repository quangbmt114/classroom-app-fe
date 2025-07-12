function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}
export const ROOTS_HOME = "/";
const ROOTS_AUTH = "/auth";

export const PATH_AUTH = {
  loginByPhone: path(ROOTS_AUTH, "/login-by-phone"),
  loginByEmail: path(ROOTS_AUTH, "/login-by-email"),
};
