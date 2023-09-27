export function test() {
    console.log("test");
}

export function shortenUrl() {
    const requestUrl = "https://api.shrtco.de/v2/shorten/url?www.google.com";
}

export function getStyle(i) {
    switch (i) {
      case 1:
        return "mt-[30px]";
      case 2:
        return "mt-[60px]";
      case 3:
        return "mt-[90px]";
      default:
        break;
    }
  }