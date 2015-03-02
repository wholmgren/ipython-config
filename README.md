# ipython-config
Some ipython notebook configuration files.

I got tired of feeling my eyes squint when switching from my dark code editor and terminal to the bright IPython notebook. My color scheme is mostly a less-bright version of the default scheme.

The [base16](https://github.com/chriskempson/base16) and [base16 for IPython](https://github.com/nsonnad/base16-ipython-notebook) projects have some nice color schemes, too, but I couldn't find one that I both liked and worked well with inline figures.

Deploy with ``ln``:

``ln -s /home/will/git_repos/ipython-config/custom.css /home/will/.ipython/profile_default/static/custom/custom.css``
``ln -s /home/will/git_repos/ipython-config/custom.js /home/will/.ipython/profile_default/static/custom/custom.js``

To toggle the header just push ``t`` or execute the following in an ipython cell:

```ipython
%%javascript
showHeader()
```

```ipython
%%javascript
hideHeader()
```