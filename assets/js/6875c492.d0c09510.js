"use strict";(self.webpackChunkhatrickek_site=self.webpackChunkhatrickek_site||[]).push([[813],{7713:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(1312),s=n(9022),r=n(4848);function l(e){const{metadata:t}=e,{previousPage:n,nextPage:l}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(s.A,{permalink:n,title:(0,r.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),l&&(0,r.jsx)(s.A,{permalink:l,title:(0,r.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},8149:(e,t,n)=>{n.d(t,{A:()=>B});n(6540);var a=n(4164),s=n(7131),r=n(4848);function l(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}var i=n(8774);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:l}=(0,s.e)(),{permalink:c,title:d}=n,u=l?"h1":"h2";return(0,r.jsx)(u,{className:(0,a.A)(o.title,t),children:l?d:(0,r.jsx)(i.A,{to:c,children:d})})}var d=n(1312),u=n(3465),m=n(6266);const g={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function p(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function x(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:n}=(0,s.e)(),{date:l,readingTime:i}=n,o=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,a.A)(g.container,"margin-vert--md",t),children:[(0,r.jsx)(p,{date:l,formattedDate:(c=l,o.format(new Date(c)))}),void 0!==i&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(h,{readingTime:i})]})]});var c}function f(e){return e.href?(0,r.jsx)(i.A,{...e}):(0,r.jsx)(r.Fragment,{children:e.children})}function b(e){let{author:t,className:n}=e;const{name:s,title:l,url:i,imageURL:o,email:c}=t,d=i||c&&`mailto:${c}`||void 0;return(0,r.jsxs)("div",{className:(0,a.A)("avatar margin-bottom--sm",n),children:[o&&(0,r.jsx)(f,{href:d,className:"avatar__photo-link",children:(0,r.jsx)("img",{className:"avatar__photo",src:o,alt:s})}),s&&(0,r.jsxs)("div",{className:"avatar__intro",children:[(0,r.jsx)("div",{className:"avatar__name",children:(0,r.jsx)(f,{href:d,children:(0,r.jsx)("span",{children:s})})}),l&&(0,r.jsx)("small",{className:"avatar__subtitle",children:l})]})]})}const A={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function v(e){let{className:t}=e;const{metadata:{authors:n},assets:l}=(0,s.e)();if(0===n.length)return null;const i=n.every((e=>{let{name:t}=e;return!t}));return(0,r.jsx)("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",i?A.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,r.jsx)("div",{className:(0,a.A)(!i&&"col col--6",i?A.imageOnlyAuthorCol:A.authorCol),children:(0,r.jsx)(b,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(j,{}),(0,r.jsx)(v,{})]})}var _=n(440),P=n(2125);function T(e){let{children:t,className:n}=e;const{isBlogPostPage:l}=(0,s.e)();return(0,r.jsx)("div",{id:l?_.blogPostContainerID:void 0,className:(0,a.A)("markdown",n),children:(0,r.jsx)(P.A,{children:t})})}var w=n(7559),k=n(4336),y=n(6133);const F={tags:"tags_jXut",tag:"tag_QGVx"};function M(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,a.A)(F.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,r.jsx)("li",{className:F.tag,children:(0,r.jsx)(y.A,{...e})},e.permalink)))})]})}function C(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function R(e){const{blogPostTitle:t,...n}=e;return(0,r.jsx)(i.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,r.jsx)(C,{})})}function U(){const{metadata:e,isBlogPostPage:t}=(0,s.e)(),{tags:n,title:l,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&o,m=n.length>0;if(!(m||u||i))return null;if(t){const e=!!(i||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,a.A)("row","margin-top--sm",w.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(M,{tags:n})})}),e&&(0,r.jsx)(k.A,{className:(0,a.A)("margin-top--sm",w.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,a.A)("col",{"col--9":u}),children:(0,r.jsx)(M,{tags:n})}),u&&(0,r.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":m}),children:(0,r.jsx)(R,{blogPostTitle:l,to:e.permalink})})]})}function B(e){let{children:t,className:n}=e;const i=function(){const{isBlogPostPage:e}=(0,s.e)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(l,{className:(0,a.A)(i,n),children:[(0,r.jsx)(N,{}),(0,r.jsx)(T,{children:t}),(0,r.jsx)(U,{})]})}},3892:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(7131),s=n(8149),r=n(4848);function l(e){let{items:t,component:n=s.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(a.i,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},3069:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(6540);var a=n(4164),s=n(1312),r=n(3465),l=n(1213),i=n(7559),o=n(8774),c=n(6535),d=n(7713),u=n(1463),m=n(3892),g=n(996),h=n(1107),p=n(4848);function x(e){const t=function(){const{selectMessage:e}=(0,r.W)();return t=>e(t,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,s.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const n=x(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.be,{title:n,description:t.description}),(0,p.jsx)(u.A,{tag:"blog_tags_posts"})]})}function f(e){let{tag:t,items:n,sidebar:a,listMetadata:r}=e;const l=x(t);return(0,p.jsxs)(c.A,{sidebar:a,children:[t.unlisted&&(0,p.jsx)(g.A,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(h.A,{as:"h1",children:l}),t.description&&(0,p.jsx)("p",{children:t.description}),(0,p.jsx)(o.A,{href:t.allTagsPath,children:(0,p.jsx)(s.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(m.A,{items:n}),(0,p.jsx)(d.A,{metadata:r})]})}function b(e){return(0,p.jsxs)(l.e3,{className:(0,a.A)(i.G.wrapper.blogPages,i.G.page.blogTagPostListPage),children:[(0,p.jsx)(j,{...e}),(0,p.jsx)(f,{...e})]})}},9022:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(4164),s=n(8774),r=n(4848);function l(e){const{permalink:t,title:n,subLabel:l,isNext:i}=e;return(0,r.jsxs)(s.A,{className:(0,a.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},996:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var a=n(4164),s=n(1312),r=n(5260),l=n(4848);function i(){return(0,l.jsx)(s.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,l.jsx)(s.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(r.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(7559),u=n(7293);function m(e){let{className:t}=e;return(0,l.jsx)(u.A,{type:"caution",title:(0,l.jsx)(i,{}),className:(0,a.A)(t,d.G.common.unlistedBanner),children:(0,l.jsx)(o,{})})}function g(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(m,{...e})]})}},7131:(e,t,n)=>{n.d(t,{e:()=>o,i:()=>i});var a=n(6540),s=n(9532),r=n(4848);const l=a.createContext(null);function i(e){let{children:t,content:n,isBlogPostPage:s=!1}=e;const i=function(e){let{content:t,isBlogPostPage:n}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:s});return(0,r.jsx)(l.Provider,{value:i,children:t})}function o(){const e=(0,a.useContext)(l);if(null===e)throw new s.dV("BlogPostProvider");return e}},3465:(e,t,n)=>{n.d(t,{W:()=>c});var a=n(6540),s=n(4586);const r=["zero","one","two","few","many","other"];function l(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const s=n.select(t),r=n.pluralForms.indexOf(s);return a[Math.min(r,a.length-1)]}(n,t,e)}}}}]);