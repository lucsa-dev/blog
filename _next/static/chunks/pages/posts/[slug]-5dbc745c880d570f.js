(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{592:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return t(1119)}])},7518:function(e,n,t){"use strict";var s=t(5893);n.Z=function(e){var n=e.children;return(0,s.jsx)("div",{className:"container mx-auto px-5",children:n})}},8055:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var s=t(5893),r=t(9008),i=t.n(r),a=function(){return(0,s.jsxs)(i(),{children:[(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,s.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,s.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,s.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,s.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,s.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,s.jsx)("meta",{name:"theme-color",content:"#000"}),(0,s.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,s.jsx)("meta",{name:"description",content:"A statically generated blog example using Next.js and ".concat("Markdown",".")}),(0,s.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"})]})},l=t(7294),c=t(2010),o=t(7516);function x(){var e=function(){return"dark"===a},n=(0,l.useState)(!1),t=n[0],r=n[1],i=(0,c.F)(),a=i.theme,x=i.setTheme;return(0,l.useEffect)((function(){return r(!0)}),[]),t?(0,s.jsx)("button",{className:"focus:outline-none transition-colors hover:text-pink-600",onClick:function(){return x(e()?"light":"dark")},"aria-label":"Theme toggle",children:e()?(0,s.jsx)(o.JuG,{size:20}):(0,s.jsx)(o.dZ3,{size:20})}):null}var d=t(1664),u=t.n(d),m=function(){return(0,s.jsx)("div",{className:"text-2xl font-normal",children:(0,s.jsx)(u(),{href:"/",children:(0,s.jsxs)("a",{children:[(0,s.jsx)("span",{className:"text-pink-600",children:"<"}),(0,s.jsxs)("span",{className:"font-bold",children:["luc",(0,s.jsx)("span",{className:"text-pink-600",children:"S"}),"A.dev"]})," ",(0,s.jsx)("span",{className:"text-pink-600",children:"/>"})]})})})},h=t(33),g=(h.Z.Header,h.Z.Content,h.Z.Footer,function(e){e.preview;var n=e.children;return(0,s.jsxs)("div",{className:"min-h-screen px-4",children:[(0,s.jsx)(a,{}),(0,s.jsxs)("div",{className:"flex p-3",children:[(0,s.jsx)("div",{className:"flex-1 mt-2",children:(0,s.jsx)(m,{})}),(0,s.jsx)("div",{className:"flex-none p-3",children:(0,s.jsx)(x,{})})]}),(0,s.jsx)("main",{children:n})]})})},2478:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var s=t(5893),r=t(8420),i=t(6159),a=function(e){var n=e.dateString,t=(0,r.Z)(n);return(0,s.jsx)("time",{dateTime:n,children:(0,i.Z)(t,"LLLL\td, yyyy")})},l=t(4184),c=t.n(l),o=t(1664),x=t.n(o),d=function(e){var n=e.title,t=e.src,r=e.slug,i=(0,s.jsx)("img",{src:""+t,alt:"Cover Image for ".concat(n),className:c()("shadow-sm",{"hover:shadow-lg transition-shadow duration-200":r})});return(0,s.jsx)("div",{className:"sm:mx-0",children:r?(0,s.jsx)(x(),{as:"/posts/".concat(r),href:"/posts/[slug]",children:(0,s.jsx)("a",{"aria-label":n,children:i})}):i})},u=t(415),m=function(e){var n=e.title,t=e.coverImage,r=e.date,i=e.excerpt,l=(e.author,e.slug);return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"mb-5",children:t&&(0,s.jsx)(d,{slug:l,title:n,src:t})}),(0,s.jsx)(u.E.h3,{className:"text-3xl mb-3 leading-snug transition-colors hover:text-pink-600",whileHover:{scale:1.1,transition:{duration:.2}},children:(0,s.jsx)(x(),{as:"/posts/".concat(l),href:"/posts/[slug]",children:n})}),(0,s.jsx)("div",{className:"text-lg mb-4",children:(0,s.jsx)(a,{dateString:r})}),(0,s.jsx)("p",{className:"text-lg leading-relaxed mb-4",children:i})]})},h=function(e){var n=e.posts;return(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{className:"mb-8 text-2xl md:text-4xl font-bold tracking-tighter leading-tight",children:"Posts"}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32",children:n.map((function(e){return(0,s.jsx)(m,{title:e.title,coverImage:e.coverImage,date:e.date,author:e.author,slug:e.slug,excerpt:e.excerpt},e.slug)}))})]})}},1119:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return g},default:function(){return f}});var s=t(5893),r=t(1163),i=t(2918),a=t(7518),l=t(6834),c=t.n(l),o=function(e){var n=e.content;return(0,s.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,s.jsx)("div",{className:c().markdown,dangerouslySetInnerHTML:{__html:n}})})},x=t(8055),d=function(e){var n=e.children;return(0,s.jsx)("h1",{className:"text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center",children:n})},u=t(9008),m=t.n(u),h=t(2478),g=!0;function f(e){var n=e.post,t=e.morePosts,l=e.preview,c=t.filter((function(e){return e.slug!==n.slug})),u=(0,r.useRouter)();return u.isFallback||(null===n||void 0===n?void 0:n.slug)?(0,s.jsx)(x.Z,{preview:l,children:(0,s.jsx)(a.Z,{children:u.isFallback?(0,s.jsx)(d,{children:"Loading\u2026"}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("article",{className:"mb-32",children:[(0,s.jsxs)(m(),{children:[(0,s.jsxs)("title",{children:[n.title," | lucsa.dev"]}),n.ogImage&&(0,s.jsx)("meta",{property:"og:image",content:n.ogImage.url})]}),(0,s.jsx)(o,{content:n.content})]}),c.length>0&&(0,s.jsx)(h.Z,{posts:c})]})})}):(0,s.jsx)(i.default,{statusCode:404})}},6834:function(e){e.exports={markdown:"markdown-styles_markdown__h_8de"}},2918:function(e,n,t){e.exports=t(9185)},1163:function(e,n,t){e.exports=t(387)}},function(e){e.O(0,[874,394,774,888,179],(function(){return n=592,e(e.s=n);var n}));var n=e.O();_N_E=n}]);