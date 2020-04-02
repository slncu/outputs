export const parse = text => {
  let parsed = text;
  let indent = 0;

  // parse: Heading format
  if (/^## .*$/.test(parsed)) {
    parsed = `<h2 class="h2">${text.slice(3)}</h2>`;
  }

  if (/^### .*$/.test(parsed)) {
    parsed = `<h3>${text.slice(4)}</h3>`;
  }

  if (/^#### .*$/.test(parsed)) {
    parsed = `<h4>${text.slice(5)}</h4>`;
  }

  if (/^##### .*$/.test(parsed)) {
    parsed = `<h5>${text.slice(6)}</h5>`;
  }

  if (/^###### .*$/.test(parsed)) {
    parsed = `<h6>${text.slice(7)}</h6>`;
  }

  // parse: tabcode format
  if (/^\t+/g.test(parsed)) {
    if (parsed.length !== 0) {
      parsed = `<div><span class="indent">${parsed.replace(
        /^\t*/g,
        ""
      )}</span></div>`;
    }
  }

  // parse: url format
  if (/(https?:\/\/[ぁ-んァ-ヶA-z0-9一-龠-\.\/\?#=]+[\.\w]+)/g.test(parsed)) {
    // parse: embeded link
    const matches = parsed.match(
      /(https?:\/\/[ぁ-んァ-ヶA-z0-9一-龠-\.\/\?#=]+[\.\w]+)/g
    );
    const urls = matches.map(url => {
      return `<a href="${url}" target="_blank">${url}</a>`;
    });
    const formatted = matches.map((match, i) => parsed.replace(match, urls[i]));

    parsed = formatted[0];
  }

  // parse: strike
  if (/\[- .*\]/g.test(parsed)) {
    const matches = parsed.match(/\[- .*\]/);
    const strikes = matches.map(strike => {
      const replaced = strike.replace(/\[-/, "").replace(/\]/g, "");
      return `<strike>${replaced}</strike>`;
    });
    const formatted = matches.map((match, i) =>
      parsed.replace(match, strikes[i])
    );

    parsed = formatted[0];
  }

  // parse: code format
  if (/`.*`/g.test(parsed)) {
    const matches = parsed.match(/`.*`/);
    const codes = matches.map(code => {
      const replaced = code.replace(/`/g, "");
      return `<code>${replaced}</code>`;
    });
    const formatted = matches.map((match, i) =>
      parsed.replace(match, codes[i])
    );

    parsed = formatted[0];
  }

  return parsed;
};

export const indent = text => {
  if (/^\t+/g.test(text)) {
    const matches = text.match(/^\t*/g);
    return matches[0].split(/\t/g).length;
  }

  return 0;
};
