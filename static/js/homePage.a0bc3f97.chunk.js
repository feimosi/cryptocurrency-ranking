(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{110:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e){return e.global.currentFiatCurrency}},111:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"c",function(){return l}),n.d(t,"a",function(){return u});var r=n(113),a=n(114),c=n(110),i=Object(r.a)([function(e){return e.entities.cryptocurrencies.items},function(e){return e.entities.cryptocurrencies.top.items},c.a],function(e,t,n){return t.map(function(t){return e[t]}).filter(function(e){return Boolean(e.quote[n])})}),l=function(e){return Object(r.a)([e,i],function(e,t){return a.values(t).find(function(t){return t.id===e})})},u=Object(r.a)([i],function(e){return a.values(e).find(function(e){return"BTC"===e.symbol})})},116:function(e,t,n){},119:function(e,t,n){},121:function(e,t,n){},124:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t),n.d(t,"CryptocurrencyDetailsPage",function(){return E});var r=n(13),a=n(9),c=n(16),i=n(11),l=n(10),u=n(12),o=n(1),s=n(17),m=n(38),p=n(127),f=n(28),h=n(37),d=n(44),y=n(18),b=n(111),g=n(110),E=(n(121),function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).refreshData=function(){var e=n.props,t=e.match,r=e.currentFiatCurrency,a=Number.parseInt(t.params.currencyId,10);n.props.actions.fetchCryptocurrency(a,r)},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.cryptocurrency||this.refreshData()}},{key:"render",value:function(){var e=this.props,t=e.cryptocurrency,n=e.bitcoin,r=e.currentFiatCurrency;if(!t)return o.createElement(d.a,null);var a=t.quote[r],c=+a.price.toFixed(2);return o.createElement("div",{className:"CryptocurrencyDetailsPage"},o.createElement("h1",null,o.createElement("span",{className:"CryptocurrencyDetailsPage__name"},t.name),"\xa0",o.createElement("span",{className:"CryptocurrencyDetailsPage__symbol"},"(",t.symbol,")")),o.createElement("div",{className:"CryptocurrencyDetailsPage__stats"},o.createElement("div",null,o.createElement("strong",null,"Rank: "),t.cmcRank),o.createElement("div",null,o.createElement("strong",null,"Price: "),c.toLocaleString()," ",r),o.createElement("div",null,o.createElement("strong",null,"Volume (24h): "),a.volume24h.toLocaleString()," ",r),o.createElement("div",null,o.createElement("strong",null,"Market Cap: "),a.marketCap.toLocaleString()," ",r),n&&o.createElement("div",null,o.createElement("strong",null,"Price in Bitcoin: "),t.quote[r].price/n.quote[r].price," BTC"),o.createElement("div",null,o.createElement("strong",null,"1h Change: "),a.percentChange1h.toFixed(2),"%"),o.createElement("div",null,o.createElement("strong",null,"24h Change: "),a.percentChange24h.toFixed(2),"%"),o.createElement("div",null,o.createElement("strong",null,"7d Change: "),a.percentChange7d.toFixed(2),"%"),o.createElement("div",null,o.createElement("strong",null,"Available supply: "),t.circulatingSupply.toLocaleString()," ",t.symbol),o.createElement("div",null,o.createElement("strong",null,"Total Supply: "),t.totalSupply.toLocaleString()," ",t.symbol)),o.createElement("div",{className:"CryptocurrencyDetailsPage__buttonsBar"},o.createElement(h.a,{theme:"primary",onClick:this.refreshData},"Refresh"),o.createElement(h.a,{to:"/",theme:"secondary"},"Go back")))}}]),t}(f.a));t.default=Object(p.a)(Object(m.b)(function(){var e=Object(b.c)(function(e,t){return Number.parseInt(t.match.params.currencyId,10)});return function(t,n){return{cryptocurrency:e(t,n),bitcoin:Object(b.a)(t),currentFiatCurrency:Object(g.a)(t)}}},function(e){return{actions:Object(r.a)({},Object(s.b)(y,e))}})(E))},129:function(e,t,n){"use strict";n.r(t),n.d(t,"SettingsPage",function(){return E});var r=n(13),a=n(9),c=n(16),i=n(11),l=n(10),u=n(12),o=n(1),s=n(17),m=n(38),p=n(123),f=n(28),h=n(37),d=n(43),y=n(46),b=n(110),g=n(26),E=(n(124),function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).handleCurrencyChange=function(e){n.props.actions.changeFiatCurrency(e)},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.currentFiatCurrency;return o.createElement("div",{className:"SettingsPage"},o.createElement("h1",null,"Settings"),o.createElement("h2",null,"Fiat currency"),o.createElement(p.RadioGroup,{className:"SettingsPage__fiatCurrencyFieldset",name:"fiatCurrency",selectedValue:e,onChange:this.handleCurrencyChange},o.createElement("div",{className:"SettingsPage__fiatCurrencyOption"},o.createElement(p.Radio,{value:g.a.USD,id:g.a.USD}),o.createElement("label",{htmlFor:g.a.USD},o.createElement(d.a,{src:"/img/flags/united-states.svg"}),"USD")),o.createElement("div",{className:"SettingsPage__fiatCurrencyOption"},o.createElement(p.Radio,{value:g.a.EUR,id:g.a.EUR}),o.createElement("label",{htmlFor:g.a.EUR},o.createElement(d.a,{src:"/img/flags/european-union.svg"}),"EUR")),o.createElement("div",{className:"SettingsPage__fiatCurrencyOption"},o.createElement(p.Radio,{value:g.a.CNY,id:g.a.CNY}),o.createElement("label",{htmlFor:g.a.CNY},o.createElement(d.a,{src:"/img/flags/china.svg"}),"CNY"))),o.createElement("div",{className:"SettingsPage__bottomBar"},o.createElement(h.a,{to:"/",theme:"secondary"},"Go back")))}}]),t}(f.a));E.defaultProps={};t.default=Object(m.b)(function(e){return{currentFiatCurrency:Object(b.a)(e)}},function(e){return{actions:Object(r.a)({},Object(s.b)(y,e))}})(E)},131:function(e,t,n){"use strict";n.r(t);var r=n(13),a=n(9),c=n(16),i=n(11),l=n(10),u=n(12),o=n(1),s=n(17),m=n(38),p=n(28),f=n(37),h=n(42),d=n(18),y=n(111),b=n(110),g=n(20),E=n(127),C=(n(116),function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).handleClick=function(){var e=n.props.currency;n.props.history.push("/currency/".concat(e.id,"/").concat(e.name))},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.index,n=e.currency,r=e.fiatCurrency,a=n.quote[r].price.toFixed(4).toString().replace(/0+$/,""),c=n.quote[r].percentChange24h.toFixed(2);return o.createElement("tr",{className:"CurrenciesTableRow",onClick:this.handleClick,tabIndex:0,role:"button"},o.createElement("td",{className:"CurrenciesTableRow__index"},t+1),o.createElement("td",{className:"CurrenciesTableRow__symbolCell"},o.createElement("div",{className:"CurrenciesTableRow__symbol"},n.symbol)),o.createElement("td",null,o.createElement("div",{className:"CurrenciesTableRow__price"},a," ",r)),o.createElement("td",{className:"CurrenciesTableRow__change24h"},c,"%"))}}]),t}(g.a)),v=Object(E.a)(C),O=(n(119),function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.currencies,n=e.fiatCurrency;return o.createElement("table",{className:"CurrenciesTable"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"#"),o.createElement("th",null,"Symbol"),o.createElement("th",{className:"CurrenciesTable__priceHeader"},"Price"),o.createElement("th",{className:"CurrenciesTable__change24hHeader"},"Change (24h)"))),o.createElement("tbody",null,t.sort(function(e,t){return e.cmcRank>t.cmcRank?1:-1}).map(function(e,t){return o.createElement(v,{key:e.id,index:t,currency:e,fiatCurrency:n})})))}}]),t}(g.a));O.defaultProps={};n(64);n.d(t,"HomePage",function(){return j});var j=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).refreshData=function(){var e=n.props,t=e.actions,r=e.currentFiatCurrency;t.fetchTopCryptocurrencies(r)},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.refreshData()}},{key:"render",value:function(){var e=this.props,t=e.cryptocurrencies,n=e.currentFiatCurrency,r=e.isLoading,a=e.isRefreshing;return o.createElement("div",{className:"HomePage"},o.createElement("h1",null,"Top 100 Cryptocurrencies"),o.createElement("div",{className:"HomePage__refreshButton"},o.createElement(f.a,{theme:"primary",onClick:this.refreshData,disabled:a,loading:a},"Refresh")),o.createElement("div",{className:"HomePage__mainContent"},o.createElement(O,{currencies:t,fiatCurrency:n}),r&&o.createElement(h.a,{color:"#1200FF",size:20})))}}]),t}(p.a);t.default=Object(m.b)(function(e){return{cryptocurrencies:Object(y.b)(e),currentFiatCurrency:Object(b.a)(e),isLoading:e.entities.cryptocurrencies.top.isLoading,isRefreshing:e.entities.cryptocurrencies.top.isRefreshing}},function(e){return{actions:Object(r.a)({},Object(s.b)(d,e))}})(j)}}]);
//# sourceMappingURL=homePage.a0bc3f97.chunk.js.map