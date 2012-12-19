
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_next_play}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",8500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text3}","click",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_biblebox_next_button}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_biblebox_back_button}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_biblebox_escape}","click",function(sym,e){sym.play("q12_home");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chart_submit_button}","click",function(sym,e){sym.play("q12_next_go");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chart_skip_button}","click",function(sym,e){sym.play("q12_skip_check");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chart_skip_go_button}","click",function(sym,e){sym.play("q12_next_go");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17000,function(sym,e){window.open("11.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q13_submit_button}","click",function(sym,e){sym.play("q13_next_go");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q13_skip_button}","click",function(sym,e){sym.play("q13_skip_check");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q13_skip_go_button}","click",function(sym,e){sym.play("q13_next_go");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.play(3000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sb24}","click",function(sym,e){window.open("09.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sb25}","click",function(sym,e){sym.play(4000);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_luke_finished_text}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_label6}","click",function(sym,e){sym.play('readbegin');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_label7}","click",function(sym,e){sym.play('luke_begin');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text6}","click",function(sym,e){sym.play();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-4723648");