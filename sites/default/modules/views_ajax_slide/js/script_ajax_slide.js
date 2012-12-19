jQuery.noConflict();

(function ($) {
Drupal.ajax.prototype.commands.ajaxFlipLeft = function (ajax, response, status) {
    var wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
    var method = response.method || ajax.method;
    var new_content_wrapped = $('<div></div>').html(response.data);
    var new_content = new_content_wrapped.contents();
    if (new_content.length != 1 || new_content.get(0).nodeType != 1) {
      new_content = new_content_wrapped;
    }
    var pager = wrapper.find(".pager");
    var new_pager = new_content.find(".pager");
    var before = parseInt(pager.find(".pager-current").html());
    var after = parseInt(new_pager.find(".pager-current").html());
    pager.html(new_pager.html());
    wrapper.find(".view-content").wrap('<div class="container" />');
    wrapper.attr("class",new_content.attr("class"));
    if (after > before) {
    	wrapper.find(".view-content").addClass("slider").after(new_content.find(".view-content").addClass("sliding"));
    	wrapper.find(".container").animate({left:"-876px"},"fast",function(){$(".slider").slideToggle(function(){$(".slider").remove();wrapper.find(".view-content").unwrap();$(".sliding").removeClass("sliding");});});
    } else {
    	wrapper.find(".view-content").addClass("slider").before(new_content.find(".view-content").addClass("sliding"));
    	wrapper.find(".container").css({left:"-876px"});
    	wrapper.find(".container").animate({left:"0"},"fast",function(){$(".slider").slideToggle(function(){$(".slider").remove();wrapper.find(".view-content").unwrap();$(".sliding").removeClass("sliding");});});
    }
    $("body,html").animate({scrollTop : 0},'slow');
    if (wrapper.parents('html').length > 0) {
      // Apply any settings from the returned JSON if available.
      var settings = response.settings || ajax.settings || Drupal.settings;
      Drupal.attachBehaviors(wrapper, settings);
    }
    
};
})(jQuery);

jQuery.noConflict();