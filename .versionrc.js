module.exports = {
  scripts: {
    prerelease:
      'if [[ "$(git rev-parse --abbrev-ref HEAD)" != "master" ]]; then exit -1; fi',
  },
};
