// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 允许多空格（对齐）
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          'Property':           true, // 多行对象属性冒号后多空格对齐
          'ImportDeclaration':  true, // import 语句 from 前多空格对齐
          'VariableDeclarator': true, // 等号前多空格对齐
          'ObjectExpression':   true  // 多个单行对象属性逗号后多空格对齐
        }
      }
    ],
    // 强制大话号风格
    'brace-style': ['error', 'stroustrup'] // 常见于 if else 语句折行语法
  }
}
