function openSampleKeyValuesPopup(url,name)
{
    if ($('browser_window') && typeof(Windows) != 'undefined')
    {
        Windows.focus('browser_window');
        return;
    }
    var dialogWindow = Dialog.info(null, {
        closable:true,
        resizable:false,
        draggable:true,
        className:'magento',
        windowClassName:'popup-window',
        title:'Examples of Key Value Pair for '+name,
        top:50,
        width:600,
        height:600,
        zIndex:1000,
        recenterAuto:false,
        hideEffect:Element.hide,
        showEffect:Element.show,
        id:'browser_window',

        onClose:function (param, el) {
            /*  alert('onClose');*/
        }
    });
    new Ajax.Request(url,{
        method:'POST',
        parameters:{'name':name},
        requestHeaders: {Accept: 'application/json'},
        onSuccess:function(transport){
            var response=transport.responseText.evalJSON(true);
            dialogWindow.getContent().update(response);
        }.bind(this)
    });

}