# secstr

- [github: node-security-strings](https://github.com/IAmAnubhavSaini/node-security-strings)
- [NPM: @f0c1s/security-strings](https://www.npmjs.com/package/@f0c1s/security-strings)
- Command: `secstr`

`secstr` command line utility.

Use v2025

## Installation and Usage

- as code: `npm i @f0c1s/security-strings` (no idea why you would do that)
- as command: `npm i -g @f0c1s/security-strings` (Gives you `secstr` command)

```bash

secstr "what? is gmail@gmail.com"

for input: what? is gmail@gmail.com
what? is gmail@gmail.com rot47 H92Enp:Dp8>2:=o8>2:=]4@>
what? is gmail@gmail.com base64.encode d2hhdD8gaXMgZ21haWxAZ21haWwuY29t
what? is gmail@gmail.com base64.decode ...[This breaks readme.md]...
what? is gmail@gmail.com escapeJS what\x3f is gmail\x40gmail.com
what? is gmail@gmail.com escapeHTML what&#x3f; is gmail&#x40;gmail.com
rot13 rotations on: what? is gmail@gmail.com
{ i: 1, rot: 'xibu? jt hnbjm@hnbjm.dpn' }
{ i: 2, rot: 'yjcv? ku iockn@iockn.eqo' }
{ i: 3, rot: 'zkdw? lv jpdlo@jpdlo.frp' }
{ i: 4, rot: 'alex? mw kqemp@kqemp.gsq' }
{ i: 5, rot: 'bmfy? nx lrfnq@lrfnq.htr' }
{ i: 6, rot: 'cngz? oy msgor@msgor.ius' }
{ i: 7, rot: 'doha? pz nthps@nthps.jvt' }
{ i: 8, rot: 'epib? qa ouiqt@ouiqt.kwu' }
{ i: 9, rot: 'fqjc? rb pvjru@pvjru.lxv' }
{ i: 10, rot: 'grkd? sc qwksv@qwksv.myw' }
{ i: 11, rot: 'hsle? td rxltw@rxltw.nzx' }
{ i: 12, rot: 'itmf? ue symux@symux.oay' }
{ i: 13, rot: 'jung? vf tznvy@tznvy.pbz' }
{ i: 14, rot: 'kvoh? wg uaowz@uaowz.qca' }
{ i: 15, rot: 'lwpi? xh vbpxa@vbpxa.rdb' }
{ i: 16, rot: 'mxqj? yi wcqyb@wcqyb.sec' }
{ i: 17, rot: 'nyrk? zj xdrzc@xdrzc.tfd' }
{ i: 18, rot: 'ozsl? ak yesad@yesad.uge' }
{ i: 19, rot: 'patm? bl zftbe@zftbe.vhf' }
{ i: 20, rot: 'qbun? cm agucf@agucf.wig' }
{ i: 21, rot: 'rcvo? dn bhvdg@bhvdg.xjh' }
{ i: 22, rot: 'sdwp? eo ciweh@ciweh.yki' }
{ i: 23, rot: 'texq? fp djxfi@djxfi.zlj' }
{ i: 24, rot: 'ufyr? gq ekygj@ekygj.amk' }
{ i: 25, rot: 'vgzs? hr flzhk@flzhk.bnl' }
{ i: 26, rot: 'what? is gmail@gmail.com' }

```

- OR as `npx` command

```bash

npx @f0c1s/security-strings "what?"

Need to install the following packages:
  @f0c1s/security-strings
Ok to proceed? (y) y
for input: what?
what? rot47 H92En
what? base64.encode d2hhdD8=
what? base64.decode ...[This breaks readme.md]...
what? escapeJS what\x3f
what? escapeHTML what&#x3f;
rot13 rotations on: what?
{ i: 1, rot: 'xibu?' }
{ i: 2, rot: 'yjcv?' }
{ i: 3, rot: 'zkdw?' }
{ i: 4, rot: 'alex?' }
{ i: 5, rot: 'bmfy?' }
{ i: 6, rot: 'cngz?' }
{ i: 7, rot: 'doha?' }
{ i: 8, rot: 'epib?' }
{ i: 9, rot: 'fqjc?' }
{ i: 10, rot: 'grkd?' }
{ i: 11, rot: 'hsle?' }
{ i: 12, rot: 'itmf?' }
{ i: 13, rot: 'jung?' }
{ i: 14, rot: 'kvoh?' }
{ i: 15, rot: 'lwpi?' }
{ i: 16, rot: 'mxqj?' }
{ i: 17, rot: 'nyrk?' }
{ i: 18, rot: 'ozsl?' }
{ i: 19, rot: 'patm?' }
{ i: 20, rot: 'qbun?' }
{ i: 21, rot: 'rcvo?' }
{ i: 22, rot: 'sdwp?' }
{ i: 23, rot: 'texq?' }
{ i: 24, rot: 'ufyr?' }
{ i: 25, rot: 'vgzs?' }
{ i: 26, rot: 'what?' }


```

## License

MIT

## Development

`npm i -g typescript` because `npm i -D typescript` consumes 60MB.

`npm run build`
