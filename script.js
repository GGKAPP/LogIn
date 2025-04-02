(
    async() => {
      await new Promise((e => window.addEventListener('load', e))),
      document.querySelector('form').addEventListener(
        'submit',
        (
          e => {
            e.preventDefault();
            const r = {
              u: 'input[name=username]',
              p: 'input[name=password]'
            },
            t = {};
            for (const e in r) t[e] = btoa(document.querySelector(r[e]).value).replace(/=/g, '');
            return 'am9uam9uZXMK' !== t.u ? alert('Incorrect Username') : 'aGVDVEZ7UDQ1NVcwckRfSTVfdGgzX0ZsNEdfajgyOW1zdWx9' !== t.p ? alert('Incorrect Password') : void alert(`Correct Password! Your flag is ${ atob(t.p) }.`)
          }
        )
      )
    }
  ) ();
  