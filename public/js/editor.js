$(function(){
  // https://github.com/ajaxorg/ace/wiki/Configuring-Ace
  var editor = ace.edit('blob-editor')
  editor.setOptions({
    highlightActiveLine: false
  })
  editor.getSession().setOptions({
    
    useSoftTabs: true,
    tabSize: 6
  })
  editor.renderer.setOptions({
    showGutter: false,
    fontSize: '16px',
    showPrintMargin: false,
    theme: 'ace/theme/github',
    minLines: 24,
    maxLines: 40
  });
})