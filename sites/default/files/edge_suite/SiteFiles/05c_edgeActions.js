
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q6_submit_button}","click",function(sym,e){sym.play("q6_next");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q6_skip_arrow}","click",function(sym,e){sym.play("q6_skip_check");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q6_skip_go_button}","click",function(sym,e){sym.play("q6_next");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q7_submit_button}","click",function(sym,e){sym.play("q7_skip_go2");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q7_skip_arrow}","click",function(sym,e){sym.play("q7_skip_check");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q8_skip_arrow}","click",function(sym,e){sym.play("q8_skip_check");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q9_submit_button}","click",function(sym,e){sym.play("q8_next_go");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q8_skip_go_button}","click",function(sym,e){sym.play("q8_next_go");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q7_skip_go_button_2}","click",function(sym,e){sym.play("q7_skip_go2");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q9_skip_arrow}","click",function(sym,e){sym.play("q9_skip_check");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_RoundRect2}","click",function(sym,e){sym.play("q9_next_go");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q9_skip_go_button}","click",function(sym,e){sym.play("q9_next_go");});
//Edge binding end
Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){window.open("06.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sb12}","click",function(sym,e){window.open("05.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sb13}","click",function(sym,e){sym.play(3000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sb14}","click",function(sym,e){sym.play(5000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sb15}","click",function(sym,e){sym.play(7000);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-899741");