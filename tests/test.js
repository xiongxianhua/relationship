'use strict';
var test = require('tape');
var relationship = require('..');

test('relationship.js show to be tested', function (t) {
  // TODO
  t.deepEqual(relationship({text:'儿子的爸爸的妈妈',sex:1}),['妈妈']);
  t.deepEqual(relationship({text:'爱人',sex:1}),['老婆']);
  t.deepEqual(relationship({text:'爱人的爱人',sex:1}),['自己']);
  t.deepEqual(relationship({text:'老婆的爱人',sex:1}),['自己']);
  t.deepEqual(relationship({text:'老婆的老公',sex:1}),['自己']);
  t.deepEqual(relationship({text:'老婆的外孙的姥爷',sex:1}),['自己']);
  t.deepEqual(relationship({text:'表姐的哥哥',sex:1}),['姑表哥','舅表哥','姨表哥']);
  t.deepEqual(relationship({text:'表姐的妹妹',sex:1}),['姑表姐','姑表妹','舅表姐','舅表妹','姨表姐','姨表妹']);
  t.deepEqual(relationship({text:'老公的老婆的儿子的爸爸',sex:0}),['老公']);
  t.deepEqual(relationship({text:'哥哥的弟弟的爸爸的儿子',sex:1}),['兄弟','自己']);
  t.deepEqual(relationship({text:'爸爸的舅舅',sex:0,reverse:true}),['外甥孙女']);
  t.deepEqual(relationship({text:'舅爷爷',type:'chain'}),['爸爸的妈妈的兄弟']);

  t.end();
});
