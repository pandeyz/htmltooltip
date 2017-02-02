/**
 * Plugin   : HTMLTooltip
 * Author   : Mayank Pandey
 * Date     : 2017-01-17
**/

(function ( $ ) {
    $.fn.tooltip = function( options ) {
        var settings = $.extend({
            autoClose: true,

            color: "#fff",
            backgroundColor: "#333",
            position: "absolute",
            padding: "5px",
            right: "auto",
            left: "auto",
            top: "auto",
            bottom: "0px",
            fontSize: "12px",
            margin: "0 auto",
            boxShadow: "0px 0px 0px 2px #fff inset",
            borderRadius: "5px",
        }, options );

        var elem = this;
        var customCSS = {
            "color" : settings.color,
            "background-color" : settings.backgroundColor,
            "position" : settings.position,
            "padding" : settings.padding,
            "right" : settings.right,
            "left" : settings.left,
            "top" : settings.top,
            "bottom" : settings.bottom,
            "font-size" : settings.fontSize,
            "margin" : settings.margin,
            "box-shadow": settings.boxShadow,
            "border-radius" : settings.borderRadius
        };

        // Show tooltip on mouseenter
        elem.mouseenter(function(){
            if( ($(this).find('.tooltip').length) == 0 )
            {
                var tooltipContent  = '';
                var tooltipLink     = '';
                var tooltipText     = '';
                var tooltipImg      = '';
                var tooltipHtmlSrc  = '';
                var tooltipHtml     = '';

                if($(this).attr('tooltip') != undefined)
                {
                    var tooltipContent  =  $(this).attr('tooltip');
                    if( ($(this).attr('tooltip-link') != undefined) && ($(this).attr('tooltip-link-text') != undefined) )
                    {
                        tooltipText = $(this).attr('tooltip-link-text');
                        tooltipLink = ' <a href="'+ $(this).attr('tooltip-link') +'">'+ tooltipText +'</a>';
                    }
                    if($(this).attr('tooltip-image') != undefined)
                    {
                        tooltipImg  = ' <img height="25px" width="25px" src="'+ $(this).attr('tooltip-image') +'">';
                    }
                    if($(this).attr('tooltip-html-source') != undefined)
                    {
                        tooltipHtmlSrc  = $(this).attr('tooltip-html-source');
                        tooltipHtml     = $(tooltipHtmlSrc).html();
                    }

                    var newElem = '<span class="tooltip">'+ tooltipContent + tooltipLink + tooltipImg + tooltipHtml + '</span>';

                    $(this).find('.tooltip').remove();
                    $(this).append(newElem);
                    $(this).find('.tooltip').css(customCSS);
                    return elem.css({
                        position: "relative"
                    });
                }
            }
        });

        // Remove tooltip on mouseout
        if(settings.autoClose)
        {
            elem.mouseout(function(){
                if( ($('.tooltip').length) > 0 )
                {
                    $(this).find('.tooltip').remove();
                }
            });
        }
        else
        {
            $(elem).on('click', '.tooltip', function(){
                $(this).remove();
            });
        }
    };
}( jQuery ));