(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{4007:function(e,t,n){var a=n(4008);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(22)(a,r);a.locals&&(e.exports=a.locals)},4008:function(e,t,n){(t=e.exports=n(21)(!1)).push([e.i,"._3gUubwRZDWaOF0{align-items:center;box-sizing:border-box;display:flex;height:100vh;justify-content:center;overflow:auto;width:100vw}._1URVGCiHsrWlwF{background:rgba(0,0,0,.6)}._2WhIqhRFBTG7Ry{background:rgba(0,0,0,.75)}._1rhhEuk7pUqNV_{background:transparent;position:relative;top:48px;margin-bottom:80px}._1rhhEuk7pUqNV_:focus{outline:none}",""]),t.locals={overlay:"_3gUubwRZDWaOF0",light:"_1URVGCiHsrWlwF",dark:"_2WhIqhRFBTG7Ry",contents:"_1rhhEuk7pUqNV_"}},4011:function(e,t,n){"use strict";var a,r=n(0),o=n.n(r),i=n(41),c=n(206),l=n(126),s=n(244),u=n(24),m=n(5),p=n.n(m),d=n(4007),b=n.n(d);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}!function(e){e.LIGHT="light",e.DARK="dark"}(a||(a={}));var h=function(e){var t=e.background,n=void 0===t?a.LIGHT:t,i=e.className,c=void 0===i?"":i,l=e.closeOnEscape,s=void 0===l||l,m=e.children,d=e.isAnyPopoverCurrentlyOpen,h=e.onClose,v=void 0===h?function(){}:h,x=f(Object(r.useState)(!1),2),g=x[0],y=x[1];return Object(u.useShortcut)(function(){s&&v()},{scope:u.Scope.Overlay,key:u.Key.Escape}),o.a.createElement("div",{className:p()(b.a.overlay,b.a[n],c),onMouseDown:function(e){y(!d&&e.target===e.currentTarget)},onMouseUp:function(){g&&v()},role:"dialog"},o.a.createElement("div",{className:b.a.contents},m))};function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",function(){return a});var O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,y(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,o.a.Component),n=t,(a=[{key:"render",value:function(){return o.a.createElement(c.b,{layer:c.c.Overlay},o.a.createElement(h,this.props))}}])&&x(n.prototype,a),r&&x(n,r),t}();t.b=Object(i.b)(function(e){return{isAnyPopoverCurrentlyOpen:Object(s.a)(e)}},function(e){return{onClose:function(){e(Object(l.removeOverlay)())}}})(O)},4036:function(e,t,n){"use strict";n.r(t),n.d(t,"InviteTeamMembersAutocompleteComponent",function(){return b});var a=n(0),r=n.n(a),o=n(13),i=n(2),c=n(1),l=n(4103),s=n.n(l);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=n(83),p=n(806),d=Object(o.c)("org_members"),b=function(e){var t=e.children,n=e.placeholder,o=e.orgId,l=e.model,b=e.onEmailSelected,f=void 0===b?function(){}:b,h=e.optionsAddMembers,v=e.fullWidthButton,x=e.onInviteTeamMembersSuccess,g=u(Object(a.useState)([]),2),y=g[0],w=g[1],O=u(Object(a.useState)(!1),2),_=O[0],T=O[1],E=h?h.invitationMessage:"",I=!!h&&h.changedInviteMessage,S={placeholder:n,onSubmit:function(){var e;e=E?I?"with personalized invite message":"with canned invite message":"with no invite message",Object(c.trackUe)({category:c.Noun.TEAM_VIEW,verb:c.Verb.SENDS,directObj:c.Noun.TEAM_INVITATION,prepositionalObj:e,indirectObj:"with ".concat(y.length," invites"),method:"by clicking invite to team button on team members page",context:{teamId:l.get("id")}});var t=l.addMembers(y,{invitationMessage:E});return x&&(T(!0),x()),t},onAutocompleteSearch:function(e){return e.length>2?m({url:"/1/search/members/",type:"get",data:{query:e,idOrganization:o},dataType:"json"}):[]},displayDetails:!0,displayUsername:!0,submitText:d("invite-to-team"),onRemoveMemberOption:function(e){w(function(t){return t.filter(function(t,n){return n!==e})})},onSelectMemberOption:function(e){w(function(t){return Object(i.uniq)(Object(i.union)(t,Object(i.flatten)([e])),!1,function(e){return e.username?e.username:e.email})}),f()},shouldFocusOnSelectMemberOption:!0,selectedOptions:y,children:t,fullWidthButton:v,submitDisabled:_||!l};return r.a.createElement("div",{className:"org-team-members-autocomplete-container"},r.a.createElement("label",{className:s.a.teamMemberLabel},r.a.createElement("span",{className:s.a.teamMemberLabelText},d("team-members")),r.a.createElement(p,S)))}},4100:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n(0),r=n.n(a),o=n(5),i=n.n(o),c=n(13),l=n(4101),s=n.n(l),u=n(4036);function m(e,t,n,a,r,o,i){try{var c=e[o](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(a,r)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=n(26),b=Object(c.c)("org_members"),f=function(e){var t=e.orgId,n=e.orgDisplayName,o=e.model,c=e.startAnimation,l=e.fullWidthButton,f=e.className,h=e.onInviteTeamMembersSuccess,v=e.preventTextareaResize,x=b("personalized-message-2",{teamName:n}),g=p(Object(a.useState)(x),2),y=g[0],w=g[1],O=p(Object(a.useState)(),2),_=O[0],T=O[1];Object(a.useEffect)(function(){(function(){var e,n=(e=regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o){e.next=6;break}return e.next=3,d.loadOrganizationData(t);case 3:return n=e.sent,e.next=6,T(n);case 6:case"end":return e.stop()}},e)}),function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e){m(o,a,r,i,c,"next",e)}function c(e){m(o,a,r,i,c,"throw",e)}i(void 0)})});return function(){return n.apply(this,arguments)}})()()},[o,t]);var E,I,S,N=x!==y;return r.a.createElement("div",{className:i()(s.a.formWrapper,f)},r.a.createElement("div",{className:s.a.heading},b("invite-your-team")),r.a.createElement("div",{className:s.a.subtitle},b("trello-makes-teamwork-your-best-work")),r.a.createElement(u.InviteTeamMembersAutocompleteComponent,{placeholder:b("invite-input-placeholder"),orgId:t,model:o||_,optionsAddMembers:{invitationMessage:y,changedInviteMessage:N},onEmailSelected:c,fullWidthButton:l,onInviteTeamMembersSuccess:h},r.a.createElement("div",{className:s.a.autocompleteHelpText},r.a.createElement("strong",null,b("pro-tip"))," ",b("paste-as-many-emails-here-as-needed")),r.a.createElement("label",{className:s.a.invitationMessageLabel},r.a.createElement("span",{className:s.a.invitationMessageLabelText},b("give-this-message-a-personal-touch")),r.a.createElement("textarea",{className:i()(s.a.invitationMessage,(E={},I=s.a.invitationMessageNoResize,S=v,I in E?Object.defineProperty(E,I,{value:S,enumerable:!0,configurable:!0,writable:!0}):E[I]=S,E)),placeholder:b("personalized-message-placeholder"),value:y,onChange:function(e){w(e.target.value)},maxLength:500}))))}},4101:function(e,t,n){var a=n(4102);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(22)(a,r);a.locals&&(e.exports=a.locals)},4102:function(e,t,n){(t=e.exports=n(21)(!1)).push([e.i,"._2ozyzeoG-varDs{flex:1 1 auto;width:100%}._2ozyzeoG-varDs .autocomplete-input-container{max-width:none}._2ozyzeoG-varDs .autocomplete-btn{margin-bottom:0}._2XVmjWq1Ds8-i2{color:#172b4d;font-size:14px;font-weight:400;line-height:20px;margin:8px 0 16px}@media only screen and (max-width:750px),only screen and (min-width:751px) and (max-width:900px){._2XVmjWq1Ds8-i2{text-align:center}}._2-T1xH-fhIz60N{color:#172b4d;font-size:24px;font-weight:600;letter-spacing:-.01em;line-height:28px;margin-top:40px;margin-top:0}@media only screen and (max-width:750px),only screen and (min-width:751px) and (max-width:900px){._2-T1xH-fhIz60N{text-align:center}}._2wzRTdc1Iq0neb{color:#172b4d;font-size:14px;font-weight:400;line-height:20px;color:#5e6c84;margin:8px 0 28px}._1WPFYqViAabF58{margin:0}._3XpIQdKAqERycK{font-weight:700;color:#5e6c84;font-size:12px;line-height:16px;margin-top:12px;margin-bottom:4px;display:block;margin-bottom:12px}.wS5q-Owapul__t{background-color:#fafbfc;color:#172b4d;height:156px;margin-bottom:0}.wS5q-Owapul__t,.wS5q-Owapul__t:hover{border:none;box-shadow:inset 0 0 0 2px #dfe1e6}.wS5q-Owapul__t:hover{background-color:#ebecf0}.wS5q-Owapul__t:focus{background:#fff;border:none;box-shadow:inset 0 0 0 2px #0079bf}._12XgQEL5_g2Lmq{resize:none}",""]),t.locals={formWrapper:"_2ozyzeoG-varDs",subtitle:"_2XVmjWq1Ds8-i2",heading:"_2-T1xH-fhIz60N",autocompleteHelpText:"_2wzRTdc1Iq0neb",invitationMessageLabel:"_1WPFYqViAabF58",invitationMessageLabelText:"_3XpIQdKAqERycK",invitationMessage:"wS5q-Owapul__t",invitationMessageNoResize:"_12XgQEL5_g2Lmq"}},4103:function(e,t,n){var a=n(4104);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(22)(a,r);a.locals&&(e.exports=a.locals)},4104:function(e,t,n){(t=e.exports=n(21)(!1)).push([e.i,"._3PdcYVtRuHTlvL{margin:0}._1h9PvS3YBMEHS9{font-weight:700;color:#5e6c84;font-size:12px;line-height:16px;margin-top:12px;margin-bottom:4px;display:block;margin-bottom:12px}",""]),t.locals={teamMemberLabel:"_3PdcYVtRuHTlvL",teamMemberLabelText:"_1h9PvS3YBMEHS9"}},4949:function(e,t,n){var a=n(4950);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(22)(a,r);a.locals&&(e.exports=a.locals)},4950:function(e,t,n){var a=n(243);(t=e.exports=n(21)(!1)).push([e.i,"._2vrbr9OyhcQOwQ{margin:24px}._2vrbr9OyhcQOwQ label{margin-top:24px;color:#091e42}._2vrbr9OyhcQOwQ label._2sunXEAJImmfxS{color:#eb5a46}._2vrbr9OyhcQOwQ ._3Iqnw8HlCKvcSz{color:#091e42;font-size:24px;font-weight:600;letter-spacing:-.01em;line-height:28px;display:block;margin-bottom:12px}@media only screen and (max-width:750px),only screen and (min-width:751px) and (max-width:900px){._2vrbr9OyhcQOwQ ._3Iqnw8HlCKvcSz{text-align:center}}._2vrbr9OyhcQOwQ ._3O-nh6hx6HTp9W{font-size:18px;color:#6b778c;margin:12px auto 24px}@media only screen and (max-width:750px),only screen and (min-width:751px) and (max-width:900px){._2vrbr9OyhcQOwQ ._3O-nh6hx6HTp9W{display:block;text-align:center}}._2vrbr9OyhcQOwQ input._1CLyNodCAa-vQi{width:100%;height:48px;margin-bottom:6px}._2vrbr9OyhcQOwQ input._1CLyNodCAa-vQi._2sunXEAJImmfxS{border:none;box-shadow:inset 0 0 0 2px #eb5a46}._2vrbr9OyhcQOwQ textarea._15aIJYNKhrO4vB{margin-bottom:6px;resize:none;width:100%}._2vrbr9OyhcQOwQ ._1bvaK5JF03W_82{font-weight:100;color:#6b778c;font-size:12px}._2vrbr9OyhcQOwQ ._2ukuek1N8-13Iw{color:#6b778c;font-size:12px;margin-bottom:12px}._2vrbr9OyhcQOwQ ._2ukuek1N8-13Iw._2sunXEAJImmfxS{color:#eb5a46;font-weight:700}._2vrbr9OyhcQOwQ ._1aS0LdGertk5P7{width:100%;margin-top:12px}._2vrbr9OyhcQOwQ ._1aS0LdGertk5P7 .X1P6DVryq8CYGC{height:48px;width:100%}._2vrbr9OyhcQOwQ ._3TP8F77VrSTeHP{background-image:url("+a(n(1285))+");height:30px;width:30px;background-size:30px 30px;display:block;margin:0 auto}@media only screen and (min-width:901px) and (max-width:1280px),only screen and (min-width:1281px){._2vrbr9OyhcQOwQ{width:388px;margin:64px auto 32px}._2vrbr9OyhcQOwQ ._1aS0LdGertk5P7 .X1P6DVryq8CYGC,._2vrbr9OyhcQOwQ input._1CLyNodCAa-vQi,._2vrbr9OyhcQOwQ textarea._15aIJYNKhrO4vB{width:388px}}",""]),t.locals={buildTeam:"_2vrbr9OyhcQOwQ",formError:"_2sunXEAJImmfxS",letsBuildATeam:"_3Iqnw8HlCKvcSz",boostProductivity:"_3O-nh6hx6HTp9W",teamNameInput:"_1CLyNodCAa-vQi",teamDescriptionInput:"_15aIJYNKhrO4vB",optional:"_1bvaK5JF03W_82",inputDescriptionText:"_2ukuek1N8-13Iw",addTeamFooter:"_1aS0LdGertk5P7",continueButton:"X1P6DVryq8CYGC",spinner:"_3TP8F77VrSTeHP"}},4951:function(e,t,n){var a=n(4952);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(22)(a,r);a.locals&&(e.exports=a.locals)},4952:function(e,t,n){var a=n(243);(t=e.exports=n(21)(!1)).push([e.i,"._3okPZ1UgyOorbL{align-items:stretch;background-color:#fff;border-radius:3px;box-shadow:0 8px 16px -4px rgba(9,30,66,.25),0 0 0 1px rgba(9,30,66,.08);box-sizing:border-box;display:flex;flex-direction:row;min-height:500px;margin-top:16px;outline:0;overflow:hidden;width:calc(100vw - 48px);z-index:1}@media only screen and (min-width:901px) and (max-width:1280px),only screen and (min-width:1281px){._3okPZ1UgyOorbL{height:594px}}@media only screen and (max-width:750px),only screen and (min-width:751px) and (max-width:900px){._3okPZ1UgyOorbL{flex-direction:column-reverse;max-width:475px}._1wRFJUvIaoq-sR{transform:scaleX(2) rotate(-90deg);z-index:2;background-position:110px}._3lKk_kIqYLGIyx{transform:scaleY(.5) rotate(90deg);z-index:3;padding-top:40px}}@media only screen and (min-width:1281px){._3okPZ1UgyOorbL{width:1200px}}._1f6hQ1rpgO5o-J{align-items:center;display:flex;flex:1;flex-direction:column;justify-content:space-between;overflow:auto;text-align:left;z-index:3}._1wRFJUvIaoq-sR{align-items:center;background-image:url("+a(n(1288))+");background-repeat:no-repeat;background-size:cover;display:flex;flex:1;justify-content:center}@media only screen and (min-width:901px) and (max-width:1280px),only screen and (min-width:1281px){._1wRFJUvIaoq-sR{align-items:flex-start;padding-top:112px}}._2b_HpRl1Tyl1YK{margin-top:16px;position:absolute;right:8px;top:8px;z-index:2}.eg0KI5SqghoOFd{background-color:#fff;color:#7a869a;margin-bottom:21px;text-decoration:underline}.eg0KI5SqghoOFd:hover{color:#172b4d;text-decoration:none}._1FoUOG87ea9M2R{margin:64px auto 16px;width:388px}",""]),t.locals={createTeamContainer:"_3okPZ1UgyOorbL",illustrationContainer:"_1wRFJUvIaoq-sR",illustrationWrapper:"_3lKk_kIqYLGIyx",formContainer:"_1f6hQ1rpgO5o-J",closeButton:"_2b_HpRl1Tyl1YK",doLaterLinkButton:"eg0KI5SqghoOFd",inviteFormWrapper:"_1FoUOG87ea9M2R"}},4953:function(e,t,n){var a=n(4954);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(22)(a,r);a.locals&&(e.exports=a.locals)},4954:function(e,t,n){(t=e.exports=n(21)(!1)).push([e.i,"._1M7BOT0FSOTl2E{align-items:flex-start}",""]),t.locals={createTeamOverlay:"_1M7BOT0FSOTl2E"}},5010:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(41),i=n(495),c=n(4100),l=n(807),s=n(820),u=n(30),m=n(126),p=n(1194),d=n(332),b=n(5),f=n.n(b),h=n(54),v=n(161),x=n(43),g=n(4949),y=n.n(g),w=n(13),O=n(256);function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var E=Object(w.c)("create_team"),I="".concat(Date.now(),"-"),S=function(e){var t=e.submitCreateTeam,n=e.startAnimation,o=e.animationStep,i=T(Object(a.useState)(!0),2),c=i[0],l=i[1],s=T(Object(a.useState)(!1),2),u=s[0],m=s[1],p=T(Object(a.useState)(""),2),d=p[0],b=p[1],g=T(Object(a.useState)(""),2),w=g[0],S=g[1],N=T(Object(a.useState)(!1),2),k=N[0],j=N[1];return r.a.createElement("form",{className:y.a.buildTeam,onSubmit:Object(v.a)(function(){m(!0),t(d.trim(),w)})},r.a.createElement("span",{className:y.a.letsBuildATeam},E("lets-build-a-team")),r.a.createElement("span",{className:y.a.boostProductivity},E("boost-productivity")),r.a.createElement("label",{htmlFor:"".concat(I,"create-team-org-display-name"),className:f()(_({},y.a.formError,k))},E("team-name")),r.a.createElement("input",{id:"".concat(I,"create-team-org-display-name"),"data-test-id":x.HeaderTestIds.CreateTeamNameInput,type:"text",value:d,onBlur:function(){d&&o<1&&Object(O.j)()&&n()},onChange:function(e){b(e.target.value),j(100===e.target.value.length),l(100===e.target.value.length||0===e.target.value.trim().length),Object(O.j)()||3!==o||n()},className:f()(y.a.teamNameInput,_({},y.a.formError,k)),autoFocus:!0,maxLength:100,disabled:u,placeholder:E("tacos-co")}),k?r.a.createElement("span",{className:f()(y.a.inputDescriptionText,_({},y.a.formError,k))},E("team-name-error")):r.a.createElement("span",{className:y.a.inputDescriptionText},E("team-name-description")),r.a.createElement("label",{htmlFor:"".concat(I,"create-team-org-description")},E("team-description")," ",r.a.createElement("span",{className:y.a.optional},E("optional"))),r.a.createElement("textarea",{id:"".concat(I,"create-team-org-description"),rows:6,value:w,onChange:function(e){S(e.target.value)},className:y.a.teamDescriptionInput,disabled:u,placeholder:E("our-team-organizes-everything-here")}),r.a.createElement("span",{className:y.a.inputDescriptionText},E("team-description-description")),r.a.createElement("footer",{className:y.a.addTeamFooter},r.a.createElement(h.g,{disabled:c||u,type:"submit",className:y.a.continueButton,testId:x.HeaderTestIds.CreateTeamSubmitButton},u?r.a.createElement("div",{className:y.a.spinner}):E("continue"))))},N=n(89),k=n(4951),j=n.n(k);function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var C=Object(w.c)("create_team"),z=Object(o.b)(function(e){return{inTeamBuilderPhaseTwoExperiement:Object(O.j)(),teamType:Object(p.b)(e)}},function(e){return{onClose:function(){e(Object(m.removeOverlay)())},submitTeamCreation:function(t,n,a,r){return e(Object(i.d)({type:t,displayName:n,desc:a,enterprise:r}))},onCreateTeamSuccess:function(t,n){return e(Object(i.c)({type:t,team:n}))}}})(function(e){var t=e.inTeamBuilderPhaseTwoExperiement,n=e.onClose,o=e.onCreateTeamSuccess,i=e.submitTeamCreation,m=e.teamType,p=Q(Object(a.useState)(t?0:3),2),b=p[0],f=p[1],h=Q(Object(a.useState)({id:"",displayName:"",name:""}),2),v=h[0],x=h[1],g=Q(Object(a.useState)(1),2),y=g[0],w=g[1];function O(){f(b+1)}var _=!!t&&2===y,T=v.id,E=void 0===T?"":T,I=v.displayName,k=void 0===I?"":I,z=v.name,q=void 0===z?"":z;return r.a.createElement("div",{className:j.a.createTeamContainer},r.a.createElement("div",{className:j.a.formContainer},1===y&&r.a.createElement(S,{submitCreateTeam:function(e,n){i(m,e,n).then(function(e){if(e&&t){var n=Object(d.a)(e);x(n||{}),w(2)}})},startAnimation:O,animationStep:b}),2===y&&r.a.createElement(c.a,{startAnimation:O,orgId:E,orgDisplayName:k,model:null,className:j.a.inviteFormWrapper,fullWidthButton:!0,preventTextareaResize:!0,onInviteTeamMembersSuccess:o.bind(void 0,m,v)}),_&&r.a.createElement(N.a,{className:j.a.doLaterLinkButton,onClick:n,href:"/".concat(q)},C("ill-do-this-later"))),r.a.createElement("div",{className:j.a.illustrationContainer},r.a.createElement("div",{className:j.a.illustrationWrapper},r.a.createElement(l.a,{animationStep:b}))),r.a.createElement(s.a,{color:u.IconColor.Dark,className:j.a.closeButton,onClick:n,large:!0}))}),q=n(4011),A=n(4953),M=n.n(A);t.default=function(){return r.a.createElement(q.b,{background:q.a.LIGHT,className:M.a.createTeamOverlay},r.a.createElement(z,null))}}}]);
//# sourceMappingURL=gamma-create-team-overlay.cbd5aa9c6e50595562eb.js.map