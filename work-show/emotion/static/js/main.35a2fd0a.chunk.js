(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,t,n){e.exports=n(271)},135:function(e,t,n){},139:function(e,t,n){},144:function(e,t){},146:function(e,t){},181:function(e,t){},182:function(e,t){},271:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n.n(a),i=n(127),s=n.n(i),c=(n(270),n(135),n(48)),o=n(4),u=n.n(o),l=n(7),f=n(18),d=n(26),h=n(49),p=n(47),m=n(50),v=n(39),x=(n(139),n(51)),w="".concat("/work-show/emotion","/static/models/face/")+"mtcnn_model-weights_manifest.json",b={minFaceSize:50,scaleFactor:.709,maxNumScales:10,scoreThresholds:[.7,.7,.7]},y=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b;Object(f.a)(this,e),this.path=t,this.params=n}return Object(d.a)(e,[{key:"load",value:function(){var e=Object(l.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.model=new x.Mtcnn,e.next=3,this.model.load(this.path);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"findFaces",value:function(){var e=Object(l.a)(u.a.mark(function e(t){var n,a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.toNetInput(t,!1,!0);case 2:return n=e.sent,e.next=5,this.model.forward(n,this.params);case 5:return a=e.sent,r=a.map(function(e){return e.faceDetection}),e.abrupt("return",{input:n,detections:r});case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"findAndExtractFaces",value:function(){var e=Object(l.a)(u.a.mark(function e(t){var n,a,r,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.findFaces(t);case 2:return n=e.sent,a=n.input,r=n.detections,e.next=7,x.extractFaces(a.inputs[0],r);case 7:return i=e.sent,e.abrupt("return",{detections:r,faces:i});case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),g=n(76),j=n(0),k=n(129),O=Object(c.a)({},j,k),E=O.scalar(127.5),S=function(e,t){var n=O.fromPixels(e),a=n.toFloat().sub(E).div(E),r=n.shape;if(r[0]===t&&r[1]===t)return a;return O.image.resizeBilinear(a,[t,t],!0)},F=function(){var e=Object(l.a)(u.a.mark(function e(t){var n,a,r,i,s,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.min(),a=t.max(),e.next=4,n.data();case 4:return r=e.sent[0],e.next=7,a.data();case 7:return i=e.sent[0],n.dispose(),a.dispose(),s=t.sub(O.scalar(r)).div(O.scalar(i-r)),c=s.mean(2),e.abrupt("return",c.expandDims(2));case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),I={0:{name:"\u751f\u6c14\u4e86\uff01",emoji:"\ud83d\ude20"},1:{name:"\u597d\u6076\u5fc3\uff01",emoji:"\ud83e\udd22"},2:{name:"\u5f88\u5bb3\u6015\uff01",emoji:"\ud83d\ude28"},3:{name:"\u5f88\u5f00\u5fc3\uff01",emoji:"\ud83d\ude04"},4:{name:"\u96be\u8fc7\u4e86\uff01",emoji:"\ud83d\ude41"},5:{name:"\u5f88\u60ca\u8bb6\uff01",emoji:"\ud83d\ude32"},6:{name:"\u4f60\u5728\u8bf4\u5565\uff1f",emoji:"\ud83d\ude10"}},C=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(p.a)(t).call(this,{path:"".concat("/work-show/emotion","/static/models/emotion/model.json"),imageSize:48,classes:I,isGrayscale:!0}))}return Object(m.a)(t,e),t}(function(){function e(t){var n=t.path,a=t.imageSize,r=t.classes,i=t.isGrayscale,s=void 0!==i&&i;Object(f.a)(this,e),this.path=n,this.imageSize=a,this.classes=r,this.isGrayscale=s}return Object(d.a)(e,[{key:"load",value:function(){var e=Object(l.a)(u.a.mark(function e(){var t,n,a=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.loadModel(this.path);case 2:return this.model=e.sent,t=this.model.inputs[0].shape.slice(1),n=O.tidy(function(){return a.model.predict(O.zeros([1].concat(Object(g.a)(t))))}),e.next=7,n.data();case 7:n.dispose();case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"imgToInputs",value:function(){var e=Object(l.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t,this.imageSize);case 2:if(n=e.sent,!this.isGrayscale){e.next=7;break}return e.next=6,F(n);case 6:n=e.sent;case 7:return e.abrupt("return",n.reshape([1].concat(Object(g.a)(n.shape))));case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"classify",value:function(){var e=Object(l.a)(u.a.mark(function e(t){var n,a,r,i,s=arguments;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:10,e.next=3,this.imgToInputs(t);case 3:return a=e.sent,r=this.model.predict(a),e.next=7,this.getTopKClasses(r,n);case 7:return i=e.sent,e.abrupt("return",i);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getTopKClasses",value:function(){var e=Object(l.a)(u.a.mark(function e(t){var n,a,r,i,s=this,c=arguments;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:10,e.next=3,t.data();case 3:for(a=e.sent,r=[],i=0;i<a.length;i++)r.push({value:a[i],index:i});return r=r.sort(function(e,t){return t.value-e.value}).slice(0,n),e.abrupt("return",r.map(function(e){return{label:s.classes[e.index],value:e.value}}));case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}()),D=function(e){return new Promise(function(t){var n=new Image;n.src=e,n.crossOrigin="*",n.onload=function(){return t(n)}})},M=function(){return new Promise(function(e){requestAnimationFrame(function(){return requestAnimationFrame(function(){return e()})})})},z={"\ud83d\ude20":"#ff0000","\ud83e\udd22":"#32cd32","\ud83d\ude28":"#4169e1","\ud83d\ude04":"#ff6347","\ud83d\ude41":"#696969","\ud83d\ude32":"#ffd700","\ud83d\ude10":"#fff"},T=function(e){var t=e.ctx,n=e.x,a=e.y,r=e.width,i=e.height,s=e.emoji;t.strokeStyle=z[s],t.lineWidth="3",t.strokeRect(n,a,r,i)},B=function(e){var t=e.ctx,n=e.x,a=e.y,r=e.text;e.name;t.fillStyle="#ff6347",t.font="16px",t.textBaseline="top",t.fillText(r,n+4,a+4)},_=375,W=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).initModels=Object(l.a)(u.a.mark(function e(){var t,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new y,e.next=3,t.load();case 3:return a=new C,e.next=6,a.load();case 6:n.models={face:t,emotion:a},n.setState({ready:!0});case 8:case"end":return e.stop()}},e,this)})),n.initVideo=function(){n.video=document.createElement("video"),n.video.autoplay=!0,n.video.playsinline=!0,n.video.style.display="none"},n.initCanvas=function(){n.canvas=document.querySelector("canvas"),n.canvas.width=0,n.canvas.height=0},n.startMedia=function(){navigator.mediaDevices.getUserMedia({audio:!1,video:!0}).then(n.handleSuccess).catch(n.handleError)},n.handleSuccess=function(e){n.stream=e,n.video.srcObject=e},n.handleError=function(e){console.log("navigator.getUserMedia error: ",e)},n.handleSnapshotClick=Object(l.a)(u.a.mark(function e(){var t,a,r,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.state.ready){e.next=2;break}return e.abrupt("return");case 2:if(t=n.canvas,a=n.video,t.width=n.MOBILE_DEVICE_WIDTH,t.height=a.videoHeight*n.MOBILE_DEVICE_WIDTH/a.videoWidth,t.getContext("2d").drawImage(a,0,0,t.width,t.height),n.drawDetections(),n.isForwarding){e.next=14;break}return n.isForwarding=!0,e.next=12,D(t.toDataURL("image/png"));case 12:r=e.sent,n.analyzeFaces(r);case 14:i=Object(v.a)(Object(v.a)(n)),setTimeout(function(){i.handleSnapshotClick()},10);case 16:case"end":return e.stop()}},e,this)})),n.analyzeFaces=function(){var e=Object(l.a)(u.a.mark(function e(t){var a,r,i,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:if(n.models){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,n.models.face.findAndExtractFaces(t);case 6:return a=e.sent,r=a.detections,i=a.faces,e.next=10,Promise.all(i.map(function(){var e=Object(l.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.models.emotion.classify(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));case 10:s=e.sent,n.setState({loading:!1,detections:r,faces:i,emotions:s},function(){n.isForwarding=!1});case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.drawDetections=function(){var e=n.state,t=e.detections,a=e.emotions;if(t.length){var r=n.canvas,i=r.width,s=r.height,o=n.canvas.getContext("2d");t.map(function(e){return e.forSize(i,s)}).forEach(function(e,t){var n=e.box,r=n.x,i=n.y,s=a[t][0].label,u=s.emoji,l=s.name;T(Object(c.a)({ctx:o},e.box,{emoji:u})),B({ctx:o,x:r,y:i,text:u,name:l})})}},n.state={ready:!1,detections:[]},n.isForwarding=!1,n.stream=null,n.video=null,n.canvas=null,n.MOBILE_DEVICE_WIDTH=_,n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.initModels(),this.initVideo(),this.initCanvas(),this.startMedia()}},{key:"render",value:function(){var e=this.state.ready;return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,e?"\u51c6\u5907\u5c31\u7eea":"\u52a0\u8f7d\u6a21\u578b..."),r.a.createElement("button",{className:"btn",onClick:this.handleSnapshotClick},"Begin ~"),r.a.createElement("canvas",null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[130,2,1]]]);
//# sourceMappingURL=main.35a2fd0a.chunk.js.map