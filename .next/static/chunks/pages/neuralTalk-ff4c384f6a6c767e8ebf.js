(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[768],{2590:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var n=a(5893),s=a(9008);a(5675),a(6576);function r(){return(0,n.jsxs)(s.default,{children:[(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,n.jsx)("meta",{name:"description",content:"Chaotic Barcelona, especialista en programaci\xf3, disseny web i WEB3! \ud83d\udd31CHAOTIC BCN\ud83d\udd31 DE PABLO VALLEJO"}),(0,n.jsx)("meta",{name:"keywords",content:"crypto, chaos, chaotic, Chaos Barcelona, chaoticbcn, Barcelona, Pablo Vallejo"}),(0,n.jsx)("meta",{name:"author",content:"Pablo Vallejo"}),(0,n.jsx)("title",{children:"  Pablo's CV  "}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",crossOrigin:"anonymous"}),(0,n.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:200",rel:"stylesheet",type:"text/css"})]})}},9059:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var n=a(5893),s=a(1664);function r(){return(0,n.jsx)("div",{className:"col-lg-10 mx-auto text-center",children:(0,n.jsx)(s.default,{href:"#",children:(0,n.jsxs)("div",{className:"loader",children:[(0,n.jsx)("div",{className:"inner one"}),(0,n.jsx)("div",{className:"inner two"}),(0,n.jsx)("div",{className:"inner three"})]})})})}},2223:function(e,t,a){"use strict";var n=a(4890),s={marks:[],accounts:[],faceUrl:["https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"],neuralUrl:["https://images.pexels.com/photos/8276230/pexels-photo-8276230.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"],faceDesc:[{faces:[{age_range:[0,100],cultural_appearance:"Cool"}]}],neuralDesc:[{output:"Business boy."}]},r=(0,n.MT)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"newMark":return s.marks.push(t.payload),s;case"accounts":return s.accounts.push(t.payload),s;case"faceUrl":return console.log("STORE  "+t.payload),s.faceUrl.push(t.payload),s;case"faceDesc":return s.faceDesc.push(t.payload),s;case"neuralUrl":return s.neuralUrl.push(t.payload),s;case"neuralDesc":return s.neuralDesc.push(t.payload),s;default:return e}}));t.Z=r},4887:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var n=a(809),s=a.n(n),r=a(2447),c=a(5893),o=(a(6501),a(7294),a(5675)),l=a(1664),i=a(9948),u=a(2223),d={borderRadius:"10px"};function p(e){var t=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""!=(t=document.getElementById("inputUrl")).value?u.Z.dispatch({type:"neuralUrl",payload:t.value}):t.placeholder="Incorrect Url";case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.jsxs)("form",{action:"/neuralTalk",method:"GET",children:[(0,c.jsx)("input",{type:"text",className:"text-center",onChange:t,placeholder:e.error?"AI don't like that image":"Image URL",id:"inputUrl",style:d}),(0,c.jsx)("a",{type:"submit",children:(0,c.jsx)("button",{className:"btn magicButton",children:"  GENERATE   "})})]})}a(9059);var h=a(6485),m={padding:"7.5%",backgroundColor:"#333",minHeight:"100vh"},f={padding:"5%"};function g(e){var t=u.Z.getState();console.log(apiKey);var a=new h.Configuration({apiKey:apiKey});console.log(a);var n=new h.OpenAIApi(a);return function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.createCompletion({model:"text-ada-001",prompt:"Como te llamas guap@?",temperature:0,max_tokens:18});case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),(0,c.jsx)("div",{className:"col-lg-12 mx-auto text-center",style:m,children:(0,c.jsxs)("div",{className:"col-lg-8 cardStyle2 mx-auto",style:f,children:[(0,c.jsx)("h1",{className:"display-4",children:" Neural Talk 2 AI "}),(0,c.jsx)("h1",{className:"lead",children:" Choose a random image and AI will tell you what is going on!  "}),(0,c.jsx)("p",{children:"  For security reasons we only allow Pexels.com images  "}),(0,c.jsx)(l.default,{href:"https://www.pexels.com/",children:(0,c.jsxs)("button",{className:"btn magicButton mb-3",children:["Choose a cool image",(0,c.jsx)(o.default,{src:i.Z,className:"redondeado",width:"35px",height:"35px"})]})}),(0,c.jsx)("h4",{children:(0,c.jsx)(p,{})}),(0,c.jsx)(o.default,{src:t.neuralUrl[t.neuralUrl.length-1],className:"redondeado",width:"250px",height:"250px"}),(0,c.jsx)("h1",{className:"display-6",style:{textAlign:"left"},children:"  Output  "}),(0,c.jsxs)("h1",{className:"lead",style:{textAlign:"left"},children:[" ",e.neural.output," "]}),(0,c.jsx)(l.default,{href:"/apps",children:(0,c.jsx)("button",{className:"btn cuadrado magicButton mb-3 mx-auto",children:" RETURN "})})]})})}var x=a(2590);function A(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(x.Z,{}),(0,c.jsx)(g,{neural:e})]})}A.getInitialProps=function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var j=A},8387:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/neuralTalk",function(){return a(4887)}])},6576:function(e,t){"use strict";t.Z={src:"/_next/static/image/public/chaoticLogo.029e04df81297dd00e40c49d8309372a.png",height:800,width:800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/ElEQVR42mOAgXab+bGNaiu3Niiv3NFitCCLARnUiU7pbdJZ+n9uwer/80tX/2+zXvS/jmnSErBkFcMkqw67mf/Xdiz/t7pj0e/VnUv+rOlY8rvDZdb/WobJIQzlDNOydyxa9n/f3qm/N09f839O+pT/5xtjfu/umvS/Sn9uB0MyQ7/xpulLfxzZu/jfqt5Ff7tju/4e76z4s6Ci53+N2gIfhhbTJU4txkv+Twlc8D+DofZ/jlzd/0lRy/632a/4UcnQLcfQajbHuMVk5oF6mSnb2kxmPmk1nPG4QXLKuRbj2RdazWeqM8BAm+UMs2aDafXN+tMa2syn28HEAS68dkmzJ0nyAAAAAElFTkSuQmCC"}},9948:function(e,t){"use strict";t.Z={src:"/_next/static/image/public/pexelsLogo.69a075a0e93fd5bc17cf1e114722cbad.png",height:800,width:800,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA30lEQVR42mNgmd9wlW9B43+GuTV/GWaW/mOYWfaPYX7DX0GgGDNQjgEsOa/un+/K/v9V25f8r9i++L8wWEPtPyEQrbSw5S/D9OL/h29d+nfy3vV/+66f+3f49qV/Egub/oNMYlBY2PyPYUbJ/wM3L/yLXzftH0OTx7+zD27+K9m68D/IOqiCUrCCoFUT/+28evrf/hsX/gGt+M+7oPEf3IqDNy/+u/Do9r8bzx/9Y5hT/Y9hXv1/gQWNf1EcWbNj6f/wNZNBdv8H+uIfK5BmQPHmjFKwbiD/L0iSfUHjVQCHO5wsJwgZVwAAAABJRU5ErkJggg=="}}},function(e){e.O(0,[247,885,890,485,774,888,179],(function(){return t=8387,e(e.s=t);var t}));var t=e.O();_N_E=t}]);