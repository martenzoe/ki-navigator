export function scrollToId(id) {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, 200); // genug Delay damit DOM geladen ist
}
