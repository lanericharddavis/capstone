(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66dde428"],{"1a3e":function(t,e,c){"use strict";c.r(e);var a=c("7a23");const s={key:0,class:"container-fluid background-img"},i={class:"row justify-content-around"},d={key:0,class:"col-12 col-md-3"},b={class:"card bg-secondary shadow mt-2 mt-md-5"},n={class:"card-body"},l={class:"card-title d-flex justify-content-between"},r={class:"d-inline"},o={class:"d-inline"},j=Object(a["h"])("i",{class:"fas fa-star star"},null,-1),O={key:0},u=Object(a["h"])("button",{class:"btn btn-success my-1"}," Chat ",-1),v={class:" d-none d-md-block"},h=Object(a["h"])("div",{class:"card shadow mb-2"},[Object(a["h"])("div",{class:"card-title m-0 dark-green-background d-flex justify-content-between"},[Object(a["h"])("span",{class:"pl-2 py-2 text-white"}," ABOUT ME "),Object(a["h"])("button",{type:"button",class:"btn btn-none text-primary",title:"edit bio",aria:"edit bio","data-toggle":"modal","data-target":"#editBioModal"},[Object(a["h"])("i",{class:"fas fa-edit"})])]),Object(a["h"])("div",{class:"pl-2 py-2"}," Bio ")],-1),m={class:"card shadow mb-2 "},p=Object(a["h"])("div",{class:"card-title dark-green-background m-0"},[Object(a["h"])("span",{class:"pl-2 py-2 text-white"}," REvIEW ")],-1),g={class:"row justify-content-center"},w={class:"col-12 ml-4 pr-1"},y={class:"col-11 col-md-8 mt-2 mt-md-5"},f={class:"col-12 d-block d-md-none"},k={class:" "},A=Object(a["h"])("div",{class:"card mb-2"},[Object(a["h"])("div",{class:"card-title m-0 dark-green-background "},[Object(a["h"])("span",{class:"pl-2 py-2 text-white"}," ABOUT ME ")]),Object(a["h"])("div",{class:"pl-2 py-2"}," Bio ")],-1),x={class:"card mb-2"},E=Object(a["h"])("div",{class:"card-title m-0 dark-green-background "},[Object(a["h"])("span",{class:"pl-2 py-2 text-white"}," REvIEW ")],-1),B={class:"pl-2 py-2"};function I(t,e,c,I,R,U){const M=Object(a["y"])("router-link"),J=Object(a["y"])("Review"),T=Object(a["y"])("Item");return I.state.loading?Object(a["e"])("",!0):(Object(a["r"])(),Object(a["d"])("div",s,[Object(a["h"])("div",i,[I.state.activeAccount?(Object(a["r"])(),Object(a["d"])("div",d,[Object(a["h"])("div",b,[Object(a["h"])("div",n,[Object(a["h"])("h5",l,[Object(a["h"])("div",r,Object(a["A"])(I.state.activeAccount.name),1),Object(a["h"])("div",o,[j,Object(a["g"])(" "+Object(a["A"])(I.getUserRating()),1)])]),Object(a["h"])("div",null,[Object(a["h"])("img",{class:"img-fluid rounded mb-2",src:I.state.activeAccount.picture,alt:"profile picture"},null,8,["src"])]),I.state.activeAccount.id!==I.state.account.id?(Object(a["r"])(),Object(a["d"])("div",O,[Object(a["h"])(M,{to:{name:"Messages",params:{id:I.state.activeAccount.id}}},{default:Object(a["F"])(()=>[u]),_:1},8,["to"])])):Object(a["e"])("",!0),Object(a["h"])("div",v,[h,Object(a["h"])("div",m,[p,Object(a["h"])("div",g,[Object(a["h"])("span",w,[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(I.state.reviews,t=>(Object(a["r"])(),Object(a["d"])(J,{key:t.id,review:t},null,8,["review"]))),128))])])])])])])])):Object(a["e"])("",!0),Object(a["h"])("div",y,[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(I.state.items,t=>(Object(a["r"])(),Object(a["d"])(T,{key:t.id,item:t},null,8,["item"]))),128))]),Object(a["h"])("div",f,[Object(a["h"])("div",k,[A,Object(a["h"])("div",x,[E,Object(a["h"])("div",B,[Object(a["h"])("span",null,[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["x"])(I.state.reviews,t=>(Object(a["r"])(),Object(a["d"])(J,{key:t.id,review:t},null,8,["review"]))),128))])])])])])])]))}var R=c("83fc"),U=c("6c02"),M=c("2049"),J=c("b18f"),T=c("473f"),W={name:"Home",setup(){const t=Object(U["c"])(),e=Object(a["v"])({items:Object(a["b"])(()=>R["a"].items),activeAccount:Object(a["b"])(()=>R["a"].activeAccount),reviews:Object(a["b"])(()=>R["a"].reviews.filter(t=>t.creatorId!==R["a"].account.id)),account:Object(a["b"])(()=>R["a"].account),user:Object(a["b"])(()=>R["a"].user),loading:Object(a["b"])(()=>R["a"].loading)});return Object(a["E"])(()=>e.loading,()=>{T["a"].getActive(t.params.id)}),Object(a["p"])(async()=>{try{e.loading||await T["a"].getActive(t.params.id),await J["a"].getReviewsByUserId(t.params.id),await M["a"].getItemsByUserId(t.params.id)}catch(c){console.error(c)}}),{state:e,route:t,getUserRating(){const t=e.reviews.length;let c=0;e.reviews.forEach(t=>{c+=t.rating});const a=c/t;return Math.round(a)}}}};c("dd66");W.render=I;e["default"]=W},dd66:function(t,e,c){"use strict";c("e4b8")},e4b8:function(t,e,c){}}]);