webpackJsonp([2],{37:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t,o){var r=Math.min(Math.max(t,e),o);return r/(o-t)}function n(e,t){return e*Math.PI*(t.size-t.thickness)}function a(e,t){var o=e.max,r=e.min,a=e.size,i=e.value,s=t.muiTheme.baseTheme.palette,u={root:{position:"relative",display:"inline-block",width:a,height:a},wrapper:{width:a,height:a,display:"inline-block",transition:j.default.create("transform","20s",null,"linear"),transitionTimingFunction:"linear"},svg:{width:a,height:a,position:"relative"},path:{stroke:e.color||s.primary1Color,strokeLinecap:"round",transition:j.default.create("all","1.5s",null,"ease-in-out")}};if("determinate"===e.mode){var d=l(i,r,o);u.path.transition=j.default.create("all","0.3s",null,"linear"),u.path.strokeDasharray=n(d,e)+", "+n(1,e)}return u}Object.defineProperty(t,"__esModule",{value:!0});var i=o(8),s=r(i),u=o(9),d=r(u),c=o(4),f=r(c),p=o(2),h=r(p),m=o(3),y=r(m),_=o(6),v=r(_),g=o(5),b=r(g),x=o(7),T=r(x),w=o(1),P=r(w),C=o(50),S=r(C),k=o(10),j=r(k),M=function(e){function t(){return(0,h.default)(this,t),(0,v.default)(this,(t.__proto__||(0,f.default)(t)).apply(this,arguments))}return(0,b.default)(t,e),(0,y.default)(t,[{key:"componentDidMount",value:function(){this.scalePath(this.refs.path),this.rotateWrapper(this.refs.wrapper)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.scalePathTimer),clearTimeout(this.rotateWrapperTimer)}},{key:"scalePath",value:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;"indeterminate"===this.props.mode&&(o%=3,0===o?(e.style.strokeDasharray=n(0,this.props)+", "+n(1,this.props),e.style.strokeDashoffset=0,e.style.transitionDuration="0ms"):1===o?(e.style.strokeDasharray=n(.7,this.props)+", "+n(1,this.props),e.style.strokeDashoffset=n(-.3,this.props),e.style.transitionDuration="750ms"):(e.style.strokeDasharray=n(.7,this.props)+", "+n(1,this.props),e.style.strokeDashoffset=n(-1,this.props),e.style.transitionDuration="850ms"),this.scalePathTimer=setTimeout(function(){return t.scalePath(e,o+1)},o?750:250))}},{key:"rotateWrapper",value:function(e){var t=this;"indeterminate"===this.props.mode&&(S.default.set(e.style,"transform","rotate(0deg)"),S.default.set(e.style,"transitionDuration","0ms"),setTimeout(function(){S.default.set(e.style,"transform","rotate(1800deg)"),S.default.set(e.style,"transitionDuration","10s"),S.default.set(e.style,"transitionTimingFunction","linear")},50),this.rotateWrapperTimer=setTimeout(function(){return t.rotateWrapper(e)},10050))}},{key:"render",value:function(){var e=this.props,t=e.style,o=e.innerStyle,r=e.size,l=e.thickness,n=(0,d.default)(e,["style","innerStyle","size","thickness"]),i=this.context.muiTheme.prepareStyles,u=a(this.props,this.context);return P.default.createElement("div",(0,s.default)({},n,{style:i((0,T.default)(u.root,t))}),P.default.createElement("div",{ref:"wrapper",style:i((0,T.default)(u.wrapper,o))},P.default.createElement("svg",{viewBox:"0 0 "+r+" "+r,style:i(u.svg)},P.default.createElement("circle",{ref:"path",style:i(u.path),cx:r/2,cy:r/2,r:(r-l)/2,fill:"none",strokeWidth:l,strokeMiterlimit:"20"}))))}}]),t}(w.Component);M.defaultProps={mode:"indeterminate",value:0,min:0,max:100,size:40,thickness:3.5},M.contextTypes={muiTheme:w.PropTypes.object.isRequired},t.default=M},38:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(37),n=r(l);t.default=n.default},56:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TextField=void 0;var l=o(8),n=r(l),a=o(9),i=r(a),s=o(1),u=r(s),d=o(72),c=r(d),f=function(e){var t=e.input,o=e.label,r=e.meta,l=r.touched,a=r.error,s=(0,i.default)(e,["input","label","meta"]);return u.default.createElement(c.default,(0,n.default)({hintText:o,floatingLabelText:o,errorText:l&&a},t,s))};t.TextField=f,f.propTypes={input:s.PropTypes.object,label:s.PropTypes.string,meta:s.PropTypes.object},t.default=f},57:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(56),n=r(l);t.default=n.default},67:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t,o){return{root:{position:"relative"},textarea:{height:o.height,width:"100%",resize:"none",font:"inherit",padding:0,cursor:e.disabled?"not-allowed":"initial"},shadow:{resize:"none",overflow:"hidden",visibility:"hidden",position:"absolute",height:"initial"}}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(8),a=r(n),i=o(9),s=r(i),u=o(4),d=r(u),c=o(2),f=r(c),p=o(3),h=r(p),m=o(6),y=r(m),_=o(5),v=r(_),g=o(7),b=r(g),x=o(1),T=r(x),w=o(39),P=r(w),C=24,S=function(e){function t(){var e,o,r,l;(0,f.default)(this,t);for(var n=arguments.length,a=Array(n),i=0;i<n;i++)a[i]=arguments[i];return o=r=(0,y.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(a))),r.state={height:null},r.handleResize=function(e){r.syncHeightWithShadow(void 0,e)},r.handleChange=function(e){r.syncHeightWithShadow(e.target.value),r.props.hasOwnProperty("valueLink")&&r.props.valueLink.requestChange(e.target.value),r.props.onChange&&r.props.onChange(e)},l=o,(0,y.default)(r,l)}return(0,v.default)(t,e),(0,h.default)(t,[{key:"componentWillMount",value:function(){this.setState({height:this.props.rows*C})}},{key:"componentDidMount",value:function(){this.syncHeightWithShadow()}},{key:"componentWillReceiveProps",value:function(e){e.value!==this.props.value&&this.syncHeightWithShadow(e.value)}},{key:"getInputNode",value:function(){return this.refs.input}},{key:"setValue",value:function(e){this.getInputNode().value=e,this.syncHeightWithShadow(e)}},{key:"syncHeightWithShadow",value:function(e,t){var o=this.refs.shadow;void 0!==e&&(o.value=e);var r=o.scrollHeight;void 0!==r&&(this.props.rowsMax>=this.props.rows&&(r=Math.min(this.props.rowsMax*C,r)),r=Math.max(r,C),this.state.height!==r&&(this.setState({height:r}),this.props.onHeightChange&&this.props.onHeightChange(t,r)))}},{key:"render",value:function(){var e=this.props,t=(e.onChange,e.onHeightChange,e.rows,e.rowsMax,e.shadowStyle),o=e.style,r=e.textareaStyle,n=(e.valueLink,(0,s.default)(e,["onChange","onHeightChange","rows","rowsMax","shadowStyle","style","textareaStyle","valueLink"])),i=this.context.muiTheme.prepareStyles,u=l(this.props,this.context,this.state),d=(0,b.default)(u.root,o),c=(0,b.default)(u.textarea,r),f=(0,b.default)({},c,u.shadow,t);return this.props.hasOwnProperty("valueLink")&&(n.value=this.props.valueLink.value),T.default.createElement("div",{style:i(d)},T.default.createElement(P.default,{target:"window",onResize:this.handleResize}),T.default.createElement("textarea",{ref:"shadow",style:i(f),tabIndex:"-1",rows:this.props.rows,defaultValue:this.props.defaultValue,readOnly:!0,value:this.props.value,valueLink:this.props.valueLink}),T.default.createElement("textarea",(0,a.default)({},n,{ref:"input",rows:this.props.rows,style:i(c),onChange:this.handleChange})))}}]),t}(x.Component);S.defaultProps={rows:1},S.contextTypes={muiTheme:x.PropTypes.object.isRequired},t.default=S},68:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e){return""!==e&&void 0!==e&&null!==e}Object.defineProperty(t,"__esModule",{value:!0});var n=o(8),a=r(n),i=o(9),s=r(i),u=o(4),d=r(u),c=o(2),f=r(c),p=o(3),h=r(p),m=o(6),y=r(m),_=o(5),v=r(_),g=o(7),b=r(g),x=o(1),T=r(x),w=o(18),P=r(w),C=o(34),S=r(C),k=o(26),j=o(10),M=r(j),E=o(67),N=r(E),L=o(69),O=r(L),F=o(70),D=r(F),W=o(71),z=r(W),H=o(35),R=(r(H),function(e,t,o){var r=t.muiTheme,l=r.baseTheme,n=r.textField,a=n.floatingLabelColor,i=n.focusColor,s=n.textColor,u=n.disabledTextColor,d=n.backgroundColor,c=n.hintColor,f=n.errorColor,p={root:{fontSize:16,lineHeight:"24px",width:e.fullWidth?"100%":256,height:24*(e.rows-1)+(e.floatingLabelText?72:48),display:"inline-block",position:"relative",backgroundColor:d,fontFamily:l.fontFamily,transition:M.default.easeOut("200ms","height")},error:{position:"relative",bottom:2,fontSize:12,lineHeight:"12px",color:f,transition:M.default.easeOut()},floatingLabel:{color:c,pointerEvents:"none"},input:{padding:0,position:"relative",width:"100%",border:"none",outline:"none",backgroundColor:"rgba(0,0,0,0)",color:e.disabled?u:s,cursor:e.disabled?"not-allowed":"initial",font:"inherit",appearance:"textfield",WebkitTapHighlightColor:"rgba(0,0,0,0)"},textarea:{}};return(0,b.default)(p.error,e.errorStyle),(0,b.default)(p.textarea,p.input,{marginTop:e.floatingLabelText?36:12,marginBottom:e.floatingLabelText?-36:-12,boxSizing:"border-box",font:"inherit"}),p.input.height="100%",o.hasValue&&(p.floatingLabel.color=(0,k.fade)(e.disabled?u:a,.5)),o.isFocused&&(p.floatingLabel.color=i),e.floatingLabelText&&(p.input.boxSizing="border-box",e.multiLine||(p.input.marginTop=14),o.errorText&&(p.error.bottom=e.multiLine?3:p.error.fontSize+3)),o.errorText&&o.isFocused&&(p.floatingLabel.color=p.error.color),p}),q=function(e){function t(){var e,o,r,n;(0,f.default)(this,t);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return o=r=(0,y.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(i))),r.state={isFocused:!1,errorText:void 0,hasValue:!1,isClean:!0},r.handleInputBlur=function(e){r.setState({isFocused:!1}),r.props.onBlur&&r.props.onBlur(e)},r.handleInputChange=function(e){r.setState({hasValue:l(e.target.value),isClean:!1}),r.props.onChange&&r.props.onChange(e,e.target.value)},r.handleInputFocus=function(e){r.props.disabled||(r.setState({isFocused:!0}),r.props.onFocus&&r.props.onFocus(e))},r.handleHeightChange=function(e,t){var o=t+24;r.props.floatingLabelText&&(o+=24),P.default.findDOMNode(r).style.height=o+"px"},n=o,(0,y.default)(r,n)}return(0,v.default)(t,e),(0,h.default)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.children,o=e.name,r=e.hintText,n=e.floatingLabelText,a=(e.id,t?t.props:this.props);this.setState({errorText:this.props.errorText,hasValue:l(a.value)||l(a.defaultValue)});var i=o+"-"+r+"-"+n+"-"+Math.floor(65535*Math.random());this.uniqueId=i.replace(/[^A-Za-z0-9-]/gi,"")}},{key:"componentWillReceiveProps",value:function(e){if(e.errorText!==this.props.errorText&&this.setState({errorText:e.errorText}),e.children&&e.children.props&&(e=e.children.props),e.hasOwnProperty("value")){var t=l(e.value)||this.state.isClean&&l(e.defaultValue);t!==this.state.hasValue&&this.setState({hasValue:t})}}},{key:"shouldComponentUpdate",value:function(e,t,o){return!(0,S.default)(this.props,e)||!(0,S.default)(this.state,t)||!(0,S.default)(this.context,o)}},{key:"blur",value:function(){this.input&&this.getInputNode().blur()}},{key:"focus",value:function(){this.input&&this.getInputNode().focus()}},{key:"select",value:function(){this.input&&this.getInputNode().select()}},{key:"getValue",value:function(){return this.input?this.getInputNode().value:void 0}},{key:"getInputNode",value:function(){return this.props.children||this.props.multiLine?this.input.getInputNode():P.default.findDOMNode(this.input)}},{key:"_isControlled",value:function(){return this.props.hasOwnProperty("value")}},{key:"render",value:function(){var e=this,t=this.props,o=t.children,r=t.className,l=t.disabled,n=t.errorStyle,i=(t.errorText,t.floatingLabelFixed),u=(t.floatingLabelFocusStyle,t.floatingLabelStyle,t.floatingLabelText),d=(t.fullWidth,t.hintText),c=t.hintStyle,f=t.id,p=t.inputStyle,h=t.multiLine,m=(t.onBlur,t.onChange,t.onFocus,t.style),y=t.type,_=t.underlineDisabledStyle,v=t.underlineFocusStyle,g=t.underlineShow,x=t.underlineStyle,w=t.rows,P=t.rowsMax,C=t.textareaStyle,S=(0,s.default)(t,["children","className","disabled","errorStyle","errorText","floatingLabelFixed","floatingLabelFocusStyle","floatingLabelStyle","floatingLabelText","fullWidth","hintText","hintStyle","id","inputStyle","multiLine","onBlur","onChange","onFocus","style","type","underlineDisabledStyle","underlineFocusStyle","underlineShow","underlineStyle","rows","rowsMax","textareaStyle"]),k=this.context.muiTheme.prepareStyles,j=R(this.props,this.context,this.state),M=f||this.uniqueId,E=this.state.errorText&&T.default.createElement("div",{style:k(j.error)},this.state.errorText),L=u&&T.default.createElement(D.default,{muiTheme:this.context.muiTheme,style:(0,b.default)(j.floatingLabel,this.props.floatingLabelStyle),shrinkStyle:this.props.floatingLabelFocusStyle,htmlFor:M,shrink:this.state.hasValue||this.state.isFocused||i,disabled:l},u),F={id:M,ref:function(t){return e.input=t},disabled:this.props.disabled,onBlur:this.handleInputBlur,onChange:this.handleInputChange,onFocus:this.handleInputFocus},W=(0,b.default)(j.input,p),H=void 0;H=o?T.default.cloneElement(o,(0,a.default)({},F,o.props,{style:(0,b.default)(W,o.props.style)})):h?T.default.createElement(N.default,(0,a.default)({},S,F,{style:W,rows:w,rowsMax:P,onHeightChange:this.handleHeightChange,textareaStyle:(0,b.default)(j.textarea,C)})):T.default.createElement("input",(0,a.default)({},S,F,{style:k(W),type:y}));var q={};return o&&(q=S),T.default.createElement("div",(0,a.default)({},q,{className:r,style:k((0,b.default)(j.root,m))}),L,d?T.default.createElement(O.default,{muiTheme:this.context.muiTheme,show:!(this.state.hasValue||u&&!this.state.isFocused)||!this.state.hasValue&&u&&i&&!this.state.isFocused,style:c,text:d}):null,H,g?T.default.createElement(z.default,{disabled:l,disabledStyle:_,error:!!this.state.errorText,errorStyle:n,focus:this.state.isFocused,focusStyle:v,muiTheme:this.context.muiTheme,style:x}):null,E)}}]),t}(x.Component);q.defaultProps={disabled:!1,floatingLabelFixed:!1,multiLine:!1,fullWidth:!1,type:"text",underlineShow:!0,rows:1},q.contextTypes={muiTheme:x.PropTypes.object.isRequired},t.default=q},69:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.muiTheme.textField.hintColor,o=e.show;return{root:{position:"absolute",opacity:o?1:0,color:t,transition:d.default.easeOut(),bottom:12}}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(7),a=r(n),i=o(1),s=r(i),u=o(10),d=r(u),c=function(e){var t=e.muiTheme.prepareStyles,o=e.style,r=e.text,n=l(e);return s.default.createElement("div",{style:t((0,a.default)(n.root,o))},r)};c.defaultProps={show:!0},t.default=c},70:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e){var t={position:"absolute",lineHeight:"22px",top:38,transition:d.default.easeOut(),zIndex:1,cursor:e.disabled?"not-allowed":"text",transform:"scale(1) translate(0, 0)",transformOrigin:"left top",pointerEvents:"auto",userSelect:"none"},o=e.shrink?(0,a.default)({transform:"scale(0.75) translate(0, -28px)",pointerEvents:"none"},e.shrinkStyle):null;return{root:(0,a.default)(t,e.style,o)}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(7),a=r(n),i=o(1),s=r(i),u=o(10),d=r(u),c=function(e){var t=e.muiTheme,o=e.className,r=e.children,n=e.htmlFor,a=e.onTouchTap,i=t.prepareStyles,u=l(e);return s.default.createElement("label",{className:o,style:i(u.root),htmlFor:n,onTouchTap:a},r)};c.defaultProps={disabled:!1,shrink:!1},t.default=c},71:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(7),n=r(l),a=o(1),i=r(a),s=o(10),u=r(s),d=({disabled:a.PropTypes.bool,disabledStyle:a.PropTypes.object,error:a.PropTypes.bool,errorStyle:a.PropTypes.object,focus:a.PropTypes.bool,focusStyle:a.PropTypes.object,muiTheme:a.PropTypes.object.isRequired,style:a.PropTypes.object},{disabled:!1,disabledStyle:{},error:!1,errorStyle:{},focus:!1,focusStyle:{},style:{}}),c=function(e){var t=e.disabled,o=e.disabledStyle,r=e.error,l=e.errorStyle,a=e.focus,s=e.focusStyle,d=e.muiTheme,c=e.style,f=l.color,p=d.prepareStyles,h=d.textField,m=h.borderColor,y=h.disabledTextColor,_=h.errorColor,v=h.focusColor,g={root:{border:"none",borderBottom:"solid 1px",borderColor:m,bottom:8,boxSizing:"content-box",margin:0,position:"absolute",width:"100%"},disabled:{borderBottom:"dotted 2px",borderColor:y,cursor:"not-allowed"},focus:{borderBottom:"solid 2px",borderColor:v,transform:"scaleX(0)",transition:u.default.easeOut()},error:{borderColor:f?f:_,transform:"scaleX(1)"}},b=(0,n.default)({},g.root,c),x=(0,n.default)({},b,g.focus,s);return t&&(b=(0,n.default)({},b,g.disabled,o)),a&&(x=(0,n.default)({},x,{transform:"scaleX(1)"})),r&&(x=(0,n.default)({},x,g.error)),i.default.createElement("div",null,i.default.createElement("hr",{style:p(b)}),i.default.createElement("hr",{style:p(x)}))};c.defaultProps=d,t.default=c},72:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(68),n=r(l);t.default=n.default},370:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,n,a,i,s=o(4),u=r(s),d=o(2),c=r(d),f=o(3),p=r(f),h=o(6),m=r(h),y=o(5),_=r(y),v=o(1),g=r(v),b=o(641),x=r(b),T=o(136),w=r(T),P=o(112),C=o(57),S=r(C),k=o(445),j=r(k),M="newProject",E=function(e){var t={};return e.name||(t.name="Required"),t},N=(l=(0,P.reduxForm)({form:M,validate:E}),l((i=a=function(e){function t(){var e,o,r,l;(0,c.default)(this,t);for(var n=arguments.length,a=Array(n),i=0;i<n;i++)a[i]=arguments[i];return o=r=(0,m.default)(this,(e=t.__proto__||(0,u.default)(t)).call.apply(e,[this].concat(a))),r.state={open:r.props.open||!1},r.close=function(){r.setState({open:!1}),r.props.onRequestClose&&r.props.onRequestClose()},r.handleSubmitClick=function(e){e.preventDefault(),r.props.dispatch((0,P.submit)(M))},l=o,(0,m.default)(r,l)}return(0,_.default)(t,e),(0,p.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;e.open&&(this.setState({open:!0}),setTimeout(function(){t.refs&&t.refs.projectNameField&&t.refs.projectNameField.focus()},500))}},{key:"render",value:function(){var e=this.state,t=e.open,o=e.error,r=this.props.handleSubmit,l=[g.default.createElement(w.default,{label:"Cancel",secondary:!0,onClick:this.close}),g.default.createElement(w.default,{label:"Create",primary:!0,onClick:this.handleSubmitClick})];return g.default.createElement(x.default,{title:"New Project",modal:!1,actions:l,open:t,onRequestClose:this.close,contentClassName:j.default.container},g.default.createElement("div",{className:j.default.inputs},g.default.createElement("form",{onSubmit:r},g.default.createElement(P.Field,{name:"name",component:S.default,error:o||null,label:"Project Name"}))))}}]),t}(v.Component),a.propTypes={open:v.PropTypes.bool,onRequestClose:v.PropTypes.func.isRequired,handleSubmit:v.PropTypes.func.isRequired,dispatch:v.PropTypes.func.isRequired},n=i))||n);t.default=N},371:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.NewProjectTile=void 0;var l=o(1),n=r(l),a=o(25),i=r(a),s=o(670),u=r(s),d=o(446),c=r(d),f="6rem",p={width:f,height:f},h="#979797",m="#616161",y=t.NewProjectTile=function(e){var t=e.onClick;return n.default.createElement(i.default,{className:c.default.container,onClick:t},n.default.createElement(u.default,{color:h,hoverColor:m,style:p}))};y.propTypes={onClick:l.PropTypes.func},t.default=y},372:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ProjectTile=void 0;var l=o(21),n=r(l),a=o(1),i=r(a),s=o(25),u=r(s),d=o(447),c=r(d),f=t.ProjectTile=function(e){var t=e.project,o=e.onSelect;return i.default.createElement(u.default,{key:"Project-"+t.name,className:c.default.container},i.default.createElement("div",{className:c.default.top},i.default.createElement("span",{className:c.default.name,onClick:function(){return o(t)}},t.name)),i.default.createElement("span",{className:c.default.owner},(0,n.default)(t.owner)?t.owner.displayName:t.owner||"No Owner"))};f.propTypes={project:a.PropTypes.object.isRequired,onSelect:a.PropTypes.func.isRequired},t.default=f},373:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,n,a,i,s,u=o(4),d=r(u),c=o(2),f=r(c),p=o(3),h=r(p),m=o(6),y=r(m),_=o(5),v=r(_),g=o(108),b=r(g),x=o(1),T=r(x),w=o(43),P=o(372),C=r(P),S=o(371),k=r(S),j=o(370),M=r(j),E=o(38),N=r(E),L=o(448),O=r(L),F=o(22),D=o(41),W=D.helpers.dataToJS,z=D.helpers.pathToJS,H=D.helpers.isLoaded,R=D.helpers.isEmpty,q=(l=(0,D.firebase)(function(e){e.params,e.auth;return[{path:"projects",populates:[{child:"owner",root:"users"}]}]}),n=(0,F.connect)(function(e,t){var o=e.firebase;t.params;return{projects:W(o,"projects"),auth:z(o,"auth")}}),l(a=n((s=i=function(e){function t(){var e,o,r,l;(0,f.default)(this,t);for(var n=arguments.length,a=Array(n),i=0;i<n;i++)a[i]=arguments[i];return o=r=(0,y.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(a))),r.state={newProjectModal:!1,addProjectModal:!1},r.newSubmit=function(e){var t=r.props,o=t.auth,l=t.firebase.push;o.uid&&(e.owner=o.uid),l("projects",e).then(function(){return r.setState({newProjectModal:!1})}).catch(function(e){console.error("error creating new project",e)})},r.deleteProject=function(e){var t=e.name;return r.props.firebase.remove("projects/"+t)},r.toggleModal=function(e,t){var o={};o[e+"Modal"]=!r.state[e+"Modal"],r.setState(o)},l=o,(0,y.default)(r,l)}return(0,v.default)(t,e),(0,h.default)(t,[{key:"render",value:function(){var e=this;if(this.props.children)return this.props.children;var t=this.props.projects,o=this.state.newProjectModal;return H(t)?T.default.createElement("div",{className:O.default.container},o&&T.default.createElement(M.default,{open:o,onSubmit:this.newSubmit,onRequestClose:function(){return e.toggleModal("newProject")}}),T.default.createElement("div",{className:O.default.tiles},T.default.createElement(k.default,{onClick:function(){return e.toggleModal("newProject")}}),!R(t)&&(0,b.default)(t,function(t,o){return T.default.createElement(C.default,{key:t.name+"-Collab-"+o,project:t,onCollabClick:e.collabClick,onSelect:function(){return e.context.router.push(w.LIST_PATH+"/"+o)},onDelete:e.deleteProject})}))):T.default.createElement("div",{className:O.default.progress},T.default.createElement(N.default,null))}}]),t}(x.Component),i.contextTypes={router:T.default.PropTypes.object.isRequired},i.propTypes={account:x.PropTypes.object,projects:x.PropTypes.object,firebase:x.PropTypes.object,auth:x.PropTypes.object,children:x.PropTypes.object,params:x.PropTypes.object},a=s))||a)||a);t.default=q},445:function(e,t){e.exports={buttons:"NewProjectDialog__buttons___2Bn0Y",flex:"NewProjectDialog__flex___2JNov","flex-column":"NewProjectDialog__flex-column___3BKWi","flex-column-center":"NewProjectDialog__flex-column-center___3Bdbn","flex-row":"NewProjectDialog__flex-row___2iJU8","flex-row-center":"NewProjectDialog__flex-row-center___1vLVp",inputs:"NewProjectDialog__inputs___16qlL",container:"NewProjectDialog__container___1QT5I"}},446:function(e,t){e.exports={container:"NewProjectTile__container___3xd1L",flex:"NewProjectTile__flex___1e5i7","flex-column":"NewProjectTile__flex-column___1o2FT","flex-column-center":"NewProjectTile__flex-column-center___1e6PW","flex-row":"NewProjectTile__flex-row___3gPZq","flex-row-center":"NewProjectTile__flex-row-center___x91Mr"}},447:function(e,t){e.exports={collaborator:"ProjectTile__collaborator___2wjlR",collaborators:"ProjectTile__collaborators___1txml",container:"ProjectTile__container___2J2F4",flex:"ProjectTile__flex___1Vox8","flex-column":"ProjectTile__flex-column___ryGiw","flex-column-center":"ProjectTile__flex-column-center___Y_n72","flex-row":"ProjectTile__flex-row___RDx5g","flex-row-center":"ProjectTile__flex-row-center___EsWZV",settings:"ProjectTile__settings___2DVQ_",top:"ProjectTile__top___3fHhQ",name:"ProjectTile__name___2aqYF",owner:"ProjectTile__owner___1_ecb",add:"ProjectTile__add___JTxlA"}},448:function(e,t){e.exports={container:"ProjectsContainer__container___2F95C",flex:"ProjectsContainer__flex___3ELAR","flex-column":"ProjectsContainer__flex-column___hL2T6","flex-column-center":"ProjectsContainer__flex-column-center___qa2bk","flex-row":"ProjectsContainer__flex-row___2y9mt","flex-row-center":"ProjectsContainer__flex-row-center___1dMDL",progress:"ProjectsContainer__progress___2LM12",tiles:"ProjectsContainer__tiles___25b_M"}},640:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var o=e.autoScrollBodyContent,r=e.open,l=t.muiTheme,n=l.baseTheme,a=n.spacing,i=n.palette,s=l.dialog,u=l.zIndex,d=a.desktopGutter,c="1px solid "+i.borderColor;return{root:{position:"fixed",boxSizing:"border-box",WebkitTapHighlightColor:"rgba(0,0,0,0)",zIndex:u.dialog,top:0,left:r?0:-1e4,width:"100%",height:"100%",transition:r?E.default.easeOut("0ms","left","0ms"):E.default.easeOut("0ms","left","450ms")},content:{boxSizing:"border-box",WebkitTapHighlightColor:"rgba(0,0,0,0)",transition:E.default.easeOut(),position:"relative",width:"75%",maxWidth:12*a.desktopKeylineIncrement,margin:"0 auto",zIndex:u.dialog},actionsContainer:{boxSizing:"border-box",WebkitTapHighlightColor:"rgba(0,0,0,0)",padding:8,width:"100%",textAlign:"right",marginTop:o?-1:0,borderTop:o?c:"none"},overlay:{zIndex:u.dialogOverlay},title:{margin:0,padding:d+"px "+d+"px 20px "+d+"px",color:i.textColor,fontSize:s.titleFontSize,lineHeight:"32px",fontWeight:400,marginBottom:o?-1:0,borderBottom:o?c:"none"},body:{fontSize:s.bodyFontSize,color:s.bodyColor,padding:(e.title?0:d)+"px "+d+"px "+d+"px",boxSizing:"border-box",overflowY:o?"auto":"hidden"}}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(8),a=r(n),i=o(9),s=r(i),u=o(4),d=r(u),c=o(2),f=r(c),p=o(3),h=r(p),m=o(6),y=r(m),_=o(5),v=r(_),g=o(7),b=r(g),x=o(1),T=r(x),w=o(18),P=r(w),C=o(39),S=r(C),k=o(120),j=r(k),M=o(10),E=r(M),N=o(662),L=r(N),O=o(303),F=r(O),D=o(25),W=r(D),z=o(198),H=r(z),R=function(e){function t(){var e,o,r,l;(0,f.default)(this,t);for(var n=arguments.length,a=Array(n),i=0;i<n;i++)a[i]=arguments[i];return o=r=(0,y.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(a))),r.state={style:{}},l=o,(0,y.default)(r,l)}return(0,v.default)(t,e),(0,h.default)(t,[{key:"componentWillUnmount",value:function(){clearTimeout(this.enterTimeout),clearTimeout(this.leaveTimeout)}},{key:"componentWillEnter",value:function(e){this.componentWillAppear(e)}},{key:"componentWillAppear",value:function(e){var t=this.context.muiTheme.baseTheme.spacing;this.setState({style:{opacity:1,transform:"translate(0, "+t.desktopKeylineIncrement+"px)"}}),this.enterTimeout=setTimeout(e,450)}},{key:"componentWillLeave",value:function(e){this.setState({style:{opacity:0,transform:"translate(0, 0)"}}),this.leaveTimeout=setTimeout(e,450)}},{key:"render",value:function(){var e=this.props,t=e.style,o=e.children,r=(0,s.default)(e,["style","children"]),l=this.context.muiTheme.prepareStyles;return T.default.createElement("div",(0,a.default)({},r,{style:l((0,b.default)({},this.state.style,t))}),o)}}]),t}(x.Component);R.contextTypes={muiTheme:x.PropTypes.object.isRequired};var q=function(e){function t(){var e,o,r,l;(0,f.default)(this,t);for(var n=arguments.length,a=Array(n),i=0;i<n;i++)a[i]=arguments[i];return o=r=(0,y.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(a))),r.handleTouchTapOverlay=function(){r.requestClose(!1)},r.handleKeyUp=function(e){"esc"===(0,j.default)(e)&&r.requestClose(!1)},r.handleResize=function(){r.positionDialog()},l=o,(0,y.default)(r,l)}return(0,v.default)(t,e),(0,h.default)(t,[{key:"componentDidMount",value:function(){this.positionDialog()}},{key:"componentDidUpdate",value:function(){this.positionDialog()}},{key:"positionDialog",value:function(){var e=this.props,t=e.actions,o=e.autoDetectWindowHeight,r=e.autoScrollBodyContent,n=e.bodyStyle,a=e.open,i=e.repositionOnUpdate,s=e.title;if(a){var u=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,d=P.default.findDOMNode(this),c=P.default.findDOMNode(this.refs.dialogWindow),f=P.default.findDOMNode(this.refs.dialogContent),p=16;c.style.height="",f.style.height="";var h=c.offsetHeight,m=(u-h)/2-64;if(m<p&&(m=p),!i&&d.style.paddingTop||(d.style.paddingTop=m+"px"),o||r){var y=l(this.props,this.context);y.body=(0,b.default)(y.body,n);var _=u-128;s&&(_-=f.previousSibling.offsetHeight),T.default.Children.count(t)&&(_-=f.nextSibling.offsetHeight),f.style.maxHeight=_+"px"}}}},{key:"requestClose",value:function(e){!e&&this.props.modal||this.props.onRequestClose&&this.props.onRequestClose(!!e)}},{key:"render",value:function(){var e=this.props,t=e.actions,o=e.actionsContainerClassName,r=e.actionsContainerStyle,n=e.bodyClassName,a=e.bodyStyle,i=e.children,s=e.className,u=e.contentClassName,d=e.contentStyle,c=e.overlayClassName,f=e.overlayStyle,p=e.open,h=e.titleClassName,m=e.titleStyle,y=e.title,_=e.style,v=this.context.muiTheme.prepareStyles,g=l(this.props,this.context);g.root=(0,b.default)(g.root,_),g.content=(0,b.default)(g.content,d),g.body=(0,b.default)(g.body,a),g.actionsContainer=(0,b.default)(g.actionsContainer,r),g.overlay=(0,b.default)(g.overlay,f),g.title=(0,b.default)(g.title,m);var x=T.default.Children.count(t)>0&&T.default.createElement("div",{className:o,style:v(g.actionsContainer)},T.default.Children.toArray(t)),w=y;return T.default.isValidElement(y)?w=T.default.cloneElement(y,{className:y.props.className||h,style:v((0,b.default)(g.title,y.props.style))}):"string"==typeof y&&(w=T.default.createElement("h3",{className:h,style:v(g.title)},y)),T.default.createElement("div",{className:s,style:v(g.root)},p&&T.default.createElement(S.default,{target:"window",onKeyUp:this.handleKeyUp,onResize:this.handleResize}),T.default.createElement(H.default,{component:"div",ref:"dialogWindow",transitionAppear:!0,transitionAppearTimeout:450,transitionEnter:!0,transitionEnterTimeout:450},p&&T.default.createElement(R,{className:u,style:g.content},T.default.createElement(W.default,{zDepth:4},w,T.default.createElement("div",{ref:"dialogContent",className:n,style:v(g.body)},i),x))),T.default.createElement(L.default,{show:p,className:c,style:g.overlay,onTouchTap:this.handleTouchTapOverlay}))}}]),t}(x.Component);q.contextTypes={muiTheme:x.PropTypes.object.isRequired};var I=function(e){function t(){var e,o,r,l;(0,f.default)(this,t);for(var n=arguments.length,a=Array(n),i=0;i<n;i++)a[i]=arguments[i];return o=r=(0,y.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(a))),r.renderLayer=function(){return T.default.createElement(q,r.props)},l=o,(0,y.default)(r,l)}return(0,v.default)(t,e),(0,h.default)(t,[{key:"render",value:function(){return T.default.createElement(F.default,{render:this.renderLayer,open:!0,useLayerForClickAway:!1})}}]),t}(x.Component);I.contextTypes={muiTheme:x.PropTypes.object.isRequired},I.defaultProps={autoDetectWindowHeight:!0,autoScrollBodyContent:!1,modal:!1,repositionOnUpdate:!0},t.default=I},641:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(640),n=r(l);t.default=n.default},659:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(4),n=r(l),a=o(2),i=r(a),s=o(3),u=r(s),d=o(6),c=r(d),f=o(5),p=r(f),h=o(1),m=null,y=0,_=function(e){function t(){var e,o,r,l;(0,i.default)(this,t);for(var a=arguments.length,s=Array(a),u=0;u<a;u++)s[u]=arguments[u];return o=r=(0,c.default)(this,(e=t.__proto__||(0,n.default)(t)).call.apply(e,[this].concat(s))),r.locked=!1,l=o,(0,c.default)(r,l)}return(0,p.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.props.lock===!0&&this.preventScrolling()}},{key:"componentWillReceiveProps",value:function(e){this.props.lock!==e.lock&&(e.lock?this.preventScrolling():this.allowScrolling())}},{key:"componentWillUnmount",value:function(){this.allowScrolling()}},{key:"preventScrolling",value:function(){if(this.locked!==!0&&(y+=1,
this.locked=!0,1===y)){var e=document.getElementsByTagName("body")[0];m=e.style.overflow,e.style.overflow="hidden"}}},{key:"allowScrolling",value:function(){if(this.locked===!0&&(y-=1,this.locked=!1),0===y&&null!==m){var e=document.getElementsByTagName("body")[0];e.style.overflow=m||"",m=null}}},{key:"render",value:function(){return null}}]),t}(h.Component);t.default=_},662:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var o=t.muiTheme.overlay,r={root:{position:"fixed",height:"100%",width:"100%",top:0,left:"-100%",opacity:0,backgroundColor:o.backgroundColor,WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",willChange:"opacity",transform:"translateZ(0)",transition:e.transitionEnabled&&P.default.easeOut("0ms","left","400ms")+", "+P.default.easeOut("400ms","opacity")}};return e.show&&(0,b.default)(r.root,{left:0,opacity:1,transition:P.default.easeOut("0ms","left")+", "+P.default.easeOut("400ms","opacity")}),r}Object.defineProperty(t,"__esModule",{value:!0});var n=o(8),a=r(n),i=o(9),s=r(i),u=o(4),d=r(u),c=o(2),f=r(c),p=o(3),h=r(p),m=o(6),y=r(m),_=o(5),v=r(_),g=o(7),b=r(g),x=o(1),T=r(x),w=o(10),P=r(w),C=o(659),S=r(C),k=function(e){function t(){return(0,f.default)(this,t),(0,y.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,h.default)(t,[{key:"setOpacity",value:function(e){this.refs.overlay.style.opacity=e}},{key:"render",value:function(){var e=this.props,t=e.autoLockScrolling,o=e.show,r=e.style,n=(e.transitionEnabled,(0,s.default)(e,["autoLockScrolling","show","style","transitionEnabled"])),i=this.context.muiTheme.prepareStyles,u=l(this.props,this.context);return T.default.createElement("div",(0,a.default)({},n,{ref:"overlay",style:i((0,b.default)(u.root,r))}),t&&T.default.createElement(S.default,{lock:o}))}}]),t}(x.Component);k.defaultProps={autoLockScrolling:!0,style:{},transitionEnabled:!0},k.contextTypes={muiTheme:x.PropTypes.object.isRequired},t.default=k},670:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(1),n=r(l),a=o(54),i=r(a),s=o(49),u=r(s),d=function(e){return n.default.createElement(u.default,e,n.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}))};d=(0,i.default)(d),d.displayName="ContentAddCircle",d.muiName="SvgIcon",t.default=d}});