# Angular官方快速入门项目(中文简化)

## 安装

### 安装node
Node.js和npm对于Angular至关重要。

如果它尚未安装在您的机器上，请<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
立即获取</a>

**请先在终端/控制台窗口中运行命令`node -v`和`npm -v`来验证一下你正在运行 node 6.9.x 和 npm 3.x.x 以上的版本。 更老的版本可能会出现错误，更新的版本则没问题。**

建议使用 [nvm](https://github.com/creationix/nvm) 来管理node和npm的多个版本。

### 安装Angular脚手架
```shell
npm install -g @angular/cli
```
**(如果因网络原因安装失败，建议用cnpm来替换npm)**

## 基于QuickStart创建一个新的项目

将此repo复制到新的项目文件夹（例如，my-proj）(例如, `my-proj`).中。
```shell
git clone https://github.com/angular/quickstart  my-proj
cd my-proj
```

## 安装npm包

> 请参阅上面的npm和nvm版本注释

安装 `package.json` 所述的公共管理软件包

```shell
npm install
```
**(如果因网络原因安装失败，建议用cnpm来替换npm)**

并验证它是否工作

```shell
npm start
```
该`npm start`命令首先编译应用程序，然后同时重新编译并运行`lite-server`。编译器和服务器都会监视文件的更改。

`Ctrl C`手动关闭

至此，本应用程序已经搭建完毕