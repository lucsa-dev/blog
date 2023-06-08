(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(3492)}])},7518:function(e,n,s){"use strict";var t=s(5893);n.Z=function(e){var n=e.children;return(0,t.jsx)("div",{className:"container mx-auto px-5",children:n})}},8055:function(e,n,s){"use strict";s.d(n,{Z:function(){return f}});var t=s(5893),a=s(9008),i=s.n(a),r=function(){return(0,t.jsxs)(i(),{children:[(0,t.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,t.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,t.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,t.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,t.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,t.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,t.jsx)("meta",{name:"theme-color",content:"#000"}),(0,t.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,t.jsx)("meta",{name:"description",content:"A statically generated blog example using Next.js and ".concat("Markdown",".")}),(0,t.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"})]})},l=s(7294),c=s(2010),o=s(7516);function x(){var e=function(){return"dark"===r},n=(0,l.useState)(!1),s=n[0],a=n[1],i=(0,c.F)(),r=i.theme,x=i.setTheme;return(0,l.useEffect)((function(){return a(!0)}),[]),s?(0,t.jsx)("button",{className:"focus:outline-none transition-colors hover:text-pink-600",onClick:function(){return x(e()?"light":"dark")},"aria-label":"Theme toggle",children:e()?(0,t.jsx)(o.JuG,{size:20}):(0,t.jsx)(o.dZ3,{size:20})}):null}var d=s(1664),m=s.n(d),u=function(){return(0,t.jsx)("div",{className:"text-2xl font-normal",children:(0,t.jsx)(m(),{href:"/",children:(0,t.jsxs)("a",{children:[(0,t.jsx)("span",{className:"text-pink-600",children:"<"}),(0,t.jsxs)("span",{className:"font-bold",children:["luc",(0,t.jsx)("span",{className:"text-pink-600",children:"S"}),"A.dev"]})," ",(0,t.jsx)("span",{className:"text-pink-600",children:"/>"})]})})})},h=s(33),f=(h.Z.Header,h.Z.Content,h.Z.Footer,function(e){e.preview;var n=e.children;return(0,t.jsxs)("div",{className:"min-h-screen px-4",children:[(0,t.jsx)(r,{}),(0,t.jsxs)("div",{className:"flex p-3",children:[(0,t.jsx)("div",{className:"flex-1 mt-2",children:(0,t.jsx)(u,{})}),(0,t.jsx)("div",{className:"flex-none p-3",children:(0,t.jsx)(x,{})})]}),(0,t.jsx)("main",{children:n})]})})},2478:function(e,n,s){"use strict";s.d(n,{Z:function(){return h}});var t=s(5893),a=s(8420),i=s(6159),r=function(e){var n=e.dateString,s=(0,a.Z)(n);return(0,t.jsx)("time",{dateTime:n,children:(0,i.Z)(s,"LLLL\td, yyyy")})},l=s(4184),c=s.n(l),o=s(1664),x=s.n(o),d=function(e){var n=e.title,s=e.src,a=e.slug,i=(0,t.jsx)("img",{src:""+s,alt:"Cover Image for ".concat(n),className:c()("shadow-sm",{"hover:shadow-lg transition-shadow duration-200":a})});return(0,t.jsx)("div",{className:"sm:mx-0",children:a?(0,t.jsx)(x(),{as:"/posts/".concat(a),href:"/posts/[slug]",children:(0,t.jsx)("a",{"aria-label":n,children:i})}):i})},m=s(415),u=function(e){var n=e.title,s=e.coverImage,a=e.date,i=e.excerpt,l=(e.author,e.slug);return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"mb-5",children:s&&(0,t.jsx)(d,{slug:l,title:n,src:s})}),(0,t.jsx)(m.E.h3,{className:"text-3xl mb-3 leading-snug transition-colors hover:text-pink-600",whileHover:{scale:1.1,transition:{duration:.2}},children:(0,t.jsx)(x(),{as:"/posts/".concat(l),href:"/posts/[slug]",children:n})}),(0,t.jsx)("div",{className:"text-lg mb-4",children:(0,t.jsx)(r,{dateString:a})}),(0,t.jsx)("p",{className:"text-lg leading-relaxed mb-4",children:i})]})},h=function(e){var n=e.posts;return(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{className:"mb-8 text-2xl md:text-4xl font-bold tracking-tighter leading-tight",children:"Posts"}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32",children:n.map((function(e){return(0,t.jsx)(u,{title:e.title,coverImage:e.coverImage,date:e.date,author:e.author,slug:e.slug,excerpt:e.excerpt},e.slug)}))})]})}},3492:function(e,n,s){"use strict";s.r(n),s.d(n,{__N_SSG:function(){return o},default:function(){return x}});var t=s(5893),a=s(7518),i=s(2478),r=s(8193),l=function(){return(0,t.jsxs)("section",{className:"flex-col bg-pink-700 p-2 md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",children:[(0,t.jsxs)("h4",{className:"text-center md:text-left text-lg",children:["Hello, my name is Lucas dos Santos Almeida \ud83d\udd96\ud83c\udffb,",(0,t.jsx)("br",{})," i am a stranger\ud83e\uddd9\ud83c\udffd\u200d\u2642\ufe0f web developer."]}),(0,t.jsxs)("a",{className:"hover:text-pink-500 transition-colors float-left text-4xl p-2",href:"https://github.com/lucsa-dev/",target:"_blank",children:[(0,t.jsx)(r.RrF,{className:"inline"}),(0,t.jsx)("span",{className:"text-lg",children:"/lucsa-dev"})]}),(0,t.jsxs)("a",{className:"hover:text-pink-500 transition-colors float-left text-4xl p-2",href:"https://www.linkedin.com/in/lucassalmeida/",target:"_blank",children:[(0,t.jsx)(r._iD,{className:"inline"}),(0,t.jsx)("span",{className:"text-lg",children:"/lucassalmeida"})]})]})},c=s(8055),o=!0;function x(e){var n=e.allPosts;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(c.Z,{children:(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(l,{}),(0,t.jsx)(i.Z,{posts:n})]})})})}}},function(e){e.O(0,[874,617,394,774,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);