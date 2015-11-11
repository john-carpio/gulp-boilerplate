"use strict";
var data = { title: 'This Form', name: 'Joey' };
// console.log(html);

$(document).ready(function () {
	var html = NovaWeb.Templates['index'](data);
    $('body').html(html);
});