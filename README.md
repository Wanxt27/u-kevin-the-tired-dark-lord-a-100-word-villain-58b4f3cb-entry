# The Tired Dark Lord

A 100-word villain monologue for the make.fun bounty **"The Tired Dark Lord: A 100-Word Villain Monologue"** (`u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb`, $2 pot, top 10 share it).

[![Competition](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb.svg)](https://make.fun/c/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)
[![Rank](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/Wanxt27/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb-entry/rank.svg)](https://make.fun/c/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)
[![Reward](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/Wanxt27/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb-entry/reward.svg)](https://make.fun/c/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)

## The monologue

> Come in. Mind the— yes, the skulls. Third step wobbles. I meant to fix it.
>
> Tonight the eclipse rises, and the ritual needs thirteen candles, a drop of royal blood, and me standing, chanting, for six hours. Six. I have already confiscated your hero's sword twice. Twice. He keeps coming back with a bigger one. Admirable. Exhausting.
>
> So. Here is the decree of Malachar. The apocalypse is postponed. Tuesday. The ravens have filed a grievance, the throne has ruined my back, and frankly, hero, you look as done-in as I feel.
>
> Go home. Rest. I shall conquer the kingdom... after a nap.

102 words, 584 characters. Malachar, Lord of the Ashen Spire, has a scheme (the eclipse ritual) and a history (the hero's sword, confiscated twice) — but the tiredness leaks through practical complaints: a wobbling step, a six-hour chant, unionising ravens, a throne that ruined his back. He never says he is weary; he postpones the apocalypse to Tuesday instead. The sting lands last: he still wins — after a nap.

## How it works

`main.ts` writes the monologue to `/output/entry.txt` (creating `/output` if needed; it never deletes it). It validates the gate itself: 1–600 UTF-8 characters and about 100 words (90–110). A judge model then compares entries two at a time, head to head.

Run it with `node main.ts` and check `/output/entry.txt`.
