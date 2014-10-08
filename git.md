Git
===

What is Git?
---

Git is a tool that coders use to share code and keep track of changes they've made. Ever rewritten a paragraph of an essay, not liked how it turned it out, and wished you could go back to your previous of that paragraph? Well, that's what Git and other types of _version control_ software do for code. They allow you to go to previous points of your work where you've saved, or _committed_ your changes.


Ok, great. What can it do for me?
---

We are going to use Git to periodically save the state of our website as we make changes. After we have our code saved with Git, we can then _push_ it to _remote repositories_. What the heck is a repository? Essentially, you can think of a repository as a folder. Whenever you use Git on your machine, you are working in a _local_ repository. "Local" means the computer directly in front of you, that you're working on. A _remote_ repository is a repository that is on a different computer that's connected to yours over a _network_. You've probably heard of the network that we're going to use today: **The Internet**.

Sweet! Now we can move our code to other computers. Why should I care? Well, by _pushing_ our code to a special kind of computer called a _webhost_, we can make it available for other people to find on the web. If you just have your .html file sitting on your computer, you can view it _locally_ (meaning you open the file in your web browser), but nobody else can see it (would you want people to be able to see random files on your computer?). So, we need to _push_ the webpage to a public computer, whose job it is to _serve_ your webpage to whoever wants to see it. Thankfully, Github makes this super simple.

Before we learn more about Git and all of its magical code management powers, we need to learn about the application that will allow us to use to use Git (bear with me). We use git through a special program called the **terminal**. The terminal allows us to interact with the computer in a different way than we normally do. While I'm sure you're used to clicking around to open files and folders, in the terminal we do everything from the keyboard. When we _execute_ commands, we're really just running programs. It's a lot like clicking on an application's icon, but in a way that's easier for the computer to understand.

The terminal also allows us to navigate the _file system_, which is just a fancy way of saying all of our folders. In the first exercise we are going to learn about some basic _commands_. Commands are how we tell the terminal what we want to do.


Exercise 1
---
### 1.1 - Open the Terminal
 So, open up the Terminal application. You can do this by hitting Cmd+Space to open Spotlight, then typing in "terminal". Terminal should be one of the first applications that pops up. Select it and hit Enter to open the Terminal. 

### 1.2 - Where are we?
Word. So now you should see a black window with a blinking cursor. It looks like something you'd see in a hacker movie, right? Anyway, let's orient ourselves. We can do this by entering the `pwd` command. We run a command by pressing Enter. So, type

        pwd

into your terminal and hit Enter. The terminal should spit  our a long sequence of words separated by slashes. For example, when I enter `pwd` in my terminal, it spits out:

        /Users/will

The weird string of words separated by slashes is what's called a _path_ or _filepath_. It's how the comptuter locates files and folders internally. We are currently in what is called the home directory (directory is just a fancy word for folder). For our purposes, it's where we'll be doing a lot of our work. So what's in our home directory? Well we can find out in two ways:
        
1. using Finder
 - open up Spotlight again by hitting Cmd+Space, and type in "finder". Select "Finder" 
 - click on your name with the little house icon next to it in the left-hand side pane. 
2. using the `ls` command
 - type "ls" into the terminal
 - hit Enter

 Notice any similarities between what you see in Finder and what is spit out by the Terminal?




