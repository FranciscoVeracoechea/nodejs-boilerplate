export default ({ isDev }) => (error, req, res, next) => {
  if (error.status) {
    res.status(error.status);
  } else {
    res.status(500);
  }
  if (isDev) {
    /* eslint-disable */
    console.error('ERROR -> ', error);
    /* eslint-enable */
  }
  res.json(error);
};
