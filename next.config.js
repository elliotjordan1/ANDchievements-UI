module.exports = {
  excludeFile: str => /\*.{spec,test}.js/.test(str),
  devIndicators: {
    autoPrerender: false,
  },
};
