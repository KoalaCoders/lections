# Git
## Install git
* Linux `$ yum install git-core` or `$ apt-get install git`
* Windows [http://msysgit.github.com/](http://msysgit.github.com/)

## Init project
```git
$ git init
```
![](./img/gitInit.png)
Now you at `master` branch.
## Create commit
Add `index.js` file.

### Check changes

```
$ git status
```

![](./img/gitStatus.png)

### Add file

```
$ git add *filename*
```

![](./img/gitAddFirst.png)

Then create `index.html` and `style.css`

![](./img/gitStatus2.png)

And add them all using `git add .`

![](./img/gitAdd2.png)

Commit them
```
$ git commit -m '*Commit message*'
```
![](./img/gitCommit.png)

## GitHub

Create repository

![](./img/repo.png)

Then paste in console
```
git remote add origin https://github.com/*username*/Git.git
git push -u origin master
```
![](./img/gitPush.png)

Let's check github

![](./img/repo2.png)

### Create pull request

Let's create new branch and change `index.html`

![](./img/flow.png)

Open github and create pull request

![](./img/pull.png)

or

![](./img/pull2.png)

then

![](./img/pull3.png)

When your create pull request you should show it for your team. And someone should review it.

![](./img/pull4.png)

Now you could to merge it
