
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_NextButtonCopy}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",20750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_NextButton}","click",function(sym,e){sym.play("nextslide");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.play(1250);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",14000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play_button_13}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q17_submit_button}","click",function(sym,e){sym.play("q17_next_go");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q17_skip_button}","click",function(sym,e){sym.play("q17_skip_check");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q17_skip_go_button}","click",function(sym,e){sym.play("q17_next_go");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q18_submit_button}","click",function(sym,e){sym.play("q18_next_go");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q18_skip_button}","click",function(sym,e){sym.play("q18_skip_check");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_q18_skip_go_button}","click",function(sym,e){sym.play("q18_next_go");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",23500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sb33}","click",function(sym,e){window.open("12c.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sb34}","click",function(sym,e){sym.play(7250);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sb35}","click",function(sym,e){sym.play("q17_home");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Ellipse4}","click",function(sym,e){sym.play(17500);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){sym.play(6000);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'
})(jQuery,AdobeEdge,"EDGE-1999079");