ezoicSiteSpeed(jQuery(), String(/documentReady/).substring(1).slice(0,-1), String(/jQuery-document-dot-ready/).substring(1).slice(0,-1), function(){var b={type:"inline",preloader:!1,focus:"#name",removalDelay:500,callbacks:{beforeOpen:function(){this.st.mainClass=this.st.el.attr("data-effect");tdLogin.clearFields();tdLogin.showHideMsg();700>jQuery(window).width()?this.st.focus=!1:!1===tdDetect.isIe&&(this.st.focus="#login_email")},beforeClose:function(){}},disableOn:function(){return 750>jQuery(window).width()?!1:!0}};void 0!==window.tdb_login_sing_in_shortcode&&(jQuery(".tdb_header_user .td-login-modal-js").magnificPopup(b),
jQuery(".tdb-head-usr-log").on("click",function(a){750>jQuery(window).width()&&jQuery(a.target).parents("tdb_header_user").length&&(a.preventDefault(),jQuery("body").addClass("td-menu-mob-open-menu"),jQuery(".td-mobile-container").hide(),jQuery("#td-mobile-nav").addClass("td-hide-menu-content"),setTimeout(function(){jQuery(".td-mobile-container").show()},500),tdLogin.showHideElementsMobile([["#td-login-mob",1],["#td-register-mob",0],["#td-forgot-pass-mob",0]]))}));"yes"===window.tdc_is_installed&&
(jQuery(".comment-reply-login").attr({href:"#login-form","data-effect":"mpf-td-login-effect"}),jQuery(".comment-reply-login, .td-login-modal-js").magnificPopup(b));jQuery(".td-login-modal-js, .comment-reply-login").on("click",function(a){750>jQuery(window).width()&&!jQuery(a.target).parents("tdb_header_user").length&&(a.preventDefault(),jQuery("body").addClass("td-menu-mob-open-menu"),jQuery(".td-mobile-container").hide(),jQuery("#td-mobile-nav").addClass("td-hide-menu-content"),setTimeout(function(){jQuery(".td-mobile-container").show()},
500),tdLogin.showHideElementsMobile([["#td-login-mob",1],["#td-register-mob",0],["#td-forgot-pass-mob",0]]))});jQuery("#login-link").on("click",function(){tdLogin.showHideElements([["#td-login-div",1],["#td-register-div",0],["#td-forgot-pass-div",0]]);jQuery("#login-form").addClass("td-login-animation");700<jQuery(window).width()&&!1===tdDetect.isIe&&jQuery("#login_email").focus();tdLogin.showHideMsg()});jQuery("#register-link").on("click",function(){tdLogin.showHideElements([["#td-login-div",0],
["#td-register-div",1],["#td-forgot-pass-div",0]]);jQuery("#login-form").addClass("td-login-animation");700<jQuery(window).width()&&!1===tdDetect.isIe&&jQuery("#register_email").focus();tdLogin.showHideMsg()});jQuery("#forgot-pass-link").on("click",function(a){a.preventDefault();tdLogin.showHideElements([["#td-login-div",0],["#td-register-div",0],["#td-forgot-pass-div",1]]);jQuery("#login-form").addClass("td-login-animation");700<jQuery(window).width()&&!1===tdDetect.isIe&&jQuery("#forgot_email").focus();
tdLogin.showHideMsg()});jQuery("#login_button").on("click",function(){tdLogin.handlerLogin()});jQuery("#login_pass").keydown(function(a){(a.which&&13===a.which||a.keyCode&&13===a.keyCode)&&tdLogin.handlerLogin()});jQuery("#register_button").on("click",function(){tdLogin.handlerRegister()});jQuery("#register_user").keydown(function(a){(a.which&&13===a.which||a.keyCode&&13===a.keyCode)&&tdLogin.handlerRegister()});jQuery("#forgot_button").on("click",function(){tdLogin.handlerForgotPass()});jQuery("#forgot_email").keydown(function(a){(a.which&&
13===a.which||a.keyCode&&13===a.keyCode)&&tdLogin.handlerForgotPass()});jQuery(".td-back-button").on("click",function(){tdLogin.showHideElements([["#td-login-div",1],["#td-register-div",0],["#td-forgot-pass-div",0]]);jQuery("#login-form").removeClass("td-login-animation");jQuery(".td_display_err").hide()});jQuery(".td-login-fb-modal").on("click",function(a){a.preventDefault();a=jQuery(this);tdLogin.doFBLoginAction(a)})});var tdLogin={};
(function(){tdLogin={email_pattern:/^[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/,pass_pattern:/^(?=.{6,})(?=.*[a-z])(?=.*[A-Z])/,handlerLogin:function(b){b=jQuery("#login_email");var a=jQuery("#login_pass"),c=jQuery("#gRecaptchaResponseL");if(b.length&&a.length){var d=b.val().trim(),e=a.val().trim(),h=c.attr("data-sitekey"),f="";d&&e?(tdLogin.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]),tdLogin.showHideMsg(td_please_wait),c.length?
ezoicSiteSpeed(grecaptcha, String(/documentReady/).substring(1).slice(0,-1), String(/jQuery-document-dot-ready/).substring(1).slice(0,-1), function(){grecaptcha.execute(h,{action:"submit"}).then(function(a){f=a;tdLogin.doAction("td_mod_login",d,"",e,f)})}):tdLogin.doAction("td_mod_login",d,"",e)):tdLogin.showHideMsg(td_email_user_pass_incorrect)}},handlerRegister:function(){var b=jQuery("#register_email"),a=jQuery("#register_user"),c=jQuery("#gRecaptchaResponseR");if(b.length&&a.length){var d=b.val().trim(),e=a.val().trim(),h=c.attr("data-sitekey"),f="";tdLogin.email_pattern.test(d)&&e?(tdLogin.addRemoveClass([".td_display_err",
1,"td_display_msg_ok"]),tdLogin.showHideMsg(td_please_wait),c.length?grecaptcha.ready(function(){grecaptcha.execute(h,{action:"submit"}).then(function(a){f=a;tdLogin.doAction("td_mod_register",d,e,"",f)})}):tdLogin.doAction("td_mod_register",d,e,"")):tdLogin.showHideMsg(td_email_user_incorrect)}},handlerForgotPass:function(){var b=jQuery("#forgot_email");b.length&&(b=b.val().trim(),tdLogin.email_pattern.test(b)?(tdLogin.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]),tdLogin.showHideMsg(td_please_wait),
tdLogin.doAction("td_mod_remember_pass",b,"","")):tdLogin.showHideMsg(td_email_incorrect))},showHideElements:function(b){if(b.constructor===Array)for(var a=b.length,c=0;c<a;c++)if(b[c].constructor===Array&&2===b[c].length){var d=jQuery(b[c][0]);d.length&&(1===b[c][1]?d.removeClass("td-display-none").addClass("td-display-block"):d.removeClass("td-display-block").addClass("td-display-none"))}},showHideElementsMobile:function(b){if(b.constructor===Array)for(var a=b.length,c=0;c<a;c++)if(b[c].constructor===
Array&&2===b[c].length){var d=jQuery(b[c][0]);d.length&&(1===b[c][1]?d.removeClass("td-login-hide").addClass("td-login-show"):d.removeClass("td-login-show").addClass("td-login-hide"))}},showTabs:function(b){if(b.constructor===Array)for(var a=b.length,c=0;c<a;c++)if(b[c].constructor===Array&&2===b[c].length){var d=jQuery(b[c][0]);d.length&&(1===b[c][1]?d.addClass("td_login_tab_focus"):d.removeClass("td_login_tab_focus"))}},addRemoveClass:function(b){if(b.constructor===Array&&3===b.length){var a=jQuery(b[0]);
a.length&&(1===b[1]?a.addClass(b[2]):a.removeClass(b[2]))}},showHideMsg:function(b){var a=jQuery(".td_display_err");a.length&&(void 0!==b&&b.constructor===String&&0<b.length?(a.show(),a.html(b)):(a.hide(),a.html("")))},clearFields:function(){jQuery("#login_email").val("");jQuery("#login_pass").val("");jQuery("#register_email").val("");jQuery("#register_user").val("");jQuery("#forgot_email").val("")},doAction:function(b,a,c,d,e){jQuery.ajax({type:"POST",url:td_ajax_url,data:{action:b,email:a,user:c,
pass:d,captcha:e},success:function(a,b,c){a=jQuery.parseJSON(a);switch(a[0]){case "login":1===a[1]?location.reload(!0):(tdLogin.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]),tdLogin.showHideMsg(a[2]));break;case "register":1===a[1]?tdLogin.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]):tdLogin.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]);tdLogin.showHideMsg(a[2]);break;case "remember_pass":1===a[1]?tdLogin.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]):
tdLogin.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]),tdLogin.showHideMsg(a[2])}},error:function(a,b,c){}})},doCustomAction:function(b,a,c,d,e,h){a={action:b,email:a,user:c,pass:d,retype_pass:e,captcha:h};switch(b){case "td_mod_login":var f=jQuery("#tds-login-div");b=f.closest(".tds-block-inner").find("#tds_login_button");f.find(".td_display_err").hide();b.addClass("tds-s-btn-saving");break;case "td_mod_subscription_register":var g=jQuery("#tds-register-div");b=g.closest(".tds-block-inner").find("#tds_register_button");
g.find(".td_display_err").hide();b.addClass("tds-s-btn-saving");break;case "td_mod_subscription_reset_pass":var k=jQuery("#tds-reset-pass-div");b=k.closest(".tds-block-inner").find("#tds_reset_button");k.find(".td_display_err").hide();b.addClass("tds-s-btn-saving")}jQuery.ajax({type:"POST",url:td_ajax_url,data:a,success:function(a,b,c){a=jQuery.parseJSON(a);switch(a[0]){case "login":f.length&&f.closest(".tds-block-inner").find("#tds_login_button").removeClass("tds-s-btn-saving");if(1===a[1]){if(f.length){var d=
new URLSearchParams((new URL(window.location.href)).search.slice(1));d.has("ref_url")?(a=f.closest(".tds-block-inner").find("#tds_login_button"),a.length&&(a.attr("disabled",!0),window.location.replace(window.atob(d.get("ref_url").replace("=",""))))):(a=f.closest(".tds-block-inner").find("#tds_login_button"),d=f.closest(".tds-block-inner").find("#tds-my-account"),a.length&&a.attr("disabled",!0),d.length&&window.location.replace(d.val()))}}else tdLogin.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]),
f.length&&(tdLogin.addRemoveClass([".td_display_err",0,"tds-s-notif-success"]),tdLogin.addRemoveClass([".td_display_err",1,"tds-s-notif-error"])),tdLogin.showHideMsg(a[2]);break;case "register":g.length&&g.closest(".tds-block-inner").find("#tds_register_button").removeClass("tds-s-btn-saving");if(1===a[1]){if(tdLogin.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]),tdLogin.addRemoveClass([".td_display_err",1,"tds-s-notif-success"]),tdLogin.addRemoveClass([".td_display_err",0,"tds-s-notif-error"]),
g.length){d=new URLSearchParams((new URL(window.location.href)).search.slice(1));if(d.has("ref_url")){var e=g.find("#tds-continue-subscription");b=g.closest(".tds-block-inner").find("#tds_register_button");c=g.closest(".tds-block-inner").find(".tds-s-cal-page-switch");e.length&&e.show().attr("href",window.atob(d.get("ref_url").replace("=","")));b.length&&b.hide();c.length&&c.hide()}else b=g.closest(".tds-block-inner").find("#tds_register_button"),c=g.closest(".tds-block-inner").find(".tds-s-cal-page-switch"),
d=g.closest(".tds-block-inner").find("#tds-my-account"),e=g.closest(".tds-block-inner").find("#tds-my-account-register"),b.length&&b.hide(),c.length&&c.hide(),d.length&&d.show(),e.length&&e.data("enabled")&&window.location.replace(e.val());g.find(".tds-s-form-content .tds-s-fc-inner").hide()}}else tdLogin.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]),tdLogin.addRemoveClass([".td_display_err",0,"tds-s-notif-success"]),tdLogin.addRemoveClass([".td_display_err",1,"tds-s-notif-error"]);tdLogin.showHideMsg(a[2]);
break;case "remember_pass":1===a[1]?tdLogin.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]):tdLogin.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]);tdLogin.showHideMsg(a[2]);break;case "reset_pass":k.length&&k.closest(".tds-block-inner").find("#tds_reset_button").removeClass("tds-s-btn-saving"),1===a[1]?(tdLogin.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]),tdLogin.addRemoveClass([".td_display_err",1,"tds-s-notif-success"]),tdLogin.addRemoveClass([".td_display_err",
0,"tds-s-notif-error"]),k.length&&setTimeout(function(){window.location.replace(h)},1E3)):(tdLogin.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]),tdLogin.addRemoveClass([".td_display_err",0,"tds-s-notif-success"]),tdLogin.addRemoveClass([".td_display_err",1,"tds-s-notif-error"])),tdLogin.showHideMsg(a[2])}},error:function(a,b,c){}})},doFBLoginAction:function(b){var a=b.closest(".td-login-wrap");a.find(".td_display_err").hide();a.addClass("td-login-wrap-fb-open");ezoicSiteSpeed({objOrFunction:FB.login, object:FB, function: String(/login/).substring(1).slice(0,-1)}, String(/documentReady/).substring(1).slice(0,-1), String(/jQuery-document-ready/).substring(1).slice(0,-1), function(b){"connected"===
b.status?FB.api("/me?fields=id,name,first_name,last_name,email,locale",function(b){jQuery.ajax({type:"POST",url:td_ajax_url,data:{action:"td_ajax_fb_login_user",user:b},success:function(b){b=jQuery.parseJSON(b);""!==b.error?(a.removeClass("td-login-wrap-fb-open"),tdLogin.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]),tdLogin.showHideMsg(b.error)):(""!==b.success&&(tdLogin.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]),tdLogin.showHideMsg(b.success)),location.reload(!0))}})}):
(a.removeClass("td-login-wrap-fb-open"),tdLogin.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]),tdLogin.showHideMsg("An unexpected error has occured. Please try again!"))},{scope:"public_profile, email"})},doFBLoginActionOptIn:function(b,a){var c=a.closest(".tds-block-inner");a=c.find(".tds-s-form");var d="";switch(b){case "login":d=a.find("#tds-my-account").val();break;case "register":d=a.find("#tds-my-account-register").val()}a.find(".td_display_err").hide();c.addClass("tds-s-fb-open");
ezoicSiteSpeed({objOrFunction:FB.login, object:FB, function: String(/login/).substring(1).slice(0,-1)}, String(/documentReady/).substring(1).slice(0,-1), String(/jQuery-document-ready/).substring(1).slice(0,-1), function(a){"connected"===a.status?FB.api("/me?fields=id,name,first_name,last_name,email,locale",function(a){jQuery.ajax({type:"POST",url:td_ajax_url,data:{action:"td_ajax_fb_login_user",user:a},success:function(a){a=jQuery.parseJSON(a);if(""!==a.error)c.removeClass("tds-s-fb-open"),tdLogin.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]),tdLogin.addRemoveClass([".td_display_err",0,"tds-s-notif-success"]),tdLogin.addRemoveClass([".td_display_err",1,"tds-s-notif-error"]),tdLogin.showHideMsg(a.error);
else{""!==a.success&&(tdLogin.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]),tdLogin.addRemoveClass([".td_display_err",1,"tds-s-notif-success"]),tdLogin.addRemoveClass([".td_display_err",0,"tds-s-notif-error"]),tdLogin.showHideMsg(a.success));var b=new URLSearchParams((new URL(window.location.href)).search.slice(1));setTimeout(function(){b.has("ref_url")?window.location.replace(window.atob(b.get("ref_url").replace("=",""))):window.location.replace(d)},200)}}})}):(c.removeClass("tds-s-fb-open"),
tdLogin.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]),tdLogin.addRemoveClass([".td_display_err",0,"tds-s-notif-success"]),tdLogin.addRemoveClass([".td_display_err",1,"tds-s-notif-error"]),tdLogin.showHideMsg("An unexpected error has occured. Please try again!"))},{scope:"public_profile, email"})}}})();