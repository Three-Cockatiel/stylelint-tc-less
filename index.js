module.exports = {
  plugins: ["stylelint-prettier"],
  extends: [
    // standard 规则集合
    "stylelint-config-standard",
    // standard 规则集合的 scss 版本
    "stylelint-config-standard-less",
    "stylelint-prettier/recommended",
  ],
  rules: {
    // 开启 Prettier 自动格式化功能
    "prettier/prettier": true,
    "function-name-case": null, // 允许不检查函数名的大小写
    "function-no-unknown": null, // 允许使用未知的函数
    "selector-pseudo-class-no-unknown": null, // 允许使用未知的伪类选择器
  },
  ignoreFiles: ["**/*.(t|j)sx", "**/*.(t|j)s"], // 忽略 TypeScript 和 JavaScript 文件
};
