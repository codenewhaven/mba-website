# Interactive Websites

Obviously, websites are more complicated than the simple HTML stuff
we have done so far. You want to do more than post pictures and
links. You want some form of interactivity. On Facebook, when you
click Like on a post, the page changes for you and your friends.
Wouldn't that be nice?

## Example: Facebook Liking

Somewhere, Facebook has an instruction like this:

    When the user clicks LIKE on a POST, UPDATE list of users who liked the post.

It's probably in their testing code. If Facebook fails to do that, something
is wrong. So what does Facebook need to do in order to make that happen?
Think about it:

    When you click "Like," Facebook needs to:

    - Change link on screen to say "Liked"
    - Disable clicking link on screen
    - Update number of "likes" on the screen

**But those changes only happen on your computer.**

Facebook also needs to change its internal representations
the post, so that future users see that you "liked" it.

    When you click "Like", Facebook servers need to:

    - Increment a counter somewhere that looks like [<postID>, <num_likes>]
    - When future users visit the page, make sure to display up-to-date count"

These changes happen away from your computer, on Facebook servers.

# Backend and Frontend

The changes on Facebook's server are called **backend** changes,
and the changes on your computer are called **frontend** changes.
In general, frontend code is HTML, Javascript, and CSS code that
runs in your browser.

Seriously. You `Cmd+Alt+U` to *view source* at any time, and see
the code your browser uses to **render** the Facebook website.

## Frontend

When you go to Facebook.com, your browser downloads an HTML file
that instructs it to do a bunch of things.

    1) Download all necessary images

    2) Download .css files with style instructions -- colors, shapes, etc.

    3) Download .js (Javascript) files for interactivity instructions.

Inside the .js files are instructions for how the browser should
respond to **events**, like the "event" of a user clicking "Like"
on a post. The Javascript code can tell the browser to do almost
anything.

In this case, it tells the browser to contact Facebook's servers
and tell them that you just liked this post. Somewhere, there is
a notification that looks like `{event: 'like', user: 'miles', postID: 12345}`.
The Javascript code tells the browser to send that notification to Facebook's
servers.

## Backend

The **backend** code running on Facebook's servers receives that event,
and decides what to do. In this case, Facebook needs to update the counter
of people who liked the post.

## The Difference

- Frontend code
    - Executes in your browser.
    - Only HTML, Javascript, and/or CSS. (Whatever your browser supports!)
- Backend code
    - Executes on external servers somewhere.
    - Written in any language. Python, C, C++, Java, PHP, Ruby, ...
    - Can be arbitrarily complicated, even running on thousands of computers.

The important thing to remember is that **you need backend code to persist
state between users. **That is, if you want to make a change so that everybody
visiting the website sees it, you need backend code.

# Interactivity without backend code
