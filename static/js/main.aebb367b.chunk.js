(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"SpongeBob",image:"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",occupation:"Fry Cook",location:"A Pineapple Under the Sea"},{id:2,name:"Mr. Krabs",image:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",occupation:"Restaurant Owner",location:"A Giant Anchor"},{id:3,name:"Squidward",image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",occupation:"Cashier",location:"An Easter Island Head"},{id:4,name:"Dexter",image:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",occupation:"Boy Genius",location:"A Secret Laboratory"},{id:5,name:"Courage",image:"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",occupation:"A Cowardly Dog",location:"Nowhere, Kansas"},{id:6,name:"Doug Funnie",image:"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",occupation:"Student",location:"Bluffington"},{id:7,name:"Bugs Bunny",image:"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",occupation:"Looney Toon",location:"A Rabbit Burrow"},{id:8,name:"Johnny Bravo",image:"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",occupation:"Ladies Man",location:"Aron City"},{id:9,name:"Tommy Pickles",image:"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",occupation:"Adventurer",location:"California"},{id:10,name:"Rocko",image:"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",occupation:"Cashier",location:"O-Town, California"},{id:11,name:"Captain Planet",image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",occupation:"Superhero",location:"Earth"},{id:12,name:"Ickis",image:"http://static.tvtropes.org/pmwiki/pub/images/ickis.png",occupation:"Ahhhh! A Real Monster!",location:"Under a City Dump"}]},,,,,,,,,function(e,n,t){e.exports=t(21)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),o=t(3),c=t.n(o),r=t(4),l=t(5),s=t(8),m=t(6),u=t(9),g=t(7);t(16);var p=function(e){return i.a.createElement("div",Object(g.a)({onClick:function(){return e.removeFriend(e.id)},className:"remove"},"className","card"),i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})),i.a.createElement("div",{className:"content"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null,"Name:")," ",e.name),i.a.createElement("li",null,i.a.createElement("strong",null,"Occupation:")," ",e.occupation),i.a.createElement("li",null,i.a.createElement("strong",null,"Location:")," ",e.location))))};t(17);var d=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};t(18);var v=function(e){return i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"jumbotron"},i.a.createElement("h1",{className:"title"},e.children)))};t(19);var h=function(e){return i.a.createElement("h1",{className:"score"},e.children)},f=t(1);var b=[],k=0,w=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(i)))).state={friends:f},t.removeFriend=function(e){t.setState(void f.sort(function(){return Math.random()-.5})),t.setState({friends:f});for(var n=0;n<f.length;n++)if(f[n].id===e&&b.includes(a)!==f[n].id){if(!0===b.includes(f[n].name)){console.log("seems to work "),alert("Game Over. Final Score: "+k),window.location.reload(),b=[],k=0,console.log(k)}b.push(f[n].name);for(var a=0;a<b.length;a++)b[a]===f[n].id&&b.length>=2&&console.log("here");k++,console.log(k)}},t}return Object(u.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement(d,null,i.a.createElement(v,null,"Friends List         ",i.a.createElement(h,null,[k])),this.state.friends.map(function(n){return i.a.createElement(p,{removeFriend:e.removeFriend,id:n.id,key:n.id,name:n.name,image:n.image,occupation:n.occupation,location:n.location})}))}}]),n}(a.Component);t(20);c.a.render(i.a.createElement(w,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.aebb367b.chunk.js.map