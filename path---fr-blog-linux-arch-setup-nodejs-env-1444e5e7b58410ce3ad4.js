webpackJsonp([53030431713634],{"./node_modules/json-loader/index.js!./.cache/json/fr-blog-linux-arch-setup-nodejs-env.json":function(n,s){n.exports={data:{markdownRemark:{fileAbsolutePath:"/home/angeloocana/dev/angeloocana/src/pages/blog/linux/arch/setup-nodejs-env.fr.md",html:'<h2>Install git</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">sudo</span> pacman -S <span class="token function">git</span>\n</code></pre>\n      </div>\n<h2>Install Nodejs</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">sudo</span> pacman -S nodejs\n</code></pre>\n      </div>\n<h2>Install NPM</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">sudo</span> pacman -S <span class="token function">npm</span>\n</code></pre>\n      </div>\n<h3>Fix global permissions error</h3>\n<p><a href="https://docs.npmjs.com/getting-started/fixing-npm-permissions">https://docs.npmjs.com/getting-started/fixing-npm-permissions</a></p>\n<p>Make a directory for global installations:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">mkdir</span> ~/.npm-global\n</code></pre>\n      </div>\n<p>Configure npm to use the new directory path:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">npm</span> config <span class="token keyword">set</span> prefix <span class="token string">\'~/.npm-global\'</span>\n</code></pre>\n      </div>\n<p>Open or create a ~/.profile file and add this line:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">export</span> PATH<span class="token operator">=</span>~/.npm-global/bin:<span class="token variable">$PATH</span>\n</code></pre>\n      </div>\n<p>Back on the command line, update your system variables:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">source</span> ~/.profile\n</code></pre>\n      </div>\n<h2>Install vs code</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    yaourt -S visual-studio-code\n</code></pre>\n      </div>\n<h2>Install Python for Gatsby</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">sudo</span> pacman -S python2\n</code></pre>\n      </div>',excerpt:"Install git Install Nodejs Install NPM Fix global permissions error https://docs.npmjs.com/getting-started/fixing-npm-permissions Make a...",fields:{tagSlugs:[{tag:"Linux",link:"/fr/tags/linux/"},{tag:"Arch",link:"/fr/tags/arch/"},{tag:"NodeJs",link:"/fr/tags/node-js/"},{tag:"Dev env",link:"/fr/tags/dev-env/"},{tag:"Npm",link:"/fr/tags/npm/"},{tag:"Git",link:"/fr/tags/git/"},{tag:"Vs code",link:"/fr/tags/vs-code/"}],slug:"/fr/blog/linux/arch/setup-nodejs-env/",readNextPosts:[{excerpt:"Move your font files to ",frontmatter:{title:"Install fonts in Arch linux",date:"2017-07-31"},fields:{slug:"/fr/blog/linux/arch/install-fonts/",langKey:"fr"}},{excerpt:"Avez-vous besoin de modifier des fichiers dans Word et Excel sous Linux? Suivez mes étapes pour installer LibreOffice, un paquet de...",frontmatter:{title:"Comment utiliser Word et Excel dans Linux ou peut-être pas...",date:"2017-08-30"},fields:{slug:"/fr/blog/linux/arch/install-libre-office/",langKey:"fr"}},{excerpt:"Enable Auto Complete, Commit with title and description, create alias, navigate history, update fork and more! Enable Auto Complete while...",frontmatter:{title:"Git help commands",date:"2017-06-23"},fields:{slug:"/fr/blog/git/git-setup/",langKey:"fr"}}]},frontmatter:{youtubeId:null,title:"Setup dev env Arch linux",tags:["Linux","Arch","NodeJs","Dev env","Npm","Git","Vs code"],date:"2017-07-30",structuredData:null}}},pathContext:{path:"/fr/blog/linux/arch/setup-nodejs-env/",langKey:"fr"}}}});
//# sourceMappingURL=path---fr-blog-linux-arch-setup-nodejs-env-1444e5e7b58410ce3ad4.js.map