(this["webpackJsonpaskent-client"]=this["webpackJsonpaskent-client"]||[]).push([[25],{300:function(e,t,a){"use strict";a(1);var n=a(423),i=a(461),c=a(636),s=a(192),r=a(158),o=a(322),l=a.n(o),d=a(8),j=Object(s.a)((function(e){return Object(r.a)({dialogTitle:{display:"flex",justifyContent:"space-between",alignItems:"center"}})}));t.a=function(e){var t=e.title,a=e.onClose,s=j();return Object(d.jsxs)(n.a,{disableTypography:!0,className:s.dialogTitle,children:[Object(d.jsx)(i.a,{variant:"subtitle1",color:"textSecondary",children:t}),Object(d.jsx)(c.a,{onClick:a,size:"small",children:Object(d.jsx)(l.a,{color:"inherit",fontSize:"small"})})]})}},385:function(e,t,a){"use strict";var n=a(45),i=a(101),c=a.n(i),s=a(119),r=a(117),o=a(44),l=a(1),d=a.n(l),j=a(640),u=a(642),b=a(671),O=a(647),x=a(351),f=a(643),h=a(462),p=a(192),v=a(158),m=a(72),g=a(262),y=a(280),w=a(244),k=a(253),M=a(663),C=a(247),A=a(300),I=a(245),S=a(125),E=a(246),z=a(645),N=a(375),B=a(636),F=a(251),D=a(389),R=a(383),_=a.n(R),T=a(436),P=a.n(T),q=a(437),L=a.n(q),W=a(461),G=a(191),Y=a(570),Q=a(435),U=a.n(Q),H=a(434),J=a.n(H),K=a(8),V=Object(p.a)((function(e){return Object(v.a)({collapseList:{},item:{marginBottom:e.spacing(2)},head:{display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer"},title:{display:"flex",alignItems:"center",color:e.palette.primary.main},titleText:{fontWeight:e.typography.fontWeightBold,marginLeft:e.spacing(1)},body:{paddingLeft:32,marginBottom:e.spacing(2)}})})),X=function(e){var t=e.list,a=e.defaultActiveKey,n=void 0===a?[]:a,i=V(),c=d.a.useState(n),s=Object(o.a)(c,2),r=s[0],l=s[1];return Object(K.jsx)(x.a,{className:i.collapseList,children:t.map((function(e,t){return Object(K.jsxs)(x.a,{className:i.item,children:[Object(K.jsxs)(x.a,{className:i.head,onClick:function(e){return function(e){l(r.includes(e)?r.filter((function(t){return t!==e})):r.concat([e]))}(t)},children:[Object(K.jsxs)("div",{className:i.title,children:[d.a.cloneElement(e.titleIcon,{color:"inherit"}),Object(K.jsx)(W.a,{variant:"h6",color:"inherit",className:i.titleText,children:e.titleText})]}),r.includes(t)?Object(K.jsx)(J.a,{color:"inherit",fontSize:"small"}):Object(K.jsx)(U.a,{color:"inherit",fontSize:"small"})]}),Object(K.jsx)(G.a,{className:i.body,in:r.includes(t),children:e.body}),Object(K.jsx)(Y.a,{})]},t)}))})},Z=a(382),$=a.n(Z),ee=Object(p.a)((function(e){return Object(v.a)({basicInfoField:{width:"70%"},dateRange:{display:"flex",justifyContent:"space-between","& > *":{width:"47%"}}})})),te=function(e){var t=e.defaultFocus,a=void 0===t?"name":t,n=ee(),i=Object(g.a)().formatMessage,c=d.a.useRef(null),s=d.a.useState(!1),r=Object(o.a)(s,2),l=r[0],j=r[1];return Object(K.jsx)(X,{list:[{titleIcon:Object(K.jsx)(P.a,{}),titleText:Object(K.jsx)(y.a,{id:"Basic_information",defaultMessage:"Basic information"}),body:Object(K.jsxs)(x.a,{className:n.basicInfoField,children:[Object(K.jsx)(w.a,{component:F.c,fullWidth:!0,autoFocus:"name"===a,name:"name",label:i({id:"Event_name",defaultMessage:"Event name"}),margin:"normal",size:"small"}),Object(K.jsxs)(x.a,{className:n.dateRange,children:[Object(K.jsx)(w.a,{component:D.a,autoFocus:"startAt"===a,name:"startAt",label:i({id:"Start_datetime",defaultMessage:"Start date time"}),variant:"inline",margin:"normal",size:"small",autoOk:!0,disableToolbar:!0}),Object(K.jsx)(w.a,{component:D.a,autoFocus:"endAt"===a,name:"endAt",label:i({id:"End_datetime",defaultMessage:"End date time"}),variant:"inline",margin:"normal",size:"small",autoOk:!0,disableToolbar:!0})]}),Object(K.jsx)(w.a,{component:F.c,fullWidth:!0,autoFocus:"code"===a,name:"code",label:i({id:"Event_code",defaultMessage:"Event code"}),margin:"normal",size:"small"}),Object(K.jsx)(w.a,{component:F.c,inputRef:c,fullWidth:!0,autoFocus:"eventLink"===a,name:"eventLink",label:i({id:"Event_link",defaultMessage:"Event link"}),size:"small",InputProps:{readOnly:!0,endAdornment:Object(K.jsx)(z.a,{position:"end",children:Object(K.jsx)(N.a,{arrow:!0,placement:"right",leaveDelay:3e3,title:i(l?{id:"Copied!",defaultMessage:"Copied!"}:{id:"Copy to clipboard",defaultMessage:"Copy to clipboard"}),children:Object(K.jsx)(B.a,{size:"small",onClick:function(){var e,t;null===(e=c.current)||void 0===e||e.focus(),null===(t=c.current)||void 0===t||t.select();try{var a;c.current&&$()(null===(a=c.current)||void 0===a?void 0:a.value)&&(j(!0),window.setTimeout((function(){return j(!1)}),3e3))}catch(n){console.log(n)}},children:Object(K.jsx)(_.a,{fontSize:"inherit",color:"inherit"})})})})},onFocus:function(){var e;null===(e=c.current)||void 0===e||e.select()}})]})},{titleIcon:Object(K.jsx)(L.a,{}),titleText:Object(K.jsx)(y.a,{id:"Security",defaultMessage:"Security"}),body:Object(K.jsx)(x.a,{})}],defaultActiveKey:[0]})},ae=a(269),ne=a.n(ae),ie=Object(p.a)((function(e){return Object(v.a)({switchItem:{display:"flex",justifyContent:"space-between",alignItems:"center"}})})),ce=function(e){var t=e.label,a=e.description,n=e.switchField,i=ie();return Object(K.jsxs)("div",{className:i.switchItem,children:[Object(K.jsxs)("div",{children:[Object(K.jsx)(W.a,{variant:"body1",children:t}),Object(K.jsx)(W.a,{variant:"body2",color:"textSecondary",children:a})]}),n]})},se=function(){return Object(K.jsx)(X,{list:[{titleIcon:Object(K.jsx)(ne.a,{}),titleText:Object(K.jsx)(y.a,{id:"Audience_Q&A",defaultMessage:"Audience Q&A"}),body:Object(K.jsx)(d.a.Fragment,{children:Object(K.jsx)(ce,{label:Object(K.jsx)(y.a,{id:"Moderation",defaultMessage:"Moderation"}),description:Object(K.jsx)(y.a,{id:"Easily review all questions before they go live.",defaultMessage:"Easily review all questions before they go live."}),switchField:Object(K.jsx)(w.a,{component:F.b,type:"checkbox",name:"moderation"})})})}]})},re=a(657),oe=a(658),le=a(659),de=a(660),je=a(661),ue=a(662),be=a(638),Oe=a(423),xe=a(424),fe=a(439),he=a.n(fe),pe=a(272),ve=Object(p.a)((function(e){return Object(v.a)({removeButton:{color:e.palette.text.secondary}})})),me=function(e){var t=e.eventId,a=e.eventData,n=ve(),i=d.a.useState(!1),s=Object(o.a)(i,2),l=s[0],j=s[1],u=d.a.useState(""),b=Object(o.a)(u,2),O=b[0],f=b[1],p=Object(I.t)({variables:{eventId:t}}),v=p.data,m=p.loading,g=p.refetch,w=Object(I.B)(),k=Object(o.a)(w,2),M=k[0],C=k[1].loading,A=function(){f("")},S=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M({variables:{eventId:t,guestId:O}});case 2:g(),A();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(K.jsxs)(d.a.Fragment,{children:[Object(K.jsx)(x.a,{display:"flex",justifyContent:"flex-end",children:Object(K.jsx)(h.a,{variant:"contained",color:"secondary",size:"small",onClick:function(){j(!0)},children:Object(K.jsx)(y.a,{id:"Add guest",defaultMessage:"Add guest"})})}),Object(K.jsx)(re.a,{children:Object(K.jsxs)(oe.a,{size:"small",children:[Object(K.jsx)(le.a,{children:Object(K.jsxs)(de.a,{children:[Object(K.jsx)(je.a,{children:Object(K.jsx)(y.a,{id:"Name",defaultMessage:"Name"})}),Object(K.jsx)(je.a,{align:"right",children:Object(K.jsx)(y.a,{id:"Email",defaultMessage:"Email"})}),Object(K.jsx)(je.a,{align:"right",children:Object(K.jsx)(y.a,{id:"Actions",defaultMessage:"Actions"})})]})}),Object(K.jsx)(ue.a,{children:null===v||void 0===v?void 0:v.eventById.guestes.map((function(e,t){return Object(K.jsxs)(de.a,{children:[Object(K.jsx)(je.a,{component:"th",scope:"row",children:e.name}),Object(K.jsx)(je.a,{align:"right",children:e.email}),Object(K.jsx)(je.a,{align:"right",children:Object(K.jsx)(B.a,{size:"small",className:n.removeButton,onClick:function(t){return a=e.id,void f(a);var a},children:Object(K.jsx)(he.a,{fontSize:"inherit",color:"inherit"})})})]},t)}))})]})}),m&&Object(K.jsx)(be.a,{}),Object(K.jsx)(ge,{open:l,eventId:t,eventData:a,handleClose:function(e){e&&g(),j(!1)}}),Object(K.jsx)(pe.a,{open:Boolean(O),loading:C,contentText:Object(K.jsx)(y.a,{id:"Remove_this_guest?",defaultMessage:"Remove this guest?"}),okText:Object(K.jsx)(y.a,{id:"Remove",defaultMessage:"Remove"}),onCancel:A,onOk:S})]})},ge=function(e){var t=e.open,a=e.eventId,n=e.eventData,i=e.handleClose,l=Object(I.f)(),d=Object(o.a)(l,2),b=d[0],O=d[1],x=O.data,p=O.loading,v=Object(I.e)(),m=Object(o.a)(v,2),g=m[0],M=m[1].loading,A=function(){var e=Object(r.a)(c.a.mark((function e(t){var a,i,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,e.prev=1,e.next=4,k.b({email:k.c().max(E.g).email().required()}).validate({email:a});case 4:e.next=11;break;case 6:return e.prev=6,e.t0=e.catch(1),i=e.t0,r=i.path,o=i.errors,console.error(r,o),e.abrupt("return",Object(s.a)({},r,o[0]));case 11:if(a!==(null===n||void 0===n?void 0:n.eventById.owner.email)){e.next=13;break}return e.abrupt("return",{email:"Can't add event owner as guest"});case 13:return e.next=15,b({variables:{email:a}});case 15:if(null===x||void 0===x?void 0:x.checkEmailExist){e.next=17;break}return e.abrupt("return",{email:"User with this eamil does not exist"});case 17:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,e.next=3,g({variables:{eventId:a,email:n}});case 3:i(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(K.jsxs)(j.a,{open:t,onClose:function(e){return i()},children:[Object(K.jsx)(Oe.a,{children:Object(K.jsx)(y.a,{id:"Add guest",defaultMessage:"Add guest"})}),Object(K.jsx)(w.c,{initialValues:{email:""},validate:A,onSubmit:S,children:Object(K.jsxs)(w.b,{children:[Object(K.jsxs)(u.a,{children:[Object(K.jsx)(xe.a,{children:Object(K.jsx)(y.a,{id:"Add a user as guest administrator, who can cooperating manage this event with you.",defaultMessage:"Add a user as guest administrator, who can cooperating manage this event with you."})}),Object(K.jsx)(w.a,{component:F.c,autoFocus:!0,fullWidth:!0,name:"email",label:Object(K.jsx)(y.a,{id:"User email",defaultMessage:"User email"}),type:"email"})]}),Object(K.jsxs)(f.a,{children:[Object(K.jsx)(h.a,{onClick:function(e){return i()},children:Object(K.jsx)(y.a,{id:"Cancel",defaultMessage:"Cancel"})}),Object(K.jsx)(C.a,{type:"submit",variant:"contained",color:"primary",style:{width:100},loading:p||M,children:Object(K.jsx)(y.a,{id:"Add",defaultMessage:"Add"})})]})]})})]})},ye=[Object(K.jsx)(y.a,{id:"General",defaultMessage:"General"}),Object(K.jsx)(y.a,{id:"Guestes",defaultMessage:"Guestes"}),Object(K.jsx)(y.a,{id:"Features",defaultMessage:"Features"}),Object(K.jsx)(y.a,{id:"Customization",defaultMessage:"Customization"}),Object(K.jsx)(y.a,{id:"Integrations",defaultMessage:"Integrations"}),Object(K.jsx)(y.a,{id:"Share_access",defaultMessage:"Share access"})],we=function(e){var t=e.index,a=e.defaultFocus,n=void 0===a?"name":a,i=e.eventId,c=e.eventData;return[Object(K.jsx)(te,{defaultFocus:n}),Object(K.jsx)(me,{eventId:i,eventData:c}),Object(K.jsx)(se,{}),Object(K.jsx)("div",{children:"Item Customization"}),Object(K.jsx)("div",{children:"Item Integrations"}),Object(K.jsx)("div",{children:"Item Share_access"})][t]},ke=Object(p.a)((function(e){return Object(v.a)({paper:{overflowY:"hidden"},form:{display:"flex",flexDirection:"column",overflow:"hidden"},dialogContent:{display:"flex",overflowY:"hidden"},tabs:{width:200,borderRight:"1px solid ".concat(e.palette.divider)},tabRoot:{paddingRight:e.spacing(2)},tabWrapper:{alignItems:"flex-end"},contentRightBox:{width:680,height:"100%",maxHeight:420,overflowY:"auto",marginLeft:e.spacing(2),paddingLeft:50,paddingRight:50,position:"relative","&:before":{content:"' '",display:"block",position:"sticky",top:0,left:0,width:"100%",height:12,pointerEvents:"none",background:"linear-gradient(to top, ".concat(Object(m.a)(e.palette.background.paper,0)," 0%, ").concat(e.palette.background.paper," 100%)")},"&:after":{content:"' '",display:"block",position:"sticky",bottom:0,left:0,width:"100%",height:12,pointerEvents:"none",background:"linear-gradient(to bottom, ".concat(Object(m.a)(e.palette.background.paper,0)," 0%, ").concat(e.palette.background.paper," 100%)")}}})}));t.a=function(e){var t=e.defaultFocus,a=void 0===t?"name":t,i=e.eventIdState,l=e.onExiting,p=ke(),v=Object(g.a)().formatMessage,m=Object(S.b)().enqueueSnackbar,z=Object(o.a)(i,2),N=z[0],B=z[1],F=d.a.useState(0),D=Object(o.a)(F,2),R=D[0],_=D[1],T=Object(I.p)(),P=Object(o.a)(T,2),q=P[0],L=P[1],W=L.data,G=L.loading,Y=Object(I.g)(),Q=Object(o.a)(Y,2),U=Q[0],H=Q[1],J=H.data,V=H.loading,X=Object(I.D)(),Z=Object(o.a)(X,2),$=Z[0],ee=Z[1].loading;d.a.useEffect((function(){N&&q({variables:{eventId:N}})}),[N]);var te=function(){B(""),_(0),l&&l("cancel")},ae={name:(null===W||void 0===W?void 0:W.eventById.name)||"",code:(null===W||void 0===W?void 0:W.eventById.code)||"",startAt:new Date(null===W||void 0===W?void 0:W.eventById.startAt),endAt:new Date(null===W||void 0===W?void 0:W.eventById.endAt),eventLink:"".concat(window.location.origin,"/event/").concat(null===W||void 0===W?void 0:W.eventById.id),moderation:null===W||void 0===W?void 0:W.eventById.moderation},ne=function(){var e=Object(r.a)(c.a.mark((function e(t){var a,n,i,r,o,l,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,n=t.code,i=t.startAt,r=t.endAt,e.prev=1,e.next=4,k.b({name:k.c().max(E.d).required(),code:k.c().max(E.c).required(),startAt:k.a(),endAt:k.a()}).validate({name:a,code:n,startAt:i,endAt:r});case 4:e.next=11;break;case 6:return e.prev=6,e.t0=e.catch(1),o=e.t0,l=o.path,d=o.errors,console.error(l,d),e.abrupt("return",Object(s.a)({},l,d[0]));case 11:if(!(r<i)){e.next=13;break}return e.abrupt("return",{endAt:v({id:"End_must_after_start",defaultMessage:"End must after start"})});case 13:if(n===ae.code){e.next=18;break}return e.next=16,U({variables:{code:n}});case 16:if(!(null===J||void 0===J?void 0:J.checkEventCodeExist)){e.next=18;break}return e.abrupt("return",{code:v({id:"Code_existed",defaultMessage:"Code existed"})});case 18:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(r.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$({variables:{input:M.a(["eventLink"],Object(n.a)({eventId:N},t))}});case 2:a=e.sent,a.data&&(m(v({id:"Event_updated",defaultMessage:"Event updated"}),{variant:"success"}),te());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(K.jsxs)(j.a,{classes:{paper:p.paper},maxWidth:"lg",open:Boolean(N),onClose:te,children:[Object(K.jsx)(A.a,{title:Object(K.jsx)(y.a,{id:"Event_settings",defaultMessage:"Event settings"}),onClose:te}),Object(K.jsx)(w.c,{enableReinitialize:!0,initialValues:ae,validate:ne,onSubmit:ie,children:Object(K.jsxs)(w.b,{className:p.form,children:[Object(K.jsxs)(u.a,{className:p.dialogContent,children:[Object(K.jsx)(b.a,{orientation:"vertical",variant:"scrollable",className:p.tabs,value:R,onChange:function(e,t){_(t)},children:ye.map((function(e,t){return Object(K.jsx)(O.a,{classes:{root:p.tabRoot,wrapper:p.tabWrapper},label:e},t)}))}),Object(K.jsx)(x.a,{className:p.contentRightBox,children:Object(K.jsx)(we,{index:R,defaultFocus:a,eventId:N,eventData:W})})]}),Object(K.jsxs)(f.a,{children:[Object(K.jsx)(h.a,{onClick:te,children:Object(K.jsx)(y.a,{id:"Cancel",defaultMessage:"Cancel"})}),Object(K.jsx)(C.a,{variant:"contained",color:"primary",style:{width:100},type:"submit",loading:G||ee||V,children:Object(K.jsx)(y.a,{id:"Save",defaultMessage:"Save"})})]})]})})]})}},675:function(e,t,a){"use strict";a.r(t);var n=a(44),i=a(1),c=a.n(i),s=a(18),r=a(127),o=a(41),l=a(40),d=a(192),j=a(158),u=a(428),b=a(649),O=a(644),x=a(638),f=a(648),h=a(636),p=a(351),v=a(375),m=a(461),g=a(632),y=a(352),w=a(589),k=a.n(w),M=a(262),C=a(196),A=a(310),I=a(590),S=a.n(I),E=a(432),z=a.n(E),N=a(385),B=a(45),F=a(51),D=a(377),R=a(426),_=a(374),T=a(462),P=a(570),q=a(583),L=a.n(q),W=a(573),G=a(280),Y=a(125),Q=a(433),U=a.n(Q),H=a(581),J=a.n(H),K=a(582),V=a.n(K),X=a(383),Z=a.n(X),$=a(382),ee=a.n($),te=a(572),ae=a.n(te),ne=a(129),ie=a(8),ce=Object(F.a)({root:{whiteSpace:"unset",width:280}})(D.a),se=Object(F.a)((function(e){return Object(j.a)({root:{minWidth:28,color:e.palette.primary.main,fontSize:18}})}))(R.a),re=Object(F.a)((function(e){return Object(j.a)({primary:{fontSize:16,fontWeight:e.typography.fontWeightMedium,color:e.palette.primary.main},secondary:{fontSize:12,color:e.palette.text.secondary}})}))(_.a),oe=Object(d.a)((function(e){return Object(j.a)({presentModeBtn:{marginRight:e.spacing(1),borderRadius:e.spacing(2)},presentModeIcon:{marginRight:e.spacing(1)}})})),le=Object(l.a)((function(){return Promise.all([a.e(5),a.e(26)]).then(a.bind(null,448))}),{fallback:Object(ie.jsx)(o.a,{})}),de=function(){var e=oe(),t=Object(s.i)().id,a=Object(Y.b)().enqueueSnackbar,i=Object(M.a)().formatMessage,r=Object(W.usePopupState)({variant:"popover",popupId:"presentModeMenu"}),o=ae.a,l=c.a.useRef(),d=c.a.useState(!1),j=Object(n.a)(d,2),u=j[0],b=j[1];c.a.useEffect((function(){return o.isEnabled&&o.on("change",O),function(){o.off("change",O)}}));var O=function(){b(o.isFullscreen)},x=[{icon:Object(ie.jsx)(J.a,{color:"inherit",fontSize:"inherit"}),primary:i({id:"Present in fullscreen",defaultMessage:"Present in fullscreen"}),secondary:i({id:"Display audience questions or poll results on a big screen",defaultMessage:"Display audience questions or poll results on a big screen"}),handleClick:function(){o.isEnabled?o.request(l.current):a(i({id:"Your browser does not support fullscreen.",defaultMessage:"Your browser does not support fullscreen."}),{variant:"warning"})}},{icon:Object(ie.jsx)(V.a,{color:"inherit",fontSize:"inherit"}),primary:i({id:"Present on another screen",defaultMessage:"Present on another screen"}),secondary:i({id:"Open Present mode in a new window and display it on your extended screen",defaultMessage:"Open Present mode in a new window and display it on your extended screen"}),handleClick:function(){window.open("/event/".concat(t,"/wall"),"AskentPresentation","menubar=no,location=yes,resizable=yes,scrollbars=no,status=no,width=1066,height=600")}}];return Object(ie.jsxs)(c.a.Fragment,{children:[Object(ie.jsxs)(T.a,Object(B.a)(Object(B.a)({className:e.presentModeBtn,disableElevation:!0,variant:"contained",color:"secondary",size:"small"},Object(W.bindHover)(r)),{},{children:[Object(ie.jsx)(U.a,{className:e.presentModeIcon,fontSize:"inherit",color:"inherit"}),Object(ie.jsx)(G.a,{id:"Present mode",defaultMessage:"Present mode"})]})),Object(ie.jsxs)(L.a,Object(B.a)(Object(B.a)({},Object(W.bindMenu)(r)),{},{keepMounted:!0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[x.map((function(e,t){return Object(ie.jsxs)(ce,{dense:!0,alignItems:"flex-start",onClick:e.handleClick,children:[Object(ie.jsx)(se,{children:e.icon}),Object(ie.jsx)(re,{primary:e.primary,secondary:e.secondary})]},t)})),Object(ie.jsx)(P.a,{component:"li"}),Object(ie.jsxs)(ce,{dense:!0,onClick:function(){ee()("".concat(window.location.origin,"/event/").concat(t))&&a(i({id:"Copied!",defaultMessage:"Copied!"}),{variant:"success"})},children:[Object(ie.jsx)(se,{children:Object(ie.jsx)(Z.a,{color:"inherit",fontSize:"inherit"})}),Object(ie.jsx)(re,{primary:i({id:"Copy Present mode link",defaultMessage:"Copy Present mode link"})})]})]})),Object(ie.jsx)(f.a,{innerRef:l,children:u?Object(ie.jsx)(ne.b,{children:Object(ie.jsx)(le,{})}):null})]})},je=a(256),ue=Object(d.a)((function(e){return Object(j.a)({toolbarLeft:{display:"flex"},toolbarCenter:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},toolbarRight:{display:"flex",justifyContent:"flex-end",alignItems:"center"},openSettingText:{display:"inline-block",cursor:"pointer"},tabAndActionBox:{display:"flex",justifyContent:"space-between",alignItems:"center"}})})),be=function(e){var t=e.loading,a=e.eventDetailData,i=ue(),r=Object(s.g)(),o=Object(s.j)().url,l=c.a.useState(""),d=c.a.useState("name"),j=Object(n.a)(d,2),w=j[0],I=j[1],E=Object(M.a)().formatMessage,B=function(e,t){I(t||"name"),l[1](e)};return Object(ie.jsxs)(c.a.Fragment,{children:[Object(ie.jsxs)(u.a,{position:"static",elevation:2,children:[Object(ie.jsx)(b.a,{maxWidth:"lg",children:Object(ie.jsx)(O.a,{disableGutters:!0,children:t?Object(ie.jsx)(x.a,{}):Object(ie.jsxs)(f.a,{container:!0,children:[Object(ie.jsxs)(f.a,{item:!0,xs:4,className:i.toolbarLeft,children:[Object(ie.jsx)(h.a,{edge:"start",color:"inherit",size:"small",style:{width:48},onClick:function(){return r.goBack()},children:Object(ie.jsx)(k.a,{fontSize:"large"})}),Object(ie.jsxs)(p.a,{children:[Object(ie.jsx)(v.a,{arrow:!0,title:E({id:"Edit event name",defaultMessage:"Edit event name"}),placement:"right",children:Object(ie.jsx)(m.a,{color:"inherit",className:i.openSettingText,onClick:function(){return B(null===a||void 0===a?void 0:a.id,"name")},children:null===a||void 0===a?void 0:a.name})}),Object(ie.jsx)(p.a,{children:Object(ie.jsx)(v.a,{arrow:!0,title:E({id:"Edit event date",defaultMessage:"Edit event date"}),placement:"right",children:Object(ie.jsxs)(m.a,{variant:"body2",color:"inherit",className:i.openSettingText,onClick:function(){return B(null===a||void 0===a?void 0:a.id,"startAt")},children:[Object(ie.jsx)(C.a,{value:null===a||void 0===a?void 0:a.startAt}),", ",Object(ie.jsx)(C.b,{value:null===a||void 0===a?void 0:a.startAt})," ~ ",Object(ie.jsx)(C.a,{value:null===a||void 0===a?void 0:a.endAt}),", ",Object(ie.jsx)(C.b,{value:null===a||void 0===a?void 0:a.endAt})]})})})]})]}),Object(ie.jsxs)(f.a,{item:!0,xs:4,className:i.toolbarCenter,children:[Object(ie.jsx)(v.a,{arrow:!0,title:E({id:"Edit event code",defaultMessage:"Edit event code"}),placement:"right",children:Object(ie.jsxs)(m.a,{color:"inherit",className:i.openSettingText,onClick:function(){return B(null===a||void 0===a?void 0:a.id,"code")},children:["#",null===a||void 0===a?void 0:a.code]})}),Object(ie.jsx)(m.a,{color:"inherit",children:Object(je.a)(null===a||void 0===a?void 0:a.startAt,null===a||void 0===a?void 0:a.endAt,new Date)})]}),Object(ie.jsxs)(f.a,{item:!0,xs:4,className:i.toolbarRight,children:[Object(ie.jsx)(de,{}),Object(ie.jsx)(A.a,{hideUserInfo:!0})]})]})})}),Object(ie.jsx)(g.a,{elevation:0,square:!0,children:Object(ie.jsxs)(b.a,{maxWidth:"lg",className:i.tabAndActionBox,children:[Object(ie.jsx)(y.a,{tabs:[{label:E({id:"Audience_Q&A",defaultMessage:"Audience Q&A"}),to:"".concat(o,"/questions")},{label:E({id:"Live_polls",defaultMessage:"Live polls"}),to:"".concat(o,"/polls")},{label:E({id:"Analitics",defaultMessage:"Analitics"}),to:"".concat(o,"/analytics")}],indicatorColor:"primary",textColor:"primary"}),Object(ie.jsxs)(p.a,{children:[Object(ie.jsx)(v.a,{title:E({id:"Participant mode",defaultMessage:"Participant mode"}),children:Object(ie.jsx)(h.a,{size:"small",onClick:function(e){window.open("/event/".concat(null===a||void 0===a?void 0:a.id))},children:Object(ie.jsx)(z.a,{fontSize:"inherit",color:"inherit"})})}),Object(ie.jsx)(v.a,{title:E({id:"Open_event_settings",defaultMessage:"Open event settings"}),children:Object(ie.jsx)(p.a,{display:"inline-block",children:Object(ie.jsx)(h.a,{size:"small",disabled:t&&!a,onClick:function(e){return B(null===a||void 0===a?void 0:a.id)},children:Object(ie.jsx)(S.a,{fontSize:"inherit",color:"inherit"})})})})]})]})})]}),Object(ie.jsx)(N.a,{eventIdState:l,defaultFocus:w})]})},Oe=a(353),xe=a(252),fe=Object(l.a)((function(){return a.e(15).then(a.bind(null,670))}),{fallback:Object(ie.jsx)(o.a,{})}),he=Object(l.a)((function(){return a.e(30).then(a.bind(null,665))}),{fallback:Object(ie.jsx)(o.a,{})}),pe=Object(l.a)((function(){return a.e(29).then(a.bind(null,666))}),{fallback:Object(ie.jsx)(o.a,{})});t.default=function(){var e=Object(s.j)().path,t=Object(s.i)().id,a=c.a.useState(),i=Object(n.a)(a,2),o=i[0],l=i[1],d=Object(xe.b)({variables:{where:{id:{_eq:t}}},onSubscriptionData:function(e){e.client;var t,a,n=e.subscriptionData;(null===(t=n.data)||void 0===t?void 0:t.event.length)&&l(null===(a=n.data)||void 0===a?void 0:a.event[0])}}).loading;return Object(ie.jsx)(Oe.a,{header:Object(ie.jsx)(be,{eventDetailData:o,loading:d}),body:Object(ie.jsxs)(s.d,{children:[Object(ie.jsx)(s.a,{exact:!0,path:"".concat(e),to:"".concat(e,"/questions")}),Object(ie.jsx)(r.a,{path:"".concat(e,"/questions"),children:Object(ie.jsx)(fe,{eventDetailData:o})}),Object(ie.jsx)(r.a,{path:"".concat(e,"/polls"),children:Object(ie.jsx)(he,{})}),Object(ie.jsx)(r.a,{path:"".concat(e,"/analytics"),children:Object(ie.jsx)(pe,{})})]})})}}}]);
//# sourceMappingURL=25.1dc211fa.chunk.js.map