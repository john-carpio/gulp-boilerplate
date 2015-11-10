"use strict";
var data = { title: 'This Form', name: 'Joey' };
// console.log(html);

$(document).ready(function () {
	var html = Handlebars.template.index(data);
    $('body').html(html);
});