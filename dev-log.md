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

## Steps

### 5/17/2019

I implemented numbers 1 - 9 with corresponding tests. I added a small
conditional for dealing with the dollar vs. dollars. I'm not thrilled with how
that looks, but it's clear enough what I'm doing there and something I can come
back to. 

I think the most logical next steps would be either addressing "tens,"
"hundreds," and "thousands" (etc.) or dealing with cents (and error handling).

### 5/18/2019

#### Cents

I'm going to address cents next. I think a simple approach would be to take the
string subsection after the decimal and append "/100" to it before framing it
back into the result string. It isn't addressed in the example from the prompt,
but I'm going to assume that **$10.00** should become **Ten dollars** and not
**Ten and 00/100 dollars** for now, although that would be easy to change (or
even make configurable if we wanted).

The formatting here is a little weird, but I'm going to use the model of
**$0.10** should become **Zero and 10/100 dollars**

### 5/19/2019

#### Parsing Remaining Patterns

I've created a dictionary of numbers from 0-20 and all of the powers of 10 up to
ninety. The next step is to implement parsing numbers that are between those
powers of 10 and greater than 20 (ie. 21-99). Probably from there the best
solution for handling all numbers will get hashed out, but I'm trying to keep
things segmented and organized.

### 5/20/2019

I think I'm pretty close to an "MVP" here. Next is implementing "thousands."

I've implemented up to $9999.99, and I now have to go to work. Some left over
work is to match the casing and formatting more precisely from the exercise.
Specifically, the hyphens in 20-99 (presumably) and only capitalizing the first
char.

### Must Haves

* ~~Handles Cents~~
* Handles all amounts up to trillion
  * ~~0 - 99~~
  * ~~100 - 1000~~
  * 10000 - 100000
  * 100000 - 1000000
  * 1mil - 1tril
* Error Handling
  * ~~Negative Numbers~~
  * More than 100 cents (increase dollar or error?)
  * Improper Input

### Nice To Haves

#### CI/CD

This is a simple enough project to add CI handling without to much overhead,
so I might experiment with adding CircleCI or something similar through GitHub.
This is a *stretch goal*.

#### Web View

It might be interesting to create a web UI for this as an experiment.

#### NPM

This could be published as a small library to NPM. It would be a good experience
to get more familiar with that service and all the surrounding infrastructure.

## Tech Used

* JavaScript (Node)
* npm
* Jasmine
* Karma