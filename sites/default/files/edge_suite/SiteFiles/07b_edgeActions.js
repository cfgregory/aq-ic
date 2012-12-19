
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){window.open("08.html","_self");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_NextButtonCopy}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",14500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_NextButtonCopy2}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_NextButton}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10500,function(sym,e){sym.play("7bq2");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.play("7bq2");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_question07} > form:nth-child(1) > input:nth-child(2)","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17637,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q9b_skip_arrow}","click",function(sym,e){sym.play("q9b_skip_check");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q9b_submit_button}","click",function(sym,e){sym.play("q9b_go");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sb17}","click",function(sym,e){window.open("07.html","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'
})(jQuery,AdobeEdge,"EDGE-1999079");