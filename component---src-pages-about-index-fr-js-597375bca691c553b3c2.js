webpackJsonp([67791985173325],{"./src/components/AboutPage.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return e.raw=t,e}t.__esModule=!0;var l=a(["\n  padding: 0 0 "," 0;\n"],["\n  padding: 0 0 "," 0;\n"]),s=o("./node_modules/preact-compat/dist/preact-compat.js"),r=n(s),u=o("./node_modules/prop-types/index.js"),d=n(u),i=o("./src/components/H1.js"),c=n(i),m=o("./src/data/authors.js"),p=o("./src/structuredData.js"),g=o("./src/components/BigFirstLetter.js"),b=n(g),f=o("./node_modules/styled-components/lib/index.js"),j=n(f),h=o("./node_modules/react-intl/lib/index.js"),_=o("./src/components/Resume/ResumeContainer.js"),v=n(_),x=o("./node_modules/react-helmet/lib/Helmet.js"),y=n(x),E=j.default.header(l,function(e){var t=e.theme;return t.scale(2)}),A=function(e){var t=(0,m.getAuthor)("angeloocana");t.description=e.i18n.descriptionForGoogle;var o=e.data.site.siteMetadata.resume.menu,n=(0,p.getStructuredDataForAuthor)(t);return r.default.createElement(v.default,{menu:o,selectedPage:"/about/"},r.default.createElement(b.default,null,r.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:n}}),r.default.createElement(h.FormattedMessage,{id:"about"},function(e){return r.default.createElement(E,null,r.default.createElement(y.default,{title:e,meta:[{name:"description",content:e}]}),r.default.createElement(c.default,null,e))}),e.i18n.description))};A.propTypes={i18n:d.default.shape({description:d.default.object.isRequired,descriptionForGoogle:d.default.string.isRequired}).isRequired,data:d.default.object.isRequired},t.default=A,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"presets":["/home/angeloocana/dev/angeloocana/node_modules/babel-preset-es2015/lib/index.js","/home/angeloocana/dev/angeloocana/node_modules/babel-preset-react/lib/index.js",["/home/angeloocana/dev/angeloocana/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/home/angeloocana/dev/angeloocana/node_modules/babel-preset-stage-0/lib/index.js","/home/angeloocana/dev/angeloocana/node_modules/babel-preset-react/lib/index.js"],"plugins":["/home/angeloocana/dev/angeloocana/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/angeloocana/dev/angeloocana/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/angeloocana/dev/angeloocana/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/pages/about/index.fr.js':function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},l=o("./node_modules/preact-compat/dist/preact-compat.js"),s=n(l),r=o("./src/components/AboutPage.js"),u=n(r),d=o("./node_modules/graphql/index.js"),i=(n(d),{description:s.default.createElement("p",null,"Bonjour! Je suis Angelo! Depuis 2007, je suis un développeur complet. ",s.default.createElement("br",null),"J'aime Linux, Open Source technologies, ma fille et ma femme. ",s.default.createElement("br",null),"Aujourd'hui, j'utilise React, Nodejs et Arch Linux pour le développement d'applications Web et mobiles."),descriptionForGoogle:"\n    Bonjour! Je suis Angelo! Depuis 2007, je suis un développeur complet.\n    J'aime Linux, Open Source technologies, ma fille et ma femme.\n    Aujourd'hui, j'utilise React, Nodejs et Arch Linux pour le développement d'applications Web et mobiles.\n  "});t.default=function(e){return s.default.createElement(u.default,a({i18n:i},e))};t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-about-index-fr-js-597375bca691c553b3c2.js.map