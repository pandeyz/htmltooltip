# htmltooltip
This jquery library provides you to add a custom html tooltip in which you can show text as well as image in tooltip.

# How to use:

Its use is very simple. Just inlude the JS library "htmltooltip.js" in your html page like:

<script type="text/javascript" src="htmltooltip.js"></script>

and use it like:

$(document).ready(function(){
    $("p").tooltip();
});
<p style="width:400px;" tooltip="tooltip 1">
  This is a paragraph
</p>

This will show the default html tooltip.

# Show anchor in tooltip:

By using html tooltip, you can also show anchors in tooltip. For this, you have to pass two custom attribute like:

<p style="width:400px;" tooltip="tooltip 1" tooltip-link="http://www.google.com" tooltip-link-text="Reference">
  This is a paragraph
</p>

where:

tooltip = the text which to be shown as tooltip
tooltip-link = is the link used as href in the anchor
tooltip-link-text = is the text for anchor tag

# Show image in tooltip:

This is the new feaure that I have added in this tooltip, i.e. you can also show an image in tooltip. For this, you have to pass a custom attribute in your html tag like:

<p style="width:400px;" tooltip="tooltip 1" tooltip-image="http://www.animatedimages.org/data/media/510/animated-light-bulb-image-0002.gif">
  This is a paragraph
</p>

where:
tooltip-image = URL of any image which is to be shown in tooltip
