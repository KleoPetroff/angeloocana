webpackJsonp([0xf4f64c1a2c82],{"./node_modules/json-loader/index.js!./.cache/json/fr-blog-linux-arch-backup-android-files.json":function(e,a){e.exports={data:{markdownRemark:{fileAbsolutePath:"/home/angeloocana/dev/angeloocana/src/pages/blog/linux/arch/backup-android-files.fr.md",html:'<p>Votre téléphone est-il plein? Sauvegardez vos fichiers Arch Linux.\nIl sera facile de suivre ce tutoriel (j’espère jajaja).\nJ’ai eu quelques problèmes avec d’autres programmes (android-file-transfer and mtpfs),\nVoici ce qui a fonctionné avec moi, j’espère que ça vous aide:</p>\n<h2>Installez simple-mtpfs</h2>\n<p>Si vous n’avez pas ou ne sais pas ce qui est <strong>Yaourt</strong>, vérifiez ici d’abord:\n<a href="https://angeloocana.com/en/blog/linux/arch/install-yaourt/">https://angeloocana.com/en/blog/linux/arch/install-yaourt/</a></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    yaourt -S simple-mtpfs\n</code></pre>\n      </div>\n<h2>Créer un dossier de destination</h2>\n<p>J’utiliserai le dossier <strong>~/mnt</strong>, vous pouvez l’utiliser, mais rappelez-vous pour l’étape suivante.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">mkdir</span> ~/mnt\n</code></pre>\n      </div>\n<h2>Montez votre téléphone dans un dossier</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    simple-mtpfs --device 1 ~/mnt\n</code></pre>\n      </div>\n<p>C’est ça! uhuhuh\nAccédez au dossier <strong>~/mnt</strong>, vos fichiers sont là!</p>\n<p>Guide officiel: <a href="https://wiki.archlinux.org/index.php/MTP">https://wiki.archlinux.org/index.php/MTP</a></p>',excerpt:"Votre téléphone est-il plein? Sauvegardez vos fichiers Arch Linux.\nIl sera facile de suivre ce tutoriel (j’espère jajaja).\nJ’ai eu quelques...",fields:{tagSlugs:[{tag:"Linux",link:"/fr/tags/linux/"},{tag:"Arch",link:"/fr/tags/arch/"},{tag:"Android",link:"/fr/tags/android/"}],slug:"/fr/blog/linux/arch/backup-android-files/",readNextPosts:[{excerpt:"Move your font files to ",frontmatter:{title:"Install fonts in Arch linux",date:"2017-07-31"},fields:{slug:"/fr/blog/linux/arch/install-fonts/",langKey:"fr"}},{excerpt:"Vim est un ancien éditeur de texte d’école, il fonctionne dans la console, c’est plus rapide de tous.\nC’est la meilleure option pour accéder...",frontmatter:{title:"Commandes d'aide Vim",date:"2017-08-08"},fields:{slug:"/fr/blog/vim/vim-help-commands/",langKey:"fr"}},{excerpt:"Install ZSH https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH Install oh-my-zsh Download Install Make it your default shell...",frontmatter:{title:"Install ZSH and oh-my-zsh",date:"2017-06-23"},fields:{slug:"/fr/blog/terminal/install-zsh/",langKey:"fr"}}]},frontmatter:{youtubeId:null,title:"Comment enregistrer des photos depuis votre téléphone vers Arch Linux",tags:["Linux","Arch","Android"],date:"2017-08-30",structuredData:{alternativeHeadline:"...",type:"TechArticle",dependencies:"Arch Linux et téléphone Android",proficiencyLevel:"Beginner",articleSection:"Arch Linux",pageEnd:null,pageStart:null,pagination:null,about:{name:"Arch Linux",alternateName:"Arch",description:"lightweight and flexible Linux® distribution that tries to Keep It Simple.",identifier:"arch-linux",image:null,sameAs:"https://www.archlinux.org/"},accessMode:"textual",accessModeSufficient:"textual",accessibilityAPI:"ARIA",accessibilityControl:"fullKeyboardControl, fullTouchControl, fullMouseControl",accessibilitySummary:null,aggregateRating:"...",audience:"...",author:"angeloocana",comment:"...",commentCount:"...",contentLocation:"...",dateCreated:"2017-08-26",dateModified:"2017-08-28",datePublished:"2017-08-28",discussionUrl:"...",educationalUse:"...",isAccessibleForFree:!0,isFamilyFriendly:!0,keywords:"...",locationCreated:"Ottawa CA",thumbnailUrl:"...",version:1,video:"..."}}}},pathContext:{path:"/fr/blog/linux/arch/backup-android-files/",langKey:"fr"}}}});
//# sourceMappingURL=path---fr-blog-linux-arch-backup-android-files-78510412b5c6edc69eb6.js.map