(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(7),i=n.n(a),s=n(2),o=n(3),r=n(5),l=n(4),c=n(1),u=n.n(c),m=(n(12),n(13),n(0)),p=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1,position:0,disabledNext:!1,disabledPrev:!0},t.changeStepValue=function(e){t.setState({step:+e.target.value}),t.updateButtonState()},t.changeFrameSizeValue=function(e){t.setState({frameSize:+e.target.value}),t.updateButtonState()},t.changeItemWidthValue=function(e){t.setState({itemWidth:+e.target.value}),t.updateButtonState()},t.changeAnimationDurationValue=function(e){t.setState({animationDuration:+e.target.value})},t.changeInfiniteValue=function(){t.setState((function(t){return{infinite:!t.infinite}}))},t.updateButtonState=function(){var e=(t.props.images.length-t.state.frameSize)*t.state.itemWidth*-1;t.setState((function(t){return{disabledNext:!(t.position>e),disabledPrev:!(t.position<0)}}))},t.nextButtonHandler=function(){var e=(t.props.images.length-t.state.frameSize)*t.state.itemWidth*-1,n=t.state.itemWidth*t.state.step*-1,a=t.state.position+n;a<e?t.setState((function(){return{position:e}})):t.setState({position:a}),t.state.infinite?t.setInfinite():t.updateButtonState()},t.prevtButtonHandler=function(){var e=t.state.itemWidth*t.state.step;t.state.position+e>0?t.setState((function(t){return{position:t.position-t.position}})):t.setState((function(t){return{position:t.position+e}})),t.state.infinite?t.setInfinite():t.updateButtonState()},t.setInfinite=function(){var e=(t.props.images.length-t.state.frameSize)*t.state.itemWidth*-1;t.state.position===e&&t.setState({position:0,disabledNext:!1}),0===t.state.position&&t.setState({position:e,disabledPrev:!1})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.step,n=t.frameSize,a=t.itemWidth,i=t.animationDuration,s=t.infinite,o=t.position,r=t.disabledNext,l=t.disabledPrev;return Object(m.jsxs)("div",{className:"Carousel",children:[Object(m.jsx)("ul",{className:"Carousel__list",style:{width:n*a},children:this.props.images.map((function(t,e){return Object(m.jsx)("li",{className:"Carousel__item",children:Object(m.jsx)("img",{src:t,alt:"".concat(e+1),style:{width:a,height:a,transform:"translateX(".concat(o,"px)"),transition:"".concat(i,"ms")}})},+e)}))}),Object(m.jsxs)("div",{className:"Carousel__buttons",children:[Object(m.jsx)("button",{type:"button",className:"Carousel__button",disabled:l,onClick:this.prevtButtonHandler,children:"Prev"}),Object(m.jsx)("button",{type:"button",className:"Carousel__button",disabled:r,onClick:this.nextButtonHandler,children:"Next"})]}),Object(m.jsxs)("div",{className:"Carousel__label-box",children:[Object(m.jsxs)("label",{htmlFor:"step",className:"Carousel__label",children:[Object(m.jsx)("span",{children:"Step:"}),Object(m.jsx)("input",{id:"step",type:"range",value:e,min:1,max:10,onChange:this.changeStepValue})]}),Object(m.jsxs)("label",{htmlFor:"frameSize",className:"Carousel__label",children:[Object(m.jsx)("span",{children:"Frame Size:"}),Object(m.jsx)("input",{id:"frameSize",type:"range",value:n,min:1,max:10,onChange:this.changeFrameSizeValue})]}),Object(m.jsxs)("label",{htmlFor:"itemWidth",className:"Carousel__label",children:[Object(m.jsx)("span",{children:"Item Width:"}),Object(m.jsx)("input",{id:"itemWidth",type:"range",value:a,min:50,max:300,onChange:this.changeItemWidthValue})]}),Object(m.jsxs)("label",{htmlFor:"animationDuration",className:"Carousel__label",children:[Object(m.jsx)("span",{children:"Animation Duration:"}),Object(m.jsx)("input",{id:"animationDuration",type:"range",value:i,min:500,max:5e3,onChange:this.changeAnimationDurationValue})]}),Object(m.jsxs)("label",{htmlFor:"infinite",className:"Carousel__label",children:[Object(m.jsx)("span",{children:"Infinite:"}),Object(m.jsx)("input",{id:"infinite",type:"checkbox",checked:s,onChange:this.changeInfiniteValue})]})]})]})}}]),n}(u.a.Component),h=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state.images;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("h1",{children:["Carousel with ",t.length," images"]}),Object(m.jsx)(p,{images:t})]})}}]),n}(u.a.Component),d=h;i.a.render(Object(m.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e60e9c03.chunk.js.map