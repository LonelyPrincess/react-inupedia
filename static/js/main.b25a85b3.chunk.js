(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(57)},39:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),s=a(31),l=a(12),i=a(13),u=a(15),d=a(14),m=a(16);a(39);var h=function(){return r.a.createElement("section",{className:"logo"},r.a.createElement("span",null,"inu"),r.a.createElement("i",{className:"dog-icon"}),r.a.createElement("span",null,"pedia"))},p=a(21),v=a.n(p),f=a(33),g=function(e,t){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(e,Object(f.a)({headers:{Accept:"application/json","Content-type":"application/json"}},t)).then(function(e){if(e.ok)return e.json();throw console.error("HTTP request failed with code ".concat(e.status," - ").concat(e.statusText)),new Error(e.statusText)})}(e,t).then(b)},b=function(e){if("success"===e.status)return e.message;throw console.error("API returned error ".concat(e.code," - ").concat(e.message)),new Error(e.message)},E=function(e,t){t&&"/".concat(t);return g("data/images.json")},w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={breedList:[]},a.onBreedSelected=function(e){var t=e.target.value;a.props.onBreedSelected(t)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;g("data/breeds.json").then(function(e){return Object.keys(e).map(function(t){return{name:t,subtypes:e[t]}})}).then(function(t){return e.setState({breedList:t})}).catch(console.error)}},{key:"render",value:function(){var e=this.state.breedList,t=this.props.selectedBreed;return r.a.createElement(v.a.Group,{controlId:"breedSelector",className:"breed-selector"},r.a.createElement(v.a.Control,{as:"select",value:t,onChange:this.onBreedSelected},r.a.createElement("option",{value:"",className:"placeholder",disabled:!0},"- Choose a breed -"),e.map(function(e){return e.subtypes.length>0?e.subtypes.map(function(t){return r.a.createElement("option",{key:"".concat(e.name,"-").concat(t),value:"".concat(e.name,"-").concat(t)},t," ",e.name)}):r.a.createElement("option",{key:e.name,value:e.name},e.name)})))}}]),t}(r.a.Component),y=a(32),j=a(59),N=a(60);a(52);var O=function(e){var t=e.show,a=void 0===t||t,n=e.message;return a?r.a.createElement("div",{className:"loader-wrapper"},r.a.createElement("div",{className:"loader-container"},r.a.createElement("i",{className:"loading-icon"}),r.a.createElement("p",{className:"loading-text"},"Loading..."),n&&r.a.createElement("p",{className:"loading-details"},n))):null},k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,imageList:[],currentIndex:0},a.loadImageList=function(e){var t=e.split("-"),n=Object(y.a)(t,2),r=n[0],c=n[1];a.setState({loading:!0}),E(r,c).then(function(e){return a.setState({imageList:e})}).catch(console.error).then(a.setState({loading:!1}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.selectedBreed;e&&this.loadImageList(e)}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,n=t.imageList,c=t.currentIndex;return r.a.createElement("section",{className:"breed-gallery"},n.length>0&&r.a.createElement("div",{className:"search-results"},r.a.createElement(j.a,null,r.a.createElement(N.a,{variant:"primary",size:"sm",className:"prev",onClick:function(){return e.setState({currentIndex:c-1})},disabled:c<=0},"\ud83e\udc70 ",r.a.createElement("span",null,"Previous")),r.a.createElement(N.a,{variant:"warning",size:"sm",className:"next",onClick:function(){return e.setState({currentIndex:c+1})},disabled:c>=n.length-1},r.a.createElement("span",null,"Next")," \ud83e\udc72")),r.a.createElement("img",{src:n[c],alt:""})),0===n.length&&r.a.createElement("div",{className:"no-results"},r.a.createElement("i",{className:"icon"}),r.a.createElement("p",{className:"text"},"No images available to display")),a&&r.a.createElement(O,{show:a,message:"Wait a second, we're looking for images."}))}}]),t}(r.a.Component),B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={selectedBreed:""},a.onBreedSelected=function(e){console.debug("Selected breed changed to ".concat(e)),a.setState({selectedBreed:e})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.selectedBreed;return r.a.createElement("main",null,r.a.createElement("header",null,r.a.createElement(h,null),r.a.createElement(w,{selectedBreed:e,onBreedSelected:this.onBreedSelected})),r.a.createElement(k,{key:e,selectedBreed:e}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(53),a(54);var S=r.a.createElement(s.a,{basename:"/react-inupedia"},r.a.createElement(B,null));o.a.render(S,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.b25a85b3.chunk.js.map