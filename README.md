# Cable TV Website Theme

This is a mockup of a Web page theme that looks a bit like the old Texscan MSI-generated community channels from the '80s
and '90s. It uses fonts from a Weather Channel revival project, not the exact Texscan fonts, so it won't look the same
head-to-head, but it'll give a hit of nostalgia in a pinch.

Word of warning: It's rather quick-and-dirty. I threw it together out of half-done bits because someone saw them online
and expressed an interest-- but it's a start if anyone wants to run with it.

## To use it

You'll need to download the Star3000 fonts (Weatherstar 3000) from https://twcclassics.com/downloads.html . There was no
explicit license information with them that I could find, so I don't feel comfortable distributing them myself. Dumping
the TTF files into a "fonts" subdirectory should suffice to get the thing working.

To build the .less files, you'll need a [Less CSS](https://lesscss.org/) compiler. Did I include build scripts? Nope!
But it's just one less file you've got to build:

```
lessc styles.less styles.css
```

And that's only if you change things in the .less file.

# License?

Use it for what you want. Build off it, distribute it, make your millions on its back. All I ask is that you don't
claim you made it when you didn't, and... _ahem..._ THIS PRODUCT IS DISTRIBUTED AS-IS WITH NO WARRANTY OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ANY OTHER EXPRESS OR IMPLIED WARRANTIES. YOU GOT IT FREE, AND
YOU'RE OUT THERE ON YOUR OWN, PAL. IF YOU SOMEHOW MANAGE TO BLOW YOUR ARM OFF, GET PREGNANT, PISS A WHOLE BUNCH OF
PEOPLE OFF, RACK UP A BUNCH OF BILLS, GET INTO LEGAL TROUBLE, OR IT DRIVES YOU TO A CRISIS OF FUNDAMENTAL DISSATISFACTION
WITH YOUR LIFE THAT YOU CAN'T EASILY SHAKE, THAT'S ALL ON YOU TO DEAL WITH.
