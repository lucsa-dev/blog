(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(7949)}])},8063:function(e,t,s){"use strict";var n=s(5893);t.Z=function(e){var t=e.name,s=e.picture;return(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("img",{src:"/blog"+s,className:"w-12 h-12 rounded-full mr-4",alt:t}),(0,n.jsx)("div",{className:"text-xl font-bold",children:t})]})}},7518:function(e,t,s){"use strict";var n=s(5893);t.Z=function(e){var t=e.children;return(0,n.jsx)("div",{className:"container mx-auto px-5",children:t})}},9371:function(e,t,s){"use strict";var n=s(5893),i=s(4184),a=s.n(i),r=s(1664),l=s.n(r);t.Z=function(e){var t=e.title,s=e.src,i=e.slug,r=(0,n.jsx)("img",{src:"/blog"+s,alt:"Cover Image for ".concat(t),className:a()("shadow-sm",{"hover:shadow-lg transition-shadow duration-200":i})});return(0,n.jsx)("div",{className:"sm:mx-0",children:i?(0,n.jsx)(l(),{as:"/posts/".concat(i),href:"/posts/[slug]",children:(0,n.jsx)("a",{"aria-label":t,children:r})}):r})}},3797:function(e,t,s){"use strict";var n=s(5893),i=s(8420),a=s(6159);t.Z=function(e){var t=e.dateString,s=(0,i.Z)(t);return(0,n.jsx)("time",{dateTime:t,children:(0,a.Z)(s,"LLLL\td, yyyy")})}},605:function(e,t,s){"use strict";s.d(t,{Z:function(){return m}});var n=s(5893),i=s(9008),a=s.n(i),r=s(9953),l=function(){return(0,n.jsxs)(a(),{children:[(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,n.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,n.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,n.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,n.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,n.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,n.jsx)("meta",{name:"theme-color",content:"#000"}),(0,n.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,n.jsx)("meta",{name:"description",content:"A statically generated blog example using Next.js and ".concat(r.yf,".")}),(0,n.jsx)("meta",{property:"og:image",content:r.vC})]})},c=s(7294),o=s(2010),d=s(7516);function x(){var e=function(){return"dark"===r},t=(0,c.useState)(!1),s=t[0],i=t[1],a=(0,o.F)(),r=a.theme,l=a.setTheme;return(0,c.useEffect)((function(){return i(!0)}),[]),s?(0,n.jsx)("button",{className:"focus:outline-none",onClick:function(){return l(e()?"light":"dark")},"aria-label":"Theme toggle",children:e()?(0,n.jsx)(d.JuG,{size:20}):(0,n.jsx)(d.dZ3,{size:20})}):null}var m=function(e){e.preview;var t=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{}),(0,n.jsxs)("div",{className:"min-h-screen",children:[(0,n.jsx)("div",{className:"p-3 fixed right-0 top-0",children:(0,n.jsx)(x,{})}),(0,n.jsx)("main",{children:t})]})]})}},3009:function(e,t,s){"use strict";s.d(t,{Z:function(){return x}});var n=s(5893),i=s(8063),a=s(3797),r=s(9371),l=s(1664),c=s.n(l),o=s(415),d=function(e){var t=e.title,s=e.coverImage,l=e.date,d=e.excerpt,x=e.author,m=e.slug;return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"mb-5",children:s&&(0,n.jsx)(r.Z,{slug:m,title:t,src:s})}),(0,n.jsx)(o.E.h3,{className:"text-3xl mb-3 leading-snug",whileHover:{scale:1.2,transition:{duration:.2}},children:(0,n.jsx)(c(),{as:"/posts/".concat(m),href:"/posts/[slug]",children:(0,n.jsx)("a",{className:"hover:underline",children:t})})}),(0,n.jsx)("div",{className:"text-lg mb-4",children:(0,n.jsx)(a.Z,{dateString:l})}),(0,n.jsx)("p",{className:"text-lg leading-relaxed mb-4",children:d}),(0,n.jsx)(i.Z,{name:x.name,picture:x.picture})]})},x=function(e){var t=e.posts;return(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{className:"mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight",children:"Outros posts"}),(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32",children:t.map((function(e){return(0,n.jsx)(d,{title:e.title,coverImage:e.coverImage,date:e.date,author:e.author,slug:e.slug,excerpt:e.excerpt},e.slug)}))})]})}},9953:function(e,t,s){"use strict";s.d(t,{vC:function(){return i},yf:function(){return n}});var n="Markdown",i="https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"},7949:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return j},default:function(){return p}});var n=s(5893),i=s(7518),a=s(3009),r=s(8063),l=s(3797),c=s(9371),o=s(1664),d=s.n(o),x=s(415),m=function(e){var t=e.title,s=e.coverImage,i=e.date,a=e.excerpt,o=e.author,m=e.slug;return(0,n.jsxs)("section",{children:[(0,n.jsx)("div",{className:"mb-8 md:mb-16",children:s&&(0,n.jsx)(c.Z,{title:t,src:s,slug:m})}),(0,n.jsxs)("div",{className:"md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(x.E.h3,{className:"mb-4 text-4xl lg:text-5xl leading-tight",whileHover:{scale:[1,1.4,1.2],rotate:[0,10,-10,0],transition:{duration:.2}},children:(0,n.jsx)(d(),{as:"/posts/".concat(m),href:"/posts/[slug]",children:(0,n.jsx)("a",{className:"hover:underline",children:t})})}),(0,n.jsx)("div",{className:"mb-4 md:mb-0 text-lg",children:(0,n.jsx)(l.Z,{dateString:i})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-lg leading-relaxed mb-4",children:a}),(0,n.jsx)(r.Z,{name:o.name,picture:o.picture})]})]})]})},u=s(8193),h=function(){return(0,n.jsxs)("section",{className:"flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",children:[(0,n.jsxs)(x.E.div,{initial:"hidden",animate:"visible",variants:{hidden:{scale:.8,opacity:0},visible:{scale:1,opacity:1,transition:{delay:.4}}},children:[(0,n.jsx)("h1",{className:"text-5xl md:text-8xl font-bold tracking-tighter leading-tight",children:"Lucas Almeida"}),(0,n.jsx)("h4",{children:"lucsa.dev@gmail.com"})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"mt-5 md:pl-8",children:[(0,n.jsxs)("h4",{className:"text-center md:text-left text-lg",children:["Hello, my name is Lucas Almeida \ud83d\udc4b,",(0,n.jsx)("br",{})," i am a web developer."]}),(0,n.jsx)("a",{className:"float-left text-4xl p-2",href:"https://github.com/Lucasalmeida-ux/",target:"_blank",children:(0,n.jsx)(u.RrF,{})}),(0,n.jsx)("a",{className:"float-left text-4xl p-2",href:"https://www.linkedin.com/in/lucassalmeida/",target:"_blank",children:(0,n.jsx)(u._iD,{})})]})})]})},g=s(605),f=s(3454),j=!0;function p(e){var t=e.allPosts;console.log("process.env ",f.env);var s=t[0],r=t.slice(1);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(g.Z,{children:(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(h,{}),s&&(0,n.jsx)(m,{title:s.title,coverImage:s.coverImage,date:s.date,author:s.author,slug:s.slug,excerpt:s.excerpt}),r.length>0&&(0,n.jsx)(a.Z,{posts:r})]})})})}}},function(e){e.O(0,[874,617,739,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);