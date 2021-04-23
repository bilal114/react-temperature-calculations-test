/* config-overrides.js */
const  {addWebpackAlias, override} = require('customize-cra');
const path = require('path');

module.exports = override(
  
  addWebpackAlias({
  ["@/components"]: path.resolve(__dirname,"./src/components"),
  ["@/containers"]: path.resolve(__dirname,"./src/containers") ,
  ["@/redux"]: path.resolve(__dirname,"./src/redux"),
  ["@/styles"]: path.resolve(__dirname,"./src/styles"),
  ["@/src"]: path.resolve(__dirname,"./src"),
  ["@/utils"]: path.resolve(__dirname,"./src/utils")

})

)


