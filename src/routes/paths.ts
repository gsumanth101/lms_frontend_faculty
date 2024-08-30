export const rootPaths = {
  root: '/',
  pageRoot: 'pages',
  authRoot: 'authentication',
  errorRoot: 'error',
};

export default {
  dashboard: `${rootPaths.root}${rootPaths.pageRoot}/dashboard`,
  task: `${rootPaths.root}${rootPaths.pageRoot}/task`,
  mentors: `${rootPaths.root}${rootPaths.pageRoot}/mentors`,
  messages: `${rootPaths.root}${rootPaths.pageRoot}/messages`,
  settings: `${rootPaths.root}${rootPaths.pageRoot}/settings`,

  signin: `${rootPaths.root}${rootPaths.authRoot}/signin`,
  signup: `${rootPaths.root}${rootPaths.authRoot}/signup`,
  forgotPassword: `${rootPaths.root}${rootPaths.authRoot}/forgot-password`,
  404: `${rootPaths.root}${rootPaths.errorRoot}/404`,
};