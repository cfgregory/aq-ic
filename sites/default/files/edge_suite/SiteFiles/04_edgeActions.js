
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym,e){window.open("05.html","_self");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7250, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_NextButtonCopy}", "click", function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14350, function(sym,e){sym.stop();
$("[name='sabbathq01']")
	.focus()
	.attr("tabindex", "1");
$("#Stage_q1_submit_button").attr("tabindex", "2");

$("#Stage_q1_submit_button")
	.unbind("focus")
	.focus(function() {
		$("#Stage_submit_focus").show();
});

$("#Stage_q1_submit_button")
	.unbind("blur")
	.blur(function() {
		$("#Stage_submit_focus").hide();
});

});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17500, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30725, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_NextButton}", "click", function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_A_timeline_button}", "click", function(sym,e){sym.play("a_select");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17750, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19750, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21250, function(sym,e){sym.play("wrong_submit");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21500, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym,e){sym.play("wrong_submit");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24750, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18948, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_B_timeline_button}", "click", function(sym,e){sym.play("b_select");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_C_timeline_button}", "click", function(sym,e){sym.play("c_select");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33000, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35750, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37250, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40000, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41500, function(sym,e){window.open("05.html","_self");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41750, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37000, function(sym,e){window.open("05.html","_self");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33250, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q4_a_select_button}", "click", function(sym,e){sym.play("true_select");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q4_b_select_button}", "click", function(sym,e){sym.play("false_select");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26000, function(sym,e){sym.play(28500);});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26250, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q2_skip_go_button}", "click", function(sym,e){sym.play("q2_skip_go");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19657, function(sym,e){sym.play(28500);});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_a_submit_button}", "click", function(sym,e){sym.play("a_submit");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q2_b_submit_button}", "click", function(sym,e){sym.play("b_submit");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q2_c_submit_button}", "click", function(sym,e){sym.play("c_submit");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q4_a_submit_button}", "click", function(sym,e){sym.play("true_submit");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q4_false_submit_button}", "click", function(sym,e){sym.play("false_submit");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q2_skip_button}", "click", function(sym,e){sym.play("q2_skip_check");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q4_skip_button}", "click", function(sym,e){sym.play("q4_skip_check");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 43250, function(sym,e){window.open("05.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_sb05}", "click", function(sym,e){window.open("03.html","_self");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14439, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q1_skip_button}", "click", function(sym,e){sym.play("q1_skip_check");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q1_skip_go_button}", "click", function(sym,e){sym.play("q1_next_go");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q1_submit_button}", "click", function(sym,e){sym.play("q1_next_go");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_sb06}", "click", function(sym,e){sym.play(7250);});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_sb07}", "click", function(sym,e){sym.play(14350);});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_sb08}", "click", function(sym,e){sym.play("q2_home");});
//Edge binding end
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30638, function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q3_submit_button}", "click", function(sym,e){sym.play("q3_next_go");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q3_skip_button}", "click", function(sym,e){sym.play("q3_skip_check");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q3_skip_go_button}", "click", function(sym,e){sym.play("q3_next_go");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_sb09}", "click", function(sym,e){sym.play("q3_home");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_q4_skip_go_button}", "click", function(sym,e){sym.play("q4_skip_go");});
//Edge binding end
      Symbol.bindElementAction(compId, symbolName, "document", "keydown", function(sym, e) {
         // insert code to be run when the user presses a key.
         // The variable “e.which” tells you the key code of the key that was pressed, e.g. 32 = space
         if (e.which == 13) {
         	if ($("[name='sabbathq01']").is(":focus")) {
         		return;
         	}
         	else if ($("#Stage_q1_submit_button") && $("#Stage_q1_submit_button").css("display") != "none") {
         		sym.play("q1_next_go");
         	}
         	else if ($("#Stage_NextButton") && $("#Stage_NextButton").css("display") != "none") {
         		sym.play();
         	}
         }
         /*
         else if (e.which == 9) {
         	if ($("[name='sabbathq01']").is(":focus")) {
         		//window.alert("Tab pressed");
         		$("#Stage_q1_submit_button").focus();
         	}
         }
         */

      });
      //Edge binding end

})("stage");
   //Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'preloader'
(function(symbolName){})("preloader");
   //Edge symbol end:'preloader'

})(jQuery, AdobeEdge, "EDGE-1999079");