/**
 * Copyright 2013-2014 Acompli Inc.
 */

// override these values to configure the webview
var config = { screenWidth: 0, textZoom: 0, userScalable: false };

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    scaleMessage(config);
});

// this lays out the rest of the 
var scaleMessage = function(config) {

    // The order of operations is important

    // 1. fix up some of the css
    insertStyles(config.textZoom);

    // 2. adjust the viewport width to force the page to relayout
    adjustViewport(config.screenWidth);

    // 3. after the page has layed out (post viewport change), adjust the viewport size to make sure everything is visible
    adjustScaling(config.screenWidth, config.userScalable);

    // 4. add long-tap handlers to save images
    configureLongTapImageCallbacks();
}

// add some basic styles to make things look nicer
var insertStyles = function(textZoom) {

    console.log('insertStyles()');

    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    
    var css = '';

    css += 'html { background: #fff; }';        // make sure the background is always white
    css += 'body { padding: 8px; }';            // set the padding to 8px (use padding so inner elements can layout properly)
    css += 'body { margin: 0; }';               // set the margin to 0
    css += 'a { word-wrap: break-word; }';      // forces links to break after edge of the screen 
    css += 'p { word-wrap: break-word; }';      // forces paragraphs to break after edge of the screen
    css += 'blockquote { margin: 0px 10px !important; }';       // override the margin for blockquotes since these often get nested and become very skinny
    css += 'body { color: #333333; line-height: 140%; }';       // colors & line height

    // fonts       
    css += 'body { font-family: HelveticaNeue; font-size: 12pt; }';

    // scale the fonts based on the user's zoom scale
    // if we remove this, all kinds of weird stuff happens w/ message height calculation
    css += 'body { -webkit-text-size-adjust: ' + textZoom + '%; }';

    s.appendChild(document.createTextNode(css));

    // insert the style tag as early as possible so emails can override it if they choose too
    var head = getOrCreateHeadForDocument(document);
    head.insertBefore(s, head.children.length > 0 ? head.children[0] : null);
}

// layout the page once to force any stylesheets to be applied
var adjustViewport = function(screenWidth) {
    var viewportContentWidth = 'width=' + screenWidth;

    // get the viewport
    var head = getOrCreateHeadForDocument(document);
    var viewport = document.querySelector("meta[name=viewport]");

    // update the viewport
    if (viewport) {
        viewport.setAttribute('content', viewportContentWidth);
    }
    else {
        var meta = document.createElement('meta');
        meta.setAttribute('name', 'viewport');
        meta.setAttribute('content', viewportContentWidth);
        head.appendChild(meta);
    }

    console.log('adjusted viewport width: ' + viewportContentWidth);
}

// finds the largest table in the email and adjusts the meta viewport scale to fit it nicely
var adjustScaling = function(screenWidth, userScalable) {

    console.log('adjustScaling(' + userScalable + ')');

    var widest = screenWidth;

    // track if we scaled due to table or not
    var tableCausedScale = false;

    // consider scaling emails with tables
    var tables = document.getElementsByTagName('table');
    for (var i = 0; i < tables.length; i++) {

        var t = tables[i];

        // get the computed width of the table, taking into account all of it's subelements
        var width = t.getBoundingClientRect().right;
        width += parseInt(window.getComputedStyle(t).getPropertyValue('padding-right'));
        width += parseInt(window.getComputedStyle(t).getPropertyValue('margin-right'));

        console.log('table width: ' + width + ' (widest: ' + widest + ')'); 
        if (width > widest) {
            tableCausedScale = true;
            widest = width;
        }
    }

    var width = document.body.getBoundingClientRect().right;
    width += parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));

    console.log('body width: ' + width + ' (widest: ' + widest + ')'); 
    if (width > widest) {
        widest = width;
    }

    var needsScale = screenWidth < widest;
    console.log('needsScale: ' + (needsScale ? 'true' : 'false' ) + ' (screenWidth: ' + screenWidth + ' vs widest: ' + widest + ')');

    // craft viewport meta tag
    var viewportContentWidth = 'width=' + (needsScale ? widest : screenWidth);
    var viewportScalable = 'user-scalable=' + (userScalable ? 'yes' : 'no');
    newViewport = viewportContentWidth + ', ' + viewportScalable;

    // set the viewport
    var head = getOrCreateHeadForDocument(document);
    var viewport = document.querySelector("meta[name=viewport]");

    if (viewport) {
        viewport.setAttribute('content', newViewport);
    }
    else {
        var meta = document.createElement('meta');
        meta.setAttribute('name', 'viewport');
        meta.setAttribute('content', newViewport);
        head.appendChild(meta);
    }

    console.log('adjusted viewport: ' + newViewport);

    if (needsScale && !tableCausedScale) {
        // if we scaled but it wasn't due to wide table, then resize all images to fit inside the body
        console.log('need to resize wide images');
        resizeWideImages(config.screenWidth);
    }
}

// loops through and finds images wider than the body and resizes them to fit
// we shouldn't call this on HTML emails since often they have larger images on purpose
var resizeWideImages = function(screenWidth) {
    console.log('resizeWideImages()');
    var imgs = document.getElementsByTagName('img');
    for (var i = 0; i < imgs.length; i++) {
        resizeImage(imgs[i], screenWidth);
    }
}

// resize image if it's been loaded, otherwise attach a handler to resize in the future
var resizeImage = function(img, bodyWidth) {

    console.log('img-complete: ' + img.complete + ', bodyWidth: ' + bodyWidth);
    if (img.complete) {

        var origWidth = parseInt(window.getComputedStyle(img, null).getPropertyValue('width'));

        // try to fit the element inside of it's parent element
        var newWidth = img.parentNode.getBoundingClientRect().width;

        // if it's still too large to fit the screen, resize further
        if (newWidth > bodyWidth) {
            var x = getPosition(img).x; // calculate the left-margin to find out how much leeway we have to render this image
            newWidth = bodyWidth - x;
        }

        if (origWidth > newWidth) {
            var origHeight = parseInt(window.getComputedStyle(img, null).getPropertyValue('height'));
            var newHeight = Math.ceil(origHeight * newWidth / origWidth); // TODO if the image is embedded in other stuff, it will still be too large
            img.style.width = newWidth + 'px';
            img.style.height = newHeight + 'px';
        }

    }
    else {

        // image isn't ready, attach a handler to process it when complete
        img.onload = function() {
            console.log('temp callback');
            resizeImage(img, bodyWidth);
        }
    }
}

// hookup callback for large images
var configureLongTapImageCallbacks = function() {
    console.log('configureLongTapImageCallbacks()');
    var imgs = document.getElementsByTagName('img');
    for (var i = 0; i < imgs.length; i++) {
        configureImageCallback(imgs[i]);
    }
}

var imgTapped = null;
var configureImageCallback = function(img) {
    console.log('configureImageCallback(' + img + ')');

    // disable the default callout when long-tapping
    // img.webkitTouchCallout = 'none';
    // img.webkitUserSelect = 'none';

    // add listeners
    img.addEventListener('click', function(e) {
        console.log('configureImageCallback::click');
        imgTapped = null;
    });
    img.addEventListener('touchstart', function(e) {
        console.log('configureImageCallback::touchstart');
        imgTapped = img;
        setTimeout(function() {

            // don't let the event propogate
            // not sure this does anything...
            e.preventDefault();
            e.stopPropagation();

            // don't know if I need this guard
            if (imgTapped == img) {
                console.log('long tapped: ' + img.src);
                callbackToNative(img, img.src);
            }

        },500);
    });
    img.addEventListener('touchmove', function(e) {
        console.log('configureImageCallback::touchmove');
        imgTapped = null;
    });
    img.addEventListener('touchend', function(e) {
        console.log('configureImageCallback::touchend');
        imgTapped = null;
    });
}

// get the head or create one if it's missing (is that even possible?)
var getOrCreateHeadForDocument = function(doc) {
	var heads = doc.getElementsByTagName('head');
	var head;
	if (heads.length == 0) {
		head = doc.createElement('head');
		doc.body.insertBefore(head, body); 
	}
	else {
		head = heads[0];
	}
	return head;
}

var callbackToNative = function(node, src) {
    var nodeName = node.tagName.toLowerCase();
    if (nodeName == 'img') {
        // user long-tapped an image
        var href = 'imagelongtap://src/' + encodeURIComponent(src);;
        console.log('callback after image long-tap:' + href)
        document.location.href = href;
    }
}

// use this to get the true position of an element
var getPosition = function(element) {

    var xPosition = 0;
    var yPosition = 0;
  
    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}

// currently unused (might be useful for threaded messages)
var removeEmptyTags = function() {

    console.log('removeEmptyTags()');
    
    // remove empty elements for simplicity (tends to collapse ugly emails)
    // this can be called multiple times to keep collapsing empty tags
    var emptyElements = document.body.querySelectorAll("*:empty");
    Array.prototype.forEach.call(emptyElements, function(node) {
        var nodeName = node.tagName.toLowerCase();
        if (nodeName != "img") {
            console.dir('removing node: ' + node);
            node.parentNode.removeChild(node);
        }
    });
}

