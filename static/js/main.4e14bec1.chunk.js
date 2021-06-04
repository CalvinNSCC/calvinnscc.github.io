(this["webpackJsonpnew-apotd"]=this["webpackJsonpnew-apotd"]||[]).push([[0],{24:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),c=a(19),r=a.n(c),i=(a(24),a(4)),o=a(5),d=a(3),l=a(7),h=a(6),j=(a(9),a(0)),b=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onDateChange=function(){n.props.dateChange(n.currentDate.value)},n.readMore=function(){n.state.readMore?n.setState({readMore:!1}):n.setState({readMore:!0})},n.state={readMore:!1},n.onDateChange=n.onDateChange.bind(Object(d.a)(n)),n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=new Date,a=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),s=t.getFullYear();return t=s+"-"+n+"-"+a,Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"mx-auto",id:"title",children:this.props.data.title}),Object(j.jsxs)("div",{className:"card mb-4 box-shadow",children:["image"===this.props.data.media_type?Object(j.jsx)("img",{className:"card-img-top mx-auto mt-4","data-src":"holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail",alt:"Thumbnail [100%x225]",style:{height:"auto",width:"75%",display:"block"},src:this.props.data.url,"data-holder-rendered":"true"}):Object(j.jsx)("div",{className:"embed-responsive embed-responsive-16by9",children:Object(j.jsx)("iframe",{title:this.props.data.title,width:"800",height:"480",src:this.props.data.url})}),Object(j.jsxs)("div",{className:"card-body",children:[this.state.readMore?Object(j.jsx)("p",{className:"card-text",children:this.props.data.explanation}):Object(j.jsx)("p",{className:"card-text",children:this.props.minText}),Object(j.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:this.state.readMore?Object(j.jsx)("button",{type:"button",className:"btn btn-sm btn-danger",onClick:this.readMore,children:"Less info"}):Object(j.jsx)("button",{type:"button",className:"btn btn-sm btn-success",onClick:this.readMore,children:"More info"})}),Object(j.jsx)("p",{className:"mt-2 font-weight-bold",children:"Enter the date you would like to see"}),Object(j.jsxs)("div",{className:"d-inline-flex",children:[Object(j.jsx)("input",{type:"date",className:"mr-4",max:t,min:"1995-06-16",name:"currentDate",ref:function(t){return e.currentDate=t}}),Object(j.jsx)("button",{type:"button",className:"btn btn-sm btn-info",onClick:this.onDateChange,children:"Submit"})]})]})]})]})}}]),a}(s.a.Component),u=a(10),p=a.n(u),x=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).dateChange=function(t){p.a.get("https://api.nasa.gov/planetary/apod?api_key=o2cSTyveBdiNPAf3yW9DIo4ClewjA4pxDjgLAPo6&date=".concat(t)).then((function(t){e.setState({spaceData:t.data,minText:t.data.explanation.slice(0,100)+"..."})}))},e.state={spaceData:[]},e.dateChange=e.dateChange.bind(Object(d.a)(e)),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.nasa.gov/planetary/apod?api_key=o2cSTyveBdiNPAf3yW9DIo4ClewjA4pxDjgLAPo6").then((function(t){e.setState({spaceData:t.data,minText:t.data.explanation.slice(0,100)+"..."})}))}},{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"py-4 bg-light",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(b,{data:this.state.spaceData,minText:this.state.minText,dateChange:this.dateChange})})})})}}]),a}(s.a.Component),m=function(){return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("a",{href:"/#",className:"navbar-brand d-flex align-items-center",children:[Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2","aria-hidden":"true",className:"mr-2",viewBox:"0 0 24 24",focusable:"false",children:[Object(j.jsx)("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}),Object(j.jsx)("circle",{cx:"12",cy:"13",r:"4"})]}),Object(j.jsx)("strong",{children:"Astronomy Photo of the Day!"})]})})})},g=(a(44),function(e){return Object(j.jsx)("footer",{className:"text-muted bg-dark",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("p",{className:"float-right",children:Object(j.jsx)("a",{href:"/#",children:"Back to top"})}),Object(j.jsx)("p",{children:"Album example is \xa9 Bootstrap, but please download and customize it for yourself!"}),Object(j.jsxs)("p",{children:["New to Bootstrap? ",Object(j.jsx)("a",{href:"/#",children:"Visit the homepage"})," or read our ",Object(j.jsx)("a",{href:"/#",children:"getting started guide"}),"."]})]})})});var O=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{}),Object(j.jsx)(x,{}),Object(j.jsx)(g,{})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};a(45);r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),f()},9:function(e,t,a){}},[[46,1,2]]]);
//# sourceMappingURL=main.4e14bec1.chunk.js.map