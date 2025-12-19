module.exports = {
  locales: ["ru", "en", "ja"],
  output: "public/locales/$LOCALE/$NAMESPACE.json",
  defaultNamespace: "common",
  useKeysAsDefaultValue: true,
  keySeparator: false,
  namespaceSeparator: false,
  defaultValue: (lng, ns, key) => key
};