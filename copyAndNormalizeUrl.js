// View links source code
var contextMenuItem ={
  "id": "copyUrl",
  "title": "Copy and Normalize Url",
  "contexts": ["selection","link","editable"]
}


chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(function(getLinkSource){
  var selectedTxt = getLinkSource.selectionText;
  if(selectedTxt == null || selectedTxt == ""){
    selectedTxt = getLinkSource.linkUrl;
  }

  if(getLinkSource.menuItemId == "copyUrl" && selectedTxt)
  {
    var tempElement = document.createElement('tempGrElement');
    tempElement.contentEditable =true;
    tempElement.innerHTML = selectedTxt.replace(/\\/g, "");
    document.body.appendChild(tempElement);
    tempElement.focus();
    document.execCommand("selectAll");
    document.execCommand("copy",false, null);
    document.body.removeChild(tempElement);
  }
});