(this.webpackJsonpdev_bro_react=this.webpackJsonpdev_bro_react||[]).push([[0],{106:function(e,a,t){e.exports=t.p+"static/media/stone-main.09298f5d.png"},107:function(e,a,t){e.exports=t.p+"static/media/phone.7a6a9e4e.svg"},108:function(e,a,t){e.exports=t.p+"static/media/mail.3916465b.svg"},109:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(21),m=t.n(s),c=(t(32),t(15)),i=t(6),r=t(7),o=t(10),u=t(8),E=t(12),d=t(9),N=t(22),f=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).toggleButton=function(){var e=t.state.humburgerIsActive?"header-layout":"header-layout header-mobile";e=t.state.humburgerIsActive&&t.state.isScroled?"header-layout header-black":e,t.setState({humburgerIsActive:!t.state.humburgerIsActive,humburgerClass:t.state.humburgerIsActive?"navigation-bar-mobile":"navigation-bar-mobile open",headerStyle:e})},t.state={headerStyle:"header-layout",humburgerIsActive:!1,humburgerClass:"navigation-bar-mobile",isBlackHeader:"",isScroled:!1},t.compRef=n.a.createRef(),t.ChangeHeaderBackground=t.ChangeHeaderBackground.bind(Object(E.a)(t)),t}return Object(d.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.ChangeHeaderBackground)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.ChangeHeaderBackground)}},{key:"ChangeHeaderBackground",value:function(){document.documentElement.scrollTop>270?this.setState((function(e){return e.headerStyle="header-layout header-black",e.isScroled=!0,Object(c.a)({},e)})):(this.setState({isScroled:!1}),this.state.humburgerIsActive||this.setState((function(e){return e.headerStyle="header-layout",Object(c.a)({},e)})))}},{key:"render",value:function(){var e=this.state,a=e.headerStyle,l=e.humburgerIsActive,s=e.humburgerClass;return n.a.createElement("header",{id:"header-block",className:a},n.a.createElement("div",{className:"header-layout__logo"},n.a.createElement("a",{className:"logo-link",href:"#",title:"home"},n.a.createElement("img",{className:"logo-image",src:t(17),alt:"Dev Brothers logo"}))),n.a.createElement("nav",{className:"header-layout__navigation-bar"},n.a.createElement("ul",{className:"navigation-list"},n.a.createElement("li",{className:"navigation-list__item"},n.a.createElement("a",{className:"nav-link dropdown",href:"#"},"Services"),n.a.createElement("ul",{className:"submenu-list"},n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Web Development")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Mobile Development")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"QA Automation & Testing")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"DevOps")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"UX/UI & User Testing")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Big Data & Analytics")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Graphic Design")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Remote Administration")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"IT Consulting")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Outsource team building")))),n.a.createElement("li",{className:"navigation-list__item"},n.a.createElement("a",{className:"nav-link dropdown",href:"#"},"Case Studies"),n.a.createElement("ul",{className:"submenu-list"},n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"123")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Web Development")))),n.a.createElement("li",{className:"navigation-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Testimonials")),n.a.createElement("li",{className:"navigation-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Team")))),n.a.createElement("div",{className:"header-layout__social"},n.a.createElement("ul",{className:"social-list"},n.a.createElement("li",{className:"social-list__item"},n.a.createElement("a",{className:"socio-link",href:"#"},n.a.createElement("img",{src:t(18),alt:"mail"}))),n.a.createElement("li",{className:"social-list__item"},n.a.createElement("a",{className:"socio-link",href:"#"},n.a.createElement("img",{src:t(19),alt:"mail"}))),n.a.createElement("li",{className:"social-list__item"},n.a.createElement("a",{className:"socio-link",href:"#"},n.a.createElement("img",{src:t(20),alt:"mail"}))))),n.a.createElement(N.HamburgerSlider,{className:"hamburger",isActive:l,buttonWidth:24,toggleButton:this.toggleButton,buttonColor:"transparent",barColor:"white"}),n.a.createElement("nav",{className:s},n.a.createElement("ul",{className:"navigation-list"},n.a.createElement("li",{className:"navigation-list__item"},n.a.createElement("a",{className:"nav-link dropdown",href:"#"},"Services"),n.a.createElement("ul",{className:"submenu-list open"},n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Web Development")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"123")))),n.a.createElement("li",{className:"navigation-list__item"},n.a.createElement("a",{className:"nav-link dropdown",href:"#"},"Case Studies"),n.a.createElement("ul",{className:"submenu-list"},n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"123")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Web Development")))),n.a.createElement("li",{className:"navigation-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Testimonials")),n.a.createElement("li",{className:"navigation-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Team")))))}}]),a}(l.Component);var v=function(){var e=document.querySelector(".feature-animation-one"),a=window.pageYOffset+e.getBoundingClientRect().top,t=document.querySelector(".feature-animation-two"),l=window.pageYOffset+t.getBoundingClientRect().top,n=document.querySelector(".feature-animation-three"),s=window.pageYOffset+n.getBoundingClientRect().top,m=window.pageYOffset+document.documentElement.clientHeight;m>a+130?(e.style.opacity="1",e.style.transform="rotateY(0)"):(e.style.opacity="0",e.style.transform="rotateY(90deg)"),m>l+130?(t.style.opacity="1",t.style.transform="rotateY(0)"):(t.style.opacity="0",t.style.transform="rotateY(-90deg)"),m>s+130?(n.style.opacity="1",n.style.transform="scale(1)"):(n.style.opacity="0",n.style.transform="scale(.5)")};var h=function(){var e=document.querySelector(".main-stone"),a=document.documentElement.scrollTop;e.style.transform="translate(0,".concat(a/200*80,"px)")},_=function(e){function a(e){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).call(this,e))}return Object(d.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",v),window.addEventListener("scroll",h)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",v),window.removeEventListener("scroll",h)}},{key:"render",value:function(){return n.a.createElement("section",{className:"main-info"},n.a.createElement("div",{className:"promo"},n.a.createElement("h1",{className:"promo__header"},"Devbrother"),n.a.createElement("h2",{className:"promo__header_describe"},"your software engineering family"),n.a.createElement("div",{className:"main-describe"},n.a.createElement("p",{className:"main-describe__text"},"ALWAYS FOCUSED ON YOUR REAL RESULT"),n.a.createElement("button",{className:"button-for-talk",type:"button"},"Let\u2019s talk"))),n.a.createElement("div",{className:"main-features"},n.a.createElement("section",{className:"feature"},n.a.createElement("div",{className:"feature__container feature-animation-one"},n.a.createElement("h3",{className:"feature__header"},"Extend your",n.a.createElement("br",null),"team"),n.a.createElement("p",{className:"feature__describe"},"Boost your development team with DevBrother\u2019s dedicated specialists."))),n.a.createElement("section",{className:"feature"},n.a.createElement("div",{className:"feature__container feature-animation-two"},n.a.createElement("h3",{className:"feature__header"},"Implement your",n.a.createElement("br",null),"idea"),n.a.createElement("p",{className:"feature__describe"},"Create or support you online business representation."))),n.a.createElement("section",{className:"feature"},n.a.createElement("div",{className:"feature__container feature-animation-three"},n.a.createElement("h3",{className:"feature__header"},"Free-up your",n.a.createElement("br",null),"team time"),n.a.createElement("p",{className:"feature__describe"},"Devops, QA, Development support for your team.")))),n.a.createElement("img",{className:"main-stone",src:t(106),alt:"stone"}))}}]),a}(l.Component);var b=function(){var e=document.getElementById("we-are-diff-id"),a=window.pageYOffset+e.getBoundingClientRect().top;window.pageYOffset+document.documentElement.clientHeight>a+130?(e.style.opacity="1",e.style.transform="translate(0)"):(e.style.opacity="0",e.style.transform="translate(-100px)")};var g=function(){return Object(l.useEffect)((function(){return window.addEventListener("scroll",b),function(){window.removeEventListener("scroll",b)}})),n.a.createElement("section",{className:"we-are-diff-layout"},n.a.createElement("div",{className:"we-are-diff-block",id:"we-are-diff-id"},n.a.createElement("h2",{className:"we-are-diff-block__header"},"we are different"),n.a.createElement("p",{className:"we-are-diff-block__description"},"We are the best when it goes to remote team extension because we own ",n.a.createElement("span",{className:"mark-diff"},"CoWorking Network"),".",n.a.createElement("br",null),n.a.createElement("br",null),"Developers we hire become our coworking clients so there is no need for us to overcharge you like other SE companies can do.")))},p=function(e){function a(e){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).call(this,e))}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement("footer",{className:"footer-layout"},n.a.createElement("div",{className:"footer-container"},n.a.createElement("div",{className:"footer-top"},n.a.createElement("div",{className:"contact-us"},n.a.createElement("div",{className:"contact-us__logo"},n.a.createElement("a",{className:"logo-link",href:"#",title:"home"},n.a.createElement("img",{className:"logo-image",src:t(17),alt:"Dev Brothers logo"}))),n.a.createElement("div",{className:"contact-us__contact"},n.a.createElement("img",{src:t(107),alt:"telephone",className:"contact-icon"}),n.a.createElement("a",{className:"contact-link",title:"telephone-number"},"+380 664 187 323")),n.a.createElement("div",{className:"contact-us__contact"},n.a.createElement("img",{src:t(108),alt:"phone",className:"contact-icon"}),n.a.createElement("a",{className:"contact-link",title:"telephone-number"},"kh@devbrother.com"))),n.a.createElement("nav",{className:"navigation-bar"},n.a.createElement("ul",{className:"navigation-list"},n.a.createElement("li",{className:"navigation-list__item"},n.a.createElement("a",{className:"nav-link",href:""},"Services"),n.a.createElement("div",{className:"dropdown"}),n.a.createElement("ul",{className:"submenu-list"},n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Web Development")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Mobile Development")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"QA Automation & Testing")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"DevOps")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"UX/UI & User Testing")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Big Data & Analytics")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Graphic Design")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Remote Administration")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"IT Consulting")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Outsource team building")))),n.a.createElement("li",{className:"navigation-list__item"},n.a.createElement("a",{className:"nav-link",href:""},"Case Studies"),n.a.createElement("div",{className:"dropdown"}),n.a.createElement("ul",{className:"submenu-list"},n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"HealthCare")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"WP Development")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Event Organization")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"UI/UX Solution Case")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Art-Galleries")),n.a.createElement("li",{className:"submenu-list__item"},n.a.createElement("a",{className:"nav-link",href:"#"},"E-Commerce")))),n.a.createElement("li",{className:"navigation-list__item"},n.a.createElement("a",{className:"nav-link",href:""},"Testimonials")),n.a.createElement("li",{className:"navigation-list__item"},n.a.createElement("a",{className:"nav-link",href:""},"Team")))),n.a.createElement("div",{className:"subscribe-form-layout"},n.a.createElement("form",{className:"subscribe-form",action:"#"},n.a.createElement("label",{htmlFor:"email-id"},n.a.createElement("input",{id:"email-id",type:"email",name:"email-to-subscribe"}))))),n.a.createElement("div",{className:"footer-bottom"},n.a.createElement("ul",{className:"social-list"},n.a.createElement("li",{className:"social-list__item"},n.a.createElement("a",{className:"socio-link",href:"#"},n.a.createElement("img",{src:t(18),alt:"mail"}))),n.a.createElement("li",{className:"social-list__item"},n.a.createElement("a",{className:"socio-link",href:"#"},n.a.createElement("img",{src:t(19),alt:"mail"}))),n.a.createElement("li",{className:"social-list__item"},n.a.createElement("a",{className:"socio-link",href:"#"},n.a.createElement("img",{src:t(20),alt:"mail"})))),n.a.createElement("p",null,"\xa9 Copyright 2019 Devbrother"))))}}]),a}(l.Component);var k=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(f,null),n.a.createElement("main",null,n.a.createElement(_,null),n.a.createElement(g,null)),n.a.createElement(p,null))};m.a.render(n.a.createElement(k,null),document.getElementById("root"))},17:function(e,a,t){e.exports=t.p+"static/media/logo.77f8732a.svg"},18:function(e,a,t){e.exports=t.p+"static/media/mail.d9ef1a05.svg"},19:function(e,a,t){e.exports=t.p+"static/media/twitter.c5ce43f7.svg"},20:function(e,a,t){e.exports=t.p+"static/media/skype.8a6a6783.svg"},27:function(e,a,t){e.exports=t(109)},32:function(e,a,t){}},[[27,1,2]]]);
//# sourceMappingURL=main.9a87cf34.chunk.js.map