
(function($,Edge,compId){var _=null,y=true,n=false,x19='53',e34='${_RoundRectCopy3}',e31='${_Text5Copy2}',e48='${_NextButton}',b='block',cl='clip',a='Base State',x36='hidden',e47='${_q9b_submit_button}',dt='Default Timeline',e38='${_TextCopy}',x15='Trebuchet MS, Arial, Helvetica, sans-serif',x25='rgba(192,192,192,1)',e43='${_NextButtonCopy2}',lf='left',e46='${_question07}',bg='background-color',x2='0.1.7',fs='font-size',tp='top',x12='rgba(11,0,52,1.00)',x18='26',xc='rgba(0,0,0,1)',x10='rgba(150,118,194,1.00)',x3='1.0.0.185',e27='${_Continue}',t='transform',e29='${_Text2Copy}',c='color',x4='rgba(0,0,0,0)',e54='${_Text8}',x16='italic',e56='${_Question2}',i='none',x30='rgba(255,255,255,1)',x52='rgba(30,4,92,1)',e51='${_Stage}',e50='${_Text}',d='display',e45='${_NextButtonCopy}',e42='${_q9b_skip_arrow}',qoq='easeOutQuad',x='text',e39='${_question07} > form:nth-child(1) > input:nth-child(2)',s='style',e41='${_question07} > form:nth-child(1) > textarea:nth-child(1)',m='rect',e49='${_sabbath_bar}',x33='rgba(11,0,52,1)',h='height',x8='21',qiq='easeInQuad',x1='1.0.0',ty='translateY',e44='${_Text7}',x37='rgba(255,0,0,1.00)',p='px',tx='translateX',ov='overflow',x53='rgba(0,0,0,1.00)',ta='text-align',po='center',g='image',x20='\'Trebuchet MS\', Arial, Helvetica, sans-serif',e40='${_sb17}',x35='rect(@@0@@px @@1@@px @@2@@px @@3@@px)',x9='Arial, Helvetica, sans-serif',x11='rgba(150,118,194,1)',l='normal',e32='${_Text5Copy}',zx='scaleX',e55='${_buttons}',x14='27',x28='pointer',w='width',o='opacity',ql='linear',zy='scaleY',x22='20',ff='font-family',x26='stage',x24='32';var im='images/';var g5='sabbath_bar.png',g6='buttons.png';var s17="From your knowledge of Jewish history, how do you think the Sabbath has preserved the Jewish people?",s7="No answer saved. Type an answer or click arrow to skip.",s23="Continue",s21="Please take a moment to reflect and answer the following question based on the material we've covered so far...",s13="Reflection Question";var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x1,mv:x2,b:x3,bS:a,iS:a,gpu:y,rI:n,cn:{dom:[{id:'sabbath_bar',t:g,r:['0px','460','670px','100px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'buttons',t:g,r:['0px','460px','670px','100px','auto','auto'],cl:['rect(28px 670px 100px 0px)'],f:[x4,im+g6,'0px','0px']},{id:'Text',v:i,t:x,r:['34px','448px','601px','36px','auto','auto'],text:s7,align:"center",n:[x9,x8,"rgba(255,0,0,1.00)",l,i,""]},{id:'NextButton',v:i,t:m,r:['711','473','197','61','undefined','undefined'],cu:['pointer'],br:["10px","10px","10px","10px"],o:1,f:[x10],s:[0,xc,i],tf:[]},{id:'q9b_skip_arrow',v:i,t:'ellipse',r:['542px','497px','51px','45px','auto','auto'],cu:['pointer'],br:["50%","50%","50%","50%"],f:[x11],s:[0,"rgb(0, 0, 0)",i]},{id:'q9b_submit_button',v:i,t:m,r:['226px','499px','209px','54px','auto','auto'],cu:['pointer'],br:["10px","10px","10px","10px"],f:[x11],s:[0,"rgb(0, 0, 0)",i]},{id:'Question2',t:m,r:['-395','337','512','201px','undefined','undefined'],br:["10px","10px","10px","10px"],f:[x11],s:[0,"rgb(0, 0, 0)",i],tf:[[],[],[],['0.4','0.4']],c:[{id:'RoundRectCopy3',t:m,r:['0','0','512','266','undefined','undefined'],cl:['rect(0px 512px 62px 0px)'],br:["10px","10px","10px","10px"],f:[x12],s:[0,"rgb(0, 0, 0)",i],tf:[],c:[{id:'Text2Copy',t:x,r:['17','12','481','45','undefined','undefined'],text:s13,n:[x15,x14,"rgba(255,255,255,1.00)",l,i,x16],tf:[]}]},{id:'TextCopy',t:x,r:['15','85','481','102px','undefined','undefined'],text:s17,n:[x15,x18,xc,l,i,l],tf:[]}]},{id:'Text7',t:x,r:['34','190','601','70','undefined','undefined'],text:s13,align:"center",n:[x20,x19,"rgba(255,255,255,1)",l,i,x16],tf:[]},{id:'Text8',t:x,r:['108','285','454','79','undefined','undefined'],text:s21,align:"center",n:[x20,x22,"rgba(255,255,255,1)",l,i,x16],tf:[]},{id:'NextButtonCopy',t:m,r:['262','391','197','61','undefined','undefined'],cu:['pointer'],br:["10px","10px","10px","10px"],o:1,f:[x10],s:[0,xc,i],tf:[],c:[{id:'Text5Copy2',t:x,r:['9','10','131','38','undefined','undefined'],text:s23,align:"auto",n:[x15,x24,"rgba(0,0,0,1.00)",l,i,x16],tf:[]}]},{id:'NextButtonCopy2',t:m,r:['-187','564','300','48','undefined','undefined'],cu:['pointer'],br:["10px","10px","10px","10px"],o:1,f:[x10],s:[0,xc,i],tf:[]},{id:'sb17',v:i,t:'ellipse',r:['81px','497px','51px','54px','auto','auto'],cu:['pointer'],br:["50%","50%","50%","50%"],f:[x25],s:[0,xc,i]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:19999,a:y,l:{"7bq2":15750,"q9b_skip_check":17637,"q9b_go":17750},tt:[]}}}};var S1=symbols[x26];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e27).P(bg,x11,c).P(zy,1,t,_,"").P(tx,-185,t,_,p).P(ty,96,t).P(zx,1,t,_,"").P(o,1).P("cursor",x28).P(w,145,_,_,p);A1.A(e29).P(tp,12).P("font-style",x16).P(c,x30,c).P(ff,x20).P(lf,17).P(fs,27);A1.A(e31).P(tp,10).P(w,131).P(c,xc,c).P("font-style",x16).P(h,38).P(ff,x20).P(lf,9).P(fs,32);A1.A(e32).P(c,xc,c).P(tx,-413,t).P("font-style",x16).P(h,58).P(ff,x20).P(ty,-472,t).P(w,114);A1.A(e34).P(bg,x33,c).P(tp,0).P(lf,0).P(cl,[0,512,62,0],_,x35);A1.A(e38).P(tp,85).P(h,102).P("font-style",l).P(ff,x20).P(lf,15).P(fs,26);A1.A(e39).P(tx,-160,t).P(ty,163,t).T(18.5,233,0.5,ql).P(o,0,_,_,"").T(17,1,0.5);A1.A(e40).P(o,0,_,_,"").P("cursor",x28).P(d,i).T(17.391,b).T(17.75,i);A1.A(e41).P(o,1,_,_,"").T(18.244,0,0.756,qiq).P(ty,74,t,_,p).T(18.244,156,0.756).P(tx,119,t).T(18.244,-276,0.756);A1.A(e42).P(o,0,_,_,"").P("cursor",x28).P(d,i).T(17.5,b).T(17.587,i);A1.A(e43).P(bg,x11,c).P("cursor",x28).P(w,300).P(h,48).P(tp,565).T(11,470,0.5,qiq,487).T(11.5,473,3).P(zy,1,t,_,"").T(14.5,0.75,0.5).P(zx,1,t).T(14.5,0.75,0.5).P(o,0).T(13.5,1,1).T(14.5,0,0.5).P(lf,-176,_,_,p).T(11,-176,0.5,_,58).T(11.5,187,3,_,-20).T(14.5,662,0.5,ql).T(15,414.34,3.412);A1.A(e44).P(ta,po).P(h,70).P(lf,34).P(fs,53).P(tp,64).T(2,190,1.54,qoq).T(7.75,245,0.75).T(10.066,245).T(10.156,-63).P(o,0,_,_,"").T(2,1,1.54).T(8.5,1).T(9.25,0,0.75,qiq);A1.A(e45).P(bg,x11,c).P("cursor",x28).P(w,145).P(lf,262).P(tp,391).T(7.25,420,0.75,qoq).P(zy,1,t,_,"").T(7.25,0.75,0.75).P(zx,1,t).T(7.25,0.75,0.75).P(o,0).T(6,1,1.25).T(7.25,0,0.75).P(d,b).T(10.288,i);A1.A(e46).P(h,258).P(d,i).T(15.75,b).T(19,i).P(o,0,_,_,"").T(16.5,1,0.602,qoq).P(ty,239,t,_,p).T(16.5,245,0.602).P(tx,419,t).T(16.5,0,0.602);A1.A(e47).P(o,0,_,_,"").P("cursor",x28).P(d,i).T(17.5,b).T(17.687,i);A1.A(e48).P(bg,x11,c).P("cursor",x28).P(tp,473).T(16.5,491.07,1,qiq).T(17.637,491.07).P(zy,0.74,t,_,"").T(17.5,0.74).P(d,i).T(17.637,b).P(zx,0.74,t).T(17.5,0.74).P(o,0).T(17,0).T(17.5,0).T(18.244,0).T(18.75,0).P(lf,711,_,_,p).T(16.5,450.85,1).T(17.5,528.12,0.137).T(17.637,45,1.113,ql).P(w,74.57).T(17.637,74.57);A1.A(e49).P(tp,532).T(0.095,460,0.905,ql).T(18.5,539,0.5).P(o,1,_,_,"").T(18.5,0.61,0.5);A1.A(e50).P(c,x37,c).P(ta,po).P(fs,21).P(d,i).T(17.637,b).T(17.687,i);A1.A(e51).P(ov,x36).P(h,560).P(w,670).P(bg,x52,c).T(19.169,x53,0.83,ql);A1.A(e54).P(h,79).P(fs,20).P(tp,285).T(7.5,338,0.75,qoq).T(10.066,338).T(10.156,613.99).P(zy,1,t,_,"").T(7.5,0.8,0.75).P(zx,1,t).T(7.5,0.8,0.75).P(o,0).T(4.25,1,1).T(7.5,0,0.75).P(lf,108,_,_,p).T(10.066,108).T(10.156,108);A1.A(e55).P(lf,0).P(cl,[28,670,100,0],_,x35).P(tp,532).T(0.095,460,0.905,ql).P(o,0.25,_,_,"").T(16.75,1,0.75).T(17.75,0.25,0.25).T(18,0,0.75);A1.A(e56).P(h,201).P(tp,92.18).T(15.25,70.15,1.5,qoq).T(18,154.18,1.5,qiq).P(zy,0.4,t,_,"").T(15.75,0.87,1,qoq).T(18,0.4,1,qiq).P(zx,0.4,t).T(15.75,0.87,1,qoq).T(18,0.4,1,qiq).P(o,0).T(15.75,1,1,qoq).T(18,0,1,qiq).P(lf,559.4,_,_,p).T(15.25,81.4,1.5,qoq).T(18,-297.6,1,qiq).T(19,-395.6,0.5,ql);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-1999079");