import $ from "jquery";
window.jQuery = $;
window.$ = $;
import sendMail from "./mail";

$(function() {
  window.location.replace("/#👻");
  sendMail();
  $(".container-hero").css("display", "none");
  $(".container-hero").fadeIn(3000);

  function isMobileDevice() {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.split(" ").find(w => w.toLowerCase() === "mobile")
    );
  }

  if (!isMobileDevice()) {
    $("body").removeClass("mobile");
  }

  //Responsive Nav
  let navToggle = "#nav-toggle";
  let nav = "#nav";
  let navOpen = "nav-open";
  let isActive = "is-active";

  $(navToggle).click(function() {
    $(navToggle).hasClass(isActive)
      ? $(navToggle).removeClass(isActive)
      : $(navToggle).addClass(isActive);
    if ($(nav).hasClass(navOpen)) {
      $(nav).animate({ height: 0 }, 300);
      setTimeout(function() {
        $(nav)
          .removeClass(navOpen)
          .removeAttr("style");
      }, 320);
    } else {
      let navHeight = $(nav)
        .css("height", "auto")
        .height();
      $(nav)
        .height(0)
        .animate({ height: navHeight }, 300);
      setTimeout(function() {
        $(nav)
          .addClass(navOpen)
          .removeAttr("style");
      }, 320);
    }
  });

  // Defaults
  let _buffer = null,
    _watch = [],
    $window = $(window),
    Plugin = function() {};
  $.expr[":"].hasClassStartingWith = function(el, i, selector) {
    let re = new RegExp("\\b" + selector[3]);
    return re.test(el.className);
  };

  Plugin.prototype = {
    globals: {
      pluginName: "fadeThis",
      bufferTime: 300
    },
    defaults: {
      baseName: "slide-",
      speed: 500,
      speed1: 300,
      easing: "swing",
      offset: 0,
      reverse: true,
      distance: 30,
      scrolledIn: null,
      scrolledOut: null
    },
    init: function(elem, options) {
      this.addElements(elem, options);

      this._setEvent();
      this._checkVisibleElements();
    },
    addElements: function(elem, options) {
      let element = elem === document.body ? window : elem,
        $element = element === window ? $("body") : $(element),
        base = this,
        classBaseName =
          options && options.baseName
            ? options.baseName
            : this.defaults.baseName;
      if (!$element.is(":hasClassStartingWith('" + classBaseName + "')")) {
        $element
          .find(":hasClassStartingWith('" + classBaseName + "')")
          .each(function() {
            base._addElement($(this), options);
          });
      } else {
        base._addElement($element, options);
      }

      return $element;
    },
    _addElement: function($elem, options) {
      let metadata = $elem.data("plugin-options"),
        localOptions = $.extend({}, this.defaults, options, metadata),
        item = {
          element: $elem,
          options: localOptions,
          invp: false
        };
      _watch.push(item);

      this._prepareElement(item);

      return $elem;
    },
    _prepareElement: function(item) {
      let cssOptionsIn = {
          opacity: 0,
          visibility: "visible",
          position: "relative"
        },
        direction = null;
      if (item.element.hasClass(item.options.baseName + "right")) {
        direction = "left";
      } else if (item.element.hasClass(item.options.baseName + "left")) {
        direction = "right";
      } else if (item.element.hasClass(item.options.baseName + "top")) {
        direction = "bottom";
      } else if (item.element.hasClass(item.options.baseName + "bottom")) {
        direction = "top";
      } else {
        return false;
      }

      cssOptionsIn[direction] = item.options.distance;

      item.element.css(cssOptionsIn);
    },
    _setEvent: function() {
      let base = this;

      $window.on("scroll", function(e) {
        if (!_buffer) {
          _buffer = setTimeout(function() {
            base._checkVisibleElements(e);
            _buffer = null;
          }, base.globals.bufferTime);
        }
      });
    },
    _checkVisibleElements: function(e) {
      let base = this;

      $.each(_watch, function(key, item) {
        if (base._isVisible(item)) {
          if (!item.invp) {
            item.invp = true;
            base._triggerFading(item);
            if (item.options.scrolledIn) {
              item.options.scrolledIn.call(item.element, e);
            }
            item.element.trigger("fadethisscrolledin", e);
          }
        } else if (item.invp) {
          item.invp = false;
          if (item.options.reverse) {
            base._triggerFading(item, false);
          }
          if (item.options.scrolledOut) {
            item.options.scrolledOut.call(item.element, e);
          }
          item.element.trigger("fadethisscrolledout", e);
        }
      });
    },
    _isVisible: function(item) {
      let docViewTop = $window.scrollTop() + item.options.offset,
        docViewBottom = docViewTop + $window.height() - 2 * item.options.offset,
        elemTop = item.element.offset().top,
        elemBottom = elemTop + item.element.height();
      return (
        elemBottom >= docViewTop &&
        elemTop <= docViewBottom &&
        elemBottom <= docViewBottom &&
        elemTop >= docViewTop
      );
    },
    _triggerFading: function(item, appear) {
      appear = typeof appear !== "undefined" ? appear : true;

      let stateAnimIn = {
          opacity: 1
        },
        stateAnimOut = {
          opacity: 0
        },
        direction = null;
      if (item.element.hasClass(item.options.baseName + "right")) {
        direction = "left";
      } else if (item.element.hasClass(item.options.baseName + "left")) {
        direction = "right";
      } else {
        return false;
      }

      stateAnimIn[direction] = 0;
      stateAnimOut[direction] = item.options.distance;

      if (appear) {
        item.element
          .stop(true)
          .animate(stateAnimIn, item.options.speed1, item.options.easing);
      } else {
        item.element
          .stop(true)
          .animate(stateAnimOut, item.options.speed, item.options.easing);
      }
    }
  };

  Plugin.defaults = Plugin.prototype.defaults;
  Plugin.globals = Plugin.prototype.globals;

  window.Plugin = new Plugin();

  // Preventing against multiple instantiations for the same DOM element
  $.fn[Plugin.globals.pluginName] = function(options) {
    this.each(function() {
      if (!$.data(window, "plugin_" + Plugin.globals.pluginName)) {
        $.data(window, "plugin_" + Plugin.globals.pluginName, "set");
        $.data(
          this,
          "plugin_" + Plugin.globals.pluginName,
          window.Plugin.init(this, options)
        );
      } else if (!$.data(this, "plugin_" + Plugin.globals.pluginName)) {
        $.data(
          this,
          "plugin_" + Plugin.globals.pluginName,
          window.Plugin.addElements(this, options)
        );
      }
    });

    // chain jQuery functions
    return this;
  };

  $(window).fadeThis();

  let within = 0;
  let wasWithin = null;
  let sections = [
    '[data-section="about"]',
    '[data-section="work"]',
    '[data-section="contact"]'
  ];
  let sectionTops = getTops(sections);

  function getTops(sections) {
    return sections.map(sect => $(sect).position().top);
  }

  function followMenu() {
    let top = $(window).scrollTop();
    let tops = sectionTops;
    for (let i = 0; i < tops.length; i++) {
      if (top < tops[i] && top > 0) {
        within = i - 1;
        break;
      } else if (top > tops[i] && i == tops.length - 1) {
        within = tops.length - 1;
      }
    }
    if (within !== wasWithin) {
      $menuItems
        .removeClass("active")
        .eq(within)
        .addClass("active");
      wasWithin = within;
    }
  }


  let $menuItems = $(".nav-item");

  $menuItems.click(function(e) {
    $("#nav-toggle").removeClass("is-active");
    const nav = $("#nav");
    if ($(nav).hasClass("nav-open")) {
      $(nav).animate({ height: 0 }, 300);
      setTimeout(function() {
        $(nav)
          .removeClass("nav-open")
          .removeAttr("style");
      }, 320);
    }
    let $section = $('[data-section="' + $(this).attr("data-control") + '"]');

    $("body,html").animate(
      {
        scrollTop:
          $section.find("[data-here]").position().top -
          window.innerHeight * 0.15
      },
      "500",
      "swing",
      function() {}
    );
  });

  followMenu();
});
