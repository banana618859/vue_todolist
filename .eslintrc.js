/*
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2020-11-15 20:07:25
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2020-11-15 21:42:06
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
