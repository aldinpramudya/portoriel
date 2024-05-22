window.onbeforeunload = () => {
  for (const form of document.querySelectorAll("form")) {
    form.reset()
  }
}