// This file is included by the index.html file and will
// be executed in the renderer process for that window

appMain.main()

if (window.platform === 'darwin') {
  document.body.classList.add("_macOS");
}
