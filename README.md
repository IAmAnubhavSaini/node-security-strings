# secstr

- [github: node-security-strings](https://github.com/IAmAnubhavSaini/node-security-strings)
- [NPM: @f0c1s/security-strings](https://www.npmjs.com/package/@f0c1s/security-strings)
- Command: `secstr <input> [--table | --rot13s]`

`secstr` command line utility.

Use v2026.

## Installation and Usage

- as code: `npm i @f0c1s/security-strings` (no idea why you would do that)
- as command: `npm i -g @f0c1s/security-strings` (Gives you `secstr` command)

```bash

secstr one@example.com

# secstr "one@example.com"
# 
# rot13                bar@rknzcyr.pbz
# rot47                @?6o6I2>A=6]4@>
# base64.encode        b25lQGV4YW1wbGUuY29t
# base64.decode        ...[This breaks readme.md]...
# escapeJS             one\x40example.com
# escapeHTML           one&#x40;example.com
# END

```

### Table

```bash

secstr one@example.com --table 

# secstr "one@example.com"
# 
# ┌─────────┬─────────────────┬────────────────────────┐
# │ (index) │       fn        │       fn(input)        │
# ├─────────┼─────────────────┼────────────────────────┤
# │    0    │     'rot13'     │   'bar@rknzcyr.pbz'    │
# │    1    │     'rot47'     │   '@?6o6I2>A=6]4@>'    │
# │    2    │ 'base64.encode' │ 'b25lQGV4YW1wbGUuY29t' │
# │    3    │ 'base64.decode' │ '¢w\x02±jje\x1Er\x89'  │
# │    4    │   'escapeJS'    │ 'one\\x40example.com'  │
# │    5    │  'escapeHTML'   │ 'one&#x40;example.com' │
# └─────────┴─────────────────┴────────────────────────┘
# END

```

### All of the rot13s

```bash

secstr one@example.com --rot13s

# secstr "one@example.com"
# 
# rot13                bar@rknzcyr.pbz
# rot47                @?6o6I2>A=6]4@>
# base64.encode        b25lQGV4YW1wbGUuY29t
# base64.decode        ...[This breaks readme.md]..
# escapeJS             one\x40example.com
# escapeHTML           one&#x40;example.com
# { i: 1, rot: 'pof@fybnqmf.dpn' }
# { i: 2, rot: 'qpg@gzcorng.eqo' }
# { i: 3, rot: 'rqh@hadpsoh.frp' }
# { i: 4, rot: 'sri@ibeqtpi.gsq' }
# { i: 5, rot: 'tsj@jcfruqj.htr' }
# { i: 6, rot: 'utk@kdgsvrk.ius' }
# { i: 7, rot: 'vul@lehtwsl.jvt' }
# { i: 8, rot: 'wvm@mfiuxtm.kwu' }
# { i: 9, rot: 'xwn@ngjvyun.lxv' }
# { i: 10, rot: 'yxo@ohkwzvo.myw' }
# { i: 11, rot: 'zyp@pilxawp.nzx' }
# { i: 12, rot: 'azq@qjmybxq.oay' }
# { i: 13, rot: 'bar@rknzcyr.pbz' }
# { i: 14, rot: 'cbs@sloadzs.qca' }
# { i: 15, rot: 'dct@tmpbeat.rdb' }
# { i: 16, rot: 'edu@unqcfbu.sec' }
# { i: 17, rot: 'fev@vordgcv.tfd' }
# { i: 18, rot: 'gfw@wpsehdw.uge' }
# { i: 19, rot: 'hgx@xqtfiex.vhf' }
# { i: 20, rot: 'ihy@yrugjfy.wig' }
# { i: 21, rot: 'jiz@zsvhkgz.xjh' }
# { i: 22, rot: 'kja@atwilha.yki' }
# { i: 23, rot: 'lkb@buxjmib.zlj' }
# { i: 24, rot: 'mlc@cvyknjc.amk' }
# { i: 25, rot: 'nmd@dwzlokd.bnl' }
# { i: 26, rot: 'one@example.com' }
# END

```

### Everything is a table...

```bash

secstr one@example.com --rot13s --table

# secstr "one@example.com"
# 
# ┌─────────┬─────────────────┬────────────────────────┐
# │ (index) │       fn        │       fn(input)        │
# ├─────────┼─────────────────┼────────────────────────┤
# │    0    │     'rot13'     │   'bar@rknzcyr.pbz'    │
# │    1    │     'rot47'     │   '@?6o6I2>A=6]4@>'    │
# │    2    │ 'base64.encode' │ 'b25lQGV4YW1wbGUuY29t' │
# │    3    │ 'base64.decode' │ '¢w\x02±jje\x1Er\x89'  │
# │    4    │   'escapeJS'    │ 'one\\x40example.com'  │
# │    5    │  'escapeHTML'   │ 'one&#x40;example.com' │
# └─────────┴─────────────────┴────────────────────────┘
# ┌─────────┬────┬───────────────────┐
# │ (index) │ i  │        rot        │
# ├─────────┼────┼───────────────────┤
# │    0    │ 1  │ 'pof@fybnqmf.dpn' │
# │    1    │ 2  │ 'qpg@gzcorng.eqo' │
# │    2    │ 3  │ 'rqh@hadpsoh.frp' │
# │    3    │ 4  │ 'sri@ibeqtpi.gsq' │
# │    4    │ 5  │ 'tsj@jcfruqj.htr' │
# │    5    │ 6  │ 'utk@kdgsvrk.ius' │
# │    6    │ 7  │ 'vul@lehtwsl.jvt' │
# │    7    │ 8  │ 'wvm@mfiuxtm.kwu' │
# │    8    │ 9  │ 'xwn@ngjvyun.lxv' │
# │    9    │ 10 │ 'yxo@ohkwzvo.myw' │
# │   10    │ 11 │ 'zyp@pilxawp.nzx' │
# │   11    │ 12 │ 'azq@qjmybxq.oay' │
# │   12    │ 13 │ 'bar@rknzcyr.pbz' │
# │   13    │ 14 │ 'cbs@sloadzs.qca' │
# │   14    │ 15 │ 'dct@tmpbeat.rdb' │
# │   15    │ 16 │ 'edu@unqcfbu.sec' │
# │   16    │ 17 │ 'fev@vordgcv.tfd' │
# │   17    │ 18 │ 'gfw@wpsehdw.uge' │
# │   18    │ 19 │ 'hgx@xqtfiex.vhf' │
# │   19    │ 20 │ 'ihy@yrugjfy.wig' │
# │   20    │ 21 │ 'jiz@zsvhkgz.xjh' │
# │   21    │ 22 │ 'kja@atwilha.yki' │
# │   22    │ 23 │ 'lkb@buxjmib.zlj' │
# │   23    │ 24 │ 'mlc@cvyknjc.amk' │
# │   24    │ 25 │ 'nmd@dwzlokd.bnl' │
# │   25    │ 26 │ 'one@example.com' │
# └─────────┴────┴───────────────────┘
# END


```

- OR as `npx` command

```bash
npx @f0c1s/security-strings "what?"
```

## License

MIT

## Development

`npm i -g typescript` because `npm i -D typescript` consumes 60MB.

`npm run build` - for building .ts files

`npm run build && npm link && secstr` for quickly checking out the default.
