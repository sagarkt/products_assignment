// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require angular
//= require angular-ui-router
//= require angular-rails-templates
//= require angular-app/app

//= require_tree ./lib

//= require_tree ./angular-app/common/module
//= require_tree ./angular-app/common/directives
//= require_tree ./angular-app/common/services
//= require_tree ./angular-app/common/controllers
//= require_tree ./angular-app/common/factories
//= require_tree ./angular-app/common/templates

//= require_tree ./angular-app/home_page/module
//= require_tree ./angular-app/home_page/controllers
//= require_tree ./angular-app/home_page/templates
//
//= require_tree ./angular-app/products/module
//= require_tree ./angular-app/products/controllers
//= require_tree ./angular-app/products/services
//= require_tree ./angular-app/products/templates
