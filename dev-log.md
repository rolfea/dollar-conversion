# Dev Log

Development notes for dollar conversion exercise.

## Initial Plan

To start, I'll use a "brute force" approach combined with some unit tests that
should give me space to refactor safely.

My thought is that the resulting string follows a pattern of
**Base Number** + **Modifier**, and breaking this out into some simple parsing
rules shouldn't be too bad as a way to start. There is probably some RegEx black
magic that I could attempt, but I generally find that hard to maintain and test.

I'm using [this](https://en.wikipedia.org/wiki/English_numerals) as a guide for
the language/variables, and I may have to have a big constants dictionary with
these cardinal numbers, unless I think of a more elegant way around this.

## Tech Used

* JavaScript (Node)
* npm
* Jasmine
* Karma