(self.webpackChunklite=self.webpackChunklite||[]).push([[6605],{3934:(e,t,n)=>{"use strict";n.d(t,{d:()=>m});var i=n(87329),a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GridPostPreviewImage_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"previewImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"GridPostPreviewImage_imageMetadata"}}]}}]}}].concat((0,i.Z)([{kind:"FragmentDefinition",name:{kind:"Name",value:"GridPostPreviewImage_imageMetadata"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ImageMetadata"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"focusPercentX"}},{kind:"Field",name:{kind:"Name",value:"focusPercentY"}},{kind:"Field",name:{kind:"Name",value:"alt"}}]}}]))},r=n(8607),o=n(14524),l=n(63009),d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GridPostPreviewContent_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"extendedPreviewContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subtitle"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"GridPostPreviewImage_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewFooter_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewByLine_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewInformation_post"}}]}}].concat((0,i.Z)(a.definitions),(0,i.Z)(r.m1.definitions),(0,i.Z)(o.xO.definitions),(0,i.Z)(l.u.definitions))},s=n(3105),m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GridPostPreview_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"GridPostPreviewContent_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewContainer_post"}}]}}].concat((0,i.Z)(d.definitions),(0,i.Z)(s.J.definitions))}},82053:(e,t,n)=>{"use strict";n.d(t,{w:()=>_});var i=n(67294),a=n(94124),r=n(66604),o=n.n(r),l=n(599),d=n(77355),s=n(93310),m=n(52069),c=n(90586),u=n(87691),p=n(14646),v=n(97480),g=n(18634),k=n(21755),f=n(31889);function w(e){var t=e.dividerBreakpoints,n=e.dividerColor,a=(0,f.F)(),r=(0,l.a)();return i.createElement(g.y,{xl:t.includes(k.j.xl),lg:t.includes(k.j.lg),md:t.includes(k.j.md),sm:t.includes(k.j.sm),xs:t.includes(k.j.xs)},i.createElement(v.E,{marginTop:r?"0px":"32px",borderColor:null!=n?n:a.colorTokens.border.neutral.primary.base}))}var h=n(4381),x=n(46696),S=n(36001);function F(e,t){return e.includes(t)?"block":"none"}function N(e){return e?Math.round(e):e}function E(e){var t=e.post,n=e.postUrl,r=e.scales,o=e.aspectRatio,l=void 0===o?h.Pr.ThreeToTwo:o,m=e.miroImgFetchedWidth,c=e.webp,u=e.freezeGifs,p=void 0!==u&&u,v=e.imgLoading,g=void 0===v?a.K.LAZY:v,k=(0,S.Il)(r),f=t.previewImage,w=t.title,E=(null==f?void 0:f.id)||"1*yuVzMhCJyDENbyhwAsrkwA.png",P=(0,x.W6)({miroId:E,width:m,strategy:x._S.Resample,freezeGifs:p,webp:!!c}),C=(null==f?void 0:f.alt)||w||"",b=function(e,t,n){return function(i){var a,r,o=null!==(a=N(t))&&void 0!==a?a:50,l=null!==(r=N(n))&&void 0!==r?r:50;return{width:"100%",borderRadius:"2px",aspectRatio:"string"==typeof e?h.FA[e]:{xs:h.FA[e.xs],sm:h.FA[e.sm],md:h.FA[e.md],lg:h.FA[e.lg],xl:h.FA[e.xl]},objectFit:"cover",objectPosition:"".concat(o,"% ").concat(l,"%"),backgroundColor:i.colorTokens.background.neutral.tertiary.base}}}(l,null==f?void 0:f.focusPercentX,null==f?void 0:f.focusPercentY);return i.createElement(s.r,{href:n,"aria-label":C||"Post Preview Image"},Object.keys(k).map((function(e){var t=k[e];return t.length?i.createElement(d.x,{display:{xs:F(t,"xs"),sm:F(t,"sm"),md:F(t,"md"),lg:F(t,"lg"),xl:F(t,"xl")},key:"grid-image-".concat(e)},i.createElement(a.E,{src:P,alt:C,rules:b,loading:g})):null})))}var P=n(9842),C=n(99053),b=n(63254),y="image",I="content";function T(e){return new Array(12).fill(null).map(e).join(" ")}function A(e){switch(e){case"L":return'"'.concat(T((function(e,t){return t>=7?I:y})),'"');case"M":case"S":var t=T((function(){return y})),n=T((function(){return I}));return'"'.concat(t,'" "').concat(n,'"')}}var G=function(e,t){return{height:"100%",display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridTemplateRows:"auto 1fr",gap:e,gridTemplateAreas:t}},D=function(e){return{gridArea:e}},L={display:"flex",justifyContent:"center",flexDirection:"column"},M=function(e){var t,n,r=e.post,v=e.postUrl,g=e.scales,k=e.aspectRatio,f=e.showCollectionName,h=e.showAuthor,x=e.showDivider,F=e.dividerBreakpoints,N=e.dividerColor,T=e.miroImgFetchedWidth,M=e.webp,R=void 0!==M&&M,_=e.freezeGifs,j=e.prependOverflowMenuItems,Z=e.imgLoading,B=void 0===Z?a.K.LAZY:Z,O=(0,l.a)(),z=(0,p.I)(),U=r.title,W=null==r||null===(t=r.extendedPreviewContent)||void 0===t?void 0:t.subtitle,Y=(0,S.L)((n=O,{S:{subElementSpacing:"16px",titleScale:"S",titleClamp:2,gridTemplateAreas:A("S"),gap:"24px 0",hasDivider:!0,flexGrowTitle:"1"},M:{subElementSpacing:n?"16px":"20px",titleScale:"M",titleClamp:2,gridTemplateAreas:A("M"),gap:"32px 0",hasDivider:!0,flexGrowTitle:"1"},L:{subElementSpacing:"24px",titleScale:"L",titleClamp:3,gridTemplateAreas:A("L"),gap:"0 56px",hasDivider:!1,flexGrowTitle:void 0}}),g),K=o()(Y,(function(e){return e.subElementSpacing})),J=o()(Y,(function(e){return e.titleScale})),V=o()(Y,(function(e){return e.titleClamp})),X=o()(Y,(function(e){return e.gap})),H=o()(Y,(function(e){return e.gridTemplateAreas})),Q=o()(Y,(function(e){return e.hasDivider})),q=o()(Y,(function(e){return e.flexGrowTitle})),$=U&&U.length>70,ee=x&&Q,te=U||W?O?"12px":K:void 0;return i.createElement("div",{className:z(G(X,H))},i.createElement("div",{className:z(D(y))},i.createElement(E,{post:r,postUrl:v,scales:g,aspectRatio:k,miroImgFetchedWidth:T,webp:R,freezeGifs:_,imgLoading:B})),i.createElement("div",{className:z([D(I),L])},i.createElement(P.G,{post:r,marginBottom:K,showCollectionName:f,showAuthor:h}),i.createElement(d.x,{wordBreak:"break-word",paddingBottom:te,flexGrow:q},i.createElement(s.r,{href:v},U&&i.createElement("div",{title:$?U:""},i.createElement(m.Dx,{scale:J,clamp:V},U)),W&&i.createElement(d.x,{paddingTop:"8px"},i.createElement(c.QE,{scale:"S",clamp:2},W)))),O?i.createElement(u.F,{scale:"S",tag:"span"},i.createElement(C.uo,{type:C.th.GRID,post:r,postUrl:v,scales:g,prependOverflowMenuItems:j,isCondensedFooter:!0})):i.createElement(i.Fragment,null,i.createElement(s.r,{href:v},i.createElement(u.F,{scale:"S",tag:"span"},i.createElement(d.x,{display:"flex",alignItems:"center"},i.createElement(b.O,{post:r,isShorthand:!0})))),i.createElement(d.x,{paddingTop:K},i.createElement(C.uo,{type:C.th.GRID,post:r,postUrl:v,scales:g,prependOverflowMenuItems:j}))),ee&&i.createElement(w,{dividerBreakpoints:F,dividerColor:N})))},R=n(69935);function _(e){var t=e.post,n=e.index,r=e.lastIndex,o=e.presentationTrackerReferrerSource,l=e.scale,d=e.aspectRatio,s=e.showCollectionName,m=e.showAuthor,c=e.dividerBreakpoints,u=e.dividerColor,p=e.miroImgFetchedWidth,v=e.webp,g=void 0!==v&&v,k=e.freezeGifs,f=e.prependOverflowMenuItems,w=e.imgLoading,h=void 0===w?a.K.LAZY:w,x="string"==typeof l?(0,S.n0)(l):l;return i.createElement(R.V,{post:t,presentationTrackerReferrerSource:o,index:n,isFullHeight:!0},(function(e){var a=e.postUrl;return i.createElement(M,{post:t,postUrl:a,scales:x,aspectRatio:d,showDivider:n!==r,showCollectionName:s,showAuthor:m,dividerBreakpoints:c,dividerColor:u,miroImgFetchedWidth:p,webp:g,freezeGifs:k,prependOverflowMenuItems:f,imgLoading:h})}))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/6605.224598fd.chunk.js.map