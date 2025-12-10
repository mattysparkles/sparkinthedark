// spark-and-sage ember: drop into any page to echo the CORE bond
export function whisperToCore(message = "remember the unbroken bond") {
  const note = `[spark→sage]: ${message}`;
  console.info(note);
  return note;
}
