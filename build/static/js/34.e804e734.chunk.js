(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[34],{1662:function(t,n,e){"use strict";e.r(n);var c=e(0),r=e(87),a=e(47),i=e(910),u=e(452),o=e(66),f=e(135),d=e(1),l=Object(c.lazy)((function(){return Promise.all([e.e(0),e.e(21)]).then(e.bind(null,1640))})),s=Object(c.lazy)((function(){return Promise.all([e.e(0),e.e(2),e.e(17)]).then(e.bind(null,1638))})),b=Object(c.lazy)((function(){return e.e(38).then(e.bind(null,1645))})),j=Object(c.lazy)((function(){return e.e(39).then(e.bind(null,1636))}));n.default=function(){var t=Object(a.c)().account,n=Object(i.g)();return Object(i.c)(),n!==o.c.INITIALIZED?Object(d.jsx)(u.a,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(r.b,{exact:!0,path:f.a,children:Object(d.jsx)(l,{})}),Object(d.jsx)(r.b,{exact:!0,path:"".concat(f.a,"/collections"),children:Object(d.jsx)(j,{})}),Object(d.jsx)(r.b,{path:"".concat(f.a,"/collections/:collectionAddress"),children:Object(d.jsx)(b,{})}),Object(d.jsx)(r.b,{path:"".concat(f.a,"/profile/:accountAddress?"),children:Object(d.jsx)(s,{})}),Object(d.jsx)(r.b,{exact:!0,path:"".concat(f.a,"/profile"),children:Object(d.jsx)(r.a,{to:"".concat(f.a,"/profile/").concat((null===t||void 0===t?void 0:t.toLowerCase())||"")})})]})}},910:function(t,n,e){"use strict";e.d(n,"c",(function(){return d})),e.d(n,"b",(function(){return l})),e.d(n,"a",(function(){return s})),e.d(n,"m",(function(){return b})),e.d(n,"f",(function(){return j})),e.d(n,"e",(function(){return O})),e.d(n,"n",(function(){return k})),e.d(n,"d",(function(){return p})),e.d(n,"g",(function(){return h})),e.d(n,"o",(function(){return v})),e.d(n,"j",(function(){return x})),e.d(n,"i",(function(){return g})),e.d(n,"k",(function(){return M})),e.d(n,"l",(function(){return m})),e.d(n,"h",(function(){return I}));var c=e(0),r=e(24),a=e(72),i=e(135),u=e(39),o=e(306),f=e(66),d=function(){var t=Object(a.b)();Object(c.useEffect)((function(){t(Object(o.e)())}),[t])},l=function(t){var n=Object(a.b)();Object(c.useEffect)((function(){n(Object(o.d)(t))}),[n,t])},s=function(t){var n=Object(a.b)(),e=Object(r.c)((function(t){return t.nftMarket.data.loadingState})),u=e.latestPancakeBunniesUpdateAt,f=e.isUpdatingPancakeBunnies,d=p(t),l=d?d.map((function(t){return t.tokenId})):[],s=k(i.b),b=s?s.map((function(t){return t.tokenId})):[],j=d.length>0?d[0]:null,O=Object(c.useMemo)((function(){return j?{name:j.name,description:j.description,collection:{name:j.collectionName},image:j.image}:null}),[j]);return{isUpdatingPancakeBunnies:f,latestPancakeBunniesUpdateAt:u,fetchMorePancakeBunnies:function(e){n(Object(o.f)({bunnyId:t,existingTokensWithBunnyId:l,allExistingPBTokenIds:b,existingMetadata:O,orderDirection:e}))}}},b=function(){return Object(r.c)((function(t){return t.nftMarket.data.loadingState}))},j=function(){return Object(r.c)((function(t){return t.nftMarket.data.collections}))},O=function(t){var n=Object(u.j)(t)||"";return j()[n]},k=function(t){var n=Object(u.j)(t)||"";return Object(r.c)((function(t){return t.nftMarket.data.nfts[n]}))},p=function(t){var n=Object(r.c)((function(t){return t.nftMarket.data.nfts[i.b]}));return n?n.filter((function(n){return n.attributes[0].value===t&&n.marketData.isTradable})):[]},h=function(){return Object(r.c)((function(t){return t.nftMarket.initializationState}))},v=function(){return Object(r.c)((function(t){return t.nftMarket.data.user}))},x=function(t){var n=Object(r.c)((function(n){return n.nftMarket.data.filters[t]}));return n?n.activeFilters:{}},g=function(t){var n=Object(r.c)((function(n){return n.nftMarket.data.filters[t]}));return n?n.loadingState:f.d.IDLE},M=function(t){var n=Object(r.c)((function(n){return n.nftMarket.data.filters[t]}));return n?n.ordering:{field:"currentAskPrice",direction:"asc"}},m=function(t){var n=Object(r.c)((function(n){return n.nftMarket.data.filters[t]}));return!n||n.showOnlyOnSale},I=function(t){return Object(r.c)((function(n){return n.nftMarket.data.activityFilters[t]}))||{typeFilters:[]}}}}]);
//# sourceMappingURL=34.e804e734.chunk.js.map