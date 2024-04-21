"undefined"===typeof window.tdcPostSettings&&(window.tdcPostSettings={tdbTemplateType:"all"});if(window.tdbVue&&"undefined"!==typeof window.tdbVue.router){var eventHub=new CloudLibraryVue;CloudLibraryVue.component("image-links",{template:'\n            <a :class="classes" :href="link">{{text}}</a>\n        ',props:{classes:[],link:"",text:""}});new CloudLibraryVue({el:"#tdb-modal",router:window.tdbVue.router})}
window.tdbVueManager&&"undefined"!==typeof window.tdbVueManager.router&&new CloudLibraryVue({el:"#tdb-modal-website-manager",router:window.tdbVueManager.router});
(function(){function m(a,b,c,d,f,g,h){var e=jQuery(".tdb-"+a+"-templates");e.length&&"undefined"===typeof e.data("tdb-templates")&&("undefined"!==typeof g&&g.call(),tdbGetMobileTemplates(a,b,e),g="","undefined"!==typeof tdcState&&(g=tdcState.isMobileComposer()?"1":""),g={action:"tdb_get_"+a+"_templates",mobile_templates:g,_nonce:window.tdb_globals.wpRestNonce},"cpt_tax"===a?g.data_id=b:g[a+"_id"]=b,jQuery.ajax({type:"POST",url:td_ajax_url,data:g,success:function(g,k,p){e.html("");g=jQuery.parseJSON(g);
k='<div class="tdb-templates-header"><div class="tdb-templates-header-item tdb-templates-header-item-name"><span>Cloud Templates</span></div>'+("undefined"!==typeof d&&!0===d?'<div class="tdb-templates-header-item tdb-templates-header-item-global"><span>Global</span></div>':"")+'<div class="tdb-templates-header-item tdb-templates-header-item-mobile" title="Optional - Create or assign a dedicated Mobile Template"><span>Mobile Template</span></div></div>';var l=p="",m=!1;_.isArray(g)&&g.length?(_.each(g,
function(e,g,h){h="";"true"===e.is_current.toString()&&(h=" tdb-current",m=!0);var k="";g="";switch(a){case "single":k=e.template_title+" - Set template for this post";break;case "category":k=e.template_title+" - Set template for this category";break;case "author":k=e.template_title+" - Set template for this author";break;case "tag":k=e.template_title+" - Set template for this tag";break;case "search":""!==e.cpt?(k=e.template_title+" - Set this template for the "+e.cpt.label+" custom post type",g=
' data-cpt="'+e.cpt.name+'"'):k=e.template_title+" - Set this template for post search results";break;case "woo_product":k=e.template_title+" - Set template for this product";break;case "woo_archive":k=e.template_title+" - Set template for this product archive";break;case "cpt":k=e.template_title+" - Set template for this custom post type";break;case "cpt_tax":""!==e.cpt?(k=e.template_title+" - Set this template for the "+e.cpt.label+" custom post type archive",g=' data-cpt="'+e.cpt.name+'"'):k=e.template_title+
" - Set template for this taxonomy"}h='<div class="tdb-template-el tdb-'+a+"-template-el"+h+'"  data-template-id="'+e.template_id+'"><div class="tdb-template-el-id tdb-'+a+'-template-id">'+e.template_id+'</div><div class="tdb-template-el-title" data-type="'+a+'" data-action="'+c+'" title="'+k+'" data-'+a+'-id="'+b+'" data-template-id="'+e.template_id+'"'+g+">"+e.template_title+'</div><div class="tdb-template-el-wrap"><div class="tdb-template-el-icon"><div class="tdb-template-el-options"><div title="Rename template" class="tdb-template-el-edit">Rename</div><div title="Duplicate template" class="tdb-template-el-duplicate">Duplicate</div><div title="Delete template" class="tdb-template-el-delete">Delete</div></div></div></div>';
"undefined"!==typeof d&&!0===d&&(k="","undefined"!==typeof f&&""!==f&&(k='data-global-action="'+f+'"'),h+='<div class="tdb-template-el-global tdb-'+a+'-template-global" title="Set as Global Template" data-type="'+a+'" data-'+a+'-id="'+b+'" data-template-id="'+e.template_id+'" '+k+g+'><input type="checkbox" class="tdb-template-el-global-input tdb-'+a+'-template-global-input" '+(!0===e.is_global?'checked="checked" ':"")+'><label></label><span class="tdb-template-el-global-checked tdb-'+a+'-template-global-checked">Global</span></div>');
h+='<div class="tdb-template-el-mobile-wrap tdb-'+a+'-template-mobile" data-type="'+a+'" data-'+a+'-id="'+b+'" data-template-id="'+e.template_id+'"><span class="tdb-template-el-mobile">'+(""===e.mobile_template_title?"-":'<span class="tdb-template-el-mobile-active">Yes</span>')+'</span><div class="tdb-template-el-mobile-btns" data-mobile-template-id="'+e.mobile_template_id+'" data-template-id="'+e.template_id+'"><div title="Optional - New mobile template" class="'+a+"id-"+e.template_id+' tdb-template-el-mobile-btn tdb-template-el-mobile-blank tdb-create-mobile-template" data-type="'+
a+'" data-'+a+'-id="'+b+'" data-template-id="'+e.template_id+'"></div><div title="Load mobile template from TagDiv Cloud Library" class="'+a+"id-"+e.template_id+' tdb-template-el-mobile-btn tdb-template-el-mobile-import tdb-load-mobile-template"></div></div></div>';l+=h+"</div>"}),"undefined"!==typeof d&&!0===d&&(p+='<div class="tdb-template-el tdb-'+a+"-template-el "+(m?"":"tdb-current")+'"><div class="tdb-template-el-id tdb-'+a+'-template-id"></div><div class="tdb-template-el-title" data-type="'+
a+'" data-action="'+c+'" title="Set as Global Template" data-'+a+'-id="'+b+'" data-template-id="">Global Template</div></div>'),e.append(p+k+l)):(e.append(k),e.append('<div class="tdb-templates-desc">No cloud templates. Please import one or more templates from <b>Cloud Library</b>.</div>'));e.data("tdb-templates",!0);"undefined"!==typeof h&&h.call()},error:function(a,b,e){}}))}function n(a,b,c){var d=jQuery(window);ezoicSiteSpeed({objOrFunction:d.resize, object:d, function: String(/resize/).substring(1).slice(0,-1)}, String(/documentReady/).substring(1).slice(0,-1), String(/jQuery-document-ready/).substring(1).slice(0,-1), function(){var f=d.width();a.offset().left+b.width()>f?b.hasClass(c)||b.addClass(c):
b.hasClass(c)&&b.removeClass(c)});d.resize()}ezoicSiteSpeed(jQuery(document), String(/documentReady/).substring(1).slice(0,-1), String(/jQuery-document-dot-ready/).substring(1).slice(0,-1), function(){jQuery("#wp-admin-bar-tdb_template_builder_disabled a").click(function(a){a.preventDefault();alert("Please select tagDiv Builder Template from the theme panel or set a default template. The current page/post uses a template that is not editable.")});jQuery("#wp-admin-bar-new-tdb_templates").hide()});jQuery("body").on("click","#wp-admin-bar-tdb_template_load, .tdb-load-mobile-template",function(a){a.preventDefault();var b=
jQuery(this),c=b.attr("class");a="";var d=!1;b.hasClass("tdb-load-mobile-template")&&(d=!0);"undefined"!==typeof c&&(0===c.indexOf("singleid-")?(a={wp_type:"single",templateType:"Single"},b=c.split(" ")[0].replace("singleid-",""),d?a.assign_mobile_to_template=b:a.assign_to_post=b):0===c.indexOf("categoryid-")?(a={wp_type:"category",templateType:"Category"},b=c.split(" ")[0].replace("categoryid-",""),d?a.assign_mobile_to_template=b:a.assign_to_category=b):0===c.indexOf("404")?(a={wp_type:"404",templateType:"404"},
b=btoa(window.location.href),d?a.assign_mobile_to_template=b:a.assign_to_404=b):0===c.indexOf("date")?(a={wp_type:"date",templateType:"Date"},b=btoa(window.location.href),d?a.assign_mobile_to_template=b:a.assign_to_archive=b):0===c.indexOf("search")?(a={wp_type:"search",templateType:"Search"},b=btoa(window.location.href),d?a.assign_mobile_to_template=b:a.assign_to_search=b):0===c.indexOf("attachment")?(a={wp_type:"attachment",templateType:"Attachment"},b=btoa(window.location.href),d?a.assign_mobile_to_template=
b:a.assign_to_attachment=b):0===c.indexOf("authorid")?(a={wp_type:"author",templateType:"Author"},b=c.split(" ")[0].replace("authorid-",""),d?a.assign_mobile_to_template=b:a.assign_to_author=b):0===c.indexOf("tagid")?(a={wp_type:"tag",templateType:"Tag"},b=c.split(" ")[0].replace("tagid-",""),d?a.assign_mobile_to_template=b:a.assign_to_tag=b):0===c.indexOf("pageid")?(a={wp_type:"page",templateType:"Pages"},b=c.split(" ")[0].replace("pageid-",""),d&&(a.assign_mobile_to_template=b)):0===c.indexOf("woo_productid-")?
(a={wp_type:"woo_product",templateType:"Woo Product"},b=c.split(" ")[0].replace("woo_productid-",""),d?a.assign_mobile_to_template=b:a.assign_to_woo_product=b):0===c.indexOf("woo_archive")?(a={wp_type:"woo_archive",templateType:"Woo Archive"},b=btoa(window.location.href),d?a.assign_mobile_to_template=b:a.assign_to_search=b):0===c.indexOf("woo_search_archive")?(a={wp_type:"woo_search_archive",templateType:"Woo Search"},b=btoa(window.location.href),d?a.assign_mobile_to_template=b:a.assign_to_search=
b):0===c.indexOf("woo_shop_base")?(a={wp_type:"woo_shop_base",templateType:"Woo Shop Base"},b=btoa(window.location.href),d?a.assign_mobile_to_template=b:a.assign_to_search=b):0===c.indexOf("cpt_tax")?(a={wp_type:"cpt_tax",templateType:"Custom Taxonomy"},b=c.split(" ")[0].replace("templateid-",""),d?a.assign_mobile_to_template=b:a.assign_to_cpt_tax=b):0===c.indexOf("cpt")&&(a={wp_type:"cpt",templateType:"Custom Post Type"},b=c.split(" ")[0].replace("cptid-",""),d?a.assign_mobile_to_template=b:a.assign_to_cpt=
b),""!==a&&(a.hide_mobile_selector="hide",window.tdbVue.router.push({name:"loadRoute",params:a})))}).on("click",".tdb-create-mobile-template",function(a){var b=jQuery(this),c=b.data("template-id"),d=b.data("type");tdConfirm.modal({caption:"Create Mobile "+("page"===d?"Page":"Template"),objectContext:window,callbackYes:function(){var a=jQuery("#tdb-new-template-name"),g=jQuery("#tdb-copy-content");jQuery.ajax({type:"POST",url:td_ajax_url,data:{action:"tdb_create_mobile_template",template_id:c,template_title:a.val(),
template_type:d,copyContent:g.is(":checked")?"1":"0",_nonce:window.tdb_globals.wpRestNonce},success:function(a,e,f){a=jQuery.parseJSON(a);"undefined"!==typeof a.mobile_template_id&&(tdConfirm.close(),e=b.closest(".tdb-template-el"),e.length&&(f=e.find(".tdb-template-el-mobile:first"),e.find(".tdb-template-el-mobile-btns:first").data("mobile-template-id",a.mobile_template_id),f.html('<span class="tdb-template-el-mobile-active">Yes</span>')),tdbGetMobileTemplates(d,c))},error:function(a,b,c){}})},htmlInfoContent:"Enter the mobile "+
("page"===d?"page":"template")+' name: <input id="tdb-new-template-name" type="text" value=""onfocus="(function(e){ jQuery( e.target ).siblings(\'#tdb-modal-notice\').fadeOut(50); })(event)"/><em id="tdb-modal-notice"></em><div class="tdb-form-check"><input type="checkbox" class="form-check-input" id="tdb-copy-content"><label class="form-check-label" for="tdb-copy-content"><span class="tdb-check"></span><span class="tdb-check-title">Copy content</span></label></div>',textYes:"Create",textNo:"Cancel"})}).on("click",
"#wp-admin-bar-tdb_template_single > a, #wp-admin-bar-tdb_template_category > a, #wp-admin-bar-tdb_template_404 > a, #wp-admin-bar-tdb_template_date > a, #wp-admin-bar-tdb_template_search > a, #wp-admin-bar-tdb_template_attachment > a, #wp-admin-bar-tdb_template_author > a, #wp-admin-bar-tdb_template_tag > a, #wp-admin-bar-tdb_template_woo_product > a, #wp-admin-bar-tdb_template_woo_archive > a, #wp-admin-bar-tdb_template_woo_shop_base > a, #wp-admin-bar-tdb_template_woo_search_archive > a, #wp-admin-bar-tdb_template_cpt > a, #wp-admin-bar-tdb_template_cpt_tax > a",
function(a){a.preventDefault();var b=jQuery(this),c=b.parent(),d=c.attr("class"),f="",g="",h="",e="";switch(c.attr("id")){case "wp-admin-bar-tdb_template_single":f="single";g="tdb_assign_single_template_to_post";h="tdb_assign_single_template_global";e=d.replace(f+"id-","");break;case "wp-admin-bar-tdb_template_category":f="category";g="tdb_assign_cat_template_to_cat";h="tdb_assign_cat_template_global";e=d.replace(f+"id-","");break;case "wp-admin-bar-tdb_template_404":f="404";g="tdb_assign_404_template_global";
h="";e=d.replace("templateid-","");break;case "wp-admin-bar-tdb_template_date":f="date";g="tdb_assign_date_template_global";h="";e=d.replace("templateid-","");break;case "wp-admin-bar-tdb_template_search":f="search";g="tdb_assign_search_template_global";h="";e=d.replace("templateid-","");break;case "wp-admin-bar-tdb_template_attachment":f="attachment";g="tdb_assign_attachment_template_global";h="";e=d.replace("templateid-","");break;case "wp-admin-bar-tdb_template_author":f="author";g="tdb_assign_author_template_to_author";
h="tdb_assign_author_template_global";e=d.replace(f+"id-","");break;case "wp-admin-bar-tdb_template_tag":f="tag";g="tdb_assign_tag_template_to_tag";h="tdb_assign_tag_template_global";e=d.replace(f+"id-","");break;case "wp-admin-bar-tdb_template_woo_product":f="woo_product";g="tdb_assign_woo_product_template_to_product";h="tdb_assign_woo_product_template_global";e=d.replace(f+"id-","");break;case "wp-admin-bar-tdb_template_woo_archive":f="woo_archive";g="tdb_assign_woo_archive_template_to_tax";h="tdb_assign_woo_archive_template_global";
e=d.replace(f+"id-","");break;case "wp-admin-bar-tdb_template_woo_search_archive":f="woo_search_archive";g="tdb_assign_woo_search_archive_template_global";h="";e=d.replace("templateid-","");break;case "wp-admin-bar-tdb_template_woo_shop_base":f="woo_shop_base";g="tdb_assign_woo_shop_base_template_global";h="";e=d.replace("templateid-","");break;case "wp-admin-bar-tdb_template_cpt":f="cpt";g="tdb_assign_cpt_template_to_cpt";h="tdb_assign_cpt_template_global";e=d.replace(f+"id-","");break;case "wp-admin-bar-tdb_template_cpt_tax":f=
"cpt_tax",g="tdb_assign_cpt_tax_template_to_tax",h="tdb_assign_cpt_tax_template_global",e=d.replace("templateid-","")}var l=jQuery(".tdb-"+f+"-templates");l.length?a.currentTarget===this&&jQuery(a.target).parent().attr("id")==="wp-admin-bar-tdb_template_"+f&&(l.toggle(),b.toggleClass("tdb-templates-open"),b.toggleClass("tdb-templates-close")):(b.addClass("tdb-templates-loading"),l=jQuery('<div class="tdb-templates tdb-'+f+'-templates" data-type="'+f+'"></div>'),l.insertAfter(b),l.show());m(f,e,g,
""===h?!1:!0,h,void 0,function(){b.removeClass("tdb-templates-loading");b.addClass("tdb-templates-open");n(b,l,"tdb-templates-align-right")})}).on("click","#wp-admin-bar-tdc_page_mobile_template > a",function(a){a.preventDefault();var b=jQuery(this);a=b.parent().attr("class").replace("pageid-","");var c=jQuery("#tdb-mobile-templates");c.length?(c.toggle(),b.toggleClass("tdb-templates-open"),b.toggleClass("tdb-templates-close")):(b.addClass("tdb-templates-loading"),b.addClass("tdb-templates-open"),
tdbGetMobileTemplates("page",a,b,void 0,function(){b.removeClass("tdb-templates-loading");jQuery("#tdb-mobile-templates").show();n(b,jQuery("#tdb-mobile-templates"),"tdb-mobile-templates-align-right")}))}).on("click","#wp-admin-bar-tdc_create_mobile_page",function(a){var b=jQuery(this).attr("class").split(" ")[0].replace("pageid-","");tdConfirm.modal({caption:"Create Mobile Page",objectContext:window,callbackYes:function(){var a=jQuery("#tdb-new-template-name"),d=jQuery("#tdb-copy-content");jQuery.ajax({type:"POST",
url:td_ajax_url,data:{action:"tdb_create_mobile_template",template_id:b,template_title:a.val(),template_type:"page",copyContent:d.is(":checked")?"1":"0",_nonce:window.tdb_globals.wpRestNonce},success:function(c,d,h){"undefined"!==typeof jQuery.parseJSON(c).mobile_template_id&&(tdConfirm.close(),c=jQuery("#wp-admin-bar-tdc_page_mobile_template"),c.length&&c.find("a:first").html('<span class="td-mob-page-before">Mobile page</span>'+a.val()),tdbGetMobileTemplates("page",b))},error:function(a,b,c){}})},
htmlInfoContent:'Enter the mobile page name: <input id="tdb-new-template-name" type="text" value="" onfocus="(function(e){ jQuery( e.target ).siblings(\'#tdb-modal-notice\').fadeOut(50); })(event)"/><em id="tdb-modal-notice"></em><div class="tdb-form-check"><input type="checkbox" class="form-check-input" id="tdb-copy-content"><label class="form-check-label" for="tdb-copy-content"><span class="tdb-check"></span><span class="tdb-check-title">Copy content</span></label></div>',textYes:"Create",textNo:"Cancel"})}).on("click",
".tdb-single-template-global label, .tdb-category-template-global label, .tdb-author-template-global label, .tdb-tag-template-global label, .tdb-woo_product-template-global label, .tdb-woo_archive-template-global label, .tdb-cpt-template-global label, .tdb-cpt_tax-template-global label ",function(a){a.preventDefault();var b=jQuery(this);a=b.closest(".tdb-template-el-global");var c=a.data("type"),d=a.data("global-action"),f=b.parent().data(c+"-id"),g=b.parent().data("template-id"),h=jQuery(".tdb-templates");
b={action:d,template_id:g,_nonce:window.tdb_globals.wpRestNonce};switch(c){case "single":b.single_id=f;break;case "category":b.category_id=f;break;case "tag":b.tag_id=f;break;case "author":b.author_id=f;break;case "woo_product":b.woo_product_id=f;break;case "woo_archive":b.woo_term_id=f;break;case "cpt":b.cpt_id=f;b.option="single_tpl";break;case "cpt_tax":void 0!==a.data("cpt")?(b.action="tdb_assign_cpt_template_global",b.cpt=f,b.option="archive_tpl"):b.cpt_tax_id=f}jQuery.ajax({type:"POST",url:td_ajax_url,
data:b,success:function(a,b,d){a=jQuery.parseJSON(a);"undefined"!==typeof a.reload&&window.location.reload();"undefined"!==typeof a.global_template_id&&(h.find(".tdb-"+c+'-template-global > input[type="checkbox"]').removeAttr("checked"),h.find(".tdb-"+c+'-template-global[data-template-id="'+g+'"] > input[type="checkbox"]').attr("checked",!0))},error:function(a,b,c){}});return!1}).on("click",".tdb-template-el-title",function(a){a.preventDefault();if(a.target===a.currentTarget){a=jQuery(this);var b=
a.data("action"),c=a.data("type"),d=a.data(c+"-id"),f=a.data("template-id");b={action:b,template_id:f,_nonce:window.tdb_globals.wpRestNonce};"cpt"===c?b.cpt=a.data("cpt-id"):"cpt_tax"===c&&(b.cpt_tax=a.data("cpt_tax-id"));switch(c){case "single":b.single_id=d;break;case "category":b.category_id=d;break;case "author":b.author_id=d;break;case "tag":b.tag_id=d;break;case "woo_product":b.woo_product_id=d;break;case "woo_archive":b.woo_term_id=d;break;case "cpt":b.cpt_id=d;break;case "cpt_tax":void 0!==
a.data("cpt")?(b.action="tdb_assign_cpt_template_global",b.cpt=d,b.option="archive_tpl"):b.cpt_tax_id=d;break;case "search":void 0!==a.data("cpt")&&(b.action="tdb_assign_cpt_template_global",b.cpt=d,b.option="search_tpl")}jQuery.ajax({type:"POST",url:td_ajax_url,data:b,success:function(a,b,d){"undefined"===typeof jQuery.parseJSON(a).reload&&"cpt"!==c&&"cpt_tax"!==c&&"search"!==c||window.location.reload()},error:function(a,b,c){}});return!1}}).on("change",".tdb-template-el-title-input",function(a){a.preventDefault();
a=jQuery(this);var b=a.closest(".tdb-templates"),c=a.closest(".tdb-template-el"),d=c.find(".tdb-template-el-title:first");b.data("type");b=c.data("template-id");d.html();jQuery.ajax({type:"POST",url:td_ajax_url,data:{action:"tdb_change_template_name",template_id:b,template_title:a.val(),_nonce:window.tdb_globals.wpRestNonce},success:function(a,b,c){a=jQuery.parseJSON(a);"undefined"!==typeof a.template_id&&(d.html(a.template_title),d.removeData("title"))},error:function(a,b,c){}})}).on("click",".tdb-template-el-edit",
function(a){a.preventDefault();var b=jQuery(this);a=b.closest(".tdb-templates");var c=b.closest(".tdb-template-el");b=c.find(".tdb-template-el-title:first");a.data("type");c.data("template-id");c=b.html();"undefined"===typeof b.data("title")&&(a.find(".tdb-template-el-title").each(function(a,b){a=jQuery(b);b=a.data("title");"undefined"!==typeof b&&(a.html(b),a.removeData("title"))}),b.data("title",b.html()),b.html('<input class="tdb-template-el-title-input" type="text" value="'+c+'">'),b.find("input").focus().select())}).on("click",
".tdb-template-el-duplicate",function(a){a.preventDefault();a=jQuery(this);var b=a.closest(".tdb-templates"),c=a.closest(".tdb-template-el"),d=c.find(".tdb-template-el-title:first"),f=b.data("type");a=c.data("template-id");var g=d.html(),h=d.data(f+"-id"),e=d.data("action"),l="";0<="single category tag author woo_product woo_archive".split(" ").indexOf(f)&&(c=c.find(".tdb-template-el-global:first"),c.length&&(l=c.data("global-action")));tdbApi.run({wpNonce:window.tdb_globals.wpRestNonce,cloudEndPoint:"td-cloud-library/new_template",
post:{postId:a,templateType:f,templateName:g,duplicateTemplate:!0},done:function(a){b.removeData("tdb-templates");m(f,0<="single category tag author woo_product woo_archive cpt".split(" ").indexOf(f)?h:"",e,""===l?!1:!0,l)},error:function(a){console.log("td-cloud-library/new_template ( duplicate template ) - ERROR",a)}});jQuery(".tdb-template-el-title-input").trigger("change")}).on("keyup",".tdb-template-el-title-input",function(a){27===a.keyCode&&jQuery(this).trigger("change")}).on("click",".tdb-template-el-delete",
function(a){a=jQuery(this);a.closest(".tdb-templates");var b=a.closest(".tdb-template-el");a=b.data("template-id");jQuery.ajax({type:"POST",url:td_ajax_url,data:{action:"tdb_delete_template",template_id:a,_nonce:window.tdb_globals.wpRestNonce},success:function(a,d,f){a=jQuery.parseJSON(a);"undefined"!==typeof a.reload&&window.location.reload();"undefined"!==typeof a.template_id&&b.remove()},error:function(a,b,f){}});jQuery(".tdb-template-el-title-input").trigger("change")}).on("click",function(a){a=
jQuery(a.target);a.closest("#wp-admin-bar-tdb_template_single").length||a.closest("#wp-admin-bar-tdb_template_category").length||a.closest("#wp-admin-bar-tdb_template_404").length||a.closest("#wp-admin-bar-tdb_template_date").length||a.closest("#wp-admin-bar-tdb_template_search").length||a.closest("#wp-admin-bar-tdb_template_attachment").length||a.closest("#wp-admin-bar-tdb_template_author").length||a.closest("#wp-admin-bar-tdb_template_tag").length||a.closest("#wp-admin-bar-tdb_template_woo_product").length||
a.closest("#wp-admin-bar-tdb_template_woo_archive").length||a.closest("#wp-admin-bar-tdb_template_woo_search_archive").length||a.closest("#wp-admin-bar-tdb_template_woo_shop_base").length||a.closest("#wp-admin-bar-tdb_template_cpt").length||a.closest("#wp-admin-bar-tdb_template_cpt_tax").length||a.closest("#wp-admin-bar-tdc_page_mobile_template").length||(a=jQuery(".tdb-templates"),a.length&&(a.hide(),a.prev("a").removeClass("tdb-templates-open").addClass("tdb-templates-close"),jQuery(".tdb-template-el-title-input").trigger("change")),
a=jQuery("#tdb-mobile-templates"),a.length&&(a.hide(),a.prev("a").removeClass("tdb-templates-open").addClass("tdb-templates-close")))}).on("click","#tdb-mobile-templates .tdb-template-el-mobile-list-el",function(a){var b=jQuery(this),c=jQuery("#tdb-mobile-templates");a=b.data("template-id");var d=b.data("mobile-template-id"),f=c.closest(".tdb-template-el-mobile-btns"),g=b.closest(".tdb-template-el-mobile-wrap"),h=b.closest("#wp-admin-bar-tdc_page_mobile_template");jQuery.ajax({type:"POST",url:td_ajax_url,
data:{action:"tdb_set_mobile_template",template_id:a,mobile_template_id:d,_nonce:window.tdb_globals.wpRestNonce},success:function(a,l,k){a=jQuery.parseJSON(a);_.isObject(a)&&!_.isUndefined(a.result)&&1===a.result&&(f.data("mobile-template-id",d),c.find(".tdb-template-el-mobile-list-el").removeClass("tdb-current"),c.find('.tdb-template-el-mobile-list-el[data-mobile-template-id="'+d+'"]').addClass("tdb-current"),g.length&&(a=g.find(".tdb-template-el-mobile:first"),""===d?a.html("-"):a.html('<span class="tdb-template-el-mobile-active">Yes</span>')),
h.length&&(h.find("a:first").html('<span class="td-mob-page-before" style="margin-right:10px;">Mobile page</span>'+b.find(".tdb-template-el-mobile-list-title:first").html()),"No mobile page"===b.find(".tdb-template-el-mobile-list-title:first").html()&&h.find("a:first").html('<span class="td-mob-page-before">Mobile page</span>')))}})}).on("click","#tdb-mobile-templates .tdb-template-el-mobile-list-edit",function(a){a.stopPropagation()}).on("click","#tdb-mobile-templates .tdb-template-el-mobile-list-delete",
function(a){a.stopPropagation();a=jQuery(this);var b=a.data("type"),c=a.closest(".tdb-template-el-mobile-list-el"),d=c.data("template-id");a=c.data("mobile-template-id");var f=c.hasClass("tdb-current"),g=jQuery("#tdb-mobile-templates").closest(".tdb-template-el");jQuery.ajax({type:"POST",url:td_ajax_url,data:{action:"tdb_delete_template",template_id:a,_nonce:window.tdb_globals.wpRestNonce},success:function(a,e,l){"undefined"!==typeof jQuery.parseJSON(a).template_id&&tdbGetMobileTemplates(b,d,void 0,
function(){jQuery("#tdb-mobile-templates").addClass("loading")},function(){jQuery("#tdb-mobile-templates").removeClass("loading");if(f)if("page"===b){var a=jQuery("#wp-admin-bar-tdc_page_mobile_template");a.length&&a.find("a:first").html('<span class="td-mob-page-before">Mobile page</span>No mobile page')}else c.remove(),g.length&&g.find(".tdb-template-el-mobile:first").html("-")})},error:function(a,b,c){}})}).on("mouseenter",".tdb-template-el-mobile-btns",function(a){a=jQuery(this);var b=a.data("mobile-template-id"),
c=a.data("template-id"),d=jQuery("#tdb-mobile-templates");d.find(".tdb-template-el-mobile-list-inner").is(":empty")||(d.appendTo(a).show(),d.find(".tdb-template-el-mobile-list-el").removeClass("tdb-current"),d.find(".tdb-template-el-mobile-list-el").data("template-id",c),d.find('.tdb-template-el-mobile-list-el[data-mobile-template-id="'+b+'"]').addClass("tdb-current"))}).on("mouseleave",".tdb-template-el-mobile-btns",function(a){a=jQuery(".tdb-templates");var b=jQuery("#tdb-mobile-templates");b.hide();
b.insertBefore(a);b.find(".tdb-template-el-mobile-list-el").removeClass("tdb-current")});jQuery(".tdb-templates");window.tdbGetMobileTemplates=function(a,b,c,d,f,g,h){var e=jQuery("#tdb-mobile-templates",g);e.length||(e=jQuery('<div id="tdb-mobile-templates" class="tdb-template-el-mobile-list"><div class="tdb-template-el-mobile-list-inner"></div><div class="tdb-template-el-mobile-list-separator" style="height: 1px;width: 100%;background-color: #ebebeb;margin: 10px 0;"></div><a href="https://tagdiv.com/newspaper-10-3-7-update-brings-customizable-and-fast-mobile-pages/" target="_blank" style="height: auto;padding: 0;color: #1a9a75;" class="tdb-template-el-mobile-list-no-el">Documentation &#187;</a></div>'),
e.hide());"undefined"!==typeof c&&e.insertAfter(c);c={action:"tdb_get_"+a+"_mobile_templates",_nonce:window.tdb_globals.wpRestNonce};c[a+"_id"]=b;console.log("tdb_get_"+a+"_mobile_templates");"undefined"!==typeof window.tdbLoadDataFromId&&(c.tdbLoadDataFromId=window.tdbLoadDataFromId);"undefined"!==typeof d&&d.call();jQuery.ajax({type:"POST",url:td_ajax_url,data:c,success:function(c,d,g){var k="";g=jQuery.parseJSON(c);c='<li id="wp-admin-bar-tdb_template_load" class="pageid-'+b+' tdb-load-mobile-template tdb-template-el-mobile-list-el"><div class="ab-item ab-empty-item" title="Optional - Load mobile page from TagDiv Cloud Library"></div><span class="tdb-template-el-mobile-list-title">Load mobile page from Cloud Library</span></li><li id="wp-admin-bar-tdc_create_mobile_page" class="pageid-'+
b+' tdb-template-el-mobile-list-el"><div class="ab-item ab-empty-item" title="Optional - Create blank mobile page"></div><span class="tdb-template-el-mobile-list-title">Create blank mobile page</span></li>';if(_.isArray(g)&&g.length){var l=!1,m="template";d="";"page"===a&&(m="page",d=c+'<div class="tdb-template-el-mobile-list-separator" style="height: 1px;width: 100%;background-color: #ebebeb;margin: 10px 0;"></div>');_.each(g,function(c,d,e){d="";_.isUndefined(c.is_current)||(d="tdb-current",l=!0);
k+='<div class="tdb-template-el-mobile-list-el '+d+'" data-mobile-template-id="'+c.template_id+'" data-template-id="'+b+'"><div class="tdb-template-el-mobile-list-title" title="'+c.template_title+'">'+c.template_title+'</div><a class="tdb-template-el-mobile-list-edit" title="Edit mobile '+m+' with Composer" href="'+c.template_url+'" target="_blank"></a><div class="tdb-template-el-mobile-list-delete" title="Delete mobile '+m+'" data-type="'+a+'"></div></div>'});""!==k&&(g="",l||(g="tdb-current",l=
!0),k=d+'<div class="tdb-template-el-mobile-list-el '+g+'" data-mobile-template-id="" data-template-id="'+b+'"><div class="tdb-template-el-mobile-list-title">No mobile '+m+"</div></div>"+k);""!==k&&(e.html('<div class="tdb-template-el-mobile-list-inner">'+k+'</div><div class="tdb-template-el-mobile-list-separator" style="height: 1px;width: 100%;background-color: #ebebeb;margin: 10px 0;"></div><a href="https://tagdiv.com/newspaper-10-3-7-update-brings-customizable-and-fast-mobile-pages/" target="_blank" style="height: auto;padding: 0;color: #1a9a75;" class="tdb-template-el-mobile-list-no-el">Documentation &#187;</a>'),
d=e.parent(".tdb-template-el-mobile-btns"),!_.isUndefined(h)&&d.length&&(e.find(".tdb-template-el-mobile-list-el").removeClass("tdb-current"),e.find(".tdb-template-el-mobile-list-el").data("template-id",b),e.find('.tdb-template-el-mobile-list-el[data-mobile-template-id="'+h+'"]').addClass("tdb-current")),e.is(":visible")&&d.length?e.show():e.hide())}""===k&&("page"===a?e.html(c+'<div class="tdb-template-el-mobile-list-separator" style="height: 1px;width: 100%;background-color: #ebebeb;margin: 10px 0;"></div><div class="tdb-template-el-mobile-list-inner"><div class="tdb-template-el-mobile-list-no-el">No mobile page, please import or create a new mobile page.</div><div class="tdb-template-el-mobile-list-separator" style="height: 1px;width: 100%;background-color: #ebebeb;margin: 10px 0;"></div><a href="https://tagdiv.com/newspaper-10-3-7-update-brings-customizable-and-fast-mobile-pages/" target="_blank" style="height: auto;padding: 0;color: #1a9a75;" class="tdb-template-el-mobile-list-no-el">Documentation &#187;</a></div>'):
e.html(""));"undefined"!==typeof f&&f.call()}})}})();
ezoicSiteSpeed(null, String(/windowLoad/).substring(1).slice(0,-1), String(/jQuery-window-load/).substring(1).slice(0,-1), function(){if("undefined"!==typeof window.tdReadingProgressBar){var m=!1;window.parent===window.top&&"undefined"!==typeof window.name&&"tdc-live-iframe"===window.name&&"undefined"!==typeof window.parent.tdcSidebar&&(m=!0);if(window.self===window.top||m)jQuery(".tdb_single_reading_progress").each(function(){var n=jQuery(this),a=n.data("td-block-uid");n=n.data("bar-position");var b=new tdReadingProgressBar.item;b.blockUid=a;b.barPosition=n;tdReadingProgressBar.addItem(b);m&&
tdReadingProgressBar.createFixedBar(b,0,30)}),m||tdReadingProgressBar.calculateBarsFill()}});
