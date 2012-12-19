
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text4}","click",function(sym,e){window.open("http://en.wikipedia.org/wiki/Judah_Halevi");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10500,function(sym,e){window.open("07b.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Continue}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.play(1500);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sb16}","click",function(sym,e){window.open("06b.html","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-35099416");