(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5440:function(e,t,n){e.exports=n(5598)},5598:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),i=n.n(o),l=n(5605),c=n(153),s=n(48),u=n(24),h=n(25),m=n(28),f=n(26),d=n(29),p=n(5603),b=n(81),g=n(5),E=n(38),v=n.n(E),k=n(84),w=n(32),S=n(15),y=n(44),O=n.n(y),j=function(e){var t=e.text,n=e.variant,a=e.color,o=e.className,i=e.align,l=e.noWrap;return r.a.createElement(O.a,{align:i,variant:n,color:a,className:o,noWrap:l},t)};j.defaultProps={color:"default",className:"",align:"inherit",noWrap:!1};var x=j,C=n(69),T=n.n(C),N=n(66),L=n.n(N),R=n(67),F=n.n(R),I=n(68),P=n.n(I),B=Object(g.withStyles)(function(e){return{margin:{margin:2*e.spacing.unit}}},{withTheme:!0})(function(e){var t=e.item,n=t.id,a=t.count,o=t.text,i=t.icon,l=e.classes.margin,c=e.onShelfFilter;return r.a.createElement(L.a,{button:!0,onClick:function(){c(n)}},r.a.createElement(F.a,null,r.a.createElement(S.b,{className:l,badgeContent:a,color:"secondary"},i)),r.a.createElement(P.a,{primary:o}))}),q=function(e){var t=e.list,n=e.onShelfFilter;return r.a.createElement(T.a,null,t.map(function(e){var t=e.id;return r.a.createElement(B,{key:t,item:e,onShelfFilter:n})}))},D=function(e){var t=e.list,n=e.onShelfFilter,o=e.classes,i=o.toolbar,l=o.drawer,c=o.drawerPaper,s=e.container,u=e.drawerOpen,h=e.onDrawerToggle,m=r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:i},r.a.createElement(x,{variant:"h5",align:"center",text:"My Reads"}),r.a.createElement(x,{variant:"h6",align:"center",color:"textSecondary",text:"by: Samuel Tonini"})),r.a.createElement(S.d,null),r.a.createElement(q,{list:t,onShelfFilter:n}));return r.a.createElement("nav",{className:l},r.a.createElement(S.f,{smUp:!0,implementation:"css"},r.a.createElement(S.e,{container:s,variant:"temporary",anchor:"left",open:u,onClose:h,classes:{paper:c},ModalProps:{keepMounted:!0}},m)),r.a.createElement(S.f,{xsDown:!0,implementation:"css"},r.a.createElement(S.e,{classes:{paper:c},variant:"permanent",open:!0},m)))};D.defaultProps={container:null};var A=Object(g.withStyles)(function(e){return{drawer:Object(w.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),toolbar:e.mixins.toolbar,drawerPaper:{width:240}}},{withTheme:!0})(D),M=n(70),_=n.n(M),W=n(37),G=n.n(W),U=n(5607),$=function(e){var t=e.text,n=e.icon,a=e.onClick,o=e.color,i=e.className;return r.a.createElement(S.g,{"aria-label":t,onClick:a,color:o,className:i},n)};$.defaultProps={text:"",className:"",color:"default"};var J=$,Q=Object(U.a)(Object(g.withStyles)(function(e){return{appBar:Object(w.a)({marginLeft:240},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)")}),menuButton:Object(w.a)({marginRight:20},e.breakpoints.up("sm"),{display:"none"}),title:{flex:1}}},{withTheme:!0})(function(e){var t=e.classes,n=t.appBar,a=t.menuButton,o=t.title,i=e.onDrawerToggle,l=e.history;return r.a.createElement(S.a,{position:"fixed",className:n},r.a.createElement(S.i,null,r.a.createElement(J,{color:"inherit",text:"Exibir Menu",onClick:i,className:a,icon:r.a.createElement(_.a,null)}),r.a.createElement(x,{variant:"h6",color:"inherit",noWrap:!0,className:o,text:"Livros"}),r.a.createElement(J,{color:"inherit",onClick:function(){l.push("/search")},icon:r.a.createElement(G.a,null)})))})),Y=n(30),z=n.n(Y),H=n(46),V=n.n(H),X=n(79),K=n.n(X),Z=n(75),ee=n.n(Z),te=n(76),ne=n.n(te),ae=n(71),re=n.n(ae),oe=n(72),ie=n.n(oe),le=n(73),ce=n.n(le),se=n(74),ue=n.n(se),he=Object(g.withStyles)(function(e){return{controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing.unit,paddingBottom:e.spacing.unit}}})(function(e){var t=e.book,n=e.onShelfChange,a=e.classes.controls,o=t.shelf;return r.a.createElement("div",{className:a},r.a.createElement(J,{text:"Quero ler",icon:"wantToRead"===o?r.a.createElement(re.a,null):r.a.createElement(ie.a,null),onClick:function(){n(t,"wantToRead")}}),r.a.createElement(J,{text:"Lendo",icon:"currentlyReading"===o?r.a.createElement(ce.a,null):r.a.createElement(ue.a,null),onClick:function(){n(t,"currentlyReading")}}),r.a.createElement(J,{text:"Lido",icon:"read"===o?r.a.createElement(ee.a,null):r.a.createElement(ne.a,null),onClick:function(){n(t,"read")}}))}),me=n(77),fe=n.n(me),de=function(e){var t=e.title,n=e.authors,a=e.classes,o=a.content,i=a.cardText;return r.a.createElement(fe.a,{className:o},r.a.createElement(x,{variant:"h5",className:i,text:t}),r.a.createElement(x,{variant:"subtitle1",color:"textSecondary",className:i,text:(n||[]).join(", ")}))};de.defaultProps={authors:[],title:""};var pe=Object(g.withStyles)(function(){return{content:{flex:"1 0 auto"},cardText:{maxWidth:300}}})(de),be=n(78),ge=n.n(be),Ee=function(e){var t=e.image,n=e.title,a=e.classes.media;return r.a.createElement(ge.a,{className:a,image:t,title:n})};Ee.defaultProps={image:"",title:""};var ve=Object(g.withStyles)(function(){return{media:{width:151}}})(Ee),ke=Object(g.withStyles)(function(){return{card:{display:"flex",height:200},details:{display:"flex",flexDirection:"column"},cardText:{maxWidth:300}}})(function(e){var t=e.classes,n=t.card,a=t.details,o=t.cardText,i=e.book,l=e.onShelfChange,c=i.title,s=i.authors,u=i.imageLinks.smallThumbnail;return r.a.createElement(K.a,{className:n},r.a.createElement("div",{className:a},r.a.createElement(pe,{title:c,authors:s,textClassName:o}),r.a.createElement(he,{book:i,onShelfChange:l})),r.a.createElement(ve,{image:u,title:c}))}),we=Object(g.withStyles)(function(e){return{root:{flexGrow:1},paper:{color:e.palette.text.secondary}}})(function(e){var t=e.classes,n=t.root,a=t.paper,o=e.books,i=e.onShelfChange;return r.a.createElement("div",{className:n},r.a.createElement(V.a,{container:!0,spacing:24},o.map(function(e){var t=e.id;return r.a.createElement(V.a,{item:!0,md:"auto",key:t},r.a.createElement(z.a,{className:a},r.a.createElement(ke,{book:e,onShelfChange:i})))})))}),Se=Object(g.withStyles)(function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,padding:3*e.spacing.unit},chip:{margin:e.spacing.unit}}},{withTheme:!0})(function(e){var t=e.classes,n=t.content,a=t.toolbar,o=t.chip,i=e.filter,l=e.onShelfChange,c=e.onShelfFilter,s=e.books;return r.a.createElement("main",{className:n},r.a.createElement("div",{className:a}),i&&r.a.createElement(S.c,{color:"primary",label:"Mostrar todos os livros",onClick:function(){return c("")},className:o}),r.a.createElement(we,{books:i?s.filter(function(e){return e.shelf===i}):s,onShelfChange:l}))}),ye=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={drawerOpen:!1},n.handleDrawerToggle=function(){n.setState(function(e){return{drawerOpen:!e.drawerOpen}})},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes.root,n=e.container,a=e.books,o=e.onShelfChange,i=e.onShelfFilter,l=e.filter,c=this.state.drawerOpen,s=[{text:"Quero Ler",icon:r.a.createElement(k.b,null),id:"wantToRead",count:0},{text:"Lendo",icon:r.a.createElement(k.c,null),id:"currentlyReading",count:0},{text:"Lido",icon:r.a.createElement(k.a,null),id:"read",count:0}];return s=s.map(function(e){var t=e.id,n=a.filter(function(e){return e.shelf===t}).length;return Object(b.a)({},e,{count:n})}),r.a.createElement("div",{className:t},r.a.createElement(v.a,null),r.a.createElement(Q,{onDrawerToggle:this.handleDrawerToggle}),r.a.createElement(A,{list:s,onShelfFilter:i,container:n,drawerOpen:c,onDrawerToggle:this.handleDrawerToggle}),r.a.createElement(Se,{books:a,onShelfChange:o,onShelfFilter:i,filter:l}))}}]),t}(a.Component);ye.defaultProps={container:null};var Oe=Object(g.withStyles)(function(){return{root:{display:"flex"}}},{withTheme:!0})(ye),je=n(49),xe=n(5604),Ce=n(5606),Te=n(149),Ne=n(50),Le=n.n(Ne);function Re(){var e=Object(je.a)(['\n  mutation update {\n    update(input: $input, id: $id) @rest(type: "Shelfs", path: "/books/:id", method: "PUT") {\n      currentlyReading\n      wantToRead\n      read\n    }\n  }\n']);return Re=function(){return e},e}function Fe(){var e=Object(je.a)(['\n  mutation search {\n    search(input: $input) @rest(type: "Books", path: "/search", method: "POST") {\n      books @type(name: "Book") {\n        title\n        authors\n        imageLinks @type(name: "ImageLinks") {\n          smallThumbnail\n        }\n        id\n        shelf\n      }\n    }\n  }\n']);return Fe=function(){return e},e}function Ie(){var e=Object(je.a)(['\n  query get {\n    book(id: $id) @rest(type: "Books", path: "/books/:id") {\n      book @type(name: "Book") {\n        title\n        authors\n        imageLinks @type(name: "ImageLinks") {\n          smallThumbnail\n        }\n        id\n        shelf\n      }\n    }\n  }\n']);return Ie=function(){return e},e}function Pe(){var e=Object(je.a)(['\n  query {\n    books @rest(type: "Books", path: "/books") {\n      books @type(name: "Book") {\n        title\n        authors\n        imageLinks @type(name: "ImageLinks") {\n          smallThumbnail\n        }\n        id\n        shelf\n      }\n    }\n  }\n']);return Pe=function(){return e},e}var Be=localStorage.token;Be||(Be=localStorage.token=Math.random().toString(36).substr(-8));var qe={Accept:"application/json",Authorization:Be,"Content-Type":"application/json"},De=new Te.RestLink({uri:"https://reactnd-books-api.udacity.com",headers:qe}),Ae=new xe.a({link:De,cache:new Ce.a}),Me=Le()(Pe()),_e=Le()(Ie()),We=Le()(Fe()),Ge=Le()(Re()),Ue=function(e){return Ae.query({query:_e,variables:{id:e}}).then(function(e){return e.data.book.book})},$e=function(){return Ae.query({query:Me}).then(function(e){return e.data.books.books})},Je=function(e,t){return Ae.mutate({mutation:Ge,variables:{input:{shelf:t},id:e.id}}).then(function(e){return e.data.update})},Qe=function(e){return Ae.mutate({mutation:We,variables:{input:{query:e}}}).then(function(e){return e.data.search.books})},Ye=n(80),ze=n.n(Ye),He=n(31),Ve=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={pesquisa:""},n.handleInputChange=function(e){n.setState({pesquisa:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),(0,n.props.onSearch)(n.state.pesquisa)},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=e.search,n=e.searchIcon,a=e.inputInput,o=e.inputRoot,i=this.state.pesquisa;return r.a.createElement("form",{className:t,onSubmit:this.handleSubmit},r.a.createElement("div",{className:n},r.a.createElement(G.a,null)),r.a.createElement(S.h,{placeholder:"Digite o nome do livro ou do(s) autor(es)",classes:{root:o,input:a},autoFocus:!0,value:i,onChange:this.handleInputChange}))}}]),t}(a.Component),Xe=Object(g.withStyles)(function(e){return{search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(He.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(He.fade)(e.palette.common.white,.25)},marginLeft:e.spacing.unit,width:"100%"},searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:{paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"}}},{withTheme:!0})(Ve),Ke=Object(U.a)(function(e){var t=e.history,n=e.onSearch;return r.a.createElement(S.a,{position:"fixed"},r.a.createElement(S.i,null,r.a.createElement(J,{color:"inherit",onClick:function(){t.push("/")},icon:r.a.createElement(ze.a,null)}),r.a.createElement(x,{text:"Pesquisa",variant:"h6",color:"inherit"}),r.a.createElement(Xe,{onSearch:n})))}),Ze=Object(g.withStyles)(function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,padding:3*e.spacing.unit}}},{withTheme:!0})(function(e){var t=e.classes,n=t.content,a=t.toolbar,o=e.onShelfChange,i=e.books;return r.a.createElement("main",{className:n},r.a.createElement("div",{className:a}),r.a.createElement(we,{books:i,onShelfChange:o}))}),et=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={books:[]},n.handleSearch=function(e){""===e?n.setState({books:[]}):Qe(e).then(function(e){return n.setState({books:e.error?[]:e})})},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes.root,n=e.books,a=e.onShelfChange,o=this.state.books;return o=o.map(function(e){var t=n.filter(function(t){return t.id===e.id}),a=Object(s.a)(t,1)[0];return a?Object(b.a)({},e,{shelf:a.shelf}):e}),r.a.createElement("div",{className:t},r.a.createElement(v.a,null),r.a.createElement(Ke,{onSearch:this.handleSearch}),r.a.createElement(Ze,{books:o,onShelfChange:a}))}}]),t}(a.Component),tt=Object(g.withStyles)(function(){return{root:{width:"100%"}}},{withTheme:!0})(et),nt=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={books:[],filter:""},n.componentDidMount=function(){return $e().then(function(e){return n.setState({books:e})})},n.handleShelfFilter=function(e){return n.setState({filter:e})},n.handleShelfChange=function(e,t){var a=e.shelf===t?"none":t;Je(e,a).then(function(t){var r=n.state.books;if("none"===a)n.setState({books:r.filter(function(t){return t.id!==e.id})});else{var o=t[a].filter(function(t){return t===e.id}),i=Object(s.a)(o,1)[0],l=r.filter(function(t){return t.id===e.id}),u=Object(s.a)(l,1)[0];if(i)if(u){var h=r.indexOf(u);r[h].shelf=a,n.setState({books:r})}else Ue(i).then(function(e){n.setState({books:Object(c.a)(r).concat([e])})})}})},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.books,o=t.filter;return r.a.createElement(a.Fragment,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement(Oe,{onShelfChange:e.handleShelfChange,books:n,onShelfFilter:e.handleShelfFilter,filter:o})}}),r.a.createElement(p.a,{exact:!0,path:"/search",render:function(){return r.a.createElement(tt,{onShelfChange:e.handleShelfChange,books:n})}}))}}]),t}(a.Component);window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__=!0,i.a.render(r.a.createElement(l.a,null,r.a.createElement(nt,null)),document.getElementById("root"))}},[[5440,2,1]]]);
//# sourceMappingURL=main.3893f308.chunk.js.map