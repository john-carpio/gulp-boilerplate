this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["404"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"errors.404",{"name":"t","hash":{},"data":data}))
    + "</h1>";
},"useData":true});
this["MyApp"]["templates"]["home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"home-page\">\n"
    + ((stack1 = this.invokePartial(partials['ui/home-slider'],depth0,{"name":"ui/home-slider","hash":{"id":"banners"},"data":data,"indent":"  ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  <ul class=\"list-play\">\n    <li>"
    + alias2((helpers.getBanner || (depth0 && depth0.getBanner) || alias1).call(depth0,"list-play-1",{"name":"getBanner","hash":{},"data":data}))
    + "</li>\n    <li>"
    + alias2((helpers.getBanner || (depth0 && depth0.getBanner) || alias1).call(depth0,"list-play-2",{"name":"getBanner","hash":{},"data":data}))
    + "</li>\n    <li>"
    + alias2((helpers.getBanner || (depth0 && depth0.getBanner) || alias1).call(depth0,"list-play-3",{"name":"getBanner","hash":{},"data":data}))
    + "</li>\n    <!--li>"
    + alias2((helpers.getBanner || (depth0 && depth0.getBanner) || alias1).call(depth0,"list-play-4",{"name":"getBanner","hash":{},"data":data}))
    + "\n      </div>\n    </li-->\n  </ul>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"hello\" style=\"border: 1px solid red;\">\n    <h1>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n    <div class=\"body\">\n        Hello, "
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "! I'm a template. \n    </div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["test"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "This is a test! "
    + alias2(((helper = (helper = helpers.test || (depth0 != null ? depth0.test : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"test","hash":{},"data":data}) : helper)))
    + " "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"app.name",{"name":"t","hash":{},"data":data}))
    + "!";
},"useData":true});
this["MyApp"]["templates"]["account-panel"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"form-wrapper "
    + alias3(((helper = (helper = helpers.klass || (depth0 != null ? depth0.klass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"klass","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"main-header\"><h4>"
    + alias3((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias1).call(depth0,"account",(depth0 != null ? depth0.title : depth0),{"name":"tPrefix","hash":{},"data":data}))
    + "</h4></div>\n        <div class=\"panel panel-content\">\n"
    + ((stack1 = this.invokePartial(partials['ui/loading'],depth0,{"name":"ui/loading","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["change-password"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "\n<form id=\"change_password_form\">\n    <div class=\"panel panel-default\">\n\n        <div class=\"panel-heading\">\n            <div class=\"required-text\">\n                <strong class=\"required\">*</strong>\n                "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"password.errorMissingField",{"name":"t","hash":{},"data":data}))
    + "\n            </div>\n        </div>\n\n        <div class=\"panel-body\">\n            <div class=\"form-group\">\n                <label for=\"password\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"password.newPassword",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                <div>\n                    <input type=\"password\" id=\"password\" name=\"password\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"confirmPassword\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"password.confirmPassword",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                <div>\n                    <input type=\"password\" id=\"confirmPassword\" name=\"confirmPassword\">\n                </div>\n            </div>\n            <div id=\"errorMsgContainer\" class=\"form-group hidden\">\n                <div id=\"errorMsg\" class=\"text-danger\"></div>\n            </div>\n        </div> \n        <div class=\"panel-footer\">\n            <div class=\"offset-wrapper\">\n                <button type=\"submit\" id=\"change-password-submit\" class=\"btn-dark\" data-text=\""
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"password.savePassword",{"name":"t","hash":{},"data":data}))
    + "\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"password.savePassword",{"name":"t","hash":{},"data":data}))
    + "</button>\n            </div>\n        </div>\n    </div> \n</form>";
},"useData":true});
this["MyApp"]["templates"]["forgot-password-second-step"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"loading-container\">\n"
    + ((stack1 = this.invokePartial(partials['ui/loading'],depth0,{"name":"ui/loading","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n\n<form id=\"forgot_password_second_form\" class=\"forgot-password\">\n    <div class=\"panel panel-default\">\n\n        <div class=\"panel-heading\">\n            <h5 class=\"panel-title panel-padding\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"forgotPassword.step2",{"name":"t","hash":{},"data":data}))
    + "</h5>\n        </div>\n\n        <div class=\"panel-body\">\n            <div class=\"form-group\">\n                <label for=\"securityQuestion\">"
    + alias2(((helper = (helper = helpers.securityQuestion || (depth0 != null ? depth0.securityQuestion : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"securityQuestion","hash":{},"data":data}) : helper)))
    + " <strong class=\"required\">*</strong></label>\n                <div>\n                    <input id=\"securityAnswer\" name=\"securityAnswer\">\n                    <label class=\"no-email-error\" for=\"securityAnswer\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"forgotPassword.incorrectSecurityAnswer",{"name":"t","hash":{},"data":data}))
    + "</label>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"panel-footer\">\n            <div class=\"offset-wrapper\">\n                <button type=\"submit\" class=\"btn-dark\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"forgotPassword.buttonSubmit",{"name":"t","hash":{},"data":data}))
    + "</button>\n                <button type=\"button\" class=\"btn-dark btn-cancel\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"forgotPassword.cancel",{"name":"t","hash":{},"data":data}))
    + "</button>\n            </div>\n        </div>\n    </div> \n</form>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["forgot-password"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"loading-container\">\n"
    + ((stack1 = this.invokePartial(partials['ui/loading'],depth0,{"name":"ui/loading","data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n\n<form id=\"forgot_password_form\" class=\"forgot-password\">\n    <div class=\"panel panel-default\">\n\n        <div class=\"panel-heading\">\n            <h5 class=\"panel-title panel-padding\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"forgotPassword.step1",{"name":"t","hash":{},"data":data}))
    + "</h5>\n        </div>\n\n        <div class=\"panel-body\">\n            <div class=\"form-group\">\n                <label for=\"email\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"forgotPassword.labelEmail",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                <div>\n                    <input id=\"email\" name=\"email\">\n                    <label class=\"no-email-error\" for=\"email\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"forgotPassword.cannotFindEmail",{"name":"t","hash":{},"data":data}))
    + "</label>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"panel-footer\">\n            <div class=\"offset-wrapper\">\n                <button type=\"submit\" class=\"btn-dark\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"forgotPassword.buttonSubmit",{"name":"t","hash":{},"data":data}))
    + "</button>\n                <button type=\"button\" class=\"btn-dark btn-cancel\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"forgotPassword.cancel",{"name":"t","hash":{},"data":data}))
    + "</button>\n            </div>\n        </div>\n    </div> \n</form>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["login-modal"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "\n<form id=\"login_modal_form\" class=\"login-form\">\n    <div class=\"form-group\">\n        <label for=\"password\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.username",{"name":"t","hash":{},"data":data}))
    + "</label>\n        <div>\n            <input id=\"username\" name=\"username\" placeholder=\""
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.username",{"name":"t","hash":{},"data":data}))
    + "\" value=\""
    + alias2(((helper = (helper = helpers.accountName || (depth0 != null ? depth0.accountName : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"accountName","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"confirmPassword\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.password",{"name":"t","hash":{},"data":data}))
    + "</label>\n        <div>\n            <input id=\"password\" name=\"password\" type=\"password\" placeholder=\""
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.password",{"name":"t","hash":{},"data":data}))
    + "\" >\n        </div>\n    </div>\n    <div class=\"form-group cbRememberMe \">\n        \n        <div>\n            <label for=\"modal-cbRememberMe\" class=\"lbl-for-cb\">\n                <span class=\"checkbox-wrap  "
    + alias2((helpers.isChecked || (depth0 && depth0.isChecked) || alias1).call(depth0,(depth0 != null ? depth0.rememberMe : depth0),{"name":"isChecked","hash":{},"data":data}))
    + " \"><input type=\"checkbox\" id=\"modal-cbRememberMe\" name=\"rememberMe\" class=\"fa-chk-sqr\" "
    + alias2((helpers.isChecked || (depth0 && depth0.isChecked) || alias1).call(depth0,(depth0 != null ? depth0.rememberMe : depth0),{"name":"isChecked","hash":{},"data":data}))
    + "></span>\n                "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.remember",{"name":"t","hash":{},"data":data}))
    + "\n            </label>\n        </div>\n    </div>\n    <!--div id=\"errorMsgContainer\" class=\"form-group hidden\">\n        <label>&nbsp;</label>\n        <div id=\"errorMsg\" class=\"text-danger\"></div>\n    </div-->\n    <button class=\"hide\" type=\"submit\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"login.loginBtn",{"name":"t","hash":{},"data":data}))
    + "</button>\n</form>";
},"useData":true});
this["MyApp"]["templates"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<form id=\"login_form\" class=\"login-form\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n            <div class=\"form-group\">\n                <label for=\"password\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.username",{"name":"t","hash":{},"data":data}))
    + "</label>\n                <div>\n                    <input type=\"text\" id=\"input_username\" name=\"username\" placeholder=\""
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.username",{"name":"t","hash":{},"data":data}))
    + "\" value=\""
    + alias2(this.lambda(((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.getAccountName : stack1), depth0))
    + "\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"confirmPassword\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.password",{"name":"t","hash":{},"data":data}))
    + "</label>\n                <div>\n                    <input id=\"password\" name=\"password\" type=\"password\" placeholder=\""
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.password",{"name":"t","hash":{},"data":data}))
    + "\" >\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label>&nbsp;</label>\n                <div>\n                    <label for=\"page-cbRememberMe\" class=\"lbl-for-cb\">\n                        <span class=\"checkbox-wrap\"><input type=\"checkbox\" id=\"page-cbRememberMe\" name=\"rememberMe\" class=\"fa-chk-sqr\" "
    + alias2((helpers.isChecked || (depth0 && depth0.isChecked) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.getRememberMe : stack1),{"name":"isChecked","hash":{},"data":data}))
    + " ></span>\n                        "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.remember",{"name":"t","hash":{},"data":data}))
    + "\n                    </label>\n                </div>\n            </div>\n            <div id=\"errorMsgContainer\" class=\"form-group hidden\">\n                <label>&nbsp;</label>\n                <div id=\"errorMsg\" class=\"text-danger\"></div>\n            </div>\n        </div> \n\n        <div class=\"panel-footer\">\n            <div class=\"offset-wrapper\">\n                <button id=\"btn_login\" class=\"login-btn btn-dark\" type=\"submit\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"login.loginBtn",{"name":"t","hash":{},"data":data}))
    + "</button>\n            </div>\n        </div>\n    </div> \n</form>";
},"useData":true});
this["MyApp"]["templates"]["my-account-details"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                        <option value=\""
    + alias3(((helper = (helper = helpers.isocode || (depth0 != null ? depth0.isocode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"isocode","hash":{},"data":data}) : helper)))
    + "\" "
    + alias3((helpers.checkSelected || (depth0 && depth0.checkSelected) || alias1).call(depth0,(depth0 != null ? depth0.id : depth0),((stack1 = (depths[1] != null ? depths[1].account : depths[1])) != null ? stack1.languageId : stack1),{"name":"checkSelected","hash":{},"data":data}))
    + ">"
    + alias3(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"desc","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.escapeExpression, alias2=helpers.helperMissing;

  return "                            <option value=\""
    + alias1(this.lambda(depth0, depth0))
    + "\" "
    + alias1((helpers.checkSelected || (depth0 && depth0.checkSelected) || alias2).call(depth0,depth0,((stack1 = (depths[1] != null ? depths[1].account : depths[1])) != null ? stack1.priceFormat : stack1),{"name":"checkSelected","hash":{},"data":data}))
    + ">"
    + alias1((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias2).call(depth0,"sports",depth0,{"name":"tPrefix","hash":{},"data":data}))
    + "</option>\n";
},"5":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                        <option value=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" "
    + alias3((helpers.checkSelected || (depth0 && depth0.checkSelected) || alias1).call(depth0,(depth0 != null ? depth0.id : depth0),((stack1 = (depths[1] != null ? depths[1].account : depths[1])) != null ? stack1.securityQuestionId1 : stack1),{"name":"checkSelected","hash":{},"data":data}))
    + ">"
    + alias3(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"desc","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "\n<div class=\"panel-heading\">\n    <div class=\"required-text\">\n        <strong class=\"required\">*</strong>\n        "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.requiredMessage",{"name":"t","hash":{},"data":data}))
    + "\n    </div>\n</div>\n\n<form id=\"my_account_form\">\n<div class=\"wrapper-panel personal-details\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\"><h5 class=\"panel-title\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.personalDetails",{"name":"t","hash":{},"data":data}))
    + "</h5></div>\n\n        <div class=\"panel-body\">\n            <div class=\"form-group\">\n                <label for=\"title\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.title",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                <div>\n                    <select id=\"title\" name=\"title\">\n                        <option value=\"Mr\" "
    + alias2((helpers.checkSelected || (depth0 && depth0.checkSelected) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.title : stack1),"Mr",{"name":"checkSelected","hash":{},"data":data}))
    + ">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.mr",{"name":"t","hash":{},"data":data}))
    + "</option>\n                        <option value=\"Mrs\" "
    + alias2((helpers.checkSelected || (depth0 && depth0.checkSelected) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.title : stack1),"Mrs",{"name":"checkSelected","hash":{},"data":data}))
    + ">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.mrs",{"name":"t","hash":{},"data":data}))
    + "</option>\n                        <option value=\"Ms\" "
    + alias2((helpers.checkSelected || (depth0 && depth0.checkSelected) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.title : stack1),"Ms",{"name":"checkSelected","hash":{},"data":data}))
    + ">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.ms",{"name":"t","hash":{},"data":data}))
    + "</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"firstName\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.firstname",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                <div>\n                    <input type=\"text\" id=\"firstName\" name=\"firstName\" value=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.firstName : stack1), depth0))
    + "\"/>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"surName\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.surname",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                <div>\n                    <input type=\"text\" id=\"surName\" name=\"surName\" value=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.lastName : stack1), depth0))
    + "\"/>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"CHANGEME\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.dateOfBirth",{"name":"t","hash":{},"data":data}))
    + " </label>\n                <div>\n                    <input type=\"text\" id=\"date\"  value=\""
    + alias2((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.dob : stack1),"D",{"name":"formatDateTime","hash":{},"data":data}))
    + "\" readonly />\n                    <input type=\"text\" id=\"month\"  value=\""
    + alias2((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.dob : stack1),"M",{"name":"formatDateTime","hash":{},"data":data}))
    + "\" readonly />\n                    <input type=\"text\" id=\"year\"  value=\""
    + alias2((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.dob : stack1),"YYYY",{"name":"formatDateTime","hash":{},"data":data}))
    + "\" readonly />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"address1\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.addressline1",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                <div>\n                    <input type=\"text\" id=\"address1\" name=\"address1\" value=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.address1 : stack1), depth0))
    + "\" />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"address2\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.addressline2",{"name":"t","hash":{},"data":data}))
    + "</label>\n                <div>\n                    <input type=\"text\" id=\"address2\" name=\"address2\" value=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.address2 : stack1), depth0))
    + "\"/>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"address3\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.addressline3",{"name":"t","hash":{},"data":data}))
    + "</label>\n                <div>\n                    <input type=\"text\" id=\"address3\" name=\"address3\" value=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.address3 : stack1), depth0))
    + "\"/>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"address4\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.addressline4",{"name":"t","hash":{},"data":data}))
    + "</label>\n                <div>\n                    <input type=\"text\" id=\"address4\" name=\"address4\" value=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.address4 : stack1), depth0))
    + "\"/>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"country\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.country",{"name":"t","hash":{},"data":data}))
    + " </label>\n                <div>\n                    <input type=\"text\" id=\"country\" class=\"hasloading\" value=\"\" readonly />\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"postcode\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.postcode",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                <div>\n                    <input type=\"text\" id=\"postcode\" name=\"postcode\" value=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.postcode : stack1), depth0))
    + "\"/>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"homeTel\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.homeTelephone",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                <div>\n                    <input type=\"text\" id=\"homeTel\" class=\"phone-group\" name=\"homeTel\" value=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.homePhone : stack1), depth0))
    + "\"/>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"mobileTel\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.mobileTelephone",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                <div>\n                    <input type=\"text\" id=\"mobileTel\" class=\"phone-group\" name=\"mobileTel\" value=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.mobile : stack1), depth0))
    + "\"/>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"currency\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.currency",{"name":"t","hash":{},"data":data}))
    + "</label>\n                <div>\n                    <select id=\"currency\" name=\"currency\">\n                        <option value=\"PHP\">Philippine Peso</option>\n                    </select>\n                    <!--input type=\"text\" id=\"currency\" class=\"hasloading\"  value=\"\" readonly /-->\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"languageCode\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.languages",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                <div>\n                    <select id=\"language\" name=\"language\">\n                        <option value=\"en-GB\">English (United Kingdom)</option>\n                    </select>\n                    <!--select id=\"languageCode\" class=\"hasloading\" name=\"languageCode\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.formData : depth0)) != null ? stack1.languages : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    </select-->\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"priceFormat\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.priceFormat",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                <div>\n                    <select id=\"priceFormat\" name=\"priceFormat\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.formData : depth0)) != null ? stack1.priceFormats : stack1),{"name":"each","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    </select>\n                </div>\n            </div>\n\n        </div> \n\n    </div> \n\n</div> \n<div class=\"wrapper-panel account-details\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\"><h5 class=\"panel-title\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.accountDetails",{"name":"t","hash":{},"data":data}))
    + "</h5></div>\n        <div class=\"panel-body\">\n\n\n            <div class=\"form-group\">\n                <label for=\"securityQuestion\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.securityQuestion",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                <div>\n                    <select id=\"securityQuestion\" class=\"hasloading\" name=\"securityQuestion\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.formData : depth0)) != null ? stack1.securityQuestions : stack1),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    </select>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"securityQuestionAnswer\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.securityAnswer",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                <div>\n                    <input type=\"text\" id=\"securityQuestionAnswer\" name=\"securityQuestionAnswer\" value=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.securityQuestionAnswer1 : stack1), depth0))
    + "\"/>\n                </div>\n            </div>\n        </div> \n        <div class=\"panel-footer\">\n            <div class=\"offset-wrapper\">\n                <button type=\"submit\" class=\"btn-account-form\" disabled>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.saveChanges",{"name":"t","hash":{},"data":data}))
    + "</button>\n            </div>\n        </div>\n\n    </div> \n\n</div>\n</form>";
},"useData":true,"useDepths":true});
this["MyApp"]["templates"]["my-bets-pager"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "\n  \n  <ul class=\"pagination\">\n    <li><span>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"pagination.page",{"name":"t","hash":{},"data":data}))
    + " "
    + alias2(((helper = (helper = helpers.currPage || (depth0 != null ? depth0.currPage : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"currPage","hash":{},"data":data}) : helper)))
    + " "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"pagination.of",{"name":"t","hash":{},"data":data}))
    + " "
    + alias2(((helper = (helper = helpers.numOfPages || (depth0 != null ? depth0.numOfPages : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"numOfPages","hash":{},"data":data}) : helper)))
    + "</span></li>\n    <li>\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.currPage : depth0),"===",1,{"name":"ifCond","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.program(4, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "    </li>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.pager : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    <li>\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.currPage : depth0),"===",(depth0 != null ? depth0.numOfPages : depth0),{"name":"ifCond","hash":{},"fn":this.program(9, data, 0, blockParams, depths),"inverse":this.program(11, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "      \n    </li>\n  </ul>\n\n";
},"2":function(depth0,helpers,partials,data) {
    return "        <span aria-hidden=\"true\">&laquo;</span>\n";
},"4":function(depth0,helpers,partials,data) {
    return "        <a href=\"#\" aria-label=\"Previous\" data-page=\"prev\">\n          <span aria-hidden=\"true\">&laquo;</span>\n        </a>\n";
},"6":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "    	<li class=\""
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0,(depths[1] != null ? depths[1].currPage : depths[1]),"===",depth0,{"name":"ifCond","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" >\n    		<a href=\"#\" data-page=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</a>\n    	</li>\n";
},"7":function(depth0,helpers,partials,data) {
    return " active ";
},"9":function(depth0,helpers,partials,data) {
    return "        <span aria-hidden=\"true\" >&raquo;</span>\n";
},"11":function(depth0,helpers,partials,data) {
    return "        <a href=\"#\" aria-label=\"Next\" data-page=\"next\">\n          <span aria-hidden=\"true\" >&raquo;</span>\n        </a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.pager : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
this["MyApp"]["templates"]["my-bets-row"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "\n\n<div class=\"activity\">\n	<div class=\"transaction-id\">"
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "</div>\n	<div class=\"created-date\"> "
    + alias2((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias1).call(depth0,(depth0 != null ? depth0.createDate : depth0),"MM-DD-YYYY",{"name":"formatDateTime","hash":{},"data":data}))
    + "</div>\n	<div class=\"type-subtype\">"
    + alias2(this.lambda((depth0 != null ? depth0.transactionSubType : depth0), depth0))
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.transactionsGroup : depth0),{"name":"unless","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.transactionsGroup : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.program(6, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "	<div class=\"debit text-right\"> "
    + alias2((helpers.formatNumeral || (depth0 && depth0.formatNumeral) || alias1).call(depth0,(depth0 != null ? depth0.debit : depth0),{"name":"formatNumeral","hash":{},"data":data}))
    + "</div>\n	<div class=\"credit text-right\"> "
    + alias2((helpers.formatNumeral || (depth0 && depth0.formatNumeral) || alias1).call(depth0,(depth0 != null ? depth0.credit : depth0),{"name":"formatNumeral","hash":{},"data":data}))
    + "</div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.transactionsGroup : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.program(12, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</div>\n\n";
},"2":function(depth0,helpers,partials,data) {
    var helper;

  return "/"
    + this.escapeExpression(((helper = (helper = helpers.transactionType || (depth0 != null ? depth0.transactionType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"transactionType","hash":{},"data":data}) : helper)));
},"4":function(depth0,helpers,partials,data) {
    return "		<div class=\"unit-stake text-right\"> "
    + this.escapeExpression((helpers.formatNumeral || (depth0 && depth0.formatNumeral) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.unitStake : depth0),{"name":"formatNumeral","hash":{},"data":data}))
    + "</div>\n";
},"6":function(depth0,helpers,partials,data) {
    return "		<div class=\"description\">"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</div>\n";
},"8":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "		<div class=\"description\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.transactionsGroup : depth0),{"name":"each","hash":{},"fn":this.program(9, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n";
},"9":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "				<div class=\"transaction-group\">\n					<div class=\"tid\"><span>"
    + this.escapeExpression(((helper = (helper = helpers.transactionId || (depth0 != null ? depth0.transactionId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"transactionId","hash":{},"data":data}) : helper)))
    + "</span></div>\n					<div class=\"bet-items\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.transactions : depth0),{"name":"each","hash":{},"fn":this.program(10, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "					</div>\n				</div>\n";
},"10":function(depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "							<div class=\"bet-item\">\n								<div class=\"item-status "
    + alias2((helpers.getBetStatus || (depth0 && depth0.getBetStatus) || alias1).call(depth0,depths[1],(data && data.index),{"name":"getBetStatus","hash":{},"data":data}))
    + "\">"
    + alias2((helpers.getBetStatus || (depth0 && depth0.getBetStatus) || alias1).call(depth0,depths[1],(data && data.index),{"name":"getBetStatus","hash":{},"data":data}))
    + "</div>\n								<div class=\"items-desc\">\n									<span class=\"item-outcome\">"
    + alias2(((helper = (helper = helpers.outcomeDescription || (depth0 != null ? depth0.outcomeDescription : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"outcomeDescription","hash":{},"data":data}) : helper)))
    + " @ "
    + alias2((helpers.getBetPrice || (depth0 && depth0.getBetPrice) || alias1).call(depth0,depth0,(depth0 != null ? depth0.price : depth0),{"name":"getBetPrice","hash":{},"data":data}))
    + "</span>\n									<span class=\"item-market\">["
    + alias2(((helper = (helper = helpers.marketDescription || (depth0 != null ? depth0.marketDescription : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"marketDescription","hash":{},"data":data}) : helper)))
    + " - "
    + alias2(((helper = (helper = helpers.periodDescription || (depth0 != null ? depth0.periodDescription : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"periodDescription","hash":{},"data":data}) : helper)))
    + "]</span>\n									<span class=\"item-event\"> "
    + alias2(((helper = (helper = helpers.eventDescription || (depth0 != null ? depth0.eventDescription : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"eventDescription","hash":{},"data":data}) : helper)))
    + "</span>\n								</div>\n							</div>\n";
},"12":function(depth0,helpers,partials,data) {
    var helper;

  return "		<div class=\"status\">"
    + this.escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"14":function(depth0,helpers,partials,data) {
    return "<div class=\"table-release\">\n	<h4 class=\"text-center\">"
    + this.escapeExpression((helpers.tPrefix || (depth0 && depth0.tPrefix) || helpers.helperMissing).call(depth0,"noResults",(depth0 != null ? depth0.activity : depth0),{"name":"tPrefix","hash":{},"data":data}))
    + "</h4>\n</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.activityList : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(14, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true,"useDepths":true});
this["MyApp"]["templates"]["my-bets"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "                    <div class=\"filter-selection\">\n                        <select id=\"filter_source\">\n                            <option value=\"0\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myBets.mswBets",{"name":"t","hash":{},"data":data}))
    + "</option>\n                            <option value=\"1\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myBets.egamesBets",{"name":"t","hash":{},"data":data}))
    + "</option>\n                        </select>\n                    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "\n<div class=\"wrapper-main\">\n    <div class=\"my-bets\">\n\n            <div class=\"wrapper-filter\">\n                <div class=\"activity-title\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myBets.title",{"name":"t","hash":{},"data":data}))
    + "</div>\n                <div class=\"activity-filter clearfix\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isRTG : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    <div class=\"filter-selection\">\n                        <select id=\"filter_type\">\n                            <option value=\"false\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myBets.pending",{"name":"t","hash":{},"data":data}))
    + "</option>\n                            <option value=\"true\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myBets.settled",{"name":"t","hash":{},"data":data}))
    + "</option>\n                        </select>\n                    </div>\n                    <div class=\"filter-selection\">\n                        <label class=\"control-label\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myBets.from",{"name":"t","hash":{},"data":data}))
    + " :</label>\n                        <div id=\"date_from_group\" class=\"input-group date\">\n                            <input id=\"date_from\" type=\"text\" class=\"form-control\" value=\""
    + alias2(((helper = (helper = helpers.dateFrom || (depth0 != null ? depth0.dateFrom : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"dateFrom","hash":{},"data":data}) : helper)))
    + "\" autocomplete=\"false\"><span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n                        </div>\n                    </div>\n                    <div class=\"filter-selection\">\n                        <label class=\"control-label\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myBets.to",{"name":"t","hash":{},"data":data}))
    + " :</label>\n                        <div id=\"date_to_group\" class=\"input-group date\">\n                            <input id=\"date_to\" type=\"text\" class=\"form-control\" value=\""
    + alias2(((helper = (helper = helpers.dateTo || (depth0 != null ? depth0.dateTo : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"dateTo","hash":{},"data":data}) : helper)))
    + "\" autocomplete=\"false\"><span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n                        </div>\n                    </div>\n                    <div class=\"filter_submit\">\n                        <button id=\"btn_search\" class=\"btn-dark\" type=\"submit\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myBets.labelButton",{"name":"t","hash":{},"data":data}))
    + "</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"activity-list\">\n                <div class=\"activity-list-header\">\n                    <div class=\"activity\">\n                        <div class=\"transaction-id\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myBets.transactionRef",{"name":"t","hash":{},"data":data}))
    + "</div>\n                        <div class=\"created-date\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myBets.createdDate",{"name":"t","hash":{},"data":data}))
    + "</div>\n                        <div class=\"type-subtype\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myBets.type",{"name":"t","hash":{},"data":data}))
    + "</div>\n                        <div class=\"unit-stake\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myBets.unitStake",{"name":"t","hash":{},"data":data}))
    + "</div>\n                        <div class=\"debit\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myBets.debit",{"name":"t","hash":{},"data":data}))
    + "</div>\n                        <div class=\"credit\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myBets.credit",{"name":"t","hash":{},"data":data}))
    + "</div>\n                        <div class=\"description\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myBets.details",{"name":"t","hash":{},"data":data}))
    + "</div>\n                    </div>\n                </div>\n                <div id=\"activity_list\" class=\"activity-list-body\">\n                    <div class=\"table-release\">\n"
    + ((stack1 = this.invokePartial(partials['ui/loading'],depth0,{"name":"ui/loading","data":data,"indent":"                        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n                <div class=\"pager table-release\"></div>\n            </div>\n\n    </div>\n</div> ";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["my-statements"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "\n<div class=\"wrapper-main\">\n    <div class=\"my-bets\">\n\n            <div class=\"wrapper-filter\">\n                <div class=\"activity-title\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myStatements.title",{"name":"t","hash":{},"data":data}))
    + "</div>\n                <div class=\"activity-filter clearfix\">\n                    <div class=\"filter-selection\">\n                        <select id=\"filter_type\">\n                            <option value=\"PAYMENTRECEIPT\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myStatements.paymentReceipt",{"name":"t","hash":{},"data":data}))
    + "</option>\n                            <option value=\"BONUS\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myStatements.bonus",{"name":"t","hash":{},"data":data}))
    + "</option>\n                        </select>\n                    </div>\n                    <div class=\"filter-selection\">\n                        <label class=\"control-label\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myStatements.from",{"name":"t","hash":{},"data":data}))
    + " :</label>\n                        <div id=\"date_from_group\" class=\"input-group date\">\n                            <input id=\"date_from\" type=\"text\" class=\"form-control\" value=\""
    + alias2(((helper = (helper = helpers.dateFrom || (depth0 != null ? depth0.dateFrom : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"dateFrom","hash":{},"data":data}) : helper)))
    + "\"><span class=\"input-group-addon\" autocomplete=\"false\"><i class=\"fa fa-calendar\"></i></span>\n                        </div>\n                    </div>\n                    <div class=\"filter-selection\">\n                        <label class=\"control-label\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myStatements.to",{"name":"t","hash":{},"data":data}))
    + " :</label>\n                        <div id=\"date_to_group\" class=\"input-group date\">\n                            <input id=\"date_to\" type=\"text\" class=\"form-control\" value=\""
    + alias2(((helper = (helper = helpers.dateTo || (depth0 != null ? depth0.dateTo : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"dateTo","hash":{},"data":data}) : helper)))
    + "\"><span class=\"input-group-addon\" autocomplete=\"false\"><i class=\"fa fa-calendar\"></i></span>\n                        </div>\n                    </div>\n                    <div class=\"filter_submit\">\n                        <button id=\"btn_search\" class=\"btn-dark\" type=\"submit\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myStatements.labelButton",{"name":"t","hash":{},"data":data}))
    + "</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"activity-list\">\n                <div class=\"activity-list-header\">\n                    <div class=\"activity\">\n                        <div class=\"transaction-id\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myStatements.transactionId",{"name":"t","hash":{},"data":data}))
    + "</div>\n                        <div class=\"created-date\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myStatements.createdDate",{"name":"t","hash":{},"data":data}))
    + "</div>\n                        <div class=\"type-subtype\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myStatements.type",{"name":"t","hash":{},"data":data}))
    + "</div>\n                        <div class=\"description\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myStatements.description",{"name":"t","hash":{},"data":data}))
    + "</div>\n                        <div class=\"debit\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myStatements.debit",{"name":"t","hash":{},"data":data}))
    + "</div>\n                        <div class=\"credit\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myStatements.credit",{"name":"t","hash":{},"data":data}))
    + "</div>\n                        <div class=\"status\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"myStatements.status",{"name":"t","hash":{},"data":data}))
    + "</div>\n                    </div>\n                </div>\n                <div id=\"activity_list\" class=\"activity-list-body\">\n                    <div class=\"table-release\">\n"
    + ((stack1 = this.invokePartial(partials['ui/loading'],depth0,{"name":"ui/loading","data":data,"indent":"                        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n                <div class=\"pager table-release\"></div>\n            </div>\n\n    </div>\n</div> ";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["register"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "                            <option>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                                <option value=\""
    + alias3(((helper = (helper = helpers.isocode || (depth0 != null ? depth0.isocode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"isocode","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"desc","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                            <option value=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"desc","hash":{},"data":data}) : helper)))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "\n<div class=\"panel-heading\">\n    <div class=\"required-text\">\n        <strong class=\"required\">*</strong>\n        "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.requiredMessage",{"name":"t","hash":{},"data":data}))
    + "\n    </div>\n</div>\n\n<form id=\"account_register_form\">\n    <div class=\"wrapper-panel personal-details\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\"><h5 class=\"panel-title\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.personalDetails",{"name":"t","hash":{},"data":data}))
    + "</h5></div>\n\n            <div class=\"panel-body\">\n                <div class=\"form-group\">\n                    <label for=\"title\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.title",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                    <div>\n                        <select id=\"title\" name=\"title\">\n                            <option>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.mr",{"name":"t","hash":{},"data":data}))
    + "</option>\n                            <option>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.mrs",{"name":"t","hash":{},"data":data}))
    + "</option>\n                            <option>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.ms",{"name":"t","hash":{},"data":data}))
    + "</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"firstName\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.firstname",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                    <div>\n                        <input type=\"text\" id=\"firstName\" name=\"firstName\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"lastName\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.surname",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                    <div>\n                        <input type=\"text\" id=\"lastName\" name=\"lastName\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"CHANGEME\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.dateOfBirth",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                    <div class=\"dob-container\">\n                        <select name=\"date\" id=\"dob-day\">\n"
    + ((stack1 = (helpers['for'] || (depth0 && depth0['for']) || alias1).call(depth0,1,31,{"name":"for","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                        </select>\n                        <select name=\"month\" id=\"dob-month\">\n"
    + ((stack1 = (helpers['for'] || (depth0 && depth0['for']) || alias1).call(depth0,1,12,{"name":"for","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                        </select>\n                        <select name=\"year\" id=\"dob-year\">\n"
    + ((stack1 = (helpers['for'] || (depth0 && depth0['for']) || alias1).call(depth0,1910,(depth0 != null ? depth0.maxYear : depth0),{"name":"for","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                        </select>\n                        <input type=\"text\" name=\"dob\" id=\"dob\" tabindex=\"-1\"/>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"address1\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.addressline1",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                    <div>\n                        <input type=\"text\" id=\"address1\" name=\"address1\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"address2\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.addressline2",{"name":"t","hash":{},"data":data}))
    + "</label>\n                    <div>\n                        <input type=\"text\" id=\"address2\" name=\"address2\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"address3\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.addressline3",{"name":"t","hash":{},"data":data}))
    + "</label>\n                    <div>\n                        <input type=\"text\" id=\"address3\" name=\"address3\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"address4\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.addressline4",{"name":"t","hash":{},"data":data}))
    + "</label>\n\n                    <div>\n                        <input type=\"text\" id=\"address4\" name=\"address4\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"countryCode\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.country",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                    <div>\n                        <select id=\"countryCode\" name=\"countryCode\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.countries : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                        </select>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"postcode\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.postcode",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                    <div>\n                        <input type=\"text\" id=\"postcode\" name=\"postcode\">\n                    </div>\n                </div>\n                <div class=\"form-group hidden\">\n                    <label for=\"postCode\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.postcode",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                    <div>\n                        <input type=\"text\" id=\"postCode\" name=\"postCode\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"homeTel\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.homeTelephone",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                    <div>\n                        <input type=\"text\" id=\"homeTel\" name=\"homeTel\" class=\"phone-group\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"mobileTel\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.mobileTelephone",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                    <div>\n                        <input type=\"text\" id=\"mobileTel\" name=\"mobileTel\" class=\"phone-group\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"currencyCode\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.currency",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                    <div>\n                        <select id=\"currencyCode\" name=\"currencyCode\">\n                            <option value=\"PHP\">Philippine Peso</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"languageCode\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.languages",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                    <div>\n                        <select id=\"languageCode\" name=\"languageCode\">\n                            <option value=\"en-GB\">English (United Kingdom)</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"priceFormat\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.priceFormat",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                    <div>\n                        <select id=\"priceFormat\" name=\"priceFormat\">\n                            <option id=\"3\">EURO</option>\n                        </select>\n                    </div>\n                </div>\n\n            </div> \n\n        </div>\n    </div>\n    <div class=\"wrapper-panel account-details\">\n\n        <div class=\"panel panel-default\">\n\n            <div class=\"panel-heading\"><h5 class=\"panel-title\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.accountDetails",{"name":"t","hash":{},"data":data}))
    + "</h5></div>\n            <div class=\"panel-body\">\n\n                <div class=\"form-group\">\n                    <label for=\"username\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.username",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                    <div>\n                        <input type=\"text\" id=\"username\" name=\"username\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.email",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                    <div>\n                        <input type=\"text\" id=\"email\" name=\"email\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.password",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                    <div>\n                        <input type=\"password\" id=\"password\" name=\"password\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"confirmPassword\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.confirmPassword",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                    <div>\n                        <input type=\"password\" id=\"confirmPassword\" name=\"confirmPassword\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"securityQuestion\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.securityQuestion",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                    <div>\n                        <select id=\"securityQuestion\" name=\"securityQuestion\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.securityQuestions : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                        </select>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"securityQuestionAnswer\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.securityAnswer",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                    <div>\n                        <input type=\"text\" id=\"securityQuestionAnswer\" name=\"securityQuestionAnswer\">\n                    </div>\n                </div>\n\n                <div class=\"offset-checkbox\">\n                    <div class=\"checkbox\">\n                        <label>\n                            <span class=\"checkbox-wrap\"><input id=\"readTermsAndConditions\" name=\"readTermsAndConditions\" type=\"checkbox\"></span> "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.readTermsAndConditions",{"name":"t","hash":{},"data":data}))
    + "\n                            <label for=\"readTermsAndConditions\" class=\"error block\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.acceptPolicyMessage",{"name":"t","hash":{},"data":data}))
    + "</label>\n                        </label>\n                    </div>\n                    <div class=\"checkbox\">\n                        <label>\n                            <span class=\"checkbox-wrap\"><input id=\"isOver18\" name=\"isOver18\" type=\"checkbox\"></span> "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.isOver18",{"name":"t","hash":{},"data":data}))
    + "\n                            <label for=\"isOver18\" class=\"error block\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.ageRequirementConfirm",{"name":"t","hash":{},"data":data}))
    + "</label>\n                        </label>\n                    </div>\n                </div>\n\n            </div> \n\n            <div class=\"panel-footer\">\n                <div class=\"offset-wrapper\">\n                    <button type=\"submit\" class=\"btn-register-form\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.registerAccount",{"name":"t","hash":{},"data":data}))
    + "</button>\n                </div>\n            </div>\n\n        </div> \n</form>";
},"useData":true});
this["MyApp"]["templates"]["verify-password"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<form id=\"verify_password_form\">\n    <div class=\"panel panel-default\">\n\n        <div class=\"panel-heading\">\n            <div class=\"required-text\">\n                <strong class=\"required\">*</strong>\n                "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"password.errorMissingField",{"name":"t","hash":{},"data":data}))
    + "\n            </div>\n        </div>\n\n        <div class=\"panel-body\">\n            <div class=\"form-group\">\n                <label for=\"password\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"password.newPassword",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                <div>\n                    <input type=\"password\" id=\"password\" name=\"password\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"confirmPassword\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"password.confirmPassword",{"name":"t","hash":{},"data":data}))
    + " <strong class=\"required\">*</strong></label>\n                <div>\n                    <input type=\"password\" id=\"confirmPassword\" name=\"confirmPassword\">\n                </div>\n            </div>\n            <div id=\"errorMsgContainer\" class=\"form-group hidden\">\n                <div id=\"errorMsg\" class=\"text-danger\"></div>\n            </div>\n        </div> \n        <div class=\"panel-footer\">\n            <div class=\"offset-wrapper\">\n                <button type=\"submit\" class=\"btn-dark\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"password.savePassword",{"name":"t","hash":{},"data":data}))
    + "</button>\n            </div>\n        </div>\n    </div> \n</form>";
},"useData":true});
this["MyApp"]["templates"]["header"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "    <div class=\"period period-"
    + alias2(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + " periods-"
    + alias2((helpers.size || (depth0 && depth0.size) || alias1).call(depth0,(depths[1] != null ? depths[1].displayMap : depths[1]),{"name":"size","hash":{},"data":data}))
    + " markets-"
    + alias2((helpers.size || (depth0 && depth0.size) || alias1).call(depth0,depth0,{"name":"size","hash":{},"data":data}))
    + "\">\n        <div class=\"period-title\">\n            <span>"
    + alias2((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias1).call(depth0,"header",(data && data.key),{"name":"tPrefix","hash":{},"data":data}))
    + "</span>\n        </div>\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.escapeExpression;

  return "            <div class=\"market market-"
    + alias1(this.lambda(depth0, depth0))
    + " \">\n                <span>"
    + alias1((helpers.tPrefix || (depth0 && depth0.tPrefix) || helpers.helperMissing).call(depth0,"header",depth0,{"name":"tPrefix","hash":{},"data":data}))
    + "</span>\n            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "\n<div class=\"event-time\">\n    <span>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"asianView.time",{"name":"t","hash":{},"data":data}))
    + "</span>\n</div>\n<div class=\"event-description\">\n    <span>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"asianView.events",{"name":"t","hash":{},"data":data}))
    + "</span>\n</div>\n\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.displayMap : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n<div class=\"tcol tcell tspan-2 col-more\">\n    <span>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"asianView.more",{"name":"t","hash":{},"data":data}))
    + "</span>\n</div>";
},"useData":true,"useDepths":true});
this["MyApp"]["templates"]["outright"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "    "
    + alias2((helpers.consoleLog || (depth0 && depth0.consoleLog) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.OUTRIGHT : stack1)) != null ? stack1.children : stack1),{"name":"consoleLog","hash":{},"data":data}))
    + "\n    <div class=\"rank-events-container m-"
    + alias2(this.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.OUTRIGHT : stack1)) != null ? stack1.id : stack1), depth0))
    + "\">\n        \n        <div class=\"events-container\">\n\n"
    + ((stack1 = (helpers.foreach || (depth0 && depth0.foreach) || alias1).call(depth0,(helpers.toColumns || (depth0 && depth0.toColumns) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.OUTRIGHT : stack1)) != null ? stack1.children : stack1),2,{"name":"toColumns","hash":{},"data":data}),{"name":"foreach","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"col-group\">\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['asianview/common/group-outright'],depth0,{"name":"asianview/common/group-outright","hash":{"team":depth0},"data":data,"indent":"                        ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "<div class=\"event-block rankevent event e-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n\n    <div class=\"events-header\">\n"
    + ((stack1 = this.invokePartial(partials['ui/addtofavorites'],depth0,{"name":"ui/addtofavorites","hash":{"type":"e","title":((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.description : stack1),"id":((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.id : stack1)},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        <div class=\"outright-title\">\n           "
    + alias2((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.date : stack1),"date",{"name":"formatDateTime","hash":{},"data":data}))
    + "  "
    + alias2((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.date : stack1),"time",{"name":"formatDateTime","hash":{},"data":data}))
    + " - "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.description : stack1), depth0))
    + "\n        </div>\n    </div>\n"
    + ((stack1 = (helpers.foreach || (depth0 && depth0.foreach) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.children : stack1),{"name":"foreach","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>\n\n\n\n";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["row"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\n\n    <div class=\"event-row \">\n        <div class=\"event-time"
    + this.escapeExpression((helpers.checkUpdatedScores || (depth0 && depth0.checkUpdatedScores) || helpers.helperMissing).call(depth0,(depths[1] != null ? depths[1].score : depths[1]),(depths[1] != null ? depths[1].code : depths[1]),{"name":"checkUpdatedScores","hash":{},"data":data}))
    + "\">\n            <div class=\"wrapper\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.$first : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n\n        <div class=\"event-description\">\n            <div class=\"wrapper\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.$first : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n\n"
    + ((stack1 = helpers.each.call(depth0,(depths[1] != null ? depths[1].displayMap : depths[1]),{"name":"each","hash":{},"fn":this.program(6, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials['asianview/common/col-more'],depth0,{"name":"asianview/common/col-more","hash":{"liveMode":(depths[1] != null ? depths[1].liveMode : depths[1]),"count":((stack1 = (depths[1] != null ? depths[1].event : depths[1])) != null ? stack1.extendedCount : stack1),"id":((stack1 = (depths[1] != null ? depths[1].event : depths[1])) != null ? stack1.id : stack1),"first":(depth0 != null ? depth0.$first : depth0)},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n\n\n\n\n\n\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.$first : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['asianview/common/date-cell'],depth0,{"name":"asianview/common/date-cell","hash":{"sets":(depths[2] != null ? depths[2].sets : depths[2]),"code":(depths[2] != null ? depths[2].code : depths[2]),"score":((stack1 = (depths[2] != null ? depths[2].score : depths[2])) != null ? stack1.score : stack1),"liveEvent":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.liveEvent : stack1),"reversedTime":(depths[2] != null ? depths[2].reversedTime : depths[2]),"livemode":(depths[2] != null ? depths[2].liveMode : depths[2]),"date":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.date : stack1)},"data":data,"indent":"                    ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "                    <div class=\"teams has-tooltip\" title=\""
    + alias2(alias1(((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.opponentA : stack1), depth0))
    + " x "
    + alias2(alias1(((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.opponentB : stack1), depth0))
    + "\">\n                        "
    + alias2((helpers.formatTeamNameSpread || (depth0 && depth0.formatTeamNameSpread) || alias3).call(depth0,((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.opponentA : stack1),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.HDP : stack1)) != null ? stack1.children : stack1)) != null ? stack1['0'] : stack1),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.HDP : stack1)) != null ? stack1.children : stack1)) != null ? stack1['1'] : stack1),{"name":"formatTeamNameSpread","hash":{},"data":data}))
    + "\n                        "
    + alias2((helpers.formatTeamNameSpread || (depth0 && depth0.formatTeamNameSpread) || alias3).call(depth0,((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.opponentB : stack1),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.HDP : stack1)) != null ? stack1.children : stack1)) != null ? stack1['1'] : stack1),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.HDP : stack1)) != null ? stack1.children : stack1)) != null ? stack1['0'] : stack1),{"name":"formatTeamNameSpread","hash":{},"data":data}))
    + "\n                        <span class=\"draw\" >Draw</span>\n                        <span class=\"nogoal\" >No Goal</span>\n                    </div>\n\n"
    + ((stack1 = this.invokePartial(partials['ui/addtofavorites'],depth0,{"name":"ui/addtofavorites","hash":{"type":"e","title":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.description : stack1),"id":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.id : stack1)},"data":data,"indent":"                    ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"6":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "            <div class=\"period period-"
    + alias2(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + " periods-"
    + alias2((helpers.size || (depth0 && depth0.size) || alias1).call(depth0,(depths[2] != null ? depths[2].displayMap : depths[2]),{"name":"size","hash":{},"data":data}))
    + " markets-"
    + alias2((helpers.size || (depth0 && depth0.size) || alias1).call(depth0,depth0,{"name":"size","hash":{},"data":data}))
    + "\">\n            \n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n            </div>\n\n";
},"7":function(depth0,helpers,partials,data,blockParams,depths) {
    return "                "
    + this.escapeExpression((helpers.asianGroup || (depth0 && depth0.asianGroup) || helpers.helperMissing).call(depth0,depth0,(depths[2] != null ? depths[2].children : depths[2]),{"name":"asianGroup","hash":{},"data":data}))
    + "\n";
},"9":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "    <div class=\"asian-row-more more-"
    + alias2(alias1(((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.id : stack1), depth0))
    + "\" data-event-id=\""
    + alias2(alias1(((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.id : stack1), depth0))
    + "\"  data-live=\""
    + alias2(alias1((depths[2] != null ? depths[2].liveMode : depths[2]), depth0))
    + "\"></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.escapeExpression, alias2=helpers.helperMissing;

  return "<div class=\"event-block event e-"
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.id : stack1), depth0))
    + alias1((helpers.updateScoresContainer || (depth0 && depth0.updateScoresContainer) || alias2).call(depth0,(depth0 != null ? depth0.score : depth0),{"name":"updateScoresContainer","hash":{},"data":data}))
    + "\">\n\n"
    + ((stack1 = (helpers.foreach || (depth0 && depth0.foreach) || alias2).call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.children : stack1),{"name":"foreach","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>";
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["credit-card"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "                                <option>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div id=\"deposit_page\" class=\"deposit-page form-wrapper\">\n    <form id=\"deposit_credit_card_form\">\n        <div class=\"main-header\">\n            <h4>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"deposit.deposit",{"name":"t","hash":{},"data":data}))
    + "</h4>\n        </div>\n\n        <div id=\"deposit_methods\" class=\"deposit-methods row\">\n            <div id=\"credit_card_method\" class=\"credit-card-method col-lg-6 text-center\">\n                <img src=\"/assets/images/deposit-credit-card-active.jpg\">\n            </div>\n            <div id=\"skrill_method\" class=\"skrill-method col-lg-6 text-center\">\n                <img src=\"/assets/images/deposit-skrill-inactive.jpg\">\n            </div>\n        </div>\n\n        <div class=\"card-details panel panel-default\">\n            <div class=\"panel-heading\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"deposit.cardDetails",{"name":"t","hash":{},"data":data}))
    + "</div>\n            <div class=\"panel-body\">\n                <div class=\"form-group\">\n                    <label class=\"control-label\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"deposit.name",{"name":"t","hash":{},"data":data}))
    + " *</label>\n                    <input name=\"cardName\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"deposit.cardNumber",{"name":"t","hash":{},"data":data}))
    + " *</label>\n                    <input name=\"cardNumber\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"deposit.expiryDate",{"name":"t","hash":{},"data":data}))
    + " *</label>\n                    <div class=\"expire-time\">\n                        <select class=\"expire-month col-lg-6\">\n"
    + ((stack1 = (helpers['for'] || (depth0 && depth0['for']) || alias1).call(depth0,1,12,{"name":"for","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                        </select>\n                        <select class=\"expire-year col-lg-6\">\n"
    + ((stack1 = (helpers['for'] || (depth0 && depth0['for']) || alias1).call(depth0,2015,2025,{"name":"for","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                        </select>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"deposit.verificationNumber",{"name":"t","hash":{},"data":data}))
    + " *</label>\n                    <input name=\"verificationNumber\" class=\"form-control\">\n                </div>\n            </div>\n        </div>\n        <div class=\"card-details panel panel-default\">\n            <div class=\"panel-heading\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"deposit.billingDetails",{"name":"t","hash":{},"data":data}))
    + "</div>\n            <div class=\"panel-body\">\n                <div class=\"form-group\">\n                    <label class=\"control-label\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"deposit.addressLine",{"name":"t","hash":{},"data":data}))
    + " *</label>\n                    <input name=\"addressLine1\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"deposit.city",{"name":"t","hash":{},"data":data}))
    + " *</label>\n                    <input name=\"city\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"deposit.postCode",{"name":"t","hash":{},"data":data}))
    + " *</label>\n                    <input name=\"postcode\" class=\"form-control\">\n                </div>\n            </div>\n        </div>\n        <div class=\"row btn-container\">\n            <div class=\"col-lg-12 text-center\">\n                <button class=\"form-control\" type=\"submit\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"deposit.continue",{"name":"t","hash":{},"data":data}))
    + "</button>\n            </div>\n        </div>\n    </form>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["skrill"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div id=\"deposit_page\" class=\"deposit-page form-wrapper\">\n    <form id=\"deposit_skrill_form\">\n        <div class=\"main-header\">\n            <h4>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"deposit.deposit",{"name":"t","hash":{},"data":data}))
    + "</h4>\n        </div>\n\n        <div id=\"deposit_methods\" class=\"deposit-methods row\">\n            <div id=\"credit_card_method\" class=\"credit-card-method col-lg-6 text-center\">\n                <img src=\"assets/images/deposit-credit-card-inactive.jpg\">\n            </div>\n            <div id=\"skrill_method\" class=\"skrill-method col-lg-6 text-center\">\n                <img src=\"assets/images/deposit-skrill-active.jpg\">\n            </div>\n        </div>\n\n        <div class=\"card-details panel panel-default\">\n            <div class=\"panel-heading\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"deposit.skrillDetails",{"name":"t","hash":{},"data":data}))
    + "</div>\n            <div class=\"panel-body\">\n                <div class=\"form-group\">\n                    <label class=\"control-label\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"deposit.walletEmailAddress",{"name":"t","hash":{},"data":data}))
    + " *</label>\n                    <input class=\"form-control\" name=\"email\" type=\"email\">\n                </div>\n            </div>\n        </div>\n        <div class=\"row btn-container\">\n            <div class=\"col-lg-12 text-center\">\n                <button class=\"form-control\" type=\"submit\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"deposit.continue",{"name":"t","hash":{},"data":data}))
    + "</button>\n            </div>\n        </div>\n    </form>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["MyApp"]["templates"]["row"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "<div class=\"event-block event e-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.id : stack1), depth0))
    + alias2((helpers.updateScoresContainer || (depth0 && depth0.updateScoresContainer) || alias3).call(depth0,(depth0 != null ? depth0.score : depth0),{"name":"updateScoresContainer","hash":{},"data":data}))
    + "  "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isFavorite : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isStared : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.initHidden : stack1),{"name":"if","hash":{},"fn":this.program(6, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" data-eventid=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n"
    + ((stack1 = (helpers.foreach || (depth0 && depth0.foreach) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.children : stack1),{"name":"foreach","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>\n";
},"2":function(depth0,helpers,partials,data) {
    return " isFavorite ";
},"4":function(depth0,helpers,partials,data) {
    return " isStared ";
},"6":function(depth0,helpers,partials,data) {
    return " hidden";
},"8":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.$first : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n\n";
},"9":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.escapeExpression, alias2=this.lambda;

  return "\n    <div class=\"european-row\">\n            <div class=\"event-header\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depths[2] != null ? depths[2].liveMode : depths[2]),{"name":"if","hash":{},"fn":this.program(10, data, 0, blockParams, depths),"inverse":this.program(12, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                \n                <div class=\"col col-date pull-right\">\n                    <div class=\"wrapper clearfix\">\n                        <span class=\"datetime\">\n                            "
    + alias1((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || helpers.helperMissing).call(depth0,((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.date : stack1),"MM/DD hh:mm A",{"name":"formatDateTime","hash":{},"data":data}))
    + "\n                        </span>\n                    </div>\n                </div>\n\n                \n            </div>\n"
    + ((stack1 = this.invokePartial(partials['europeanview/common/event-block'],depth0,{"name":"europeanview/common/event-block","hash":{"marketData":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1),"defaultButtons":(depths[2] != null ? depths[2].defaultButtons : depths[2]),"brMatchId":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.brMatchId : stack1),"virtual":(depths[2] != null ? depths[2].virtual : depths[2]),"imagePath":(depths[2] != null ? depths[2].imagePath : depths[2]),"code":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.code : stack1),"eventDescription":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.description : stack1),"market":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.description : stack1),"liveMode":(depths[2] != null ? depths[2].liveMode : depths[2]),"flags":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.flags : stack1),"eventID":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.id : stack1),"count":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.extendedCount : stack1),"id":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.id : stack1),"first":(depth0 != null ? depth0.$first : depth0),"children":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.children : stack1),"style":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.style : stack1)},"data":data,"indent":"                ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "            \n            \n            <div class=\"asian-row-more more-"
    + alias1(alias2(((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.id : stack1), depth0))
    + "\" data-event-id=\""
    + alias1(alias2(((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.id : stack1), depth0))
    + "\"  data-live=\""
    + alias1(alias2((depths[2] != null ? depths[2].liveMode : depths[2]), depth0))
    + "\"></div>\n            \n        \n\n    </div>\n";
},"10":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "                <div class=\"col col-time\">\n                    <div class=\"live-time\" data-time-m=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depths[3] != null ? depths[3].event : depths[3])) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1)) != null ? stack1.m : stack1), depth0))
    + "\" data-time-s=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depths[3] != null ? depths[3].event : depths[3])) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1)) != null ? stack1.s : stack1), depth0))
    + "\" data-reversed-time=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depths[3] != null ? depths[3].event : depths[3])) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1)) != null ? stack1.reversedTime : stack1), depth0))
    + "\" data-status=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depths[3] != null ? depths[3].event : depths[3])) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1)) != null ? stack1.status : stack1), depth0))
    + "\" data-id=\"l"
    + alias2(alias1(((stack1 = (depths[3] != null ? depths[3].event : depths[3])) != null ? stack1.id : stack1), depth0))
    + "\" >\n                        "
    + alias2((helpers.runningTime || (depth0 && depth0.runningTime) || alias3).call(depth0,((stack1 = ((stack1 = (depths[3] != null ? depths[3].event : depths[3])) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1),((stack1 = ((stack1 = (depths[3] != null ? depths[3].event : depths[3])) != null ? stack1.liveEvent : stack1)) != null ? stack1.timereversedTime : stack1),((stack1 = (depths[3] != null ? depths[3].event : depths[3])) != null ? stack1.code : stack1),((stack1 = (depths[3] != null ? depths[3].event : depths[3])) != null ? stack1.liveEvent : stack1),{"name":"runningTime","hash":{},"data":data}))
    + "\n                    </div>\n\n                </div>\n                <div class=\"col col-teams "
    + alias2(alias1(((stack1 = (depths[3] != null ? depths[3].event : depths[3])) != null ? stack1.code : stack1), depth0))
    + "-"
    + alias2(alias1(((stack1 = ((stack1 = (depths[3] != null ? depths[3].event : depths[3])) != null ? stack1.liveEvent : stack1)) != null ? stack1.max : stack1), depth0))
    + "\"> \n                    <div class=\"teams\" title=\""
    + alias2(alias1(((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.description : stack1), depth0))
    + "\">\n                        <div class=\"team-a\"> \n                            "
    + alias2(alias1(((stack1 = (depths[3] != null ? depths[3].event : depths[3])) != null ? stack1.opponentA : stack1), depth0))
    + "\n                        </div>\n                        <div class=\"team-b\">\n                            "
    + alias2(alias1(((stack1 = (depths[3] != null ? depths[3].event : depths[3])) != null ? stack1.opponentB : stack1), depth0))
    + "\n                        </div>\n                    </div>\n                </div>\n\n\n\n                <div class=\"col col-subscore\">\n                    <div class=\"wrapper clearfix\">\n                        "
    + alias2((helpers.subScore || (depth0 && depth0.subScore) || alias3).call(depth0,((stack1 = (depths[3] != null ? depths[3].event : depths[3])) != null ? stack1.liveEvent : stack1),false,{"name":"subScore","hash":{},"data":data}))
    + "\n                    </div>\n                </div>\n\n\n\n                <div class=\"col col-score "
    + alias2((helpers.checkUpdatedScores || (depth0 && depth0.checkUpdatedScores) || alias3).call(depth0,(depths[3] != null ? depths[3].score : depths[3]),(depths[3] != null ? depths[3].code : depths[3]),{"name":"checkUpdatedScores","hash":{},"data":data}))
    + "\">\n                    <div class=\"wrapper clearfix\">\n                        <div class=\"scores-container\">\n                            <span class=\"live-period-msg\">\n                                <span class=\"score-a\">"
    + alias2((helpers.showScore || (depth0 && depth0.showScore) || alias3).call(depth0,((stack1 = (depths[3] != null ? depths[3].event : depths[3])) != null ? stack1.liveEvent : stack1),"a",{"name":"showScore","hash":{},"data":data}))
    + "</span>\n                                <span class=\"score-b\">"
    + alias2((helpers.showScore || (depth0 && depth0.showScore) || alias3).call(depth0,((stack1 = (depths[3] != null ? depths[3].event : depths[3])) != null ? stack1.liveEvent : stack1),"b",{"name":"showScore","hash":{},"data":data}))
    + "</span>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n\n                \n                \n\n\n";
},"12":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "                <div class=\"col col-teams\">\n                    <div class=\"teams\" title=\""
    + alias2(alias1(((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.description : stack1), depth0))
    + "\">\n                        <span>\n                            "
    + alias2(alias1(((stack1 = (depths[3] != null ? depths[3].event : depths[3])) != null ? stack1.description : stack1), depth0))
    + "\n                        </span>\n                        \n                    </div>\n                </div>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1)) != null ? stack1.status : stack1),"!==",5,{"name":"ifCond","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["event-block"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['europeanview/common/group-1x1-price'],depth0,{"name":"europeanview/common/group-1x1-price","hash":{"team":(depth0 != null ? depth0.description : depth0),"outcome":depth0},"data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"event-markets "
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + " default-market-"
    + alias3((helpers.size || (depth0 && depth0.size) || alias1).call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"size","hash":{},"data":data}))
    + "\" data-style=\""
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"col-markets m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n\n        \n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["league-block"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression, alias2=this.lambda;

  return "<div class=\"league-block league "
    + alias1(((helper = (helper = helpers.visible || (depth0 != null ? depth0.visible : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"visible","hash":{},"data":data}) : helper)))
    + " p-"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" data-path=\""
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n    <div class=\"league-title\">\n        <div class=\"wrapper\"> \n                <span class=\"title\">"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span>\n        </div>\n    </div>\n    <div class=\"events-container\">\n    </div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["row"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.escapeExpression, alias2=this.lambda;

  return "    <div class=\"european-row market-list "
    + alias1((helpers.showFlags || (depth0 && depth0.showFlags) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.flags : stack1),{"name":"showFlags","hash":{},"data":data}))
    + "\" data-period=\""
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.period : stack1), depth0))
    + "\" data-marketGroup=\""
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.marketTypeGroup : stack1), depth0))
    + "\" data-marketId=\""
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.id : stack1), depth0))
    + "\">\n        <div class=\"market-description\">\n            "
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.description : stack1), depth0))
    + " - "
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.period : stack1), depth0))
    + "\n        </div>\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['live/event-block'],depth0,{"name":"live/event-block","hash":{"liveMode":(depths[2] != null ? depths[2].liveMode : depths[2]),"flags":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.flags : stack1),"eventID":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.id : stack1),"count":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.extendedCount : stack1),"id":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.id : stack1),"first":(depth0 != null ? depth0.$first : depth0),"children":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.children : stack1),"style":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.style : stack1)},"data":data,"indent":"                ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "<div class=\"event-block event e-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n\n\n\n    <div class=\"event-header league-path\">\n                <div class=\"col col-teams\">\n                    <div class=\"teams\" title=\""
    + alias2(alias1(((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.description : stack1), depth0))
    + "\">\n                        <span>\n                            "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.description : stack1), depth0))
    + "\n                        </span>\n                        \n                    </div>\n                </div>\n                <div class=\"col col-time"
    + alias2((helpers.checkUpdatedScores || (depth0 && depth0.checkUpdatedScores) || alias3).call(depth0,(depths[2] != null ? depths[2].score : depths[2]),(depths[2] != null ? depths[2].code : depths[2]),{"name":"checkUpdatedScores","hash":{},"data":data}))
    + "\">\n                    <div class=\"wrapper clearfix pull-right\">\n"
    + ((stack1 = this.invokePartial(partials['europeanview/common/date-cell'],depth0,{"name":"europeanview/common/date-cell","hash":{"match":(depths[2] != null ? depths[2].match : depths[2]),"status":((stack1 = ((stack1 = ((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1)) != null ? stack1.status : stack1),"sets":(depths[2] != null ? depths[2].sets : depths[2]),"code":(depths[2] != null ? depths[2].code : depths[2]),"score":((stack1 = (depths[2] != null ? depths[2].score : depths[2])) != null ? stack1.score : stack1),"liveEvent":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.liveEvent : stack1),"reversedTime":(depths[2] != null ? depths[2].reversedTime : depths[2]),"livemode":(depths[2] != null ? depths[2].liveMode : depths[2]),"date":((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.date : stack1)},"data":data,"indent":"                            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n            </div>\n    \n"
    + ((stack1 = (helpers.foreach || (depth0 && depth0.foreach) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.children : stack1),{"name":"foreach","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>";
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["section-block"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return " criteria-"
    + this.escapeExpression(((helper = (helper = helpers.criteria || (depth0 != null ? depth0.criteria : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"criteria","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isDouble : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "-view";
},"2":function(depth0,helpers,partials,data) {
    return "double";
},"4":function(depth0,helpers,partials,data) {
    return "single";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"section-block "
    + alias3(((helper = (helper = helpers.sectionCode || (depth0 != null ? depth0.sectionCode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sectionCode","hash":{},"data":data}) : helper)))
    + " european-section event-page\">\n    <!-- start: title -->\n    <div class=\"section-title block-title\">\n        <div class=\"title\">\n            <span>\n                <i class=\"icon qicon-"
    + alias3(((helper = (helper = helpers.sportCode || (depth0 != null ? depth0.sportCode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sportCode","hash":{},"data":data}) : helper)))
    + "\"></i>"
    + alias3((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias1).call(depth0,"sportCode",(depth0 != null ? depth0.sportCode : depth0),{"name":"tPrefix","hash":{},"data":data}))
    + "\n            </span>\n        </div>\n        <div class=\"timer-block\">\n            <span class=\"icon-refresh\"><i class=\"fa fa-refresh\"></i></span>\n            <span class=\"timer\">00</span>\n        </div>\n        <div class=\"option-block\">\n            <div class=\"btn-group\">\n                <button type=\"button\" class=\"btn-league market-modal\" data-target=\"#league-modal\" aria-expanded=\"false\" disabled >\n                    "
    + alias3((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.selectMarket",{"name":"t","hash":{},"data":data}))
    + " <span class=\"caret\"></span>\n                </button>                \n            </div>\n        </div>\n    </div>\n    <!-- end: title -->\n\n\n    <div data-code=\""
    + alias3(((helper = (helper = helpers.sportCode || (depth0 != null ? depth0.sportCode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sportCode","hash":{},"data":data}) : helper)))
    + "\" class=\"section-container"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isAsian : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " "
    + alias3(((helper = (helper = helpers.sportCode || (depth0 != null ? depth0.sportCode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sportCode","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\""
    + alias3(((helper = (helper = helpers.region || (depth0 != null ? depth0.region : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"region","hash":{},"data":data}) : helper)))
    + "-row "
    + alias3(((helper = (helper = helpers.region || (depth0 != null ? depth0.region : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"region","hash":{},"data":data}) : helper)))
    + "-header\">\n        </div>\n        <div class=\"league-container\">\n"
    + ((stack1 = this.invokePartial(partials['ui/loading'],depth0,{"name":"ui/loading","data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["contact-center-modal"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"modal fade\" id=\"contact-center-popup\" tabindex=\"-1\" role=\"dialog\"\n     aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><i class=\"fa fa-times\"></i></button>\n                <h4 class=\"modal-title\" id=\"myModalLabel\"><i class=\"fa fa-user\"></i>\n                    "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.title",{"name":"t","hash":{},"data":data}))
    + "\n                </h4>\n            </div>\n            <div class=\"modal-body table\">\n                <div class=\"table-cell contact-info\">\n                    <table>\n                        <thead>\n                        <tr>\n                            <td colspan=\"2\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.asia",{"name":"t","hash":{},"data":data}))
    + "</td>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.telLabel",{"name":"t","hash":{},"data":data}))
    + "</td>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.telNumber",{"name":"t","hash":{},"data":data}))
    + "</td>\n                        </tr>\n                        <tr>\n                            <td></td>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.telNumber",{"name":"t","hash":{},"data":data}))
    + "</td>\n                        </tr>\n                        <tr>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.emailLabel",{"name":"t","hash":{},"data":data}))
    + "</td>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.emailAsia",{"name":"t","hash":{},"data":data}))
    + "</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <table>\n                        <thead>\n                        <tr>\n                            <td colspan=\"2\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.europe",{"name":"t","hash":{},"data":data}))
    + "</td>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.telLabel",{"name":"t","hash":{},"data":data}))
    + "</td>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.telNumber",{"name":"t","hash":{},"data":data}))
    + "</td>\n                        </tr>\n                        <tr>\n                            <td></td>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.telNumber",{"name":"t","hash":{},"data":data}))
    + "</td>\n                        </tr>\n                        <tr>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.emailLabel",{"name":"t","hash":{},"data":data}))
    + "</td>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.emailEurope",{"name":"t","hash":{},"data":data}))
    + "</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <table>\n                        <thead>\n                        <tr>\n                            <td colspan=\"2\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.restOfWorld",{"name":"t","hash":{},"data":data}))
    + "</td>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.telLabel",{"name":"t","hash":{},"data":data}))
    + "</td>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.telNumber",{"name":"t","hash":{},"data":data}))
    + "</td>\n                        </tr>\n                        <tr>\n                            <td></td>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.telNumber",{"name":"t","hash":{},"data":data}))
    + "</td>\n                        </tr>\n                        <tr>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.emailLabel",{"name":"t","hash":{},"data":data}))
    + "</td>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.emailWorld",{"name":"t","hash":{},"data":data}))
    + "</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"table-cell live-chat\">\n                    <table>\n                        <thead>\n                        <tr>\n                            <td colspan=\"2\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.liveChat",{"name":"t","hash":{},"data":data}))
    + "</td>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr>\n                            <td colspan=\"2\" class=\"click-to-livechat\">\n                                <a href=\"\">\n                                    <img src=\"/assets/images/click-to-livechat.png\" alt=\"\"/>\n                                </a>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.skype",{"name":"t","hash":{},"data":data}))
    + "</td>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.betDealSupport",{"name":"t","hash":{},"data":data}))
    + "</td>\n                        </tr>\n                        <tr>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.line",{"name":"t","hash":{},"data":data}))
    + "</td>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.betDealSupport",{"name":"t","hash":{},"data":data}))
    + "</td>\n                        </tr>\n                        <tr>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.viber",{"name":"t","hash":{},"data":data}))
    + "</td>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.telNumber",{"name":"t","hash":{},"data":data}))
    + "</td>\n                        </tr>\n                        <tr>\n                            <td></td>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.telNumber",{"name":"t","hash":{},"data":data}))
    + "</td>\n                        </tr>\n                        <tr>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.twitter",{"name":"t","hash":{},"data":data}))
    + "</td>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.betDealSupport",{"name":"t","hash":{},"data":data}))
    + "</td>\n                        </tr>\n                        <tr>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.yahoo",{"name":"t","hash":{},"data":data}))
    + "</td>\n                            <td>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"contactCenter.betDealYahoo",{"name":"t","hash":{},"data":data}))
    + "</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["test"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "HOME "
    + this.escapeExpression(((helper = (helper = helpers.test || (depth0 != null ? depth0.test : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"test","hash":{},"data":data}) : helper)));
},"useData":true});
this["MyApp"]["templates"]["empty-favs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"multileague-container\">\n    <div class=\"multi-empty\">"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"ui.multi",{"name":"t","hash":{},"data":data}))
    + "</div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["empty-tracker"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['ui/loading'],depth0,{"name":"ui/loading","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"3":function(depth0,helpers,partials,data) {
    return "			"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"ui.tracker-empty",{"name":"t","hash":{},"data":data}))
    + "\n";
},"5":function(depth0,helpers,partials,data) {
    return "			"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"ui.blankMatchTracker",{"name":"t","hash":{},"data":data}))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "<div class=\"tracker-empty\">\n	<div class=\"empty\">\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.state : depth0),"===",2,{"name":"ifCond","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.state : depth0),"===",1,{"name":"ifCond","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.state : depth0),"===",0,{"name":"ifCond","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["event-block"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['europeanview/common/group-1x1-price'],depth0,{"name":"europeanview/common/group-1x1-price","hash":{"team":(depth0 != null ? depth0.description : depth0),"outcome":depth0},"data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"event-markets "
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + " default-market-"
    + alias3((helpers.size || (depth0 && depth0.size) || alias1).call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"size","hash":{},"data":data}))
    + "\" data-style=\""
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"col-markets m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["event-container"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['live/match-tracker'],depth0,{"name":"live/match-tracker","hash":{"part":(depth0 != null ? depth0.part : depth0),"frameUrl":(depth0 != null ? depth0.frameUrl : depth0)},"data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"multileague-container\">\n	<div class=\"score-affix-container\"> \n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.hasMatchtracker : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		<div class=\"score-tracker-container\"></div>\n	</div>\n	<div class=\"event-container\"></div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["favs-container"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<div class=\"favleague-container\">\n    <div class=\"fav-empty\">"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"ui.addfavorites",{"name":"t","hash":{},"data":data}))
    + "</div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["layout"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "\n<div class=\"wrapper-main\">\n	<div class=\"live-panels panel-container\"> \n		<div class=\"panel-main\"></div>\n\n				\n\n\n\n\n		<div class=\"panel-right\">\n		    \n\n			<div class=\"match-tracker\">\n			    <div class=\"block-title\">\n			    	<div class=\"title\">\n			    		<span>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.matchTracker",{"name":"t","hash":{},"data":data}))
    + "</span>\n			    	</div>\n			        \n			    </div>\n			    <div class=\"wrap-content\"></div>\n			</div>\n\n			<div class=\"twitter-feed\">\n			    <div class=\"block-title\">\n				    <div class=\"title\">\n				        <span>Twitter Feed</span>\n				    </div>\n				</div>\n\n\n			    <div class=\"wrap-content\">\n			        <a class=\"twitter-timeline\" \n			        data-chrome=\"noheader nofooter\" \n					data-link-color=\"#FF9E3D\"\n					data-tweet-limit=\"10\"\n			        href=\"https://twitter.com/megasportsworld\" data-widget-id=\"598077501701693440\">Tweets by @megasportsworld</a>\n<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script>\n			    </div>\n			</div>\n\n			\n\n			<div class=\"sports-news\">\n			    <div class=\"block-title\">\n				    <div class=\"title\">\n				        <span>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.sportsNews",{"name":"t","hash":{},"data":data}))
    + "</span>\n				    </div>\n				</div>\n\n\n			    <div class=\"wrap-content\">\n			        <ul class=\"sports-news-container\">\n			        </ul>\n			    </div>\n			</div>\n\n		    <aside class=\"advertisement\"></aside>\n		</div>\n	</div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["league-block"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "hide";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression, alias2=this.lambda;

  return "\n<div class=\"league-block league "
    + alias1(((helper = (helper = helpers.visible || (depth0 != null ? depth0.visible : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"visible","hash":{},"data":data}) : helper)))
    + " p-"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.id : stack1), depth0))
    + " "
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.initHidden : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" data-path=\""
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n    <div class=\"league-title\">\n        <div class=\"wrapper\"> \n            <span class=\"title\">"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span>\n        </div>\n    </div>\n    <div class=\"events-container\">\n    </div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["match-tracker"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"matchtracker\">\n    <iframe class=\"matchtracker-frame "
    + alias3(((helper = (helper = helpers.part || (depth0 != null ? depth0.part : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"part","hash":{},"data":data}) : helper)))
    + "\" src=\""
    + ((stack1 = ((helper = (helper = helpers.frameUrl || (depth0 != null ? depth0.frameUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"frameUrl","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "#"
    + alias3(((helper = (helper = helpers.part || (depth0 != null ? depth0.part : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"part","hash":{},"data":data}) : helper)))
    + "\" name='matchtracker-"
    + alias3(((helper = (helper = helpers.part || (depth0 != null ? depth0.part : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"part","hash":{},"data":data}) : helper)))
    + "'></iframe>\n    <div class=\"matchtracker-states "
    + alias3(((helper = (helper = helpers.part || (depth0 != null ? depth0.part : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"part","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = this.invokePartial(partials['live/empty-tracker'],depth0,{"name":"live/empty-tracker","hash":{"state":2},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["multi-container"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"multileague-container\">\n    <div class=\"nav-container\">\n    	<div class=\"tabs-container\">\n    	</div>\n    </div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["multi-events-block"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "	<div class=\"event-container sports-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.code : stack1), depth0))
    + "\" data-id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n		<div class=\"event-header-container\">\n			<div class=\"event-block-title\">\n				<div class=\"sports-code\">\n					<i class=\"icon qicon-"
    + alias2((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.code : stack1),{"name":"toLowerCase","hash":{},"data":data}))
    + "\"></i>\n				</div>\n				<div class=\"game-status\">\n					<span class=\"live-time\" data-cache=\"extended\" data-time-m=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1)) != null ? stack1.m : stack1), depth0))
    + "\" data-time-s=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1)) != null ? stack1.s : stack1), depth0))
    + "\" data-reversed-time=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1)) != null ? stack1.reverse : stack1), depth0))
    + "\" data-status=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1)) != null ? stack1.status : stack1), depth0))
    + "\" data-id=\"l"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n						"
    + alias2((helpers.runningTime || (depth0 && depth0.runningTime) || alias3).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1)) != null ? stack1.reverse : stack1),((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.code : stack1),((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1),{"name":"runningTime","hash":{},"data":data}))
    + "\n					</span>\n				</div>\n				<div class=\"util-icon\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].hasMatchtracker : depths[1]),{"name":"if","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				    <button type=\"button\" class=\"util-btn multi-remove-btn\" ><i class=\"fa fa-remove\"></i></button>\n				</div>\n			</div>\n			<div class=\"event-block-score \">\n				<div class=\"team-container\">\n					<div class=\"team\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.opponentA : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.liveEvent : depth0)) != null ? stack1.time : stack1)) != null ? stack1.m : stack1), depth0))
    + "</div>\n						<div class=\"subscore\"> "
    + alias2((helpers.subScore || (depth0 && depth0.subScore) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1),"a",{"name":"subScore","hash":{},"data":data}))
    + " </div>\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.code : stack1),"===","TENN",{"name":"ifCond","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.program(7, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\n				</div>\n				<div class=\"team-container\">\n					<div class=\"team\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.opponentB : stack1), depth0))
    + "</div>\n						<div class=\"subscore\"> "
    + alias2((helpers.subScore || (depth0 && depth0.subScore) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1),"b",{"name":"subScore","hash":{},"data":data}))
    + " </div>\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.code : stack1),"===","TENN",{"name":"ifCond","hash":{},"fn":this.program(9, data, 0, blockParams, depths),"inverse":this.program(11, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</div>\n		<div class=\"event-markets-container\">\n"
    + ((stack1 = this.invokePartial(partials['live/row'],depth0,{"name":"live/row","hash":{"event":(depth0 != null ? depth0.event : depth0)},"data":data,"indent":"\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "		</div>\n	<div>\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "						<button type=\"button\" class=\"util-btn match-tracker-btn "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.currentMatchId : depth0),"===",((stack1 = ((stack1 = (depths[1] != null ? depths[1].event : depths[1])) != null ? stack1.liveEvent : stack1)) != null ? stack1.brMatchId : stack1),{"name":"ifCond","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" data-matchid=\""
    + this.escapeExpression(this.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.brMatchId : stack1), depth0))
    + "\"><i class=\"fa fa-area-chart\"></i></button>\n";
},"3":function(depth0,helpers,partials,data) {
    return "active";
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return "	                    <div class=\"score\">"
    + this.escapeExpression((helpers.tennisScore || (depth0 && depth0.tennisScore) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.score : stack1),"a",((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1),{"name":"tennisScore","hash":{},"data":data}))
    + "</div>\n";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return "	                    <div class=\"score\">"
    + this.escapeExpression(this.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.score : stack1)) != null ? stack1.a : stack1), depth0))
    + "</div>\n";
},"9":function(depth0,helpers,partials,data) {
    var stack1;

  return "	                    <div class=\"score\">"
    + this.escapeExpression((helpers.tennisScore || (depth0 && depth0.tennisScore) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.score : stack1),"b",((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1),{"name":"tennisScore","hash":{},"data":data}))
    + "</div>\n";
},"11":function(depth0,helpers,partials,data) {
    var stack1;

  return "	                    <div class=\"score\">"
    + this.escapeExpression(this.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.score : stack1)) != null ? stack1.b : stack1), depth0))
    + "</div>\n";
},"13":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "	<div class=\"event-container sports-"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.code : depth0),{"name":"if","hash":{},"fn":this.program(14, data, 0, blockParams, depths),"inverse":this.program(16, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\" data-id=\""
    + this.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n		<div class=\"event-header-container\">\n			<div class=\"event-block-title\">\n				<div class=\"title\"></div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.code : depth0),{"name":"if","hash":{},"fn":this.program(18, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				<div class=\"util-icon\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].hasMatchtracker : depths[1]),{"name":"if","hash":{},"fn":this.program(20, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				    <button type=\"button\" class=\"util-btn multi-remove-btn\" ><i class=\"fa fa-remove\"></i></button>\n				</div>\n			</div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.eventCache : depth0),{"name":"if","hash":{},"fn":this.program(22, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n		<div class=\"event-markets-container\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.customText : depth0),{"name":"if","hash":{},"fn":this.program(31, data, 0, blockParams, depths),"inverse":this.program(33, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n";
},"14":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"code","hash":{},"data":data}) : helper)));
},"16":function(depth0,helpers,partials,data) {
    return "blank";
},"18":function(depth0,helpers,partials,data) {
    return "				<div class=\"sports-code\">\n					<i class=\"icon qicon-"
    + this.escapeExpression((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.code : depth0),{"name":"toLowerCase","hash":{},"data":data}))
    + "\"></i>\n				</div>\n";
},"20":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "						<button type=\"button\" class=\"util-btn match-tracker-btn "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.currentMatchId : depth0),"===",((stack1 = (depths[1] != null ? depths[1].eventCache : depths[1])) != null ? stack1.brMatchId : stack1),{"name":"ifCond","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" data-matchid=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.eventCache : depth0)) != null ? stack1.brMatchId : stack1), depth0))
    + "\"><i class=\"fa fa-area-chart\"></i></button>\n";
},"22":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "				<div class=\"event-block-score \">\n					<div class=\"team-container\">\n						<div class=\"team\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.eventCache : depth0)) != null ? stack1.a : stack1), depth0))
    + "</div>\n							<div class=\"subscore\"> "
    + alias2((helpers.subScore || (depth0 && depth0.subScore) || alias3).call(depth0,(depth0 != null ? depth0.eventCache : depth0),"a",{"name":"subScore","hash":{},"data":data}))
    + " </div>\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.eventCache : depth0)) != null ? stack1.code : stack1),"===","TENN",{"name":"ifCond","hash":{},"fn":this.program(23, data, 0),"inverse":this.program(25, data, 0),"data":data})) != null ? stack1 : "")
    + "\n					</div>\n					<div class=\"team-container\">\n						<div class=\"team\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.eventCache : depth0)) != null ? stack1.b : stack1), depth0))
    + "</div>\n							<div class=\"subscore\"> "
    + alias2((helpers.subScore || (depth0 && depth0.subScore) || alias3).call(depth0,(depth0 != null ? depth0.eventCache : depth0),"b",{"name":"subScore","hash":{},"data":data}))
    + " </div>\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.eventCache : depth0)) != null ? stack1.code : stack1),"===","TENN",{"name":"ifCond","hash":{},"fn":this.program(27, data, 0),"inverse":this.program(29, data, 0),"data":data})) != null ? stack1 : "")
    + "					</div>\n				</div>\n\n";
},"23":function(depth0,helpers,partials,data) {
    var stack1;

  return "		                    <div class=\"score\">"
    + this.escapeExpression((helpers.tennisScore || (depth0 && depth0.tennisScore) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.eventCache : depth0)) != null ? stack1.score : stack1),"a",(depth0 != null ? depth0.eventCache : depth0),{"name":"tennisScore","hash":{},"data":data}))
    + "</div>\n";
},"25":function(depth0,helpers,partials,data) {
    var stack1;

  return "		                    <div class=\"score\">"
    + this.escapeExpression(this.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.eventCache : depth0)) != null ? stack1.score : stack1)) != null ? stack1.a : stack1), depth0))
    + "</div>\n";
},"27":function(depth0,helpers,partials,data) {
    var stack1;

  return "		                    <div class=\"score\">"
    + this.escapeExpression((helpers.tennisScore || (depth0 && depth0.tennisScore) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.eventCache : depth0)) != null ? stack1.score : stack1),"b",(depth0 != null ? depth0.eventCache : depth0),{"name":"tennisScore","hash":{},"data":data}))
    + "</div>\n";
},"29":function(depth0,helpers,partials,data) {
    var stack1;

  return "		                    <div class=\"score\">"
    + this.escapeExpression(this.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.eventCache : depth0)) != null ? stack1.score : stack1)) != null ? stack1.b : stack1), depth0))
    + "</div>\n";
},"31":function(depth0,helpers,partials,data) {
    return "			<div class=\"custom-text\">"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.customText : depth0),{"name":"t","hash":{},"data":data}))
    + "</div>\n";
},"33":function(depth0,helpers,partials,data) {
    return "			<div class=\"custom-text\">"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"ui.notavailable",{"name":"t","hash":{},"data":data}))
    + "</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"draggable\" draggable=\"true\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.event : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(13, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</div>\n\n\n";
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["multi-events-start"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"multileague-start\">\n    <p>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.startMultiTitle",{"name":"t","hash":{},"data":data}))
    + "</p>\n\n    <p>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.startMulti",{"name":"t","hash":{},"data":data}))
    + "</p>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["multisports-block"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "	<div class=\"multisports-tab\">\n		"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.hasFav : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.sportsCodes : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			<a class=\"tab-link multiview-tab-toggle hide\"><i class=\"fa fa-remove\"></i></a>\n	</div>\n";
},"2":function(depth0,helpers,partials,data) {
    return "<a class=\"tab-link multiview-tab-fav\" data-sportstab=\"fav-events\"><i class=\"fa fa-star\"></i> Fav</a>";
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.inArray || (depth0 && depth0.inArray) || helpers.helperMissing).call(depth0,(depths[1] != null ? depths[1].sportsBlock : depths[1]),depth0,{"name":"inArray","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "				<a class=\"tab-link multiview-tab-"
    + alias2(alias1(depth0, depth0))
    + "\" data-sportstab=\"multiview-"
    + alias2(alias1(depth0, depth0))
    + "\">\n					<i class=\"icon qicon-"
    + alias2((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias3).call(depth0,depth0,{"name":"toLowerCase","hash":{},"data":data}))
    + "\"></i>"
    + alias2((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias3).call(depth0,"sportCode",(helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias3).call(depth0,depth0,{"name":"toLowerCase","hash":{},"data":data}),{"name":"tPrefix","hash":{},"data":data}))
    + "\n					<div class=\"tab-index\"></div>\n				</a>\n";
},"7":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\n\n	<div class=\"multisports\">\n		"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.hasFav : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.sportsCodes : depth0),{"name":"each","hash":{},"fn":this.program(10, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n\n";
},"8":function(depth0,helpers,partials,data) {
    return "<div class=\"fav-events tab-container\"></div>";
},"10":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.inArray || (depth0 && depth0.inArray) || helpers.helperMissing).call(depth0,(depths[1] != null ? depths[1].sportsBlock : depths[1]),depth0,{"name":"inArray","hash":{},"fn":this.program(11, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"11":function(depth0,helpers,partials,data) {
    return "				<div class=\"multiview-"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + " tab-container\"></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"multisports-wrap\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.linksOnly : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(7, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});
this["MyApp"]["templates"]["multisports-items"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "	<div class=\"mutiview-ticket sports-"
    + alias2(alias1((depth0 != null ? depth0.code : depth0), depth0))
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" data-id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" data-code=\""
    + alias2(alias1((depth0 != null ? depth0.code : depth0), depth0))
    + "\" "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias3).call(depth0,(depths[1] != null ? depths[1].viewMode : depths[1]),"===","multi",{"name":"ifCond","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n		<div class=\"ticket-header\">\n			<div class=\"game-status\">\n				<span class=\"live-time\" data-cache=\""
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias3).call(depth0,(depths[1] != null ? depths[1].viewMode : depths[1]),"===","multi",{"name":"ifCond","hash":{},"fn":this.program(6, data, 0, blockParams, depths),"inverse":this.program(8, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\" data-time-m=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.liveEvent : depth0)) != null ? stack1.time : stack1)) != null ? stack1.m : stack1), depth0))
    + "\" data-time-s=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.liveEvent : depth0)) != null ? stack1.time : stack1)) != null ? stack1.s : stack1), depth0))
    + "\" data-reversed-time=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.liveEvent : depth0)) != null ? stack1.time : stack1)) != null ? stack1.reverse : stack1), depth0))
    + "\" data-status=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.liveEvent : depth0)) != null ? stack1.time : stack1)) != null ? stack1.status : stack1), depth0))
    + "\" data-id=\"l"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">"
    + alias2((helpers.runningTime || (depth0 && depth0.runningTime) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.liveEvent : depth0)) != null ? stack1.time : stack1),((stack1 = ((stack1 = (depth0 != null ? depth0.liveEvent : depth0)) != null ? stack1.time : stack1)) != null ? stack1.reverse : stack1),(depth0 != null ? depth0.code : depth0),(depth0 != null ? depth0.liveEvent : depth0),{"name":"runningTime","hash":{},"data":data}))
    + "</span>\n				\n			</div>\n			<div class=\"sports-code\">\n				"
    + alias2((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias3).call(depth0,"sportCode",(helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias3).call(depth0,(depth0 != null ? depth0.code : depth0),{"name":"toLowerCase","hash":{},"data":data}),{"name":"tPrefix","hash":{},"data":data}))
    + "\n			</div>\n		</div>\n		<div class=\"content\">\n			<div class=\"team-container\">\n				<div class=\"team\">"
    + alias2(alias1((depth0 != null ? depth0.opponentA : depth0), depth0))
    + "</div>\n\n				    <div class=\"subscore\"> "
    + alias2((helpers.subScore || (depth0 && depth0.subScore) || alias3).call(depth0,(depth0 != null ? depth0.liveEvent : depth0),"a",{"name":"subScore","hash":{},"data":data}))
    + " </div>\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias3).call(depth0,(depth0 != null ? depth0.code : depth0),"===","TENN",{"name":"ifCond","hash":{},"fn":this.program(10, data, 0, blockParams, depths),"inverse":this.program(12, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\n			</div>\n			<div class=\"team-container\">\n				<div class=\"team\">"
    + alias2(alias1((depth0 != null ? depth0.opponentB : depth0), depth0))
    + "</div>\n\n					<div class=\"subscore\"> "
    + alias2((helpers.subScore || (depth0 && depth0.subScore) || alias3).call(depth0,(depth0 != null ? depth0.liveEvent : depth0),"b",{"name":"subScore","hash":{},"data":data}))
    + " </div>\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias3).call(depth0,(depth0 != null ? depth0.code : depth0),"===","TENN",{"name":"ifCond","hash":{},"fn":this.program(14, data, 0, blockParams, depths),"inverse":this.program(16, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\n			</div>\n		</div>\n	</div>\n";
},"2":function(depth0,helpers,partials,data) {
    return "selected";
},"4":function(depth0,helpers,partials,data) {
    return "draggable=\"true\"";
},"6":function(depth0,helpers,partials,data) {
    return "live";
},"8":function(depth0,helpers,partials,data) {
    return "nonlive";
},"10":function(depth0,helpers,partials,data) {
    var stack1;

  return "	                <div class=\"score\">"
    + this.escapeExpression((helpers.tennisScore || (depth0 && depth0.tennisScore) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.liveEvent : depth0)) != null ? stack1.score : stack1),"a",(depth0 != null ? depth0.liveEvent : depth0),{"name":"tennisScore","hash":{},"data":data}))
    + "</div>\n";
},"12":function(depth0,helpers,partials,data) {
    var stack1;

  return "	                <div class=\"score\">"
    + this.escapeExpression(this.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.liveEvent : depth0)) != null ? stack1.score : stack1)) != null ? stack1.a : stack1), depth0))
    + "</div>\n";
},"14":function(depth0,helpers,partials,data) {
    var stack1;

  return "	                <div class=\"score\">"
    + this.escapeExpression((helpers.tennisScore || (depth0 && depth0.tennisScore) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.liveEvent : depth0)) != null ? stack1.score : stack1),"b",(depth0 != null ? depth0.liveEvent : depth0),{"name":"tennisScore","hash":{},"data":data}))
    + "</div>\n";
},"16":function(depth0,helpers,partials,data) {
    var stack1;

  return "	                <div class=\"score\">"
    + this.escapeExpression(this.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.liveEvent : depth0)) != null ? stack1.score : stack1)) != null ? stack1.b : stack1), depth0))
    + "</div>\n";
},"18":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.showEmpty : depth0),{"name":"if","hash":{},"fn":this.program(19, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.favorites : depth0),{"name":"if","hash":{},"fn":this.program(21, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"19":function(depth0,helpers,partials,data) {
    return "	<div class=\"mutiview-ticket empty hide\">\n		"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"ui.emptyTicket",{"name":"t","hash":{},"data":data}))
    + "\n	</div>\n";
},"21":function(depth0,helpers,partials,data) {
    return "		<div class=\"mutiview-ticket empty hide\">\n			"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"ui.emptyFavTicket",{"name":"t","hash":{},"data":data}))
    + "\n		</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.sportsItems : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.viewMode : depth0),"===","multi",{"name":"ifCond","hash":{},"fn":this.program(18, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
this["MyApp"]["templates"]["row"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "live-events-view";
},"3":function(depth0,helpers,partials,data) {
    return "event-block";
},"5":function(depth0,helpers,partials,data) {
    return "\n";
},"7":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.foreach || (depth0 && depth0.foreach) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.children : stack1),{"name":"foreach","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"8":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.escapeExpression, alias2=this.lambda;

  return "    <div class=\"european-row "
    + alias1((helpers.showFlags || (depth0 && depth0.showFlags) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.flags : stack1),{"name":"showFlags","hash":{},"data":data}))
    + " market-list\" data-period=\""
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.period : stack1), depth0))
    + "\" data-marketGroup=\""
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.marketTypeGroup : stack1), depth0))
    + "\" data-marketId=\""
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.id : stack1), depth0))
    + "\">\n        <div class=\"market-description\">\n            "
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.description : stack1), depth0))
    + " - "
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.period : stack1), depth0))
    + "\n        </div>\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1),{"name":"if","hash":{},"fn":this.program(9, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"9":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['live/event-block'],depth0,{"name":"live/event-block","hash":{"liveInPlay":(depths[2] != null ? depths[2].liveInPlay : depths[2]),"liveMode":(depths[2] != null ? depths[2].liveMode : depths[2]),"flags":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.flags : stack1),"eventID":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.id : stack1),"count":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.extendedCount : stack1),"id":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.id : stack1),"first":(depth0 != null ? depth0.$first : depth0),"children":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.children : stack1),"style":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.style : stack1)},"data":data,"indent":"                ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\" event e-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.id : stack1), depth0))
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.liveInPlay : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\" data-eventid=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1)) != null ? stack1.status : stack1),"===",54,{"name":"ifCond","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.program(7, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["score-board"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "<div class=\"br-scoreboard\">\n    <div class=\"br-title-container\">\n        <div class=\"br-league-path\"><i class=\"icon qicon-"
    + alias2((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.code : stack1),{"name":"toLowerCase","hash":{},"data":data}))
    + "\"></i> "
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.pdesc : stack1), depth0))
    + "</div>\n        <!--div class=\"live-extra\">\n            <i class=\"fa fa-bar-chart\"></i>\n            <i class=\"fa fa-desktop\"></i>\n            <i class=\"fa fa-rss\"></i>\n        </div-->\n    </div>\n    <div class=\"br-scoreboard-container\">\n        <div class=\"br-opponent\">\n            <div class=\"br-opponent-name\" title=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.opponentA : stack1), depth0))
    + "\">\n                "
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.opponentA : stack1), depth0))
    + "\n            </div>\n        </div>\n        <div class=\"br-score-time-container\">\n            <div class=\"br-live-period\">"
    + alias2((helpers.getLivePeriod || (depth0 && depth0.getLivePeriod) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.code : stack1),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1)) != null ? stack1.p : stack1),{"name":"getLivePeriod","hash":{},"data":data}))
    + "</div>\n            <div class=\"br-scoreboard\">\n                <div class=\"br-score-container\">\n                    <div class=\"br-scores"
    + alias2((helpers.updateScores || (depth0 && depth0.updateScores) || alias1).call(depth0,(depth0 != null ? depth0.score : depth0),{"name":"updateScores","hash":{},"data":data}))
    + "\">\n                        <span class=\"score-a\">"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.score : depth0)) != null ? stack1.score : stack1)) != null ? stack1.a : stack1), depth0))
    + "</span>\n                    </div>\n                    <div class=\"br-scores\">\n                        <span>:</span>\n                    </div>\n                    "
    + alias2((helpers.consoleLog || (depth0 && depth0.consoleLog) || alias1).call(depth0,(depth0 != null ? depth0.match : depth0),{"name":"consoleLog","hash":{},"data":data}))
    + "\n                    <div class=\"br-scores"
    + alias2((helpers.updateScores || (depth0 && depth0.updateScores) || alias1).call(depth0,(depth0 != null ? depth0.score : depth0),{"name":"updateScores","hash":{},"data":data}))
    + "\">\n                        <span class=\"score-b\">"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.score : depth0)) != null ? stack1.score : stack1)) != null ? stack1.b : stack1), depth0))
    + "</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"br-live-time\" data-time-m=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1)) != null ? stack1.m : stack1), depth0))
    + "\" data-time-s=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1)) != null ? stack1.s : stack1), depth0))
    + "\" data-reversed-time=\""
    + alias2(((helper = (helper = helpers.reversedTime || (depth0 != null ? depth0.reversedTime : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"reversedTime","hash":{},"data":data}) : helper)))
    + "\" data-status=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1)) != null ? stack1.status : stack1), depth0))
    + "\"  data-id=\"l"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" data-timeonly=\"true\">"
    + alias2((helpers.runningTime || (depth0 && depth0.runningTime) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1),(depth0 != null ? depth0.reversedTime : depth0),"",((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1),{"name":"runningTime","hash":{},"data":data}))
    + "\n            </div>\n        </div>\n        <div class=\"br-opponent\">\n            <div class=\"br-opponent-name\" title=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.opponentB : stack1), depth0))
    + "\">\n                "
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.opponentB : stack1), depth0))
    + "\n            </div>\n        </div>\n    </div>\n</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.hasMatchtracker : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"br-messages "
    + this.escapeExpression((helpers.updateScores || (depth0 && depth0.updateScores) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.score : depth0),{"name":"updateScores","hash":{},"data":data}))
    + "\">\n"
    + ((stack1 = this.invokePartial(partials['live/score-messages'],depth0,{"name":"live/score-messages","hash":{"event":(depth0 != null ? depth0.event : depth0),"messagesOpen":(depth0 != null ? depth0.messagesOpen : depth0)},"data":data,"indent":"   ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["score-messages"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return " open";
},"3":function(depth0,helpers,partials,data) {
    return " class=\"open\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "<span class=\"msg-toggle"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.messagesOpen : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\"><i class=\"fa fa-chevron-right\"></i></span>\n<ul"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1)) != null ? stack1.status : stack1),"===",5,{"name":"ifCond","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.messagesOpen : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n    "
    + this.escapeExpression((helpers.getLiveMessages || (depth0 && depth0.getLiveMessages) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.msgs : stack1),(depth0 != null ? depth0.reversedTime : depth0),{"name":"getLiveMessages","hash":{},"data":data}))
    + "\n</ul>";
},"useData":true});
this["MyApp"]["templates"]["score-sets"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "<div class=\"br-scoreboard\">\n    <div class=\"br-title-container\">\n        <div class=\"br-league-path\"><i class=\"icon qicon-"
    + alias2((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.code : stack1),{"name":"toLowerCase","hash":{},"data":data}))
    + "\"></i> "
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.pdesc : stack1), depth0))
    + "</div>\n    </div>\n    <div class=\"br-scoreboard-container "
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.code : stack1), depth0))
    + " time-"
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1)) != null ? stack1.status : stack1), depth0))
    + "\">\n        <div class=\"br-opponents opponent-a\">\n            <div class=\"br-opponent-name\">"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.opponentA : stack1), depth0))
    + "</div>\n            <div class=\"br-opponent-score\">\n"
    + ((stack1 = (helpers.times || (depth0 && depth0.times) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.max : stack1),{"name":"times","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                <div class=\"br-score final "
    + alias2((helpers.updateMatchScores || (depth0 && depth0.updateMatchScores) || alias1).call(depth0,(depth0 != null ? depth0.match : depth0),{"name":"updateMatchScores","hash":{},"data":data}))
    + " "
    + alias2((helpers.checkScoreState || (depth0 && depth0.checkScoreState) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.match : stack1),0,"a","match",{"name":"checkScoreState","hash":{},"data":data}))
    + "\">\n                    <span class=\"score-a\">\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.code : stack1),"===","TENN",{"name":"ifCond","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.program(6, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\n                    </span>\n                </div>\n            </div>\n        </div>\n        <div class=\"br-separator "
    + alias2((helpers.oppSeparator || (depth0 && depth0.oppSeparator) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.code : stack1),((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.max : stack1),{"name":"oppSeparator","hash":{},"data":data}))
    + "\">\n            <div class=\"br-time-container\">\n                <span>"
    + alias2((helpers.getLivePeriod || (depth0 && depth0.getLivePeriod) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.code : stack1),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.time : stack1)) != null ? stack1.p : stack1),{"name":"getLivePeriod","hash":{},"data":data}))
    + "</span>\n            </div>\n        </div>\n        <div class=\"br-opponents opponent-b\">\n            <div class=\"br-opponent-name\">"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.opponentB : stack1), depth0))
    + "</div>\n            <div class=\"br-opponent-score\">\n"
    + ((stack1 = (helpers.times || (depth0 && depth0.times) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.max : stack1),{"name":"times","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                <div class=\"br-score final "
    + alias2((helpers.updateMatchScores || (depth0 && depth0.updateMatchScores) || alias1).call(depth0,(depth0 != null ? depth0.match : depth0),{"name":"updateMatchScores","hash":{},"data":data}))
    + " "
    + alias2((helpers.checkScoreState || (depth0 && depth0.checkScoreState) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.match : stack1),0,"b","match",{"name":"checkScoreState","hash":{},"data":data}))
    + "\">\n                    <span class=\"score-b\">\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.code : stack1),"===","TENN",{"name":"ifCond","hash":{},"fn":this.program(10, data, 0, blockParams, depths),"inverse":this.program(12, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\n                    </span>\n                </div>\n            </div>\n        </div>\n        <div class=\"score-separator\"></div>\n    </div>\n</div>\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "                    <div class=\"br-score "
    + alias2((helpers.updateSets || (depth0 && depth0.updateSets) || alias1).call(depth0,(depths[1] != null ? depths[1].sets : depths[1]),depth0,{"name":"updateSets","hash":{},"data":data}))
    + " "
    + alias2((helpers.checkScoreState || (depth0 && depth0.checkScoreState) || alias1).call(depth0,(depths[1] != null ? depths[1].sets : depths[1]),depth0,"a","set",{"name":"checkScoreState","hash":{},"data":data}))
    + "\"><span class=\"score-a\">"
    + alias2((helpers.showScoreOnSet || (depth0 && depth0.showScoreOnSet) || alias1).call(depth0,(depths[1] != null ? depths[1].sets : depths[1]),depth0,"a","-",{"name":"showScoreOnSet","hash":{},"data":data}))
    + "</span></div>\n";
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "                            "
    + this.escapeExpression((helpers.tennisScore || (depth0 && depth0.tennisScore) || helpers.helperMissing).call(depth0,((stack1 = (depths[1] != null ? depths[1].score : depths[1])) != null ? stack1.score : stack1),"a",((stack1 = (depths[1] != null ? depths[1].event : depths[1])) != null ? stack1.liveEvent : stack1),{"name":"tennisScore","hash":{},"data":data}))
    + "\n";
},"6":function(depth0,helpers,partials,data) {
    var stack1;

  return "                            "
    + this.escapeExpression((helpers.showMatchScore || (depth0 && depth0.showMatchScore) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.match : stack1),"a",{"name":"showMatchScore","hash":{},"data":data}))
    + "\n";
},"8":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "                    <div class=\"br-score "
    + alias2((helpers.updateSets || (depth0 && depth0.updateSets) || alias1).call(depth0,(depths[1] != null ? depths[1].sets : depths[1]),depth0,{"name":"updateSets","hash":{},"data":data}))
    + " "
    + alias2((helpers.checkScoreState || (depth0 && depth0.checkScoreState) || alias1).call(depth0,(depths[1] != null ? depths[1].sets : depths[1]),depth0,"b","set",{"name":"checkScoreState","hash":{},"data":data}))
    + "\"><span class=\"score-b\">"
    + alias2((helpers.showScoreOnSet || (depth0 && depth0.showScoreOnSet) || alias1).call(depth0,(depths[1] != null ? depths[1].sets : depths[1]),depth0,"b","-",{"name":"showScoreOnSet","hash":{},"data":data}))
    + "</span></div>\n";
},"10":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "                            "
    + this.escapeExpression((helpers.tennisScore || (depth0 && depth0.tennisScore) || helpers.helperMissing).call(depth0,((stack1 = (depths[1] != null ? depths[1].score : depths[1])) != null ? stack1.score : stack1),"b",((stack1 = (depths[1] != null ? depths[1].event : depths[1])) != null ? stack1.liveEvent : stack1),{"name":"tennisScore","hash":{},"data":data}))
    + "\n";
},"12":function(depth0,helpers,partials,data) {
    var stack1;

  return "                            "
    + this.escapeExpression((helpers.showMatchScore || (depth0 && depth0.showMatchScore) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.liveEvent : stack1)) != null ? stack1.match : stack1),"b",{"name":"showMatchScore","hash":{},"data":data}))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.hasMatchtracker : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"br-messages "
    + this.escapeExpression((helpers.updateScores || (depth0 && depth0.updateScores) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.score : depth0),{"name":"updateScores","hash":{},"data":data}))
    + "\">\n"
    + ((stack1 = this.invokePartial(partials['live/score-messages'],depth0,{"name":"live/score-messages","hash":{"event":(depth0 != null ? depth0.event : depth0),"messagesOpen":(depth0 != null ? depth0.messagesOpen : depth0)},"data":data,"indent":"   ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["section-block"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"section-block "
    + alias2(((helper = (helper = helpers.region || (depth0 != null ? depth0.region : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"region","hash":{},"data":data}) : helper)))
    + "-section\">\n    <div class=\"section-nav\">\n        <ul class=\"section\">\n            <li class=\""
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.displayMode : depth0),"===","all",{"name":"ifCond","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                <a href=\"#\" class=\"live-view\" data-viewmode=\"overview\" >\n                    "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"sports.overview",{"name":"t","hash":{},"data":data}))
    + "\n                </a>\n            </li>\n            <li class=\""
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.displayMode : depth0),"===","multi",{"name":"ifCond","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                <a href=\"#\" class=\"live-view\" data-viewmode=\"multiview\" >\n                    "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"sports.multiview",{"name":"t","hash":{},"data":data}))
    + "\n                </a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"section-util\">\n        <ul class=\"section\">\n            \n            <li class=\"\">\n                <div class=\"util-icon\">\n                    <button type=\"button\" class=\"btn btn-default btn-livealert\"><i class=\"fa "
    + ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].getLiveAlert : depths[1]),{"name":"if","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.program(6, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\"></i></button>\n                </div>\n            </li>\n            <li class=\"\">\n                <div class=\"timer-block\">\n                    <span class=\"icon-refresh\"><i class=\"fa fa-refresh\"></i></span>\n                    <span class=\"timer\">00</span>\n                </div>\n            </li>\n            \n        </ul>\n    </div>\n</div>\n";
},"2":function(depth0,helpers,partials,data) {
    return "active";
},"4":function(depth0,helpers,partials,data) {
    return "fa-volume-up";
},"6":function(depth0,helpers,partials,data) {
    return "fa-volume-off";
},"8":function(depth0,helpers,partials,data) {
    return "                "
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"ui.myFavorites",{"name":"t","hash":{},"data":data}))
    + "\n";
},"10":function(depth0,helpers,partials,data) {
    return "\n                "
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"ui.live",{"name":"t","hash":{},"data":data}))
    + "\n";
},"12":function(depth0,helpers,partials,data) {
    return "            <div class=\"tabs\">\n                <i class=\"fa fa-spin fa-spinner\"></i>\n            </div>\n";
},"14":function(depth0,helpers,partials,data) {
    return "fav-separate";
},"16":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['live/multi-container'],depth0,{"name":"live/multi-container","data":data,"indent":"                ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"18":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['live/favs-container'],depth0,{"name":"live/favs-container","data":data,"indent":"                ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"20":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "    <div class=\"float-handle\"></div>\n    <div class=\"section-title block-title float-title\">\n        <div class=\"title\">\n            <span>\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.displayMode : depth0),"===","event",{"name":"ifCond","hash":{},"fn":this.program(21, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                "
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.live",{"name":"t","hash":{},"data":data}))
    + "\n            </span>\n        </div>\n"
    + ((stack1 = (helpers.isEqual || (depth0 && depth0.isEqual) || alias1).call(depth0,(depth0 != null ? depth0.displayMode : depth0),"event",{"name":"isEqual","hash":{},"fn":this.program(23, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"21":function(depth0,helpers,partials,data) {
    return "                    <a class=\"live-return-btn\" title=\"Go Back\"><i class=\"fa fa-chevron-circle-left\"></i></a>\n";
},"23":function(depth0,helpers,partials,data) {
    return "            <div class=\"option-block\">\n                <div class=\"btn-group\">\n                    <button type=\"button\" class=\"btn-league market-modal\" data-target=\"#league-modal\" aria-expanded=\"false\" disabled >\n                        "
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"ui.selectMarket",{"name":"t","hash":{},"data":data}))
    + " <span class=\"caret\"></span>\n                    </button>                \n                </div>\n            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.liveMode : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n<div class=\"section-block live-display-"
    + alias3(((helper = (helper = helpers.displayMode || (depth0 != null ? depth0.displayMode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"displayMode","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.sectionCode || (depth0 != null ? depth0.sectionCode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sectionCode","hash":{},"data":data}) : helper)))
    + "  live-inplay "
    + alias3(((helper = (helper = helpers.region || (depth0 != null ? depth0.region : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"region","hash":{},"data":data}) : helper)))
    + "-section\">\n    <!-- start: title -->\n    <div class=\"section-title block-title\">\n        <div class=\"title\">\n            <span>\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.displayMode : depth0),"===","all",{"name":"ifCond","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.program(10, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "            </span>\n        </div>\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.displayMode : depth0),"!==","all",{"name":"ifCond","hash":{},"fn":this.program(12, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n\n    </div>\n    <!-- end: title -->\n\n\n        <div class=\"favs-container "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.displayMode : depth0),"!==","multi",{"name":"ifCond","hash":{},"fn":this.program(14, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.displayMode : depth0),"!==","all",{"name":"ifCond","hash":{},"fn":this.program(16, data, 0, blockParams, depths),"inverse":this.program(18, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "        </div>\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.displayMode : depth0),"!==","multi",{"name":"ifCond","hash":{},"fn":this.program(20, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"section-container "
    + alias3(((helper = (helper = helpers.sportCode || (depth0 != null ? depth0.sportCode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sportCode","hash":{},"data":data}) : helper)))
    + "\">\n        \n        <div class=\"league-container\">\n"
    + ((stack1 = this.invokePartial(partials['ui/loading'],depth0,{"name":"ui/loading","data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>";
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["basketball-block"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "            <span>"
    + this.escapeExpression(((helper = (helper = helpers.season || (depth0 != null ? depth0.season : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"season","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<div class=\"event-container "
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + " default-market-"
    + alias3((helpers.size || (depth0 && depth0.size) || alias1).call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"size","hash":{},"data":data}))
    + "\" data-style=\""
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + "\" data-brmatchid=\""
    + alias3(alias4((depth0 != null ? depth0.brMatchId : depth0), depth0))
    + "\">\n    <div class=\" m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + " \">\n        \n        \n        <div class=\"opponent-container\">\n            <span>"
    + alias3(alias4((depth0 != null ? depth0.opponentA : depth0), depth0))
    + "</span> - <span>"
    + alias3(alias4((depth0 != null ? depth0.opponentB : depth0), depth0))
    + "</span>\n        </div>\n        \n"
    + ((stack1 = helpers.each.call(depth0,(helpers.reverseArray || (depth0 && depth0.reverseArray) || alias1).call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"reverseArray","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        \n    </div>\n</div>\n";
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\n\n                \n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                \n";
},"5":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isEqual || (depth0 && depth0.isEqual) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.marketTypeGroup : depth0),"MONEY_LINE",{"name":"isEqual","hash":{},"fn":this.program(6, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"6":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "                    <div class=\"market-container default-outcome-"
    + alias2((helpers.size || (depth0 && depth0.size) || alias1).call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"size","hash":{},"data":data}))
    + "\">\n                        <div class=\"european-row market-list "
    + alias2((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias1).call(depth0,(depth0 != null ? depth0.description : depth0),{"name":"toLowerCase","hash":{},"data":data}))
    + "\" >\n                            <div class=\"market-description\">\n                                "
    + alias2(alias3((depth0 != null ? depth0.description : depth0), depth0))
    + " - "
    + alias2(alias3((depth0 != null ? depth0.period : depth0), depth0))
    + "\n                            </div>\n                            \n"
    + ((stack1 = this.invokePartial(partials['virtual/event-block'],depth0,{"name":"virtual/event-block","hash":{"flags":(depth0 != null ? depth0.flags : depth0),"eventID":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.id : stack1),"id":(depth0 != null ? depth0.id : depth0),"first":(depth0 != null ? depth0.$first : depth0),"children":(depth0 != null ? depth0.children : depth0),"style":(depth0 != null ? depth0.style : depth0)},"data":data,"indent":"                                ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "                            \n                        </div>\n                    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\n<div class=\"market-headers\" >\n    <div class=\"league-info\">\n"
    + ((stack1 = (helpers.parseTitle || (depth0 && depth0.parseTitle) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.description : stack1),{"name":"parseTitle","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"market-header default-outcome-2\">\n        Match Winner - Match\n        <div class=\"market-label default-market-2\">\n            <span>1</span>\n            <span>2</span>\n        </div>\n    </div>    \n    <div class=\"market-header default-outcome-3\">\n        Win/Draw/Win - First Half\n        <div class=\"market-label default-market-3\"> \n            <span>1</span>\n            <span>x</span>\n            <span>2</span>\n        </div>\n    </div>\n</div>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.children : stack1),{"name":"each","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["dogs-markets"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.escapeExpression;

  return "	<div class=\"european-row market-list "
    + alias1((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.description : stack1),{"name":"toLowerCase","hash":{},"data":data}))
    + "\" >\n		<div class=\"market-description\">\n            "
    + alias1(this.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.description : stack1), depth0))
    + "\n        </div>\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.escapeExpression, alias2=helpers.helperMissing;

  return "\n<div class=\"event-markets\" >\n    <div class=\" m-"
    + alias1(this.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.id : stack1), depth0))
    + " "
    + alias1((helpers.showFlags || (depth0 && depth0.showFlags) || alias2).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.childrenflags : stack1),{"name":"showFlags","hash":{},"data":data}))
    + " default-market-"
    + alias1((helpers.size || (depth0 && depth0.size) || alias2).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.children : stack1),{"name":"size","hash":{},"data":data}))
    + "\">\n"
    + ((stack1 = helpers.each.call(depth0,(helpers.sortByProps || (depth0 && depth0.sortByProps) || alias2).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.children : stack1),"pos",{"name":"sortByProps","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>\n\n\n";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isEqual || (depth0 && depth0.isEqual) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = (depths[2] != null ? depths[2].children : depths[2])) != null ? stack1.market : stack1)) != null ? stack1.description : stack1),"Winner",{"name":"isEqual","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.program(6, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                \n";
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['europeanview/common/group-1x1-price'],depth0,{"name":"europeanview/common/group-1x1-price","hash":{"imagePath":(helpers.getDogsBib || (depth0 && depth0.getDogsBib) || helpers.helperMissing).call(depth0,(depths[4] != null ? depths[4].clientId : depths[4]),(depth0 != null ? depth0.pos : depth0),{"name":"getDogsBib","hash":{},"data":data}),"team":(depth0 != null ? depth0.description : depth0),"outcome":depth0},"data":data,"indent":"            \t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n";
},"6":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['europeanview/common/group-1x1-price'],depth0,{"name":"europeanview/common/group-1x1-price","hash":{"team":(depth0 != null ? depth0.description : depth0),"outcome":depth0},"data":data,"indent":"            \t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"default-events-"
    + alias2((helpers.size || (depth0 && depth0.size) || alias1).call(depth0,(depth0 != null ? depth0.markets : depth0),{"name":"size","hash":{},"data":data}))
    + "\">\n"
    + alias2((helpers.consoleLog || (depth0 && depth0.consoleLog) || alias1).call(depth0,(depth0 != null ? depth0.markets : depth0),{"name":"consoleLog","hash":{},"data":data}))
    + "\n"
    + ((stack1 = helpers.each.call(depth0,(helpers.sortByProps || (depth0 && depth0.sortByProps) || alias1).call(depth0,(depth0 != null ? depth0.markets : depth0),"pos",{"name":"sortByProps","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n";
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["extra-markets"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.escapeExpression, alias2=this.lambda;

  return "	<div class=\"european-row market-list "
    + alias1((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.description : stack1),{"name":"toLowerCase","hash":{},"data":data}))
    + "\" >\n		<div class=\"market-description\">\n            "
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.description : stack1), depth0))
    + " - "
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.period : stack1), depth0))
    + "\n        </div>\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['virtual/event-block'],depth0,{"name":"virtual/event-block","hash":{"liveMode":(depths[2] != null ? depths[2].liveMode : depths[2]),"flags":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.flags : stack1),"eventID":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.id : stack1),"count":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.extendedCount : stack1),"id":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.id : stack1),"first":(depth0 != null ? depth0.$first : depth0),"children":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.children : stack1),"style":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.style : stack1)},"data":data,"indent":"                ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.escapeExpression, alias2=helpers.helperMissing;

  return "<div class=\"event-block event e-"
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n"
    + alias1((helpers.consoleLog || (depth0 && depth0.consoleLog) || alias2).call(depth0,(depth0 != null ? depth0.markets : depth0),{"name":"consoleLog","hash":{},"data":data}))
    + "\n"
    + ((stack1 = helpers.each.call(depth0,(helpers.sortByProps || (depth0 && depth0.sortByProps) || alias2).call(depth0,(depth0 != null ? depth0.markets : depth0),"sortedPos",{"name":"sortByProps","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n";
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["featured-markets"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=this.escapeExpression;

  return "                <span class=\"title\">\n                    <span>"
    + alias1(this.lambda(((stack1 = (depths[1] != null ? depths[1].eventData : depths[1])) != null ? stack1.description : stack1), depth0))
    + "</span>\n                    <span class=\"season-title\">"
    + alias1(((helper = (helper = helpers.season || (depth0 != null ? depth0.season : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"season","hash":{},"data":data}) : helper)))
    + "</span>\n                </span>\n";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.escapeExpression, alias2=this.lambda;

  return "			<div class=\"european-row market-list "
    + alias1((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.description : stack1),{"name":"toLowerCase","hash":{},"data":data}))
    + "\" >\n				<div class=\"market-description\">\n		            "
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.description : stack1), depth0))
    + " - "
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.period : stack1), depth0))
    + " \n		        </div>\n\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1),{"name":"if","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n";
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['virtual/event-block'],depth0,{"name":"virtual/event-block","hash":{"columns":(depths[2] != null ? depths[2].columns : depths[2]),"liveMode":(depths[2] != null ? depths[2].liveMode : depths[2]),"flags":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.flags : stack1),"eventID":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.id : stack1),"count":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.extendedCount : stack1),"id":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.id : stack1),"first":(depth0 != null ? depth0.$first : depth0),"children":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.children : stack1),"style":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.style : stack1)},"data":data,"indent":"\t\t                ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "<div class=\"league-block league p-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.eventData : depth0)) != null ? stack1.id : stack1), depth0))
    + " \" data-path=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.eventData : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n    <div class=\"league-title\">\n        <div class=\"wrapper\">\n"
    + ((stack1 = (helpers.parseTitle || (depth0 && depth0.parseTitle) || alias3).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.eventData : depth0)) != null ? stack1.path : stack1)) != null ? stack1.League : stack1),{"name":"parseTitle","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n    <div class=\"events-container\">\n		<div class=\"event-block event e-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n\n"
    + ((stack1 = helpers.each.call(depth0,(helpers.sortByProps || (depth0 && depth0.sortByProps) || alias3).call(depth0,(depth0 != null ? depth0.markets : depth0),"sortedPos",{"name":"sortByProps","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n    </div>\n</div>\n\n\n\n";
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["football-block"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "            <span>"
    + this.escapeExpression(((helper = (helper = helpers.season || (depth0 != null ? depth0.season : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"season","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<div class=\"event-container "
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + " default-market-"
    + alias3((helpers.size || (depth0 && depth0.size) || alias1).call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"size","hash":{},"data":data}))
    + "\" data-style=\""
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + "\" data-brmatchid=\""
    + alias3(alias4((depth0 != null ? depth0.brMatchId : depth0), depth0))
    + "\">\n    <div class=\" m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + " \">\n        \n        \n        <div class=\"opponent-container\">\n            <span>"
    + alias3(alias4((depth0 != null ? depth0.opponentA : depth0), depth0))
    + "</span><br>\n            <span>"
    + alias3(alias4((depth0 != null ? depth0.opponentB : depth0), depth0))
    + "</span>\n        </div>\n        \n\n        \n            \n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        \n    </div>\n</div>\n";
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "                \n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                \n";
},"5":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.isEqual || (depth0 && depth0.isEqual) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.style : depth0),"WIN_DRAW_WIN",{"name":"isEqual","hash":{},"fn":this.program(6, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"6":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.escapeExpression, alias2=this.lambda;

  return "                    <div class=\"market-container\">\n                        <div class=\"european-row market-list "
    + alias1((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.description : depth0),{"name":"toLowerCase","hash":{},"data":data}))
    + "\" >\n                            <div class=\"market-description\">\n                                "
    + alias1(alias2((depth0 != null ? depth0.description : depth0), depth0))
    + " - "
    + alias1(alias2((depth0 != null ? depth0.period : depth0), depth0))
    + "\n                            </div>\n                            \n"
    + ((stack1 = this.invokePartial(partials['virtual/event-block'],depth0,{"name":"virtual/event-block","hash":{"flags":(depth0 != null ? depth0.flags : depth0),"eventID":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.id : stack1),"id":(depth0 != null ? depth0.id : depth0),"first":(depth0 != null ? depth0.$first : depth0),"children":(depth0 != null ? depth0.children : depth0),"style":(depth0 != null ? depth0.style : depth0)},"data":data,"indent":"                                ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "                            \n                        </div>\n                    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\n<div class=\"market-headers\" >\n    <div class=\"league-info\">\n"
    + ((stack1 = (helpers.parseTitle || (depth0 && depth0.parseTitle) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.description : stack1),{"name":"parseTitle","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"market-header\">\n        Win/Draw/Win - 90 Mins\n        <div class=\"market-label\">\n            <span>1</span>\n            <span>x</span>\n            <span>2</span>\n        </div>\n    </div>\n    <div class=\"market-header\">\n        Halftime - 3way - First Half\n        <div class=\"market-label\">\n            <span>1</span>\n            <span>x</span>\n            <span>2</span>\n        </div>\n    </div>\n\n</div>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.children : stack1),{"name":"each","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["horse-markets"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "	<div class=\"european-row market-list "
    + alias2((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.description : stack1),{"name":"toLowerCase","hash":{},"data":data}))
    + "\" >\n		<div class=\"market-description\">\n            "
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.description : stack1), depth0))
    + "\n        </div>\n\n            <div class=\"event-markets\" > \n                <div class=\" m-"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.id : stack1), depth0))
    + " "
    + alias2((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.childrenflags : stack1),{"name":"showFlags","hash":{},"data":data}))
    + " default-market-"
    + alias2((helpers.size || (depth0 && depth0.size) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.children : stack1),{"name":"size","hash":{},"data":data}))
    + "\">\n"
    + ((stack1 = (helpers.isEqual || (depth0 && depth0.isEqual) || alias1).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.description : stack1),"Straight Forecast",{"name":"isEqual","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.program(6, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                        \n                </div>\n            </div>\n	</div>\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=helpers.helperMissing;

  return ((stack1 = helpers.each.call(depth0,(helpers.toColumns || (depth0 && depth0.toColumns) || alias1).call(depth0,(helpers.sortByProps || (depth0 && depth0.sortByProps) || alias1).call(depth0,((stack1 = ((stack1 = (depths[1] != null ? depths[1].children : depths[1])) != null ? stack1.market : stack1)) != null ? stack1.children : stack1),"pos",{"name":"sortByProps","hash":{},"data":data}),2,{"name":"toColumns","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return "                            <div class=\"col-group\"> \n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                            </div>\n";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['europeanview/common/group-1x1-price'],depth0,{"name":"europeanview/common/group-1x1-price","hash":{"team":(depth0 != null ? depth0.description : depth0),"outcome":depth0},"data":data,"indent":"                                    ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"6":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(helpers.sortByProps || (depth0 && depth0.sortByProps) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = (depths[1] != null ? depths[1].children : depths[1])) != null ? stack1.market : stack1)) != null ? stack1.children : stack1),"pos",{"name":"sortByProps","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['europeanview/common/group-1x1-price'],depth0,{"name":"europeanview/common/group-1x1-price","hash":{"team":(depth0 != null ? depth0.description : depth0),"outcome":depth0},"data":data,"indent":"                                ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"\">\n"
    + ((stack1 = helpers.each.call(depth0,(helpers.sortByProps || (depth0 && depth0.sortByProps) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.markets : depth0),"pos",{"name":"sortByProps","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n";
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["section-block"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n\n<div class=\"section-block "
    + alias3(((helper = (helper = helpers.sectionCode || (depth0 != null ? depth0.sectionCode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sectionCode","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"section-container "
    + alias3(((helper = (helper = helpers.sportCode || (depth0 != null ? depth0.sportCode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sportCode","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\""
    + alias3(((helper = (helper = helpers.region || (depth0 != null ? depth0.region : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"region","hash":{},"data":data}) : helper)))
    + "-row "
    + alias3(((helper = (helper = helpers.region || (depth0 != null ? depth0.region : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"region","hash":{},"data":data}) : helper)))
    + "-header\">\n        </div>\n        <div class=\"league-container\">\n\n"
    + ((stack1 = this.invokePartial(partials['ui/loading'],depth0,{"name":"ui/loading","data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n        </div>\n    </div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["tennis-block"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "    <div class=\"event-container "
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + " round-"
    + alias3(alias4((depths[1] != null ? depths[1].round : depths[1]), depth0))
    + " default-market-"
    + alias3((helpers.size || (depth0 && depth0.size) || alias1).call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"size","hash":{},"data":data}))
    + " "
    + alias3(alias4((depths[1] != null ? depths[1].leagueClass : depths[1]), depth0))
    + "\" data-style=\""
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\" m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + " \">\n            \n            \n            <div class=\"opponent-container\">\n                <span>"
    + alias3(alias4((depth0 != null ? depth0.opponentA : depth0), depth0))
    + "</span><br>\n                <span>"
    + alias3(alias4((depth0 != null ? depth0.opponentB : depth0), depth0))
    + "</span>\n            </div>\n                \n"
    + ((stack1 = helpers.each.call(depth0,(helpers.getVTennMarket || (depth0 && depth0.getVTennMarket) || alias1).call(depth0,"Winner of game X in set 1",(depth0 != null ? depth0.children : depth0),{"name":"getVTennMarket","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.each.call(depth0,(helpers.getVTennMarket || (depth0 && depth0.getVTennMarket) || alias1).call(depth0,"Winner of set X",(depth0 != null ? depth0.children : depth0),{"name":"getVTennMarket","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.each.call(depth0,(helpers.getVTennMarket || (depth0 && depth0.getVTennMarket) || alias1).call(depth0,"Winner of the match",(depth0 != null ? depth0.children : depth0),{"name":"getVTennMarket","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n            \n        </div>\n    </div>\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.escapeExpression, alias2=this.lambda;

  return "                        <div class=\"market-container\">\n                            <div class=\"european-row market-list "
    + alias1((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.description : depth0),{"name":"toLowerCase","hash":{},"data":data}))
    + "\" >\n                                <div class=\"market-description\">\n                                    "
    + alias1(alias2((depth0 != null ? depth0.description : depth0), depth0))
    + " - "
    + alias1(alias2((depth0 != null ? depth0.period : depth0), depth0))
    + "\n                                </div>\n                                \n"
    + ((stack1 = this.invokePartial(partials['virtual/event-block'],depth0,{"name":"virtual/event-block","hash":{"flags":(depth0 != null ? depth0.flags : depth0),"eventID":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.id : stack1),"id":(depth0 != null ? depth0.id : depth0),"first":(depth0 != null ? depth0.$first : depth0),"children":(depth0 != null ? depth0.children : depth0),"style":(depth0 != null ? depth0.style : depth0)},"data":data,"indent":"                                    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "                                \n                            </div>\n                        </div>\n";
},"5":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "    <div class=\"market-headers number-of-games-header "
    + this.escapeExpression(((helper = (helper = helpers.leagueClass || (depth0 != null ? depth0.leagueClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"leagueClass","hash":{},"data":data}) : helper)))
    + "\" >\n        <div class=\"league-info\">\n            <span>Number Of Games</span>\n        </div>\n        <div class=\"market-header\">\n            Set 1\n            <div class=\"market-label\">\n                <span>Odd</span>\n                <span>Even</span>\n            </div>\n        </div>\n        <div class=\"market-header\">\n            Set 1\n            <div class=\"market-label\">\n                <span>O</span>\n                <span>U</span>\n            </div>\n        </div>\n        <div class=\"market-header\">\n            Match\n            <div class=\"market-label\">\n                <span>O</span>\n                <span>U</span>\n            </div>\n        </div>\n    </div>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.children : stack1),{"name":"each","hash":{},"fn":this.program(6, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"6":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "        <div class=\"event-container "
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + " round-"
    + alias3(alias4((depths[2] != null ? depths[2].round : depths[2]), depth0))
    + " default-market-"
    + alias3((helpers.size || (depth0 && depth0.size) || alias1).call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"size","hash":{},"data":data}))
    + " "
    + alias3(alias4((depths[1] != null ? depths[1].leagueClass : depths[1]), depth0))
    + "\" data-style=\""
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + "\">\n            <div class=\" m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + " \">\n                \n                \n                <div class=\"opponent-container\">\n                    <span>"
    + alias3(alias4((depth0 != null ? depth0.opponentA : depth0), depth0))
    + "</span><br>\n                    <span>"
    + alias3(alias4((depth0 != null ? depth0.opponentB : depth0), depth0))
    + "</span>\n                </div>\n                    \n"
    + ((stack1 = helpers.each.call(depth0,(helpers.getVTennMarket || (depth0 && depth0.getVTennMarket) || alias1).call(depth0,"Odd/even number of games in set X",(depth0 != null ? depth0.children : depth0),{"name":"getVTennMarket","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.each.call(depth0,(helpers.getVTennMarket || (depth0 && depth0.getVTennMarket) || alias1).call(depth0,"Total number of games in set 1 (9.5) 0",(depth0 != null ? depth0.children : depth0),{"name":"getVTennMarket","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.each.call(depth0,(helpers.getVTennMarket || (depth0 && depth0.getVTennMarket) || alias1).call(depth0,"Total number of games 0",(depth0 != null ? depth0.children : depth0),{"name":"getVTennMarket","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n                \n            </div>\n        </div>\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depths[2] != null ? depths[2].round : depths[2]),">=",3,{"name":"ifCond","hash":{},"fn":this.program(10, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"7":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"each","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"8":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.escapeExpression, alias2=this.lambda;

  return "                            <div class=\"market-container\">\n                                <div class=\"european-row market-list "
    + alias1((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.description : depth0),{"name":"toLowerCase","hash":{},"data":data}))
    + "\" >\n                                    <div class=\"market-description\">\n                                        "
    + alias1(alias2((depth0 != null ? depth0.description : depth0), depth0))
    + " - "
    + alias1(alias2((depth0 != null ? depth0.period : depth0), depth0))
    + "\n                                    </div>\n                                    \n"
    + ((stack1 = this.invokePartial(partials['virtual/event-block'],depth0,{"name":"virtual/event-block","hash":{"flags":(depth0 != null ? depth0.flags : depth0),"eventID":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.id : stack1),"id":(depth0 != null ? depth0.id : depth0),"first":(depth0 != null ? depth0.$first : depth0),"children":(depth0 != null ? depth0.children : depth0),"style":(depth0 != null ? depth0.style : depth0)},"data":data,"indent":"                                        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "                                    \n                                </div>\n                            </div>\n";
},"10":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "            <div class=\"event-container "
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + " round-"
    + alias3(alias4((depths[3] != null ? depths[3].round : depths[3]), depth0))
    + " place-holder default-market-"
    + alias3((helpers.size || (depth0 && depth0.size) || alias1).call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"size","hash":{},"data":data}))
    + " "
    + alias3(alias4((depths[2] != null ? depths[2].leagueClass : depths[2]), depth0))
    + "\" data-style=\""
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + "\">\n                <div class=\" m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + " \">\n                    \n                    \n                    <div class=\"opponent-container\"> </div>\n                        \n                    <div class=\"market-container\">\n                        <div class=\"european-row market-list \" >\n                            \n                        </div>\n                    </div>\n\n"
    + ((stack1 = helpers.each.call(depth0,(helpers.getVTennMarket || (depth0 && depth0.getVTennMarket) || alias1).call(depth0,"Total number of games in set 1 (10.5) 0",(depths[1] != null ? depths[1].children : depths[1]),{"name":"getVTennMarket","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n                    <div class=\"market-container\">\n                        <div class=\"european-row market-list \" >\n                            \n                        </div>\n                    </div>\n\n                    \n                </div>\n            </div>\n            <div class=\"event-container "
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + " round-"
    + alias3(alias4((depths[3] != null ? depths[3].round : depths[3]), depth0))
    + " place-holder default-market-"
    + alias3((helpers.size || (depth0 && depth0.size) || alias1).call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"size","hash":{},"data":data}))
    + " "
    + alias3(alias4((depths[2] != null ? depths[2].leagueClass : depths[2]), depth0))
    + "\" data-style=\""
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + "\">\n                <div class=\" m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + " \">\n                    \n                    \n                    <div class=\"opponent-container\"> </div>\n                        \n                        <div class=\"market-container\">\n                            <div class=\"european-row market-list \" >\n                                \n                            </div>\n                        </div>\n\n"
    + ((stack1 = helpers.each.call(depth0,(helpers.getVTennMarket || (depth0 && depth0.getVTennMarket) || alias1).call(depth0,"Total number of games in set 1 (8.5) 0",(depth0 != null ? depth0.children : depth0),{"name":"getVTennMarket","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(11, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n                        <div class=\"market-container\">\n                            <div class=\"european-row market-list \" >\n                                \n                            </div>\n                        </div>\n\n                    \n                </div>\n            </div>\n";
},"11":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"each","hash":{},"fn":this.program(12, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"12":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.escapeExpression, alias2=this.lambda;

  return "                                <div class=\"market-container\">\n                                    <div class=\"european-row market-list "
    + alias1((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.description : depth0),{"name":"toLowerCase","hash":{},"data":data}))
    + "\" >\n                                        <div class=\"market-description\">\n                                            "
    + alias1(alias2((depth0 != null ? depth0.description : depth0), depth0))
    + " - "
    + alias1(alias2((depth0 != null ? depth0.period : depth0), depth0))
    + "\n                                        </div>\n                                        \n"
    + ((stack1 = this.invokePartial(partials['virtual/event-block'],depth0,{"name":"virtual/event-block","hash":{"flags":(depth0 != null ? depth0.flags : depth0),"eventID":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.id : stack1),"id":(depth0 != null ? depth0.id : depth0),"first":(depth0 != null ? depth0.$first : depth0),"children":(depth0 != null ? depth0.children : depth0),"style":(depth0 != null ? depth0.style : depth0)},"data":data,"indent":"                                            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "                                        \n                                    </div>\n                                </div>\n";
},"14":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "    <div class=\"market-headers correct-score-header "
    + this.escapeExpression(((helper = (helper = helpers.leagueClass || (depth0 != null ? depth0.leagueClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"leagueClass","hash":{},"data":data}) : helper)))
    + "\" >\n        <div class=\"league-info\">\n            <span>Correct Score</span>\n        </div>\n        <div class=\"market-header\">\n            Game 1\n        </div>\n        <div class=\"market-header\">\n            Set 1\n        </div>\n        <div class=\"market-header\">\n            Match\n        </div>\n    </div>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.children : stack1),{"name":"each","hash":{},"fn":this.program(15, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"15":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "        <div class=\"event-container "
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + " round-"
    + alias3(alias4((depths[2] != null ? depths[2].round : depths[2]), depth0))
    + " correct-score default-market-"
    + alias3((helpers.size || (depth0 && depth0.size) || alias1).call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"size","hash":{},"data":data}))
    + " "
    + alias3(alias4((depths[1] != null ? depths[1].leagueClass : depths[1]), depth0))
    + "\" data-style=\""
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + "\">\n            <div class=\" m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + " \">\n                \n                \n                <div class=\"opponent-container\">\n                    <span>"
    + alias3(alias4((depth0 != null ? depth0.opponentA : depth0), depth0))
    + "</span><br>\n                    <span>"
    + alias3(alias4((depth0 != null ? depth0.opponentB : depth0), depth0))
    + "</span>\n                </div>\n                    \n"
    + ((stack1 = helpers.each.call(depth0,(helpers.getVTennMarket || (depth0 && depth0.getVTennMarket) || alias1).call(depth0,"Correct score of game X in set 1",(depth0 != null ? depth0.children : depth0),{"name":"getVTennMarket","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(16, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.each.call(depth0,(helpers.getVTennMarket || (depth0 && depth0.getVTennMarket) || alias1).call(depth0,"Correct score of set X",(depth0 != null ? depth0.children : depth0),{"name":"getVTennMarket","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(16, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers.each.call(depth0,(helpers.getVTennMarket || (depth0 && depth0.getVTennMarket) || alias1).call(depth0,"Final Result (in sets - best of 3)",(depth0 != null ? depth0.children : depth0),{"name":"getVTennMarket","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(16, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n                \n            </div>\n\n\n        </div>\n";
},"16":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"each","hash":{},"fn":this.program(17, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"17":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.escapeExpression, alias2=this.lambda;

  return "                            <div class=\"market-container\">\n                                <div class=\"european-row market-list "
    + alias1((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.description : depth0),{"name":"toLowerCase","hash":{},"data":data}))
    + "\" >\n                                    <div class=\"market-description\">\n                                        "
    + alias1(alias2((depth0 != null ? depth0.description : depth0), depth0))
    + " - "
    + alias1(alias2((depth0 != null ? depth0.period : depth0), depth0))
    + "\n                                    </div>\n                                    \n"
    + ((stack1 = this.invokePartial(partials['virtual/event-block'],depth0,{"name":"virtual/event-block","hash":{"columns":2,"flags":(depth0 != null ? depth0.flags : depth0),"eventID":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.id : stack1),"id":(depth0 != null ? depth0.id : depth0),"first":(depth0 != null ? depth0.$first : depth0),"children":(depth0 != null ? depth0.children : depth0),"style":(depth0 != null ? depth0.style : depth0)},"data":data,"indent":"                                        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "                                    \n                                </div>\n                            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "\n<div class=\"market-headers winner-header "
    + this.escapeExpression(((helper = (helper = helpers.leagueClass || (depth0 != null ? depth0.leagueClass : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"leagueClass","hash":{},"data":data}) : helper)))
    + "\" >\n    <div class=\"league-info\">\n        <span>Winner</span>\n    </div>\n    <div class=\"market-header\">\n        Game 1\n        <div class=\"market-label\">\n            <span>1</span>\n            <span>2</span>\n        </div>\n    </div>\n    <div class=\"market-header\">\n        Set 1\n        <div class=\"market-label\">\n            <span>1</span>\n            <span>2</span>\n        </div>\n    </div>\n    <div class=\"market-header\">\n        Match\n        <div class=\"market-label\">\n            <span>1</span>\n            <span>2</span>\n        </div>\n    </div>\n</div>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.children : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.round : depth0),">=",2,{"name":"ifCond","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.round : depth0),">=",4,{"name":"ifCond","hash":{},"fn":this.program(14, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["virtual-layout"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"wrapper-main\">\n	<div class=\"panel-container\"> \n		<div class=\"panel-top\">\n			<div class=\"nav-group nav-virtual-links\"></div>\n		</div>\n		<div class=\"panel-main\"></div>\n	</div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["default"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div>\n        "
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\n    </div>\n\n    <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n\n\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            "
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\n\n            \n                    \n                \n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                <ul>\n                <li>\n                "
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </li>\n            </ul>\n";
},"4":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                    <ul>\n                    <li>\n                    "
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\n                    </li>\n                </ul>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["MyApp"]["templates"]["doubleline"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "        <span class=\"spread\">"
    + this.escapeExpression((helpers.formatSpread || (depth0 && depth0.formatSpread) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.outcome : depth0),{"name":"formatSpread","hash":{},"data":data}))
    + "</span>\n";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.prefix : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n        <div class=\"direction\"><span class=\"up\"></span></div>\n        <a class=\"price\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.price : stack1), depth0))
    + "</a>\n";
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    return "            <span class=\"prefix\">"
    + this.escapeExpression(this.lambda((depths[1] != null ? depths[1].prefix : depths[1]), depth0))
    + "</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"doubleview-line\" data-id=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" data-type=\"outcome\">\n\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.withSpread : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.price : stack1),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});
this["MyApp"]["templates"]["doublerow"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "                <div>"
    + alias2((helpers.getKey || (depth0 && depth0.getKey) || alias1).call(depth0,(depth0 != null ? depth0.event : depth0),"opponentA",{"name":"getKey","hash":{},"data":data}))
    + "</div>\n                <div>"
    + alias2((helpers.getKey || (depth0 && depth0.getKey) || alias1).call(depth0,(depth0 != null ? depth0.event : depth0),"opponentB",{"name":"getKey","hash":{},"data":data}))
    + "</div>\n                <div>Draw</div> \n";
},"3":function(depth0,helpers,partials,data) {
    return "        <!-- +More team-details button -->\n        <button class=\"btn-custom btn-more\">+"
    + this.escapeExpression((helpers.getKey || (depth0 && depth0.getKey) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.event : depth0),"count",{"name":"getKey","hash":{},"data":data}))
    + "</button>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<tr>\n    <td>\n        <div class=\"violet ratio\">"
    + alias2((helpers.getEventTime || (depth0 && depth0.getEventTime) || alias1).call(depth0,(depth0 != null ? depth0.event : depth0),{"name":"getEventTime","hash":{},"data":data}))
    + "</div>\n        <div>"
    + alias2((helpers.getEventDate || (depth0 && depth0.getEventDate) || alias1).call(depth0,(depth0 != null ? depth0.event : depth0),{"name":"getEventDate","hash":{},"data":data}))
    + "</div>\n    </td>\n    <td>\n        <div><span class=\"bet-icon icon-star-1\"></span></div>\n        <div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.firstRow : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </td>\n\n    <!-- Full Time -->\n    <!-- HDP -->\n    <td>\n        <div>\n            <span >"
    + alias2((helpers.getOutcomeSpreadByKey || (depth0 && depth0.getOutcomeSpreadByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"HDP",2,{"name":"getOutcomeSpreadByKey","hash":{},"data":data}))
    + "</span>\n            <span >"
    + alias2((helpers.getOutcomeSpreadByKey || (depth0 && depth0.getOutcomeSpreadByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"HDP",1,{"name":"getOutcomeSpreadByKey","hash":{},"data":data}))
    + "</span>\n        </div>\n        <div>\n            <div>"
    + alias2((helpers.getOutcomePriceByKey || (depth0 && depth0.getOutcomePriceByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"HDP",1,"",{"name":"getOutcomePriceByKey","hash":{},"data":data}))
    + "</div>\n            <div>"
    + alias2((helpers.getOutcomePriceByKey || (depth0 && depth0.getOutcomePriceByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"HDP",2,"",{"name":"getOutcomePriceByKey","hash":{},"data":data}))
    + "</div>\n            <div>&nbsp;</div>\n        </div>\n    </td>\n    <!-- OU -->\n    <td>\n        <div><span class=\"violet\">"
    + alias2((helpers.getOutcomeSpreadByKey || (depth0 && depth0.getOutcomeSpreadByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"OU",1,{"name":"getOutcomeSpreadByKey","hash":{},"data":data}))
    + "</span></div>\n        <div>\n            <div>"
    + alias2((helpers.getOutcomePriceByKey || (depth0 && depth0.getOutcomePriceByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"OU",1,"o",{"name":"getOutcomePriceByKey","hash":{},"data":data}))
    + "</div>\n            <div>"
    + alias2((helpers.getOutcomePriceByKey || (depth0 && depth0.getOutcomePriceByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"OU",2,"u",{"name":"getOutcomePriceByKey","hash":{},"data":data}))
    + "</div>\n            <div>&nbsp;</div>\n        </div>\n    </td>\n    <!-- OE -->\n    <td>\n        <div>"
    + alias2((helpers.getOutcomePriceByKey || (depth0 && depth0.getOutcomePriceByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"OE",1,"o",{"name":"getOutcomePriceByKey","hash":{},"data":data}))
    + "</div>\n        <div>"
    + alias2((helpers.getOutcomePriceByKey || (depth0 && depth0.getOutcomePriceByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"OE",2,"e",{"name":"getOutcomePriceByKey","hash":{},"data":data}))
    + "</div>\n        <div>&nbsp;</div>\n    </td>\n    <!-- 1x2 -->\n    <td>\n        <div>"
    + alias2((helpers.getOutcomePriceByKey || (depth0 && depth0.getOutcomePriceByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"1X2",1,"",{"name":"getOutcomePriceByKey","hash":{},"data":data}))
    + "</div>\n        <div>"
    + alias2((helpers.getOutcomePriceByKey || (depth0 && depth0.getOutcomePriceByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"1X2",3,"",{"name":"getOutcomePriceByKey","hash":{},"data":data}))
    + "</div>\n        <div>"
    + alias2((helpers.getOutcomePriceByKey || (depth0 && depth0.getOutcomePriceByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"1X2",2,"",{"name":"getOutcomePriceByKey","hash":{},"data":data}))
    + "</div> \n    </td>\n\n    <!-- First Half -->\n    <!-- HDP -->\n    <td class=\"hide-in-sm\">\n        <div>\n            <span >"
    + alias2((helpers.getOutcomeSpreadByKey || (depth0 && depth0.getOutcomeSpreadByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"FH-HDP",2,{"name":"getOutcomeSpreadByKey","hash":{},"data":data}))
    + "</span>\n            <span >"
    + alias2((helpers.getOutcomeSpreadByKey || (depth0 && depth0.getOutcomeSpreadByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"FH-HDP",1,{"name":"getOutcomeSpreadByKey","hash":{},"data":data}))
    + "</span>\n        </div>\n        <div>\n            <div>"
    + alias2((helpers.getOutcomePriceByKey || (depth0 && depth0.getOutcomePriceByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"FH-HDP",1,"",{"name":"getOutcomePriceByKey","hash":{},"data":data}))
    + "</div>\n            <div>"
    + alias2((helpers.getOutcomePriceByKey || (depth0 && depth0.getOutcomePriceByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"FH-HDP",2,"",{"name":"getOutcomePriceByKey","hash":{},"data":data}))
    + "</div>\n            <div>&nbsp;</div>\n        </div>\n    </td>\n    <!-- OU -->\n    <td class=\"hide-in-sm\">\n        <div><span class=\"violet\">"
    + alias2((helpers.getOutcomeSpreadByKey || (depth0 && depth0.getOutcomeSpreadByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"FH-OU",1,{"name":"getOutcomeSpreadByKey","hash":{},"data":data}))
    + "</span></div>\n        <div>\n            <div>"
    + alias2((helpers.getOutcomePriceByKey || (depth0 && depth0.getOutcomePriceByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"FH-OU",1,"o",{"name":"getOutcomePriceByKey","hash":{},"data":data}))
    + "</div>\n            <div>"
    + alias2((helpers.getOutcomePriceByKey || (depth0 && depth0.getOutcomePriceByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"FH-OU",2,"u",{"name":"getOutcomePriceByKey","hash":{},"data":data}))
    + "</div>\n        <div>&nbsp;</div>\n        </div>\n    </td>\n    <!-- 1x2 -->\n    <td class=\"hide-in-sm\">\n        <div>"
    + alias2((helpers.getOutcomePriceByKey || (depth0 && depth0.getOutcomePriceByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"FH-1X2",1,"",{"name":"getOutcomePriceByKey","hash":{},"data":data}))
    + "</div>\n        <div>"
    + alias2((helpers.getOutcomePriceByKey || (depth0 && depth0.getOutcomePriceByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"FH-1X2",3,"",{"name":"getOutcomePriceByKey","hash":{},"data":data}))
    + "</div>\n        <div>"
    + alias2((helpers.getOutcomePriceByKey || (depth0 && depth0.getOutcomePriceByKey) || alias1).call(depth0,(depth0 != null ? depth0.market : depth0),"FH-1X2",2,"",{"name":"getOutcomePriceByKey","hash":{},"data":data}))
    + "</div>\n    </td>\n\n    <td>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.firstRow : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    </td>\n</tr>";
},"useData":true});
this["MyApp"]["templates"]["doublerow2"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "\n\n\n\n<tr class=\"doubleview-row\" data-id=\""
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].event : depths[1])) != null ? stack1.id : stack1), depth0))
    + "\">\n    <td class=\"col-date\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.$first : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </td>\n\n    <td class=\"col-teams\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.$first : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </td>\n\n\n\n\n\n\n        <td class=\"col-market col-HDP\" data-id=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.HDP : stack1)) != null ? stack1.id : stack1), depth0))
    + "\" data-description=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.HDP : stack1)) != null ? stack1.description : stack1), depth0))
    + "\">\n\n"
    + ((stack1 = this.invokePartial(partials['sports/doubleline'],depth0,{"name":"sports/doubleline","hash":{"withSpread":true,"outcome":((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.HDP : stack1)) != null ? stack1.children : stack1)) != null ? stack1['0'] : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = this.invokePartial(partials['sports/doubleline'],depth0,{"name":"sports/doubleline","hash":{"withSpread":true,"outcome":((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.HDP : stack1)) != null ? stack1.children : stack1)) != null ? stack1['1'] : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n            <div class=\"doubleview-line\"></div>\n\n        </td>\n\n\n\n        <td class=\"col-market col-OU\" data-id=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.OU : stack1)) != null ? stack1.id : stack1), depth0))
    + "\" data-description=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.OU : stack1)) != null ? stack1.description : stack1), depth0))
    + "\">\n\n"
    + ((stack1 = this.invokePartial(partials['sports/doubleline'],depth0,{"name":"sports/doubleline","hash":{"withSpread":true,"prefix":"o","outcome":((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.OU : stack1)) != null ? stack1.children : stack1)) != null ? stack1['0'] : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = this.invokePartial(partials['sports/doubleline'],depth0,{"name":"sports/doubleline","hash":{"prefix":"u","outcome":((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.OU : stack1)) != null ? stack1.children : stack1)) != null ? stack1['1'] : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n            <div class=\"doubleview-line\"></div>\n            \n        </td>\n\n\n        <td class=\"col-market col-OE\" data-id=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.OE : stack1)) != null ? stack1.id : stack1), depth0))
    + "\" data-description=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.OE : stack1)) != null ? stack1.description : stack1), depth0))
    + "\">\n\n\n"
    + ((stack1 = this.invokePartial(partials['sports/doubleline'],depth0,{"name":"sports/doubleline","hash":{"prefix":"o","outcome":((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.OE : stack1)) != null ? stack1.children : stack1)) != null ? stack1['0'] : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = this.invokePartial(partials['sports/doubleline'],depth0,{"name":"sports/doubleline","hash":{"prefix":"e","outcome":((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.OE : stack1)) != null ? stack1.children : stack1)) != null ? stack1['1'] : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n            <div class=\"doubleview-line\"></div>\n\n        </td>\n\n\n        <td class=\"col-market col-1X2\" data-id=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1X2'] : stack1)) != null ? stack1.id : stack1), depth0))
    + "\" data-description=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1X2'] : stack1)) != null ? stack1.description : stack1), depth0))
    + "\">\n\n"
    + ((stack1 = this.invokePartial(partials['sports/doubleline'],depth0,{"name":"sports/doubleline","hash":{"outcome":((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1X2'] : stack1)) != null ? stack1.children : stack1)) != null ? stack1['0'] : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = this.invokePartial(partials['sports/doubleline'],depth0,{"name":"sports/doubleline","hash":{"outcome":((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1X2'] : stack1)) != null ? stack1.children : stack1)) != null ? stack1['2'] : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = this.invokePartial(partials['sports/doubleline'],depth0,{"name":"sports/doubleline","hash":{"outcome":((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1X2'] : stack1)) != null ? stack1.children : stack1)) != null ? stack1['1'] : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "            \n        </td>\n\n\n\n\n        <td class=\"col-market col-HDP hide-in-sm\" data-id=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['FH-HDP'] : stack1)) != null ? stack1.id : stack1), depth0))
    + "\" data-description=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['FH-HDP'] : stack1)) != null ? stack1.description : stack1), depth0))
    + "\">\n\n"
    + ((stack1 = this.invokePartial(partials['sports/doubleline'],depth0,{"name":"sports/doubleline","hash":{"withSpread":true,"outcome":((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['FH-HDP'] : stack1)) != null ? stack1.children : stack1)) != null ? stack1['0'] : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = this.invokePartial(partials['sports/doubleline'],depth0,{"name":"sports/doubleline","hash":{"withSpread":true,"outcome":((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['FH-HDP'] : stack1)) != null ? stack1.children : stack1)) != null ? stack1['1'] : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n            <div class=\"doubleview-line\"></div>\n\n        </td>\n\n\n        <td class=\"col-market col-OU hide-in-sm\" data-id=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['FH-OU'] : stack1)) != null ? stack1.id : stack1), depth0))
    + "\" data-description=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['FH-OU'] : stack1)) != null ? stack1.description : stack1), depth0))
    + "\">\n\n"
    + ((stack1 = this.invokePartial(partials['sports/doubleline'],depth0,{"name":"sports/doubleline","hash":{"withSpread":true,"prefix":"o","outcome":((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['FH-OU'] : stack1)) != null ? stack1.children : stack1)) != null ? stack1['0'] : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = this.invokePartial(partials['sports/doubleline'],depth0,{"name":"sports/doubleline","hash":{"prefix":"u","outcome":((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['FH-OU'] : stack1)) != null ? stack1.children : stack1)) != null ? stack1['1'] : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n\n            <div class=\"doubleview-line\"></div>\n            \n        </td>\n\n\n\n        <td class=\"col-market col-1X2 hide-in-sm\" data-id=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['FH-1X2'] : stack1)) != null ? stack1.id : stack1), depth0))
    + "\" data-description=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['FH-1X2'] : stack1)) != null ? stack1.description : stack1), depth0))
    + "\">\n\n            \n"
    + ((stack1 = this.invokePartial(partials['sports/doubleline'],depth0,{"name":"sports/doubleline","hash":{"outcome":((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['FH-1X2'] : stack1)) != null ? stack1.children : stack1)) != null ? stack1['0'] : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = this.invokePartial(partials['sports/doubleline'],depth0,{"name":"sports/doubleline","hash":{"outcome":((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['FH-1X2'] : stack1)) != null ? stack1.children : stack1)) != null ? stack1['2'] : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = this.invokePartial(partials['sports/doubleline'],depth0,{"name":"sports/doubleline","hash":{"outcome":((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['FH-1X2'] : stack1)) != null ? stack1.children : stack1)) != null ? stack1['1'] : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "            \n        </td>\n\n\n\n\n    \n\n    <td class=\"col-more\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.$first : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </td>\n\n</tr>\n\n\n\n\n\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "            \n            <div class=\"date\">\n                "
    + alias2((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias1).call(depth0,((stack1 = (depths[1] != null ? depths[1].event : depths[1])) != null ? stack1.date : stack1),"date",{"name":"formatDateTime","hash":{},"data":data}))
    + "\n            </div>\n            <div class=\"time\">\n                "
    + alias2((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias1).call(depth0,((stack1 = (depths[1] != null ? depths[1].event : depths[1])) != null ? stack1.date : stack1),"time",{"name":"formatDateTime","hash":{},"data":data}))
    + "\n            </div>\n";
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "            <div class=\"teams\">\n                "
    + alias2((helpers.formatTeamName || (depth0 && depth0.formatTeamName) || alias1).call(depth0,((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.opponentA : stack1),((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1X2'] : stack1)) != null ? stack1.children : stack1)) != null ? stack1['0'] : stack1)) != null ? stack1.price : stack1),((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1X2'] : stack1)) != null ? stack1.children : stack1)) != null ? stack1['1'] : stack1)) != null ? stack1.price : stack1),{"name":"formatTeamName","hash":{},"data":data}))
    + "\n                "
    + alias2((helpers.formatTeamName || (depth0 && depth0.formatTeamName) || alias1).call(depth0,((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.opponentB : stack1),((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1X2'] : stack1)) != null ? stack1.children : stack1)) != null ? stack1['1'] : stack1)) != null ? stack1.price : stack1),((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1X2'] : stack1)) != null ? stack1.children : stack1)) != null ? stack1['0'] : stack1)) != null ? stack1.price : stack1),{"name":"formatTeamName","hash":{},"data":data}))
    + "\n                <span>Draw</span>\n            </div>\n            <a class=\"add-to-favourites\"><i class=\"bet-icon icon-star-1\"></i></a>\n";
},"6":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "            <!-- +More team-details button -->\n            <button class=\"btn-custom btn-more\">+"
    + this.escapeExpression(this.lambda(((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.count : stack1), depth0))
    + "</button>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\n\n"
    + ((stack1 = (helpers.foreach || (depth0 && depth0.foreach) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.children : stack1),{"name":"foreach","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["doubletable"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!-- start: live -->\n<div class=\"live\">\n\n    <!-- start: title -->\n    <div class=\"block-title\">\n        <div>Non-Live</div>\n        <div>\n            <span class=\"bet-icon icon-refresh\"></span>\n            <span>Refresh...</span>\n            <span>56</span>\n        </div>\n        <div>\n            <span class=\"pipe\">|</span>\n            <span class=\"bet-icon icon-clock\"></span>\n            <span>All Periods</span>\n\n            <span class=\"pipe\">|</span>\n            <span class=\"bet-icon icon-bars\"></span>\n            <span>Market</span>\n\n            <span class=\"pipe\">|</span>\n            <span class=\"bet-icon icon-trophy\"></span>\n            <span>League</span>\n        </div>\n    </div>\n    <!-- end: title -->\n\n    <!-- start: table event-table -->\n    <table class=\"sportsview doubleview\">\n        <thead>\n            <tr>\n                <th rowspan=\"2\">Time</th>\n                <th rowspan=\"2\">Event</th>\n                <th colspan=\"4\">Full Time</th>\n                <th colspan=\"3\" class=\"hide-in-sm\">First Half</th>\n                <th rowspan=\"2\">+More</th>\n            </tr>\n            <tr>\n                <th>HDP</th>\n                <th>OU</th>\n                <th>OE</th>\n                <th>1x2</th>\n                <th class=\"hide-in-sm\">HDP</th>\n                <th class=\"hide-in-sm\">OU</th>\n                <th class=\"hide-in-sm\">1x2</th>\n            </tr>\n        </thead>\n\n        <tbody class=\"odds-body\">\n            \n        <tr>\n            <td colspan=\"10\"> \n                <div class=\"loading\">\n                    <i class=\"fa fa-spin fa-spinner\"></i> Loading...\n                </div>\n            </td>\n        </tr>\n        </tbody>\n        <tfoot>\n            <tr>\n                <td colspan=\"10\"></td>\n            </tr>\n        </tfoot>\n        \n\n    </table> <!-- end: table event-table -->\n\n</div> <!-- end: live -->";
},"useData":true});
this["MyApp"]["templates"]["title"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<tr class=\"league-title\">\n    <td colspan=\"10\">\n        <div class=\"wrapper\">\n            <a class=\"add-to-favourites\">\n                <i class=\"bet-icon icon-star-2\"></i>\n            </a>\n            <span class=\"title\">"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n        </div>\n        \n    </td>\n</tr>";
},"useData":true});
this["MyApp"]["templates"]["event-block"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=helpers.helperMissing;

  return ((stack1 = (helpers.foreach || (depth0 && depth0.foreach) || alias1).call(depth0,(helpers.toColumns || (depth0 && depth0.toColumns) || alias1).call(depth0,(helpers.sortByProps || (depth0 && depth0.sortByProps) || alias1).call(depth0,(depth0 != null ? depth0.children : depth0),"pos",{"name":"sortByProps","hash":{},"data":data}),(depth0 != null ? depth0.columns : depth0),{"name":"toColumns","hash":{},"data":data}),{"name":"foreach","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "            <div class=\"col-group\">\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['europeanview/common/group-1x1-price'],depth0,{"name":"europeanview/common/group-1x1-price","hash":{"team":(depth0 != null ? depth0.description : depth0),"outcome":depth0,"code":(depths[2] != null ? depths[2].code : depths[2]),"columns":(depths[2] != null ? depths[2].columns : depths[2])},"data":data,"indent":"                    ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"5":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(helpers.sortByProps || (depth0 && depth0.sortByProps) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.children : depth0),"pos",{"name":"sortByProps","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(6, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"6":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['europeanview/common/group-1x1-price'],depth0,{"name":"europeanview/common/group-1x1-price","hash":{"outcomeList":(depths[2] != null ? depths[2].outcomeList : depths[2]),"team":(depth0 != null ? depth0.description : depth0),"code":(depths[2] != null ? depths[2].code : depths[2]),"columns":(depths[2] != null ? depths[2].columns : depths[2]),"outcome":depth0},"data":data,"indent":"                ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"event-markets "
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + " default-market-"
    + alias3((helpers.size || (depth0 && depth0.size) || alias1).call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"size","hash":{},"data":data}))
    + "\" data-style=\""
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\" m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.columns : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\n    </div>\n</div>";
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["extra-markets"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.escapeExpression, alias2=this.lambda;

  return "	<div class=\"european-row market-list "
    + alias1((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.description : stack1),{"name":"toLowerCase","hash":{},"data":data}))
    + " market\" >\n		<div class=\"market-description\">\n            "
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.description : stack1), depth0))
    + " - "
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.period : stack1), depth0))
    + "\n        </div>\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['virtual/event-block'],depth0,{"name":"virtual/event-block","hash":{"outcomeList":(depths[2] != null ? depths[2].virtualOutcomeList : depths[2]),"liveMode":(depths[2] != null ? depths[2].liveMode : depths[2]),"code":((stack1 = (depths[2] != null ? depths[2].eventData : depths[2])) != null ? stack1.code : stack1),"columns":0,"flags":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.flags : stack1),"eventID":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.id : stack1),"count":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.extendedCount : stack1),"id":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.id : stack1),"first":(depth0 != null ? depth0.$first : depth0),"children":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.children : stack1),"style":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.style : stack1)},"data":data,"indent":"                ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"event-block event e-"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n"
    + ((stack1 = helpers.each.call(depth0,(helpers.sortByProps || (depth0 && depth0.sortByProps) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.markets : depth0),"sortedPos",{"name":"sortByProps","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n";
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["featured-markets"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=this.escapeExpression;

  return "                <span class=\"title\">\n                    <span>"
    + alias1(this.lambda(((stack1 = (depths[1] != null ? depths[1].eventData : depths[1])) != null ? stack1.description : stack1), depth0))
    + "</span>\n                    <span class=\"season-title\">"
    + alias1(((helper = (helper = helpers.season || (depth0 != null ? depth0.season : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"season","hash":{},"data":data}) : helper)))
    + "</span>\n                </span>\n";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.escapeExpression, alias2=this.lambda;

  return "			<div class=\"european-row market-list "
    + alias1((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.description : stack1),{"name":"toLowerCase","hash":{},"data":data}))
    + "\" >\n				<div class=\"market-description\">\n		            "
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.description : stack1), depth0))
    + " - "
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.period : stack1), depth0))
    + " \n		        </div>\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1),{"name":"if","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n";
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['virtual/event-block'],depth0,{"name":"virtual/event-block","hash":{"code":((stack1 = (depths[2] != null ? depths[2].eventData : depths[2])) != null ? stack1.code : stack1),"columns":(depths[2] != null ? depths[2].columns : depths[2]),"liveMode":(depths[2] != null ? depths[2].liveMode : depths[2]),"flags":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.flags : stack1),"eventID":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.id : stack1),"count":((stack1 = (depths[2] != null ? depths[2].event : depths[2])) != null ? stack1.extendedCount : stack1),"id":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.id : stack1),"first":(depth0 != null ? depth0.$first : depth0),"children":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.children : stack1),"style":((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.style : stack1)},"data":data,"indent":"\t\t                ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "<div class=\"league-block league p-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.eventData : depth0)) != null ? stack1.id : stack1), depth0))
    + " \" data-path=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.eventData : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n    <div class=\"league-title\">\n        <div class=\"wrapper\">\n"
    + ((stack1 = (helpers.parseTitle || (depth0 && depth0.parseTitle) || alias3).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.eventData : depth0)) != null ? stack1.path : stack1)) != null ? stack1.League : stack1),{"name":"parseTitle","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n    <div class=\"events-container\">\n		<div class=\"event-block event e-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n"
    + ((stack1 = helpers.each.call(depth0,(helpers.sortByProps || (depth0 && depth0.sortByProps) || alias3).call(depth0,(depth0 != null ? depth0.markets : depth0),"sortedPos",{"name":"sortByProps","hash":{},"data":data}),{"name":"each","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n    </div>\n</div>\n\n\n\n";
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["virtual-layout"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"wrapper-main\">\n	<div class=\"panel-container\"> \n		<div class=\"panel-top\">\n			<div class=\"nav-group nav-virtual-links\"></div>\n		</div>\n		<div class=\"panel-main\"></div>\n	</div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["virtualSports"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"virtual-gui\">\n    <iframe class=\"virtual-frame\" scrolling=\"no\" src=\""
    + ((stack1 = ((helper = (helper = helpers.frameUrl || (depth0 != null ? depth0.frameUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"frameUrl","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\" name='vfl'></iframe>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["addtofavorites"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<a class=\"btn-addfav\" data-id=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-title=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"bet-icon icon-star-"
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.selectedFavorite || (depth0 && depth0.selectedFavorite) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),(depth0 != null ? depth0.id : depth0),{"name":"selectedFavorite","hash":{},"data":data}))
    + "\"></i>\n</a>";
},"useData":true});
this["MyApp"]["templates"]["ads"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "	<div class=\"wrap-ads\">\n\n        <div class=\"block-title\">\n            <div class=\"title\">\n                <span>\n                    "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.bannerAdTitle",{"name":"t","hash":{},"data":data}))
    + "\n                </span>\n            </div>\n        </div>\n\n		<div class=\"ads-content\">\n			<a data-url=\""
    + alias2(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" data-type=\""
    + alias2(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" class=\"default ad-banner\"><img src=\""
    + alias2(((helper = (helper = helpers.file || (depth0 != null ? depth0.file : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"file","hash":{},"data":data}) : helper)))
    + "\" width=\"210\" data-id=\"TODO\"></a>\n		</div>\n	</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.banners : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["MyApp"]["templates"]["betslip-approvalform"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "        <div class=\"approved-bets-title\">"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.approvedBets",{"name":"t","hash":{},"data":data}))
    + "</div>\n        <ul class=\"approved-bets\">\n            "
    + ((stack1 = ((helper = (helper = helpers.approvedBets || (depth0 != null ? depth0.approvedBets : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"approvedBets","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        </ul>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "\n        <div class=\"rejected-bets-title\">"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.rejectedBets",{"name":"t","hash":{},"data":data}))
    + "</div>\n        <ul class=\"rejected-bets\">\n            "
    + ((stack1 = ((helper = (helper = helpers.rejectedBets || (depth0 != null ? depth0.rejectedBets : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"rejectedBets","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        </ul>\n";
},"5":function(depth0,helpers,partials,data) {
    return "disabled";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "<div class=\"wrap-betslipinfo\">\n    <div class=\"betslipinfo\">\n        <div class=\"labelBetslipReference\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.reference",{"name":"t","hash":{},"data":data}))
    + "</div>\n        <div class=\"betslipReference\">\n            "
    + alias2(this.lambda(((stack1 = (depth0 != null ? depth0.betslip : depth0)) != null ? stack1.betslipReference : stack1), depth0))
    + "\n        </div>\n\n\n        <div class=\"labelBetslipDate\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.dateLabel",{"name":"t","hash":{},"data":data}))
    + "</div>\n        <div class=\"betslipDate\">\n            "
    + alias2((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.betslip : depth0)) != null ? stack1.createdDateTime : stack1),"datetime",{"name":"formatDateTime","hash":{},"data":data}))
    + "\n        </div>\n\n\n\n    </div>\n    <div class=\"timerContainer\">\n        "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.expireText1",{"name":"t","hash":{},"data":data}))
    + " <span class=\"timerCount\">&nbsp;</span> "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.expireText2",{"name":"t","hash":{},"data":data}))
    + "\n    </div>\n</div>\n\n<div class=\"wrap-approvalform\">\n\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.approvedBets : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.rejectedBets : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n<div class=\"wrap-summary\">\n\n    <div class=\"summary-row\">\n        <div class=\"description\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.totalBets",{"name":"t","hash":{},"data":data}))
    + "</div>\n        <div class=\"price\">"
    + alias2(((helper = (helper = helpers.currencyCode || (depth0 != null ? depth0.currencyCode : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"currencyCode","hash":{},"data":data}) : helper)))
    + " "
    + alias2((helpers.formatNumeral || (depth0 && depth0.formatNumeral) || alias1).call(depth0,(depth0 != null ? depth0.totalBets : depth0),{"name":"formatNumeral","hash":{},"data":data}))
    + "</div>\n    </div>\n\n    <div class=\"summary-row\">\n        <div class=\"description\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.potentialWin",{"name":"t","hash":{},"data":data}))
    + "</div>\n        <div class=\"price\">"
    + alias2(((helper = (helper = helpers.currencyCode || (depth0 != null ? depth0.currencyCode : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"currencyCode","hash":{},"data":data}) : helper)))
    + " "
    + alias2((helpers.formatNumeral || (depth0 && depth0.formatNumeral) || alias1).call(depth0,(depth0 != null ? depth0.potentialWins : depth0),{"name":"formatNumeral","hash":{},"data":data}))
    + "</div>\n    </div>\n\n    <div class=\"wrap-buttons\">\n        <div class=\"\">\n            <button type=\"button\" class=\"btn-betslip-reject\" role=\"button\" ><span class=\"text\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.cancel",{"name":"t","hash":{},"data":data}))
    + "</span>  <i class=\"fa fa-spin fa-spinner\"></i></button>\n            <button type=\"button\" class=\"btn-betslip-approve\" role=\"button\" "
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.approvedBets : depth0),{"name":"unless","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "><span class=\"text\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.confirm",{"name":"t","hash":{},"data":data}))
    + "</span>  <i class=\"fa fa-spin fa-spinner\"></i></button>\n        </div>\n    </div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["betslip-bet"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    return "            "
    + this.escapeExpression((helpers.partialBetslipOutcome || (depth0 && depth0.partialBetslipOutcome) || helpers.helperMissing).call(depth0,depth0,(depths[1] != null ? depths[1].outcomeList : depths[1]),{"name":"partialBetslipOutcome","hash":{},"data":data}))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<li class=\"status-"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.bet : depth0)) != null ? stack1.status : stack1), depth0))
    + "\">\n    <div class=\"wrap-outcomelist\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.bet : depth0)) != null ? stack1.outcomes : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</li>";
},"useData":true,"useDepths":true});
this["MyApp"]["templates"]["betslip-block"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"block-title\">\n    <div class=\"title\">\n        <span>\n            "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.betslip",{"name":"t","hash":{},"data":data}))
    + "\n        </span>\n    </div>\n</div>\n\n\n<div class=\"betslip-container\">\n    <div class=\"loading-cover hidden\"> \n        <div class=\"rtg-spinner\">\n          <i class=\"fa fa-spin fa-spinner\"></i><span> Processing...</span>\n        </div>\n    </div>\n\n    <div id=\"betslip-result\"></div>\n\n    <div class=\"blank-slate\">\n        <div class=\"content\">\n            "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.betslipBlankSlate",{"name":"t","hash":{},"data":data}))
    + "\n        </div>\n        \n    </div>\n\n\n    <div class=\"error-cover\">\n        <div class=\"content\">\n            <span class=\"\"></span>\n            <span class=\"bet-error error-default\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.errorDefault",{"name":"t","hash":{},"data":data}))
    + "</span>\n            <span class=\"bet-error error-insufficient\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.errorInsufficient",{"name":"t","hash":{},"data":data}))
    + "</span>\n            <span class=\"bet-error error-cancelled\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.cancelled",{"name":"t","hash":{},"data":data}))
    + "</span>\n\n            <span class=\"bet-error error-minimumBet\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.errorMinimum",{"name":"t","hash":{},"data":data}))
    + " <span class=\"minAmnt\"></span></span>\n            <div class=\"button-container\">\n                <button type=\"button\" class=\"btn-betslip-exit\" role=\"button\" ><span class=\"text\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.ok",{"name":"t","hash":{},"data":data}))
    + "</span> <i class=\"fa fa-spin fa-spinner\"></i></button>\n            </div>\n            \n        </div>\n    </div>\n    <div class=\"betslip-modal\">\n    </div>\n</div>\n\n\n";
},"useData":true});
this["MyApp"]["templates"]["betslip-maxbets"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"betslip-maxbets betslip-message\">\n	<div class=\"maxbet-message\">\n    "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.maxBet",{"name":"t","hash":{},"data":data}))
    + "\n    </div>\n    <div>\n        <button type=\"button\" class=\"btn-betslip-exit\" role=\"button\" >"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.ok",{"name":"t","hash":{},"data":data}))
    + "</button>\n    </div>\n    \n</div>";
},"useData":true});
this["MyApp"]["templates"]["betslip-modal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return " hidden";
},"3":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "    <span id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" class=\"button\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"modal\">\n  <div class=\"modal-header\">\n    <div class=\"modal-title\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"modal-close"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.hasCloseButton : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">&times;</div>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"info\"><span class=\"modal-type "
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3((helpers.getType || (depth0 && depth0.getType) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"getType","hash":{},"data":data}))
    + "</span>"
    + ((stack1 = ((helper = (helper = helpers.info || (depth0 != null ? depth0.info : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"info","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n    <div class=\"content\">"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n  </div>\n  <div class=\"modal-footer\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.buttons : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["betslip-multiples"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "\n<div class=\"multiple-description\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.multiples : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.description : stack1), depth0))
    + "</div>\n\n<div class=\"wrap-selection\">\n    <div class=\"loading-cover\">\n        <div>\n            <i class=\"fa fa-spin fa-spinner\"></i>\n        </div>\n    </div>\n\n    \n    <ul>\n        \n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.singles : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        \n    </ul>\n\n    \n</div>\n\n\n\n\n<div class=\"wrap-summary\">\n\n\n    <div class=\"summary-row\">\n        <div class=\"description\">Total Price</div>\n        <div class=\"price\">"
    + alias2((helpers.formatNumeral || (depth0 && depth0.formatNumeral) || alias3).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.multiples : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.totalPriceFormatted : stack1),{"name":"formatNumeral","hash":{},"data":data}))
    + "</div>\n    </div>\n\n    <div class=\"summary-row\">\n        <div class=\"description\">Stake</div>\n        <div class=\"price\">\n            <div class=\"input-group \" >\n\n\n                <input type=\"text\" class=\"form-control input-stake multiple-stake\" \n                name=\"stake-multiples\" placeholder=\"0.00\" \n                data-typeid=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.multiples : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.typeId : stack1), depth0))
    + "\" data-outcomeids=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.multiples : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.outcomeIds : stack1), depth0))
    + "\" \n                value=\""
    + alias2((helpers.formatNumeral || (depth0 && depth0.formatNumeral) || alias3).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.multiples : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.unitStake : stack1),{"name":"formatNumeral","hash":{},"data":data}))
    + "\"\n                tabindex=\"2998\">\n            </div>\n        </div>\n    </div>\n\n\n\n\n    <div class=\"summary-row\">\n        <div class=\"description\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias3).call(depth0,"betSlip.potentialWin",{"name":"t","hash":{},"data":data}))
    + "</div>\n        <div class=\"price\">"
    + alias2(((helper = (helper = helpers.currCode || (depth0 != null ? depth0.currCode : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(depth0,{"name":"currCode","hash":{},"data":data}) : helper)))
    + " "
    + alias2((helpers.formatNumeral || (depth0 && depth0.formatNumeral) || alias3).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.multiples : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.potentialWin : stack1),{"name":"formatNumeral","hash":{},"data":data}))
    + "</div>   \n    </div>\n\n    \n    <div class=\"wrap-buttons\">\n        <div class=\"removeall\"><button type=\"button\" class=\"btn-remove remove-all\" role=\"button\" "
    + ((stack1 = helpers.unless.call(depth0,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.multiples : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.outcomeIds : stack1)) != null ? stack1.length : stack1),{"name":"unless","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias3).call(depth0,"betSlip.removeAll",{"name":"t","hash":{},"data":data}))
    + "</button></div>\n        <div class=\"next\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isLoggedIn : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>\n";
},"2":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            \n\n            <li class=\"status-"
    + alias3(((helper = (helper = helpers.marketStatus || (depth0 != null ? depth0.marketStatus : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"marketStatus","hash":{},"data":data}) : helper)))
    + "\">\n\n\n\n\n                <div class=\"wrap-header\">\n                    \n                    <div>\n                        "
    + alias3(((helper = (helper = helpers.eventDescription || (depth0 != null ? depth0.eventDescription : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"eventDescription","hash":{},"data":data}) : helper)))
    + "\n                    </div>\n                </div>\n\n                <div class=\"wrap-outcome\">\n                    <div class=\"team\"><span>"
    + alias3((helpers.cleanText || (depth0 && depth0.cleanText) || alias1).call(depth0,(depth0 != null ? depth0.outcomeDescription : depth0),(depth0 != null ? depth0.formattedSpread : depth0),{"name":"cleanText","hash":{},"data":data}))
    + "</span> <span class=\""
    + alias3((helpers.isSpreadUpdated || (depth0 && depth0.isSpreadUpdated) || alias1).call(depth0,(depth0 != null ? depth0.outcomeId : depth0),(depth0 != null ? depth0.formattedSpread : depth0),{"name":"isSpreadUpdated","hash":{},"data":data}))
    + "\">"
    + alias3(((helper = (helper = helpers.formattedSpread || (depth0 != null ? depth0.formattedSpread : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"formattedSpread","hash":{},"data":data}) : helper)))
    + "</span></div>\n                    <div class=\"odds\"></div>\n                </div>\n                <div class=\"wrap-details\">\n                    "
    + alias3(((helper = (helper = helpers.marketDescription || (depth0 != null ? depth0.marketDescription : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"marketDescription","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.periodDescription || (depth0 != null ? depth0.periodDescription : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"periodDescription","hash":{},"data":data}) : helper)))
    + "\n                </div>\n                \n                <div class=\"wrap-cover\">\n                    <div>\n                        "
    + alias3((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias1).call(depth0,"ui",(depth0 != null ? depth0.marketStatus : depth0),{"name":"tPrefix","hash":{},"data":data}))
    + "\n                    </div>\n                </div>\n                <div class=\"wrap-remove\">\n                    <a href=\"#\" class=\"remove\" data-outcomeid=\""
    + alias3(((helper = (helper = helpers.outcomeId || (depth0 != null ? depth0.outcomeId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"outcomeId","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"-1\"><i class=\"fa fa-times\"></i></a>\n                </div>\n                \n            </li>\n";
},"4":function(depth0,helpers,partials,data) {
    return "disabled";
},"6":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <button type=\"button\" class=\"btn-next btn-betslip-next\" role=\"button\"  data-betslipmode=\"multiple\"  "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.multiplesNextDisabled : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " tabindex=\"2999\"><span class=\"text\">"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"betSlip.next",{"name":"t","hash":{},"data":data}))
    + "</span> <i class=\"fa fa-spin fa-spinner\"></i></button>\n";
},"8":function(depth0,helpers,partials,data) {
    return "                <button type=\"button\" class=\"btn btn-login\" data-action=\"login\">"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"betSlip.login",{"name":"t","hash":{},"data":data}))
    + "</button>\n";
},"10":function(depth0,helpers,partials,data) {
    return "<div class=\"wrap-selection\">\n    &nbsp;\n    <p style=\"text-align:center;\">\n    "
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"betSlip.addMoreSelection",{"name":"t","hash":{},"data":data}))
    + "\n    </p>\n\n\n</div>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.multiples : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "\n\n\n\n\n";
},"useData":true});
this["MyApp"]["templates"]["betslip-old"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                        <li class=\"status-"
    + alias3(((helper = (helper = helpers.marketStatus || (depth0 != null ? depth0.marketStatus : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"marketStatus","hash":{},"data":data}) : helper)))
    + "\">\n                            <div class=\"wrap-team\">\n                                <div class=\"team\">"
    + alias3(((helper = (helper = helpers.outcomeDescription || (depth0 != null ? depth0.outcomeDescription : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"outcomeDescription","hash":{},"data":data}) : helper)))
    + "</div>\n                                <div>\n                                    <span class=\"odds\">"
    + alias3(((helper = (helper = helpers.priceFormatted || (depth0 != null ? depth0.priceFormatted : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"priceFormatted","hash":{},"data":data}) : helper)))
    + "</span>\n                                    <a href=\"#\" class=\"remove\" data-outcomeid=\""
    + alias3(((helper = (helper = helpers.outcomeId || (depth0 != null ? depth0.outcomeId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"outcomeId","hash":{},"data":data}) : helper)))
    + "\"><i class=\"fa fa-times\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"teams\">"
    + alias3(((helper = (helper = helpers.eventDescription || (depth0 != null ? depth0.eventDescription : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"eventDescription","hash":{},"data":data}) : helper)))
    + "</div>\n                            <div class=\"date\">"
    + alias3((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias1).call(depth0,(depth0 != null ? depth0.eventStartDateTime : depth0),"datetime",{"name":"formatDateTime","hash":{},"data":data}))
    + "</div>\n                            <div class=\"wrap-stake\">\n                                <label for=\"max-bet\">Stake</label>\n                                <div class=\"input-group\">\n                                    <input type=\"text\" id=\"max-bet\" class=\"form-control\" placeholder=\"0.00\" aria-describedby=\"max-bet-label\">\n                                    <span class=\"input-group-addon\">Bet</span>\n                                </div>\n                                <span>Win EUR </span>\n                            </div>\n                            <div class=\"cover\"></div>\n                        </li>\n";
},"3":function(depth0,helpers,partials,data) {
    return "disabled";
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <ul>\n                    \n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.singles : depth0),{"name":"each","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    \n                </ul>\n\n";
},"6":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                        <li>\n                            <div class=\"wrap-team\">\n                                "
    + alias3(((helper = (helper = helpers.marketStatus || (depth0 != null ? depth0.marketStatus : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"marketStatus","hash":{},"data":data}) : helper)))
    + "\n                                <div class=\"team\">"
    + alias3(((helper = (helper = helpers.outcomeDescription || (depth0 != null ? depth0.outcomeDescription : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"outcomeDescription","hash":{},"data":data}) : helper)))
    + "</div>\n                                <div>\n                                    <span class=\"odds\">"
    + alias3(((helper = (helper = helpers.priceFormatted || (depth0 != null ? depth0.priceFormatted : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"priceFormatted","hash":{},"data":data}) : helper)))
    + "</span>\n                                    <a href=\"#\" class=\"remove\" data-outcome=\""
    + alias3(((helper = (helper = helpers.outcomeId || (depth0 != null ? depth0.outcomeId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"outcomeId","hash":{},"data":data}) : helper)))
    + "\"><i class=\"fa fa-times\"></i></a>\n                                </div>\n                            </div>\n                            <div class=\"teams\">"
    + alias3(((helper = (helper = helpers.eventDescription || (depth0 != null ? depth0.eventDescription : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"eventDescription","hash":{},"data":data}) : helper)))
    + "</div>\n                            <div class=\"date\">"
    + alias3(((helper = (helper = helpers.eventStartDateTime || (depth0 != null ? depth0.eventStartDateTime : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"eventStartDateTime","hash":{},"data":data}) : helper)))
    + "</div>\n                            \n                        </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"block-title\">\n    <div class=\"title\">\n        <span>\n            "
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"ui.betslip",{"name":"t","hash":{},"data":data}))
    + "\n        </span>\n    </div>\n    <div class=\"help-icon\"><a href=\"#\" class=\"bet-slip-help\"><i class=\"fa fa-question-circle\"></i></a></div>\n</div>\n\n<div role=\"tabpanel\" class=\"betting-slip-tab\">\n\n    <!-- Nav tabs -->\n    <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\n        <li role=\"presentation\" class=\"active\"><a href=\"#bet-single\" aria-controls=\"bet-single\" role=\"tab\" data-toggle=\"tab\">Single</a></li>\n        <li role=\"presentation\"><a href=\"#bet-parlay\" aria-controls=\"bet-parlay\" role=\"tab\" data-toggle=\"tab\">Parlay</a></li>\n    </ul>\n\n    <!-- Tab panes -->\n    <div class=\"tab-content\">\n        <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"bet-single\">\n\n            <div class=\"wrap-selection\">\n                <div class=\"loading-cover\">\n                    <div>\n                        <i class=\"fa fa-spin fa-spinner\"></i>\n                    </div>\n                </div>\n                <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.singles : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </ul>\n            </div>\n            \n            <div class=\"wrap-total\">\n                <div>EUR 1.00</div>\n                <div>Total Bets</div>\n            </div>\n            <div class=\"wrap-win\">\n                <div>EUR 16.50</div>\n                <div>Potential Win</div>\n            </div>\n            <div class=\"wrap-buttons\">\n                <div><button type=\"button\" class=\"btn-remove remove-all\" role=\"button\" "
    + ((stack1 = helpers.unless.call(depth0,((stack1 = (depth0 != null ? depth0.singles : depth0)) != null ? stack1.length : stack1),{"name":"unless","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Remove All</button></div>\n                <div>\n                    <button type=\"button\" class=\"btn-next\" role=\"button\" disabled>Next</button>\n                </div>\n            </div>\n        </div>\n\n\n        <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"bet-parlay\">\n            <div class=\"wrap-selection\">\n\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.multiples : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n            \n\n            <div class=\"wrap-total\">\n                <div>EUR 1.00</div>\n                <div>Total Bets</div>\n            </div>\n\n            <div class=\"wrap-total\">\n                <div>EUR 1.00</div>\n                <div>Total Bets</div>\n            </div>\n            <div class=\"wrap-win\">\n                <div>EUR 16.50</div>\n                <div>Potential Win</div>\n            </div>\n            <div class=\"wrap-buttons\">\n                <div><button type=\"button\" class=\"btn-remove\" role=\"button\" "
    + ((stack1 = helpers.unless.call(depth0,((stack1 = (depth0 != null ? depth0.singles : depth0)) != null ? stack1.length : stack1),{"name":"unless","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">Remove All</button></div>\n                <div>\n                    <button type=\"button\" class=\"btn-next\" role=\"button\" disabled>Next</button>\n                </div>\n            </div>\n        </div>\n\n    </div> \n\n</div> \n\n";
},"useData":true});
this["MyApp"]["templates"]["betslip-outcomepartial"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                    @ "
    + alias3(((helper = (helper = helpers.priceFormatted || (depth0 != null ? depth0.priceFormatted : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"priceFormatted","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.currencyCode || (depth0 != null ? depth0.currencyCode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"currencyCode","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.formatNumeral || (depth0 && depth0.formatNumeral) || alias1).call(depth0,(depth0 != null ? depth0.unitStake : depth0),{"name":"formatNumeral","hash":{},"data":data}))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"wrap-outcome-details\">\n    <div class=\"wrap-header\">   \n        <div>\n            "
    + alias3(((helper = (helper = helpers.eventDescription || (depth0 != null ? depth0.eventDescription : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"eventDescription","hash":{},"data":data}) : helper)))
    + "\n        </div>\n    </div>\n    <div class=\"wrap-outcome\">\n        <div class=\"team\">\n            <span>\n                "
    + alias3(((helper = (helper = helpers.outcomeDescription || (depth0 != null ? depth0.outcomeDescription : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"outcomeDescription","hash":{},"data":data}) : helper)))
    + "\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.unitStake : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </span></div>\n    </div>\n\n    <div class=\"wrap-details\">\n        "
    + alias3(((helper = (helper = helpers.marketDescription || (depth0 != null ? depth0.marketDescription : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"marketDescription","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.periodDescription || (depth0 != null ? depth0.periodDescription : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"periodDescription","hash":{},"data":data}) : helper)))
    + "\n    </div>\n\n</div>";
},"useData":true});
this["MyApp"]["templates"]["betslip-placed"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"betslip-placed betslip-message\">\n\n    "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.betPlacedSuccess",{"name":"t","hash":{},"data":data}))
    + "\n\n    <div>\n        <button type=\"button\" class=\"btn-betslip-exit\" role=\"button\" >"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.ok",{"name":"t","hash":{},"data":data}))
    + "</button>\n    </div>\n    \n\n</div>\n\n\n";
},"useData":true});
this["MyApp"]["templates"]["betslip-rejected"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "        <div class=\"rejected-message\">"
    + this.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div> \n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"betslip-rejected betslip-message\">\n\n\n    "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.betPlacedReject",{"name":"t","hash":{},"data":data}))
    + "\n\n\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.code : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div>\n        <button type=\"button\" class=\"btn-betslip-exit\" role=\"button\" ><span class=\"text\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.ok",{"name":"t","hash":{},"data":data}))
    + "</span> <i class=\"fa fa-spin fa-spinner\"></i></button>\n    </div>\n    \n</div>\n\n\n";
},"useData":true});
this["MyApp"]["templates"]["betslip-singles"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <li class=\"status-"
    + alias3(((helper = (helper = helpers.marketStatus || (depth0 != null ? depth0.marketStatus : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"marketStatus","hash":{},"data":data}) : helper)))
    + "\">\n\n\n\n\n                <div class=\"wrap-header\">\n                    \n                    <div>\n                        "
    + alias3(((helper = (helper = helpers.eventDescription || (depth0 != null ? depth0.eventDescription : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"eventDescription","hash":{},"data":data}) : helper)))
    + "\n                    </div>\n                </div>\n\n                <div class=\"wrap-outcome\">\n                    <div class=\"team\"><span>"
    + alias3((helpers.cleanText || (depth0 && depth0.cleanText) || alias1).call(depth0,(depth0 != null ? depth0.outcomeDescription : depth0),(depth0 != null ? depth0.formattedSpread : depth0),{"name":"cleanText","hash":{},"data":data}))
    + "</span> <span class=\""
    + alias3((helpers.isSpreadUpdated || (depth0 && depth0.isSpreadUpdated) || alias1).call(depth0,(depth0 != null ? depth0.outcomeId : depth0),(depth0 != null ? depth0.formattedSpread : depth0),{"name":"isSpreadUpdated","hash":{},"data":data}))
    + "\">"
    + alias3(((helper = (helper = helpers.formattedSpread || (depth0 != null ? depth0.formattedSpread : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"formattedSpread","hash":{},"data":data}) : helper)))
    + "</span></div>\n                    <div class=\"odds\"><span class=\""
    + alias3((helpers.isPriceUpdated || (depth0 && depth0.isPriceUpdated) || alias1).call(depth0,(depth0 != null ? depth0.outcomeId : depth0),(depth0 != null ? depth0.priceFormatted : depth0),{"name":"isPriceUpdated","hash":{},"data":data}))
    + "\">"
    + alias3(((helper = (helper = helpers.priceFormatted || (depth0 != null ? depth0.priceFormatted : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"priceFormatted","hash":{},"data":data}) : helper)))
    + "</span></div>\n                <div class=\"wrap-details\">\n                    "
    + alias3(((helper = (helper = helpers.marketDescription || (depth0 != null ? depth0.marketDescription : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"marketDescription","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.periodDescription || (depth0 != null ? depth0.periodDescription : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"periodDescription","hash":{},"data":data}) : helper)))
    + "\n                </div>\n                <div class=\"wrap-single-stake\">\n\n                    <div class=\"stake-form\">\n                        <label>Stake</label>\n                        <div class=\"input-group\" >\n                            <input type=\"text\" class=\"form-control input-stake single-stake stake-"
    + alias3(((helper = (helper = helpers.outcomeId || (depth0 != null ? depth0.outcomeId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"outcomeId","hash":{},"data":data}) : helper)))
    + "\" \n                            name=\"stake-"
    + alias3(((helper = (helper = helpers.outcomeId || (depth0 != null ? depth0.outcomeId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"outcomeId","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"0.00\" \n                            data-typeid=\"1\" data-outcomeid=\""
    + alias3(((helper = (helper = helpers.outcomeId || (depth0 != null ? depth0.outcomeId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"outcomeId","hash":{},"data":data}) : helper)))
    + "\" \n                            value=\""
    + alias3((helpers.formatNumeral || (depth0 && depth0.formatNumeral) || alias1).call(depth0,(depth0 != null ? depth0.unitStake : depth0),{"name":"formatNumeral","hash":{},"data":data}))
    + "\"\n                            tabindex=\""
    + alias3((helpers.tabIndex || (depth0 && depth0.tabIndex) || alias1).call(depth0,(data && data.index),{"name":"tabIndex","hash":{},"data":data}))
    + "\">\n                        </div>\n                    </div>\n                    <div class=\"win-display\">\n                        <label>Win</label>\n                        <div class=\"input-group\" >\n\n                            <input type=\"text\" class=\"form-control input-win\" name=\"stake-"
    + alias3(((helper = (helper = helpers.outcomeId || (depth0 != null ? depth0.outcomeId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"outcomeId","hash":{},"data":data}) : helper)))
    + "\" placeholder=\"0.00\" data-typeid=\"1\" data-outcomeid=\""
    + alias3(((helper = (helper = helpers.outcomeId || (depth0 != null ? depth0.outcomeId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"outcomeId","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias3((helpers.formatNumeral || (depth0 && depth0.formatNumeral) || alias1).call(depth0,(depth0 != null ? depth0.potentialWin : depth0),{"name":"formatNumeral","hash":{},"data":data}))
    + "\" disabled>\n\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"wrap-cover\">\n                    <div>\n                        "
    + alias3((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias1).call(depth0,"ui",(depth0 != null ? depth0.marketStatus : depth0),{"name":"tPrefix","hash":{},"data":data}))
    + "\n                    </div>\n                </div>\n                <div class=\"wrap-remove\">\n                    <a href=\"#\" class=\"remove\" data-outcomeid=\""
    + alias3(((helper = (helper = helpers.outcomeId || (depth0 != null ? depth0.outcomeId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"outcomeId","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"-1\"><i class=\"fa fa-times\"></i></a>\n                </div>\n                \n            </li>\n";
},"3":function(depth0,helpers,partials,data) {
    return "disabled";
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <button type=\"button\" class=\"btn-next btn-betslip-next\" data-betslipmode=\"singles\" role=\"button\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.singlesNextDisabled : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "><span class=\"text\">"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"betSlip.next",{"name":"t","hash":{},"data":data}))
    + "</span> <i class=\"fa fa-spin fa-spinner\"></i></button>\n";
},"7":function(depth0,helpers,partials,data) {
    return "                <button type=\"button\" class=\"btn btn-login\" data-action=\"login\">"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"betSlip.login",{"name":"t","hash":{},"data":data}))
    + "</button>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "<div class=\"wrap-selection\">\n    <div class=\"loading-cover\">\n        <div>\n            <i class=\"fa fa-spin fa-spinner\"></i>\n        </div>\n    </div>\n    <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.singles : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n</div>\n\n<div class=\"wrap-summary\">\n    <div class=\"summary-row\">\n        <div class=\"description\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.totalBets",{"name":"t","hash":{},"data":data}))
    + "</div>\n        <div class=\"price\">"
    + alias2(((helper = (helper = helpers.currCode || (depth0 != null ? depth0.currCode : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"currCode","hash":{},"data":data}) : helper)))
    + " "
    + alias2((helpers.formatNumeral || (depth0 && depth0.formatNumeral) || alias1).call(depth0,(depth0 != null ? depth0.totalBets : depth0),{"name":"formatNumeral","hash":{},"data":data}))
    + "</div>\n    </div>\n\n    <div class=\"summary-row\">\n        <div class=\"description\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.potentialWin",{"name":"t","hash":{},"data":data}))
    + "</div>\n        <div class=\"price\">"
    + alias2(((helper = (helper = helpers.currCode || (depth0 != null ? depth0.currCode : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"currCode","hash":{},"data":data}) : helper)))
    + " "
    + alias2((helpers.formatNumeral || (depth0 && depth0.formatNumeral) || alias1).call(depth0,(depth0 != null ? depth0.potentialWins : depth0),{"name":"formatNumeral","hash":{},"data":data}))
    + "</div>\n    </div>\n\n\n    <div class=\"wrap-buttons\">\n        <div class=\"removeall\"><button type=\"button\" class=\"btn-remove remove-all\" role=\"button\" "
    + ((stack1 = helpers.unless.call(depth0,((stack1 = (depth0 != null ? depth0.singles : depth0)) != null ? stack1.length : stack1),{"name":"unless","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.removeAll",{"name":"t","hash":{},"data":data}))
    + "</button></div>\n        <div class=\"next\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isLoggedIn : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>\n\n";
},"useData":true});
this["MyApp"]["templates"]["betslip-timedout"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"betslip-timedout betslip-message\">\n\n    "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.betSlipTimeout",{"name":"t","hash":{},"data":data}))
    + "\n\n    <div>\n        <button type=\"button\" class=\"btn-betslip-exit\" role=\"button\" >"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"betSlip.ok",{"name":"t","hash":{},"data":data}))
    + "</button>\n    </div>\n    \n</div>\n\n\n";
},"useData":true});
this["MyApp"]["templates"]["betslip"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"help-icon\">\n    <a class=\"bet-slip-icon clear-all"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.isEntryStage : depth0),{"name":"unless","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\"><i class=\"fa fa-trash\"></i></a>\n    <a class=\"bet-slip-icon bet-slip-refresh"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isConfirmationStage : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\"><i class=\"fa fa-refresh\"></i></a>\n  </div>\n";
},"2":function(depth0,helpers,partials,data) {
    return " disabled";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"invalid-message-container\">\n    <div class=\"invalid-message\">\n      <span>\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.selectionCount : depth0),"==",1,{"name":"ifCond","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "      </span>\n    </div>\n  </div>\n";
},"5":function(depth0,helpers,partials,data) {
    return "          Your selection is now unavailable. Please remove it and select another to continue.\n";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.selectionCount : depth0),"==",(depth0 != null ? depth0.invalidSelectionCount : depth0),{"name":"ifCond","hash":{},"fn":this.program(8, data, 0),"inverse":this.program(10, data, 0),"data":data})) != null ? stack1 : "");
},"8":function(depth0,helpers,partials,data) {
    return "            All your selections are now unavailable. Please clear your selections and select another to continue.\n";
},"10":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "            "
    + this.escapeExpression(((helper = (helper = helpers.invalidSelectionCount || (depth0 != null ? depth0.invalidSelectionCount : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"invalidSelectionCount","hash":{},"data":data}) : helper)))
    + " of your selections "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.invalidSelectionCount : depth0),">",1,{"name":"ifCond","hash":{},"fn":this.program(11, data, 0),"inverse":this.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + "\n";
},"11":function(depth0,helpers,partials,data) {
    return "are unavailable. Please remove these selections to continue.";
},"13":function(depth0,helpers,partials,data) {
    return "is unavailable. Please remove it from your selections to continue.";
},"15":function(depth0,helpers,partials,data) {
    return " stage-stake";
},"17":function(depth0,helpers,partials,data) {
    return " exactly-one-bet";
},"19":function(depth0,helpers,partials,data) {
    return "empty";
},"21":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <li class=\"sel "
    + alias3(((helper = (helper = helpers.ref || (depth0 != null ? depth0.ref : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ref","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.outcomeId || (depth0 != null ? depth0.outcomeId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"outcomeId","hash":{},"data":data}) : helper)))
    + " outcome-state-"
    + alias3(((helper = (helper = helpers.outcomeState || (depth0 != null ? depth0.outcomeState : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"outcomeState","hash":{},"data":data}) : helper)))
    + "\" data-ref=\""
    + alias3(((helper = (helper = helpers.ref || (depth0 != null ? depth0.ref : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ref","hash":{},"data":data}) : helper)))
    + "\">\n          <div class=\"sel-head\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].isEntryStage : depths[1]),{"name":"if","hash":{},"fn":this.program(22, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            <span class=\"outcDesc\">"
    + alias3(((helper = (helper = helpers.outcomeDescription || (depth0 != null ? depth0.outcomeDescription : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"outcomeDescription","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.spread : depth0),{"name":"if","hash":{},"fn":this.program(24, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</span>\n            <span class=\"price "
    + alias3(((helper = (helper = helpers.priceDirection || (depth0 != null ? depth0.priceDirection : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"priceDirection","hash":{},"data":data}) : helper)))
    + " flag-"
    + alias3(((helper = (helper = helpers.outcomeState || (depth0 != null ? depth0.outcomeState : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"outcomeState","hash":{},"data":data}) : helper)))
    + "\" data-price=\""
    + alias3(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price","hash":{},"data":data}) : helper)))
    + "\">\n              <span class=\"span-flash\"></span>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.startingPrice : depth0),{"name":"if","hash":{},"fn":this.program(26, data, 0, blockParams, depths),"inverse":this.program(28, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "            </span>\n          </div>\n          <div class=\"sel-body\"> \n            <span class=\"evtDesc\">"
    + alias3(((helper = (helper = helpers.eventDescription || (depth0 != null ? depth0.eventDescription : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"eventDescription","hash":{},"data":data}) : helper)))
    + "</span>\n            <span class=\"mktDesc\">"
    + alias3(((helper = (helper = helpers.marketDescription || (depth0 != null ? depth0.marketDescription : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"marketDescription","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.periodDescription || (depth0 != null ? depth0.periodDescription : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"periodDescription","hash":{},"data":data}) : helper)))
    + "</span>\n            <div class=\"ew-container\">\n              <span class=\"ewterms\">"
    + alias3(((helper = (helper = helpers.placeTerms || (depth0 != null ? depth0.placeTerms : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"placeTerms","hash":{},"data":data}) : helper)))
    + "</span>\n            </div>\n            <div class=\"switch-main-container\">\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depths[1] != null ? depths[1].isConfirmationStage : depths[1]),"||",(depths[1] != null ? depths[1].isStakeStage : depths[1]),{"name":"ifCond","hash":{},"fn":this.program(31, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.showStartingPrice : depth0),{"name":"if","hash":{},"fn":this.program(38, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n"
    + ((stack1 = helpers.unless.call(depth0,(depths[1] != null ? depths[1].exactlyOneBet : depths[1]),{"name":"unless","hash":{},"fn":this.program(49, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].isMultipleSingles : depths[1]),{"name":"if","hash":{},"fn":this.program(51, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n     \n        </li>\n";
},"22":function(depth0,helpers,partials,data) {
    return "              <span class=\"del\">&times;</span>\n";
},"24":function(depth0,helpers,partials,data) {
    var helper;

  return "("
    + this.escapeExpression(((helper = (helper = helpers.spread || (depth0 != null ? depth0.spread : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"spread","hash":{},"data":data}) : helper)))
    + ")";
},"26":function(depth0,helpers,partials,data) {
    return "                SP\n";
},"28":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.price : depth0),{"name":"if","hash":{},"fn":this.program(29, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"29":function(depth0,helpers,partials,data) {
    return "                  "
    + this.escapeExpression((helpers.priceDisplay || (depth0 && depth0.priceDisplay) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.price : depth0),(depth0 != null ? depth0.spread : depth0),{"name":"priceDisplay","hash":{},"data":data}))
    + "\n";
},"31":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depths[2] != null ? depths[2].isSingleKind : depths[2]),{"name":"if","hash":{},"fn":this.program(32, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"32":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.showEachWay : depth0),{"name":"if","hash":{},"fn":this.program(33, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"33":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.eachWay : depth0),{"name":"if","hash":{},"fn":this.program(34, data, 0),"inverse":this.program(36, data, 0),"data":data})) != null ? stack1 : "");
},"34":function(depth0,helpers,partials,data) {
    var helper;

  return "                      <div class=\"switch-container\">\n                        <input data-ref=\""
    + this.escapeExpression(((helper = (helper = helpers.ref || (depth0 != null ? depth0.ref : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"ref","hash":{},"data":data}) : helper)))
    + "\" type=\"checkbox\" class=\"ew-checkbox\" checked=\"checked\">\n                        <label>EW</label>\n                      </div>\n";
},"36":function(depth0,helpers,partials,data) {
    var helper;

  return "                      <div class=\"switch-container\">\n                        <input data-ref=\""
    + this.escapeExpression(((helper = (helper = helpers.ref || (depth0 != null ? depth0.ref : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"ref","hash":{},"data":data}) : helper)))
    + "\" type=\"checkbox\" class=\"ew-checkbox\">\n                        <label>EW</label>\n                      </div>\n";
},"38":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifNullId || (depth0 && depth0.ifNullId) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.priceId : depth0),{"name":"ifNullId","hash":{},"fn":this.program(39, data, 0),"inverse":this.program(41, data, 0),"data":data})) != null ? stack1 : "");
},"39":function(depth0,helpers,partials,data) {
    var helper;

  return "                  <div class=\"switch-container\">\n                    <input data-ref=\""
    + this.escapeExpression(((helper = (helper = helpers.ref || (depth0 != null ? depth0.ref : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"ref","hash":{},"data":data}) : helper)))
    + "\" type=\"checkbox\" class=\"sp-checkbox\" checked=\"checked\" disabled=\"disabled\">\n                    <label>SP</label>\n                  </div>\n";
},"41":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.startingPrice : depth0),{"name":"if","hash":{},"fn":this.program(42, data, 0),"inverse":this.program(44, data, 0),"data":data})) != null ? stack1 : "");
},"42":function(depth0,helpers,partials,data) {
    var helper;

  return "                    <div class=\"switch-container\">\n                      <input data-ref=\""
    + this.escapeExpression(((helper = (helper = helpers.ref || (depth0 != null ? depth0.ref : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"ref","hash":{},"data":data}) : helper)))
    + "\" type=\"checkbox\" class=\"sp-checkbox\" checked=\"checked\">\n                      <label>SP</label>\n                    </div>\n";
},"44":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.price : depth0),{"name":"if","hash":{},"fn":this.program(45, data, 0),"inverse":this.program(47, data, 0),"data":data})) != null ? stack1 : "");
},"45":function(depth0,helpers,partials,data) {
    var helper;

  return "                      <div class=\"switch-container\">\n                        <input data-ref=\""
    + this.escapeExpression(((helper = (helper = helpers.ref || (depth0 != null ? depth0.ref : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"ref","hash":{},"data":data}) : helper)))
    + "\" type=\"checkbox\" class=\"sp-checkbox\">\n                        <label>SP</label>\n                      </div>\n";
},"47":function(depth0,helpers,partials,data) {
    var helper;

  return "                      <div class=\"switch-container\">\n                        <input data-ref=\""
    + this.escapeExpression(((helper = (helper = helpers.ref || (depth0 != null ? depth0.ref : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"ref","hash":{},"data":data}) : helper)))
    + "\" type=\"checkbox\" class=\"sp-checkbox\" checked=\"checked\">\n                        <label>SP</label>\n                      </div>\n";
},"49":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=this.escapeExpression, alias2=helpers.helperMissing;

  return "              <div class=\"single-stake-container\">\n                <span class=\"stake-span\">Stake :</span>\n                <input type=\"text\" class=\"single-stake-input\" placeholder=\"0\" maxlength=\"9\" data-ref=\""
    + alias1(this.lambda((depths[1] != null ? depths[1].ref : depths[1]), depth0))
    + "\" value=\""
    + alias1((helpers.formatStakeInput || (depth0 && depth0.formatStakeInput) || alias2).call(depth0,(helpers.getSinglesLastValue || (depth0 && depth0.getSinglesLastValue) || alias2).call(depth0,(data && data.index),{"name":"getSinglesLastValue","hash":{},"data":data}),{"name":"formatStakeInput","hash":{},"data":data}))
    + "\"/>\n              </div>\n";
},"51":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "              <div class=\"single-potentials\">\n                <div class=\"single-potential-stake\">\n                  <span>Stake: </span><span>"
    + alias2((helpers.formatCurrency || (depth0 && depth0.formatCurrency) || alias1).call(depth0,(depths[1] != null ? depths[1].unitStake : depths[1]),{"name":"formatCurrency","hash":{},"data":data}))
    + "</span>\n                </div>\n                <div class=\"single-potential-returns\">\n                  <span>Potential Returns: </span>\n                  <span>"
    + alias2((helpers.formatCurrency || (depth0 && depth0.formatCurrency) || alias1).call(depth0,(helpers.getMultipleSinglePotentials || (depth0 && depth0.getMultipleSinglePotentials) || alias1).call(depth0,(depth0 != null ? depth0.price : depth0),(depths[1] != null ? depths[1].potentialReturns : depths[1]),{"name":"getMultipleSinglePotentials","hash":{},"data":data}),{"name":"formatCurrency","hash":{},"data":data}))
    + "</span>\n                </div>\n              </div>\n";
},"53":function(depth0,helpers,partials,data) {
    return "single";
},"55":function(depth0,helpers,partials,data) {
    return "accumulator";
},"57":function(depth0,helpers,partials,data) {
    return "special";
},"59":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <ul class=\"ulsys"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.allSelectionsValid : depth0),{"name":"unless","hash":{},"fn":this.program(60, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"special-tabs\">\n          <li class=\"single\" data-ref=\"\" data-kind=\"SINGLES\">\n            <div class=\"main button\" tabindex=\"-1\" id=\"\">\n              <span class=\"desc\">"
    + this.escapeExpression((helpers.getBetDescription || (depth0 && depth0.getBetDescription) || helpers.helperMissing).call(depth0,"Single",(depth0 != null ? depth0.numberOfSelections : depth0),{"name":"getBetDescription","hash":{},"data":data}))
    + "</span>\n            </div>\n          </li>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.multipleBet : depth0),{"name":"if","hash":{},"fn":this.program(62, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.systems : depth0),{"name":"each","hash":{},"fn":this.program(65, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n";
},"60":function(depth0,helpers,partials,data) {
    return " has-invalid-selections";
},"62":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['with'].call(depth0,(depth0 != null ? depth0.multipleBet : depth0),{"name":"with","hash":{},"fn":this.program(63, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"63":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "              <li class=\"mult\" data-ref=\""
    + alias3(((helper = (helper = helpers.ref || (depth0 != null ? depth0.ref : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ref","hash":{},"data":data}) : helper)))
    + "\"  data-kind=\"MULTIPLES\">   \n                <div class=\"main button\" tabindex=\"-1\" id=\""
    + alias3(((helper = (helper = helpers.ref || (depth0 != null ? depth0.ref : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ref","hash":{},"data":data}) : helper)))
    + "\">\n                  <span class=\"desc\">"
    + alias3((helpers.getBetDescription || (depth0 && depth0.getBetDescription) || alias1).call(depth0,(depth0 != null ? depth0.description : depth0),(depth0 != null ? depth0.noOfBets : depth0),{"name":"getBetDescription","hash":{},"data":data}))
    + "</span>\n                </div>\n              </li>\n";
},"65":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <li class=\"sys\" data-ref=\""
    + alias3(((helper = (helper = helpers.ref || (depth0 != null ? depth0.ref : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ref","hash":{},"data":data}) : helper)))
    + "\"  data-kind=\"SYSTEMS\">\n              <div class=\"main button "
    + alias3(((helper = (helper = helpers.ref || (depth0 != null ? depth0.ref : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ref","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"-1\" id=\""
    + alias3(((helper = (helper = helpers.ref || (depth0 != null ? depth0.ref : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"ref","hash":{},"data":data}) : helper)))
    + "\">\n                <span class=\"desc\">"
    + alias3((helpers.getBetDescription || (depth0 && depth0.getBetDescription) || alias1).call(depth0,(depth0 != null ? depth0.description : depth0),(depth0 != null ? depth0.noOfBets : depth0),{"name":"getBetDescription","hash":{},"data":data}))
    + "</span>\n              </div>\n            </li>\n";
},"67":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.isStakeStage : depth0),{"name":"unless","hash":{},"fn":this.program(68, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"68":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "      <div class=\"potential-wrapper\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.allSelectionsValid : depth0),{"name":"if","hash":{},"fn":this.program(69, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        <div class=\"c-controls\">\n          <a class=\"button c-enter"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.allSelectionsValid : depth0),{"name":"unless","hash":{},"fn":this.program(76, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">Send Bets</a>\n          <a class=\"button c-back\">Back</a>\n        </div>\n      </div>\n";
},"69":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "          <div class=\"type-description-container\">\n"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.isSingleKind : depth0),{"name":"unless","hash":{},"fn":this.program(70, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            <span class=\"bet-type-description\">"
    + alias2(((helper = (helper = helpers.selectedBetType || (depth0 != null ? depth0.selectedBetType : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"selectedBetType","hash":{},"data":data}) : helper)))
    + "</span>\n          </div>\n          <div class=\"returns\">\n            <div class=\"potential-returns"
    + alias2((helpers.hasChanged || (depth0 && depth0.hasChanged) || alias1).call(depth0,(depth0 != null ? depth0.totalStake : depth0),{"name":"hasChanged","hash":{},"data":data}))
    + "\">\n              <span>Total Bet:</span>\n              <span class=\"returnsvalue\">"
    + alias2((helpers.formatCurrency || (depth0 && depth0.formatCurrency) || alias1).call(depth0,(depth0 != null ? depth0.totalStake : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</span>\n            </div>\n            <div class=\"potential-returns"
    + alias2((helpers.hasChanged || (depth0 && depth0.hasChanged) || alias1).call(depth0,(depth0 != null ? depth0.potentialReturns : depth0),{"name":"hasChanged","hash":{},"data":data}))
    + "\">\n              <span>Potential Returns:</span>\n              <span class=\"returnsvalue\">"
    + alias2((helpers.formatCurrency || (depth0 && depth0.formatCurrency) || alias1).call(depth0,(depth0 != null ? depth0.potentialReturns : depth0),{"name":"formatCurrency","hash":{},"data":data}))
    + "</span>\n            </div>\n          </div>\n";
},"70":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].showEachWaySpecial : depths[1]),{"name":"if","hash":{},"fn":this.program(71, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"71":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "                <div class=\"switch-main-container\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depths[2] != null ? depths[2].eachWaySpecial : depths[2]),{"name":"if","hash":{},"fn":this.program(72, data, 0, blockParams, depths),"inverse":this.program(74, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                </div>\n";
},"72":function(depth0,helpers,partials,data) {
    var helper;

  return "                    <div class=\"switch-container\">\n                      <input data-ref=\""
    + this.escapeExpression(((helper = (helper = helpers.ref || (depth0 != null ? depth0.ref : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"ref","hash":{},"data":data}) : helper)))
    + "\" type=\"checkbox\" class=\"ew-checkbox\" checked=\"checked\" disabled=\"disabled\">\n                      <label>EW</label>\n                    </div>\n";
},"74":function(depth0,helpers,partials,data) {
    var helper;

  return "                    <div class=\"switch-container\">\n                      <input data-ref=\""
    + this.escapeExpression(((helper = (helper = helpers.ref || (depth0 != null ? depth0.ref : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"ref","hash":{},"data":data}) : helper)))
    + "\" type=\"checkbox\" class=\"ew-checkbox\" disabled=\"disabled\">\n                      <label>EW</label>\n                    </div>\n";
},"76":function(depth0,helpers,partials,data) {
    return " c-disabled";
},"78":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].showEachWaySpecial : depths[1]),{"name":"if","hash":{},"fn":this.program(79, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"79":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "            <div class=\"switch-main-container\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depths[2] != null ? depths[2].eachWaySpecial : depths[2]),{"name":"if","hash":{},"fn":this.program(80, data, 0, blockParams, depths),"inverse":this.program(82, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "            </div>\n";
},"80":function(depth0,helpers,partials,data) {
    var helper;

  return "                <div class=\"switch-container\">\n                  <input data-ref=\""
    + this.escapeExpression(((helper = (helper = helpers.ref || (depth0 != null ? depth0.ref : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"ref","hash":{},"data":data}) : helper)))
    + "\" type=\"checkbox\" class=\"ew-checkbox\" checked=\"checked\">\n                  <label>EW</label>\n                </div>\n";
},"82":function(depth0,helpers,partials,data) {
    var helper;

  return "                <div class=\"switch-container\">\n                  <input data-ref=\""
    + this.escapeExpression(((helper = (helper = helpers.ref || (depth0 != null ? depth0.ref : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"ref","hash":{},"data":data}) : helper)))
    + "\" type=\"checkbox\" class=\"ew-checkbox\">\n                  <label>EW</label>\n                </div>\n";
},"84":function(depth0,helpers,partials,data) {
    var helper;

  return "            "
    + this.escapeExpression(((helper = (helper = helpers.selectedBetType || (depth0 != null ? depth0.selectedBetType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"selectedBetType","hash":{},"data":data}) : helper)))
    + "\n";
},"86":function(depth0,helpers,partials,data) {
    return "            &nbsp;\n";
},"88":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <a class=\"button c-quote"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.allSelectionsValid : depth0),{"name":"unless","hash":{},"fn":this.program(76, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">Quote Bet</a>\n";
},"90":function(depth0,helpers,partials,data) {
    return "        <a class=\"button c-login\">Log In</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.numberOfSelections : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.allSelectionsValid : depth0),{"name":"unless","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"betslip-stages kind-"
    + alias3(((helper = (helper = helpers.currentKind || (depth0 != null ? depth0.currentKind : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"currentKind","hash":{},"data":data}) : helper)))
    + " stage-"
    + alias3(((helper = (helper = helpers.currentStage || (depth0 != null ? depth0.currentStage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"currentStage","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isStakeStage : depth0),{"name":"if","hash":{},"fn":this.program(15, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.exactlyOneBet : depth0),{"name":"if","hash":{},"fn":this.program(17, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n  <div class=\"selections "
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.numberOfSelections : depth0),{"name":"unless","hash":{},"fn":this.program(19, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"selections\"> \n    <ul class=\"selected-outcomes\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.singles : depth0),{"name":"each","hash":{},"fn":this.program(21, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n    <div class=\"betslip-control "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isSingleKind : depth0),{"name":"if","hash":{},"fn":this.program(53, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isMultipleKind : depth0),{"name":"if","hash":{},"fn":this.program(55, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isSystemKind : depth0),{"name":"if","hash":{},"fn":this.program(57, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isEntryStage : depth0),{"name":"if","hash":{},"fn":this.program(59, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isConfirmationStage : depth0),{"name":"if","hash":{},"fn":this.program(67, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  <div class=\"calculator\">\n    <div class=\"global-stake-container\">\n      <div class=\"type-description-container\">\n"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.isSingleKind : depth0),{"name":"unless","hash":{},"fn":this.program(78, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        <span class=\"bet-type-description\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.selectedBetType : depth0),{"name":"if","hash":{},"fn":this.program(84, data, 0, blockParams, depths),"inverse":this.program(86, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "        </span>\n      </div>\n      <span class=\"stake-span\">Stake :</span><input type=\"text\" id=\"stake-input\" placeholder=\"0\" maxlength=\"9\" value=\""
    + alias3((helpers.formatStakeInput || (depth0 && depth0.formatStakeInput) || alias1).call(depth0,(depth0 != null ? depth0.lastStakeValue : depth0),"0,0",{"name":"formatStakeInput","hash":{},"data":data}))
    + "\" />\n    </div>\n    <div class=\"c-controls\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isLoggedIn : depth0),{"name":"if","hash":{},"fn":this.program(88, data, 0, blockParams, depths),"inverse":this.program(90, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "      <a class=\"button c-cancel\">Cancel</a>\n    </div>\n  </div>\n</div>\n";
},"useData":true,"useDepths":true});
this["MyApp"]["templates"]["empty-league"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "		"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"sports.searchnoresult",{"name":"t","hash":{},"data":data}))
    + "\n\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "	"
    + this.escapeExpression(((helper = (helper = helpers.sectionCode || (depth0 != null ? depth0.sectionCode : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"sectionCode","hash":{},"data":data}) : helper)))
    + "\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.section : depth0),"===","sports",{"name":"ifCond","hash":{},"fn":this.program(4, data, 0),"inverse":this.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(depth0,helpers,partials,data) {
    return "			"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"sports.noavailabledate",{"name":"t","hash":{},"data":data}))
    + "\n";
},"6":function(depth0,helpers,partials,data) {
    return "			"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"sports.noavailable",{"name":"t","hash":{},"data":data}))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"loading no-market\">\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.section : depth0),"===","search",{"name":"ifCond","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
this["MyApp"]["templates"]["error"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"backdrop\"></div>\n<div class=\"error\">\n	\n	"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,(depth0 != null ? depth0.errorMsg : depth0),{"name":"t","hash":{},"data":data}))
    + " <a class=\"btn retry-now\" >"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"errors.retry",{"name":"t","hash":{},"data":data}))
    + "</a>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["favorite-item"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<li>\n	<a class=\"nav-link-fav\" data-code=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.code : stack1), depth0))
    + "\" data-url=\""
    + alias2((helpers.formatMyfavUrl || (depth0 && depth0.formatMyfavUrl) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.item : depth0),{"name":"formatMyfavUrl","hash":{},"data":data}))
    + "\" title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.description : stack1), depth0))
    + "\" >\n		<span>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.description : stack1), depth0))
    + "</span>\n	</a>\n	<a class=\"ico-remove\" data-code=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.code : stack1), depth0))
    + "\"><i class=\"icon fa fa-close\"></i></a>\n</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0,((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.isLive : stack1),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["MyApp"]["templates"]["footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"footer\">\n    <div class=\"wrapper-main footer-contents\">\n        <div class=\"fcontent fcopy\">\n            <img src=\"/assets/images/brand.png\" class=\"brand\">\n            <p>"
    + ((stack1 = this.lambda((depth0 != null ? depth0.cyear : depth0), depth0)) != null ? stack1 : "")
    + " "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"footer.trademark",{"name":"t","hash":{},"data":data}))
    + "</p>\n        </div>\n        <div class=\"fcontent flinks\">\n            <div class=\"fc-title\">Footer Links</div>\n            <div class=\"multi-link\">\n                <ul>\n                    <li><a class=\"flink default\" data-url=\"/msw_assets/content/about.html\" data-type=\"modal\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"static.about",{"name":"t","hash":{},"data":data}))
    + "</a></li>\n                    <li><a class=\"flink default\" data-url=\"/msw_assets/content/contact.html\" data-type=\"modal\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"static.contact",{"name":"t","hash":{},"data":data}))
    + "</a></li>\n                    <li><a class=\"flink default\" data-url=\"/msw_assets/content/faqs.html\" data-type=\"modal\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"static.faq",{"name":"t","hash":{},"data":data}))
    + "</a></li>\n                    <li><a class=\"flink default\" data-url=\"https://media.megasportsworld.com/training-videos.php\" data-type=\"modal\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"static.tutorials",{"name":"t","hash":{},"data":data}))
    + "</a></li>\n                    <li><a class=\"flink default\" data-url=\"/msw_assets/content/howtofund.html\" data-type=\"modal\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"static.fund",{"name":"t","hash":{},"data":data}))
    + "</a></li>\n                    <li><a class=\"flink default\" data-url=\"/msw_assets/content/terms.html\" data-type=\"modal\" >"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"static.terms",{"name":"t","hash":{},"data":data}))
    + "</a></li>\n                    <li><a class=\"flink default\" data-url=\"/msw_assets/content/responsiblegaming.html\" data-type=\"modal\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"static.responsible",{"name":"t","hash":{},"data":data}))
    + "</a></li>\n                    <li><a class=\"flink default\" data-url=\"/msw_assets/content/security.html\" data-type=\"modal\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"static.security",{"name":"t","hash":{},"data":data}))
    + "</a></li>\n                    <!--li><a class=\"flink\" data-url=\"/msw_assets/content/disclaimer.html\" data-type=\"modal\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"static.disclaimer",{"name":"t","hash":{},"data":data}))
    + "</a></li-->\n                    <!--<li><a class=\"flink default\" data-url=\"/msw_assets/content/sportsrule.html\" data-type=\"modal\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"static.sportsrule",{"name":"t","hash":{},"data":data}))
    + "</a></li>-->\n                </ul>\n            </div>\n        </div>\n        <div class=\"fcontent faffiliates\">\n            <a href=\"http://www.asianlogic.com/\" target=\"_blank\"><img class=\"footer-logos\" src=\"/assets/images/foot-asl-logo.png\" /></a>\n            <a href=\"http://www.pagcor.ph/\" target=\"_blank\"><img class=\"footer-logos\" src=\"/assets/images/foot-pagcor-logo.png\" /></a>\n            <img class=\"footer-logos\" src=\"/assets/images/foot-ocvi-logo.png\" />\n        </div>\n        <div class=\"fcontent fsocial\">\n            <div class=\"fc-title\">Follow us</div>\n            <div class=\"social-link\">\n                <a href=\""
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"footer.fblink",{"name":"t","hash":{},"data":data}))
    + "\" target=\"_blank\"><i class=\"fa fa-facebook-square\"></i>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"footer.fb",{"name":"t","hash":{},"data":data}))
    + "</a>\n                <a href=\""
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"footer.twitlink",{"name":"t","hash":{},"data":data}))
    + "\" target=\"_blank\"><i class=\"fa fa-twitter-square\"></i>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"footer.twit",{"name":"t","hash":{},"data":data}))
    + "</a>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["header-nav"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"header-middle\">\n    <div class=\"wrapper-main\">\n        <ul class=\"nav-list-product\">\n            <li><a class=\"nav-main\" data-url=\"/sports/\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.sports",{"name":"t","hash":{},"data":data}))
    + "</a></li>\n            <li><a class=\"nav-main\" data-url=\"/live\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.liveSports",{"name":"t","hash":{},"data":data}))
    + "</a></li>\n            <li><a class=\"nav-main\" data-url=\"/virtual\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.virtualSports",{"name":"t","hash":{},"data":data}))
    + "</a></li>\n        </ul>\n    </div> \n</div>\n\n<div class=\"header-bottom\">\n    <div class=\"wrapper-main\">\n        <ul class=\"nav-list-main\">\n            <li><a class=\"nav-main default\" data-url=\"/\" data-type=\"link\"> <i class=\"fa fa-home\"></i></a></li>\n            <li><a class=\"nav-main default\" data-url=\"/locator\" data-type=\"link\"> "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.locator",{"name":"t","hash":{},"data":data}))
    + "</a></li>\n            <li><a class=\"nav-main default\" data-url=\"/results\" data-type=\"link\"> Sports Results</a></li>\n            <li><a class=\"nav-main default\" data-url=\"https://media.megasportsworld.com/training-videos.php\" data-type=\"modal\"> "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.howtobet",{"name":"t","hash":{},"data":data}))
    + "</a></li>\n            <li><a class=\"nav-main default\" data-url=\"/msw_assets/content/contact.html\" data-type=\"modal\"> "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"static.contact",{"name":"t","hash":{},"data":data}))
    + "</a></li>\n        </ul>\n    </div> \n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["header-news"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"header-bottom-sub\">\n    <div class=\"wrapper-main\">\n        <div class=\"wrapper-news\">\n            <span><a href=\"#\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.news",{"name":"t","hash":{},"data":data}))
    + "</a> :</span>\n            <span class=\"news-slidebox\"><span >"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.loading",{"name":"t","hash":{},"data":data}))
    + "</span></span>\n        </div>\n        <div class=\"wrapper-search\">\n            <form action=\"/search\" method=\"get\" id=\"search-form\">\n                <div class=\"input-group\">\n                    <input type=\"text\" name=\"q\" placeholder=\""
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.search",{"name":"t","hash":{},"data":data}))
    + "\" value=\""
    + alias2(((helper = (helper = helpers.searchTerm || (depth0 != null ? depth0.searchTerm : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"searchTerm","hash":{},"data":data}) : helper)))
    + "\">\n                    <span class=\"input-group-btn\">\n                        <button type=\"submit\" class=\"btn-search\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n                    </span>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["header-top"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "            <div class=\"myaccount user-in\">\n                <div>\n                    <div class=\"hello-user\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.hello",{"name":"t","hash":{},"data":data}))
    + ", "
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.getFirstName : stack1), depth0))
    + "!</div>\n                    <div class=\"input-group\">\n                        <a class=\"default btn-deposit\" data-url=\"/msw_assets/content/howtofund.html\" data-type=\"modal\"><i class=\"fa fa-plus\"></i></a>\n                        <span id=\"account_balance\" class=\"balance text-right\">"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.getCurrencyCode : stack1), depth0))
    + " "
    + alias2((helpers.formatNumeral || (depth0 && depth0.formatNumeral) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.getBalance : stack1),{"name":"formatNumeral","hash":{},"data":data}))
    + "</span>\n                        <span id=\"refresh_balance\" class=\"btn-refresh-balance\"><i class=\"fa fa-refresh\"></i></span>\n                    </div>\n                    <button type=\"submit\" class=\"btn-dark btn-logout\" role=\"button\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.logout",{"name":"t","hash":{},"data":data}))
    + " <i class=\"fa fa-unlock-alt\"></i></button>\n                </div>\n                <div>\n                    <ul class=\"myaccount-links\">\n                        <li><a class=\"nav-main\" data-url=\"/mybets\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.mybets",{"name":"t","hash":{},"data":data}))
    + "</a></li>\n                        <li><a class=\"nav-main\" data-url=\"/mystatements\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.mystatements",{"name":"t","hash":{},"data":data}))
    + "</a></li>\n                        <li><a class=\"nav-main\" data-url=\"/myaccount\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.myaccount",{"name":"t","hash":{},"data":data}))
    + "</a></li>\n                        <li><a class=\"nav-main\" href=\"/changepassword\" data-url=\"/changepassword\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"password.changeMyPassword",{"name":"t","hash":{},"data":data}))
    + "</a></li>\n                    </ul>\n                </div>\n            </div>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "            <div class=\"myaccount user-out\">\n                <form id=\"form_login\" autocomplete=\"off\">\n                    <div>\n                        <div class=\"wrap-input\">\n                            <input type=\"text\" id=\"input_username\" name=\"username\" placeholder=\""
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.username",{"name":"t","hash":{},"data":data}))
    + "\" value=\""
    + alias2(this.lambda(((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.getAccountName : stack1), depth0))
    + "\" autocomplete=\"false\">\n                        </div>\n                        <div class=\"wrap-input\">\n                            <input type=\"password\" id=\"input_password\" name=\"password\" placeholder=\""
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.password",{"name":"t","hash":{},"data":data}))
    + "\" autocomplete=\"false\" value=\"\">\n                        </div>\n                        <button id=\"btn_login\" type=\"submit\" class=\"btn-login\" role=\"button\"  >"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.login",{"name":"t","hash":{},"data":data}))
    + " <i class=\"fa fa-lock\"></i></button>\n                        <a class=\"nav-main btn-register\" data-url=\"/register\" role=\"button\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.registernow",{"name":"t","hash":{},"data":data}))
    + "</a></label>\n                    </div>\n                    <div>\n                        <label for=\"cbRememberMe\" class=\"lbl-for-cb\"><input type=\"checkbox\" id=\"cbRememberMe\" name=\"rememberMe\" "
    + alias2((helpers.isChecked || (depth0 && depth0.isChecked) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.getRememberMe : stack1),{"name":"isChecked","hash":{},"data":data}))
    + " class=\"rememberMe\" /> "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.rememberMe",{"name":"t","hash":{},"data":data}))
    + "</label>\n                        <a class=\"nav-main password-forgot\" data-url=\"/forgotpassword\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"account.forgotpassword",{"name":"t","hash":{},"data":data}))
    + "</a>\n                    </div>\n                </form>\n            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"header-top\">\n    \n    <div class=\"wrapper-main\">\n        <a data-url=\"/\" class=\"nav-main\" >\n            <img src=\"/assets/images/brand.png\" class=\"brand\">\n        </a>\n\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.account : depth0)) != null ? stack1.isLoggedIn : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "        \n    </div> \n    <!--div class=\"header-slope\"></div-->\n    <div class=\"header-bg\">"
    + this.escapeExpression((helpers.getBanner || (depth0 && depth0.getBanner) || helpers.helperMissing).call(depth0,"header-banner",{"name":"getBanner","hash":{},"data":data}))
    + "</div>\n</div>\n";
},"useData":true});
this["MyApp"]["templates"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"top-section\">\n"
    + ((stack1 = this.invokePartial(partials['ui/header-top'],depth0,{"name":"ui/header-top","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n\n<div class=\"nav-section\">\n"
    + ((stack1 = this.invokePartial(partials['ui/header-nav'],depth0,{"name":"ui/header-nav","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n\n<div class=\"news-section\">\n"
    + ((stack1 = this.invokePartial(partials['ui/header-news'],depth0,{"name":"ui/header-news","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["home-banner"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<a class=\"default\" data-type=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" data-url=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" ><img src=\""
    + alias3(((helper = (helper = helpers.file || (depth0 != null ? depth0.file : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"file","hash":{},"data":data}) : helper)))
    + "\" class=\"sub-banner-btn\"  data-multi=\""
    + alias3(((helper = (helper = helpers.multi || (depth0 != null ? depth0.multi : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"multi","hash":{},"data":data}) : helper)))
    + "\" alt=\"\"></a>";
},"useData":true});
this["MyApp"]["templates"]["home-slider"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<a class=\"default\" data-url=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" data-type=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" ><img src=\""
    + alias3(((helper = (helper = helpers.file || (depth0 != null ? depth0.file : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"file","hash":{},"data":data}) : helper)))
    + "\"  data-multi=\""
    + alias3(((helper = (helper = helpers.multi || (depth0 != null ? depth0.multi : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"multi","hash":{},"data":data}) : helper)))
    + "\" class=\"hero-banner-btn\" /></a>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "<div id=\""
    + this.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-ride=\"carousel\" data-interval=\"false\" class=\"carousel slide cl-right\">\n<ol class=\"carousel-indicators\">\n  "
    + ((stack1 = (helpers.getBannerSet || (depth0 && depth0.getBannerSet) || alias1).call(depth0,(depth0 != null ? depth0.id : depth0),"indicator",{"name":"getBannerSet","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n</ol>\n<div class=\"carousel-inner\">\n  "
    + ((stack1 = (helpers.getBannerSet || (depth0 && depth0.getBannerSet) || alias1).call(depth0,(depth0 != null ? depth0.id : depth0),"banner",{"name":"getBannerSet","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["iframe"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"iframe-container\">\n    <iframe class=\"common-frame\" scrolling=\"auto\" src=\""
    + ((stack1 = ((helper = (helper = helpers.frameUrl || (depth0 != null ? depth0.frameUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"frameUrl","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\"></iframe>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["layout"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"wrapper-main\">\n	<div class=\"sports-nav\">\n		\n\n\n	</div> \n</div>\n\n<div class=\"wrapper-main\">\n	<div class=\"panel-container\"> \n		<div class=\"panel-left\">\n		    <nav class=\"events-block\">\n				<div class=\"nav-group nav-virtual-links\"></div>\n					\n				<div class=\"nav-group nav-quick-links\"></div>\n\n				<div class=\"nav-group nav-my-favorites\"></div>\n\n		    	<div class=\"nav-group nav-sports-tree\"></div>\n\n				<div class=\"nav-group nav-other\"></div>\n\n				<!--div class=\"virtual-countdown\"></div-->\n				\n		    </nav>\n		</div>\n		<div class=\"panel-main\"></div>\n		<div class=\"panel-right\">\n		    <div class=\"betting-slip-block\"></div>\n		    <div class=\"virtual-sports-block\"></div>\n			<div class=\"twitter-feed\">\n			    <div class=\"block-title\">\n				    <div class=\"title\">\n				        <span>Twitter Feed</span>\n				    </div>\n				</div>\n\n\n			    <div class=\"wrap-content\">\n			        <a class=\"twitter-timeline\" \n			        data-chrome=\"noheader nofooter\" \n					data-link-color=\"#FF9E3D\"\n					data-tweet-limit=\"10\"\n			        href=\"https://twitter.com/megasportsworld\" data-widget-id=\"598077501701693440\">Tweets by @megasportsworld</a>\n<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script>\n			    </div>\n			</div>\n\n			\n\n			<div class=\"sports-news\">\n			    <div class=\"block-title\">\n				    <div class=\"title\">\n				        <span>"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"ui.sportsNews",{"name":"t","hash":{},"data":data}))
    + "</span>\n				    </div>\n				</div>\n\n\n			    <div class=\"wrap-content\">\n			        <ul class=\"sports-news-container\">\n			        </ul>\n			    </div>\n			</div>\n\n		    <aside class=\"advertisement\"></aside>\n		</div>\n	</div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["loading"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"loading\">\n    <i class=\"fa fa-spin fa-spinner\"></i> "
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"Loading...",{"name":"t","hash":{},"data":data}))
    + "\n</div>";
},"useData":true});
this["MyApp"]["templates"]["locator"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"wrapper-main\">\n<div class=\"locator-panel panel-container\">\n		<div class=\"panel-main\">\n			<div class=\"section-block\">\n			    <!-- start: title -->\n			    <div class=\"section-title block-title\">\n			        <div class=\"title\"><span>"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.title : depth0),{"name":"t","hash":{},"data":data}))
    + "</span></div>\n			    </div>\n			    <!-- end: title -->\n\n			    <!-- start: content -->\n			    <div class=\"section-container\">\n			    	<iframe id=\"branch-locator\" class=\"branch-locator\" src=\"//media.megasportsworld.com/branch-locator/\"></iframe>\n			    </div>\n			    <!-- end: content -->\n			</div>\n\n		</div>\n\n</div>";
},"useData":true});
this["MyApp"]["templates"]["modal-popup"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"liveBet.message",{"name":"t","hash":{},"data":data}))
    + "</div>\n<br />\n<div>Tel. No. : "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"liveBet.telNumber",{"name":"t","hash":{},"data":data}))
    + "</div>\n<!--div>MSW Support : "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"liveBet.mswSupport",{"name":"t","hash":{},"data":data}))
    + "</div-->";
},"useData":true});
this["MyApp"]["templates"]["modal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "data-backdrop=\"static\" data-keyboard=\"false\"";
},"3":function(depth0,helpers,partials,data) {
    return "        <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\"><i class=\"fa fa-times\"></i></span></button>\n";
},"5":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "      <div class=\"modal-footer\">\n        <div id=\"errorMsgContainer\" class=\"form-group hidden\">\n            <!--label>&nbsp;</label-->\n            <div id=\"errorMsg\" class=\"text-danger\"></div>\n        </div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].showCloseButton : depths[1]),{"name":"if","hash":{},"fn":this.program(6, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(depth0,(depths[1] != null ? depths[1].actions : depths[1]),{"name":"each","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\n";
},"6":function(depth0,helpers,partials,data) {
    return "          <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"modal.close",{"name":"t","hash":{},"data":data}))
    + "</button>\n";
},"8":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "          <button type=\"button\" class=\"btn actions\" data-action=\""
    + alias2(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" >"
    + alias2((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias1).call(depth0,"modal",(data && data.key),{"name":"tPrefix","hash":{},"data":data}))
    + "</button>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"modal fade\" id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.disableBackdrop : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"block-title\">\n"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.disableBackdrop : depth0),{"name":"unless","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        <div class=\"title\">\n          <span class=\"modal-title\">"
    + alias3((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,(depth0 != null ? depth0.title : depth0),{"name":"t","hash":{},"data":data}))
    + "</span>\n        </div>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"modal-container\">"
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n      </div>\n      "
    + alias3((helpers.consoleLog || (depth0 && depth0.consoleLog) || alias1).call(depth0,(depth0 != null ? depth0.actions : depth0),{"name":"consoleLog","hash":{},"data":data}))
    + "\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.actions : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      \n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div>";
},"useData":true,"useDepths":true});
this["MyApp"]["templates"]["my-favorites"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "disabled";
},"3":function(depth0,helpers,partials,data) {
    return "fa-chevron-up";
},"5":function(depth0,helpers,partials,data) {
    return "fa-chevron-down";
},"7":function(depth0,helpers,partials,data) {
    return "expanded";
},"9":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <li>"
    + ((stack1 = this.invokePartial(partials['ui/loading'],depth0,{"name":"ui/loading","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</li>\n";
},"11":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['ui/favorite-item'],depth0,{"name":"ui/favorite-item","hash":{"item":depth0},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"13":function(depth0,helpers,partials,data) {
    var stack1;

  return "        "
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.isLoading : depth0),{"name":"unless","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"14":function(depth0,helpers,partials,data) {
    return "<li class=\"no-fav \">"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"ui.myFavoritesBlank",{"name":"t","hash":{},"data":data}))
    + "</li>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"block-title\">\n    <div class=\"title\">\n        <span>\n            <i class=\"icon fa fa-star\"></i>\n            "
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"ui.myFavorites",{"name":"t","hash":{},"data":data}))
    + "\n        </span>\n    </div>\n    <div class=\"util-icon\" >\n        <button type=\"button\" class=\"util-btn expand-btn\" "
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.hasExpanded : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "><i class=\"fa "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.expanded : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\"></i></button>\n    </div>    \n</div>\n\n<ul class=\"nav-list nav-list-favourites "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.expanded : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n    \n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isLoading : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.favorites : depth0),{"name":"each","hash":{},"fn":this.program(11, data, 0),"inverse":this.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + "</ul>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["quicklinks-list"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.lambda, alias3=this.escapeExpression;

  return "    <li"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),"===","disabled",{"name":"ifCond","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <a class=\"nav-link level-"
    + alias3(alias2((depths[1] != null ? depths[1].level : depths[1]), depth0))
    + "\" data-coupon=\""
    + alias3(((helper = (helper = helpers.isCoupon || (depth0 != null ? depth0.isCoupon : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"isCoupon","hash":{},"data":data}) : helper)))
    + "\" data-url=\""
    + alias3(alias2((depth0 != null ? depth0.url : depth0), depth0))
    + "\">\n            <span class=\"tree-name\">"
    + alias3(alias2((depth0 != null ? depth0.description : depth0), depth0))
    + "</span>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.showCount : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),"===","section",{"name":"ifCond","hash":{},"fn":this.program(6, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </a>\n\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),"===","section",{"name":"ifCond","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </li>\n";
},"2":function(depth0,helpers,partials,data) {
    return " class=\"disabled\"";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <span class=\"tree-number\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.items : depth0)) != null ? stack1.length : stack1), depth0))
    + "</span>\n";
},"6":function(depth0,helpers,partials,data) {
    return "                <span class=\"tree-action\"><i class=\"fa fa-plus\"></i></span>\n";
},"8":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "            <ul class=\"nav-tree \">\n"
    + ((stack1 = this.invokePartial(partials['ui/quicklinks-list'],depth0,{"name":"ui/quicklinks-list","hash":{"level":(helpers.add1 || (depth0 && depth0.add1) || helpers.helperMissing).call(depth0,(depths[2] != null ? depths[2].level : depths[2]),{"name":"add1","hash":{},"data":data}),"quickLinks":(depth0 != null ? depth0.items : depth0)},"data":data,"indent":"                ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "            </ul>\n";
},"10":function(depth0,helpers,partials,data) {
    return "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.quickLinks : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(10, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["quicklinks"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "\n<div class=\"block-title\">\n    <div class=\"title\">\n        <span>\n            <i class=\"fa fa-link icon\"></i>\n            "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.quickLinks",{"name":"t","hash":{},"data":data}))
    + "\n        </span>\n    </div>\n</div>\n<ul class=\"nav-list nav-list-quick-links\">\n    <li>\n        <a class=\"nav-loading\"><i class=\"fa fa-spin fa-spinner\"></i>  "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"Loading...",{"name":"t","hash":{},"data":data}))
    + " </a>\n    </li>\n</ul>\n\n";
},"useData":true});
this["MyApp"]["templates"]["results"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"wrapper-main\">\n<div class=\"locator-panel panel-container\">\n		<div class=\"panel-main\">\n			<div class=\"section-block\">\n			    <!-- start: title -->\n			    <div class=\"section-title block-title\">\n			        <div class=\"title\"><span>"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.title : depth0),{"name":"t","hash":{},"data":data}))
    + "</span></div>\n			    </div>\n			    <!-- end: title -->\n\n			    <!-- start: content -->\n			    <div class=\"section-container\">\n			    	<iframe id=\"branch-locator\" class=\"branch-locator\" src=\"//media.megasportsworld.com/sport-result/\"></iframe>\n			    </div>\n			    <!-- end: content -->\n			</div>\n		</div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["section-block"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "    <div class=\"section-block "
    + this.escapeExpression(((helper = (helper = helpers.region || (depth0 != null ? depth0.region : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"region","hash":{},"data":data}) : helper)))
    + "-section special-tab "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.sportCode : depth0),"==","golf",{"name":"ifCond","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n        <div class=\"section-nav\">\n            <ul class=\"section\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.outrightTabs : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </ul>\n        </div>\n    </div>\n";
},"2":function(depth0,helpers,partials,data) {
    return "tab-compressed";
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "                    <li "
    + ((stack1 = (helpers.isEqual || (depth0 && depth0.isEqual) || alias1).call(depth0,(depths[1] != null ? depths[1].outrightActiveTab : depths[1]),(data && data.key),{"name":"isEqual","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n                        <a href=\"#\" class=\"outright-tab disabled\" data-tab=\""
    + alias2(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + alias2((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias1).call(depth0,"outrightTab",(depth0 != null ? depth0.title : depth0),{"name":"tPrefix","hash":{},"data":data}))
    + "</a>\n                    </li>\n";
},"5":function(depth0,helpers,partials,data) {
    return "class=\"active\"";
},"7":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.fixtures : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"8":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div class=\"section-block "
    + alias3(((helper = (helper = helpers.region || (depth0 != null ? depth0.region : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"region","hash":{},"data":data}) : helper)))
    + "-section "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.showDoublesTab : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n        <div class=\"section-nav\">\n            <ul class=\"section\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.showAll : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.showDoublesTab : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fixtures : depth0),{"name":"each","hash":{},"fn":this.program(15, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n                <li class=\""
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.activeTab : depth0),"===","calendar",{"name":"ifCond","hash":{},"fn":this.program(10, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                    <a href=\"#\" class=\"fixture-date "
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.enableFixtureDate : depth0),{"name":"unless","hash":{},"fn":this.program(13, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" ><i class=\"fa fa-calendar\"></i>\n                        <input type=\"hidden\" value=\""
    + alias3(((helper = (helper = helpers.activeDate || (depth0 != null ? depth0.activeDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"activeDate","hash":{},"data":data}) : helper)))
    + "\" />\n                    </a>\n                </li>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.hasOutright : depth0),{"name":"if","hash":{},"fn":this.program(22, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </ul>\n        </div>\n    </div>\n";
},"9":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "                <li class=\""
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.activeTab : depth0),"===","all",{"name":"ifCond","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                    <a href=\"#\" class=\"fixtures-all\" >\n                        "
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.all",{"name":"t","hash":{},"data":data}))
    + "\n                    </a>\n                </li>\n";
},"10":function(depth0,helpers,partials,data) {
    return "active";
},"12":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=helpers.helperMissing;

  return "                <li class=\""
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depths[1] != null ? depths[1].activeTab : depths[1]),"===","doubles",{"name":"ifCond","hash":{},"fn":this.program(10, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                    <a href=\"#\" class=\"fixtures-doubles "
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.enableDoublesTab : depth0),{"name":"unless","hash":{},"fn":this.program(13, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" >\n                        "
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.doubles",{"name":"t","hash":{},"data":data}))
    + "\n                    </a>\n                </li>\n";
},"13":function(depth0,helpers,partials,data) {
    return "disabled";
},"15":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                    <li class=\""
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depths[1] != null ? depths[1].activeTab : depths[1]),"===",(depth0 != null ? depth0.desc : depth0),{"name":"ifCond","hash":{},"fn":this.program(10, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                        <a href=\"#\" class=\"fixtures-nav "
    + ((stack1 = (helpers.inArray || (depth0 && depth0.inArray) || alias1).call(depth0,(depths[1] != null ? depths[1].availableFixturesDate : depths[1]),(depth0 != null ? depth0.criteria : depth0),{"name":"inArray","hash":{},"fn":this.program(16, data, 0, blockParams, depths),"inverse":this.program(13, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\" data-dayNum=\""
    + alias3(((helper = (helper = helpers.dayNum || (depth0 != null ? depth0.dayNum : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"dayNum","hash":{},"data":data}) : helper)))
    + "\" data-monthNum=\""
    + alias3(((helper = (helper = helpers.monthNum || (depth0 != null ? depth0.monthNum : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"monthNum","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers['if'].call(depth0,(data && data.first),{"name":"if","hash":{},"fn":this.program(18, data, 0, blockParams, depths),"inverse":this.program(20, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                        </a>\n                    </li>\n";
},"16":function(depth0,helpers,partials,data) {
    return "";
},"18":function(depth0,helpers,partials,data) {
    return "                                "
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"ui.today",{"name":"t","hash":{},"data":data}))
    + "\n";
},"20":function(depth0,helpers,partials,data) {
    var helper;

  return "                                "
    + this.escapeExpression(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"desc","hash":{},"data":data}) : helper)))
    + "\n";
},"22":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=helpers.helperMissing;

  return "                <li class=\""
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depths[1] != null ? depths[1].activeTab : depths[1]),"===","outright",{"name":"ifCond","hash":{},"fn":this.program(10, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                    <a href=\"#\" class=\"fixtures-outright "
    + ((stack1 = (helpers.inArray || (depth0 && depth0.inArray) || alias1).call(depth0,(depths[1] != null ? depths[1].availableFixturesDate : depths[1]),"oc",{"name":"inArray","hash":{},"fn":this.program(16, data, 0, blockParams, depths),"inverse":this.program(13, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers.unless.call(depth0,(depths[1] != null ? depths[1].enableOutrightDoubles : depths[1]),{"name":"unless","hash":{},"fn":this.program(13, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" >\n                        "
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.outright",{"name":"t","hash":{},"data":data}))
    + "\n                    </a>\n                </li>\n";
},"24":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return alias3(((helper = (helper = helpers.sectionCode || (depth0 != null ? depth0.sectionCode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sectionCode","hash":{},"data":data}) : helper)))
    + "-"
    + alias3(((helper = (helper = helpers.sportCode || (depth0 != null ? depth0.sportCode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sportCode","hash":{},"data":data}) : helper)));
},"26":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "                    "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.virtual",{"name":"t","hash":{},"data":data}))
    + " : "
    + alias2((helpers.formatVPageTitle || (depth0 && depth0.formatVPageTitle) || alias1).call(depth0,(depth0 != null ? depth0.sportCode : depth0),{"name":"formatVPageTitle","hash":{},"data":data}))
    + "\n";
},"28":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "                    "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.search",{"name":"t","hash":{},"data":data}))
    + " : "
    + alias2(((helper = (helper = helpers.searchTerm || (depth0 != null ? depth0.searchTerm : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"searchTerm","hash":{},"data":data}) : helper)))
    + "\n";
},"30":function(depth0,helpers,partials,data) {
    return "                    "
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"ui.live",{"name":"t","hash":{},"data":data}))
    + "\n";
},"32":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=this.escapeExpression;

  return "                    <i class=\"icon qicon-"
    + alias1(this.lambda((depths[1] != null ? depths[1].sportCode : depths[1]), depth0))
    + "\"></i>"
    + alias1((helpers.tPrefix || (depth0 && depth0.tPrefix) || helpers.helperMissing).call(depth0,"sportCode",(depth0 != null ? depth0.sportCode : depth0),{"name":"tPrefix","hash":{},"data":data}))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.outrightTabs : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(7, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\n\n<div class=\"section-block "
    + alias3(((helper = (helper = helpers.sectionCode || (depth0 != null ? depth0.sectionCode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sectionCode","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.region || (depth0 != null ? depth0.region : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"region","hash":{},"data":data}) : helper)))
    + "-section\">\n    <!-- start: title -->\n    <div class=\"section-title block-title "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.virtual : depth0),{"name":"if","hash":{},"fn":this.program(24, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n        <div class=\"title\">\n            <span>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.virtual : depth0),{"name":"if","hash":{},"fn":this.program(26, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.search : depth0),{"name":"if","hash":{},"fn":this.program(28, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.liveMode : depth0),{"name":"if","hash":{},"fn":this.program(30, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.commonSection : depth0),{"name":"if","hash":{},"fn":this.program(32, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </span>\n        </div>\n        <div class=\"timer-block\">\n            <span class=\"icon-refresh\"><i class=\"fa fa-refresh\"></i></span>\n            <span class=\"timer\">00</span>\n        </div>\n        <div class=\"option-block\">\n            <div class=\"btn-group\">\n                <button type=\"button\" class=\"btn-league league-modal\" data-target=\"#league-modal\" aria-expanded=\"false\" disabled >\n                    "
    + alias3((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.selectLeague",{"name":"t","hash":{},"data":data}))
    + " <span class=\"caret\"></span>\n                </button>\n            </div>\n        </div>\n    </div>\n    <!-- end: title -->\n\n\n    <div data-code=\""
    + alias3(((helper = (helper = helpers.sportCode || (depth0 != null ? depth0.sportCode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sportCode","hash":{},"data":data}) : helper)))
    + "\" class=\"section-container "
    + alias3(((helper = (helper = helpers.sportCode || (depth0 != null ? depth0.sportCode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sportCode","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\""
    + alias3(((helper = (helper = helpers.region || (depth0 != null ? depth0.region : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"region","hash":{},"data":data}) : helper)))
    + "-row "
    + alias3(((helper = (helper = helpers.region || (depth0 != null ? depth0.region : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"region","hash":{},"data":data}) : helper)))
    + "-header\">\n        </div>\n        <div class=\"frame-container\" ></div>\n        <div class=\"league-container\">\n\n"
    + ((stack1 = this.invokePartial(partials['ui/loading'],depth0,{"name":"ui/loading","data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n        </div>\n    </div>\n</div>";
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["sports-block"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"sports-block sports-block-"
    + alias3(((helper = (helper = helpers.sportsCode || (depth0 != null ? depth0.sportsCode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sportsCode","hash":{},"data":data}) : helper)))
    + "\" data-sportscode=\""
    + alias3(((helper = (helper = helpers.sportsCode || (depth0 != null ? depth0.sportsCode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sportsCode","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"sports-title active\">\n		<i class=\"icon qicon-"
    + alias3(((helper = (helper = helpers.sportsCode || (depth0 != null ? depth0.sportsCode : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"sportsCode","hash":{},"data":data}) : helper)))
    + "\"></i> \n		"
    + alias3((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias1).call(depth0,"sportCode",(depth0 != null ? depth0.sportsCode : depth0),{"name":"tPrefix","hash":{},"data":data}))
    + " \n		<i class=\"fa fa-chevron-right\"></i>\n	</div>\n	<div class=\"sports-events\"></div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["sportsnav"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "\n    \n\n        <li class=\""
    + alias2((helpers.checkSelected || (depth0 && depth0.checkSelected) || alias1).call(depth0,depth0,(depths[1] != null ? depths[1].getSection : depths[1]),{"name":"checkSelected","hash":{},"data":data}))
    + "\"><a href=\"#\" class=\" btn-section\" data-value=\""
    + alias2(this.lambda(depth0, depth0))
    + "\">"
    + alias2((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias1).call(depth0,"sports",depth0,{"name":"tPrefix","hash":{},"data":data}))
    + "</a></li>\n";
},"3":function(depth0,helpers,partials,data) {
    return "fa-volume-up";
},"5":function(depth0,helpers,partials,data) {
    return "fa-volume-off";
},"7":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "                <li class=\""
    + alias2((helpers.checkSelected || (depth0 && depth0.checkSelected) || alias1).call(depth0,depth0,(depths[1] != null ? depths[1].getViewMode : depths[1]),{"name":"checkSelected","hash":{},"data":data}))
    + "\"><a href=\"#\" class=\"btn-viewmode\" data-value=\""
    + alias2(this.lambda(depth0, depth0))
    + "\">"
    + alias2((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias1).call(depth0,"sports",depth0,{"name":"tPrefix","hash":{},"data":data}))
    + "</a></li>\n";
},"9":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "                <li class=\""
    + alias2((helpers.checkSelected || (depth0 && depth0.checkSelected) || alias1).call(depth0,depth0,(depths[1] != null ? depths[1].getPriceFormat : depths[1]),{"name":"checkSelected","hash":{},"data":data}))
    + "\"><a href=\"#\" class=\"btn-priceformat\" data-value=\""
    + alias2(this.lambda(depth0, depth0))
    + "\">"
    + alias2((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias1).call(depth0,"sports",depth0,{"name":"tPrefix","hash":{},"data":data}))
    + "</a></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<ul class=\"section\">\n    \n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.getSectionList : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n\n<div class=\"btn-group modifier\" role=\"group\" aria-label=\"...\">\n\n    <div class=\"btn-group btn-group-timerange\" role=\"group\">\n        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\" "
    + alias2((helpers.isDisabled || (depth0 && depth0.isDisabled) || alias1).call(depth0,"all",(depth0 != null ? depth0.getSection : depth0),{"name":"isDisabled","hash":{},"data":data}))
    + ">\n            "
    + alias2((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias1).call(depth0,"sports",(depth0 != null ? depth0.getTimeRange : depth0),{"name":"tPrefix","hash":{},"data":data}))
    + " <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\" role=\"menu\">\n\n            <li class=\""
    + alias2((helpers.checkSelected || (depth0 && depth0.checkSelected) || alias1).call(depth0,"AM",(depth0 != null ? depth0.getTimeRange : depth0),{"name":"checkSelected","hash":{},"data":data}))
    + "\"><a href=\"#\" class=\"btn-timerange\" data-value=\"AM\">"
    + alias2((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias1).call(depth0,"sports","AM",{"name":"tPrefix","hash":{},"data":data}))
    + "</a></li>\n            <li class=\""
    + alias2((helpers.checkSelected || (depth0 && depth0.checkSelected) || alias1).call(depth0,"PM",(depth0 != null ? depth0.getTimeRange : depth0),{"name":"checkSelected","hash":{},"data":data}))
    + "\"><a href=\"#\" class=\"btn-timerange\" data-value=\"PM\">"
    + alias2((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias1).call(depth0,"sports","PM",{"name":"tPrefix","hash":{},"data":data}))
    + "</a></li>\n        </ul>\n    </div>\n\n    <div class=\"btn-group btn-group-sorting\" role=\"group\">\n        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n            "
    + alias2((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias1).call(depth0,"sports",(depth0 != null ? depth0.getSortType : depth0),{"name":"tPrefix","hash":{},"data":data}))
    + " <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\" role=\"menu\">\n            <li class=\""
    + alias2((helpers.checkSelected || (depth0 && depth0.checkSelected) || alias1).call(depth0,"sortByDefault",(depth0 != null ? depth0.getSortType : depth0),{"name":"checkSelected","hash":{},"data":data}))
    + "\"><a href=\"#\" class=\"btn-sorttype\" data-value=\"sortByDefault\">"
    + alias2((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias1).call(depth0,"sports","sortByDefault",{"name":"tPrefix","hash":{},"data":data}))
    + "</a></li>\n            <li class=\""
    + alias2((helpers.checkSelected || (depth0 && depth0.checkSelected) || alias1).call(depth0,"sortByTime",(depth0 != null ? depth0.getSortType : depth0),{"name":"checkSelected","hash":{},"data":data}))
    + "\"><a href=\"#\" class=\"btn-sorttype\" data-value=\"sortByTime\">"
    + alias2((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias1).call(depth0,"sports","sortByTime",{"name":"tPrefix","hash":{},"data":data}))
    + "</a></li>\n        </ul>\n    </div>\n\n    <button type=\"button\" class=\"btn btn-default btn-livealert\" "
    + alias2((helpers.isDisabled || (depth0 && depth0.isDisabled) || alias1).call(depth0,"live",(depth0 != null ? depth0.getSection : depth0),{"name":"isDisabled","hash":{},"data":data}))
    + "><i class=\"fa "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.getLiveAlert : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\"></i></button>\n\n    <div class=\"btn-group btn-group-viewmode\" role=\"group\">\n        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\" "
    + alias2((helpers.isDisabled || (depth0 && depth0.isDisabled) || alias1).call(depth0,"asian",(depth0 != null ? depth0.getRegion : depth0),{"name":"isDisabled","hash":{},"data":data}))
    + " "
    + alias2((helpers.isDisabled || (depth0 && depth0.isDisabled) || alias1).call(depth0,"DEFAULT",(depth0 != null ? depth0.getCriteria : depth0),{"name":"isDisabled","hash":{},"data":data}))
    + ">\n            <span>"
    + alias2((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias1).call(depth0,"sports",(depth0 != null ? depth0.getViewMode : depth0),{"name":"tPrefix","hash":{},"data":data}))
    + "</span> <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\" role=\"menu\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.getViewModeList : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n\n    <div class=\"btn-group btn-group-priceformat\" role=\"group\">\n        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n            "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"sports.priceformat",{"name":"t","hash":{},"data":data}))
    + " : "
    + alias2((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias1).call(depth0,"sports",(depth0 != null ? depth0.getPriceFormat : depth0),{"name":"tPrefix","hash":{},"data":data}))
    + " <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\" role=\"menu\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.getPriceFormatList : depth0),{"name":"each","hash":{},"fn":this.program(9, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n\n</div> ";
},"useData":true,"useDepths":true});
this["MyApp"]["templates"]["sportsnews-item"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li>\n    <h3><a href=\"#\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></h3>\n    <p>"
    + alias3(((helper = (helper = helpers.descriptionText || (depth0 != null ? depth0.descriptionText : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"descriptionText","hash":{},"data":data}) : helper)))
    + "</p>\n</li>";
},"useData":true});
this["MyApp"]["templates"]["sportsothers"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"block-title\">\n    <div class=\"title\">\n        <span>\n            <i class=\"icon fa fa-laptop\"></i>\n            "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.other",{"name":"t","hash":{},"data":data}))
    + "\n        </span>\n    </div>\n</div>\n<ul class=\"nav-list nav-list-quick-links\">\n    <li>\n        <a class=\"nav-link\">\n            <span class=\"tree-name\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"sports.liveScore",{"name":"t","hash":{},"data":data}))
    + "</span>\n        </a>\n    </li>\n\n    <li>\n        <a class=\"nav-link\">\n            <span class=\"tree-name\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"sports.bestOdds",{"name":"t","hash":{},"data":data}))
    + "</span>\n        </a>\n    </li>\n    <li>\n        <a class=\"nav-link nav-popularGames\">\n            <span class=\"tree-name\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"sports.popularGames",{"name":"t","hash":{},"data":data}))
    + "</span>\n            <span class=\"tree-action\"><i class=\"fa fa-plus\"></i></span>\n        </a>\n        <ul class=\"nav-tree popularGamesList\">\n            <li>\n                <div class=\"nav-text\">\n                    <a class=\"nav-link level-0\">\n                        <span class=\"tree-name\"><i class=\"fa fa-spin fa-spinner\"></i>  "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"Loading...",{"name":"t","hash":{},"data":data}))
    + " </span>\n                    </a>\n                </div>\n            </li>\n        </ul>\n    </li>\n</ul>";
},"useData":true});
this["MyApp"]["templates"]["sportstree-list-empty"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "            <span class=\"tree-name tree-loading\">"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"sportstree.noavailable",{"name":"t","hash":{},"data":data}))
    + " </span>\n";
},"3":function(depth0,helpers,partials,data) {
    return "            <span class=\"tree-name tree-loading\"><i class=\"fa fa-spin fa-spinner\"></i>  "
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"Loading...",{"name":"t","hash":{},"data":data}))
    + " </span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<li>\n    <div class=\"nav-text\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.unavailable : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n</li>\n\n";
},"useData":true});
this["MyApp"]["templates"]["sportstree-list"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.count : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "        <li>\n            <a class=\"nav-link nav-ept level-0 "
    + alias2(alias1((depths[2] != null ? depths[2].region : depths[2]), depth0))
    + "\" data-url=\"/"
    + alias2(alias1((depths[2] != null ? depths[2].sectionCode : depths[2]), depth0))
    + "/"
    + alias2((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias3).call(depth0,(depth0 != null ? depth0.sportCode : depth0),{"name":"toLowerCase","hash":{},"data":data}))
    + "/\">\n                <span class=\"tree-action\"><i class=\"fa\"></i></span>\n                <span class=\"tree-name\"> "
    + alias2((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias3).call(depth0,"sportCode",(depth0 != null ? depth0.sportCode : depth0),{"name":"tPrefix","hash":{},"data":data}))
    + " </span>\n                 \n            </a>\n\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.paths : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </li>\n";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "                <ul class=\"nav-tree\" id=\""
    + this.escapeExpression(((helper = (helper = helpers.sportCode || (depth0 != null ? depth0.sportCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"sportCode","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.paths : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </ul>\n";
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.lambda, alias3=this.escapeExpression, alias4="function";

  return "                    <li"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.id : depth0),"===","FOOT-FH-CS",{"name":"ifCond","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n                        <a class=\"nav-link level-1 nav-link-categories "
    + alias3(alias2((depths[4] != null ? depths[4].region : depths[4]), depth0))
    + "\" data-url=\"/"
    + alias3(alias2((depths[4] != null ? depths[4].sectionCode : depths[4]), depth0))
    + "/"
    + alias3((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias1).call(depth0,(depths[2] != null ? depths[2].sportCode : depths[2]),{"name":"toLowerCase","hash":{},"data":data}))
    + "/p"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias4 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "/\" data-desc=\""
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias4 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "\">\n                            <span class=\"tree-icon\"><i class=\"fa\"></i></span>\n                            <span class=\"tree-name\">\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depths[4] != null ? depths[4].region : depths[4]),"===","asian",{"name":"ifCond","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                            </span>\n                        </a>\n\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.paths : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":this.program(11, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    </li>\n";
},"5":function(depth0,helpers,partials,data) {
    return " class=\"hidden\"";
},"7":function(depth0,helpers,partials,data) {
    return "                                "
    + this.escapeExpression((helpers.tPrefix || (depth0 && depth0.tPrefix) || helpers.helperMissing).call(depth0,"sportCode",(depth0 != null ? depth0.description : depth0),{"name":"tPrefix","hash":{},"data":data}))
    + "\n";
},"9":function(depth0,helpers,partials,data) {
    var helper;

  return "                                "
    + this.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "\n";
},"11":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "                            <ul class=\"nav-tree nav-tree-tournaments\" id=\""
    + this.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.paths : depth0),{"name":"each","hash":{},"fn":this.program(12, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                            </ul>\n";
},"12":function(depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return "                                <li>\n                                    <a class=\"nav-link-tournaments level-2\" data-url=\"/"
    + alias2(alias1((depths[6] != null ? depths[6].sectionCode : depths[6]), depth0))
    + "/"
    + alias2((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias3).call(depth0,(depths[4] != null ? depths[4].sportCode : depths[4]),{"name":"toLowerCase","hash":{},"data":data}))
    + "/p"
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "/\" data-desc=\""
    + alias2(alias1((depths[2] != null ? depths[2].description : depths[2]), depth0))
    + "\">\n                                        <span class=\"tree-icon\"></span>\n                                        <span class=\"tree-name\"> "
    + alias2(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + " </span>\n                                    </a>\n                                </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.sports : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true,"useDepths":true});
this["MyApp"]["templates"]["sportstree"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"block-title\">\n    <div class=\"title\">\n        <span>\n            <i class=\"icon fa fa-soccer-ball-o\"></i>\n            "
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"ui.sports",{"name":"t","hash":{},"data":data}))
    + "\n        </span>\n    </div>\n</div>\n\n<ul class=\"nav-list nav-list-sports \">\n</ul>";
},"useData":true});
this["MyApp"]["templates"]["static-content"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"wrapper-main\">\n	<div class=\"static-panels panel-container\">\n		<div class=\"panel-main\">\n			<div class=\"section-block\">\n			    <!-- start: title -->\n			    <div class=\"section-title block-title\">\n			        <div class=\"title\"><span>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,(depth0 != null ? depth0.title : depth0),{"name":"t","hash":{},"data":data}))
    + "</span></div>\n			    </div>\n			    <!-- end: title -->\n\n			    <!-- start: content -->\n			    <div class=\"section-container\"></div>\n			    <!-- end: content -->\n			</div>\n\n		</div>\n		<div class=\"panel-right\">\n	    	<div class=\"static-tutorials\">\n			    <div class=\"block-title\">\n			    	<div class=\"title\">\n			    		<span>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.tutorials",{"name":"t","hash":{},"data":data}))
    + "</span>\n			    	</div>\n			    </div>\n			    <div class=\"wrap-content\">\n			    	<img class=\"tlink\" data-url=\"https://media.megasportsworld.com/training-videos.php\" data-target=\"_blank\" src=\"/assets/images/tutorials1.jpg\" />\n			    	<img class=\"tlink\" data-url=\"\" data-target=\"_blank\" src=\"/assets/images/tutorials2.jpg\" />\n			    </div>\n			</div>\n		</div>\n	</div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["statistics"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<a class=\"btn-statistics\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-title=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"fa fa-bar-chart\"></i>\n</a>";
},"useData":true});
this["MyApp"]["templates"]["test"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div> testing "
    + this.escapeExpression(((helper = (helper = helpers.test || (depth0 != null ? depth0.test : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"test","hash":{},"data":data}) : helper)))
    + " </div>";
},"useData":true});
this["MyApp"]["templates"]["virtual-links"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"block-title\">\n    <div class=\"title\">\n        <span>\n            <i class=\"fa fa-link icon\"></i>\n            "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"ui.virtualLinks",{"name":"t","hash":{},"data":data}))
    + "\n        </span>\n    </div>\n</div>\n<ul class=\"nav-list nav-list-quick-links\">\n    <!--li><a class=\"nav-loading\"><i class=\"fa fa-spin fa-spinner\"></i>  "
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"Loading...",{"name":"t","hash":{},"data":data}))
    + " </a></li-->\n    <li><a data-url=\"/virtualfootball/\" class=\"virtual-link\">FootBall</a></li>\n    <li><a data-url=\"/virtualhorses/\" class=\"virtual-link\">Horse Racing</a></li>\n    <li><a data-url=\"/virtualdogs/\" class=\"virtual-link\">Dog Racing</a></li>\n    <li><a data-url=\"/virtualtennis/\" class=\"virtual-link\">Tennis</a></li>\n</ul>";
},"useData":true});
this["MyApp"]["templates"]["virtual-sports-block"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"block-title "
    + alias3(((helper = (helper = helpers.vsTitle || (depth0 != null ? depth0.vsTitle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"vsTitle","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"title\">\n        <span>\n            <i class=\"icon q"
    + alias3((helpers.getVSIcon || (depth0 && depth0.getVSIcon) || alias1).call(depth0,(depth0 != null ? depth0.vsTitle : depth0),{"name":"getVSIcon","hash":{},"data":data}))
    + "\"></i>\n            "
    + alias3((helpers.tPrefix || (depth0 && depth0.tPrefix) || alias1).call(depth0,"vsport",(depth0 != null ? depth0.vsTitle : depth0),{"name":"tPrefix","hash":{},"data":data}))
    + "\n        </span>\n    </div>\n    <!--div class=\"refresh-container\">\n        <span class=\"tree-refresh hidden\"><i class=\"fa fa-refresh\"></i></span>\n        <span class=\"tree-loading\"><i class=\"fa fa-spin fa-spinner\"></i></span>\n    </div-->\n</div>\n<div class=\"block-description "
    + alias3(((helper = (helper = helpers.vsTitle || (depth0 != null ? depth0.vsTitle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"vsTitle","hash":{},"data":data}) : helper)))
    + "\"></div>";
},"useData":true});
this["MyApp"]["templates"]["virtual-sports-content"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.escapeExpression, alias2=helpers.helperMissing;

  return "<div class=\"content\">\n	<div class=\"title\" data-link=\""
    + alias1(this.lambda((depth0 != null ? depth0.eventLink : depth0), depth0))
    + "\">"
    + ((stack1 = (helpers.formatVMainTitle || (depth0 && depth0.formatVMainTitle) || alias2).call(depth0,(depth0 != null ? depth0.eventTitle : depth0),(depth0 != null ? depth0.eventCategory : depth0),{"name":"formatVMainTitle","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n	<div class=\"description\">\n		<div>"
    + alias1((helpers.formatVEventTitle || (depth0 && depth0.formatVEventTitle) || alias2).call(depth0,(depth0 != null ? depth0.eventDesc : depth0),{"name":"formatVEventTitle","hash":{},"data":data}))
    + "</div>\n	</div>\n	<div class=\"timer\">\n		<span class=\"header\">Starts</span><span class=\"content\">Soon</span>\n	</div>\n</div>\n<div class=\"filler\"><div class=\"title\">Now Watching....</div></div> ";
},"useData":true});
this["MyApp"]["templates"]["virtual-sports-countdown"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"vs-group virtual-basketball\"></div>\n<div class=\"vs-group virtual-football\"></div>\n<div class=\"vs-group virtual-horses\"></div>\n<div class=\"vs-group virtual-dogs\"></div>\n<div class=\"vs-group virtual-tennis\"></div>";
},"useData":true});
this["MyApp"]["templates"]["virtual-sports-error"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"content\">\n	<div class=\"title\">"
    + alias2(alias1((depth0 != null ? depth0.eventTitle : depth0), depth0))
    + "</div>\n	<div class=\"description\">"
    + alias2(alias1((depth0 != null ? depth0.eventDesc : depth0), depth0))
    + "</div>\n	<div class=\"timer retry\">\n		<span class=\"timer-loading\"><i class=\"fa fa-refresh\"></i></span>\n	</div>\n</div>\n<div class=\"filler\"><div class=\"title\">Now Watching....</div></div> ";
},"useData":true});
this["MyApp"]["templates"]["virtual-sports-loading"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"content\">\n	<i class=\"fa fa-spin fa-spinner\"></i> Loading...\n</div>\n<div class=\"filler\"><div class=\"title\">Now Watching....</div></div> ";
},"useData":true});
this["MyApp"]["templates"]["virtual-sports-noupcoming"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"content\">\n	<div class=\"title\">There is no upcoming "
    + this.escapeExpression(((helper = (helper = helpers.norecord || (depth0 != null ? depth0.norecord : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"norecord","hash":{},"data":data}) : helper)))
    + "</div>\n</div>\n<div class=\"filler\"><div class=\"title\">Now Watching....</div></div> ";
},"useData":true});
this["MyApp"]["templates"]["cell-outcome"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "\n<div class=\"outcome o-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.id : stack1), depth0))
    + alias2((helpers.getOutcomeDirection || (depth0 && depth0.getOutcomeDirection) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.dir : stack1),{"name":"getOutcomeDirection","hash":{},"data":data}))
    + alias2((helpers.showFlags || (depth0 && depth0.showFlags) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.flags : stack1),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n    <div class=\"price-container\">\n    	<a class=\"price\" data-outcome=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" data-price=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.price : stack1), depth0))
    + "\">\n    		<span class=\"dir-caret\"></span>\n    		"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.price : stack1), depth0))
    + "\n    	</a>\n    </div>\n</div>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.outcome : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["MyApp"]["templates"]["cell-prefix"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "	<div class=\"cell-prefix\">\n		<span class=\"prefix\">"
    + this.escapeExpression(((helper = (helper = helpers.prefix || (depth0 != null ? depth0.prefix : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"prefix","hash":{},"data":data}) : helper)))
    + "</span>\n	</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.price : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["MyApp"]["templates"]["cell-spread-double"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"cell-spread\">\n	<span class=\"spread\">"
    + this.escapeExpression((helpers.formatSpread || (depth0 && depth0.formatSpread) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.outcome : depth0),(depth0 != null ? depth0.prefix : depth0),{"name":"formatSpread","hash":{},"data":data}))
    + "</span>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["cell-spread-single"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"cell-spread\">\n	<span class=\"spread\">"
    + this.escapeExpression((helpers.formatSingleSpread || (depth0 && depth0.formatSingleSpread) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.outcomeA : depth0),(depth0 != null ? depth0.outcomeB : depth0),{"name":"formatSingleSpread","hash":{},"data":data}))
    + "</span>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["col-more"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.count : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.liveMode : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <button class=\"btn-custom btn-more market-count btn-more-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-count=\""
    + alias3(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"count","hash":{},"data":data}) : helper)))
    + "\">+\n                <span>"
    + alias3(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"count","hash":{},"data":data}) : helper)))
    + "</span></button>\n";
},"4":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "            <button class=\"btn-custom btn-live market-count btn-live-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n                <span>"
    + alias3((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"asianView.live",{"name":"t","hash":{},"data":data}))
    + "</span></button>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"more\">\n    <div class=\"wrapper\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.first : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["date-cell"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.xif || (depth0 && depth0.xif) || helpers.helperMissing).call(depth0,"this.code == 'VOLL' || this.code == 'TENN'",{"name":"xif","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.program(4, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\n\n<div class=\"live-extra\">\n    <i class=\"fa fa-bar-chart\"></i>\n    <i class=\"fa fa-desktop\"></i>\n    <i class=\"fa fa-rss\"></i>\n</div>\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "		<div class=\"scores"
    + alias2((helpers.updateSets || (depth0 && depth0.updateSets) || alias1).call(depth0,(depths[1] != null ? depths[1].sets : depths[1]),(helpers.getSetIndex || (depth0 && depth0.getSetIndex) || alias1).call(depth0,(depths[1] != null ? depths[1].liveEvent : depths[1]),{"name":"getSetIndex","hash":{},"data":data}),{"name":"updateSets","hash":{},"data":data}))
    + "\">\n			<span class=\"score-a\">"
    + alias2((helpers.showScoreOnSet || (depth0 && depth0.showScoreOnSet) || alias1).call(depth0,(depths[1] != null ? depths[1].sets : depths[1]),(helpers.getSetIndex || (depth0 && depth0.getSetIndex) || alias1).call(depth0,(depths[1] != null ? depths[1].liveEvent : depths[1]),{"name":"getSetIndex","hash":{},"data":data}),"a","0",{"name":"showScoreOnSet","hash":{},"data":data}))
    + "</span>\n			<span>-</span>\n			<span class=\"score-b\">"
    + alias2((helpers.showScoreOnSet || (depth0 && depth0.showScoreOnSet) || alias1).call(depth0,(depths[1] != null ? depths[1].sets : depths[1]),(helpers.getSetIndex || (depth0 && depth0.getSetIndex) || alias1).call(depth0,(depths[1] != null ? depths[1].liveEvent : depths[1]),{"name":"getSetIndex","hash":{},"data":data}),"b","0",{"name":"showScoreOnSet","hash":{},"data":data}))
    + "</span>\n		</div>\n		<span class=\"live-set\">Set "
    + alias2((helpers.getCurrentSet || (depth0 && depth0.getCurrentSet) || alias1).call(depth0,(depths[1] != null ? depths[1].liveEvent : depths[1]),{"name":"getCurrentSet","hash":{},"data":data}))
    + "</span>\n";
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "		<div class=\"scores\">\n			<span class=\"score-a\">"
    + alias2((helpers.showLiveScore || (depth0 && depth0.showLiveScore) || alias1).call(depth0,(depths[1] != null ? depths[1].score : depths[1]),"a",{"name":"showLiveScore","hash":{},"data":data}))
    + "</span>\n			<span>-</span>\n			<span class=\"score-b\">"
    + alias2((helpers.showLiveScore || (depth0 && depth0.showLiveScore) || alias1).call(depth0,(depths[1] != null ? depths[1].score : depths[1]),"b",{"name":"showLiveScore","hash":{},"data":data}))
    + "</span>\n		</div>\n		<span class=\"live-time\" data-time-m=\""
    + alias2(alias3(((stack1 = ((stack1 = (depths[1] != null ? depths[1].liveEvent : depths[1])) != null ? stack1.time : stack1)) != null ? stack1.m : stack1), depth0))
    + "\" data-time-s=\""
    + alias2(alias3(((stack1 = ((stack1 = (depths[1] != null ? depths[1].liveEvent : depths[1])) != null ? stack1.time : stack1)) != null ? stack1.s : stack1), depth0))
    + "\" data-reversed-time=\""
    + alias2(((helper = (helper = helpers.reversedTime || (depth0 != null ? depth0.reversedTime : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"reversedTime","hash":{},"data":data}) : helper)))
    + "\" data-status=\""
    + alias2(alias3(((stack1 = ((stack1 = (depths[1] != null ? depths[1].liveEvent : depths[1])) != null ? stack1.time : stack1)) != null ? stack1.status : stack1), depth0))
    + "\">"
    + alias2((helpers.runningTime || (depth0 && depth0.runningTime) || alias1).call(depth0,((stack1 = (depths[1] != null ? depths[1].liveEvent : depths[1])) != null ? stack1.time : stack1),(depths[1] != null ? depths[1].reversedTime : depths[1]),{"name":"runningTime","hash":{},"data":data}))
    + "</span>\n";
},"6":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"date\">\n    "
    + alias2((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias1).call(depth0,(depth0 != null ? depth0.date : depth0),"date",{"name":"formatDateTime","hash":{},"data":data}))
    + "\n</div>\n<div class=\"time\">\n    "
    + alias2((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias1).call(depth0,(depth0 != null ? depth0.date : depth0),"time",{"name":"formatDateTime","hash":{},"data":data}))
    + "\n</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.livemode : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(6, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
this["MyApp"]["templates"]["empty-league"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"loading no-market\">\n	"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"sports.noavailable",{"name":"t","hash":{},"data":data}))
    + " \n</div>";
},"useData":true});
this["MyApp"]["templates"]["expanded-markets"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "    <div class=\"more-market market m-"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.id : stack1), depth0))
    + alias2((helpers.showFlags || (depth0 && depth0.showFlags) || alias3).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.flags : stack1),{"name":"showFlags","hash":{},"data":data}))
    + " "
    + alias2((helpers.getClassForStyle || (depth0 && depth0.getClassForStyle) || alias3).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.style : stack1),{"name":"getClassForStyle","hash":{},"data":data}))
    + "\">\n        <div class=\"market-group\">\n		    <div class=\"title-row\">\n		        "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.description : stack1), depth0))
    + " - "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.period : stack1), depth0))
    + "\n		    </div>\n		    <div class=\"group-row outcome-size-"
    + alias2((helpers.size || (depth0 && depth0.size) || alias3).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.children : stack1),{"name":"size","hash":{},"data":data}))
    + "\">\n"
    + ((stack1 = (helpers.foreach || (depth0 && depth0.foreach) || alias3).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1.market : stack1)) != null ? stack1.children : stack1),{"name":"foreach","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		    </div>\n		</div>\n    </div>\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "		            <div class=\"group-cell\" title=\""
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/more-market-cell-outcome'],depth0,{"name":"asianview/common/more-market-cell-outcome","hash":{"outcomeDescription":(depth0 != null ? depth0.description : depth0),"i":(depth0 != null ? depth0.$index : depth0),"description":((stack1 = ((stack1 = (depths[1] != null ? depths[1].children : depths[1])) != null ? stack1.market : stack1)) != null ? stack1.description : stack1),"outcome":depth0},"data":data,"indent":"\t\t                ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "		            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.foreach || (depth0 && depth0.foreach) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.markets : depth0),{"name":"foreach","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["group-012"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"market-group-"
    + alias3(((helper = (helper = helpers.criteria || (depth0 != null ? depth0.criteria : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"criteria","hash":{},"data":data}) : helper)))
    + " m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n	<div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['0'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['2'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["group-1x1-price"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"market-group group-1x1\">\n	<div class=\"group-row\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-outcome'],depth0,{"name":"asianview/common/cell-outcome","hash":{"outcome":(depth0 != null ? depth0.outcome : depth0)},"data":data,"indent":"\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "	</div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["group-1x1-spread"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"market-group group-1x1\">\n	<div class=\"group-row\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-spread-single'],depth0,{"name":"asianview/common/cell-spread-single","hash":{"outcomeB":(depth0 != null ? depth0.outcomeB : depth0),"outcomeA":(depth0 != null ? depth0.outcomeA : depth0)},"data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "	</div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["group-1x2"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"market-group-"
    + alias3(((helper = (helper = helpers.criteria || (depth0 != null ? depth0.criteria : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"criteria","hash":{},"data":data}) : helper)))
    + " market-1X2 market m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n	<div class=\"group-row\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-outcome'],depth0,{"name":"asianview/common/cell-outcome","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['0'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"group-row\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-outcome'],depth0,{"name":"asianview/common/cell-outcome","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['2'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"group-row\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-outcome'],depth0,{"name":"asianview/common/cell-outcome","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["group-1x3"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return alias2((helpers.consoleLog || (depth0 && depth0.consoleLog) || alias1).call(depth0,depth0,{"name":"consoleLog","hash":{},"data":data}))
    + "\n<div class=\"market-group-"
    + alias2(((helper = (helper = helpers.criteria || (depth0 != null ? depth0.criteria : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"criteria","hash":{},"data":data}) : helper)))
    + " m-"
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias2((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n	<div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-outcome'],depth0,{"name":"asianview/common/cell-outcome","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['0'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-outcome'],depth0,{"name":"asianview/common/cell-outcome","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['2'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-outcome'],depth0,{"name":"asianview/common/cell-outcome","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["group-cs-1x2"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"market\">\n        <div class=\"group-row\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-outcome'],depth0,{"name":"asianview/common/cell-outcome","hash":{"outcome":(depth0 != null ? depth0.outcomeA : depth0)},"data":data,"indent":"                ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"group-row\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-outcome'],depth0,{"name":"asianview/common/cell-outcome","hash":{"outcome":(depth0 != null ? depth0.outcomeB : depth0)},"data":data,"indent":"                ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["group-cs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"market-group-"
    + alias3(((helper = (helper = helpers.criteria || (depth0 != null ? depth0.criteria : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"criteria","hash":{},"data":data}) : helper)))
    + " m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-cs-1x2'],depth0,{"name":"asianview/common/group-cs-1x2","hash":{"rowspan":1,"outcomeB":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['15'] : stack1),"outcomeA":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['0'] : stack1)},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials['asianview/common/group-cs-1x2'],depth0,{"name":"asianview/common/group-cs-1x2","hash":{"rowspan":1,"outcomeB":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['16'] : stack1),"outcomeA":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1'] : stack1)},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials['asianview/common/group-cs-1x2'],depth0,{"name":"asianview/common/group-cs-1x2","hash":{"rowspan":1,"outcomeB":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['17'] : stack1),"outcomeA":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['2'] : stack1)},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials['asianview/common/group-cs-1x2'],depth0,{"name":"asianview/common/group-cs-1x2","hash":{"rowspan":1,"outcomeB":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['18'] : stack1),"outcomeA":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['3'] : stack1)},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials['asianview/common/group-cs-1x2'],depth0,{"name":"asianview/common/group-cs-1x2","hash":{"rowspan":1,"outcomeB":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['19'] : stack1),"outcomeA":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['4'] : stack1)},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials['asianview/common/group-cs-1x2'],depth0,{"name":"asianview/common/group-cs-1x2","hash":{"rowspan":1,"outcomeB":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['20'] : stack1),"outcomeA":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['5'] : stack1)},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials['asianview/common/group-cs-1x2'],depth0,{"name":"asianview/common/group-cs-1x2","hash":{"rowspan":1,"outcomeB":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['21'] : stack1),"outcomeA":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['6'] : stack1)},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials['asianview/common/group-cs-1x2'],depth0,{"name":"asianview/common/group-cs-1x2","hash":{"rowspan":1,"outcomeB":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['22'] : stack1),"outcomeA":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['7'] : stack1)},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials['asianview/common/group-cs-1x2'],depth0,{"name":"asianview/common/group-cs-1x2","hash":{"rowspan":1,"outcomeB":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['23'] : stack1),"outcomeA":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['8'] : stack1)},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials['asianview/common/group-cs-1x2'],depth0,{"name":"asianview/common/group-cs-1x2","hash":{"rowspan":1,"outcomeB":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['24'] : stack1),"outcomeA":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['9'] : stack1)},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\n        <div class=\"market\">"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['10'] : stack1)},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n        <div class=\"market\">"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['11'] : stack1)},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n        <div class=\"market\">"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['12'] : stack1)},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n        <div class=\"market\">"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['13'] : stack1)},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n        <div class=\"market\">"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['14'] : stack1)},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n        <div class=\"market\">"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['25'] : stack1)},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["group-gou"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"market-group-"
    + alias3(((helper = (helper = helpers.criteria || (depth0 != null ? depth0.criteria : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"criteria","hash":{},"data":data}) : helper)))
    + " m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n	<div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-spread'],depth0,{"name":"asianview/common/group-1x1-spread","hash":{"outcomeB":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1'] : stack1),"outcomeA":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['0'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['0'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n</div>        ";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["group-hdp"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"market-group-"
    + alias3(((helper = (helper = helpers.criteria || (depth0 != null ? depth0.criteria : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"criteria","hash":{},"data":data}) : helper)))
    + " market-HDP market m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n	<div class=\"group-row\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-spread-double'],depth0,{"name":"asianview/common/cell-spread-double","hash":{"prefix":(depth0 != null ? depth0.prefixA : depth0),"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['0'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-outcome'],depth0,{"name":"asianview/common/cell-outcome","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['0'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"group-row\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-spread-double'],depth0,{"name":"asianview/common/cell-spread-double","hash":{"prefix":(depth0 != null ? depth0.prefixB : depth0),"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-outcome'],depth0,{"name":"asianview/common/cell-outcome","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["group-hha"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n<div class=\"market-group-"
    + alias3(((helper = (helper = helpers.criteria || (depth0 != null ? depth0.criteria : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"criteria","hash":{},"data":data}) : helper)))
    + " m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n	<div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-spread'],depth0,{"name":"asianview/common/group-1x1-spread","hash":{"outcomeB":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1'] : stack1),"outcomeA":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['0'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['0'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["group-htft"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"market-group-"
    + alias3(((helper = (helper = helpers.criteria || (depth0 != null ? depth0.criteria : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"criteria","hash":{},"data":data}) : helper)))
    + " m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n        <div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['0'] : stack1)},"data":data,"indent":"        \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1'] : stack1)},"data":data,"indent":"        \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['2'] : stack1)},"data":data,"indent":"        \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['3'] : stack1)},"data":data,"indent":"        \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['4'] : stack1)},"data":data,"indent":"        \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['5'] : stack1)},"data":data,"indent":"        \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['6'] : stack1)},"data":data,"indent":"        \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['7'] : stack1)},"data":data,"indent":"        \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['8'] : stack1)},"data":data,"indent":"        \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["group-ml"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"market-group-"
    + alias3(((helper = (helper = helpers.criteria || (depth0 != null ? depth0.criteria : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"criteria","hash":{},"data":data}) : helper)))
    + " market-ML market m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n	<div class=\"group-row\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-outcome'],depth0,{"name":"asianview/common/cell-outcome","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['0'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"group-row\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-outcome'],depth0,{"name":"asianview/common/cell-outcome","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["group-odd"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"market-group-"
    + alias3(((helper = (helper = helpers.criteria || (depth0 != null ? depth0.criteria : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"criteria","hash":{},"data":data}) : helper)))
    + " m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n	<div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['0'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["group-oe"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"market-group-"
    + alias3(((helper = (helper = helpers.criteria || (depth0 != null ? depth0.criteria : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"criteria","hash":{},"data":data}) : helper)))
    + " market-OE market m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n	<div class=\"group-row\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-prefix'],depth0,{"name":"asianview/common/cell-prefix","hash":{"prefix":"o","outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['0'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-outcome'],depth0,{"name":"asianview/common/cell-outcome","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['0'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"group-row\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-prefix'],depth0,{"name":"asianview/common/cell-prefix","hash":{"prefix":"e","outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-outcome'],depth0,{"name":"asianview/common/cell-outcome","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["group-ou"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"market-group-"
    + alias3(((helper = (helper = helpers.criteria || (depth0 != null ? depth0.criteria : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"criteria","hash":{},"data":data}) : helper)))
    + " market-OU market m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n	<div class=\"group-row\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-spread-double'],depth0,{"name":"asianview/common/cell-spread-double","hash":{"prefix":"o","outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['0'] : stack1)},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-prefix'],depth0,{"name":"asianview/common/cell-prefix","hash":{"prefix":"o","outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['0'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-outcome'],depth0,{"name":"asianview/common/cell-outcome","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['0'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"group-row\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-spread-double'],depth0,{"name":"asianview/common/cell-spread-double","hash":{"prefix":"u","outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1'] : stack1)},"data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-prefix'],depth0,{"name":"asianview/common/cell-prefix","hash":{"prefix":"u","outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-outcome'],depth0,{"name":"asianview/common/cell-outcome","hash":{"outcome":((stack1 = (depth0 != null ? depth0.children : depth0)) != null ? stack1['1'] : stack1)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["group-outright"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"outright-row team-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.id : stack1), depth0))
    + " "
    + alias2((helpers.showFlags || (depth0 && depth0.showFlags) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.flags : stack1),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n    <div class=\"wrapper\">\n        <div class=\"cell-team teams\">\n            <span class=\"team-name\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.team : depth0)) != null ? stack1.description : stack1), depth0))
    + "</span>\n        </div>\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/cell-outcome'],depth0,{"name":"asianview/common/cell-outcome","hash":{"outcome":(depth0 != null ? depth0.team : depth0)},"data":data,"indent":"    \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["group-tg"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"market\">\n"
    + ((stack1 = this.invokePartial(partials['asianview/common/group-1x1-price'],depth0,{"name":"asianview/common/group-1x1-price","hash":{"outcome":depth0},"data":data,"indent":"        \t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"market-group-"
    + alias3(((helper = (helper = helpers.criteria || (depth0 != null ? depth0.criteria : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"criteria","hash":{},"data":data}) : helper)))
    + " m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n"
    + ((stack1 = (helpers.foreach || (depth0 && depth0.foreach) || alias1).call(depth0,(helpers.totalGoals || (depth0 && depth0.totalGoals) || alias1).call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"totalGoals","hash":{},"data":data}),{"name":"foreach","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["header"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "	<div class=\"tcol "
    + this.escapeExpression(((helper = (helper = helpers.klas || (depth0 != null ? depth0.klas : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"klas","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = (helpers.foreach || (depth0 && depth0.foreach) || alias1).call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"foreach","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "			<div class=\"trow "
    + this.escapeExpression(((helper = (helper = helpers.klas || (depth0 != null ? depth0.klas : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"klas","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = (helpers.foreach || (depth0 && depth0.foreach) || alias1).call(depth0,(depth0 != null ? depth0.cells : depth0),{"name":"foreach","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "					<div class=\"tcol tcell "
    + alias3(((helper = (helper = helpers.klas || (depth0 != null ? depth0.klas : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"klas","hash":{},"data":data}) : helper)))
    + "\">\n						<span>"
    + alias3(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"desc","hash":{},"data":data}) : helper)))
    + "</span>\n					</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"tcol tcell tspan-2 col-time\">\n    <span>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"asianView.time",{"name":"t","hash":{},"data":data}))
    + "</span>\n</div>\n<div class=\"tcol tcell tspan-2 col-events\">\n    <span>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"asianView.events",{"name":"t","hash":{},"data":data}))
    + "</span>\n</div>\n\n"
    + ((stack1 = (helpers.foreach || (depth0 && depth0.foreach) || alias1).call(depth0,(depth0 != null ? depth0.cols : depth0),{"name":"foreach","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n<div class=\"tcol tcell tspan-2 col-more\">\n	<span>"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"asianView.more",{"name":"t","hash":{},"data":data}))
    + "</span>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["league-block"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "hidden";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.parseTitle || (depth0 && depth0.parseTitle) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.title : stack1),{"name":"parseTitle","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"4":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                    <span class=\"title\">\n                        <span>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n                        <span class=\"season-title\">"
    + alias3(((helper = (helper = helpers.season || (depth0 != null ? depth0.season : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"season","hash":{},"data":data}) : helper)))
    + "</span>\n                    </span>\n";
},"6":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <span class=\"title\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression, alias2=this.lambda;

  return "<div class=\"league-block league "
    + alias1(((helper = (helper = helpers.visible || (depth0 != null ? depth0.visible : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"visible","hash":{},"data":data}) : helper)))
    + " p-"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.id : stack1), depth0))
    + " "
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.initHidden : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" data-path=\""
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.league : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n    <div class=\"league-title\">\n        <div class=\"wrapper\"> \n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.virtual : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n    <div class=\"events-container\">\n    </div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["loading"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"loading\">\n    <i class=\"fa fa-spin fa-spinner\"></i> "
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"asianView.loading",{"name":"t","hash":{},"data":data}))
    + "\n</div>";
},"useData":true});
this["MyApp"]["templates"]["more-market-cell-outcome"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "\n<div class=\"outcome o-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.id : stack1), depth0))
    + alias2((helpers.getOutcomeDirection || (depth0 && depth0.getOutcomeDirection) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.dir : stack1),{"name":"getOutcomeDirection","hash":{},"data":data}))
    + alias2((helpers.showFlags || (depth0 && depth0.showFlags) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.flags : stack1),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n	<a class=\"price "
    + alias2((helpers.showFlags || (depth0 && depth0.showFlags) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.flags : stack1),{"name":"showFlags","hash":{},"data":data}))
    + "\" data-outcome=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" data-price=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.price : stack1), depth0))
    + "\" >\n		<div class=\"cell-title\">\n"
    + ((stack1 = (helpers.isEqual || (depth0 && depth0.isEqual) || alias3).call(depth0,(depth0 != null ? depth0.outcomeDescription : depth0),"Draw",{"name":"isEqual","hash":{},"fn":this.program(2, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "		</div>\n		"
    + alias2((helpers.consoleLog || (depth0 && depth0.consoleLog) || alias3).call(depth0,(depth0 != null ? depth0.outcome : depth0),{"name":"consoleLog","hash":{},"data":data}))
    + "\n		<div class=\"cell-price\">\n			"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.price : stack1), depth0))
    + "\n			<span class=\"dir-caret\"></span>\n		</div>\n	</a>\n</div>\n\n";
},"2":function(depth0,helpers,partials,data) {
    return "	            X\n";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isEqual || (depth0 && depth0.isEqual) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.description : depth0),"Double Chance",{"name":"isEqual","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "");
},"5":function(depth0,helpers,partials,data) {
    return "	                "
    + this.escapeExpression((helpers.getDoubleChanceCellTitles || (depth0 && depth0.getDoubleChanceCellTitles) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.i : depth0),{"name":"getDoubleChanceCellTitles","hash":{},"data":data}))
    + "\n";
},"7":function(depth0,helpers,partials,data) {
    var helper;

  return "	                "
    + this.escapeExpression(((helper = (helper = helpers.outcomeDescription || (depth0 != null ? depth0.outcomeDescription : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"outcomeDescription","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.outcome : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["MyApp"]["templates"]["outcome-cell"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"col col-OUTCOME outcome "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.dir : stack1), depth0))
    + "\">\n    <div class=\"wrapper2\">\n        <div class=\"price-container\">\n        	<a class=\"price\" data-outcome=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" data-price=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.price : stack1), depth0))
    + "\">\n        		<span class=\"dir-caret\"></span>\n        		"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.price : stack1), depth0))
    + "\n        	</a>\n        </div>\n    </div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["select-league-modal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "	<li>\n		<label>\n			<span class=\"checkbox-wrap "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.status : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\"><input type=\"checkbox\" class=\"league-selector\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.status : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " data-value=\""
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" ></span>\n			"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n		</label>\n	</li>\n";
},"2":function(depth0,helpers,partials,data) {
    return "checked";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.list : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});
this["MyApp"]["templates"]["select-market-modal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "checked";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "			<li>\n				<label>\n					<span class=\"checkbox-wrap "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.marketVisible : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\"><input type=\"checkbox\" class=\"league-selector match-selector\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.marketVisible : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " data-value=\""
    + alias3(((helper = (helper = helpers.marketGroup || (depth0 != null ? depth0.marketGroup : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"marketGroup","hash":{},"data":data}) : helper)))
    + "\" ></span>\n					"
    + alias3(((helper = (helper = helpers.marketGroup || (depth0 != null ? depth0.marketGroup : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"marketGroup","hash":{},"data":data}) : helper)))
    + "\n				</label>\n			</li>\n";
},"5":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "			<li>\n				<label>\n					<span class=\"checkbox-wrap "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.marketVisible : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\"><input type=\"checkbox\" class=\"league-selector period-selector\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.marketVisible : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " data-value=\""
    + alias3(((helper = (helper = helpers.marketPeriod || (depth0 != null ? depth0.marketPeriod : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"marketPeriod","hash":{},"data":data}) : helper)))
    + "\" ></span>\n					"
    + alias3(((helper = (helper = helpers.marketPeriod || (depth0 != null ? depth0.marketPeriod : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"marketPeriod","hash":{},"data":data}) : helper)))
    + "\n				</label>\n			</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"filter-header\">\n	<div class=\"filter-title\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"marketModal.matchType",{"name":"t","hash":{},"data":data}))
    + "</div>\n	<div class=\"filter-error\">\n		*Please select at least one match type.\n	</div>\n	<div class=\"filter-body\">\n		<ul>\n			<li>\n				<label>\n					<span class=\"checkbox-wrap "
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.marketAll : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\"><input type=\"checkbox\" class=\"select-all-selector\" data-target=\"match-selector\" "
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.marketAll : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "></span>\n					Select All\n				</label>\n			</li>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.marketGroup : stack1),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</ul>\n	</div>\n</div>\n<div class=\"filter-header\">\n	<div class=\"filter-title\">"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"marketModal.periodType",{"name":"t","hash":{},"data":data}))
    + "</div>\n	<div class=\"filter-error\">\n		*Please select at least one period.\n	</div>\n	<div class=\"filter-body\">\n		<ul>\n			<li>\n				<label>\n					<span class=\"checkbox-wrap "
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.periodAll : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\"><input type=\"checkbox\" class=\"select-all-selector\" data-target=\"period-selector\" "
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.periodAll : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "></span>\n					Select All\n				</label>\n			</li>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.marketPeriod : stack1),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</ul>\n	</div>\n</div>	";
},"useData":true});
this["MyApp"]["templates"]["cell-outcome"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return " SP";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.race : stack1), depth0));
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.pos : stack1), depth0));
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.price : stack1), depth0));
},"9":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.sp : stack1),{"name":"if","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"10":function(depth0,helpers,partials,data) {
    return "SP";
},"12":function(depth0,helpers,partials,data) {
    var helper;

  return "                <img class=\"team-img\" src=\""
    + this.escapeExpression(((helper = (helper = helpers.imagePath || (depth0 != null ? depth0.imagePath : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"imagePath","hash":{},"data":data}) : helper)))
    + "\">\n";
},"14":function(depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.price : stack1), depth0))
    + "\n";
},"16":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.sp : stack1),{"name":"if","hash":{},"fn":this.program(17, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"17":function(depth0,helpers,partials,data) {
    return "                        SP\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "<div class=\"cell cell-outcome outcome o-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.id : stack1), depth0))
    + alias2((helpers.getOutcomeDirection || (depth0 && depth0.getOutcomeDirection) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.dir : stack1),{"name":"getOutcomeDirection","hash":{},"data":data}))
    + " "
    + alias2((helpers.showFlags || (depth0 && depth0.showFlags) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.flags : stack1),{"name":"showFlags","hash":{},"data":data}))
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.sp : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" data-pos=\""
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.race : stack1),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n    <div class=\"price-container\">\n    	<a class=\"price "
    + alias2((helpers.showFlags || (depth0 && depth0.showFlags) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.flags : stack1),{"name":"showFlags","hash":{},"data":data}))
    + "\" data-outcome=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" data-price=\""
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.price : stack1),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "\" title=\""
    + alias2(((helper = (helper = helpers.team || (depth0 != null ? depth0.team : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(depth0,{"name":"team","hash":{},"data":data}) : helper)))
    + "\">\n\n\n        <span class=\"team\">\n\n\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.imagePath : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n\n            "
    + alias2((helpers.parseTeamName || (depth0 && depth0.parseTeamName) || alias3).call(depth0,(depth0 != null ? depth0.outcome : depth0),(depth0 != null ? depth0.code : depth0),{"name":"parseTeamName","hash":{},"data":data}))
    + "\n\n        </span>\n\n    		<div class=\"european-price\">\n    			<span class=\"dir-caret\"></span>\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.price : stack1),{"name":"if","hash":{},"fn":this.program(14, data, 0),"inverse":this.program(16, data, 0),"data":data})) != null ? stack1 : "")
    + "    		</div>\n    	</a>\n    </div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["date-cell"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "	<div class=\"scores-container\">\n		<span class=\"live-period-msg\">\n			<span class=\"score-a\">"
    + alias2((helpers.showScore || (depth0 && depth0.showScore) || alias1).call(depth0,(depth0 != null ? depth0.liveEvent : depth0),"a",{"name":"showScore","hash":{},"data":data}))
    + "</span>\n\n			<span class=\"score-b\">"
    + alias2((helpers.showScore || (depth0 && depth0.showScore) || alias1).call(depth0,(depth0 != null ? depth0.liveEvent : depth0),"b",{"name":"showScore","hash":{},"data":data}))
    + "</span>\n		</span>\n	</div>\n	\n";
},"3":function(depth0,helpers,partials,data) {
    return "	<span class=\"datetime\">\n		"
    + this.escapeExpression((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.date : depth0),"MM/DD hh:mm A",{"name":"formatDateTime","hash":{},"data":data}))
    + "\n	</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.livemode : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " <!--span></span-->\n";
},"useData":true});
this["MyApp"]["templates"]["event-block"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "         <span class=\"market-sep\">-</span> \n         <span class=\"market-period\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.marketData : depth0)) != null ? stack1.period : stack1), depth0))
    + "</span>\n";
},"3":function(depth0,helpers,partials,data) {
    return "virtual";
},"5":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=helpers.helperMissing;

  return ((stack1 = (helpers.foreach || (depth0 && depth0.foreach) || alias1).call(depth0,(helpers.toColumnsFavourite || (depth0 && depth0.toColumnsFavourite) || alias1).call(depth0,(depth0 != null ? depth0.children : depth0),2,{"name":"toColumnsFavourite","hash":{},"data":data}),{"name":"foreach","hash":{},"fn":this.program(6, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"6":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "                <div class=\"col-group grey-number\">\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n";
},"7":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['europeanview/common/group-1x1-price'],depth0,{"name":"europeanview/common/group-1x1-price","hash":{"code":(depths[1] != null ? depths[1].code : depths[1]),"imagePath":(depths[2] != null ? depths[2].imagePath : depths[2]),"virtual":(depths[1] != null ? depths[1].virtual : depths[1]),"team":(depth0 != null ? depth0.description : depth0),"outcome":depth0},"data":data,"indent":"                        ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"9":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"each","hash":{},"fn":this.program(10, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"10":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['europeanview/common/group-1x1-price'],depth0,{"name":"europeanview/common/group-1x1-price","hash":{"code":(depths[1] != null ? depths[1].code : depths[1]),"imagePath":(depths[2] != null ? depths[2].imagePath : depths[2]),"virtual":(depths[1] != null ? depths[1].virtual : depths[1]),"team":(depth0 != null ? depth0.description : depth0),"outcome":depth0},"data":data,"indent":"                ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"event-markets "
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + " default-market-"
    + alias3((helpers.size || (depth0 && depth0.size) || alias1).call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"size","hash":{},"data":data}))
    + "\" data-style=\""
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"col-markets-desc "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n\n        <span class=\"market-desc\">"
    + alias3(this.lambda(((stack1 = (depth0 != null ? depth0.marketData : depth0)) != null ? stack1.description : stack1), depth0))
    + "</span> \n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.marketData : depth0)) != null ? stack1.period : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"col-markets "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.virtual : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " with-desc m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + " markets-buttons-size-"
    + alias3((helpers.size || (depth0 && depth0.size) || alias1).call(depth0,(depth0 != null ? depth0.defaultButtons : depth0),{"name":"size","hash":{},"data":data}))
    + "\">\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.code : depth0),"===","GREY",{"name":"ifCond","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "    </div>\n"
    + ((stack1 = this.invokePartial(partials['europeanview/common/more'],depth0,{"name":"europeanview/common/more","hash":{"defaultButtons":(depth0 != null ? depth0.defaultButtons : depth0),"brMatchId":(depth0 != null ? depth0.brMatchId : depth0),"eventDescription":(depth0 != null ? depth0.eventDescription : depth0),"liveMode":(depth0 != null ? depth0.liveMode : depth0),"count":(depth0 != null ? depth0.count : depth0),"id":(depth0 != null ? depth0.eventID : depth0),"first":(depth0 != null ? depth0.first : depth0)},"data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["group-1x1-price"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"market-group "
    + this.escapeExpression((helpers.showFlags || (depth0 && depth0.showFlags) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n	<div class=\"group-row\">\n"
    + ((stack1 = this.invokePartial(partials['europeanview/common/cell-outcome'],depth0,{"name":"europeanview/common/cell-outcome","hash":{"outcomeList":(depth0 != null ? depth0.outcomeList : depth0),"imagePath":(depth0 != null ? depth0.imagePath : depth0),"team":(depth0 != null ? depth0.team : depth0),"columns":(depth0 != null ? depth0.columns : depth0),"code":(depth0 != null ? depth0.code : depth0),"outcome":(depth0 != null ? depth0.outcome : depth0)},"data":data,"indent":"\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "	</div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["more"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "virtual";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "        	\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.liveMode : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.program(7, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.virtual : depth0),{"name":"unless","hash":{},"fn":this.program(15, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.lambda, alias3=this.escapeExpression;

  return "                \n                    <button class=\"btn-custom btn-live market-count "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depths[1] != null ? depths[1].count : depths[1]),"===",0,{"name":"ifCond","hash":{},"fn":this.program(5, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " btn-more-"
    + alias3(alias2((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + "\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-count=\""
    + alias3(alias2((depths[1] != null ? depths[1].count : depths[1]), depth0))
    + "\" data-sportcode=\""
    + alias3(alias2((depths[1] != null ? depths[1].code : depths[1]), depth0))
    + "\" >\n                        <i class=\"fa fa-plus\"></i>\n                        <span>"
    + alias3(alias2((depths[1] != null ? depths[1].count : depths[1]), depth0))
    + "</span>\n                    </button>\n                \n";
},"5":function(depth0,helpers,partials,data) {
    return "btn-disabled";
},"7":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(helpers.hasProp || (depth0 && depth0.hasProp) || helpers.helperMissing).call(depth0,(depths[1] != null ? depths[1].defaultButtons : depths[1]),"more",{"name":"hasProp","hash":{},"data":data}),{"name":"if","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"8":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "                    <button class=\"btn-custom "
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.virtual : depth0),{"name":"unless","hash":{},"fn":this.program(9, data, 0, blockParams, depths),"inverse":this.program(11, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + " market-count btn-more-"
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + "\" data-id=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + "\" data-count=\""
    + alias2(alias1((depths[1] != null ? depths[1].count : depths[1]), depth0))
    + "\" "
    + ((stack1 = helpers.unless.call(depth0,(depths[1] != null ? depths[1].count : depths[1]),{"name":"unless","hash":{},"fn":this.program(13, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">\n                        <i class=\"fa fa-plus\"></i>\n                        <span>"
    + alias2(alias1((depths[1] != null ? depths[1].count : depths[1]), depth0))
    + "</span>\n                    </button>\n";
},"9":function(depth0,helpers,partials,data) {
    return " btn-more ";
},"11":function(depth0,helpers,partials,data) {
    return " btn-expand virtual ";
},"13":function(depth0,helpers,partials,data) {
    return "disabled";
},"15":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing;

  return "                \n"
    + ((stack1 = helpers['if'].call(depth0,(helpers.hasProp || (depth0 && depth0.hasProp) || alias1).call(depth0,(depth0 != null ? depth0.defaultButtons : depth0),"stats",{"name":"hasProp","hash":{},"data":data}),{"name":"if","hash":{},"fn":this.program(16, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(helpers.hasProp || (depth0 && depth0.hasProp) || alias1).call(depth0,(depth0 != null ? depth0.defaultButtons : depth0),"fav",{"name":"hasProp","hash":{},"data":data}),{"name":"if","hash":{},"fn":this.program(18, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"16":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                    <button class=\"btn-custom btn-stat "
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.brMatchId : depth0),{"name":"unless","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-matchid=\""
    + alias3(((helper = (helper = helpers.brMatchId || (depth0 != null ? depth0.brMatchId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"brMatchId","hash":{},"data":data}) : helper)))
    + "\" \n                    >\n                    \n                        <i class=\"fa fa-bar-chart\"></i>\n                    </button>\n";
},"18":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                    <button class=\"btn-custom btn-fave btn-addfav\" data-id=\"e"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-title=\""
    + alias3(((helper = (helper = helpers.eventDescription || (depth0 != null ? depth0.eventDescription : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"eventDescription","hash":{},"data":data}) : helper)))
    + "\">\n                        <i class=\"fa fa-star-o\"></i>\n                    </button>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"more "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.virtual : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " action-buttons-size-"
    + this.escapeExpression((helpers.size || (depth0 && depth0.size) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.defaultButtons : depth0),{"name":"size","hash":{},"data":data}))
    + "\">\n    <div class=\"wrapper\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.first : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"useData":true,"useDepths":true});
this["MyApp"]["templates"]["set-scores"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "    <div class=\"scores"
    + alias2((helpers.updateSets || (depth0 && depth0.updateSets) || alias1).call(depth0,(depths[1] != null ? depths[1].sets : depths[1]),depth0,{"name":"updateSets","hash":{},"data":data}))
    + alias2((helpers.isSetActive || (depth0 && depth0.isSetActive) || alias1).call(depth0,(depths[1] != null ? depths[1].sets : depths[1]),depth0,{"name":"isSetActive","hash":{},"data":data}))
    + "\">\n        <span class=\"score-a\">"
    + alias2((helpers.showScoreOnSet || (depth0 && depth0.showScoreOnSet) || alias1).call(depth0,(depths[1] != null ? depths[1].sets : depths[1]),depth0,"a","0",{"name":"showScoreOnSet","hash":{},"data":data}))
    + "</span><span>-</span><span class=\"score-b\">"
    + alias2((helpers.showScoreOnSet || (depth0 && depth0.showScoreOnSet) || alias1).call(depth0,(depths[1] != null ? depths[1].sets : depths[1]),depth0,"b","0",{"name":"showScoreOnSet","hash":{},"data":data}))
    + "</span><span class=\"set-separator\">/</span>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.times || (depth0 && depth0.times) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.count : depth0),{"name":"times","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
this["MyApp"]["templates"]["cell-outcome"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return "<div class=\"cell cell-outcome outcome o-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.id : stack1), depth0))
    + alias2((helpers.getOutcomeDirection || (depth0 && depth0.getOutcomeDirection) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.dir : stack1),{"name":"getOutcomeDirection","hash":{},"data":data}))
    + " "
    + alias2((helpers.showFlags || (depth0 && depth0.showFlags) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.flags : stack1),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n    <div class=\"price-container\">\n    	<a class=\"price btn "
    + alias2((helpers.showFlags || (depth0 && depth0.showFlags) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.flags : stack1),{"name":"showFlags","hash":{},"data":data}))
    + "\" data-outcome=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" data-price=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.price : stack1), depth0))
    + "\" title=\""
    + alias2(((helper = (helper = helpers.team || (depth0 != null ? depth0.team : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"team","hash":{},"data":data}) : helper)))
    + "\">\n    		<span class=\"team\">"
    + alias2(((helper = (helper = helpers.team || (depth0 != null ? depth0.team : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"team","hash":{},"data":data}) : helper)))
    + "</span>\n    		<div class=\"european-price\">\n    			<span class=\"dir-caret\"></span>\n    			"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.outcome : depth0)) != null ? stack1.price : stack1), depth0))
    + "\n    		</div>\n    	</a>\n    </div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["date-cell"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.liveEvent : depth0)) != null ? stack1.time : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.program(14, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "	\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=helpers.helperMissing;

  return "		<div class=\"scores-container\">\n		<!--"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,"this.code == 'VOLL' || this.code == 'TENN'",{"name":"ifCond","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.program(8, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "-->\n		</div>\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,(depth0 != null ? depth0.status : depth0),"===","5",{"name":"ifCond","hash":{},"fn":this.program(10, data, 0, blockParams, depths),"inverse":this.program(12, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\n"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0,"this.code == 'VOLL'",{"name":"ifCond","hash":{},"fn":this.program(4, data, 0, blockParams, depths),"inverse":this.program(6, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"4":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['europeanview/common/set-scores'],depth0,{"name":"europeanview/common/set-scores","hash":{"sets":(depths[2] != null ? depths[2].sets : depths[2]),"count":5},"data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"6":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['europeanview/common/set-scores'],depth0,{"name":"europeanview/common/set-scores","hash":{"sets":(depths[2] != null ? depths[2].sets : depths[2]),"count":3},"data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"8":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<span class=\"score-a\">"
    + alias2((helpers.showMatchScore || (depth0 && depth0.showMatchScore) || alias1).call(depth0,(depths[1] != null ? depths[1].score : depths[1]),"a",{"name":"showMatchScore","hash":{},"data":data}))
    + "</span>\n			<span>-</span>\n			<span class=\"score-b\">"
    + alias2((helpers.showMatchScore || (depth0 && depth0.showMatchScore) || alias1).call(depth0,(depths[1] != null ? depths[1].score : depths[1]),"b",{"name":"showMatchScore","hash":{},"data":data}))
    + "</span>\n		";
},"10":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "			<span class=\"live-time\">\n				"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"livePeriods.gameEnded",{"name":"t","hash":{},"data":data}))
    + "\n				<span class=\"score-a\">"
    + alias2((helpers.showMatchScore || (depth0 && depth0.showMatchScore) || alias1).call(depth0,(depth0 != null ? depth0.match : depth0),"a",{"name":"showMatchScore","hash":{},"data":data}))
    + "</span>\n				<span>-</span>\n				<span class=\"score-b\">"
    + alias2((helpers.showMatchScore || (depth0 && depth0.showMatchScore) || alias1).call(depth0,(depth0 != null ? depth0.match : depth0),"b",{"name":"showMatchScore","hash":{},"data":data}))
    + "</span>\n			</span>\n";
},"12":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression, alias3=helpers.helperMissing;

  return "			<span class=\"live-time\" data-time-m=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.liveEvent : depth0)) != null ? stack1.time : stack1)) != null ? stack1.m : stack1), depth0))
    + "\" data-time-s=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.liveEvent : depth0)) != null ? stack1.time : stack1)) != null ? stack1.s : stack1), depth0))
    + "\" data-reversed-time=\""
    + alias2(((helper = (helper = helpers.reversedTime || (depth0 != null ? depth0.reversedTime : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(depth0,{"name":"reversedTime","hash":{},"data":data}) : helper)))
    + "\" data-status=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.liveEvent : depth0)) != null ? stack1.time : stack1)) != null ? stack1.status : stack1), depth0))
    + "\">"
    + alias2((helpers.runningTime || (depth0 && depth0.runningTime) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.liveEvent : depth0)) != null ? stack1.time : stack1),(depth0 != null ? depth0.reversedTime : depth0),{"name":"runningTime","hash":{},"data":data}))
    + "</span>\n			<span class=\"live-period-msg\">\n				"
    + alias2((helpers.getLivePeriod || (depth0 && depth0.getLivePeriod) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.liveEvent : depth0)) != null ? stack1.msgs : stack1),{"name":"getLivePeriod","hash":{},"data":data}))
    + "\n				<span class=\"score-a\">"
    + alias2((helpers.showMatchScore || (depth0 && depth0.showMatchScore) || alias3).call(depth0,(depth0 != null ? depth0.match : depth0),"a",{"name":"showMatchScore","hash":{},"data":data}))
    + "</span>\n				<span>-</span>\n				<span class=\"score-b\">"
    + alias2((helpers.showMatchScore || (depth0 && depth0.showMatchScore) || alias3).call(depth0,(depth0 != null ? depth0.match : depth0),"b",{"name":"showMatchScore","hash":{},"data":data}))
    + "</span>\n			</span>\n			<span class=\"live-status-msg\">"
    + alias2((helpers.getLiveStatusIcon || (depth0 && depth0.getLiveStatusIcon) || alias3).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.liveEvent : depth0)) != null ? stack1.time : stack1)) != null ? stack1.status : stack1),{"name":"getLiveStatusIcon","hash":{},"data":data}))
    + "</span>\n";
},"14":function(depth0,helpers,partials,data) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "		<span class=\"live-time\">\n			"
    + alias2((helpers.t || (depth0 && depth0.t) || alias1).call(depth0,"livePeriods.startingAt",{"name":"t","hash":{},"data":data}))
    + " "
    + alias2((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias1).call(depth0,(depth0 != null ? depth0.date : depth0),"MM/DD hh:mm A",{"name":"formatDateTime","hash":{},"data":data}))
    + "\n		</span>\n";
},"16":function(depth0,helpers,partials,data) {
    return "	<span class=\"datetime\">\n		"
    + this.escapeExpression((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.date : depth0),"MM/DD hh:mm A",{"name":"formatDateTime","hash":{},"data":data}))
    + "\n	</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.livemode : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.program(16, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true});
this["MyApp"]["templates"]["event-block"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials['europeanview/common/group-1x1-price'],depth0,{"name":"europeanview/common/group-1x1-price","hash":{"team":(depth0 != null ? depth0.description : depth0),"outcome":depth0},"data":data,"indent":"            ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "\n<div class=\"event-markets "
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + " default-market-"
    + alias3((helpers.size || (depth0 && depth0.size) || alias1).call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"size","hash":{},"data":data}))
    + "\" data-style=\""
    + alias3(((helper = (helper = helpers.style || (depth0 != null ? depth0.style : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"style","hash":{},"data":data}) : helper)))
    + "\">\n	"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "\n	<div class=\"col-markets-desc "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n        <span>"
    + alias3(alias4((depth0 != null ? depth0.market : depth0), depth0))
    + "</span>\n    </div>\n    <div class=\"col-markets with-desc m-"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + " "
    + alias3((helpers.showFlags || (depth0 && depth0.showFlags) || alias1).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n    	\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.children : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        \n    </div>\n"
    + ((stack1 = this.invokePartial(partials['europeanview/common/more'],depth0,{"name":"europeanview/common/more","hash":{"brMatchId":(depth0 != null ? depth0.brMatchId : depth0),"eventDescription":(depth0 != null ? depth0.eventDescription : depth0),"liveMode":(depth0 != null ? depth0.liveMode : depth0),"count":(depth0 != null ? depth0.count : depth0),"id":(depth0 != null ? depth0.eventID : depth0),"first":(depth0 != null ? depth0.first : depth0)},"data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "    "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.description : stack1), depth0))
    + "\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["group-1x1-price"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"market-group "
    + this.escapeExpression((helpers.showFlags || (depth0 && depth0.showFlags) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.flags : depth0),{"name":"showFlags","hash":{},"data":data}))
    + "\">\n	<div class=\"group-row\">\n"
    + ((stack1 = this.invokePartial(partials['europeanview/common/cell-outcome'],depth0,{"name":"europeanview/common/cell-outcome","hash":{"team":(depth0 != null ? depth0.team : depth0),"outcome":(depth0 != null ? depth0.outcome : depth0)},"data":data,"indent":"\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "	</div>\n</div>";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["more"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        	\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.liveMode : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "            <button class=\"btn-custom btn-fave btn-addfav\" data-id=\"e"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-title=\""
    + alias3(((helper = (helper = helpers.eventDescription || (depth0 != null ? depth0.eventDescription : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"eventDescription","hash":{},"data":data}) : helper)))
    + "\">\n                <i class=\"fa fa-star-o\"></i>\n            </button>\n            <button class=\"btn-custom btn-stat "
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.brMatchId : depth0),{"name":"unless","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-matchid=\""
    + alias3(((helper = (helper = helpers.brMatchId || (depth0 != null ? depth0.brMatchId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"brMatchId","hash":{},"data":data}) : helper)))
    + "\" \n            >\n            \n                <i class=\"fa fa-bar-chart\"></i>\n            </button>\n        	\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].count : depths[1]),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "                    <button class=\"btn-custom btn-live market-count btn-more-"
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + "\" data-id=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + "\" data-count=\""
    + alias2(alias1((depths[1] != null ? depths[1].count : depths[1]), depth0))
    + "\">\n                        <i class=\"fa fa-plus\"></i>\n                        <span>"
    + alias2(alias1((depths[1] != null ? depths[1].count : depths[1]), depth0))
    + "</span>\n                    </button>\n";
},"5":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].count : depths[1]),{"name":"if","hash":{},"fn":this.program(6, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"6":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "                    <button class=\"btn-custom btn-more market-count btn-more-"
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + "\" data-id=\""
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + "\" data-count=\""
    + alias2(alias1((depths[1] != null ? depths[1].count : depths[1]), depth0))
    + "\">\n                        <i class=\"fa fa-plus\"></i>\n                        <span>"
    + alias2(alias1((depths[1] != null ? depths[1].count : depths[1]), depth0))
    + "</span>\n                    </button>\n";
},"8":function(depth0,helpers,partials,data) {
    return "btn-disabled";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"more\">\n    <div class=\"wrapper\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.first : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"useData":true,"useDepths":true});
this["MyApp"]["templates"]["set-scores"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "    <div class=\"scores"
    + alias2((helpers.updateSets || (depth0 && depth0.updateSets) || alias1).call(depth0,(depths[1] != null ? depths[1].sets : depths[1]),depth0,{"name":"updateSets","hash":{},"data":data}))
    + alias2((helpers.isSetActive || (depth0 && depth0.isSetActive) || alias1).call(depth0,(depths[1] != null ? depths[1].sets : depths[1]),depth0,{"name":"isSetActive","hash":{},"data":data}))
    + "\">\n        <span class=\"score-a\">"
    + alias2((helpers.showScoreOnSet || (depth0 && depth0.showScoreOnSet) || alias1).call(depth0,(depths[1] != null ? depths[1].sets : depths[1]),depth0,"a","0",{"name":"showScoreOnSet","hash":{},"data":data}))
    + "</span><span>-</span><span class=\"score-b\">"
    + alias2((helpers.showScoreOnSet || (depth0 && depth0.showScoreOnSet) || alias1).call(depth0,(depths[1] != null ? depths[1].sets : depths[1]),depth0,"b","0",{"name":"showScoreOnSet","hash":{},"data":data}))
    + "</span><span class=\"set-separator\">/</span>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.times || (depth0 && depth0.times) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.count : depth0),{"name":"times","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});