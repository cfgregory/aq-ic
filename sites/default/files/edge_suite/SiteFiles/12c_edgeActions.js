
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play_button}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q14_submit_button}","click",function(sym,e){sym.play("q14_next_go");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q14_skip_button}","click",function(sym,e){sym.play("q14_skip_check");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q14_skip_go_button}","click",function(sym,e){sym.play("q14_next_go");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q15_submit_button}","click",function(sym,e){sym.play("q15_next_go");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q15_skip_button}","click",function(sym,e){sym.play("q15_skip_check");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q15_skip_go_button}","click",function(sym,e){sym.play("q15_next_go");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q16_submit_button}","click",function(sym,e){sym.play("q16_next_go");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q16_skip_button}","click",function(sym,e){sym.play("q16_skip_check");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q16_skip_go_button}","click",function(sym,e){sym.play("q16_next_go");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",16000,function(sym,e){window.open("13.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sb29}","click",function(sym,e){window.open("12a.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sb30}","click",function(sym,e){sym.play(3250);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sb31}","click",function(sym,e){sym.play(5750);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sb32}","click",function(sym,e){sym.play("q15_begin");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-4723648");