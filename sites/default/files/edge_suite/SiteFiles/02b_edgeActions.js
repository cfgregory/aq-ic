
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_next1}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",18500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){window.open("03.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_music_box_a}","click",function(sym,e){sundaysonga.playclip()});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_music_box_b}","click",function(sym,e){sundaysongb.playclip()});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_music_box_c}","click",function(sym,e){sundaysongc.playclip()});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_music_box_d}","click",function(sym,e){sundaysongd.playclip()});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_next2}","click",function(sym,e){sym.play(20500);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2210,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sb01}","click",function(sym,e){window.open("01.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sb02}","click",function(sym,e){sym.play(1000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sb03}","click",function(sym,e){sym.play(6250);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sb04}","click",function(sym,e){sym.play(10750);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3245,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2205,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_trigger}","mouseenter",function(sym,e){sym.play("grow");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_trigger}","mouseleave",function(sym,e){sym.play("shrink");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2733,function(sym,e){sym.stop();});
//Edge binding end
})("music_box");
//Edge symbol end:'music_box'

//=========================================================
(function(symbolName){})("woman_sabbath");
//Edge symbol end:'woman_sabbath'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'
})(jQuery,AdobeEdge,"EDGE-11976501");