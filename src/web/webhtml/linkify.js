/**
 * Copyright 2013-2014 Acompli Inc.
 */

function linkify(c) {
    for(var i = 0; i < c.childNodes.length; i++) {
        var node = c.childNodes[i];
        if(node.nodeName === "#text") {
            var replacedText, replacePattern1, replacePattern2, replacePattern3;

            replacedText = node.nodeValue;

            if(replacedText.trim().length() > 0) {
                replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
                replacedText = replacedText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

                replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
                replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

                var replacedNode = document.createElement('span');
                replacedNode.innerHTML = replacedText;
                c.insertBefore(replacedNode, node);
                c.removeChild(node);
            }
        } else if(node.nodeName === "A") {
        } else if(node instanceof Element){
            linkify(node);
        }
    }
}

linkify(document.body);

