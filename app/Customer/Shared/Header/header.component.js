"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var header_service_1 = require('./header.service');
var cart_service_1 = require('../../CartService/cart.service');
var HeaderComponent = (function () {
    function HeaderComponent(el, headerService, cartService) {
        var _this = this;
        this.el = el;
        this.headerService = headerService;
        this.cartService = cartService;
        this.cart = [];
        this.cartLenght = 0;
        this.cartService.content.subscribe(function (content) {
            _this.cart.push(content);
            _this.cartLenght = _this.cart.length;
            console.log(_this.cart);
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.headerService.GetCategoriesList().subscribe(function (response) {
            _this.categories = response;
        });
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        $(this.el.nativeElement).ready(function () {
            /*-------------------------------------
             jQuery MeanMenu activation code
             --------------------------------------*/
            $('nav#dropdown').meanmenu({ siteLogo: "<a href='index.html' class='logo-mobile-menu'><img src='assist/img/logo.png' /></a>" });
            /*-------------------------------------
             Home page 4 Category Menu
             -------------------------------------*/
            $('#menu-content').on('click', 'li.has-sub-menu > a', function (e) {
                e.preventDefault();
            });
            /*-------------------------------------
             wow js active
             -------------------------------------*/
            new WOW().init();
            /*-------------------------------------
             jquery Scollup activation code
             -------------------------------------*/
            $.scrollUp({
                scrollText: '<i class="fa fa-angle-up"></i>',
                easingType: 'linear',
                scrollSpeed: 900,
                animation: 'fade'
            });
            /*-------------------------------------
             Countdown activation code
             -------------------------------------*/
            $('#countdown').countdown('2018/01/01', function (e) {
                $(this).html(e.strftime("<div class='countdown-section'><h3>%-d</h3> <p>day%!d<p> </div><div class='countdown-section'><h3>%H</h3> <p>Hour%!H</p> </div><div class='countdown-section'><h3>%M</h3> <p>Min%!M</p> </div><div class='countdown-section'><h3>%S</h3> <p>Sec%!S</p> </div>"));
            });
            /*-------------------------------------
             Contact Form activation code
             -------------------------------------*/
            if ($('#contact-form').length) {
                $('#contact-form').validator().on('submit', function (e) {
                    var $this = $(this), $target = $('.form-response');
                    if (e.isDefaultPrevented()) {
                        $target.html("<div class='alert alert-success'><p>Please select all required field.</p></div>");
                    }
                    else {
                        var name = $('#form-name').val();
                        var email = $('#form-email').val();
                        var message = $('#form-message').val();
                        // ajax call
                        $.ajax({
                            url: "php/form-process.php",
                            type: "POST",
                            data: "name=" + name + "&email=" + email + "&message=" + message,
                            beforeSend: function () {
                                $target.html("<div class='alert alert-info'><p>Loading ...</p></div>");
                            },
                            success: function (text) {
                                if (text == 'success') {
                                    $this[0].reset();
                                    $target.html("<div class='alert alert-success'><p>Message has been sent successfully.</p></div>");
                                }
                                else {
                                    $target.html("<div class='alert alert-success'><p>" + text + "</p></div>");
                                }
                            }
                        });
                        return false;
                    }
                });
            }
            /*-------------------------------------
             Input Quantity Up & Down activation code
             -------------------------------------*/
            $('#quantity-holder,#quantity-holder2').on('click', '.quantity-plus', function () {
                var $holder = $(this).parents('.quantity-holder');
                var $target = $holder.find('input.quantity-input');
                var $quantity = parseInt($target.val(), 10);
                if ($.isNumeric($quantity) && $quantity > 0) {
                    $quantity = $quantity + 1;
                    $target.val($quantity);
                }
                else {
                    $target.val($quantity);
                }
            }).on('click', '.quantity-minus', function () {
                var $holder = $(this).parents('.quantity-holder');
                var $target = $holder.find('input.quantity-input');
                var $quantity = parseInt($target.val(), 10);
                if ($.isNumeric($quantity) && $quantity >= 2) {
                    $quantity = $quantity - 1;
                    $target.val($quantity);
                }
                else {
                    $target.val(1);
                }
            });
            /*-------------------------------------
             Select2 activation code
             -------------------------------------*/
            if ($('#checkout-form  select.select2').length) {
                $('#checkout-form select.select2').select2({
                    theme: 'classic',
                    dropdownAutoWidth: true,
                    width: '100%'
                });
            }
            /*-------------------------------------
             Sidebar Menu activation code
             -------------------------------------*/
            $('#additional-menu-area').on('click', 'span.side-menu-trigger', function () {
                var $this = $(this);
                if ($this.hasClass('open')) {
                    document.getElementById('mySidenav').style.width = '0';
                    $this.removeClass('open').find('i.fa').removeClass('fa-times').addClass('fa-bars');
                }
                else {
                    $this.addClass('open').find('i.fa').removeClass('fa-bars').addClass('fa-times');
                    document.getElementById('mySidenav').style.width = '280px';
                }
            });
            $('#mySidenav').on('click', '.closebtn', function (e) {
                e.preventDefault();
                document.getElementById('mySidenav').style.width = '0';
                $('#additional-menu-area span.side-menu-trigger').removeClass('open').find('i.fa').removeClass('fa-times').addClass('fa-bars');
            });
            /*-------------------------------------
             Category menu selecting
             -------------------------------------*/
            $('#adv-search .sidenav-nav li').on('click', 'a', function () {
                var $this = $(this), target = $this.parents('div.dropdown').children('button').children('span');
                target.text($this.text());
            });
            /*-------------------------------------
             Shop category submenu positioning
             -------------------------------------*/
            $('#category-menu-area,#category-menu-area-top').on("mouseenter", "ul li > a", function () {
                var $this = $(this), liParent = $this.parents('li'), target = liParent.find('ul.dropdown-menu'), targetUlW = target.outerWidth();
                var parentHolder = $(this).parents('.category-menu-area');
                var w = $(window).width() - (parentHolder.offset().left + parentHolder.width());
                if (targetUlW > w) {
                    target.css('top', liParent.outerHeight() + 'px');
                    target.css('left', 0);
                }
            }).on("mouseleave", "ul li > a", function () {
                var $this = $(this), liParent = $this.parents('li'), target = liParent.find('ul.dropdown-menu');
                target.css('top', '');
                target.css('left', '');
            });
            /*-------------------------------------
             Auto height for product listing
             -------------------------------------*/
            function equalHeight() {
                $('.products-container').each(function () {
                    var mHeight = 0;
                    $(this).children('div').children('div').height('auto');
                    $(this).children('div').each(function () {
                        var itemHeight = $(this).actual('height');
                        if (itemHeight > mHeight) {
                            mHeight = itemHeight;
                        }
                        $(this).children('div').height(mHeight + 'px');
                    });
                });
            }
            /*-------------------------------------
             Window load function
             -------------------------------------*/
            $(window).on('load', function () {
                // Page Preloader
                $('#preloader').fadeOut('slow', function () {
                    $(this).remove();
                });
                //jQuery for Isotope initialization
                var $container = $('#home-isotope');
                if ($container.length > 0) {
                    var $isotope = $container.find('.featuredContainer').isotope({
                        filter: '*',
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    });
                    $container.find('.isotop-classes-tab').on('click', 'a', function () {
                        var $this = $(this);
                        $this.parent('.isotop-classes-tab').find('a').removeClass('current');
                        $this.addClass('current');
                        var selector = $this.attr('data-filter');
                        $isotope.isotope({
                            filter: selector,
                            animationOptions: {
                                duration: 750,
                                easing: 'linear',
                                queue: false
                            }
                        });
                        return false;
                    });
                }
            }); // end window load function
            /*-------------------------------------
             Call the load and resized function
             -------------------------------------*/
            $(window).on('load resize', function () {
                equalHeight(); // Call Equal height function
                //Define the maximum height for mobile menu
                var wHeight = $(window).height(), mLogoH = $('a.logo-mobile-menu').outerHeight();
                wHeight = wHeight - 50;
                $('.mean-nav > ul').css('height', wHeight + 'px');
            });
            /*-------------------------------------
             window scroll function
             -------------------------------------*/
            $(window).on('scroll', function () {
                //jquery Stiky Menu activation code
                var s = $('#sticker'), w = $('.wrapper-area'), target = s.find('.header-bottom'), windowpos = $(window).scrollTop(), windowWidth = $(window).width();
                if (windowWidth > 767) {
                    var topBar = s.find('.header-top'), topBarH = 0;
                    if (topBar.length) {
                        topBarH = topBar.outerHeight();
                    }
                    if (windowpos >= topBarH) {
                        s.addClass('stick');
                        var h = target.outerHeight();
                        w.css('padding-top', h + 'px');
                    }
                    else {
                        s.removeClass('stick');
                        w.css('padding-top', 0);
                    }
                }
            }); // end of scrool function
        });
    };
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customer-header',
            templateUrl: 'header.component.html',
            providers: [header_service_1.HeaderService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, header_service_1.HeaderService, cart_service_1.CartService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map