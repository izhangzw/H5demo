/*
 * JQuery zTree core v3.5.16
 * http://zTree.me/
 */
(function(p){var G,H,I,J,K,L,r={},u={},v={},M={treeId:"",treeObj:null,view:{addDiyDom:null,autoCancelSelected:!0,dblClickExpand:!0,expandSpeed:"fast",fontCss:{},nameIsHTML:!1,selectedMulti:!0,showIcon:!0,showLine:!0,showTitle:!0,txtSelectedEnable:!1},data:{key:{children:"children",name:"name",title:"",url:"url"},simpleData:{enable:!1,idKey:"id",pIdKey:"pId",rootPId:null},keep:{parent:!1,leaf:!1}},async:{enable:!1,contentType:"application/x-www-form-urlencoded",type:"post",dataType:"text",url:"",autoParam:[],
otherParam:[],dataFilter:null},callback:{beforeAsync:null,beforeClick:null,beforeDblClick:null,beforeRightClick:null,beforeMouseDown:null,beforeMouseUp:null,beforeExpand:null,beforeCollapse:null,beforeRemove:null,onAsyncError:null,onAsyncSuccess:null,onNodeCreated:null,onClick:null,onDblClick:null,onRightClick:null,onMouseDown:null,onMouseUp:null,onExpand:null,onCollapse:null,onRemove:null}},w=[function(b){var a=b.treeObj,c=e.event;a.bind(c.NODECREATED,function(a,c,g){j.apply(b.callback.onNodeCreated,
[a,c,g])});a.bind(c.CLICK,function(a,c,g,l,h){j.apply(b.callback.onClick,[c,g,l,h])});a.bind(c.EXPAND,function(a,c,g){j.apply(b.callback.onExpand,[a,c,g])});a.bind(c.COLLAPSE,function(a,c,g){j.apply(b.callback.onCollapse,[a,c,g])});a.bind(c.ASYNC_SUCCESS,function(a,c,g,l){j.apply(b.callback.onAsyncSuccess,[a,c,g,l])});a.bind(c.ASYNC_ERROR,function(a,c,g,l,h,e){j.apply(b.callback.onAsyncError,[a,c,g,l,h,e])});a.bind(c.REMOVE,function(a,c,g){j.apply(b.callback.onRemove,[a,c,g])})}],x=[function(b){var a=
e.event;b.treeObj.unbind(a.NODECREATED).unbind(a.CLICK).unbind(a.EXPAND).unbind(a.COLLAPSE).unbind(a.ASYNC_SUCCESS).unbind(a.ASYNC_ERROR).unbind(a.REMOVE)}],y=[function(b){var a=h.getCache(b);a||(a={},h.setCache(b,a));a.nodes=[];a.doms=[]}],z=[function(b,a,c,d,f,g){if(c){var l=h.getRoot(b),e=b.data.key.children;c.level=a;c.tId=b.treeId+"_"+ ++l.zId;c.parentTId=d?d.tId:null;c.open=typeof c.open=="string"?j.eqs(c.open,"true"):!!c.open;c[e]&&c[e].length>0?(c.isParent=!0,c.zAsync=!0):(c.isParent=typeof c.isParent==
"string"?j.eqs(c.isParent,"true"):!!c.isParent,c.open=c.isParent&&!b.async.enable?c.open:!1,c.zAsync=!c.isParent);c.isFirstNode=f;c.isLastNode=g;c.getParentNode=function(){return h.getNodeCache(b,c.parentTId)};c.getPreNode=function(){return h.getPreNode(b,c)};c.getNextNode=function(){return h.getNextNode(b,c)};c.isAjaxing=!1;h.fixPIdKeyValue(b,c)}}],s=[function(b){var a=b.target,c=h.getSetting(b.data.treeId),d="",f=null,g="",l="",i=null,n=null,k=null;if(j.eqs(b.type,"mousedown"))l="mousedown";else if(j.eqs(b.type,
"mouseup"))l="mouseup";else if(j.eqs(b.type,"contextmenu"))l="contextmenu";else if(j.eqs(b.type,"click"))if(j.eqs(a.tagName,"span")&&a.getAttribute("treeNode"+e.id.SWITCH)!==null)d=j.getNodeMainDom(a).id,g="switchNode";else{if(k=j.getMDom(c,a,[{tagName:"a",attrName:"treeNode"+e.id.A}]))d=j.getNodeMainDom(k).id,g="clickNode"}else if(j.eqs(b.type,"dblclick")&&(l="dblclick",k=j.getMDom(c,a,[{tagName:"a",attrName:"treeNode"+e.id.A}])))d=j.getNodeMainDom(k).id,g="switchNode";if(l.length>0&&d.length==0&&
(k=j.getMDom(c,a,[{tagName:"a",attrName:"treeNode"+e.id.A}])))d=j.getNodeMainDom(k).id;if(d.length>0)switch(f=h.getNodeCache(c,d),g){case "switchNode":f.isParent?j.eqs(b.type,"click")||j.eqs(b.type,"dblclick")&&j.apply(c.view.dblClickExpand,[c.treeId,f],c.view.dblClickExpand)?i=G:g="":g="";break;case "clickNode":i=H}switch(l){case "mousedown":n=I;break;case "mouseup":n=J;break;case "dblclick":n=K;break;case "contextmenu":n=L}return{stop:!1,node:f,nodeEventType:g,nodeEventCallback:i,treeEventType:l,
treeEventCallback:n}}],A=[function(b){var a=h.getRoot(b);a||(a={},h.setRoot(b,a));a[b.data.key.children]=[];a.expandTriggerFlag=!1;a.curSelectedList=[];a.noSelection=!0;a.createdNodes=[];a.zId=0;a._ver=(new Date).getTime()}],B=[],C=[],D=[],E=[],F=[],h={addNodeCache:function(b,a){h.getCache(b).nodes[h.getNodeCacheId(a.tId)]=a},getNodeCacheId:function(b){return b.substring(b.lastIndexOf("_")+1)},addAfterA:function(b){C.push(b)},addBeforeA:function(b){B.push(b)},addInnerAfterA:function(b){E.push(b)},
addInnerBeforeA:function(b){D.push(b)},addInitBind:function(b){w.push(b)},addInitUnBind:function(b){x.push(b)},addInitCache:function(b){y.push(b)},addInitNode:function(b){z.push(b)},addInitProxy:function(b,a){a?s.splice(0,0,b):s.push(b)},addInitRoot:function(b){A.push(b)},addNodesData:function(b,a,c){var d=b.data.key.children;a[d]||(a[d]=[]);if(a[d].length>0)a[d][a[d].length-1].isLastNode=!1,i.setNodeLineIcos(b,a[d][a[d].length-1]);a.isParent=!0;a[d]=a[d].concat(c)},addSelectedNode:function(b,a){var c=
h.getRoot(b);h.isSelectedNode(b,a)||c.curSelectedList.push(a)},addCreatedNode:function(b,a){(b.callback.onNodeCreated||b.view.addDiyDom)&&h.getRoot(b).createdNodes.push(a)},addZTreeTools:function(b){F.push(b)},exSetting:function(b){p.extend(!0,M,b)},fixPIdKeyValue:function(b,a){b.data.simpleData.enable&&(a[b.data.simpleData.pIdKey]=a.parentTId?a.getParentNode()[b.data.simpleData.idKey]:b.data.simpleData.rootPId)},getAfterA:function(b,a,c){for(var d=0,f=C.length;d<f;d++)C[d].apply(this,arguments)},
getBeforeA:function(b,a,c){for(var d=0,f=B.length;d<f;d++)B[d].apply(this,arguments)},getInnerAfterA:function(b,a,c){for(var d=0,f=E.length;d<f;d++)E[d].apply(this,arguments)},getInnerBeforeA:function(b,a,c){for(var d=0,f=D.length;d<f;d++)D[d].apply(this,arguments)},getCache:function(b){return v[b.treeId]},getNextNode:function(b,a){if(!a)return null;for(var c=b.data.key.children,d=a.parentTId?a.getParentNode():h.getRoot(b),f=0,g=d[c].length-1;f<=g;f++)if(d[c][f]===a)return f==g?null:d[c][f+1];return null},
getNodeByParam:function(b,a,c,d){if(!a||!c)return null;for(var f=b.data.key.children,g=0,l=a.length;g<l;g++){if(a[g][c]==d)return a[g];var e=h.getNodeByParam(b,a[g][f],c,d);if(e)return e}return null},getNodeCache:function(b,a){if(!a)return null;var c=v[b.treeId].nodes[h.getNodeCacheId(a)];return c?c:null},getNodeName:function(b,a){return""+a[b.data.key.name]},getNodeTitle:function(b,a){return""+a[b.data.key.title===""?b.data.key.name:b.data.key.title]},getNodes:function(b){return h.getRoot(b)[b.data.key.children]},
getNodesByParam:function(b,a,c,d){if(!a||!c)return[];for(var f=b.data.key.children,g=[],l=0,e=a.length;l<e;l++)a[l][c]==d&&g.push(a[l]),g=g.concat(h.getNodesByParam(b,a[l][f],c,d));return g},getNodesByParamFuzzy:function(b,a,c,d){if(!a||!c)return[];for(var f=b.data.key.children,g=[],d=d.toLowerCase(),l=0,e=a.length;l<e;l++)typeof a[l][c]=="string"&&a[l][c].toLowerCase().indexOf(d)>-1&&g.push(a[l]),g=g.concat(h.getNodesByParamFuzzy(b,a[l][f],c,d));return g},getNodesByFilter:function(b,a,c,d,f){if(!a)return d?
null:[];for(var g=b.data.key.children,e=d?null:[],i=0,n=a.length;i<n;i++){if(j.apply(c,[a[i],f],!1)){if(d)return a[i];e.push(a[i])}var k=h.getNodesByFilter(b,a[i][g],c,d,f);if(d&&k)return k;e=d?k:e.concat(k)}return e},getPreNode:function(b,a){if(!a)return null;for(var c=b.data.key.children,d=a.parentTId?a.getParentNode():h.getRoot(b),f=0,g=d[c].length;f<g;f++)if(d[c][f]===a)return f==0?null:d[c][f-1];return null},getRoot:function(b){return b?u[b.treeId]:null},getRoots:function(){return u},getSetting:function(b){return r[b]},
getSettings:function(){return r},getZTreeTools:function(b){return(b=this.getRoot(this.getSetting(b)))?b.treeTools:null},initCache:function(b){for(var a=0,c=y.length;a<c;a++)y[a].apply(this,arguments)},initNode:function(b,a,c,d,f,g){for(var e=0,h=z.length;e<h;e++)z[e].apply(this,arguments)},initRoot:function(b){for(var a=0,c=A.length;a<c;a++)A[a].apply(this,arguments)},isSelectedNode:function(b,a){for(var c=h.getRoot(b),d=0,f=c.curSelectedList.length;d<f;d++)if(a===c.curSelectedList[d])return!0;return!1},
removeNodeCache:function(b,a){var c=b.data.key.children;if(a[c])for(var d=0,f=a[c].length;d<f;d++)arguments.callee(b,a[c][d]);h.getCache(b).nodes[h.getNodeCacheId(a.tId)]=null},removeSelectedNode:function(b,a){for(var c=h.getRoot(b),d=0,f=c.curSelectedList.length;d<f;d++)if(a===c.curSelectedList[d]||!h.getNodeCache(b,c.curSelectedList[d].tId))c.curSelectedList.splice(d,1),d--,f--},setCache:function(b,a){v[b.treeId]=a},setRoot:function(b,a){u[b.treeId]=a},setZTreeTools:function(b,a){for(var c=0,d=
F.length;c<d;c++)F[c].apply(this,arguments)},transformToArrayFormat:function(b,a){if(!a)return[];var c=b.data.key.children,d=[];if(j.isArray(a))for(var f=0,g=a.length;f<g;f++)d.push(a[f]),a[f][c]&&(d=d.concat(h.transformToArrayFormat(b,a[f][c])));else d.push(a),a[c]&&(d=d.concat(h.transformToArrayFormat(b,a[c])));return d},transformTozTreeFormat:function(b,a){var c,d,f=b.data.simpleData.idKey,g=b.data.simpleData.pIdKey,e=b.data.key.children;if(!f||f==""||!a)return[];if(j.isArray(a)){var h=[],i=[];
for(c=0,d=a.length;c<d;c++)i[a[c][f]]=a[c];for(c=0,d=a.length;c<d;c++)i[a[c][g]]&&a[c][f]!=a[c][g]?(i[a[c][g]][e]||(i[a[c][g]][e]=[]),i[a[c][g]][e].push(a[c])):h.push(a[c]);return h}else return[a]}},m={bindEvent:function(b){for(var a=0,c=w.length;a<c;a++)w[a].apply(this,arguments)},unbindEvent:function(b){for(var a=0,c=x.length;a<c;a++)x[a].apply(this,arguments)},bindTree:function(b){var a={treeId:b.treeId},c=b.treeObj;b.view.txtSelectedEnable||c.bind("selectstart",function(a){a=a.originalEvent.srcElement.nodeName.toLowerCase();
return a==="input"||a==="textarea"}).css({"-moz-user-select":"-moz-none"});c.bind("click",a,m.proxy);c.bind("dblclick",a,m.proxy);c.bind("mouseover",a,m.proxy);c.bind("mouseout",a,m.proxy);c.bind("mousedown",a,m.proxy);c.bind("mouseup",a,m.proxy);c.bind("contextmenu",a,m.proxy)},unbindTree:function(b){b.treeObj.unbind("click",m.proxy).unbind("dblclick",m.proxy).unbind("mouseover",m.proxy).unbind("mouseout",m.proxy).unbind("mousedown",m.proxy).unbind("mouseup",m.proxy).unbind("contextmenu",m.proxy)},
doProxy:function(b){for(var a=[],c=0,d=s.length;c<d;c++){var f=s[c].apply(this,arguments);a.push(f);if(f.stop)break}return a},proxy:function(b){var a=h.getSetting(b.data.treeId);if(!j.uCanDo(a,b))return!0;for(var a=m.doProxy(b),c=!0,d=0,f=a.length;d<f;d++){var g=a[d];g.nodeEventCallback&&(c=g.nodeEventCallback.apply(g,[b,g.node])&&c);g.treeEventCallback&&(c=g.treeEventCallback.apply(g,[b,g.node])&&c)}return c}};G=function(b,a){var c=h.getSetting(b.data.treeId);if(a.open){if(j.apply(c.callback.beforeCollapse,
[c.treeId,a],!0)==!1)return!0}else if(j.apply(c.callback.beforeExpand,[c.treeId,a],!0)==!1)return!0;h.getRoot(c).expandTriggerFlag=!0;i.switchNode(c,a);return!0};H=function(b,a){var c=h.getSetting(b.data.treeId),d=c.view.autoCancelSelected&&(b.ctrlKey||b.metaKey)&&h.isSelectedNode(c,a)?0:c.view.autoCancelSelected&&(b.ctrlKey||b.metaKey)&&c.view.selectedMulti?2:1;if(j.apply(c.callback.beforeClick,[c.treeId,a,d],!0)==!1)return!0;d===0?i.cancelPreSelectedNode(c,a):i.selectNode(c,a,d===2);c.treeObj.trigger(e.event.CLICK,
[b,c.treeId,a,d]);return!0};I=function(b,a){var c=h.getSetting(b.data.treeId);j.apply(c.callback.beforeMouseDown,[c.treeId,a],!0)&&j.apply(c.callback.onMouseDown,[b,c.treeId,a]);return!0};J=function(b,a){var c=h.getSetting(b.data.treeId);j.apply(c.callback.beforeMouseUp,[c.treeId,a],!0)&&j.apply(c.callback.onMouseUp,[b,c.treeId,a]);return!0};K=function(b,a){var c=h.getSetting(b.data.treeId);j.apply(c.callback.beforeDblClick,[c.treeId,a],!0)&&j.apply(c.callback.onDblClick,[b,c.treeId,a]);return!0};
L=function(b,a){var c=h.getSetting(b.data.treeId);j.apply(c.callback.beforeRightClick,[c.treeId,a],!0)&&j.apply(c.callback.onRightClick,[b,c.treeId,a]);return typeof c.callback.onRightClick!="function"};var j={apply:function(b,a,c){return typeof b=="function"?b.apply(N,a?a:[]):c},canAsync:function(b,a){var c=b.data.key.children;return b.async.enable&&a&&a.isParent&&!(a.zAsync||a[c]&&a[c].length>0)},clone:function(b){if(b===null)return null;var a=j.isArray(b)?[]:{},c;for(c in b)a[c]=b[c]instanceof
Date?new Date(b[c].getTime()):typeof b[c]==="object"?arguments.callee(b[c]):b[c];return a},eqs:function(b,a){return b.toLowerCase()===a.toLowerCase()},isArray:function(b){return Object.prototype.toString.apply(b)==="[object Array]"},$:function(b,a,c){a&&typeof a!="string"&&(c=a,a="");return typeof b=="string"?p(b,c?c.treeObj.get(0).ownerDocument:null):p("#"+b.tId+a,c?c.treeObj:null)},getMDom:function(b,a,c){if(!a)return null;for(;a&&a.id!==b.treeId;){for(var d=0,f=c.length;a.tagName&&d<f;d++)if(j.eqs(a.tagName,
c[d].tagName)&&a.getAttribute(c[d].attrName)!==null)return a;a=a.parentNode}return null},getNodeMainDom:function(b){return p(b).parent("li").get(0)||p(b).parentsUntil("li").parent().get(0)},isChildOrSelf:function(b,a){return p(b).closest("#"+a).length>0},uCanDo:function(){return!0}},i={addNodes:function(b,a,c,d){if(!b.data.keep.leaf||!a||a.isParent)if(j.isArray(c)||(c=[c]),b.data.simpleData.enable&&(c=h.transformTozTreeFormat(b,c)),a){var f=k(a,e.id.SWITCH,b),g=k(a,e.id.ICON,b),l=k(a,e.id.UL,b);if(!a.open)i.replaceSwitchClass(a,
f,e.folder.CLOSE),i.replaceIcoClass(a,g,e.folder.CLOSE),a.open=!1,l.css({display:"none"});h.addNodesData(b,a,c);i.createNodes(b,a.level+1,c,a);d||i.expandCollapseParentNode(b,a,!0)}else h.addNodesData(b,h.getRoot(b),c),i.createNodes(b,0,c,null)},appendNodes:function(b,a,c,d,f,g){if(!c)return[];for(var e=[],j=b.data.key.children,k=0,m=c.length;k<m;k++){var o=c[k];if(f){var t=(d?d:h.getRoot(b))[j].length==c.length&&k==0;h.initNode(b,a,o,d,t,k==c.length-1,g);h.addNodeCache(b,o)}t=[];o[j]&&o[j].length>
0&&(t=i.appendNodes(b,a+1,o[j],o,f,g&&o.open));g&&(i.makeDOMNodeMainBefore(e,b,o),i.makeDOMNodeLine(e,b,o),h.getBeforeA(b,o,e),i.makeDOMNodeNameBefore(e,b,o),h.getInnerBeforeA(b,o,e),i.makeDOMNodeIcon(e,b,o),h.getInnerAfterA(b,o,e),i.makeDOMNodeNameAfter(e,b,o),h.getAfterA(b,o,e),o.isParent&&o.open&&i.makeUlHtml(b,o,e,t.join("")),i.makeDOMNodeMainAfter(e,b,o),h.addCreatedNode(b,o))}return e},appendParentULDom:function(b,a){var c=[],d=k(a,b);!d.get(0)&&a.parentTId&&(i.appendParentULDom(b,a.getParentNode()),
d=k(a,b));var f=k(a,e.id.UL,b);f.get(0)&&f.remove();f=i.appendNodes(b,a.level+1,a[b.data.key.children],a,!1,!0);i.makeUlHtml(b,a,c,f.join(""));d.append(c.join(""))},asyncNode:function(b,a,c,d){var f,g;if(a&&!a.isParent)return j.apply(d),!1;else if(a&&a.isAjaxing)return!1;else if(j.apply(b.callback.beforeAsync,[b.treeId,a],!0)==!1)return j.apply(d),!1;if(a)a.isAjaxing=!0,k(a,e.id.ICON,b).attr({style:"","class":e.className.BUTTON+" "+e.className.ICO_LOADING});var l={};for(f=0,g=b.async.autoParam.length;a&&
f<g;f++){var q=b.async.autoParam[f].split("="),n=q;q.length>1&&(n=q[1],q=q[0]);l[n]=a[q]}if(j.isArray(b.async.otherParam))for(f=0,g=b.async.otherParam.length;f<g;f+=2)l[b.async.otherParam[f]]=b.async.otherParam[f+1];else for(var m in b.async.otherParam)l[m]=b.async.otherParam[m];var o=h.getRoot(b)._ver;p.ajax({contentType:b.async.contentType,type:b.async.type,url:j.apply(b.async.url,[b.treeId,a],b.async.url),data:l,dataType:b.async.dataType,success:function(f){if(o==h.getRoot(b)._ver){var g=[];try{g=
!f||f.length==0?[]:typeof f=="string"?eval("("+f+")"):f}catch(l){g=f}if(a)a.isAjaxing=null,a.zAsync=!0;i.setNodeLineIcos(b,a);g&&g!==""?(g=j.apply(b.async.dataFilter,[b.treeId,a,g],g),i.addNodes(b,a,g?j.clone(g):[],!!c)):i.addNodes(b,a,[],!!c);b.treeObj.trigger(e.event.ASYNC_SUCCESS,[b.treeId,a,f]);j.apply(d)}},error:function(c,d,f){if(o==h.getRoot(b)._ver){if(a)a.isAjaxing=null;i.setNodeLineIcos(b,a);b.treeObj.trigger(e.event.ASYNC_ERROR,[b.treeId,a,c,d,f])}}});return!0},cancelPreSelectedNode:function(b,
a){for(var c=h.getRoot(b).curSelectedList,d=c.length-1;d>=0;d--)if(!a||a===c[d])if(k(c[d],e.id.A,b).removeClass(e.node.CURSELECTED),a){h.removeSelectedNode(b,a);break}if(!a)h.getRoot(b).curSelectedList=[]},createNodeCallback:function(b){if(b.callback.onNodeCreated||b.view.addDiyDom)for(var a=h.getRoot(b);a.createdNodes.length>0;){var c=a.createdNodes.shift();j.apply(b.view.addDiyDom,[b.treeId,c]);b.callback.onNodeCreated&&b.treeObj.trigger(e.event.NODECREATED,[b.treeId,c])}},createNodes:function(b,
a,c,d){if(c&&c.length!=0){var f=h.getRoot(b),g=b.data.key.children,g=!d||d.open||!!k(d[g][0],b).get(0);f.createdNodes=[];a=i.appendNodes(b,a,c,d,!0,g);d?(d=k(d,e.id.UL,b),d.get(0)&&d.append(a.join(""))):b.treeObj.append(a.join(""));i.createNodeCallback(b)}},destroy:function(b){b&&(h.initCache(b),h.initRoot(b),m.unbindTree(b),m.unbindEvent(b),b.treeObj.empty(),delete r[b.treeId])},expandCollapseNode:function(b,a,c,d,f){var g=h.getRoot(b),l=b.data.key.children;if(a){if(g.expandTriggerFlag){var q=f,
f=function(){q&&q();a.open?b.treeObj.trigger(e.event.EXPAND,[b.treeId,a]):b.treeObj.trigger(e.event.COLLAPSE,[b.treeId,a])};g.expandTriggerFlag=!1}if(!a.open&&a.isParent&&(!k(a,e.id.UL,b).get(0)||a[l]&&a[l].length>0&&!k(a[l][0],b).get(0)))i.appendParentULDom(b,a),i.createNodeCallback(b);if(a.open==c)j.apply(f,[]);else{var c=k(a,e.id.UL,b),g=k(a,e.id.SWITCH,b),n=k(a,e.id.ICON,b);a.isParent?(a.open=!a.open,a.iconOpen&&a.iconClose&&n.attr("style",i.makeNodeIcoStyle(b,a)),a.open?(i.replaceSwitchClass(a,
g,e.folder.OPEN),i.replaceIcoClass(a,n,e.folder.OPEN),d==!1||b.view.expandSpeed==""?(c.show(),j.apply(f,[])):a[l]&&a[l].length>0?c.slideDown(b.view.expandSpeed,f):(c.show(),j.apply(f,[]))):(i.replaceSwitchClass(a,g,e.folder.CLOSE),i.replaceIcoClass(a,n,e.folder.CLOSE),d==!1||b.view.expandSpeed==""||!(a[l]&&a[l].length>0)?(c.hide(),j.apply(f,[])):c.slideUp(b.view.expandSpeed,f))):j.apply(f,[])}}else j.apply(f,[])},expandCollapseParentNode:function(b,a,c,d,f){a&&(a.parentTId?(i.expandCollapseNode(b,
a,c,d),a.parentTId&&i.expandCollapseParentNode(b,a.getParentNode(),c,d,f)):i.expandCollapseNode(b,a,c,d,f))},expandCollapseSonNode:function(b,a,c,d,f){var g=h.getRoot(b),e=b.data.key.children,g=a?a[e]:g[e],e=a?!1:d,j=h.getRoot(b).expandTriggerFlag;h.getRoot(b).expandTriggerFlag=!1;if(g)for(var k=0,m=g.length;k<m;k++)g[k]&&i.expandCollapseSonNode(b,g[k],c,e);h.getRoot(b).expandTriggerFlag=j;i.expandCollapseNode(b,a,c,d,f)},makeDOMNodeIcon:function(b,a,c){var d=h.getNodeName(a,c),d=a.view.nameIsHTML?
d:d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");b.push("<span id='",c.tId,e.id.ICON,"' title='' treeNode",e.id.ICON," class='",i.makeNodeIcoClass(a,c),"' style='",i.makeNodeIcoStyle(a,c),"'></span><span id='",c.tId,e.id.SPAN,"'>",d,"</span>")},makeDOMNodeLine:function(b,a,c){b.push("<span id='",c.tId,e.id.SWITCH,"' title='' class='",i.makeNodeLineClass(a,c),"' treeNode",e.id.SWITCH,"></span>")},makeDOMNodeMainAfter:function(b){b.push("</li>")},makeDOMNodeMainBefore:function(b,
a,c){b.push("<li id='",c.tId,"' class='",e.className.LEVEL,c.level,"' tabindex='0' hidefocus='true' treenode>")},makeDOMNodeNameAfter:function(b){b.push("</a>")},makeDOMNodeNameBefore:function(b,a,c){var d=h.getNodeTitle(a,c),f=i.makeNodeUrl(a,c),g=i.makeNodeFontCss(a,c),l=[],k;for(k in g)l.push(k,":",g[k],";");b.push("<a id='",c.tId,e.id.A,"' class='",e.className.LEVEL,c.level,"' treeNode",e.id.A,' onclick="',c.click||"",'" ',f!=null&&f.length>0?"href='"+f+"'":""," target='",i.makeNodeTarget(c),
"' style='",l.join(""),"'");j.apply(a.view.showTitle,[a.treeId,c],a.view.showTitle)&&d&&b.push("title='",d.replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),"'");b.push(">")},makeNodeFontCss:function(b,a){var c=j.apply(b.view.fontCss,[b.treeId,a],b.view.fontCss);return c&&typeof c!="function"?c:{}},makeNodeIcoClass:function(b,a){var c=["ico"];a.isAjaxing||(c[0]=(a.iconSkin?a.iconSkin+"_":"")+c[0],a.isParent?c.push(a.open?e.folder.OPEN:e.folder.CLOSE):c.push(e.folder.DOCU));return e.className.BUTTON+
" "+c.join("_")},makeNodeIcoStyle:function(b,a){var c=[];if(!a.isAjaxing){var d=a.isParent&&a.iconOpen&&a.iconClose?a.open?a.iconOpen:a.iconClose:a.icon;d&&c.push("background:url(",d,") 0 0 no-repeat;");(b.view.showIcon==!1||!j.apply(b.view.showIcon,[b.treeId,a],!0))&&c.push("width:0px;height:0px;")}return c.join("")},makeNodeLineClass:function(b,a){var c=[];b.view.showLine?a.level==0&&a.isFirstNode&&a.isLastNode?c.push(e.line.ROOT):a.level==0&&a.isFirstNode?c.push(e.line.ROOTS):a.isLastNode?c.push(e.line.BOTTOM):
c.push(e.line.CENTER):c.push(e.line.NOLINE);a.isParent?c.push(a.open?e.folder.OPEN:e.folder.CLOSE):c.push(e.folder.DOCU);return i.makeNodeLineClassEx(a)+c.join("_")},makeNodeLineClassEx:function(b){return e.className.BUTTON+" "+e.className.LEVEL+b.level+" "+e.className.SWITCH+" "},makeNodeTarget:function(b){return b.target||"_blank"},makeNodeUrl:function(b,a){var c=b.data.key.url;return a[c]?a[c]:null},makeUlHtml:function(b,a,c,d){c.push("<ul id='",a.tId,e.id.UL,"' class='",e.className.LEVEL,a.level,
" ",i.makeUlLineClass(b,a),"' style='display:",a.open?"block":"none","'>");c.push(d);c.push("</ul>")},makeUlLineClass:function(b,a){return b.view.showLine&&!a.isLastNode?e.line.LINE:""},removeChildNodes:function(b,a){if(a){var c=b.data.key.children,d=a[c];if(d){for(var f=0,g=d.length;f<g;f++)h.removeNodeCache(b,d[f]);h.removeSelectedNode(b);delete a[c];b.data.keep.parent?k(a,e.id.UL,b).empty():(a.isParent=!1,a.open=!1,c=k(a,e.id.SWITCH,b),d=k(a,e.id.ICON,b),i.replaceSwitchClass(a,c,e.folder.DOCU),
i.replaceIcoClass(a,d,e.folder.DOCU),k(a,e.id.UL,b).remove())}}},setFirstNode:function(b,a){var c=b.data.key.children;if(a[c].length>0)a[c][0].isFirstNode=!0},setLastNode:function(b,a){var c=b.data.key.children,d=a[c].length;if(d>0)a[c][d-1].isLastNode=!0},removeNode:function(b,a){var c=h.getRoot(b),d=b.data.key.children,f=a.parentTId?a.getParentNode():c;a.isFirstNode=!1;a.isLastNode=!1;a.getPreNode=function(){return null};a.getNextNode=function(){return null};if(h.getNodeCache(b,a.tId)){k(a,b).remove();
h.removeNodeCache(b,a);h.removeSelectedNode(b,a);for(var g=0,l=f[d].length;g<l;g++)if(f[d][g].tId==a.tId){f[d].splice(g,1);break}i.setFirstNode(b,f);i.setLastNode(b,f);var j,g=f[d].length;if(!b.data.keep.parent&&g==0)f.isParent=!1,f.open=!1,g=k(f,e.id.UL,b),l=k(f,e.id.SWITCH,b),j=k(f,e.id.ICON,b),i.replaceSwitchClass(f,l,e.folder.DOCU),i.replaceIcoClass(f,j,e.folder.DOCU),g.css("display","none");else if(b.view.showLine&&g>0){var n=f[d][g-1],g=k(n,e.id.UL,b),l=k(n,e.id.SWITCH,b);j=k(n,e.id.ICON,b);
f==c?f[d].length==1?i.replaceSwitchClass(n,l,e.line.ROOT):(c=k(f[d][0],e.id.SWITCH,b),i.replaceSwitchClass(f[d][0],c,e.line.ROOTS),i.replaceSwitchClass(n,l,e.line.BOTTOM)):i.replaceSwitchClass(n,l,e.line.BOTTOM);g.removeClass(e.line.LINE)}}},replaceIcoClass:function(b,a,c){if(a&&!b.isAjaxing&&(b=a.attr("class"),b!=void 0)){b=b.split("_");switch(c){case e.folder.OPEN:case e.folder.CLOSE:case e.folder.DOCU:b[b.length-1]=c}a.attr("class",b.join("_"))}},replaceSwitchClass:function(b,a,c){if(a){var d=
a.attr("class");if(d!=void 0){d=d.split("_");switch(c){case e.line.ROOT:case e.line.ROOTS:case e.line.CENTER:case e.line.BOTTOM:case e.line.NOLINE:d[0]=i.makeNodeLineClassEx(b)+c;break;case e.folder.OPEN:case e.folder.CLOSE:case e.folder.DOCU:d[1]=c}a.attr("class",d.join("_"));c!==e.folder.DOCU?a.removeAttr("disabled"):a.attr("disabled","disabled")}}},selectNode:function(b,a,c){c||i.cancelPreSelectedNode(b);k(a,e.id.A,b).addClass(e.node.CURSELECTED);h.addSelectedNode(b,a)},setNodeFontCss:function(b,
a){var c=k(a,e.id.A,b),d=i.makeNodeFontCss(b,a);d&&c.css(d)},setNodeLineIcos:function(b,a){if(a){var c=k(a,e.id.SWITCH,b),d=k(a,e.id.UL,b),f=k(a,e.id.ICON,b),g=i.makeUlLineClass(b,a);g.length==0?d.removeClass(e.line.LINE):d.addClass(g);c.attr("class",i.makeNodeLineClass(b,a));a.isParent?c.removeAttr("disabled"):c.attr("disabled","disabled");f.removeAttr("style");f.attr("style",i.makeNodeIcoStyle(b,a));f.attr("class",i.makeNodeIcoClass(b,a))}},setNodeName:function(b,a){var c=h.getNodeTitle(b,a),d=
k(a,e.id.SPAN,b);d.empty();b.view.nameIsHTML?d.html(h.getNodeName(b,a)):d.text(h.getNodeName(b,a));j.apply(b.view.showTitle,[b.treeId,a],b.view.showTitle)&&k(a,e.id.A,b).attr("title",!c?"":c)},setNodeTarget:function(b,a){k(a,e.id.A,b).attr("target",i.makeNodeTarget(a))},setNodeUrl:function(b,a){var c=k(a,e.id.A,b),d=i.makeNodeUrl(b,a);d==null||d.length==0?c.removeAttr("href"):c.attr("href",d)},switchNode:function(b,a){a.open||!j.canAsync(b,a)?i.expandCollapseNode(b,a,!a.open):b.async.enable?i.asyncNode(b,
a)||i.expandCollapseNode(b,a,!a.open):a&&i.expandCollapseNode(b,a,!a.open)}};p.fn.zTree={consts:{className:{BUTTON:"button",LEVEL:"level",ICO_LOADING:"ico_loading",SWITCH:"switch"},event:{NODECREATED:"ztree_nodeCreated",CLICK:"ztree_click",EXPAND:"ztree_expand",COLLAPSE:"ztree_collapse",ASYNC_SUCCESS:"ztree_async_success",ASYNC_ERROR:"ztree_async_error",REMOVE:"ztree_remove"},id:{A:"_a",ICON:"_ico",SPAN:"_span",SWITCH:"_switch",UL:"_ul"},line:{ROOT:"root",ROOTS:"roots",CENTER:"center",BOTTOM:"bottom",
NOLINE:"noline",LINE:"line"},folder:{OPEN:"open",CLOSE:"close",DOCU:"docu"},node:{CURSELECTED:"curSelectedNode"}},_z:{tools:j,view:i,event:m,data:h},getZTreeObj:function(b){return(b=h.getZTreeTools(b))?b:null},destroy:function(b){if(b&&b.length>0)i.destroy(h.getSetting(b));else for(var a in r)i.destroy(r[a])},init:function(b,a,c){var d=j.clone(M);p.extend(!0,d,a);d.treeId=b.attr("id");d.treeObj=b;d.treeObj.empty();r[d.treeId]=d;if(typeof document.body.style.maxHeight==="undefined")d.view.expandSpeed=
"";h.initRoot(d);b=h.getRoot(d);a=d.data.key.children;c=c?j.clone(j.isArray(c)?c:[c]):[];b[a]=d.data.simpleData.enable?h.transformTozTreeFormat(d,c):c;h.initCache(d);m.unbindTree(d);m.bindTree(d);m.unbindEvent(d);m.bindEvent(d);c={setting:d,addNodes:function(a,b,c){function e(){i.addNodes(d,a,h,c==!0)}if(!b)return null;a||(a=null);if(a&&!a.isParent&&d.data.keep.leaf)return null;var h=j.clone(j.isArray(b)?b:[b]);j.canAsync(d,a)?i.asyncNode(d,a,c,e):e();return h},cancelSelectedNode:function(a){i.cancelPreSelectedNode(d,
a)},destroy:function(){i.destroy(d)},expandAll:function(a){a=!!a;i.expandCollapseSonNode(d,null,a,!0);return a},expandNode:function(a,b,c,e,n){if(!a||!a.isParent)return null;b!==!0&&b!==!1&&(b=!a.open);if((n=!!n)&&b&&j.apply(d.callback.beforeExpand,[d.treeId,a],!0)==!1)return null;else if(n&&!b&&j.apply(d.callback.beforeCollapse,[d.treeId,a],!0)==!1)return null;b&&a.parentTId&&i.expandCollapseParentNode(d,a.getParentNode(),b,!1);if(b===a.open&&!c)return null;h.getRoot(d).expandTriggerFlag=n;if(!j.canAsync(d,
a)&&c)i.expandCollapseSonNode(d,a,b,!0,function(){if(e!==!1)try{k(a,d).focus().blur()}catch(b){}});else if(a.open=!b,i.switchNode(this.setting,a),e!==!1)try{k(a,d).focus().blur()}catch(m){}return b},getNodes:function(){return h.getNodes(d)},getNodeByParam:function(a,b,c){return!a?null:h.getNodeByParam(d,c?c[d.data.key.children]:h.getNodes(d),a,b)},getNodeByTId:function(a){return h.getNodeCache(d,a)},getNodesByParam:function(a,b,c){return!a?null:h.getNodesByParam(d,c?c[d.data.key.children]:h.getNodes(d),
a,b)},getNodesByParamFuzzy:function(a,b,c){return!a?null:h.getNodesByParamFuzzy(d,c?c[d.data.key.children]:h.getNodes(d),a,b)},getNodesByFilter:function(a,b,c,e){b=!!b;return!a||typeof a!="function"?b?null:[]:h.getNodesByFilter(d,c?c[d.data.key.children]:h.getNodes(d),a,b,e)},getNodeIndex:function(a){if(!a)return null;for(var b=d.data.key.children,c=a.parentTId?a.getParentNode():h.getRoot(d),e=0,i=c[b].length;e<i;e++)if(c[b][e]==a)return e;return-1},getSelectedNodes:function(){for(var a=[],b=h.getRoot(d).curSelectedList,
c=0,e=b.length;c<e;c++)a.push(b[c]);return a},isSelectedNode:function(a){return h.isSelectedNode(d,a)},reAsyncChildNodes:function(a,b,c){if(this.setting.async.enable){var j=!a;j&&(a=h.getRoot(d));if(b=="refresh"){for(var b=this.setting.data.key.children,m=0,p=a[b]?a[b].length:0;m<p;m++)h.removeNodeCache(d,a[b][m]);h.removeSelectedNode(d);a[b]=[];j?this.setting.treeObj.empty():k(a,e.id.UL,d).empty()}i.asyncNode(this.setting,j?null:a,!!c)}},refresh:function(){this.setting.treeObj.empty();var a=h.getRoot(d),
b=a[d.data.key.children];h.initRoot(d);a[d.data.key.children]=b;h.initCache(d);i.createNodes(d,0,a[d.data.key.children])},removeChildNodes:function(a){if(!a)return null;var b=a[d.data.key.children];i.removeChildNodes(d,a);return b?b:null},removeNode:function(a,b){a&&(b=!!b,b&&j.apply(d.callback.beforeRemove,[d.treeId,a],!0)==!1||(i.removeNode(d,a),b&&this.setting.treeObj.trigger(e.event.REMOVE,[d.treeId,a])))},selectNode:function(a,b){if(a&&j.uCanDo(d)){b=d.view.selectedMulti&&b;if(a.parentTId)i.expandCollapseParentNode(d,
a.getParentNode(),!0,!1,function(){try{k(a,d).focus().blur()}catch(b){}});else try{k(a,d).focus().blur()}catch(c){}i.selectNode(d,a,b)}},transformTozTreeNodes:function(a){return h.transformTozTreeFormat(d,a)},transformToArray:function(a){return h.transformToArrayFormat(d,a)},updateNode:function(a){a&&k(a,d).get(0)&&j.uCanDo(d)&&(i.setNodeName(d,a),i.setNodeTarget(d,a),i.setNodeUrl(d,a),i.setNodeLineIcos(d,a),i.setNodeFontCss(d,a))}};b.treeTools=c;h.setZTreeTools(d,c);b[a]&&b[a].length>0?i.createNodes(d,
0,b[a]):d.async.enable&&d.async.url&&d.async.url!==""&&i.asyncNode(d);return c}};var N=p.fn.zTree,k=j.$,e=N.consts})(jQuery);


/**
 * 例-
 * HTML: 
 * 		<div id="tv"></div>(ID 随意)
 * 
 * 初始化方法:
 * 		utree.init($('#tv'))
 * 
 * 返回参数:
 * 		utree.selectNode - Object
 * 		未选择节点时返回 undefined
 */
~(function(window, $){
	window.utree = {};
	utree.vs = '12.14.3';//version
	utree.author = 'zhangzw';
	
	utree.userOnTop = 1;//1: 人员显示在前面; 0: 部门在前面
	utree.selectNode;//选中的节点对象
	
	utree._default = {
		view: {
			selectedMulti: false
		},
		async: {
			enable: true
			,url: './orgUsers'
			,type: 'get'
			,dataType: 'json'
			//,contentType: 'application/x-www-form-urlencoded'
			,autoParam: ['o=orgId']
			,dataFilter: function(treeId, parentNode, ret){
				if(ret.status === 'success'){
					var zNodes = utree.fixedData(ret.data);
					return zNodes;
				}else{
					alert(ret.errorMsg)
				}
			}
		}
		,callback: {
			beforeAsync: function(treeId, treeNode){
				if(!treeNode)
					utree.loading.forInit(treeId)
			},
			onAsyncError: function(event, treeId, treeNode, XMLHttpRequest, textStatus, errorThrown){
				//移除loading
				utree.loading.remove();
				//显示
				var msg = '['+XMLHttpRequest.status+'] ' + XMLHttpRequest.statusText;// 看控制台报什么错了
				$('#'+treeId).html(utree._tmpl.error(msg))
			},
			onAsyncSuccess: function(){
				//移除loading
				utree.loading.remove();
			},
			onClick: function(event, treeId, treeNode, clickFlag){
				utree.selectedNode = treeNode;
			}
		}
	};
	//封装节点数据结构(递归)
	utree.createNode = function(data){
		var node = {
			name: '',
			children: []
		};
		var 
		self = data.self,
		users = data.users || [];
		subs = data.subOrganizations || [];
		////self
		if(self){
			node.name = self.displayName;
			node.isParent = true;
			node.open = self.parentOrgId ? false : true;
			node.o = self.o;
		}
		////node
		var node4user = [], node4subs = [];
		//users
		$.each(users, function(i, v){
			var nd = {
				name: v.cn
			}
			node4user.push(nd)
		})
		//subs
		$.each(subs, function(i, v){
			node4subs.push(utree.createNode(v))
		})
		//显示顺序
		node.children = utree.userOnTop
		? node.children.concat(node4user, node4subs)
		: node.children.concat(node4subs, node4user);
			
		return node;
	};
	//转换tree插件所需数据结构
	utree.fixedData = function(datas){
		var ret = [];
		if(datas instanceof Array){
			$.each(datas, function(i, v){
				ret.push(utree.createNode(v))
			});
		}
		else if(datas instanceof Object){
			ret.push(utree.createNode(datas))
		}
		return ret;
	};
	
	/*HTML 模板*/
	utree._tmpl = {
		//初始化loading HTML
		loading: '<span class="utree-loading"><font>初始化...</font></span>',
		error: function(msg){ return '<strong style="color: red">'+msg+'</strong>'; }
	}
	/*loading */
	utree.loading = {
		//初始化树的loading
		forInit: function(treeId){
			$('#'+treeId).html(utree._tmpl.loading)
		},
		
		/**
		 * //TODO type 计划为loading 不同class，来区分移除不同位置的laoding
		 */
		//移除loading
		remove: function(type){
			$('.utree-loading').remove()
		}
	};
	
	utree.init = function($o, options){
		$o.addClass('ztree');
		//merge options
		var opts = $.extend(utree._default, options);
		//tree option处理
		//自定义插件 option处理
		
		$.fn.zTree.init($o, opts);
	};
	
/**
multi
userOnTop = 1;//1: 人员显示在前面; 0: 部门在前面
url
autoParams
 */
})(window, jQuery);;
//12.14.3 fixedData - instanceof Object   and   fixed bug
//12.14.2 createNode - userOnTop