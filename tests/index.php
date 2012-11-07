<?php
$testName = str_replace('.', '/', $_GET['t']);

if (mb_substr($testName, 0, -4) !== 'Test') {
  $testName .= 'Test';
}
?><!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Run <?= $testName ?></title>
  <link rel="stylesheet" href="/vendor/qunit/qunit-1.10.0.css">
  <link rel="stylesheet" href="/vendor/jqwidgets/styles/jqx.base.css" type="text/css" />
  <link rel="stylesheet" href="/css/tests.css" type="text/css" />
  
</head>
<body>
  <div id="qunit"></div>
  <div id="qunit-fixture">test markup, will be hidden</div>
  <div id="visible-fixture">visible test markup</div>
  
  <script src="/vendor/require.js"></script>
  <script>
    require(["/lib/main.js"], function () {
      require(["../tests/testRunner"], function (runner) {
        runner.run('<?= $testName ?>');
      });
    });
  </script>
</body>
</html>