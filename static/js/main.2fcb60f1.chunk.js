(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={title:"statistic_title__3gDK5"}},function(t,e,n){t.exports={button:"panel_button__10KX-"}},,,,,,function(t,e,n){t.exports={container:"section_container__3keWm",title:"section_title__SOdyI"}},,function(t,e,n){t.exports={title:"notification_title__3-Msf"}},,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),c=n(10),i=n.n(c),r=(n(16),n(4)),s=n(5),l=n(7),u=n(6),d=n(9),b=n.n(d),j=n(0),h=function(t){var e=t.title,n=t.children;return Object(j.jsxs)("div",{className:b.a.container,children:[Object(j.jsx)("h3",{className:b.a.title,children:e}),n]})},f=n(3),O=n.n(f),p=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.onGood,n=t.onNeutral,a=t.onBad;return Object(j.jsxs)("div",{className:O.a.container,children:[Object(j.jsx)("button",{className:O.a.button,type:"button",onClick:e,children:"Good"}),Object(j.jsx)("button",{className:O.a.button,type:"button",onClick:n,children:"Neutral"}),Object(j.jsx)("button",{className:O.a.button,type:"button",onClick:a,children:"Bad"})]})}}]),n}(a.Component),v=n(2),x=n.n(v),g=function(t){var e=t.Good,n=t.Neutral,a=t.Bad,o=t.Total,c=t.Positive;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{className:x.a.title,children:["Good: ",e]}),Object(j.jsxs)("p",{className:x.a.title,children:["Neutral: ",n]}),Object(j.jsxs)("p",{className:x.a.title,children:["Bad: ",a]}),Object(j.jsxs)("p",{className:x.a.title,children:["Total: ",o]}),Object(j.jsxs)("p",{className:x.a.title,children:["Positive feedback: ",c,"%"]})]})},N=n(11),k=n.n(N),m=function(t){var e=t.message;return Object(j.jsx)("p",{className:k.a.title,children:e})},P=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={good:0,neutral:0,bad:0},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){var e=t.state.good;return Math.round(e/t.countTotalFeedback()*100)},t.totalAndProcenteg=function(){t.setState((function(e){return{total:t.countTotalFeedback(),procenteg:t.countPositiveFeedbackPercentage()}}))},t.onButtonGood=function(){t.setState((function(t){return{good:t.good+1}})),t.totalAndProcenteg()},t.onButtonNeutral=function(){t.setState((function(t){return{neutral:t.neutral+1}})),t.totalAndProcenteg()},t.onButtonBad=function(){t.setState((function(t){return{bad:t.bad+1}})),t.totalAndProcenteg()},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,a=t.bad;return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{title:"Please leave feedback",children:Object(j.jsx)(p,{onGood:this.onButtonGood,onNeutral:this.onButtonNeutral,onBad:this.onButtonBad})}),Object(j.jsx)(h,{title:"Statistics",children:this.countTotalFeedback()>0?Object(j.jsx)(g,{Good:e,Neutral:n,Bad:a,Total:this.countTotalFeedback(),Positive:this.countPositiveFeedbackPercentage()}):Object(j.jsx)(m,{message:"No feedback given"})})]})}}]),n}(o.a.Component);P.defaultProps={initProcent:0};var B=P;var _=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(B,{})})};i.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.2fcb60f1.chunk.js.map