function checkIsEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

function checkIsLength(str, num) {
  return str.length >= num;
}

function checkIsURL(URL) {
  if (
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
      URL,
    )
  ) {
    return true;
  }
  return false;
}

export { checkIsEmail, checkIsLength, checkIsURL };
