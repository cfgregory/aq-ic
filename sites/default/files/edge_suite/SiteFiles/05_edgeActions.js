
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Next}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text5}","click",function(sym,e){window.open("http://www.nytimes.com/2003/03/02/magazine/bring-back-the-sabbath.html");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7440,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11500,function(sym,e){window.open("05c.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sb10}","click",function(sym,e){window.open("04.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_sb11}","click",function(sym,e){sym.playReverse();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-32161239");