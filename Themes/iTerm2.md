For anyone that uses the terminal very frequently or also plans on using the terminal with Git I would recommend upgrading your Terminal to keep you sane while using the command line. 

** Install iTerm2 **
If you're still using the native Terminal on a Mac then I would recommend upgrading at atleast Iterm2. The native terminal is great but as you look to make your life easier iTerm2 has a lot of these featured built right in. To keep from having to switch down the line using iTerm2 from the start will better help you get comfortable with iTerm2. Another great feature is being about to run 2 panes giving you access to not only run a Node.js Server but also create and navigate folders in the other pane. 

https://www.iterm2.com/

** Install ZSH http://ohmyz.sh/ **
For any more advanced users who are really looking for an upgrade there is a shell called ZSH which has a ton of great features. In additon to upgraded features furturing cusomtizing the theme will greatly help your life. 

How To Install
install via cURL

```
$ sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

if this doesn't work then you can use 
```
curl -L http://install.ohmyz.sh | sh
```

* Installing a New Theme *
The next thing you might want to do is add a custom theme there are a lot of items for improvement. From background color, font, font-size and tab color. This isn't just made make your terminal more pretty but to better help you read and quickly see whats happening in your terminal. This part can be tricky and also the files are initially hidden on a Mac so I would recommend watching the following video for a nice step by step.
https://www.youtube.com/watch?v=XSeO6nnlWHw

Use `open /.zshrc` in order to open up hidden files from the command line

* Cobalt2 Theme *
https://github.com/wesbos/Cobalt2-iterm

I would recommend cloning the entire repo with `git clone https://github.com/wesbos/Cobalt2-iterm`

Quick Note:
Make sure when you're saving this it saves a document and not plain text. When I was setting the theme setting I would
try without quotations like the following ZSH_THEME=colbalt2

* Installing pip *
If you're installing the above theme a lot of users are going to want the ability to use powerline fonts in their theme.
Wes Bos recommend going through the pip website in order install this but I found trouble with this.

I think the following was easier
`sudo easy_install pip`

All these steps are really going to better help you with day to day in the terminal. In additon to clear color it also has built into the theme a way to see what current branch you're in if this is a Git Repo. This makes it extremely valuable when using the Terminal in addition to Git. 
